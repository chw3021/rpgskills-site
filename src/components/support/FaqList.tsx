import { useState } from 'react';
import type { FaqEntry } from '../../i18n/types';

type FaqListProps = {
  items: FaqEntry[];
};

export function FaqList({ items }: FaqListProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="faq-list">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <article key={item.id} className="faq-item">
            <button
              type="button"
              className="faq-question"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              {item.question}
              <span aria-hidden>{open ? '−' : '+'}</span>
            </button>
            {open && <div className="faq-answer">{item.answer}</div>}
          </article>
        );
      })}
    </div>
  );
}
