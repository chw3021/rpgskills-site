import type { ReactNode } from 'react';
import type { CommunityBoardCopy } from '../../i18n/types';

const PAGE_SIZE = 10;

export { PAGE_SIZE };

type ToolbarProps = {
  copy: CommunityBoardCopy;
  search: string;
  onSearchChange: (value: string) => void;
  actions?: ReactNode;
};

export function CommunityToolbar({ copy, search, onSearchChange, actions }: ToolbarProps) {
  return (
    <div className="community-toolbar">
      <input
        type="search"
        className="input community-toolbar__search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={copy.searchPlaceholder}
        aria-label={copy.searchPlaceholder}
      />
      {actions}
    </div>
  );
}

type PaginationProps = {
  copy: CommunityBoardCopy;
  pageOfTemplate: string;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export function CommunityPagination({
  copy,
  pageOfTemplate,
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pageLabel = pageOfTemplate
    .replace('{current}', String(page))
    .replace('{total}', String(totalPages));

  return (
    <nav className="community-pagination" aria-label={pageLabel}>
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        ← {copy.prevPage}
      </button>
      <span className="community-pagination__info">{pageLabel}</span>
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        {copy.nextPage} →
      </button>
    </nav>
  );
}
