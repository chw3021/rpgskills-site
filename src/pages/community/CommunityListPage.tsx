import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { CommunityToolbar, PAGE_SIZE } from '../../components/community/CommunityToolbar';
import { PageHeader } from '../../components/ui/PageHeader';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { isFirebaseConfigured } from '../../lib/firebase';
import { subscribePosts } from '../../services/communityDb';
import type { BoardId, CommunityPost } from '../../types/community';
import { boardNewPath, boardPostPath } from '../../utils/communityPaths';

type Props = {
  boardId: BoardId;
};

export function CommunityListPage({ boardId }: Props) {
  const { t } = useI18n();
  const { user } = useAuth();
  const copy = boardId === 'free' ? t.community.free : t.community.qna;

  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [ready, setReady] = useState(!isFirebaseConfigured());
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!isFirebaseConfigured()) return;
    setReady(false);
    const unsub = subscribePosts(
      boardId,
      (list) => {
        setPosts(list);
        setReady(true);
      },
      (e) => {
        setError(e.message);
        setReady(true);
      },
    );
    return unsub;
  }, [boardId]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q),
    );
  }, [posts, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <PageHeader title={copy.pageTitle} description={copy.pageDescription} />
      <AuthBar />
      {error ? <p className="community-error">{error}</p> : null}

      <div className="community-list-actions">
        {user && isFirebaseConfigured() ? (
          <Link to={boardNewPath(boardId)} className="btn btn-primary">
            {copy.writePost}
          </Link>
        ) : null}
      </div>

      <CommunityToolbar
        copy={copy}
        pageOfTemplate={t.community.pageOf}
        search={search}
        onSearchChange={setSearch}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />

      <section className="community-list" aria-busy={!ready}>
        {!ready ? (
          <p className="text-muted">{t.community.loading}</p>
        ) : posts.length === 0 ? (
          <p className="community-empty">{copy.empty}</p>
        ) : filtered.length === 0 ? (
          <p className="community-empty">{copy.noSearchResults}</p>
        ) : (
          <ul className="community-posts">
            {paged.map((post) => (
              <li key={post.id}>
                <Link to={boardPostPath(boardId, post.id)} className="community-post-link">
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

function formatDate(ms: number): string {
  if (!ms) return '';
  return new Date(ms).toLocaleString();
}
