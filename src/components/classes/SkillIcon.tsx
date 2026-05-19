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
  bow: (
    <>
      <path d="M8 16 Q16 6 24 16" fill="none" stroke="#8b6914" strokeWidth="2" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="#ccc" strokeWidth="1.5" />
    </>
  ),
  arrow: (
  <>
    <rect x="14" y="8" width="2" height="14" fill="#aaa" />
    <path d="M16 6 L20 10 L12 10 Z" fill="#ccc" />
  </>
  ),
  'arrows-scatter': (
    <>
      <path d="M6 20 L12 12 M10 22 L16 14 M14 20 L20 12" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  'hook-shot': (
    <>
      <path d="M8 16 Q16 8 24 16" fill="none" stroke="#8b6914" strokeWidth="2" />
      <circle cx="24" cy="16" r="3" fill={accent} />
    </>
  ),
  'spectral-arrow': (
    <>
      <rect x="14" y="8" width="2" height="14" fill="#9ad4ff" opacity="0.8" />
      <path d="M16 6 L20 10 L12 10 Z" fill="#9ad4ff" />
    </>
  ),
  'target-shot': (
    <circle cx="16" cy="16" r="10" fill="none" stroke="#c45a5a" strokeWidth="2" />
  ),
  fist: (
    <rect x="12" y="10" width="8" height="10" rx="2" fill="#d4a574" />
  ),
  'fist-serious': (
    <>
      <rect x="10" y="12" width="10" height="8" rx="2" fill="#d4a574" />
      <path d="M20 14 L28 14" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  'fist-flurry': (
    <>
      <rect x="11" y="11" width="7" height="9" rx="1" fill="#d4a574" transform="rotate(-15 14 15)" />
      <rect x="14" y="10" width="7" height="9" rx="1" fill="#d4a574" />
      <rect x="17" y="12" width="7" height="9" rx="1" fill="#d4a574" transform="rotate(15 20 16)" />
    </>
  ),
  knuckle: (
    <>
      <rect x="10" y="14" width="5" height="6" rx="1" fill="#8b9bb4" />
      <rect x="17" y="14" width="5" height="6" rx="1" fill="#8b9bb4" />
    </>
  ),
  flame: (
    <path
      d="M16 26 C12 22 10 18 12 14 C13 16 14 12 16 8 C18 12 19 16 20 14 C22 18 20 22 16 26Z"
      fill="#e85d04"
    />
  ),
  fireball: (
    <>
      <circle cx="16" cy="16" r="6" fill="#ff6b35" />
      <circle cx="14" cy="14" r="2" fill="#ffd166" opacity="0.8" />
    </>
  ),
  phoenix: (
    <>
      <path d="M8 20 Q16 8 24 20 Q16 14 8 20Z" fill="#e85d04" opacity="0.9" />
      <path d="M10 22 Q16 12 22 22" fill="#ffd166" opacity="0.6" />
    </>
  ),
  sun: (
    <>
      <circle cx="16" cy="16" r="7" fill="#ffd166" />
      <path d="M16 4 V8 M16 24 V28 M4 16 H8 M24 16 H28 M7 7 L10 10 M22 22 L25 25 M25 7 L22 10 M10 22 L7 25" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  lava: (
    <>
      <rect x="10" y="18" width="12" height="8" rx="1" fill="#c1440e" />
      <path d="M12 18 Q16 10 20 18" fill="#ff6b35" />
    </>
  ),
  wand: (
    <>
      <rect x="15" y="6" width="2" height="18" fill="#6b4f2a" />
      <circle cx="16" cy="6" r="3" fill="#ff6b35" />
    </>
  ),
  potion: (
    <>
      <path d="M13 10 H19 L17 14 V24 H15 V14 Z" fill="#6bcb77" opacity="0.9" />
      <rect x="14" y="8" width="4" height="3" fill="#8b9bb4" />
    </>
  ),
  poison: (
    <>
      <circle cx="16" cy="18" r="5" fill="#55a630" />
      <path d="M16 8 Q20 14 16 18 Q12 14 16 8Z" fill="#80b918" />
    </>
  ),
  acid: (
    <ellipse cx="16" cy="18" rx="10" ry="6" fill="#55a630" opacity="0.7" />
  ),
  bomb: (
    <>
      <circle cx="16" cy="18" r="7" fill="#333" />
      <line x1="16" y1="11" x2="16" y2="6" stroke="#c1440e" strokeWidth="2" />
    </>
  ),
  pickaxe: (
    <>
      <rect x="15" y="10" width="2" height="14" fill="#6b4f2a" />
      <rect x="8" y="8" width="16" height="4" fill="#8b9bb4" rx="1" />
    </>
  ),
  trident: (
    <>
      <rect x="15" y="8" width="2" height="16" fill="#6b9bd1" />
      <path d="M10 10 L16 6 L22 10" fill="none" stroke="#6b9bd1" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  wave: (
    <path
      d="M4 20 Q8 14 12 20 T20 20 T28 20"
      fill="none"
      stroke="#4cc9f0"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  ),
  blood: (
    <>
      <path d="M16 8 Q20 16 16 24 Q12 16 16 8Z" fill="#9d0208" />
      <ellipse cx="16" cy="22" rx="4" ry="2" fill="#d00000" opacity="0.8" />
    </>
  ),
  spear: (
    <>
      <rect x="15" y="6" width="2" height="20" fill="#8b9bb4" />
      <path d="M12 6 L16 2 L20 6" fill="#6b9bd1" />
    </>
  ),
  axe: (
    <>
      <rect x="14" y="10" width="4" height="14" fill="#6b4f2a" />
      <path d="M8 8 L22 14 L8 20 Z" fill="#8b9bb4" />
    </>
  ),
  stealth: (
    <>
      <ellipse cx="16" cy="20" rx="8" ry="3" fill="#333" opacity="0.5" />
      <rect x="12" y="10" width="8" height="10" fill="#4a5568" rx="1" opacity="0.85" />
    </>
  ),
  crossbow: (
    <>
      <rect x="6" y="14" width="20" height="4" fill="#6b4f2a" rx="1" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="#aaa" strokeWidth="1" />
      <rect x="20" y="12" width="6" height="8" fill="#8b9bb4" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="12" cy="18" rx="3" ry="4" fill="#8b6914" />
      <ellipse cx="20" cy="18" rx="3" ry="4" fill="#8b6914" />
      <ellipse cx="16" cy="14" rx="4" ry="3" fill="#8b6914" />
    </>
  ),
  golem: (
    <>
      <rect x="10" y="8" width="12" height="14" fill="#6b6b6b" rx="1" />
      <rect x="8" y="10" width="4" height="10" fill="#555" />
      <rect x="20" y="10" width="4" height="10" fill="#555" />
    </>
  ),
};
