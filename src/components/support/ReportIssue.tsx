import { bugReportChecklist, reportChannels } from '../../config/links';

export function ReportIssue() {
  return (
    <section>
      <h2>버그 제보</h2>
      <p style={{ color: 'var(--text-muted)' }}>
        아래 정보를 포함하면 원인 파악이 빨라집니다.
      </p>
      <ul>
        {bugReportChecklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="btn-row">
        {reportChannels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {ch.label}
          </a>
        ))}
      </div>
    </section>
  );
}
