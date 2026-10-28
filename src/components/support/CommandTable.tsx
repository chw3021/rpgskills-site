import type { CommandRow } from '../../i18n/types';

type CommandTableProps = {
  title: string;
  rows: CommandRow[];
  commandCol: string;
  descriptionCol: string;
};

export function CommandTable({ title, rows, commandCol, descriptionCol }: CommandTableProps) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h3>{title}</h3>
      <table className="command-table">
        <thead>
          <tr>
            <th>{commandCol}</th>
            <th>{descriptionCol}</th>
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
