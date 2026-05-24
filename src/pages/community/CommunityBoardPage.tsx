import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { PageHeader } from '../../components/ui/PageHeader';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { isFirebaseConfigured } from '../../lib/firebase';
import {
  createComment,
  createPost,
  deleteComment,
  deletePost,
  markQnaSolved,
  subscribeComments,
  subscribePost,
  subscribePosts,
} from '../../services/communityDb';
import type { BoardId, CommunityComment, CommunityPost } from '../../types/community';

type Props = {
  boardId: BoardId;
};

function boardBasePath(boardId: BoardId): string {
  return boardId === 'free' ? '/community/free' : '/community/qna';
}

export function CommunityBoardPage({ boardId }: Props) {
  const { postId } = useParams<{ postId?: string }>();
  const { t } = useI18n();

  const copy = boardId === 'free' ? t.community.free : t.community.qna;

  if (postId) {
    return <PostDetail boardId={boardId} postId={postId} copy={copy} />;
  }

  return <PostList boardId={boardId} copy={copy} />;
}

type BoardCopy = {
  pageTitle: string;
  pageDescription: string;
  newPost: string;
  empty: string;
  titlePlaceholder: string;
  bodyPlaceholder: string;
  submit: string;
  back: string;
  comments: string;
  commentPlaceholder: string;
  addComment: string;
  deletePost: string;
  deleteComment: string;
  solved: string;
  markSolved: string;
  markOpen: string;
  solvedBadge: string;
};

function PostList({ boardId, copy }: { boardId: BoardId; copy: BoardCopy }) {
  const { t } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    const unsub = subscribePosts(boardId, setPosts, (e) => setError(e.message));
    return unsub;
  }, [boardId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user || !title.trim() || !body.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      const id = await createPost(boardId, user, { title, body });
      setTitle('');
      setBody('');
      navigate(`${boardBasePath(boardId)}/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : t.community.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
      <AuthBar />
      {error ? <p className="community-error">{error}</p> : null}

      {user && isFirebaseConfigured() ? (
        <form className="community-form card" onSubmit={(e) => void handleSubmit(e)}>
          <h2>{copy.newPost}</h2>
          <label>
            <span className="sr-only">{copy.titlePlaceholder}</span>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={copy.titlePlaceholder}
              maxLength={120}
              required
            />
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={copy.bodyPlaceholder}
            rows={5}
            maxLength={8000}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {copy.submit}
          </button>
        </form>
      ) : null}

      <section className="community-list">
        {posts.length === 0 ? (
          <p className="text-muted">{copy.empty}</p>
        ) : (
          <ul className="community-posts">
            {posts.map((post) => (
              <li key={post.id}>
                <Link to={`${boardBasePath(boardId)}/${post.id}`} className="community-post-link">
                  <span className="community-post-title">
                    {boardId === 'qna' && post.solved ? (
                      <span className="badge badge-solved">{copy.solvedBadge}</span>
                    ) : null}
                    {post.title}
                  </span>
                  <span className="community-post-meta">
                    {post.authorDisplayName} · {formatDate(post.createdAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

function PostDetail({
  boardId,
  postId,
  copy,
}: {
  boardId: BoardId;
  postId: string;
  copy: BoardCopy;
}) {
  const { t } = useI18n();
  const { user } = useAuth();
  const [post, setPost] = useState<CommunityPost | null>(null);
  const [comments, setComments] = useState<CommunityComment[]>([]);
  const [commentBody, setCommentBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    const unsubPost = subscribePost(boardId, postId, setPost);
    const unsubComments = subscribeComments(boardId, postId, setComments);
    return () => {
      unsubPost();
      unsubComments();
    };
  }, [boardId, postId]);

  async function handleComment(e: FormEvent) {
    e.preventDefault();
    if (!user || !commentBody.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      await createComment(boardId, postId, user, { body: commentBody });
      setCommentBody('');
    } catch (err) {
      setError(err instanceof Error ? err.message : t.community.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  if (!post) {
    return (
      <>
        <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
        <AuthBar />
        <p>{t.community.loading}</p>
      </>
    );
  }

  const isAuthor = user?.uid === post.authorUid;

  return (
    <>
      <PageHeader title={post.title} description={copy.pageDescription} />
      <AuthBar />
      <p>
        <Link to={boardBasePath(boardId)}>← {copy.back}</Link>
      </p>
      {error ? <p className="community-error">{error}</p> : null}

      <article className="card community-article">
        <header className="community-article__head">
          <span>
            {post.authorDisplayName} · {formatDate(post.createdAt)}
          </span>
          {boardId === 'qna' && post.solved ? (
            <span className="badge badge-solved">{copy.solvedBadge}</span>
          ) : null}
        </header>
        <div className="community-article__body">{post.body}</div>
        {isAuthor ? (
          <div className="community-article__actions">
            {boardId === 'qna' ? (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  void markQnaSolved(boardId, postId, user!, !post.solved).catch((err) =>
                    setError(err instanceof Error ? err.message : t.community.errorGeneric),
                  )
                }
              >
                {post.solved ? copy.markOpen : copy.markSolved}
              </button>
            ) : null}
            <button
              type="button"
              className="btn btn-ghost btn-danger"
              onClick={() =>
                void deletePost(boardId, postId, user!).catch((err) =>
                  setError(err instanceof Error ? err.message : t.community.errorGeneric),
                )
              }
            >
              {copy.deletePost}
            </button>
          </div>
        ) : null}
      </article>

      <section className="community-comments">
        <h2>
          {copy.comments} ({comments.length})
        </h2>
        <ul>
          {comments.map((c) => (
            <li key={c.id} className="card community-comment">
              <div className="community-comment__meta">
                {c.authorDisplayName} · {formatDate(c.createdAt)}
              </div>
              <p>{c.body}</p>
              {user?.uid === c.authorUid ? (
                <button
                  type="button"
                  className="btn btn-ghost btn-danger"
                  onClick={() =>
                    void deleteComment(boardId, postId, c.id, user).catch((err) =>
                      setError(err instanceof Error ? err.message : t.community.errorGeneric),
                    )
                  }
                >
                  {copy.deleteComment}
                </button>
              ) : null}
            </li>
          ))}
        </ul>

        {user && isFirebaseConfigured() ? (
          <form className="community-form" onSubmit={(e) => void handleComment(e)}>
            <textarea
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              placeholder={copy.commentPlaceholder}
              rows={3}
              maxLength={4000}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {copy.addComment}
            </button>
          </form>
        ) : null}
      </section>
    </>
  );
}

function formatDate(ms: number): string {
  if (!ms) return '';
  return new Date(ms).toLocaleString();
}
