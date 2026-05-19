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
  | 'mind-sword';

export type ClassSkillDef = {
  id: string;
  icon: SkillIconId;
  element: 'earth';
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
