type Channel = {
  label: string;
  description: string;
  href: string;
};

type ReportIssueProps = {
  title: string;
  intro: string;
  checklist: string[];
  channels: Channel[];
};

export function ReportIssue({ title, intro, checklist, channels }: ReportIssueProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p style={{ color: 'var(--text-muted)' }}>{intro}</p>
      <ul>
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="btn-row">
        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            title={ch.description}
          >
            {ch.label}
          </a>
        ))}
      </div>
    </section>
  );
}
