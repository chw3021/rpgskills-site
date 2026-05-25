import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { PageHeader } from '../../components/ui/PageHeader';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { isFirebaseConfigured } from '../../lib/firebase';
import {
  createComment,
  deleteComment,
  deletePost,
  markQnaSolved,
  subscribeComments,
  subscribePost,
} from '../../services/communityDb';
import type { BoardId, CommunityComment, CommunityPost } from '../../types/community';
import { boardBasePath, boardEditPath } from '../../utils/communityPaths';

type Props = {
  boardId: BoardId;
};

export function CommunityPostDetailPage({ boardId }: Props) {
  const { postId } = useParams<{ postId: string }>();
  const { t } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();
  const copy = boardId === 'free' ? t.community.free : t.community.qna;

  const [post, setPost] = useState<CommunityPost | null>(null);
  const [postReady, setPostReady] = useState(!isFirebaseConfigured());
  const [comments, setComments] = useState<CommunityComment[]>([]);
  const [commentBody, setCommentBody] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const id = postId ?? '';

  useEffect(() => {
    if (!isFirebaseConfigured() || !id) {
      setPostReady(true);
      return;
    }
    setPostReady(false);
    const unsubPost = subscribePost(boardId, id, (p) => {
      setPost(p);
      setPostReady(true);
    });
    const unsubComments = subscribeComments(boardId, id, setComments);
    return () => {
      unsubPost();
      unsubComments();
    };
  }, [boardId, id]);

  async function handleComment(e: FormEvent) {
    e.preventDefault();
    if (!user || !commentBody.trim() || !id) return;
    setSubmitting(true);
    setError(null);
    try {
      await createComment(boardId, id, user, { body: commentBody });
      setCommentBody('');
    } catch (err) {
      setError(err instanceof Error ? err.message : t.community.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeletePost() {
    if (!user || !id) return;
    setError(null);
    try {
      await deletePost(boardId, id, user);
      navigate(boardBasePath(boardId), { replace: true });
    } catch (err) {
      setError(err instanceof Error ? err.message : t.community.errorGeneric);
    }
  }

  if (!postReady) {
    return (
      <>
        <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
        <AuthBar />
        <p className="text-muted">{t.community.loading}</p>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
        <AuthBar />
        <p className="community-empty">{copy.notFound}</p>
        <p>
          <Link to={boardBasePath(boardId)}>← {copy.back}</Link>
        </p>
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
            <Link to={boardEditPath(boardId, id)} className="btn btn-ghost">
              {copy.editPost}
            </Link>
            {boardId === 'qna' ? (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  void markQnaSolved(boardId, id, user!, !post.solved).catch((err) =>
                    setError(err instanceof Error ? err.message : t.community.errorGeneric),
                  )
                }
              >
                {post.solved ? copy.markOpen : copy.markSolved}
              </button>
            ) : null}
            <button type="button" className="btn btn-ghost btn-danger" onClick={() => void handleDeletePost()}>
              {copy.deletePost}
            </button>
          </div>
        ) : null}
      </article>

      <section className="community-comments">
        <h2>
          {copy.comments} ({comments.length})
        </h2>
        {comments.length === 0 ? null : (
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
                      void deleteComment(boardId, id, c.id, user).catch((err) =>
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
        )}

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
