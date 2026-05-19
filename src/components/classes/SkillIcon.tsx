import type { ReactNode } from 'react';
import type { SkillIconId } from '../../data/classDetails';

type SkillIconProps = {
  id: SkillIconId;
  className?: string;
};

const accent = '#3ecf8e';

export function SkillIcon({ id, className = '' }: SkillIconProps) {
  return (
    <svg
      className={`skill-icon ${className}`.trim()}
      viewBox="0 0 32 32"
      width={32}
      height={32}
      aria-hidden
    >
      {icons[id]}
    </svg>
  );
}

const icons: Record<SkillIconId, ReactNode> = {
  sword: (
    <>
      <rect x="14" y="6" width="4" height="18" fill="#8b9bb4" rx="1" />
      <rect x="10" y="22" width="12" height="3" fill="#6b4f2a" rx="1" />
    </>
  ),
  'sword-up': (
    <>
      <rect x="14" y="8" width="4" height="16" fill="#8b9bb4" rx="1" transform="rotate(-35 16 16)" />
      <path d="M8 24 L16 10 L24 24" fill="none" stroke={accent} strokeWidth="2" opacity="0.6" />
    </>
  ),
  'sword-drive': (
    <>
      <rect x="14" y="10" width="4" height="14" fill="#8b9bb4" rx="1" />
      <path d="M6 26 Q16 14 26 26" fill="none" stroke="#c4a35a" strokeWidth="2" />
    </>
  ),
  rush: (
    <>
      <rect x="14" y="12" width="4" height="12" fill="#8b9bb4" rx="1" />
      <path d="M4 16 H12 M20 16 H28" stroke={accent} strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  draw: (
    <>
      <rect x="12" y="14" width="12" height="3" fill="#c9a227" rx="1" />
      <rect x="14" y="10" width="4" height="10" fill="#8b9bb4" rx="1" />
    </>
  ),
  swoop: (
    <>
      <rect x="14" y="12" width="4" height="12" fill="#8b9bb4" rx="1" transform="rotate(25 16 18)" />
      <circle cx="16" cy="24" r="3" fill={accent} opacity="0.5" />
    </>
  ),
  shield: (
    <path d="M16 6 L26 10 V18 Q26 26 16 28 Q6 26 6 18 V10 Z" fill="#5a6a7a" stroke={accent} strokeWidth="1.5" />
  ),
  book: (
    <>
      <rect x="8" y="8" width="16" height="18" rx="2" fill="#6b4f2a" />
      <rect x="10" y="10" width="12" height="2" fill={accent} opacity="0.7" />
      <rect x="10" y="14" width="10" height="2" fill="#c4b89a" opacity="0.5" />
    </>
  ),
  leaf: (
    <path d="M16 8 Q24 16 16 26 Q8 16 16 8" fill="#4a8f3c" stroke={accent} strokeWidth="1" />
  ),
  wind: (
    <>
      <path d="M6 12 H20 M8 16 H24 M6 20 H18" stroke="#9ad4ff" strokeWidth="2" strokeLinecap="round" />
      <rect x="20" y="14" width="3" height="8" fill="#8b9bb4" rx="1" />
    </>
  ),
  spike: (
    <>
      <path d="M16 8 L22 26 H10 Z" fill="#7a8a9a" />
      <rect x="14" y="6" width="4" height="6" fill="#8b9bb4" />
    </>
  ),
  stab: (
    <>
      <rect x="14" y="10" width="4" height="14" fill="#8b9bb4" rx="1" />
      <circle cx="16" cy="8" r="3" fill="#c45a5a" />
    </>
  ),
  dance: (
    <>
      <rect x="14" y="12" width="4" height="10" fill="#c9a227" rx="1" transform="rotate(-20 16 17)" />
      <rect x="14" y="12" width="4" height="10" fill="#8b9bb4" rx="1" transform="rotate(20 16 17)" />
    </>
  ),
  slash: (
    <path d="M8 20 L24 12" stroke="#e8e8e8" strokeWidth="3" strokeLinecap="round" />
  ),
  aura: (
    <>
      <circle cx="16" cy="16" r="10" fill="none" stroke={accent} strokeWidth="2" opacity="0.7" />
      <rect x="14" y="12" width="4" height="10" fill="#8b9bb4" rx="1" />
    </>
  ),
  storm: (
    <>
      <path d="M10 20 L16 8 L22 20 Z" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="16" cy="22" r="4" fill={accent} opacity="0.4" />
    </>
  ),
  'air-cut': (
    <path d="M6 16 Q16 6 26 16 Q16 26 6 16" fill="none" stroke="#9ad4ff" strokeWidth="2" />
  ),
  'wind-slash': (
    <>
      <path d="M4 18 L28 14" stroke="#9ad4ff" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="20" y="12" width="4" height="10" fill="#8b9bb4" rx="1" />
    </>
  ),
  cycle: (
    <path
      d="M16 8 A8 8 0 1 1 15.9 8"
      fill="none"
      stroke={accent}
      strokeWidth="2"
      strokeLinecap="round"
    />
  ),
  soul: (
    <>
      <ellipse cx="16" cy="18" rx="6" ry="8" fill="#6ecfff" opacity="0.5" />
      <rect x="14" y="10" width="4" height="12" fill="#8b9bb4" rx="1" />
    </>
  ),
  recovery: (
    <>
      <path d="M16 8 V20 M12 12 L16 8 L20 12" stroke={accent} strokeWidth="2" strokeLinecap="round" />
      <rect x="10" y="22" width="12" height="4" rx="1" fill="#5a6a7a" />
    </>
  ),
  steady: (
    <>
      <rect x="14" y="8" width="4" height="16" fill="#c9a227" rx="1" />
      <circle cx="16" cy="16" r="11" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.6" />
    </>
  ),
  'mind-sword': (
    <>
      <rect x="14" y="6" width="4" height="18" fill="#e8e8e8" rx="1" />
      <path d="M16 4 L20 28 M16 4 L12 28" stroke={accent} strokeWidth="1.5" opacity="0.8" />
    </>
  ),
};
