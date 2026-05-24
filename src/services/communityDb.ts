import {
  get,
  onValue,
  push,
  ref,
  remove,
  runTransaction,
  set,
  update,
  type Unsubscribe,
} from 'firebase/database';
import type { User } from 'firebase/auth';
import { getFirebaseDatabase } from '../lib/firebase';
import type {
  BoardId,
  CommunityComment,
  CommunityPost,
  NewCommentInput,
  NewPostInput,
} from '../types/community';

function postsRef(boardId: BoardId) {
  return ref(getFirebaseDatabase(), `boards/${boardId}`);
}

function postRef(boardId: BoardId, postId: string) {
  return ref(getFirebaseDatabase(), `boards/${boardId}/${postId}`);
}

function commentsRef(boardId: BoardId, postId: string) {
  return ref(getFirebaseDatabase(), `boards/${boardId}/${postId}/comments`);
}

function commentRef(boardId: BoardId, postId: string, commentId: string) {
  return ref(getFirebaseDatabase(), `boards/${boardId}/${postId}/comments/${commentId}`);
}

function visitorRef(dateKey: string) {
  return ref(getFirebaseDatabase(), `stats/visitors/daily/${dateKey}`);
}

function mapPost(id: string, raw: Record<string, unknown>): CommunityPost {
  return {
    id,
    title: String(raw.title ?? ''),
    body: String(raw.body ?? ''),
    authorUid: String(raw.authorUid ?? ''),
    authorDisplayName: String(raw.authorDisplayName ?? 'Anonymous'),
    authorPhotoURL: raw.authorPhotoURL ? String(raw.authorPhotoURL) : null,
    createdAt: Number(raw.createdAt ?? 0),
    updatedAt: Number(raw.updatedAt ?? 0),
    solved: raw.solved === true,
  };
}

function mapComment(id: string, raw: Record<string, unknown>): CommunityComment {
  return {
    id,
    body: String(raw.body ?? ''),
    authorUid: String(raw.authorUid ?? ''),
    authorDisplayName: String(raw.authorDisplayName ?? 'Anonymous'),
    authorPhotoURL: raw.authorPhotoURL ? String(raw.authorPhotoURL) : null,
    createdAt: Number(raw.createdAt ?? 0),
  };
}

export function subscribePosts(
  boardId: BoardId,
  onData: (posts: CommunityPost[]) => void,
  onError?: (error: Error) => void,
): Unsubscribe {
  return onValue(
    postsRef(boardId),
    (snap) => {
      const list: CommunityPost[] = [];
      snap.forEach((child) => {
        if (child.key === 'comments' || !child.key) return;
        const val = child.val();
        if (!val || typeof val !== 'object' || !val.title) return;
        list.push(mapPost(child.key, val as Record<string, unknown>));
      });
      list.sort((a, b) => b.createdAt - a.createdAt);
      onData(list);
    },
    (err) => onError?.(err),
  );
}

export function subscribePost(
  boardId: BoardId,
  postId: string,
  onData: (post: CommunityPost | null) => void,
): Unsubscribe {
  return onValue(postRef(boardId, postId), (snap) => {
    if (!snap.exists()) {
      onData(null);
      return;
    }
    const val = snap.val() as Record<string, unknown>;
    onData(mapPost(postId, val));
  });
}

export function subscribeComments(
  boardId: BoardId,
  postId: string,
  onData: (comments: CommunityComment[]) => void,
): Unsubscribe {
  return onValue(commentsRef(boardId, postId), (snap) => {
    const list: CommunityComment[] = [];
    snap.forEach((child) => {
      if (!child.key) return;
      list.push(mapComment(child.key, child.val() as Record<string, unknown>));
    });
    list.sort((a, b) => a.createdAt - b.createdAt);
    onData(list);
  });
}

export async function createPost(
  boardId: BoardId,
  user: User,
  input: NewPostInput,
): Promise<string> {
  const now = Date.now();
  const newRef = push(postsRef(boardId));
  const id = newRef.key;
  if (!id) throw new Error('Failed to create post id');

  await set(newRef, {
    title: input.title.trim(),
    body: input.body.trim(),
    authorUid: user.uid,
    authorDisplayName: user.displayName || user.email || 'User',
    authorPhotoURL: user.photoURL,
    createdAt: now,
    updatedAt: now,
    ...(boardId === 'qna' ? { solved: false } : {}),
  });
  return id;
}

export async function createComment(
  boardId: BoardId,
  postId: string,
  user: User,
  input: NewCommentInput,
): Promise<void> {
  const newRef = push(commentsRef(boardId, postId));
  await set(newRef, {
    body: input.body.trim(),
    authorUid: user.uid,
    authorDisplayName: user.displayName || user.email || 'User',
    authorPhotoURL: user.photoURL,
    createdAt: Date.now(),
  });
  await update(postRef(boardId, postId), { updatedAt: Date.now() });
}

export async function deletePost(boardId: BoardId, postId: string, user: User): Promise<void> {
  const snap = await get(postRef(boardId, postId));
  if (!snap.exists()) return;
  const data = snap.val() as { authorUid?: string };
  if (data.authorUid !== user.uid) {
    throw new Error('Not allowed');
  }
  await remove(postRef(boardId, postId));
}

export async function deleteComment(
  boardId: BoardId,
  postId: string,
  commentId: string,
  user: User,
): Promise<void> {
  const snap = await get(commentRef(boardId, postId, commentId));
  if (!snap.exists()) return;
  const data = snap.val() as { authorUid?: string };
  if (data.authorUid !== user.uid) {
    throw new Error('Not allowed');
  }
  await remove(commentRef(boardId, postId, commentId));
}

export async function markQnaSolved(
  boardId: BoardId,
  postId: string,
  user: User,
  solved: boolean,
): Promise<void> {
  const snap = await get(postRef(boardId, postId));
  if (!snap.exists()) return;
  const data = snap.val() as { authorUid?: string };
  if (data.authorUid !== user.uid) {
    throw new Error('Not allowed');
  }
  await update(postRef(boardId, postId), { solved, updatedAt: Date.now() });
}

export function todayDateKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function subscribeTodayVisitors(onCount: (count: number) => void): Unsubscribe {
  const key = todayDateKey();
  return onValue(visitorRef(key), (snap) => {
    onCount(snap.exists() ? Number(snap.val()) || 0 : 0);
  });
}

export async function recordTodayVisit(): Promise<void> {
  const key = todayDateKey();
  const storageKey = `rpgskills-visit-${key}`;
  if (sessionStorage.getItem(storageKey)) return;
  sessionStorage.setItem(storageKey, '1');

  await runTransaction(visitorRef(key), (current) => {
    if (current === null || current === undefined) return 1;
    if (typeof current !== 'number') return 1;
    return current + 1;
  });
}
