import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthBar } from '../../components/community/AuthBar';
import { Avatar } from '../../components/community/Avatar';
import {
  CommunityPagination,
  CommunityToolbar,
  PAGE_SIZE,
} from '../../components/community/CommunityToolbar';
import { PageHeader } from '../../components/ui/PageHeader';
import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { isFirebaseConfigured } from '../../lib/firebase';
import { subscribePosts } from '../../services/communityDb';
import type { BoardId, CommunityPost } from '../../types/community';
import { boardNewPath, boardPostPath } from '../../utils/communityPaths';
import { formatDate } from '../../utils/formatDate';

type Props = {
  boardId: BoardId;
};

export function CommunityListPage({ boardId }: Props) {
  const { locale, t } = useI18n();
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
    setError(null);
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

      <CommunityToolbar
        copy={copy}
        search={search}
        onSearchChange={setSearch}
        actions={
          user && isFirebaseConfigured() ? (
            <Link to={boardNewPath(boardId)} className="btn btn-primary">
              ✎ {copy.writePost}
            </Link>
          ) : null
        }
      />

      <section className="community-list" aria-busy={!ready}>
        {!ready ? (
          <p className="community-empty">{t.community.loading}</p>
        ) : posts.length === 0 ? (
          <p className="community-empty">{copy.empty}</p>
        ) : filtered.length === 0 ? (
          <p className="community-empty">{copy.noSearchResults}</p>
        ) : (
          <ul className="community-posts">
            {paged.map((post) => (
              <li key={post.id}>
                <Link to={boardPostPath(boardId, post.id)} className="community-post">
                  <Avatar name={post.authorDisplayName} photoURL={post.authorPhotoURL} size={36} />
                  <span className="community-post__main">
                    <span className="community-post__title">
                      {boardId === 'qna' && post.solved ? (
                        <span className="badge badge-solved">{copy.solvedBadge}</span>
                      ) : null}
                      {post.title}
                    </span>
                    <span className="community-post__meta">
                      {post.authorDisplayName} · {formatDate(post.createdAt, locale)}
                    </span>
                  </span>
                  <span
                    className={
                      post.commentCount > 0
                        ? 'community-post__count community-post__count--has'
                        : 'community-post__count'
                    }
                    aria-label={`${copy.comments} ${post.commentCount}`}
                  >
                    💬 {post.commentCount}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <CommunityPagination
        copy={copy}
        pageOfTemplate={t.community.pageOf}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}
