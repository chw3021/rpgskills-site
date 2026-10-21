import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { Avatar } from '../../components/community/Avatar';
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
import { formatDate } from '../../utils/formatDate';

type Props = {
  boardId: BoardId;
};

export function CommunityPostDetailPage({ boardId }: Props) {
  const { postId } = useParams<{ postId: string }>();
  const { locale, t } = useI18n();
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
    const onError = (e: Error) => {
      setError(e.message);
      setPostReady(true);
    };
    const unsubPost = subscribePost(
      boardId,
      id,
      (p) => {
        setPost(p);
        setPostReady(true);
      },
      onError,
    );
    const unsubComments = subscribeComments(boardId, id, setComments, onError);
    return () => {
      unsubPost();
      unsubComments();
    };
  }, [boardId, id]);

  const reportError = (err: unknown) =>
    setError(err instanceof Error ? err.message : t.community.errorGeneric);

  async function handleComment(e: FormEvent) {
    e.preventDefault();
    if (!user || !commentBody.trim() || !id) return;
    setSubmitting(true);
    setError(null);
    try {
      await createComment(boardId, id, user, { body: commentBody });
      setCommentBody('');
    } catch (err) {
      reportError(err);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDeletePost() {
    if (!user || !id || !window.confirm(copy.confirmDeletePost)) return;
    setError(null);
    try {
      await deletePost(boardId, id, user);
      navigate(boardBasePath(boardId), { replace: true });
    } catch (err) {
      reportError(err);
    }
  }

  function handleDeleteComment(commentId: string) {
    if (!user || !window.confirm(copy.confirmDeleteComment)) return;
    void deleteComment(boardId, id, commentId, user).catch(reportError);
  }

  const backLink = (
    <Link to={boardBasePath(boardId)} className="back-link">
      ← {copy.back}
    </Link>
  );

  if (!postReady || !post) {
    return (
      <>
        <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
        <AuthBar />
        {backLink}
        {error ? <p className="community-error">{error}</p> : null}
        <p className="community-empty">{!postReady ? t.community.loading : copy.notFound}</p>
      </>
    );
  }

  const isAuthor = user?.uid === post.authorUid;
  const edited = post.updatedAt - post.createdAt > 60_000;

  return (
    <>
      <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
      <AuthBar />
      {backLink}
      {error ? <p className="community-error">{error}</p> : null}

      <article className="community-article">
        <header className="community-article__head">
          <h2 className="community-article__title">
            {boardId === 'qna' && post.solved ? (
              <span className="badge badge-solved">{copy.solvedBadge}</span>
            ) : null}
            {post.title}
          </h2>
          <div className="community-article__meta">
            <Avatar name={post.authorDisplayName} photoURL={post.authorPhotoURL} />
            <span className="community-article__author">{post.authorDisplayName}</span>
            <span>·</span>
            <time dateTime={new Date(post.createdAt).toISOString()}>
              {formatDate(post.createdAt, locale)}
            </time>
            {edited ? <span className="community-article__edited">({t.community.edited})</span> : null}
          </div>
        </header>
        <div className="community-article__body">{post.body}</div>
        {isAuthor && user ? (
          <div className="community-article__actions">
            <Link to={boardEditPath(boardId, id)} className="btn btn-ghost btn-sm">
              {copy.editPost}
            </Link>
            {boardId === 'qna' ? (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => void markQnaSolved(boardId, id, user, !post.solved).catch(reportError)}
              >
                {post.solved ? copy.markOpen : copy.markSolved}
              </button>
            ) : null}
            <button
              type="button"
              className="btn btn-ghost btn-danger btn-sm"
              onClick={() => void handleDeletePost()}
            >
              {copy.deletePost}
            </button>
          </div>
        ) : null}
      </article>

      <section className="community-comments">
        <h3 className="community-comments__title">
          {copy.comments} <span className="community-comments__count">{comments.length}</span>
        </h3>
        {comments.length === 0 ? null : (
          <ul className="community-comments__list">
            {comments.map((c) => (
              <li key={c.id} className="community-comment">
                <Avatar name={c.authorDisplayName} photoURL={c.authorPhotoURL} />
                <div className="community-comment__main">
                  <div className="community-comment__meta">
                    <span className="community-comment__author">{c.authorDisplayName}</span>
                    <span>{formatDate(c.createdAt, locale)}</span>
                    {user?.uid === c.authorUid ? (
                      <button
                        type="button"
                        className="community-comment__delete"
                        onClick={() => handleDeleteComment(c.id)}
                      >
                        {copy.deleteComment}
                      </button>
                    ) : null}
                  </div>
                  <p className="community-comment__body">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {user && isFirebaseConfigured() ? (
          <form className="community-form community-form--comment" onSubmit={(e) => void handleComment(e)}>
            <textarea
              className="input"
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              placeholder={copy.commentPlaceholder}
              aria-label={copy.commentPlaceholder}
              rows={3}
              maxLength={4000}
              required
            />
            <div className="community-form__footer">
              <span className="community-form__counter">{commentBody.length} / 4000</span>
              <button type="submit" className="btn btn-primary" disabled={submitting || !commentBody.trim()}>
                {copy.addComment}
              </button>
            </div>
          </form>
        ) : null}
      </section>
    </>
  );
}
