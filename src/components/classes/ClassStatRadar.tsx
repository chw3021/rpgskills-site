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

type ClassStatRadarProps = {
  stats: ClassStats;
  labels: Record<keyof ClassStats, string>;
  max?: number;
  size?: number;
};

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

export function ClassStatRadar({ stats, labels, max = 5, size = 128 }: ClassStatRadarProps) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.36;
  const labelR = size * 0.47;

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
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
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
        return (
          <text
            key={key}
            x={p.x}
            y={p.y}
            className="class-stat-radar__label"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            <title>{`${labels[key]} ${stats[key]}/${max}`}</title>
            {labels[key]}
          </text>
        );
      })}
    </svg>
  );
}
