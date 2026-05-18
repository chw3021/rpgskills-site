export type ArchetypeId =
  | 'warrior'
  | 'shooter'
  | 'fighter'
  | 'mage'
  | 'technician'
  | 'marine'
  | 'avenger'
  | 'battleLine';

export type RoleId = 'assault' | 'nuker' | 'suppressor' | 'supporter';

export type Difficulty = 'easy' | 'normal' | 'hard';

export type ClassStats = {
  attack: number;
  defence: number;
  control: number;
  support: number;
  area: number;
  range: number;
  mobility: number;
};

export type LocalizedText = { en: string; ko: string };

export type ClassDef = {
  id: string;
  archetype: ArchetypeId;
  role: RoleId;
  difficulty: Difficulty;
  stats: ClassStats;
  en: { name: string; equipment: string; summary: string };
  ko: { name: string; equipment: string; summary: string };
};

export const ARCHETYPES: { id: ArchetypeId; en: { name: string; desc: string }; ko: { name: string; desc: string } }[] =
  [
    {
      id: 'warrior',
      en: { name: 'Warrior', desc: 'Excels at melee or wide-area attacks.' },
      ko: { name: '전사', desc: '근접 또는 광역 공격에 특화되어 있습니다.' },
    },
    {
      id: 'shooter',
      en: { name: 'Shooter', desc: 'Excels at ranged attacks.' },
      ko: { name: '사수', desc: '원거리 공격에 특화되어 있습니다.' },
    },
    {
      id: 'fighter',
      en: { name: 'Fighter', desc: 'High vitality and sustained damage over time.' },
      ko: { name: '격투가', desc: '높은 체력과 지속 딜링에 특화되어 있습니다.' },
    },
    {
      id: 'mage',
      en: { name: 'Mage', desc: 'Focused burst damage.' },
      ko: { name: '마법사', desc: '집중적인 화력에 특화되어 있습니다.' },
    },
    {
      id: 'technician',
      en: { name: 'Technician', desc: 'Control and battlefield denial.' },
      ko: { name: '전문가', desc: '제압과 전장 통제에 특화되어 있습니다.' },
    },
    {
      id: 'marine',
      en: { name: 'Marine', desc: 'Ocean benefits while swimming; strong area attacks.' },
      ko: { name: '해상', desc: '수영 시 바다 관련 효과, 광역 공격에 특화.' },
    },
    {
      id: 'avenger',
      en: { name: 'Avenger', desc: 'Survivability and flexible utility.' },
      ko: { name: '복수자', desc: '생존성과 다목적 활용에 강점.' },
    },
    {
      id: 'battleLine',
      en: { name: 'Battle Line', desc: 'Spear-focused; many ally-buff skills.' },
      ko: { name: '군진', desc: '창 주무기, 아군 버프 스킬 비중이 높음.' },
    },
  ];

export const ROLES: { id: RoleId; en: { name: string; desc: string }; ko: { name: string; desc: string } }[] = [
  {
    id: 'assault',
    en: { name: 'Assault', desc: 'Skills that reduce incoming damage.' },
    ko: { name: '돌격', desc: '피해를 줄이는 기술 보유.' },
  },
  {
    id: 'nuker',
    en: { name: 'Nuker', desc: 'Bonus damage to bosses; lower armor.' },
    ko: { name: '공격', desc: '보스·우두머리 추가 피해, 방어력 낮음.' },
  },
  {
    id: 'suppressor',
    en: { name: 'Suppressor', desc: 'More control and lockdown skills.' },
    ko: { name: '제압', desc: '다른 역할군보다 제압 스킬이 많음.' },
  },
  {
    id: 'supporter',
    en: {
      name: 'Supporter',
      desc: 'Buffs/debuffs; lower damage; solo party bonus scales with XP level.',
    },
    ko: {
      name: '지원',
      desc: '버프·디버프, 공격력 낮음, 파티 없을 때 경험치 레벨 비례 공격 보너스.',
    },
  },
];

/** 8×4 class grid — matches in-game /rpg class GUI */
export const CLASSES: ClassDef[] = [
  {
    id: 'swordman',
    archetype: 'warrior',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 3.5, defence: 4, control: 3, support: 0, area: 5, range: 2.5, mobility: 3.5 },
    en: { name: 'SwordMan', equipment: 'Sword', summary: 'Wide swings that sweep enemy lines.' },
    ko: { name: '검사', equipment: '검', summary: '광범위한 공격으로 적진을 휩씁니다.' },
  },
  {
    id: 'archer',
    archetype: 'shooter',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3.5, control: 2.5, support: 0, area: 2.5, range: 3.5, mobility: 3.5 },
    en: { name: 'Archer', equipment: 'Bow', summary: 'Extreme speed or arrow count to pierce foes.' },
    ko: { name: '궁수', equipment: '활', summary: '매우 빠르거나 많은 화살로 적을 꿰뚫습니다.' },
  },
  {
    id: 'boxer',
    archetype: 'fighter',
    role: 'assault',
    difficulty: 'hard',
    stats: { attack: 3, defence: 5, control: 2.5, support: 0, area: 2, range: 1.5, mobility: 3 },
    en: { name: 'Boxer', equipment: 'Knuckles (both hands)', summary: 'Holds the front line fist to fist.' },
    ko: { name: '권사', equipment: '양손 너클', summary: '최전선에서 맨주먹으로 싸웁니다.' },
  },
  {
    id: 'fireMage',
    archetype: 'mage',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3.5, control: 2.5, support: 0.5, area: 3, range: 3.5, mobility: 2 },
    en: { name: 'FireMage', equipment: 'Wand', summary: 'Blazing arcane flame head-on.' },
    ko: { name: '화염술사', equipment: '완드', summary: '불꽃 마법으로 정면 대결.' },
  },
  {
    id: 'chemist',
    archetype: 'technician',
    role: 'assault',
    difficulty: 'easy',
    stats: { attack: 3, defence: 4.5, control: 2.5, support: 1, area: 3.5, range: 1.5, mobility: 3.5 },
    en: { name: 'Chemist', equipment: 'Pickaxe', summary: 'Volatile reagents across enemy ranks.' },
    ko: { name: '화학자', equipment: '곡괭이', summary: '화학 물질로 적 진형을 뒤흔듭니다.' },
  },
  {
    id: 'oceanKnight',
    archetype: 'marine',
    role: 'assault',
    difficulty: 'hard',
    stats: { attack: 3.5, defence: 4, control: 2, support: 0, area: 4, range: 3.5, mobility: 3.8 },
    en: { name: 'OceanKnight', equipment: 'Trident & shield', summary: 'Charges in and shapes water to fight.' },
    ko: { name: '바다기사', equipment: '삼지창, 방패', summary: '돌진하고 물을 끌어 싸웁니다.' },
  },
  {
    id: 'berserker',
    archetype: 'avenger',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3, control: 3, support: 0, area: 3.5, range: 3.5, mobility: 2.5 },
    en: { name: 'Berserker', equipment: 'Sword', summary: 'Spends health, steals life on each hit.' },
    ko: { name: '광전사', equipment: '검', summary: '체력을 쓰고 타격 시 생명을 되찾습니다.' },
  },
  {
    id: 'vanguard',
    archetype: 'battleLine',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4.5, control: 3, support: 3.5, area: 3.5, range: 3, mobility: 2.5 },
    en: { name: 'Vanguard', equipment: 'Spear', summary: 'Fights on the front while lifting allies.' },
    ko: { name: '선봉병', equipment: '창', summary: '최전선에서 싸우며 아군을 돕습니다.' },
  },
  {
    id: 'hunter',
    archetype: 'warrior',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 5, defence: 2.5, control: 2.5, support: 1, area: 1, range: 1, mobility: 5 },
    en: { name: 'Hunter', equipment: 'Axe', summary: 'Tremendous single-target burst.' },
    ko: { name: '사냥꾼', equipment: '도끼', summary: '한 명에게 막대한 피해.' },
  },
  {
    id: 'sniper',
    archetype: 'shooter',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 5, defence: 0, control: 1.5, support: 1, area: 2, range: 5, mobility: 2.5 },
    en: { name: 'Sniper', equipment: 'Crossbow', summary: 'Lethal vitals from extreme range.' },
    ko: { name: '저격수', equipment: '쇠뇌', summary: '먼 거리에서 급소를 노립니다.' },
  },
  {
    id: 'tamer',
    archetype: 'fighter',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4, defence: 1, control: 3, support: 0, area: 3, range: 4, mobility: 1 },
    en: { name: 'Tamer', equipment: 'Knuckles (both hands)', summary: 'Beasts harry one mark with focus.' },
    ko: { name: '조련사', equipment: '양손 너클', summary: '길들인 동물로 집중 공격.' },
  },
  {
    id: 'illusionist',
    archetype: 'mage',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.5, defence: 1.5, control: 2.5, support: 0, area: 3, range: 2, mobility: 4 },
    en: { name: 'Illusionist', equipment: 'Wand', summary: 'Mirages, then instant strikes.' },
    ko: { name: '환술사', equipment: '완드', summary: '환영 후 순간 타격.' },
  },
  {
    id: 'forger',
    archetype: 'technician',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4.5, defence: 2, control: 2.5, support: 1, area: 3, range: 5, mobility: 1.5 },
    en: { name: 'Forger', equipment: 'Pickaxe', summary: 'Cycles weapons to hammer foes down.' },
    ko: { name: '무기공', equipment: '곡괭이', summary: '여러 무기로 강하게 제압.' },
  },
  {
    id: 'nobility',
    archetype: 'marine',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4.5, defence: 2.5, control: 2.5, support: 1, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Nobility', equipment: 'Trident', summary: 'Sea creatures fight as soldiers.' },
    ko: { name: '귀족', equipment: '삼지창', summary: '바다 생물로 전장을 지배.' },
  },
  {
    id: 'daggerlist',
    archetype: 'avenger',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.75, defence: 1.5, control: 2, support: 0, area: 3, range: 1.5, mobility: 4.5 },
    en: { name: 'Daggerlist', equipment: 'Dagger', summary: 'Shadows carve bleeding wounds.' },
    ko: { name: '단검사', equipment: '단검', summary: '그림자로 깊은 상처.' },
  },
  {
    id: 'cavalryman',
    archetype: 'battleLine',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.5, defence: 2.5, control: 2.5, support: 3, area: 3.5, range: 3.5, mobility: 4 },
    en: { name: 'Cavalryman', equipment: 'Spear', summary: 'Faster movement means harder hits.' },
    ko: { name: '기마병', equipment: '창', summary: '이동 속도가 빠를수록 강해짐.' },
  },
  {
    id: 'broiler',
    archetype: 'warrior',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 2.5, control: 4, support: 1, area: 4, range: 2, mobility: 2 },
    en: { name: 'Broiler', equipment: 'Mace', summary: 'Stuns or shoves to break formation.' },
    ko: { name: '투사', equipment: '철퇴', summary: '기절·밀쳐 전열을 무너뜨림.' },
  },
  {
    id: 'launcher',
    archetype: 'shooter',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 2, control: 4, support: 1, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Elementalist', equipment: 'Bow', summary: 'Multi-element arrows pin enemies.' },
    ko: { name: '원소술사', equipment: '활', summary: '여러 속성 화살로 제압.' },
  },
  {
    id: 'wreltler',
    archetype: 'fighter',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4, control: 4.5, support: 0, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'Wrestler', equipment: 'Knuckles (both hands)', summary: 'Grappling shuts down one elite.' },
    ko: { name: '유술가', equipment: '양손 너클', summary: '유술로 한 명을 확실히 제압.' },
  },
  {
    id: 'gardener',
    archetype: 'mage',
    role: 'suppressor',
    difficulty: 'easy',
    stats: { attack: 3.5, defence: 2.5, control: 4.5, support: 1, area: 3, range: 3, mobility: 1 },
    en: { name: 'Gardener', equipment: 'Shovel', summary: 'Plants root enemies in place.' },
    ko: { name: '원예가', equipment: '삽', summary: '식물로 적의 발을 묶습니다.' },
  },
  {
    id: 'engineer',
    archetype: 'technician',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4, control: 5, support: 1, area: 2.5, range: 2, mobility: 2.5 },
    en: { name: 'Engineer', equipment: 'Pickaxe', summary: 'Herds scattered foes into one spot.' },
    ko: { name: '공학자', equipment: '곡괭이', summary: '넓은 지역의 적을 한곳에 모읍니다.' },
  },
  {
    id: 'frostMan',
    archetype: 'marine',
    role: 'suppressor',
    difficulty: 'hard',
    stats: { attack: 3.5, defence: 2.5, control: 4.5, support: 0, area: 2.5, range: 2.5, mobility: 1.5 },
    en: { name: 'Frostman', equipment: 'Dagger', summary: 'Ice robs enemies of mobility.' },
    ko: { name: '빙술사', equipment: '단검', summary: '얼음으로 움직임을 빼앗습니다.' },
  },
  {
    id: 'witherist',
    archetype: 'avenger',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 3, control: 4, support: 2, area: 3, range: 4, mobility: 5 },
    en: { name: 'Witherist', equipment: 'Hoe', summary: 'Channels Wither while mastering its curse.' },
    ko: { name: '위더리스트', equipment: '괭이', summary: '위더 기운을 다루며 저주에서 벗어남.' },
  },
  {
    id: 'sapper',
    archetype: 'battleLine',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 3.5, control: 4.5, support: 3, area: 3, range: 3, mobility: 2 },
    en: { name: 'Sapper', equipment: 'Shovel', summary: 'Ballistae and shells pin enemies.' },
    ko: { name: '공병', equipment: '삽', summary: '투석기·포탄으로 적을 제압.' },
  },
  {
    id: 'paladin',
    archetype: 'warrior',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 1.5, defence: 5, control: 3, support: 4.5, area: 2, range: 2, mobility: 2 },
    en: { name: 'Paladin', equipment: 'Axe/mace + shield', summary: 'Shield wall protects allies.' },
    ko: { name: '성기사', equipment: '도끼/철퇴 + 방패', summary: '거대한 방패로 아군을 지킵니다.' },
  },
  {
    id: 'medic',
    archetype: 'shooter',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2, defence: 3.5, control: 3.5, support: 5, area: 2.5, range: 3.5, mobility: 2 },
    en: { name: 'ArrowMedic', equipment: 'Crossbow', summary: 'Weakens foes or heals from afar.' },
    ko: { name: '의궁', equipment: '쇠뇌', summary: '약화시키거나 원거리 치유.' },
  },
  {
    id: 'taoist',
    archetype: 'fighter',
    role: 'supporter',
    difficulty: 'normal',
    stats: { attack: 2.5, defence: 2.5, control: 3.5, support: 4, area: 3.5, range: 2.5, mobility: 2.5 },
    en: { name: 'Taoist', equipment: 'Knuckles (both hands)', summary: 'Talismans and qi support the party.' },
    ko: { name: '도사', equipment: '양손 너클', summary: '부적·기운으로 아군을 돕습니다.' },
  },
  {
    id: 'musician',
    archetype: 'mage',
    role: 'supporter',
    difficulty: 'normal',
    stats: { attack: 3, defence: 1, control: 3, support: 4, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Musician', equipment: 'Wand', summary: 'Performances raise ally morale.' },
    ko: { name: '예술가', equipment: '완드', summary: '연주로 아군 사기를 북돋움.' },
  },
  {
    id: 'cook',
    archetype: 'technician',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 2.5, defence: 3, control: 3, support: 4, area: 3.5, range: 3, mobility: 1 },
    en: { name: 'Cook', equipment: 'Shovel', summary: 'Hearty meals keep the team fighting.' },
    ko: { name: '요리사', equipment: '삽', summary: '맛있는 요리로 아군 지원.' },
  },
  {
    id: 'angler',
    archetype: 'marine',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 2.5, defence: 3, control: 4, support: 4, area: 2.5, range: 3.5, mobility: 2 },
    en: { name: 'Angler', equipment: 'Fishing rod', summary: 'Hooks enemies into ally reach.' },
    ko: { name: '낚시꾼', equipment: '낚시대', summary: '적을 끌어 아군 공격을 돕습니다.' },
  },
  {
    id: 'witchDoctor',
    archetype: 'avenger',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2.5, defence: 3.5, control: 1.5, support: 4.5, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'WitchDoctor', equipment: 'Hoe + Totem', summary: 'Rituals protect allies; raises fallen foes.' },
    ko: { name: '부두술사', equipment: '괭이 + 토템', summary: '부두술로 보호, 쓰러진 적을 아군으로.' },
  },
  {
    id: 'standardBearer',
    archetype: 'battleLine',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2, defence: 3, control: 3, support: 5, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'StandardBearer', equipment: 'Dagger', summary: 'Banner aids allies; ambush or sway foes.' },
    ko: { name: '기수', equipment: '단검', summary: '깃발로 아군 지원, 기습·포섭.' },
  },
];
