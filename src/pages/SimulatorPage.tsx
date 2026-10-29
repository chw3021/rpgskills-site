import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui/PageHeader';
import { CLASSES } from '../data/classCatalog';
import { getClassDetail } from '../data/classDetails';
import { SKILL_COEFFICIENTS, type SkillCoefficient } from '../data/skillCoefficients';
import { useI18n } from '../i18n/useI18n';

const MAX_LEVEL = 50;

/** Mirrors SkillCoefficients.scaled / linear / value in the plugin. */
function coefficientAt(c: SkillCoefficient, level: number): number {
  if (c.kind === 'scaled') return c.base * (1 + level * c.step);
  if (c.kind === 'linear') return c.base + level * c.step;
  return c.base;
}

function formulaOf(c: SkillCoefficient): string {
  if (c.kind === 'scaled') return `${c.base} × (1 + Lv × ${c.step})`;
  if (c.kind === 'linear') return `${c.base} + Lv × ${c.step}`;
  return String(c.base);
}

function format(value: number): string {
  return String(Number(value.toFixed(4)));
}

export function SimulatorPage() {
  const { locale, t } = useI18n();
  const s = t.simulator;
  const loc = locale === 'ko' ? 'ko' : 'en';
  const classes = CLASSES.filter((cls) => SKILL_COEFFICIENTS[cls.id]);

  const [classId, setClassId] = useState(classes[0]?.id ?? '');
  const [level, setLevel] = useState(MAX_LEVEL);
  const [attack, setAttack] = useState(10);

  const skills = getClassDetail(classId)?.skillSections.flatMap((section) => section.skills) ?? [];
  const skillName = (prefix: string) =>
    skills.find((skill) => skill.id.toLowerCase() === prefix.toLowerCase())?.[loc].name ?? prefix;
  const rows = SKILL_COEFFICIENTS[classId] ?? [];

  return (
    <>
      <PageHeader title={s.pageTitle} description={s.pageDescription} />

      <section className="doc-section">
        <p>{s.intro}</p>
        <p className="meta">{s.disclaimer}</p>
      </section>

      <section className="doc-section">
        <div className="sim-controls">
          <label>
            {s.classLabel}
            <select className="input" value={classId} onChange={(e) => setClassId(e.target.value)}>
              {classes.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls[loc].name}
                </option>
              ))}
            </select>
          </label>
          <label>
            {s.levelLabel}: {level}
            <input
              type="range"
              min={0}
              max={MAX_LEVEL}
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
            />
          </label>
          <label>
            {s.attackLabel}
            <input
              className="input"
              type="number"
              min={0}
              step={0.5}
              value={attack}
              onChange={(e) => setAttack(Math.max(0, Number(e.target.value) || 0))}
            />
          </label>
        </div>
        <p>
          <Link to={`/classes/${classId}/`}>{s.classPageLink}</Link>
        </p>

        <table className="command-table">
          <thead>
            <tr>
              <th>{s.skillCol}</th>
              <th>{s.keyCol}</th>
              <th>{s.formulaCol}</th>
              <th>{s.valueCol.replace('{level}', String(level))}</th>
              <th>{s.estimateCol}</th>
              <th>{s.noteCol}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((c, i) => {
              const prefix = c.key.split('.')[0];
              const firstOfSkill = i === 0 || rows[i - 1].key.split('.')[0] !== prefix;
              const value = coefficientAt(c, level);
              // Scaled damage coefficients are ports of atk1 (D × coefficient); other kinds use other formulas.
              const showEstimate = c.kind === 'scaled' && c.note === '피해';
              return (
                <tr key={c.key}>
                  <td>{firstOfSkill ? skillName(prefix) : ''}</td>
                  <td>
                    <code>{c.key}</code>
                  </td>
                  <td>{formulaOf(c)}</td>
                  <td>{format(value)}</td>
                  <td>{showEstimate ? format(value * attack) : '—'}</td>
                  <td>{s.noteLabels[c.note] ?? c.note}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
