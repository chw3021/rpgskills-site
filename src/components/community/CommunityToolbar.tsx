import type { CommunityBoardCopy } from '../../i18n/types';

const PAGE_SIZE = 10;

export { PAGE_SIZE };

type Props = {
  copy: CommunityBoardCopy;
  pageOfTemplate: string;
  search: string;
  onSearchChange: (value: string) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function CommunityToolbar({
  copy,
  pageOfTemplate,
  search,
  onSearchChange,
  page,
  totalPages,
  onPageChange,
}: Props) {
  const pageLabel = pageOfTemplate
    .replace('{current}', String(page))
    .replace('{total}', String(Math.max(totalPages, 1)));

  return (
    <div className="community-toolbar">
      <input
        type="search"
        className="community-toolbar__search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={copy.searchPlaceholder}
        aria-label={copy.searchPlaceholder}
      />
      {totalPages > 1 ? (
        <nav className="community-pagination" aria-label={pageLabel}>
          <button
            type="button"
            className="btn btn-ghost"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            {copy.prevPage}
          </button>
          <span className="community-pagination__info">{pageLabel}</span>
          <button
            type="button"
            className="btn btn-ghost"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            {copy.nextPage}
          </button>
        </nav>
      ) : null}
    </div>
  );
}
