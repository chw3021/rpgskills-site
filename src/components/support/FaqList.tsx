import type { FaqEntry } from '../../i18n/types';

type FaqListProps = {
  items: FaqEntry[];
};

/** Native details/summary keeps every answer in the HTML (readable without JS) while staying collapsible. */
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <details key={item.id} className="faq-item" open={i === 0}>
          <summary className="faq-question">{item.question}</summary>
          <div className="faq-answer">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
