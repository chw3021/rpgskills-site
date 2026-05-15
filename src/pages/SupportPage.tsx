import { PageHeader } from '../components/ui/PageHeader';
import { FaqList } from '../components/support/FaqList';
import { ReportIssue } from '../components/support/ReportIssue';
import { adminCommands, partyCommands, playerCommands } from '../content/commands';

function CommandTable({ title, rows }: { title: string; rows: { cmd: string; desc: string }[] }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>{title}</h2>
      <table className="command-table">
        <thead>
          <tr>
            <th>Command</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cmd}>
              <td>
                <code>{row.cmd}</code>
              </td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function SupportPage() {
  return (
    <>
      <PageHeader
        title="Support"
        description="커맨드 참고, FAQ, 버그 제보 안내"
      />
      <ReportIssue />
      <section style={{ marginTop: '2.5rem' }}>
        <h2>FAQ</h2>
        <FaqList />
      </section>
      <section style={{ marginTop: '2.5rem' }}>
        <h2>Commands</h2>
        <CommandTable title="Player" rows={playerCommands} />
        <CommandTable title="Party" rows={partyCommands} />
        <CommandTable title="Admin" rows={adminCommands} />
      </section>
    </>
  );
}
