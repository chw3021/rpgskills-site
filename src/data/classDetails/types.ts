export type LocalizedString = { en: string; ko: string };

export type SkillIconId =
  | 'sword'
  | 'sword-up'
  | 'sword-drive'
  | 'rush'
  | 'draw'
  | 'swoop'
  | 'shield'
  | 'book'
  | 'leaf'
  | 'wind'
  | 'spike'
  | 'stab'
  | 'dance'
  | 'slash'
  | 'aura'
  | 'storm'
  | 'air-cut'
  | 'wind-slash'
  | 'cycle'
  | 'soul'
  | 'recovery'
  | 'steady'
  | 'mind-sword'
  | 'bow'
  | 'arrow'
  | 'arrows-scatter'
  | 'hook-shot'
  | 'spectral-arrow'
  | 'target-shot'
  | 'fist'
  | 'fist-serious'
  | 'fist-flurry'
  | 'knuckle'
  | 'flame'
  | 'fireball'
  | 'phoenix'
  | 'sun'
  | 'lava'
  | 'wand'
  | 'potion'
  | 'poison'
  | 'acid'
  | 'bomb'
  | 'pickaxe'
  | 'trident'
  | 'wave'
  | 'blood'
  | 'spear'
  | 'axe'
  | 'stealth'
  | 'crossbow'
  | 'paw'
  | 'golem';

export type ClassSkillDef = {
  id: string;
  icon: SkillIconId;
  element: 'earth' | 'wind' | 'fire' | 'poison' | 'lightning' | 'water';
  en: {
    name: string;
    input?: string;
    description: string;
    extra?: string[];
  };
  ko: {
    name: string;
    input?: string;
    description: string;
    extra?: string[];
  };
  masterLevel?: number;
  followUp?: boolean;
  passive?: boolean;
  /** num4 / num5 style ultimates */
  ultimate?: boolean;
};

export type ClassSkillSection = {
  id: 'base' | 'limit1' | 'limit2';
  requiredProficiency: 0 | 1 | 2;
  skills: ClassSkillDef[];
};

export type ClassDetailDef = {
  /** Matches classCatalog id */
  id: string;
  /** 1–32 display order (CLASS_PROMPTS_ONE_BY_ONE.md) */
  order: number;
  /** Skill element label (defaults to Earth in UI) */
  element?: { en: string; ko: string };
  proficiency: {
    expLimit1: number;
    expLimit2: number;
    tiers: {
      tier: 0 | 1 | 2;
      portraitFile: string;
      en: { title: string };
      ko: { title: string };
    }[];
  };
  story: {
    en: string[];
    ko: string[];
  };
  skillSections: ClassSkillSection[];
};
