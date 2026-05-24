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
    en: { name: 'SwordMan', equipment: 'Sword', summary: 'Sweeps wide arcs to shred enemy lines in melee.' },
    ko: { name: '검사', equipment: '검', summary: '광범위한 검격으로 적진을 휩씁니다.' },
  },
  {
    id: 'archer',
    archetype: 'shooter',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3.5, control: 2.5, support: 0, area: 2.5, range: 3.5, mobility: 3.5 },
    en: { name: 'Archer', equipment: 'Bow', summary: 'Floods the field with rapid shots or dense volleys from range.' },
    ko: { name: '궁수', equipment: '활', summary: '빠른 연사나 다발 화살로 적을 꿰뚫습니다.' },
  },
  {
    id: 'boxer',
    archetype: 'fighter',
    role: 'assault',
    difficulty: 'hard',
    stats: { attack: 3, defence: 5, control: 2.5, support: 0, area: 2, range: 1.5, mobility: 3 },
    en: { name: 'Boxer', equipment: 'Knuckles (both hands)', summary: 'Stands on the front line and trades blows up close.' },
    ko: { name: '권사', equipment: '양손 너클', summary: '최전선에서 맨주먹으로 적과 맞붙습니다.' },
  },
  {
    id: 'fireMage',
    archetype: 'mage',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3.5, control: 2.5, support: 0.5, area: 3, range: 3.5, mobility: 2 },
    en: { name: 'FireMage', equipment: 'Wand', summary: 'Meets enemies head-on with blazing arcane flame.' },
    ko: { name: '화염술사', equipment: '완드', summary: '불꽃 마법으로 적과 정면으로 맞섭니다.' },
  },
  {
    id: 'chemist',
    archetype: 'technician',
    role: 'assault',
    difficulty: 'easy',
    stats: { attack: 3, defence: 4.5, control: 2.5, support: 1, area: 3.5, range: 1.5, mobility: 3.5 },
    en: { name: 'Chemist', equipment: 'Pickaxe', summary: 'Throws volatile reagents to disrupt enemy formations.' },
    ko: { name: '화학자', equipment: '곡괭이', summary: '화학 물질을 투척해 적 진형을 뒤흔듭니다.' },
  },
  {
    id: 'oceanKnight',
    archetype: 'marine',
    role: 'assault',
    difficulty: 'hard',
    stats: { attack: 3.5, defence: 4, control: 2, support: 0, area: 4, range: 3.5, mobility: 3.8 },
    en: { name: 'OceanKnight', equipment: 'Trident & shield', summary: 'Charges in and bends water to control the fight.' },
    ko: { name: '바다기사', equipment: '삼지창, 방패', summary: '돌진하며 물을 끌어 전장을 장악합니다.' },
  },
  {
    id: 'berserker',
    archetype: 'avenger',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 4, defence: 3, control: 3, support: 0, area: 3.5, range: 3.5, mobility: 2.5 },
    en: { name: 'Berserker', equipment: 'Sword', summary: 'Spends health willingly and drains life with every strike.' },
    ko: { name: '광전사', equipment: '검', summary: '체력을 소모하며 타격할 때마다 생명을 흡수합니다.' },
  },
  {
    id: 'vanguard',
    archetype: 'battleLine',
    role: 'assault',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4.5, control: 3, support: 3.5, area: 3.5, range: 3, mobility: 2.5 },
    en: { name: 'Vanguard', equipment: 'Spear', summary: 'Holds the front line while buffing and protecting allies.' },
    ko: { name: '선봉병', equipment: '창', summary: '최전선을 지키며 아군을 강화하고 돕습니다.' },
  },
  {
    id: 'hunter',
    archetype: 'warrior',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 5, defence: 2.5, control: 2.5, support: 1, area: 1, range: 1, mobility: 5 },
    en: { name: 'Hunter', equipment: 'Axe', summary: 'Strikes from the shadows in a hood, dealing lethal burst to one target.' },
    ko: { name: '사냥꾼', equipment: '도끼', summary: '후드를 쓴 채 그림자에서 단일 대상에게 막대한 피해를 가합니다.' },
  },
  {
    id: 'sniper',
    archetype: 'shooter',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 5, defence: 0, control: 1.5, support: 1, area: 2, range: 5, mobility: 2.5 },
    en: { name: 'Sniper', equipment: 'Crossbow', summary: 'Pins vital spots from extreme range with deadly precision.' },
    ko: { name: '저격수', equipment: '쇠뇌', summary: '먼 거리에서 적의 급소를 정확히 노려 제압합니다.' },
  },
  {
    id: 'tamer',
    archetype: 'fighter',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4, defence: 1, control: 3, support: 0, area: 3, range: 4, mobility: 1 },
    en: { name: 'Tamer', equipment: 'Knuckles (both hands)', summary: 'Commands tamed beasts to focus-fire a single enemy.' },
    ko: { name: '조련사', equipment: '양손 너클', summary: '길들인 동물로 한 적을 집중 공격합니다.' },
  },
  {
    id: 'illusionist',
    archetype: 'mage',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.5, defence: 1.5, control: 2.5, support: 0, area: 3, range: 2, mobility: 4 },
    en: { name: 'Illusionist', equipment: 'Wand', summary: 'Leaves mirages, then lands instant strikes on confused foes.' },
    ko: { name: '환술사', equipment: '완드', summary: '환영을 남긴 뒤 순간에 적을 타격합니다.' },
  },
  {
    id: 'forger',
    archetype: 'technician',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4.5, defence: 2, control: 2.5, support: 1, area: 3, range: 5, mobility: 1.5 },
    en: { name: 'Forger', equipment: 'Pickaxe', summary: 'Swaps high-tech firearms to bombard and suppress from range.' },
    ko: { name: '무기공', equipment: '곡괭이', summary: '다양한 화기로 원거리에서 적을 강하게 제압합니다.' },
  },
  {
    id: 'nobility',
    archetype: 'marine',
    role: 'nuker',
    difficulty: 'normal',
    stats: { attack: 4.5, defence: 2.5, control: 2.5, support: 1, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Nobility', equipment: 'Trident', summary: 'Commands sea creatures to dominate the battlefield.' },
    ko: { name: '귀족', equipment: '삼지창', summary: '바다 생물을 부려 전장을 장악합니다.' },
  },
  {
    id: 'daggerlist',
    archetype: 'avenger',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.75, defence: 1.5, control: 2, support: 0, area: 3, range: 1.5, mobility: 4.5 },
    en: { name: 'Daggerlist', equipment: 'Dagger', summary: 'Strikes from the shadows, leaving deep bleeding wounds.' },
    ko: { name: '단검사', equipment: '단검', summary: '그림자 속에서 깊은 상처를 남깁니다.' },
  },
  {
    id: 'cavalryman',
    archetype: 'battleLine',
    role: 'nuker',
    difficulty: 'hard',
    stats: { attack: 4.5, defence: 2.5, control: 2.5, support: 3, area: 3.5, range: 3.5, mobility: 4 },
    en: { name: 'Cavalryman', equipment: 'Spear', summary: 'Charges on horseback—the faster she moves, the harder she hits.' },
    ko: { name: '기마병', equipment: '창', summary: '이동이 빠를수록 돌격 피해가 더욱 강해집니다.' },
  },
  {
    id: 'broiler',
    archetype: 'warrior',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 2.5, control: 4, support: 1, area: 4, range: 2, mobility: 2 },
    en: { name: 'Broiler', equipment: 'Mace', summary: 'Stuns and shoves enemies to break their formation.' },
    ko: { name: '투사', equipment: '철퇴', summary: '기절과 밀치기로 적의 전열을 무너뜨립니다.' },
  },
  {
    id: 'launcher',
    archetype: 'shooter',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 2, control: 4, support: 1, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Elementalist', equipment: 'Bow', summary: 'Pins foes down with arrows imbued with multiple elements.' },
    ko: { name: '원소술사', equipment: '활', summary: '여러 속성의 화살로 적을 제압합니다.' },
  },
  {
    id: 'wrestler',
    archetype: 'fighter',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4, control: 4.5, support: 0, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'Wrestler', equipment: 'Knuckles (both hands)', summary: 'Locks down a single elite with relentless grappling.' },
    ko: { name: '유술가', equipment: '양손 너클', summary: '유술로 적 한 명을 확실히 제압합니다.' },
  },
  {
    id: 'gardener',
    archetype: 'mage',
    role: 'suppressor',
    difficulty: 'easy',
    stats: { attack: 3.5, defence: 2.5, control: 4.5, support: 1, area: 3, range: 3, mobility: 1 },
    en: { name: 'Gardener', equipment: 'Shovel', summary: 'Summons plants that root enemies in place.' },
    ko: { name: '원예가', equipment: '삽', summary: '식물을 자라게 해 적의 움직임을 묶습니다.' },
  },
  {
    id: 'engineer',
    archetype: 'technician',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 4, control: 5, support: 1, area: 2.5, range: 2, mobility: 2.5 },
    en: { name: 'Engineer', equipment: 'Pickaxe', summary: 'Deploys powered armor and gadgets to herd scattered foes together.' },
    ko: { name: '공학자', equipment: '곡괭이', summary: '기계 장비로 넓은 지역의 적을 한곳에 모읍니다.' },
  },
  {
    id: 'frostMan',
    archetype: 'marine',
    role: 'suppressor',
    difficulty: 'hard',
    stats: { attack: 3.5, defence: 2.5, control: 4.5, support: 0, area: 2.5, range: 2.5, mobility: 1.5 },
    en: { name: 'Frostman', equipment: 'Dagger', summary: 'Freezes foes in place and strips away their mobility.' },
    ko: { name: '빙술사', equipment: '단검', summary: '얼음으로 적의 움직임을 빼앗습니다.' },
  },
  {
    id: 'witherist',
    archetype: 'avenger',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 3, control: 4, support: 2, area: 3, range: 4, mobility: 5 },
    en: { name: 'Witherist', equipment: 'Hoe', summary: 'Wields Wither power with a hoe while turning its curse to his advantage.' },
    ko: { name: '위더리스트', equipment: '괭이', summary: '괭이로 위더의 기운을 다루며 저주를 극복합니다.' },
  },
  {
    id: 'sapper',
    archetype: 'battleLine',
    role: 'suppressor',
    difficulty: 'normal',
    stats: { attack: 3, defence: 3.5, control: 4.5, support: 3, area: 3, range: 3, mobility: 2 },
    en: { name: 'Sapper', equipment: 'Shovel', summary: 'Pins enemies with ballistae, shells, and siege contraptions.' },
    ko: { name: '공병', equipment: '삽', summary: '투석기와 포탄으로 적을 억제합니다.' },
  },
  {
    id: 'paladin',
    archetype: 'warrior',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 1.5, defence: 5, control: 3, support: 4.5, area: 2, range: 2, mobility: 2 },
    en: { name: 'Paladin', equipment: 'Axe/mace + shield', summary: 'Raises a shield wall to protect allies on the front line.' },
    ko: { name: '성기사', equipment: '도끼/철퇴 + 방패', summary: '거대한 방패로 최전선의 아군을 지킵니다.' },
  },
  {
    id: 'medic',
    archetype: 'shooter',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2, defence: 3.5, control: 3.5, support: 5, area: 2.5, range: 3.5, mobility: 2 },
    en: { name: 'ArrowMedic', equipment: 'Crossbow', summary: 'Weakens enemies or heals allies with specialized bolts from range.' },
    ko: { name: '의궁', equipment: '쇠뇌', summary: '적을 약화시키거나 멀리서 아군을 치유합니다.' },
  },
  {
    id: 'taoist',
    archetype: 'fighter',
    role: 'supporter',
    difficulty: 'normal',
    stats: { attack: 2.5, defence: 2.5, control: 3.5, support: 4, area: 3.5, range: 2.5, mobility: 2.5 },
    en: { name: 'Taoist', equipment: 'Knuckles (both hands)', summary: 'Supports the party with talismans and spiritual energy.' },
    ko: { name: '도사', equipment: '양손 너클', summary: '부적과 기운으로 아군을 돕습니다.' },
  },
  {
    id: 'musician',
    archetype: 'mage',
    role: 'supporter',
    difficulty: 'normal',
    stats: { attack: 3, defence: 1, control: 3, support: 4, area: 3.5, range: 4, mobility: 2 },
    en: { name: 'Musician', equipment: 'Wand', summary: 'Boosts ally morale and combat power through performances.' },
    ko: { name: '예술가', equipment: '완드', summary: '연주로 아군의 사기와 전투력을 높입니다.' },
  },
  {
    id: 'cook',
    archetype: 'technician',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 2.5, defence: 3, control: 3, support: 4, area: 3.5, range: 3, mobility: 1 },
    en: { name: 'Cook', equipment: 'Shovel', summary: 'Feeds the team hearty meals that keep everyone in the fight.' },
    ko: { name: '요리사', equipment: '삽', summary: '맛있는 요리로 아군을 지원합니다.' },
  },
  {
    id: 'angler',
    archetype: 'marine',
    role: 'supporter',
    difficulty: 'easy',
    stats: { attack: 2.5, defence: 3, control: 4, support: 4, area: 2.5, range: 3.5, mobility: 2 },
    en: { name: 'Angler', equipment: 'Fishing rod', summary: 'Hooks foes with leisurely ease and drags them into ally reach.' },
    ko: { name: '낚시꾼', equipment: '낚시대', summary: '한량처럼 여유롭게 낚듯 적을 끌어 아군에게 넘깁니다.' },
  },
  {
    id: 'witchDoctor',
    archetype: 'avenger',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2.5, defence: 3.5, control: 1.5, support: 4.5, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'WitchDoctor', equipment: 'Hoe + Totem', summary: 'Uses rituals and a hoe to shield allies and twist the battlefield.' },
    ko: { name: '부두술사', equipment: '괭이 + 토템', summary: '부두술과 괭이로 아군을 보호하며 전장을 통제합니다.' },
  },
  {
    id: 'standardBearer',
    archetype: 'battleLine',
    role: 'supporter',
    difficulty: 'hard',
    stats: { attack: 2, defence: 3, control: 3, support: 5, area: 2.5, range: 2.5, mobility: 2 },
    en: { name: 'StandardBearer', equipment: 'Dagger', summary: 'Rallies allies with her banner and ambushes or sways enemies.' },
    ko: { name: '기수', equipment: '단검', summary: '깃발로 아군을 돕고 적을 기습하거나 포섭합니다.' },
  },
];
