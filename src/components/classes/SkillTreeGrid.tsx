import { useMemo, useState } from 'react';
import type { ClassDetailDef, SkillElement } from '../../data/classDetails';
import type { ClassDetailTranslations } from '../../i18n/types';
import { buildSkillTree, SKILL_TREE_COLS, SKILL_TREE_ROWS, type PlacedSkill } from '../../utils/skillTreeLayout';
import { SkillIcon } from './SkillIcon';

type SkillTreeGridProps = {
  detail: ClassDetailDef;
  loc: 'en' | 'ko';
  locale: string;
  t: { classDetail: ClassDetailTranslations };
};

const ELEMENT_CLASS: Record<SkillElement, string> = {
  earth: 'skill-tree__element--earth',
  wind: 'skill-tree__element--wind',
  fire: 'skill-tree__element--fire',
  poison: 'skill-tree__element--poison',
  lightning: 'skill-tree__element--lightning',
  water: 'skill-tree__element--water',
};

function elementLabel(element: SkillElement, t: SkillTreeGridProps['t']): string {
  const labels: Record<SkillElement, string> = {
    earth: t.classDetail.elementEarth,
    wind: t.classDetail.elementWind,
    fire: t.classDetail.elementFire,
    poison: t.classDetail.elementPoison,
    lightning: t.classDetail.elementLightning,
    water: t.classDetail.elementWater,
  };
  return labels[element];
}

function SkillDetailPanel({
  node,
  loc,
  t,
}: {
  node: PlacedSkill;
  loc: 'en' | 'ko';
  t: SkillTreeGridProps['t'];
}) {
  const { skill } = node;
  const s = skill[loc];
  return (
    <div className="skill-tree__detail">
      <div className="skill-tree__detail-head">
        <SkillIcon id={node.displayIcon} className="skill-tree__detail-icon" />
        <div className="skill-tree__detail-text">
          <h4>
            {s.name}
            <span className={`skill-tree__element ${ELEMENT_CLASS[skill.element]}`}>
              {elementLabel(skill.element, t)}
            </span>
            {skill.ultimate && (
              <span className="class-detail__tag class-detail__tag--ultimate">{t.classDetail.ultimate}</span>
            )}
            {skill.followUp && <span className="class-detail__tag">{t.classDetail.followUp}</span>}
            {skill.passive && (
              <span className="class-detail__tag class-detail__tag--passive">{t.classDetail.passive}</span>
            )}
          </h4>
          {node.section.requiredProficiency > 0 && (
            <p className="meta skill-tree__detail-tier">
              {node.section.requiredProficiency === 1
                ? t.classDetail.sectionLimit1
                : t.classDetail.sectionLimit2}
            </p>
          )}
        </div>
      </div>
      {s.input && (
        <p className="class-detail__input">
          <strong>{t.classDetail.inputLabel}:</strong> {s.input}
        </p>
      )}
      <p>{s.description}</p>
      {s.extra?.map((line, i) => (
        <p key={i} className="meta">
          {line}
        </p>
      ))}
      {skill.masterLevel != null && (
        <p className="meta">{t.classDetail.masterLevel.replace('{lv}', String(skill.masterLevel))}</p>
      )}
    </div>
  );
}

function SkillCell({
  node,
  loc,
  selected,
  onSelect,
  t,
}: {
  node: PlacedSkill;
  loc: 'en' | 'ko';
  selected: boolean;
  onSelect: () => void;
  t: SkillTreeGridProps['t'];
}) {
  const s = node.skill[loc];
  return (
    <button
      type="button"
      className={`skill-tree__cell${selected ? ' skill-tree__cell--selected' : ''}${node.row > 0 ? ' skill-tree__cell--chain' : ''}`}
      style={{
        gridColumn: node.col + 1,
        gridRow: node.row + 1,
        ['--chain-offset' as string]: `${node.row * 0.55 + 0.5}rem`,
      }}
      onClick={onSelect}
      title={s.name}
      aria-pressed={selected}
      aria-label={s.name}
    >
      <span className={`skill-tree__element-dot ${ELEMENT_CLASS[node.skill.element]}`} aria-hidden />
      <SkillIcon id={node.displayIcon} />
      <span className="skill-tree__cell-name">{s.name}</span>
      <span className={`skill-tree__element-badge ${ELEMENT_CLASS[node.skill.element]}`}>
        {elementLabel(node.skill.element, t)}
      </span>
    </button>
  );
}

export function SkillTreeGrid({ detail, loc, locale, t }: SkillTreeGridProps) {
  const placed = useMemo(() => buildSkillTree(detail), [detail]);
  const [selectedId, setSelectedId] = useState<string | null>(() => placed[0]?.skill.id ?? null);

  const selected = placed.find((p) => p.skill.id === selectedId) ?? placed[0];

  const rowLabels = [t.classDetail.sectionBase, t.classDetail.sectionLimit1, t.classDetail.sectionLimit2];

  const unlockMeta = (tier: 1 | 2) => {
    const exp = tier === 1 ? detail.proficiency.expLimit1 : detail.proficiency.expLimit2;
    return t.classDetail.unlockAt.replace('{exp}', exp.toLocaleString(locale));
  };

  return (
    <div className="skill-tree">
      <div className="skill-tree__legend">
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--earth" />
          {t.classDetail.elementEarth}
        </span>
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--wind" />
          {t.classDetail.elementWind}
        </span>
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--fire" />
          {t.classDetail.elementFire}
        </span>
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--poison" />
          {t.classDetail.elementPoison}
        </span>
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--lightning" />
          {t.classDetail.elementLightning}
        </span>
        <span className="skill-tree__legend-item">
          <span className="skill-tree__element-dot skill-tree__element--water" />
          {t.classDetail.elementWater}
        </span>
        <span className="skill-tree__legend-chain">{t.classDetail.chainHint}</span>
      </div>

      <div className="skill-tree__board-wrap">
        <div className="skill-tree__row-labels" aria-hidden>
          {rowLabels.map((label, row) => (
            <div key={label} className="skill-tree__row-label" style={{ gridRow: row + 1 }}>
              <span>{label}</span>
              {row > 0 && <span className="meta skill-tree__row-unlock">{unlockMeta(row as 1 | 2)}</span>}
            </div>
          ))}
        </div>

        <div
          className="skill-tree__board"
          style={{
            gridTemplateColumns: `repeat(${SKILL_TREE_COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${SKILL_TREE_ROWS}, minmax(5.5rem, auto))`,
          }}
        >
          {placed.map((node) => (
            <SkillCell
              key={node.skill.id}
              node={node}
              loc={loc}
              selected={selected?.skill.id === node.skill.id}
              onSelect={() => setSelectedId(node.skill.id)}
              t={t}
            />
          ))}
        </div>
      </div>

      {selected && <SkillDetailPanel node={selected} loc={loc} t={t} />}
    </div>
  );
}
