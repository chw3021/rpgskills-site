import type { BoardId } from '../types/community';

export function boardBasePath(boardId: BoardId): string {
  return boardId === 'free' ? '/community/free' : '/community/qna';
}

export function boardNewPath(boardId: BoardId): string {
  return `${boardBasePath(boardId)}/new`;
}

export function boardPostPath(boardId: BoardId, postId: string): string {
  return `${boardBasePath(boardId)}/${postId}`;
}

export function boardEditPath(boardId: BoardId, postId: string): string {
  return `${boardBasePath(boardId)}/${postId}/edit`;
}
