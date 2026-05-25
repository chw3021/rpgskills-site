import { useEffect, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { PageHeader } from '../../components/ui/PageHeader';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { isFirebaseConfigured } from '../../lib/firebase';
import { createPost, subscribePost, updatePost } from '../../services/communityDb';
import type { BoardId, CommunityPost } from '../../types/community';
import { boardBasePath, boardPostPath } from '../../utils/communityPaths';

type Props = {
  boardId: BoardId;
  mode: 'new' | 'edit';
};

export function CommunityPostFormPage({ boardId, mode }: Props) {
  const { postId } = useParams<{ postId?: string }>();
  const { t } = useI18n();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const copy = boardId === 'free' ? t.community.free : t.community.qna;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [sourcePost, setSourcePost] = useState<CommunityPost | null>(null);
  const [ready, setReady] = useState(mode === 'new');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const id = postId ?? '';
  const formTitle = mode === 'new' ? copy.newPost : copy.editPost;

  useEffect(() => {
    if (mode !== 'edit' || !isFirebaseConfigured() || !id) return;
    setReady(false);
    const unsub = subscribePost(boardId, id, (post) => {
      setSourcePost(post);
      if (post) {
        setTitle(post.title);
        setBody(post.body);
      }
      setReady(true);
    });
    return unsub;
  }, [boardId, id, mode]);

  useEffect(() => {
    if (!authLoading && !user && isFirebaseConfigured()) {
      navigate(boardBasePath(boardId));
    }
  }, [authLoading, user, navigate, boardId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user || !title.trim() || !body.trim()) return;
    setSubmitting(true);
    setError(null);
    try {
      if (mode === 'new') {
        const newId = await createPost(boardId, user, { title, body });
        navigate(boardPostPath(boardId, newId), { replace: true });
      } else if (id) {
        await updatePost(boardId, id, user, { title, body });
        navigate(boardPostPath(boardId, id), { replace: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : t.community.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  }

  if (mode === 'edit' && ready && isFirebaseConfigured() && id && !sourcePost) {
    return (
      <>
        <PageHeader title={formTitle} description={copy.pageDescription} />
        <AuthBar />
        <p className="community-empty">{copy.notFound}</p>
        <p>
          <Link to={boardBasePath(boardId)}>← {copy.back}</Link>
        </p>
      </>
    );
  }

  if (!ready || authLoading) {
    return (
      <>
        <PageHeader title={formTitle} description={copy.pageDescription} />
        <AuthBar />
        <p className="text-muted">{t.community.loading}</p>
      </>
    );
  }

  return (
    <>
      <PageHeader title={formTitle} description={copy.pageDescription} />
      <AuthBar />
      <p>
        <Link to={boardBasePath(boardId)}>← {copy.back}</Link>
      </p>
      {error ? <p className="community-error">{error}</p> : null}

      {user && isFirebaseConfigured() ? (
        <form className="community-form card" onSubmit={(e) => void handleSubmit(e)}>
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
            rows={8}
            maxLength={8000}
            required
          />
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {mode === 'new' ? copy.submit : copy.saveEdit}
          </button>
        </form>
      ) : null}
    </>
  );
}
