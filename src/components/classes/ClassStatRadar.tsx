import type { ClassStats } from '../../data/classCatalog';

const STAT_KEYS: (keyof ClassStats)[] = [
  'attack',
  'defence',
  'control',
  'support',
  'area',
  'range',
  'mobility',
];

const SIDES = STAT_KEYS.length;

const LABEL_PAD = 22;

type ClassStatRadarProps = {
  stats: ClassStats;
  labels: Record<keyof ClassStats, string>;
  max?: number;
  size?: number;
};

function labelAnchor(index: number, cx: number, x: number, y: number) {
  if (index === 0) {
    return { textAnchor: 'middle' as const, dominantBaseline: 'hanging' as const };
  }
  if (index === 4) {
    return { textAnchor: 'middle' as const, dominantBaseline: 'auto' as const };
  }
  if (x > cx + 4) {
    return { textAnchor: 'start' as const, dominantBaseline: 'middle' as const };
  }
  if (x < cx - 4) {
    return { textAnchor: 'end' as const, dominantBaseline: 'middle' as const };
  }
  return { textAnchor: 'middle' as const, dominantBaseline: y > cx ? 'hanging' as const : 'auto' as const };
}

function vertex(cx: number, cy: number, radius: number, index: number) {
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / SIDES;
  return {
    x: cx + radius * Math.cos(angle),
    y: cy + radius * Math.sin(angle),
  };
}

function ringPoints(cx: number, cy: number, radius: number) {
  return STAT_KEYS.map((_, i) => {
    const p = vertex(cx, cy, radius, i);
    return `${p.x},${p.y}`;
  }).join(' ');
}

export function ClassStatRadar({ stats, labels, max = 5, size = 136 }: ClassStatRadarProps) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.34;
  const labelR = size * 0.44;
  const viewSize = size + LABEL_PAD * 2;

  const dataPoints = STAT_KEYS.map((key, i) => {
    const r = (Math.min(stats[key], max) / max) * outerR;
    const p = vertex(cx, cy, r, i);
    return `${p.x},${p.y}`;
  }).join(' ');

  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1];

  const summary = STAT_KEYS.map((key) => `${labels[key]} ${stats[key]}/${max}`).join(', ');

  return (
    <svg
      className="class-stat-radar"
      viewBox={`${-LABEL_PAD} ${-LABEL_PAD} ${viewSize} ${viewSize}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={summary}
    >
      {gridLevels.map((level) => (
        <polygon
          key={level}
          points={ringPoints(cx, cy, outerR * level)}
          className="class-stat-radar__grid"
        />
      ))}
      {STAT_KEYS.map((_, i) => {
        const p = vertex(cx, cy, outerR, i);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            className="class-stat-radar__axis"
          />
        );
      })}
      <polygon points={dataPoints} className="class-stat-radar__fill" />
      <polygon points={dataPoints} className="class-stat-radar__stroke" />
      {STAT_KEYS.map((key, i) => {
        const p = vertex(cx, cy, labelR, i);
        const anchor = labelAnchor(i, cx, p.x, p.y);
        return (
          <text
            key={key}
            x={p.x}
            y={p.y}
            className="class-stat-radar__label"
            textAnchor={anchor.textAnchor}
            dominantBaseline={anchor.dominantBaseline}
          >
            <title>{`${labels[key]} ${stats[key]}/${max}`}</title>
            {labels[key]}
          </text>
        );
      })}
    </svg>
  );
}
