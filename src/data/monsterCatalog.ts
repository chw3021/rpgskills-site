import type { LocalizedText } from './classCatalog';

/**
 * Field monsters from rpgskills-common monsters/*MobsSpawn.java,
 * combo bosses from *Raids.java Boss(), and raid-world phase-2 bosses.
 * Zones follow the plugin check order in MobsSkillsEvents, then the Wither raid.
 */

export type EntityId =
  | 'zombie'
  | 'husk'
  | 'drowned'
  | 'skeleton'
  | 'stray'
  | 'bogged'
  | 'pillager'
  | 'vindicator'
  | 'illusioner'
  | 'witch'
  | 'vex'
  | 'spider'
  | 'caveSpider'
  | 'creeper'
  | 'enderman'
  | 'guardian'
  | 'shulker'
  | 'phantom'
  | 'slime'
  | 'bee'
  | 'ironGolem'
  | 'elderGuardian'
  | 'breeze'
  | 'witherSkeleton'
  | 'piglin'
  | 'wither';

/** Which vanilla spawn the plugin replaces with this monster. */
export type ReplaceId = 'undead' | 'spider' | 'creeper' | 'enderman' | 'guardian' | 'bee' | 'ocean' | 'end';

export type ZoneId =
  | 'plain'
  | 'mountains'
  | 'snow'
  | 'ocean'
  | 'dark'
  | 'hyper'
  | 'red'
  | 'poison'
  | 'wild'
  | 'nether'
  | 'ender'
  | 'wither';

export type ZoneDef = {
  id: ZoneId;
  en: { name: string; biomes: string; defaultMobs: string };
  ko: { name: string; biomes: string; defaultMobs: string };
};

export type MonsterKind = 'field' | 'comboBoss' | 'raidBoss';

export type MonsterDef = {
  /** Also the image file name: src/assets/monster-icons/{id}.jpg */
  id: string;
  zone: ZoneId;
  entity: EntityId;
  /** Omitted for raid bosses whose health scales from the previous phase */
  hp?: number;
  /** Raid phase multiplier applied to the previous boss HP (1.2 or 1.5) */
  hpScale?: number;
  /** Default is a named field monster */
  kind?: MonsterKind;
  replaces?: ReplaceId;
  /** Number spawned at once when greater than 1 */
  pack?: number;
  en: { name: string; equipment: string };
  ko: { name: string; equipment: string };
};

export const ENTITY_NAMES: Record<EntityId, LocalizedText> = {
  zombie: { en: 'Zombie', ko: '좀비' },
  husk: { en: 'Husk', ko: '허스크' },
  drowned: { en: 'Drowned', ko: '드라운드' },
  skeleton: { en: 'Skeleton', ko: '스켈레톤' },
  stray: { en: 'Stray', ko: '스트레이' },
  bogged: { en: 'Bogged', ko: '보그드' },
  pillager: { en: 'Pillager', ko: '약탈자' },
  vindicator: { en: 'Vindicator', ko: '변명자' },
  illusioner: { en: 'Illusioner', ko: '환술사' },
  witch: { en: 'Witch', ko: '마녀' },
  vex: { en: 'Vex', ko: '벡스' },
  spider: { en: 'Spider', ko: '거미' },
  caveSpider: { en: 'Cave Spider', ko: '동굴거미' },
  creeper: { en: 'Creeper', ko: '크리퍼' },
  enderman: { en: 'Enderman', ko: '엔더맨' },
  guardian: { en: 'Guardian', ko: '가디언' },
  shulker: { en: 'Shulker', ko: '셜커' },
  phantom: { en: 'Phantom', ko: '팬텀' },
  slime: { en: 'Slime', ko: '슬라임' },
  bee: { en: 'Bee', ko: '꿀벌' },
  ironGolem: { en: 'Iron Golem', ko: '철골렘' },
  elderGuardian: { en: 'Elder Guardian', ko: '엘더가디언' },
  breeze: { en: 'Breeze', ko: '브리즈' },
  witherSkeleton: { en: 'Wither Skeleton', ko: '위더스켈레톤' },
  piglin: { en: 'Piglin', ko: '피글린' },
  wither: { en: 'Wither', ko: '위더' },
};

export const ZONES: ZoneDef[] = [
  {
    id: 'plain',
    en: {
      name: 'Plains',
      biomes: 'Plains, rivers, meadows, beaches',
      defaultMobs: 'No named monsters. Mobs keep their vanilla names and health.',
    },
    ko: {
      name: '평원',
      biomes: '평원, 강, 초원, 해변',
      defaultMobs: '이름 있는 몬스터는 없습니다. 바닐라 이름과 체력을 그대로 사용합니다.',
    },
  },
  {
    id: 'mountains',
    en: {
      name: 'Mountains',
      biomes: 'Peaks, hills, stony areas, taiga (not snowy)',
      defaultMobs: 'Other mobs become "Mountains" + vanilla name with 120 HP.',
    },
    ko: {
      name: '산악지대',
      biomes: '봉우리, 언덕, 돌 지형, 타이가 (눈 덮인 곳 제외)',
      defaultMobs: '그 외 몹은 "산악지대" + 바닐라 이름, 체력 120으로 바뀝니다.',
    },
  },
  {
    id: 'snow',
    en: {
      name: 'Snowy',
      biomes: 'Snowy, ice, frozen biomes, groves, jagged peaks',
      defaultMobs: 'Other mobs become "Snowy" + vanilla name with 500 HP.',
    },
    ko: {
      name: '설산',
      biomes: '눈 덮인 곳, 얼음, 얼어붙은 바이옴, 숲 언덕, 뾰족한 봉우리',
      defaultMobs: '그 외 몹은 "설산" + 바닐라 이름, 체력 500으로 바뀝니다.',
    },
  },
  {
    id: 'ocean',
    en: {
      name: 'Ocean',
      biomes: 'Oceans (not frozen). Near ocean ruins, Lantern Men always spawn.',
      defaultMobs: 'Other mobs become "Ocean" + vanilla name with 2,000 HP.',
    },
    ko: {
      name: '바다',
      biomes: '바다 (얼어붙은 바다 제외). 바다 유적 근처에서는 항상 랜턴맨이 나타납니다.',
      defaultMobs: '그 외 몹은 "바다" + 바닐라 이름, 체력 2,000으로 바뀝니다.',
    },
  },
  {
    id: 'dark',
    en: {
      name: 'Dark Field',
      biomes: 'Forests, caves, deep dark (Overworld)',
      defaultMobs: 'Other mobs become "DarkField" + vanilla name with 5,000 HP.',
    },
    ko: {
      name: '암흑지대',
      biomes: '숲, 동굴, 딥 다크 (오버월드)',
      defaultMobs: '그 외 몹은 "암흑지대" + 바닐라 이름, 체력 5,000으로 바뀝니다.',
    },
  },
  {
    id: 'hyper',
    en: {
      name: 'Desert',
      biomes: 'Deserts, savannas (Overworld)',
      defaultMobs: 'Other mobs become "Desert" + vanilla name with 9,000 HP.',
    },
    ko: {
      name: '사막지대',
      biomes: '사막, 사바나 (오버월드)',
      defaultMobs: '그 외 몹은 "사막지대" + 바닐라 이름, 체력 9,000으로 바뀝니다.',
    },
  },
  {
    id: 'red',
    en: {
      name: 'Badlands',
      biomes: 'Badlands. Every monster here is fire resistant and sets targets on fire.',
      defaultMobs: 'Other mobs become "BadLands" + vanilla name with 12,000 HP.',
    },
    ko: {
      name: '악지',
      biomes: '악지. 이곳의 모든 몬스터는 화염 저항이 있고 대상을 불태웁니다.',
      defaultMobs: '그 외 몹은 "악지" + 바닐라 이름, 체력 12,000으로 바뀝니다.',
    },
  },
  {
    id: 'poison',
    en: {
      name: 'Swamp',
      biomes: 'Swamps, mushroom fields (Overworld)',
      defaultMobs: 'Other mobs become "Swamp" + vanilla name with 24,000 HP.',
    },
    ko: {
      name: '늪지대',
      biomes: '늪, 버섯 들판 (오버월드)',
      defaultMobs: '그 외 몹은 "늪지대" + 바닐라 이름, 체력 24,000으로 바뀝니다.',
    },
  },
  {
    id: 'wild',
    en: {
      name: 'Wild',
      biomes: 'Jungles (Overworld). Undead and spider spawns come in groups of five.',
      defaultMobs: 'Other mobs become "Wild" + vanilla name with 30,000 HP.',
    },
    ko: {
      name: '야생',
      biomes: '정글 (오버월드). 언데드와 거미는 다섯 마리씩 나타납니다.',
      defaultMobs: '그 외 몹은 "야생" + 바닐라 이름, 체력 30,000으로 바뀝니다.',
    },
  },
  {
    id: 'nether',
    en: {
      name: 'Nether',
      biomes: 'Every Nether biome',
      defaultMobs:
        'No named monsters. In warped, crimson, soul sand, and basalt biomes, mobs get a Warped, Crimson, Soul, or Volcanic prefix and 50,000 HP; elsewhere they keep their vanilla name with 45,000 HP.',
    },
    ko: {
      name: '네더',
      biomes: '모든 네더 바이옴',
      defaultMobs:
        '이름 있는 몬스터는 없습니다. 뒤틀린 숲, 진홍빛 숲, 영혼 모래 골짜기, 현무암 삼각주에서는 "뒤틀린", "진홍빛", "영혼의", "화산지대" 접두어와 체력 50,000이 붙고, 그 외 지역에서는 바닐라 이름에 체력 45,000입니다.',
    },
  },
  {
    id: 'ender',
    en: {
      name: 'The End',
      biomes: 'The End. Any mob spawn can be replaced; dragon soldiers come in groups of three.',
      defaultMobs: 'Other mobs keep their vanilla name with 80,000 HP.',
    },
    ko: {
      name: '엔드',
      biomes: '엔드. 모든 몹 스폰이 대체될 수 있고, 용 병사들은 세 마리씩 나타납니다.',
      defaultMobs: '그 외 몹은 바닐라 이름에 체력 80,000입니다.',
    },
  },
  {
    id: 'wither',
    en: {
      name: 'Wither Raid',
      biomes: 'Wither raid world, entered through a wither raid portal',
      defaultMobs: 'No field monsters. The final boss is The Wither: True Form.',
    },
    ko: {
      name: '위더 레이드',
      biomes: '위더 레이드 월드. 위더 레이드 포탈로 입장합니다.',
      defaultMobs: '필드 몬스터는 없습니다. 최종 보스는 [더 위더: 트루폼]입니다.',
    },
  },
];

export const MONSTERS: MonsterDef[] = [
  // Mountains (MountainsMobsSpawn)
  {
    id: 'walkingStone',
    zone: 'mountains',
    entity: 'zombie',
    hp: 160,
    replaces: 'undead',
    en: { name: 'WalkingStone', equipment: 'Stone block head, gray leather armor, stone in both hands' },
    ko: { name: '워킹스톤', equipment: '돌 블록 머리, 회색 가죽 갑옷, 양손에 돌' },
  },
  {
    id: 'gravelArcher',
    zone: 'mountains',
    entity: 'skeleton',
    hp: 100,
    replaces: 'undead',
    en: { name: 'GravelArcher', equipment: 'Gravel head, gray leather armor, Power III bow' },
    ko: { name: '자갈궁수', equipment: '자갈 머리, 회색 가죽 갑옷, 힘 III 활' },
  },
  {
    id: 'mountainSniper',
    zone: 'mountains',
    entity: 'pillager',
    hp: 80,
    replaces: 'undead',
    en: {
      name: 'MountainSniper',
      equipment: 'Oak leaves head, olive leather armor, Quick Charge II and Multishot crossbow, jump boost',
    },
    ko: { name: '산악저격수', equipment: '참나무 잎 머리, 올리브색 가죽 갑옷, 빠른 장전 II·다중 발사 쇠뇌, 점프 강화' },
  },
  {
    id: 'flowerFairy',
    zone: 'mountains',
    entity: 'vex',
    hp: 45,
    replaces: 'undead',
    en: { name: 'FlowerFairy', equipment: 'Azalea leaves head, green and pink leather armor, dandelion and sunflower' },
    ko: { name: '꽃요정', equipment: '진달래 잎 머리, 초록·분홍 가죽 갑옷, 민들레와 해바라기' },
  },
  {
    id: 'stoneSpider',
    zone: 'mountains',
    entity: 'spider',
    hp: 100,
    replaces: 'spider',
    en: { name: 'StoneSpider', equipment: 'None, moves slower than a normal spider' },
    ko: { name: '돌거미', equipment: '없음, 일반 거미보다 느림' },
  },
  {
    id: 'woodCreeper',
    zone: 'mountains',
    entity: 'creeper',
    hp: 100,
    replaces: 'creeper',
    en: { name: 'WoodCreeper', equipment: 'None, moves slower than a normal creeper' },
    ko: { name: '나무크리퍼', equipment: '없음, 일반 크리퍼보다 느림' },
  },
  {
    id: 'treeMan',
    zone: 'mountains',
    entity: 'enderman',
    hp: 150,
    replaces: 'enderman',
    en: { name: 'TreeMan', equipment: 'Carries an acacia sapling' },
    ko: { name: '트리맨', equipment: '아카시아 묘목을 들고 다님' },
  },

  // Snowy (SnowMobsSpawn)
  {
    id: 'walkingIce',
    zone: 'snow',
    entity: 'drowned',
    hp: 900,
    replaces: 'undead',
    en: { name: 'WalkingIce', equipment: 'Ice block head, white leather armor, snowballs in both hands' },
    ko: { name: '워킹아이스', equipment: '얼음 블록 머리, 흰 가죽 갑옷, 양손에 눈덩이' },
  },
  {
    id: 'frostSkull',
    zone: 'snow',
    entity: 'stray',
    hp: 800,
    replaces: 'undead',
    en: { name: 'FrostSkull', equipment: 'Full white leather armor, Power III bow' },
    ko: { name: '서리해골', equipment: '흰 가죽 갑옷 한 벌, 힘 III 활' },
  },
  {
    id: 'frostHunter',
    zone: 'snow',
    entity: 'stray',
    hp: 650,
    replaces: 'undead',
    en: { name: 'FrostHunter', equipment: 'Navy leather helmet and boots, Sharpness II diamond axe' },
    ko: { name: '서리사냥꾼', equipment: '남색 가죽 투구·부츠, 날카로움 II 다이아몬드 도끼' },
  },
  {
    id: 'frozenMage',
    zone: 'snow',
    entity: 'stray',
    hp: 600,
    replaces: 'undead',
    en: { name: 'FrozenMage', equipment: 'White leather armor, blue ice in both hands' },
    ko: { name: '서리마법사', equipment: '흰 가죽 갑옷, 양손에 파란 얼음' },
  },
  {
    id: 'frostWitch',
    zone: 'snow',
    entity: 'witch',
    hp: 650,
    replaces: 'undead',
    en: { name: 'FrostWitch', equipment: 'Smoker head' },
    ko: { name: '서리마녀', equipment: '훈연기 머리' },
  },
  {
    id: 'iceSpider',
    zone: 'snow',
    entity: 'spider',
    hp: 580,
    replaces: 'spider',
    en: { name: 'IceSpider', equipment: 'None' },
    ko: { name: '얼음거미', equipment: '없음' },
  },
  {
    id: 'coldCreeper',
    zone: 'snow',
    entity: 'creeper',
    hp: 600,
    replaces: 'creeper',
    en: { name: 'ColdCreeper', equipment: 'None, moves slower than a normal creeper' },
    ko: { name: '냉기크리퍼', equipment: '없음, 일반 크리퍼보다 느림' },
  },
  {
    id: 'iceMan',
    zone: 'snow',
    entity: 'enderman',
    hp: 700,
    replaces: 'enderman',
    en: { name: 'IceMan', equipment: 'Carries an ice block' },
    ko: { name: '아이스맨', equipment: '얼음 블록을 들고 다님' },
  },
  {
    id: 'iceGuardian',
    zone: 'snow',
    entity: 'guardian',
    hp: 1000,
    replaces: 'guardian',
    en: { name: 'IceGuardian', equipment: 'None' },
    ko: { name: '아이스가디언', equipment: '없음' },
  },

  // Ocean (OceanMobsSpawn)
  {
    id: 'lanternMan',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2500,
    replaces: 'ocean',
    en: { name: 'LanternMan', equipment: 'Sea lantern head, white leather armor, fishing rods in both hands' },
    ko: { name: '랜턴맨', equipment: '바다 랜턴 머리, 흰 가죽 갑옷, 양손에 낚싯대' },
  },
  {
    id: 'mimic',
    zone: 'ocean',
    entity: 'stray',
    hp: 3000,
    replaces: 'ocean',
    en: { name: 'Mimic', equipment: 'Disguised as a trapped chest and stays still until it is hit' },
    ko: { name: '미믹', equipment: '덫 상자로 위장하고, 공격받기 전까지 움직이지 않음' },
  },
  {
    id: 'oceanPhantom',
    zone: 'ocean',
    entity: 'phantom',
    hp: 3000,
    replaces: 'ocean',
    en: { name: 'OceanPhantom', equipment: 'None, giant size' },
    ko: { name: '바다망령', equipment: '없음, 거대한 크기' },
  },
  {
    id: 'seaShulker',
    zone: 'ocean',
    entity: 'shulker',
    hp: 2000,
    replaces: 'ocean',
    en: { name: 'SeaShulker', equipment: 'Blue shell' },
    ko: { name: '바다셜커', equipment: '파란 껍데기' },
  },
  {
    id: 'drownedPirate',
    zone: 'ocean',
    entity: 'drowned',
    hp: 1800,
    replaces: 'ocean',
    en: { name: 'DrownedPirate', equipment: 'Brain coral block head, red and navy leather armor, iron sword and bone' },
    ko: { name: '떠도는해적', equipment: '뇌 산호 블록 머리, 빨강·남색 가죽 갑옷, 철 검과 뼈' },
  },
  {
    id: 'drownedCaptain',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2600,
    replaces: 'ocean',
    en: {
      name: 'DrownedCaptain',
      equipment: 'Bubble coral block head, black and navy leather armor, diamond sword and flint and steel',
    },
    ko: { name: '해적선장의원혼', equipment: '거품 산호 블록 머리, 검정·남색 가죽 갑옷, 다이아몬드 검과 부싯돌과 부시' },
  },
  {
    id: 'drownedLancer',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2000,
    replaces: 'ocean',
    en: { name: 'DrownedLancer', equipment: 'Prismarine head, diamond armor, trident and shield' },
    ko: { name: '떠도는창기병', equipment: '프리즈머린 머리, 다이아몬드 갑옷, 삼지창과 방패' },
  },

  // Dark Field (DarkMobsSpawn)
  {
    id: 'erodedKnight',
    zone: 'dark',
    entity: 'zombie',
    hp: 6000,
    replaces: 'undead',
    en: { name: 'ErodedKnight', equipment: 'Stripped dark oak log head, black leather armor, custom netherite sword and shield' },
    ko: { name: '잠식된기사', equipment: '껍질 벗긴 짙은 참나무 원목 머리, 검은 가죽 갑옷, 커스텀 네더라이트 검과 방패' },
  },
  {
    id: 'nightArcher',
    zone: 'dark',
    entity: 'skeleton',
    hp: 5000,
    replaces: 'undead',
    en: { name: 'NightArcher', equipment: 'Stripped dark oak log head, black leather armor, custom bow' },
    ko: { name: '밤의사수', equipment: '껍질 벗긴 짙은 참나무 원목 머리, 검은 가죽 갑옷, 커스텀 활' },
  },
  {
    id: 'erodedPillager',
    zone: 'dark',
    entity: 'pillager',
    hp: 5000,
    replaces: 'undead',
    en: { name: 'ErodedPillager', equipment: 'Stripped dark oak log head, crossbow' },
    ko: { name: '잠식된약탈자', equipment: '껍질 벗긴 짙은 참나무 원목 머리, 쇠뇌' },
  },
  {
    id: 'nightWitch',
    zone: 'dark',
    entity: 'witch',
    hp: 5000,
    replaces: 'undead',
    en: { name: 'NightWitch', equipment: 'None' },
    ko: { name: '밤의마녀', equipment: '없음' },
  },
  {
    id: 'nightSpider',
    zone: 'dark',
    entity: 'caveSpider',
    hp: 4000,
    replaces: 'spider',
    en: { name: 'NightSpider', equipment: 'None, very fast' },
    ko: { name: '밤거미', equipment: '없음, 매우 빠름' },
  },
  {
    id: 'darkCreeper',
    zone: 'dark',
    entity: 'creeper',
    hp: 4500,
    replaces: 'creeper',
    en: { name: 'DarkCreeper', equipment: 'None' },
    ko: { name: '다크크리퍼', equipment: '없음' },
  },
  {
    id: 'gloomyMan',
    zone: 'dark',
    entity: 'enderman',
    hp: 6000,
    replaces: 'enderman',
    en: { name: 'GloomyMan', equipment: 'None' },
    ko: { name: '글루미맨', equipment: '없음' },
  },

  // Desert (HyperMobsSpawn)
  {
    id: 'stalker',
    zone: 'hyper',
    entity: 'husk',
    hp: 12000,
    replaces: 'undead',
    en: { name: 'Stalker', equipment: 'Lodestone head, maroon and pink leather armor, custom netherite axe and end rod' },
    ko: { name: '추적자', equipment: '자석석 머리, 적갈색·분홍 가죽 갑옷, 커스텀 네더라이트 도끼와 엔드 막대기' },
  },
  {
    id: 'rayArcher',
    zone: 'hyper',
    entity: 'skeleton',
    hp: 9000,
    replaces: 'undead',
    en: { name: 'RayArcher', equipment: 'Purple stained glass head, pink and purple leather armor, custom bow and beacon' },
    ko: { name: '광선궁병', equipment: '보라색 색유리 머리, 분홍·보라 가죽 갑옷, 커스텀 활과 신호기' },
  },
  {
    id: 'securityRobot',
    zone: 'hyper',
    entity: 'vindicator',
    hp: 10000,
    replaces: 'undead',
    en: { name: 'SecurityRobot', equipment: 'Target block head, shields in both hands, silent' },
    ko: { name: '경비로봇', equipment: '과녁 블록 머리, 양손에 방패, 소리를 내지 않음' },
  },
  {
    id: 'madScientist',
    zone: 'hyper',
    entity: 'witch',
    hp: 8500,
    replaces: 'undead',
    en: { name: 'MadScientist', equipment: 'None' },
    ko: { name: '미친과학자', equipment: '없음' },
  },
  {
    id: 'scoutSpider',
    zone: 'hyper',
    entity: 'spider',
    hp: 9000,
    replaces: 'spider',
    en: { name: 'ScoutSpider', equipment: 'None, very fast' },
    ko: { name: '정찰용거미', equipment: '없음, 매우 빠름' },
  },
  {
    id: 'creepJumper',
    zone: 'hyper',
    entity: 'creeper',
    hp: 6000,
    replaces: 'creeper',
    en: { name: 'CreepJumper', equipment: 'None' },
    ko: { name: '크립점퍼', equipment: '없음' },
  },
  {
    id: 'watcher',
    zone: 'hyper',
    entity: 'enderman',
    hp: 12000,
    replaces: 'enderman',
    en: { name: 'Watcher', equipment: 'None' },
    ko: { name: '감시자', equipment: '없음' },
  },

  // Badlands (RedMobsSpawn)
  {
    id: 'walkingRedSand',
    zone: 'red',
    entity: 'husk',
    hp: 15000,
    replaces: 'undead',
    en: { name: 'WalkingRedSand', equipment: 'Red sand head, red leather armor, campfires in both hands' },
    ko: { name: '워킹레드샌드', equipment: '붉은 모래 머리, 붉은 가죽 갑옷, 양손에 모닥불' },
  },
  {
    id: 'burnedSkull',
    zone: 'red',
    entity: 'skeleton',
    hp: 12000,
    replaces: 'undead',
    en: { name: 'BurnedSkull', equipment: 'Red leather armor, Flame II and Power III bow' },
    ko: { name: '그을린해골', equipment: '붉은 가죽 갑옷, 화염 II·힘 III 활' },
  },
  {
    id: 'burnedMage',
    zone: 'red',
    entity: 'illusioner',
    hp: 10500,
    replaces: 'undead',
    en: { name: 'BurnedMage', equipment: 'Cut red sandstone slab head, red leather armor, fire charges in both hands' },
    ko: { name: '그을린마법사', equipment: '깎은 붉은 사암 반 블록 머리, 붉은 가죽 갑옷, 양손에 화염구' },
  },
  {
    id: 'redBruise',
    zone: 'red',
    entity: 'skeleton',
    hp: 12000,
    replaces: 'undead',
    en: { name: 'RedBruise', equipment: 'Full red leather armor, Fire Aspect II iron swords in both hands' },
    ko: { name: '붉은전사', equipment: '붉은 가죽 갑옷 한 벌, 양손에 발화 II 철 검' },
  },
  {
    id: 'burningSpider',
    zone: 'red',
    entity: 'spider',
    hp: 10000,
    replaces: 'spider',
    en: { name: 'BurningSpider', equipment: 'None' },
    ko: { name: '불거미', equipment: '없음' },
  },
  {
    id: 'hotCreeper',
    zone: 'red',
    entity: 'creeper',
    hp: 10000,
    replaces: 'creeper',
    en: { name: 'HotCreeper', equipment: 'Charged, moves slower than a normal creeper' },
    ko: { name: '열기크리퍼', equipment: '대전된 상태, 일반 크리퍼보다 느림' },
  },
  {
    id: 'redMan',
    zone: 'red',
    entity: 'enderman',
    hp: 15000,
    replaces: 'enderman',
    en: { name: 'RedMan', equipment: 'Carries a magma block' },
    ko: { name: '레드맨', equipment: '마그마 블록을 들고 다님' },
  },

  // Swamp (PoisonMobsSpawn)
  {
    id: 'drugAddict',
    zone: 'poison',
    entity: 'zombie',
    hp: 25000,
    replaces: 'undead',
    en: { name: 'DrugAddict', equipment: 'Green glazed terracotta head, green leather armor, potion and brewing stand, very fast' },
    ko: { name: '약물중독자', equipment: '초록 유광 테라코타 머리, 초록 가죽 갑옷, 물약과 양조기, 매우 빠름' },
  },
  {
    id: 'patrol',
    zone: 'poison',
    entity: 'bogged',
    hp: 23000,
    replaces: 'undead',
    en: { name: 'Patrol', equipment: 'Mangrove leaves head, green leather armor, bow' },
    ko: { name: '보초병', equipment: '맹그로브 잎 머리, 초록 가죽 갑옷, 활' },
  },
  {
    id: 'giantSlime',
    zone: 'poison',
    entity: 'slime',
    hp: 20000,
    replaces: 'undead',
    en: { name: 'GiantSlime', equipment: 'None, giant size' },
    ko: { name: '거대슬라임', equipment: '없음, 거대한 크기' },
  },
  {
    id: 'grenadier',
    zone: 'poison',
    entity: 'witch',
    hp: 20000,
    replaces: 'undead',
    en: { name: 'Grenadier', equipment: 'None' },
    ko: { name: '척탄병', equipment: '없음' },
  },
  {
    id: 'venomSpider',
    zone: 'poison',
    entity: 'caveSpider',
    hp: 18000,
    replaces: 'spider',
    en: { name: 'VenomSpider', equipment: 'None, very fast' },
    ko: { name: '맹독거미', equipment: '없음, 매우 빠름' },
  },
  {
    id: 'autoNuker',
    zone: 'poison',
    entity: 'creeper',
    hp: 20000,
    replaces: 'creeper',
    en: { name: 'AutoNuker', equipment: 'None' },
    ko: { name: '자폭기', equipment: '없음' },
  },
  {
    id: 'scout',
    zone: 'poison',
    entity: 'enderman',
    hp: 25000,
    replaces: 'enderman',
    en: { name: 'Scout', equipment: 'None' },
    ko: { name: '척후병', equipment: '없음' },
  },

  // Wild (WildMobsSpawn)
  {
    id: 'ancientZombie',
    zone: 'wild',
    entity: 'zombie',
    hp: 35000,
    replaces: 'undead',
    pack: 5,
    en: { name: 'AncientZombie', equipment: 'Mossy cobblestone head, netherite sword' },
    ko: { name: '고대좀비', equipment: '이끼 낀 조약돌 머리, 네더라이트 검' },
  },
  {
    id: 'ancientSkeleton',
    zone: 'wild',
    entity: 'skeleton',
    hp: 33000,
    replaces: 'undead',
    pack: 5,
    en: { name: 'AncientSkeleton', equipment: 'Jungle leaves head' },
    ko: { name: '고대스켈레톤', equipment: '정글 잎 머리' },
  },
  {
    id: 'ancientSlime',
    zone: 'wild',
    entity: 'slime',
    hp: 20000,
    replaces: 'undead',
    pack: 5,
    en: { name: 'AncientSlime', equipment: 'None' },
    ko: { name: '고대슬라임', equipment: '없음' },
  },
  {
    id: 'graveRobber',
    zone: 'wild',
    entity: 'vindicator',
    hp: 32000,
    replaces: 'undead',
    pack: 5,
    en: { name: 'GraveRobber', equipment: 'Mossy cobblestone head' },
    ko: { name: '도굴꾼', equipment: '이끼 낀 조약돌 머리' },
  },
  {
    id: 'ancientSpider',
    zone: 'wild',
    entity: 'caveSpider',
    hp: 27500,
    replaces: 'spider',
    pack: 5,
    en: { name: 'AncientSpider', equipment: 'None, very fast' },
    ko: { name: '고대거미', equipment: '없음, 매우 빠름' },
  },
  {
    id: 'ancientCreeper',
    zone: 'wild',
    entity: 'creeper',
    hp: 28000,
    replaces: 'creeper',
    en: { name: 'AncientCreeper', equipment: 'None' },
    ko: { name: '고대크리퍼', equipment: '없음' },
  },
  {
    id: 'ancientEnderman',
    zone: 'wild',
    entity: 'enderman',
    hp: 38000,
    replaces: 'enderman',
    en: { name: 'AncientEnderman', equipment: 'None' },
    ko: { name: '고대엔더맨', equipment: '없음' },
  },
  {
    id: 'hammy',
    zone: 'wild',
    entity: 'bee',
    hp: 30000,
    replaces: 'bee',
    en: { name: 'Hammy', equipment: 'None' },
    ko: { name: '날햄스터', equipment: '없음' },
  },

  // The End (EnderMobsSpawn)
  {
    id: 'dragonGuardian',
    zone: 'ender',
    entity: 'drowned',
    hp: 100000,
    replaces: 'end',
    pack: 3,
    en: {
      name: 'DragonGuardian',
      equipment: 'Dragon head, amethyst-trimmed netherite armor, Density III and Wind Burst V mace, shield, high jump',
    },
    ko: { name: '용수호자', equipment: '드래곤 머리, 자수정 장식 네더라이트 갑옷, 밀도 III·돌풍 V 철퇴와 방패, 높은 점프' },
  },
  {
    id: 'enderMimic',
    zone: 'ender',
    entity: 'stray',
    hp: 75000,
    replaces: 'end',
    en: { name: 'EnderMimic', equipment: 'Disguised as an ender chest and stays still until it is hit' },
    ko: { name: '엔더미믹', equipment: '엔더 상자로 위장하고, 공격받기 전까지 움직이지 않음' },
  },
  {
    id: 'enderShulker',
    zone: 'ender',
    entity: 'shulker',
    hp: 75000,
    replaces: 'end',
    en: { name: 'EnderShulker', equipment: 'Purple shell' },
    ko: { name: '엔더셜커', equipment: '보라 껍데기' },
  },
  {
    id: 'dragonMinion',
    zone: 'ender',
    entity: 'husk',
    hp: 95000,
    replaces: 'end',
    pack: 3,
    en: { name: 'DragonMinion', equipment: 'Dragon head, amethyst-trimmed netherite armor, iron sword and netherite axe' },
    ko: { name: '용하수인', equipment: '드래곤 머리, 자수정 장식 네더라이트 갑옷, 철 검과 네더라이트 도끼' },
  },
  {
    id: 'dragonArcher',
    zone: 'ender',
    entity: 'stray',
    hp: 90000,
    replaces: 'end',
    pack: 3,
    en: { name: 'DragonArcher', equipment: 'Dragon head, amethyst-trimmed netherite armor, bow and eye of ender' },
    ko: { name: '용수호자궁수', equipment: '드래곤 머리, 자수정 장식 네더라이트 갑옷, 활과 엔더의 눈' },
  },
  {
    id: 'dragonLancer',
    zone: 'ender',
    entity: 'drowned',
    hp: 100000,
    replaces: 'end',
    pack: 3,
    en: {
      name: 'DragonLancer',
      equipment: 'Dragon head, amethyst-trimmed netherite armor, Loyalty II trident and shield, slow falling',
    },
    ko: { name: '용수호자창기병', equipment: '드래곤 머리, 자수정 장식 네더라이트 갑옷, 충성 II 삼지창과 방패, 느린 낙하' },
  },

  // Combo bosses (*Raids.java Boss())
  {
    id: 'elderCreeper',
    zone: 'plain',
    entity: 'creeper',
    hp: 200,
    kind: 'comboBoss',
    en: { name: 'ElderCreeper', equipment: 'Charged, giant size (scale 3.5), explosion radius 10, stones in both hands' },
    ko: { name: '장로크리퍼', equipment: '대전된 상태, 거대 크기(배율 3.5), 폭발 반경 10, 양손에 돌' },
  },
  {
    id: 'stoneGolem',
    zone: 'mountains',
    entity: 'ironGolem',
    hp: 1000,
    kind: 'comboBoss',
    en: { name: 'StoneGolem', equipment: 'Not player-created, stones in both hands with Sharpness III and Wind Burst III' },
    ko: { name: '스톤골렘', equipment: '플레이어가 만든 골렘이 아님, 양손에 날카로움 III·돌풍 III 돌' },
  },
  {
    id: 'snowWitch',
    zone: 'snow',
    entity: 'witch',
    hp: 3000,
    kind: 'comboBoss',
    en: { name: 'SnowWitch', equipment: 'Custom blaze-rod staff' },
    ko: { name: '설산마녀', equipment: '커스텀 블레이즈 막대 지팡이' },
  },
  {
    id: 'elderGuardian',
    zone: 'ocean',
    entity: 'elderGuardian',
    hp: 10000,
    kind: 'comboBoss',
    en: { name: 'ElderGuardian', equipment: 'None' },
    ko: { name: '엘더가디언', equipment: '없음' },
  },
  {
    id: 'nightCorpsCommander',
    zone: 'dark',
    entity: 'skeleton',
    hp: 25000,
    kind: 'comboBoss',
    en: { name: 'NightCorpsCommander', equipment: 'Dark banner helmet, black leather armor, custom bow' },
    ko: { name: '밤의군단장', equipment: '어두운 깃발 투구, 검은 가죽 갑옷, 커스텀 활' },
  },
  {
    id: 'drB',
    zone: 'hyper',
    entity: 'illusioner',
    hp: 40000,
    kind: 'comboBoss',
    en: { name: 'Dr.B', equipment: 'Black stained-glass head, custom bow' },
    ko: { name: '닥터B', equipment: '검은 색유리 머리, 커스텀 활' },
  },
  {
    id: 'redKnight',
    zone: 'red',
    entity: 'skeleton',
    hp: 60000,
    kind: 'comboBoss',
    en: { name: 'RedKnight', equipment: 'Red leather armor, custom bow and Fire Aspect III shield, fire resistance' },
    ko: { name: '붉은기사', equipment: '붉은 가죽 갑옷, 커스텀 활과 발화 III 방패, 화염 저항' },
  },
  {
    id: 'terrorist',
    zone: 'poison',
    entity: 'skeleton',
    hp: 100000,
    kind: 'comboBoss',
    en: { name: 'Terrorist', equipment: 'Netherite armor, custom Fire Aspect III bow and brewing stand' },
    ko: { name: '테러리스트', equipment: '네더라이트 갑옷, 커스텀 발화 III 활과 양조기' },
  },

  // Raid-world phase-2 bosses (OverworldRaids / NethercoreRaids / EndercoreRaids / WitherRaids)
  {
    id: 'outragedGolem',
    zone: 'mountains',
    entity: 'ironGolem',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'OutragedGolem', equipment: 'Giant size (scale 2), regeneration. Overworld raid phase 2 after StoneGolem' },
    ko: { name: '분노한골렘', equipment: '거대 크기(배율 2), 재생. 스톤골렘 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'frozenHeart',
    zone: 'snow',
    entity: 'witch',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'FrozenHeart', equipment: 'Overworld raid phase 2 after SnowWitch' },
    ko: { name: '차가운심장의마녀', equipment: '설산마녀 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'encroachedElderGuardian',
    zone: 'ocean',
    entity: 'elderGuardian',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'Encroached ElderGuardian', equipment: 'Overworld raid phase 2 after ElderGuardian' },
    ko: { name: '잠식된 엘더가디언', equipment: '엘더가디언 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'nightMare',
    zone: 'dark',
    entity: 'skeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'NightMare', equipment: 'Black Mojang-pattern banner, custom bow. Overworld raid phase 2 after NightCorpsCommander' },
    ko: { name: '악몽의형상', equipment: '모장 문양 검은 깃발, 커스텀 활. 밤의군단장 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'theBeast',
    zone: 'hyper',
    entity: 'husk',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'TheBeast', equipment: 'Black stained-glass head, custom netherite pickaxe. Overworld raid phase 2 after Dr.B' },
    ko: { name: '더비스트', equipment: '검은 색유리 머리, 커스텀 네더라이트 곡괭이. 닥터B 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'ruinedRedKnight',
    zone: 'red',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'Ruined RedKnight', equipment: 'Netherite armor, custom bow and Fire Aspect shield. Overworld raid phase 2 after RedKnight' },
    ko: { name: '몰락한 붉은기사', equipment: '네더라이트 갑옷, 커스텀 활과 발화 방패. 붉은기사 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'theApocalyptic',
    zone: 'poison',
    entity: 'skeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'TheApocalyptic', equipment: 'Netherite armor, custom bow. Overworld raid phase 2 after Terrorist' },
    ko: { name: '종말론자', equipment: '네더라이트 갑옷, 커스텀 활. 테러리스트 다음 오버월드 레이드 2단계' },
  },
  {
    id: 'distortedWraith',
    zone: 'nether',
    entity: 'breeze',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'DistortedWraith', equipment: 'Warped nylium helmet, regeneration. Nether raid phase 2, warped' },
    ko: { name: '왜곡된망령', equipment: '뒤틀린 네사체 투구, 재생. 네더 레이드 2단계, 뒤틀린 숲' },
  },
  {
    id: 'lordOfPhantoms',
    zone: 'nether',
    entity: 'illusioner',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'LordOfPhantoms', equipment: 'Verdant froglight head, bow, silent. Nether raid phase 2, soul sand valley' },
    ko: { name: '혼령의군주', equipment: '초록빛 개구리등 머리, 활, 소리를 내지 않음. 네더 레이드 2단계, 영혼 모래 골짜기' },
  },
  {
    id: 'crimsonSavager',
    zone: 'nether',
    entity: 'witherSkeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'CrimsonSavager', equipment: 'Custom bow and netherite sword. Nether raid phase 2, crimson forest' },
    ko: { name: '진홍빛학살자', equipment: '커스텀 활과 네더라이트 검. 네더 레이드 2단계, 진홍빛 숲' },
  },
  {
    id: 'cannibalPiglin',
    zone: 'nether',
    entity: 'piglin',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'CannibalPiglin', equipment: 'Player-head helmet and off-hand, orange leather armor, crossbow. Nether raid phase 2' },
    ko: { name: '식인피글린', equipment: '플레이어 머리 투구·보조손, 주황 가죽 갑옷, 쇠뇌. 네더 레이드 2단계' },
  },
  {
    id: 'distroyer',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'Distroyer', equipment: 'Obsidian head, dark purple leather armor, bow and end crystal. End raid phase 2' },
    ko: { name: '차원파괴자', equipment: '흑요석 머리, 짙은 보라 가죽 갑옷, 활과 엔드 수정. 엔드 레이드 2단계' },
  },
  {
    id: 'voidGod',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: { name: 'VoidGod', equipment: 'Indigo leather armor with eye trim, bow and note block. End raid phase 2' },
    ko: { name: '공허의화신', equipment: '남보라 가죽 갑옷(눈 장식), 활과 소리 블록. 엔드 레이드 2단계' },
  },
  {
    id: 'witherTrueForm',
    zone: 'wither',
    entity: 'wither',
    kind: 'raidBoss',
    hpScale: 1.5,
    en: { name: 'The Wither: True Form', equipment: 'Final wither raid boss. Health is 1.5× the previous phase' },
    ko: { name: '더 위더: 트루폼', equipment: '위더 레이드 최종 보스. 체력은 이전 페이즈의 1.5배' },
  },
];
