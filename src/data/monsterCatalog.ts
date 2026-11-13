import type { LocalizedText } from './classCatalog';

/**
 * Field monsters from rpgskills-common monsters/*MobsSpawn.java,
 * combo bosses from *Raids.java Boss(), and raid-world phase-1/2 bosses.
 * Nether/Ender raids have unique phase-1 forms; Wither phase 2 is the same skeleton after half health.
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
  en: { name: string; story: string };
  ko: { name: string; story: string };
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
      biomes: 'Peaks, hills, stony areas, taiga, dappled forest (not snowy)',
      defaultMobs: 'Other mobs become "Mountains" + vanilla name with 120 HP.',
    },
    ko: {
      name: '산악지대',
      biomes: '봉우리, 언덕, 돌 지형, 타이가, 단풍숲 (눈 덮인 곳 제외)',
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
      biomes: 'Forests (except dappled forest), caves, deep dark (Overworld)',
      defaultMobs: 'Other mobs become "DarkField" + vanilla name with 5,000 HP.',
    },
    ko: {
      name: '암흑지대',
      biomes: '숲 (단풍숲 제외), 동굴, 딥 다크 (오버월드)',
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
      defaultMobs:
        'No field monsters. Phases 1–2 are The Wither (giant wither skeleton on a quartz throne, then standing after half health). The final boss is The Wither: True Form.',
    },
    ko: {
      name: '위더 레이드',
      biomes: '위더 레이드 월드. 위더 레이드 포탈로 입장합니다.',
      defaultMobs:
        '필드 몬스터는 없습니다. 1·2단계는 [더 위더](거대 위더스켈레톤, 석영 왕좌 → 체력 절반에서 해방)이고, 최종 보스는 [더 위더: 트루폼]입니다.',
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
    en: {
      name: 'WalkingStone',
      story: 'A miner who fell asleep in a collapsed tunnel and woke up as part of the mountain. Stone has grown over his head, and he grips two rocks as if he has forgotten what tools were for.',
    },
    ko: {
      name: '워킹스톤',
      story: '무너진 갱도에서 잠든 광부가 산의 일부가 되어 깨어났습니다. 머리는 바위로 굳었고, 연장 쓰는 법을 잊은 듯 양손에 돌덩이만 쥐고 걷습니다.',
    },
  },
  {
    id: 'gravelArcher',
    zone: 'mountains',
    entity: 'skeleton',
    hp: 100,
    replaces: 'undead',
    en: {
      name: 'GravelArcher',
      story: 'A company of mountain archers buried by a rockslide, raised again by the Wither’s breath under helmets of gravel. Their bows still pull as hard as they did in life.',
    },
    ko: {
      name: '자갈궁수',
      story: '산사태에 묻혔던 산악 궁수대가 위더의 숨결에 자갈 투구를 쓴 채 다시 일어섰습니다. 시위를 당기는 힘만큼은 살아 있을 때 그대로입니다.',
    },
  },
  {
    id: 'mountainSniper',
    zone: 'mountains',
    entity: 'pillager',
    hp: 80,
    replaces: 'undead',
    en: {
      name: 'MountainSniper',
      story: 'A pillager who deserted his band and learned to survive on the cliffs. Hidden under oak leaves, he leaps from ledge to ledge and answers every footstep with a spread of crossbow bolts.',
    },
    ko: {
      name: '산악저격수',
      story: '무리를 떠나 절벽에서 살아남는 법을 익힌 약탈자입니다. 참나무 잎으로 몸을 숨기고 바위 턱을 뛰어다니며, 발소리가 들리면 쇠뇌 화살을 여러 발 한꺼번에 쏟아붓습니다.',
    },
  },
  {
    id: 'flowerFairy',
    zone: 'mountains',
    entity: 'vex',
    hp: 45,
    replaces: 'undead',
    en: {
      name: 'FlowerFairy',
      story: 'Once a spirit that tended the mountain azaleas. The violet mist soured its blessing into a curse, and now it dives at travelers with a dandelion in one hand and a sunflower in the other.',
    },
    ko: {
      name: '꽃요정',
      story: '본래 산 진달래를 돌보던 정령이었습니다. 보랏빛 안개가 축복을 저주로 바꿔 놓았고, 이제는 민들레와 해바라기를 쥔 채 지나가는 이를 덮칩니다.',
    },
  },
  {
    id: 'stoneSpider',
    zone: 'mountains',
    entity: 'spider',
    hp: 100,
    replaces: 'spider',
    en: {
      name: 'StoneSpider',
      story: 'A spider that spun its web in a quarry for so long that its shell turned to rock. It is slower than its cousins, but far harder to crack.',
    },
    ko: {
      name: '돌거미',
      story: '채석장에서 너무 오래 거미줄을 친 탓에 껍질이 돌로 굳어 버린 거미입니다. 다른 거미보다 느리지만 훨씬 단단합니다.',
    },
  },
  {
    id: 'woodCreeper',
    zone: 'mountains',
    entity: 'creeper',
    hp: 100,
    replaces: 'creeper',
    en: {
      name: 'WoodCreeper',
      story: 'A creeper that stood among the pines until bark grew over it. It moves sluggishly, like a tree that has only just remembered it can walk.',
    },
    ko: {
      name: '나무크리퍼',
      story: '소나무 사이에 가만히 서 있다가 나무껍질에 덮여 버린 크리퍼입니다. 걸을 수 있다는 걸 이제 막 떠올린 나무처럼 느릿하게 움직입니다.',
    },
  },
  {
    id: 'treeMan',
    zone: 'mountains',
    entity: 'enderman',
    hp: 150,
    replaces: 'enderman',
    en: {
      name: 'TreeMan',
      story: 'An enderman that wanders the slopes clutching an acacia sapling. Nobody knows where it means to plant it, and nobody has dared to ask.',
    },
    ko: {
      name: '트리맨',
      story: '아카시아 묘목을 꼭 쥐고 비탈을 떠도는 엔더맨입니다. 어디에 심으려는 건지 아무도 모르고, 감히 물어본 사람도 없습니다.',
    },
  },

  // Snowy (SnowMobsSpawn)
  {
    id: 'walkingIce',
    zone: 'snow',
    entity: 'drowned',
    hp: 900,
    replaces: 'undead',
    en: {
      name: 'WalkingIce',
      story: 'A drowned that crawled out of a frozen lake and never thawed. Its head is a block of ice, and it hurls snowballs packed hard enough to bruise.',
    },
    ko: {
      name: '워킹아이스',
      story: '얼어붙은 호수에서 기어 나와 끝내 녹지 않은 드라운드입니다. 머리는 얼음덩이이고, 멍이 들 만큼 단단히 뭉친 눈덩이를 던집니다.',
    },
  },
  {
    id: 'frostSkull',
    zone: 'snow',
    entity: 'stray',
    hp: 800,
    replaces: 'undead',
    en: {
      name: 'FrostSkull',
      story: 'The remains of a border garrison that froze at its post. Wrapped in white leather, the skeletons still keep watch and shoot anyone who crosses the snowline.',
    },
    ko: {
      name: '서리해골',
      story: '초소를 지키다 그대로 얼어붙은 국경 수비대의 유해입니다. 흰 가죽을 두른 해골들은 지금도 경계를 서며 설선을 넘는 자를 쏩니다.',
    },
  },
  {
    id: 'frostHunter',
    zone: 'snow',
    entity: 'stray',
    hp: 650,
    replaces: 'undead',
    en: {
      name: 'FrostHunter',
      story: 'A trapper who chased one last beast into a blizzard. He came back with a diamond axe and no memory of what he was hunting, so now he hunts everything.',
    },
    ko: {
      name: '서리사냥꾼',
      story: '마지막 사냥감을 쫓아 눈보라 속으로 들어간 덫사냥꾼입니다. 다이아몬드 도끼를 들고 돌아왔지만 무엇을 쫓았는지는 잊었고, 그래서 이제는 모든 것을 사냥합니다.',
    },
  },
  {
    id: 'frozenMage',
    zone: 'snow',
    entity: 'stray',
    hp: 600,
    replaces: 'undead',
    en: {
      name: 'FrozenMage',
      story: 'A scholar who tried to bottle winter itself. The spell froze him instead, and blue ice still crackles in both of his hands.',
    },
    ko: {
      name: '서리마법사',
      story: '겨울 자체를 병에 담으려던 학자입니다. 주문은 오히려 그를 얼려 버렸고, 지금도 양손에서 파란 얼음이 갈라지는 소리가 납니다.',
    },
  },
  {
    id: 'frostWitch',
    zone: 'snow',
    entity: 'witch',
    hp: 650,
    replaces: 'undead',
    en: {
      name: 'FrostWitch',
      story: 'An apprentice of the SnowWitch who wears a smoker on her head to keep her brews from freezing. Her potions are cold enough to slow the blood.',
    },
    ko: {
      name: '서리마녀',
      story: '물약이 얼지 않도록 훈연기를 머리에 얹고 다니는 설산마녀의 제자입니다. 그녀의 물약은 피가 느려질 만큼 차갑습니다.',
    },
  },
  {
    id: 'iceSpider',
    zone: 'snow',
    entity: 'spider',
    hp: 580,
    replaces: 'spider',
    en: {
      name: 'IceSpider',
      story: 'A spider whose web freezes the moment it is spun. It clings to glacier walls and waits for prey that slips.',
    },
    ko: {
      name: '얼음거미',
      story: '거미줄을 치는 순간 얼어붙는 거미입니다. 빙벽에 붙어 미끄러지는 먹잇감을 기다립니다.',
    },
  },
  {
    id: 'coldCreeper',
    zone: 'snow',
    entity: 'creeper',
    hp: 600,
    replaces: 'creeper',
    en: {
      name: 'ColdCreeper',
      story: 'The cold has slowed this creeper’s legs, but not its fuse. Do not mistake its slow approach for hesitation.',
    },
    ko: {
      name: '냉기크리퍼',
      story: '추위에 다리는 느려졌지만 도화선만큼은 그대로인 크리퍼입니다. 느릿하게 다가온다고 망설이는 것이라 착각하지 마세요.',
    },
  },
  {
    id: 'iceMan',
    zone: 'snow',
    entity: 'enderman',
    hp: 700,
    replaces: 'enderman',
    en: {
      name: 'IceMan',
      story: 'An enderman that carries a block of ice from peak to peak. Mountain folk say it is building something, one block at a time.',
    },
    ko: {
      name: '아이스맨',
      story: '얼음 블록을 들고 봉우리에서 봉우리로 옮겨 다니는 엔더맨입니다. 산사람들은 그것이 한 블록씩 무언가를 쌓고 있다고 말합니다.',
    },
  },
  {
    id: 'iceGuardian',
    zone: 'snow',
    entity: 'guardian',
    hp: 1000,
    replaces: 'guardian',
    en: {
      name: 'IceGuardian',
      story: 'A guardian that was trapped when the sea around its monument froze. It now guards the frozen water with the same blind loyalty.',
    },
    ko: {
      name: '아이스가디언',
      story: '유적 주변 바다가 얼어붙을 때 함께 갇혀 버린 가디언입니다. 이제는 얼어붙은 물을 예전과 같은 맹목적인 충성으로 지킵니다.',
    },
  },

  // Ocean (OceanMobsSpawn)
  {
    id: 'lanternMan',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2500,
    replaces: 'ocean',
    en: {
      name: 'LanternMan',
      story: 'Keeper of the sunken lighthouses near the ocean ruins. With a sea lantern for a head and a fishing rod in each hand, it reels careless swimmers down into the dark.',
    },
    ko: {
      name: '랜턴맨',
      story: '바다 유적 근처에 가라앉은 등대를 지키는 자입니다. 바다 랜턴을 머리에 달고, 양손 낚싯대로 방심한 헤엄꾼을 어둠 속으로 끌어당깁니다.',
    },
  },
  {
    id: 'mimic',
    zone: 'ocean',
    entity: 'stray',
    hp: 3000,
    replaces: 'ocean',
    en: {
      name: 'Mimic',
      story: 'A pirate who loved his treasure so much that he became the chest. It lies on the seabed as still as a trapped chest and only moves once someone strikes it.',
    },
    ko: {
      name: '미믹',
      story: '보물을 너무 사랑한 나머지 상자가 되어 버린 해적입니다. 해저에서 덫 상자처럼 가만히 있다가, 누군가 건드리는 순간 움직이기 시작합니다.',
    },
  },
  {
    id: 'oceanPhantom',
    zone: 'ocean',
    entity: 'phantom',
    hp: 3000,
    replaces: 'ocean',
    en: {
      name: 'OceanPhantom',
      story: 'Sailors who never slept on their final voyage merged into this giant phantom. It circles the night sea looking for crews as exhausted as they once were.',
    },
    ko: {
      name: '바다망령',
      story: '마지막 항해에서 끝내 잠들지 못한 선원들이 하나로 뭉친 거대한 팬텀입니다. 밤바다를 맴돌며 자신들처럼 지친 선원을 찾습니다.',
    },
  },
  {
    id: 'seaShulker',
    zone: 'ocean',
    entity: 'shulker',
    hp: 2000,
    replaces: 'ocean',
    en: {
      name: 'SeaShulker',
      story: 'A shulker that drifted down from the End and settled among the reefs. Its shell has taken on the blue of deep water.',
    },
    ko: {
      name: '바다셜커',
      story: '엔드에서 떠내려와 산호초 사이에 자리 잡은 셜커입니다. 껍데기가 깊은 바다처럼 파랗게 물들었습니다.',
    },
  },
  {
    id: 'drownedPirate',
    zone: 'ocean',
    entity: 'drowned',
    hp: 1800,
    replaces: 'ocean',
    en: {
      name: 'DrownedPirate',
      story: 'A deckhand who went down with his captain. Brain coral has grown over his skull, and he still swings a cutlass and a gnawed bone at anyone who boards his wreck.',
    },
    ko: {
      name: '떠도는해적',
      story: '선장과 함께 가라앉은 해적선 선원입니다. 두개골 위로 뇌 산호가 자랐고, 난파선에 오르는 자에게 지금도 칼과 갉아 먹던 뼈를 휘두릅니다.',
    },
  },
  {
    id: 'drownedCaptain',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2600,
    replaces: 'ocean',
    en: {
      name: 'DrownedCaptain',
      story: 'The ghost of a pirate captain who set his own ship ablaze rather than surrender. He still holds his diamond sword and the flint and steel that lit the fire.',
    },
    ko: {
      name: '해적선장의원혼',
      story: '항복하느니 제 배에 불을 지른 해적 선장의 원혼입니다. 다이아몬드 검과 그날 불을 붙인 부싯돌과 부시를 아직도 쥐고 있습니다.',
    },
  },
  {
    id: 'drownedLancer',
    zone: 'ocean',
    entity: 'drowned',
    hp: 2000,
    replaces: 'ocean',
    en: {
      name: 'DrownedLancer',
      story: 'A knight of a sunken kingdom, still in diamond armor under a prismarine helm. He charges with trident and shield as if his kingdom had never fallen.',
    },
    ko: {
      name: '떠도는창기병',
      story: '바다에 가라앉은 왕국의 기사입니다. 프리즈머린 투구 아래 다이아몬드 갑옷을 입고, 왕국이 무너진 적 없다는 듯 삼지창과 방패로 돌격합니다.',
    },
  },

  // Dark Field (DarkMobsSpawn)
  {
    id: 'erodedKnight',
    zone: 'dark',
    entity: 'zombie',
    hp: 6000,
    replaces: 'undead',
    en: {
      name: 'ErodedKnight',
      story: 'A knight of the Night Corps whose body the dark forest slowly consumed. Rotting dark oak has replaced his head, yet he still raises his netherite sword and shield for his commander.',
    },
    ko: {
      name: '잠식된기사',
      story: '어두운 숲에 몸이 서서히 잠식된 밤의 군단 기사입니다. 썩은 짙은 참나무가 머리를 대신했지만, 여전히 군단장을 위해 네더라이트 검과 방패를 듭니다.',
    },
  },
  {
    id: 'nightArcher',
    zone: 'dark',
    entity: 'skeleton',
    hp: 5000,
    replaces: 'undead',
    en: {
      name: 'NightArcher',
      story: 'An archer of the Night Corps. It shoots from between the trees, where even moonlight does not reach.',
    },
    ko: {
      name: '밤의사수',
      story: '밤의 군단의 사수입니다. 달빛조차 닿지 않는 나무 사이에서 활을 쏩니다.',
    },
  },
  {
    id: 'erodedPillager',
    zone: 'dark',
    entity: 'pillager',
    hp: 5000,
    replaces: 'undead',
    en: {
      name: 'ErodedPillager',
      story: 'A raider who sold out his band to the Night Corps in exchange for protection. The forest took his face as payment.',
    },
    ko: {
      name: '잠식된약탈자',
      story: '보호를 받는 대가로 무리를 밤의 군단에 팔아넘긴 약탈자입니다. 숲은 그 값으로 그의 얼굴을 가져갔습니다.',
    },
  },
  {
    id: 'nightWitch',
    zone: 'dark',
    entity: 'witch',
    hp: 5000,
    replaces: 'undead',
    en: {
      name: 'NightWitch',
      story: 'The Night Corps’ witch, who brews only in darkness so that no one can see what goes into the bottle.',
    },
    ko: {
      name: '밤의마녀',
      story: '밤의 군단 소속 마녀입니다. 병에 무엇이 들어가는지 아무도 보지 못하도록 어둠 속에서만 물약을 끓입니다.',
    },
  },
  {
    id: 'nightSpider',
    zone: 'dark',
    entity: 'caveSpider',
    hp: 4000,
    replaces: 'spider',
    en: {
      name: 'NightSpider',
      story: 'A cave spider that hunts by sound under the dark canopy. It is very fast; by the time you hear it, it is already on you.',
    },
    ko: {
      name: '밤거미',
      story: '어두운 숲 그늘 아래서 소리로 사냥하는 동굴거미입니다. 매우 빨라서, 발소리가 들릴 때쯤이면 이미 곁에 와 있습니다.',
    },
  },
  {
    id: 'darkCreeper',
    zone: 'dark',
    entity: 'creeper',
    hp: 4500,
    replaces: 'creeper',
    en: {
      name: 'DarkCreeper',
      story: 'A creeper that has soaked up the shadows of the forest floor. It is nearly invisible until it starts to hiss.',
    },
    ko: {
      name: '다크크리퍼',
      story: '숲 바닥의 그림자를 머금은 크리퍼입니다. 쉬익 소리를 내기 전까지는 거의 보이지 않습니다.',
    },
  },
  {
    id: 'gloomyMan',
    zone: 'dark',
    entity: 'enderman',
    hp: 6000,
    replaces: 'enderman',
    en: {
      name: 'GloomyMan',
      story: 'An enderman that stares at the ground instead of at you. Villagers say it is in mourning; travelers who meet its eyes rarely say anything at all.',
    },
    ko: {
      name: '글루미맨',
      story: '사람 대신 땅만 바라보는 엔더맨입니다. 마을 사람들은 그것이 애도 중이라 하고, 눈이 마주친 여행자들은 대개 아무 말도 하지 않습니다.',
    },
  },

  // Desert (HyperMobsSpawn)
  {
    id: 'stalker',
    zone: 'hyper',
    entity: 'husk',
    hp: 12000,
    replaces: 'undead',
    en: {
      name: 'Stalker',
      story: 'A test subject that Dr.B fitted with a lodestone so it could lock onto any target. It follows its quarry across the dunes with a netherite axe and an end rod, and it never loses the trail.',
    },
    ko: {
      name: '추적자',
      story: '닥터B가 어떤 목표든 고정하도록 자석석을 심어 놓은 실험체입니다. 네더라이트 도끼와 엔드 막대기를 든 채 사막을 가로질러 목표를 쫓으며, 한 번 잡은 흔적은 놓치지 않습니다.',
    },
  },
  {
    id: 'rayArcher',
    zone: 'hyper',
    entity: 'skeleton',
    hp: 9000,
    replaces: 'undead',
    en: {
      name: 'RayArcher',
      story: 'Dr.B’s prototype light infantry. Its stained-glass visor focuses the power of a beacon into every arrow it fires.',
    },
    ko: {
      name: '광선궁병',
      story: '닥터B의 경보병 시제품입니다. 색유리 바이저가 신호기의 힘을 모아 화살 한 발 한 발에 싣습니다.',
    },
  },
  {
    id: 'securityRobot',
    zone: 'hyper',
    entity: 'vindicator',
    hp: 10000,
    replaces: 'undead',
    en: {
      name: 'SecurityRobot',
      story: 'A guard unit built on a vindicator frame with a target block for a sensor. It carries a shield in each hand and patrols the lab perimeter without making a sound.',
    },
    ko: {
      name: '경비로봇',
      story: '변명자의 몸에 과녁 블록 센서를 얹어 만든 경비 기체입니다. 양손에 방패를 들고 소리 하나 내지 않은 채 연구소 외곽을 순찰합니다.',
    },
  },
  {
    id: 'madScientist',
    zone: 'hyper',
    entity: 'witch',
    hp: 8500,
    replaces: 'undead',
    en: {
      name: 'MadScientist',
      story: 'One of Dr.B’s assistants who tested one sample too many on herself. She still runs experiments, mostly on intruders.',
    },
    ko: {
      name: '미친과학자',
      story: '견본을 한 병 너무 많이 자기 몸에 시험한 닥터B의 조수입니다. 지금도 실험을 계속하는데, 주로 침입자가 대상입니다.',
    },
  },
  {
    id: 'scoutSpider',
    zone: 'hyper',
    entity: 'spider',
    hp: 9000,
    replaces: 'spider',
    en: {
      name: 'ScoutSpider',
      story: 'Dr.B released these spiders to map the desert. They are very fast and always find their way back to the lab with news of visitors.',
    },
    ko: {
      name: '정찰용거미',
      story: '닥터B가 사막 지도를 그리려고 풀어 놓은 거미입니다. 매우 빠르고, 침입자가 생기면 반드시 연구소로 돌아가 알립니다.',
    },
  },
  {
    id: 'creepJumper',
    zone: 'hyper',
    entity: 'creeper',
    hp: 6000,
    replaces: 'creeper',
    en: {
      name: 'CreepJumper',
      story: 'A creeper from Dr.B’s mobility trials. It no longer walks toward you; it drops on you from above.',
    },
    ko: {
      name: '크립점퍼',
      story: '닥터B의 기동 실험에서 나온 크리퍼입니다. 더는 걸어서 다가오지 않고, 머리 위에서 떨어집니다.',
    },
  },
  {
    id: 'watcher',
    zone: 'hyper',
    entity: 'enderman',
    hp: 12000,
    replaces: 'enderman',
    en: {
      name: 'Watcher',
      story: 'An enderman wired into the lab’s surveillance network. Whatever it sees, Dr.B sees too.',
    },
    ko: {
      name: '감시자',
      story: '연구소 감시망에 연결된 엔더맨입니다. 그것이 보는 것은 닥터B도 함께 봅니다.',
    },
  },

  // Badlands (RedMobsSpawn)
  {
    id: 'walkingRedSand',
    zone: 'red',
    entity: 'husk',
    hp: 15000,
    replaces: 'undead',
    en: {
      name: 'WalkingRedSand',
      story: 'A prospector who died in the badlands gold rush. Red sand filled his body, and the campfires in his hands have never gone out.',
    },
    ko: {
      name: '워킹레드샌드',
      story: '악지의 금광 열풍 속에서 죽은 광부입니다. 붉은 모래가 몸을 채웠고, 양손에 든 모닥불은 한 번도 꺼진 적이 없습니다.',
    },
  },
  {
    id: 'burnedSkull',
    zone: 'red',
    entity: 'skeleton',
    hp: 12000,
    replaces: 'undead',
    en: {
      name: 'BurnedSkull',
      story: 'Archers of the RedKnight’s order who were burned to the bone in his trial by fire. Their arrows still carry the flame.',
    },
    ko: {
      name: '그을린해골',
      story: '붉은기사의 불의 시련에서 뼈까지 타 버린 기사단의 궁수들입니다. 화살에는 아직도 그 불길이 실려 있습니다.',
    },
  },
  {
    id: 'burnedMage',
    zone: 'red',
    entity: 'illusioner',
    hp: 10500,
    replaces: 'undead',
    en: {
      name: 'BurnedMage',
      story: 'The order’s court mage, who tried to put out the trial fire with magic and failed. Now he throws fire charges instead.',
    },
    ko: {
      name: '그을린마법사',
      story: '시련의 불길을 마법으로 끄려다 실패한 기사단의 궁정 마법사입니다. 이제는 오히려 화염구를 던집니다.',
    },
  },
  {
    id: 'redBruise',
    zone: 'red',
    entity: 'skeleton',
    hp: 12000,
    replaces: 'undead',
    en: {
      name: 'RedBruise',
      story: 'A swordsman of the RedKnight’s order who survived the trial only in the worst sense. He fights with two burning iron swords, and his armor is the color the fire left on him.',
    },
    ko: {
      name: '붉은전사',
      story: '붉은기사의 시련을 가장 나쁜 의미로 견뎌 낸 기사단의 검사입니다. 불타는 철 검 두 자루를 휘두르며, 갑옷은 불길이 남긴 색 그대로입니다.',
    },
  },
  {
    id: 'burningSpider',
    zone: 'red',
    entity: 'spider',
    hp: 10000,
    replaces: 'spider',
    en: {
      name: 'BurningSpider',
      story: 'A spider that nests in sun-baked red sand. Its bite burns like a live coal.',
    },
    ko: {
      name: '불거미',
      story: '햇볕에 달궈진 붉은 모래에 둥지를 트는 거미입니다. 물리면 숯불처럼 화끈거립니다.',
    },
  },
  {
    id: 'hotCreeper',
    zone: 'red',
    entity: 'creeper',
    hp: 10000,
    replaces: 'creeper',
    en: {
      name: 'HotCreeper',
      story: 'A creeper so overheated that it stays permanently charged. It moves slowly, as if trying not to set itself off.',
    },
    ko: {
      name: '열기크리퍼',
      story: '너무 달아올라 늘 대전된 상태로 다니는 크리퍼입니다. 스스로 터지지 않으려는 듯 느릿하게 움직입니다.',
    },
  },
  {
    id: 'redMan',
    zone: 'red',
    entity: 'enderman',
    hp: 15000,
    replaces: 'enderman',
    en: {
      name: 'RedMan',
      story: 'An enderman that hauls magma up from the deep canyons. Wherever it sets a block down, the ground begins to smoke.',
    },
    ko: {
      name: '레드맨',
      story: '깊은 협곡에서 마그마를 퍼 올려 나르는 엔더맨입니다. 블록을 내려놓는 곳마다 땅에서 연기가 피어오릅니다.',
    },
  },

  // Swamp (PoisonMobsSpawn)
  {
    id: 'drugAddict',
    zone: 'poison',
    entity: 'zombie',
    hp: 25000,
    replaces: 'undead',
    en: {
      name: 'DrugAddict',
      story: 'A soldier of the swamp garrison who was dosed with an experimental combat stimulant. He runs faster than any human should, and carries a brewing stand to cook up more.',
    },
    ko: {
      name: '약물중독자',
      story: '늪지대 주둔군에서 실험용 전투 각성제를 투여받은 병사입니다. 사람이라면 낼 수 없는 속도로 달리고, 약을 더 만들려고 양조기를 메고 다닙니다.',
    },
  },
  {
    id: 'patrol',
    zone: 'poison',
    entity: 'bogged',
    hp: 23000,
    replaces: 'undead',
    en: {
      name: 'Patrol',
      story: 'A sentry ordered to hold his post who was never relieved. Mangrove leaves took root in his ghillie hood while he waited, and he still shoots anyone without the password.',
    },
    ko: {
      name: '보초병',
      story: '자리를 지키라는 명령을 받고 끝내 교대받지 못한 보초병입니다. 기다리는 사이 맹그로브 잎이 길리 두건에 뿌리를 내렸고, 암구호를 모르는 자는 지금도 쏩니다.',
    },
  },
  {
    id: 'giantSlime',
    zone: 'poison',
    entity: 'slime',
    hp: 20000,
    replaces: 'undead',
    en: {
      name: 'GiantSlime',
      story: 'The garrison dumped its failed chemicals into the swamp. Something drank all of them and never stopped growing.',
    },
    ko: {
      name: '거대슬라임',
      story: '주둔군이 실패한 약품을 늪에 쏟아 버렸습니다. 무언가가 그걸 전부 마셨고, 그 뒤로 멈추지 않고 커졌습니다.',
    },
  },
  {
    id: 'grenadier',
    zone: 'poison',
    entity: 'witch',
    hp: 20000,
    replaces: 'undead',
    en: {
      name: 'Grenadier',
      story: 'The garrison’s chemical-warfare specialist, who throws potions like grenades. She is the reason the swamp water glows.',
    },
    ko: {
      name: '척탄병',
      story: '물약을 수류탄처럼 던지는 주둔군의 화학전 전문가입니다. 늪 물이 빛나는 건 그녀 때문입니다.',
    },
  },
  {
    id: 'venomSpider',
    zone: 'poison',
    entity: 'caveSpider',
    hp: 18000,
    replaces: 'spider',
    en: {
      name: 'VenomSpider',
      story: 'A cave spider bred in the garrison labs, its carapace patterned like their camouflage. It is very fast, and its venom was refined alongside the stimulants.',
    },
    ko: {
      name: '맹독거미',
      story: '주둔군 실험실에서 길러져 껍질마저 위장 무늬를 닮은 동굴거미입니다. 매우 빠르고, 독은 각성제와 같은 실험실에서 개량되었습니다.',
    },
  },
  {
    id: 'autoNuker',
    zone: 'poison',
    entity: 'creeper',
    hp: 20000,
    replaces: 'creeper',
    en: {
      name: 'AutoNuker',
      story: 'A creeper strapped with explosives and released into the marsh as a living mine. It does not need orders to know what to do.',
    },
    ko: {
      name: '자폭기',
      story: '폭약을 두르고 살아 있는 지뢰로 늪에 풀린 크리퍼입니다. 무엇을 해야 하는지는 명령 없이도 압니다.',
    },
  },
  {
    id: 'scout',
    zone: 'poison',
    entity: 'enderman',
    hp: 25000,
    replaces: 'enderman',
    en: {
      name: 'Scout',
      story: 'An enderman drafted into the garrison as a reconnaissance unit. It teleports behind enemy lines and reports every position back to the Terrorist.',
    },
    ko: {
      name: '척후병',
      story: '주둔군에 정찰병으로 징집된 엔더맨입니다. 적진 뒤로 순간이동해 모든 위치를 테러리스트에게 보고합니다.',
    },
  },

  // Wild (WildMobsSpawn)
  {
    id: 'ancientZombie',
    zone: 'wild',
    entity: 'zombie',
    hp: 35000,
    replaces: 'undead',
    pack: 5,
    en: {
      name: 'AncientZombie',
      story: 'Warriors of a jungle civilization that vanished long before the Wither was first sealed. They rise in squads of five, carrying netherite swords that no one alive knows how to forge.',
    },
    ko: {
      name: '고대좀비',
      story: '위더가 처음 봉인되기 훨씬 전에 사라진 정글 문명의 전사들입니다. 다섯씩 무리 지어 일어나며, 지금은 아무도 벼리는 법을 모르는 네더라이트 검을 들고 있습니다.',
    },
  },
  {
    id: 'ancientSkeleton',
    zone: 'wild',
    entity: 'skeleton',
    hp: 33000,
    replaces: 'undead',
    pack: 5,
    en: {
      name: 'AncientSkeleton',
      story: 'Archers of the same lost civilization, crowned with jungle leaves. They still hunt in groups of five, as they did a thousand years ago.',
    },
    ko: {
      name: '고대스켈레톤',
      story: '같은 잊힌 문명의 궁수들로, 정글 잎을 관처럼 쓰고 있습니다. 천 년 전처럼 지금도 다섯씩 무리 지어 사냥합니다.',
    },
  },
  {
    id: 'ancientSlime',
    zone: 'wild',
    entity: 'slime',
    hp: 20000,
    replaces: 'undead',
    pack: 5,
    en: {
      name: 'AncientSlime',
      story: 'Slimes that have lived in the temple pools since the civilization fell. They appear in fives and remember nothing but hunger.',
    },
    ko: {
      name: '고대슬라임',
      story: '문명이 무너진 뒤로 신전 웅덩이에서 살아온 슬라임입니다. 다섯씩 나타나며, 배고픔 말고는 아무것도 기억하지 못합니다.',
    },
  },
  {
    id: 'graveRobber',
    zone: 'wild',
    entity: 'vindicator',
    hp: 32000,
    replaces: 'undead',
    pack: 5,
    en: {
      name: 'GraveRobber',
      story: 'Treasure hunters who broke into the ancient tombs and never came out. Now, five at a time, they guard the graves they came to rob.',
    },
    ko: {
      name: '도굴꾼',
      story: '고대 무덤에 들어갔다가 다시는 나오지 못한 도굴꾼들입니다. 이제는 다섯이 함께 자신들이 털러 왔던 무덤을 지킵니다.',
    },
  },
  {
    id: 'ancientSpider',
    zone: 'wild',
    entity: 'caveSpider',
    hp: 27500,
    replaces: 'spider',
    pack: 5,
    en: {
      name: 'AncientSpider',
      story: 'Cave spiders older than the trees growing above them. They swarm in fives and move very fast.',
    },
    ko: {
      name: '고대거미',
      story: '머리 위에 자란 나무보다 오래된 동굴거미입니다. 다섯씩 몰려다니며 매우 빠릅니다.',
    },
  },
  {
    id: 'ancientCreeper',
    zone: 'wild',
    entity: 'creeper',
    hp: 28000,
    replaces: 'creeper',
    en: {
      name: 'AncientCreeper',
      story: 'A creeper from before creepers learned to hide. It has lasted this long because nothing has ever dared to approach it.',
    },
    ko: {
      name: '고대크리퍼',
      story: '크리퍼가 숨는 법을 배우기 전부터 있던 크리퍼입니다. 감히 다가가는 것이 없었기에 지금까지 살아남았습니다.',
    },
  },
  {
    id: 'ancientEnderman',
    zone: 'wild',
    entity: 'enderman',
    hp: 38000,
    replaces: 'enderman',
    en: {
      name: 'AncientEnderman',
      story: 'An enderman that watched the jungle temples being built and then buried. It remembers the lost civilization better than any ruin does.',
    },
    ko: {
      name: '고대엔더맨',
      story: '정글 신전이 세워지고 묻히는 과정을 모두 지켜본 엔더맨입니다. 잊힌 문명을 그 어떤 유적보다 잘 기억합니다.',
    },
  },
  {
    id: 'hammy',
    zone: 'wild',
    entity: 'bee',
    hp: 30000,
    replaces: 'bee',
    en: {
      name: 'Hammy',
      story: 'A jungle bee so round and fluffy that explorers nicknamed it after a hamster. Do not let the name fool you.',
    },
    ko: {
      name: '날햄스터',
      story: '너무 통통하고 털이 북슬북슬해서 탐험가들이 햄스터라는 별명을 붙인 정글 벌입니다. 이름에 속지 마세요.',
    },
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
      story: 'The Ender Dragon’s elite guard, always deployed in threes. They wear the dragon’s head as a helm, leap high into the air, and bring their maces down with a burst of wind.',
    },
    ko: {
      name: '용수호자',
      story: '언제나 셋이 함께 움직이는 엔더 드래곤의 정예 근위대입니다. 용의 머리를 투구로 쓰고, 높이 뛰어올랐다가 돌풍과 함께 철퇴를 내리꽂습니다.',
    },
  },
  {
    id: 'enderMimic',
    zone: 'ender',
    entity: 'stray',
    hp: 75000,
    replaces: 'end',
    en: {
      name: 'EnderMimic',
      story: 'A creature that disguises itself as an ender chest and waits, perfectly still, until someone strikes it. Those who defeat it say a rift opens where it falls.',
    },
    ko: {
      name: '엔더미믹',
      story: '엔더 상자로 위장한 채 누군가 건드릴 때까지 꼼짝 않고 기다리는 존재입니다. 쓰러뜨린 자들은 그 자리에 균열이 열린다고 말합니다.',
    },
  },
  {
    id: 'enderShulker',
    zone: 'ender',
    entity: 'shulker',
    hp: 75000,
    replaces: 'end',
    en: {
      name: 'EnderShulker',
      story: 'A shulker of the End cities whose shell has darkened to royal purple. It defends towers that no one has lived in for ages.',
    },
    ko: {
      name: '엔더셜커',
      story: '껍데기가 짙은 보랏빛으로 물든 엔드 도시의 셜커입니다. 오래전부터 아무도 살지 않는 탑을 지킵니다.',
    },
  },
  {
    id: 'dragonMinion',
    zone: 'ender',
    entity: 'husk',
    hp: 95000,
    replaces: 'end',
    pack: 3,
    en: {
      name: 'DragonMinion',
      story: 'Foot soldiers of the dragon’s legion, armed with a sword in one hand and an axe in the other. They march in threes.',
    },
    ko: {
      name: '용하수인',
      story: '한 손에 검, 다른 손에 도끼를 든 용의 군단 보병입니다. 셋씩 짝지어 행군합니다.',
    },
  },
  {
    id: 'dragonArcher',
    zone: 'ender',
    entity: 'stray',
    hp: 90000,
    replaces: 'end',
    pack: 3,
    en: {
      name: 'DragonArcher',
      story: 'Archers of the dragon’s legion who carry an eye of ender to find their targets across the void. They hunt in threes.',
    },
    ko: {
      name: '용수호자궁수',
      story: '공허 너머의 목표를 찾으려고 엔더의 눈을 지니고 다니는 용의 군단 궁수입니다. 셋씩 사냥합니다.',
    },
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
      story: 'Lancers of the dragon’s legion who drift down slowly from the sky and hurl tridents that always return to their hands. They descend in threes.',
    },
    ko: {
      name: '용수호자창기병',
      story: '하늘에서 천천히 내려앉으며, 던지면 반드시 손으로 돌아오는 삼지창을 쓰는 용의 군단 창기병입니다. 셋씩 내려옵니다.',
    },
  },

  // Combo bosses (*Raids.java Boss())
  {
    id: 'elderCreeper',
    zone: 'plain',
    entity: 'creeper',
    hp: 200,
    kind: 'comboBoss',
    en: {
      name: 'ElderCreeper',
      story: 'The oldest creeper in the plains, and the first creature the violet mist touched when the seal broke. It has swollen to three and a half times normal size and crackles with a permanent charge. It ignores travelers who pass quietly, but when enough of its kin fall nearby, it comes to see who is responsible, and its blast reaches ten blocks.',
    },
    ko: {
      name: '장로크리퍼',
      story: '평원에서 가장 오래된 크리퍼이자, 봉인이 풀렸을 때 보랏빛 안개가 처음 닿은 생명체입니다. 몸은 보통의 세 배 반으로 부풀었고 늘 전기를 머금고 있습니다. 조용히 지나가는 여행자는 내버려 두지만, 근처에서 동족이 여럿 쓰러지면 누구 짓인지 직접 보러 오며, 그 폭발은 열 블록 밖까지 닿습니다.',
    },
  },
  {
    id: 'stoneGolem',
    zone: 'mountains',
    entity: 'ironGolem',
    hp: 1000,
    kind: 'comboBoss',
    en: {
      name: 'StoneGolem',
      story: 'No villager built this golem. When the seal broke, the mountain itself stood up to throw out the intruders crawling over it. It fights with two whetted stones that kick up gusts of wind, and it has had a splitting headache ever since it woke. "Die!"',
    },
    ko: {
      name: '스톤골렘',
      story: '어느 주민도 이 골렘을 만들지 않았습니다. 봉인이 풀리던 날, 제 위를 기어다니는 침입자들을 쫓아내려고 산 자체가 일어선 것입니다. 날 선 돌 두 덩이를 휘둘러 돌풍을 일으키며, 깨어난 뒤로 지독한 두통에 시달리고 있습니다. "죽어라!"',
    },
  },
  {
    id: 'snowWitch',
    zone: 'snow',
    entity: 'witch',
    hp: 3000,
    kind: 'comboBoss',
    en: {
      name: 'SnowWitch',
      story: 'The mistress of the snowy peaks, who taught every frost witch her craft. She leans on a staff carved from a blaze rod, the only warmth she still allows herself. She has foreseen the end of the world many times and believes that resisting it only makes it colder.',
    },
    ko: {
      name: '설산마녀',
      story: '모든 서리마녀에게 마법을 가르친 설산의 주인입니다. 블레이즈 막대로 깎은 지팡이에 기대는데, 그것이 그녀가 아직 허락하는 유일한 온기입니다. 세상의 끝을 여러 번 내다본 그녀는, 그것에 저항할수록 더 추워질 뿐이라고 믿습니다.',
    },
  },
  {
    id: 'elderGuardian',
    zone: 'ocean',
    entity: 'elderGuardian',
    hp: 10000,
    kind: 'comboBoss',
    en: {
      name: 'ElderGuardian',
      story: 'The ancient warden of the ocean monuments. It sees the Wither’s return as a judgment and the heroes who fight it as one more vanity. "The pomps and vanities will bring the destruction," it intones, and it does not mean the Wither’s.',
    },
    ko: {
      name: '엘더가디언',
      story: '해저 유적의 오래된 수호자입니다. 위더의 귀환을 심판으로, 그에 맞서는 영웅들을 또 하나의 허영으로 여깁니다. "허영은 파멸을 부를 것이다." 그것이 말하는 파멸은 위더의 것이 아닙니다.',
    },
  },
  {
    id: 'nightCorpsCommander',
    zone: 'dark',
    entity: 'skeleton',
    hp: 25000,
    kind: 'comboBoss',
    en: {
      name: 'NightCorpsCommander',
      story: 'Commander of the Night Corps, an army that marches only beneath the dark canopy. The black banner on its helm once flew over a kingdom that surrendered to the darkness without a fight. Its knights, archers, and witches follow it without question, because it has promised them they will never see the light again.',
    },
    ko: {
      name: '밤의군단장',
      story: '어두운 숲 그늘 아래서만 진군하는 밤의 군단의 지휘관입니다. 투구의 검은 깃발은 한때 싸워 보지도 않고 어둠에 항복한 왕국 위에 걸려 있던 것입니다. 기사와 사수와 마녀들은 다시는 빛을 보지 않게 해 주겠다는 그의 약속을 믿고 묻지도 않고 따릅니다.',
    },
  },
  {
    id: 'drB',
    zone: 'hyper',
    entity: 'illusioner',
    hp: 40000,
    kind: 'comboBoss',
    en: {
      name: 'Dr.B',
      story: 'A scientist who built a laboratory in the desert to study the Wither’s power. Every stalker, robot, and scouting spider in the dunes is his work. He believes evolution can outrun the apocalypse, and when his creations are not enough, he has started experimenting on himself.',
    },
    ko: {
      name: '닥터B',
      story: '위더의 힘을 연구하려고 사막 한가운데 연구소를 세운 과학자입니다. 모래 언덕의 추적자와 경비로봇, 정찰용거미는 모두 그의 작품입니다. 진화가 종말보다 빠를 수 있다고 믿으며, 피조물들로 부족해지자 이제는 자기 몸에 실험을 시작했습니다.',
    },
  },
  {
    id: 'redKnight',
    zone: 'red',
    entity: 'skeleton',
    hp: 60000,
    kind: 'comboBoss',
    en: {
      name: 'RedKnight',
      story: 'Grand master of the order that guarded the badlands. To prove his knights worthy of facing the Wither, he put them through a trial by fire, and only he walked out. He still holds the trial for anyone who enters his canyons, shield ablaze. "Look into my eyes... It is time for your trial."',
    },
    ko: {
      name: '붉은기사',
      story: '악지를 지키던 기사단의 단장입니다. 기사들이 위더와 맞설 자격이 있는지 증명하려고 불의 시련을 치르게 했고, 살아 나온 것은 그 혼자였습니다. 지금도 불타는 방패를 든 채 협곡에 들어오는 모든 이에게 같은 시련을 내립니다. "내 눈을 봐라.... 시련의 시간이다."',
    },
  },
  {
    id: 'terrorist',
    zone: 'poison',
    entity: 'skeleton',
    hp: 100000,
    kind: 'comboBoss',
    en: {
      name: 'Terrorist',
      story: 'Commander of the swamp garrison, in tactical armor patterned like the marsh. When the Wither’s mist cut the base off from the world, he turned its chemical stockpile into weapons and declared war on anyone who comes near. Every stimulant-crazed soldier, living mine, and scout in the swamp answers to him.',
    },
    ko: {
      name: '테러리스트',
      story: '늪지대 주둔군의 지휘관으로, 늪을 닮은 위장 전술 장비를 두르고 있습니다. 위더의 안개가 기지를 세상과 끊어 놓자 화학 비축품을 무기로 바꾸고 다가오는 모든 이에게 전쟁을 선포했습니다. 늪에 있는 약물 중독 병사와 살아 있는 지뢰, 척후병은 모두 그의 명령을 따릅니다.',
    },
  },

  // Raid-world bosses (OverworldRaids / NethercoreRaids / EndercoreRaids / WitherRaids)
  {
    id: 'outragedGolem',
    zone: 'mountains',
    entity: 'ironGolem',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'OutragedGolem',
      story: 'In the raid world, the StoneGolem’s headache finally splits it open. "Argh... my head hurts!" It doubles in size, and the mountain keeps patching its wounds as fast as you can chip them away. This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '분노한골렘',
      story: '레이드 월드에서 스톤골렘의 두통이 마침내 터져 버립니다. "크아아악..머리 아프다!" 몸집은 두 배로 커지고, 깎아 내는 만큼 산이 상처를 다시 메워 줍니다. 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'frozenHeart',
    zone: 'snow',
    entity: 'witch',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'FrozenHeart',
      story: 'Cornered in the raid world, the SnowWitch freezes her own heart so she will never feel the cold, or anything else, again. What remains calls the blizzard down without hesitation. "Do not resist your fate." This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '차가운심장의마녀',
      story: '레이드 월드에서 궁지에 몰린 설산마녀는 다시는 추위도, 그 무엇도 느끼지 않으려고 스스로 심장을 얼립니다. 남은 것은 망설임 없이 눈보라를 불러내는 마녀뿐입니다. "운명에 저항하지마라." 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'encroachedElderGuardian',
    zone: 'ocean',
    entity: 'elderGuardian',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'Encroached ElderGuardian',
      story: 'In the raid world, the Wither’s violet mist seeps into the monument, and the ElderGuardian finally gives itself over. Its judgment is no longer its own. "Everything is as He wills..." This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '잠식된 엘더가디언',
      story: '레이드 월드에서 위더의 보랏빛 안개가 유적 안까지 스며들고, 엘더가디언은 마침내 자신을 내어 줍니다. 그 심판은 더 이상 그의 것이 아닙니다. "모든것은 그분 뜻대로..." 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'nightMare',
    zone: 'dark',
    entity: 'skeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'NightMare',
      story: 'When the NightCorpsCommander falls in the raid world, the darkness it served pulls its black banner over itself and rises in its place. It has no legs and needs none; it drifts above the ground, a hooded shape of ribs and tendrils that no longer pretends to be a soldier. "My darkness..." "Foolish." "Light cannot defeat darkness..." This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '악몽의형상',
      story: '레이드 월드에서 밤의군단장이 쓰러지면, 그가 섬기던 어둠이 검은 깃발을 뒤집어쓰고 그 자리에서 일어납니다. 다리는 없고 필요하지도 않습니다. 갈비뼈와 촉수로 된 두건 쓴 형체가 땅 위를 떠다니며, 더는 군인인 척하지 않습니다. "내 어둠이.." "어리석군." "빛은 어둠을 이길 수 없다.." 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'theBeast',
    zone: 'hyper',
    entity: 'husk',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'TheBeast',
      story: 'Dr.B’s final experiment, performed on himself the moment he lost. He traded his bow for a netherite pickaxe and his reason for raw power, and he calls it progress. "Evolution is inevitable..." "How dare you!" This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '더비스트',
      story: '패배하는 순간 닥터B가 자기 몸에 감행한 마지막 실험입니다. 활은 네더라이트 곡괭이로, 이성은 날것의 힘으로 바꿨고, 그는 이것을 진보라 부릅니다. "진화는 필연적인 것이다.." "이런 건방진 것들!" 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'ruinedRedKnight',
    zone: 'red',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'Ruined RedKnight',
      story: 'In the raid world, the RedKnight finally fails his own trial. The fire burns away his flesh and leaves only a skeleton in netherite armor, still holding the burning shield and still convinced he cannot lose. "My strength is fading..." "You can never win." This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '몰락한 붉은기사',
      story: '레이드 월드에서 붉은기사는 끝내 자기 시련에 실패합니다. 불길은 살을 태워 없애고 네더라이트 갑옷 속 해골만 남겼지만, 그는 여전히 불타는 방패를 쥔 채 질 리 없다고 믿습니다. "힘이 빠지는군..." "네놈들은 절대 이길수 없다." 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'theApocalyptic',
    zone: 'poison',
    entity: 'skeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'TheApocalyptic',
      story: 'The Terrorist’s last protocol. When he falls in the raid world, he returns in heavier armor and stops pretending this is a war. To him, the end of the world is a game, and he intends to be the one who ends it. "Let the game begin." "Game over!!!" This is the second phase of the Overworld raid.',
    },
    ko: {
      name: '종말론자',
      story: '테러리스트의 마지막 수칙입니다. 레이드 월드에서 쓰러진 그는 더 무거운 장비를 두르고 돌아와, 더는 이것이 전쟁인 척하지 않습니다. 그에게 세상의 종말은 게임이고, 그 게임을 끝내는 건 자신이어야 합니다. "게임을 시작한다." "게임 오버!!!" 오버월드 레이드의 2단계입니다.',
    },
  },
  {
    id: 'warpedDemon',
    zone: 'nether',
    entity: 'breeze',
    kind: 'raidBoss',
    hp: 250000,
    en: {
      name: 'WarpedDemon',
      story: 'A breeze that drank the spores of the warped forest until it grew to twice its size. It drifts among the blue fungi and keeps regenerating as long as the forest stands. This is the first phase of the Nether raid, in the warped forest.',
    },
    ko: {
      name: '뒤틀린정령',
      story: '뒤틀린 숲의 포자를 들이마시다 두 배 크기로 자라난 브리즈입니다. 푸른 균류 사이를 떠다니며, 숲이 서 있는 한 계속 회복합니다. 뒤틀린 숲에서 벌어지는 네더 레이드의 1단계입니다.',
    },
  },
  {
    id: 'distortedWraith',
    zone: 'nether',
    entity: 'breeze',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'DistortedWraith',
      story: 'When the WarpedDemon’s body tears apart, what remains is the forest’s own will, crowned with warped nylium. It only wants the noise to stop. "It is not over yet." "Scatter quietly." "The forest will be quiet for a while." This is the second phase of the Nether raid, after WarpedDemon.',
    },
    ko: {
      name: '왜곡된망령',
      story: '뒤틀린정령의 몸이 찢어지면, 남는 것은 뒤틀린 네사체를 관처럼 쓴 숲 자체의 의지입니다. 그것은 오직 소음이 멎기만을 바랍니다. "아직 끝나지 않았다." "조용히 흩어져라." "잠시 숲이 조용해질 거다." 뒤틀린정령 다음 네더 레이드 2단계입니다.',
    },
  },
  {
    id: 'harvester',
    zone: 'nether',
    entity: 'illusioner',
    kind: 'raidBoss',
    hp: 250000,
    en: {
      name: 'Harvester',
      story: 'A silent reaper of the soul sand valley who wears a skeleton’s skull and carries a netherite hoe. It gathers the souls drifting through the valley like a crop, and keeps a totem of undying in case anyone tries to harvest it in turn. This is the first phase of the Nether raid, in the soul sand valley.',
    },
    ko: {
      name: '수확자',
      story: '스켈레톤 두개골을 쓰고 네더라이트 괭이를 든 영혼 모래 골짜기의 말 없는 사신입니다. 골짜기를 떠도는 영혼을 곡식처럼 거둬들이며, 누군가 자신을 거두려 할 때를 대비해 불사의 토템을 지니고 있습니다. 영혼 모래 골짜기에서 벌어지는 네더 레이드의 1단계입니다.',
    },
  },
  {
    id: 'lordOfPhantoms',
    zone: 'nether',
    entity: 'illusioner',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'LordOfPhantoms',
      story: 'Every soul the Harvester ever gathered, released at once and crowned as one. It does not fight alone; the vengeful dead fight with it. "Hear their cries..." "The vengeful spirits run wild..." "Your fate... will not change...!" This is the second phase of the Nether raid, after Harvester.',
    },
    ko: {
      name: '혼령의군주',
      story: '수확자가 거둔 모든 영혼이 한꺼번에 풀려나 하나의 왕관을 쓴 존재입니다. 혼자 싸우지 않으며, 원한 맺힌 망자들이 함께 싸웁니다. "그들의 외침을 들어라..." "원혼들이 날뛰는 구나.." "네 운명이... 달라지지 않을 거다...!" 수확자 다음 네더 레이드 2단계입니다.',
    },
  },
  {
    id: 'crimsonWarrior',
    zone: 'nether',
    entity: 'witherSkeleton',
    kind: 'raidBoss',
    hp: 250000,
    en: {
      name: 'CrimsonWarrior',
      story: 'A wither skeleton champion who swore to defend the piglins of the crimson forest. Crimson roots have grown through its helm, and it fights with bow and blade for allies who are already planning to abandon it. This is the first phase of the Nether raid, in the crimson forest.',
    },
    ko: {
      name: '진홍빛전사',
      story: '진홍빛 숲의 피글린을 지키겠다고 맹세한 위더스켈레톤 투사입니다. 투구를 뚫고 진홍빛 뿌리가 자랐고, 이미 자신을 버릴 궁리를 하는 동맹들을 위해 활과 칼을 휘두릅니다. 진홍빛 숲에서 벌어지는 네더 레이드의 1단계입니다.',
    },
  },
  {
    id: 'crimsonSavager',
    zone: 'nether',
    entity: 'witherSkeleton',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'CrimsonSavager',
      story: 'The CrimsonWarrior after the piglins left it to die. Betrayed and furious, it now tears through friend and foe alike. "Faithless wretches..." "I will tear you all apart." "Not bad..." This is the second phase of the Nether raid, after CrimsonWarrior.',
    },
    ko: {
      name: '진홍빛학살자',
      story: '피글린들이 죽도록 내버려 두고 떠난 뒤의 진홍빛전사입니다. 배신당한 분노로 이제는 아군과 적을 가리지 않고 찢어발깁니다. "의리없는 것들.." "전부 찢어죽인다" "제법이군..." 진홍빛전사 다음 네더 레이드 2단계입니다.',
    },
  },
  {
    id: 'piglinCook',
    zone: 'nether',
    entity: 'piglin',
    kind: 'raidBoss',
    hp: 250000,
    en: {
      name: 'PiglinCook',
      story: 'The head cook of the bastion who feeds the piglin hordes. Dressed in kitchen whites, with a crossbow in one hand and a furnace in the other, he insists every guest eat their fill, whether they want to or not. "You will never eat your fill like that!!!" This is the first phase of the Nether raid.',
    },
    ko: {
      name: '피글린요리사',
      story: '피글린 무리를 먹여 살리는 보루의 주방장입니다. 흰 조리복을 입고 한 손엔 쇠뇌, 다른 손엔 화로를 들고서, 손님이 원하든 말든 배불리 먹이겠다고 고집합니다. "그렇게는 배불리 먹지 못해!!!" 네더 레이드의 1단계입니다.',
    },
  },
  {
    id: 'cannibalPiglin',
    zone: 'nether',
    entity: 'piglin',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'CannibalPiglin',
      story: 'When the bastion’s pantry runs dry, the cook finds a new menu, and he is wearing the last guest’s head to prove it. "Time for dessert!" "The bill... is not necessary..." This is the second phase of the Nether raid, after PiglinCook.',
    },
    ko: {
      name: '식인피글린',
      story: '보루의 식량이 바닥나자 요리사는 새 메뉴를 찾아냈고, 그 증거로 지난 손님의 머리를 쓰고 있습니다. "후식 시간이다!" "계산은... 필요 없다..." 피글린요리사 다음 네더 레이드 2단계입니다.',
    },
  },
  {
    id: 'disrupter',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hp: 800000,
    en: {
      name: 'Disrupter',
      story: 'An agent who slips between dimensions to sabotage anyone trying to seal the rifts. Dressed in purple so dark it is nearly black, it fights with a bow and an end rod and opens gateways where you least expect them. This is the first phase of the End raid.',
    },
    ko: {
      name: '차원훼방꾼',
      story: '차원 사이를 넘나들며 균열을 봉인하려는 자들을 방해하는 요원입니다. 거의 검은빛에 가까운 보라색 옷을 입고 활과 엔드 막대로 싸우며, 전혀 예상하지 못한 곳에 통로를 엽니다. 엔드 레이드의 1단계입니다.',
    },
  },
  {
    id: 'distroyer',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'Distroyer',
      story: 'The Disrupter after it concludes that sealing the rifts was never worth the effort, and that neither was anything else. With an obsidian head and an end crystal in hand, it sets out to break what is left. "In the end, it was all meaningless." Yet if you prove strong enough, it will grudgingly admit, "At this level, I cannot help but acknowledge you..." This is the second phase of the End raid, after Disrupter.',
    },
    ko: {
      name: '차원파괴자',
      story: '균열을 봉인하는 일도, 다른 어떤 일도 애쓸 가치가 없었다고 결론 내린 뒤의 차원훼방꾼입니다. 흑요석 머리를 하고 엔드 수정을 든 채, 남은 것을 모두 부수려 합니다. "결국 모든 것은 무의미했다." 그러나 충분히 강하다는 걸 증명하면 마지못해 인정합니다. "이 정도라면, 너희를 인정하지 않을 수 없군..." 차원훼방꾼 다음 엔드 레이드 2단계입니다.',
    },
  },
  {
    id: 'voidArtist',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hp: 800000,
    en: {
      name: 'VoidArtist',
      story: 'A silent painter who uses the void itself as a canvas. With an archaeology brush and a note block, it sketches rifts into the air, and its wounds close as it works. It has been looking for the right subject for a very long time. This is the first phase of the End raid.',
    },
    ko: {
      name: '공허예술가',
      story: '공허 자체를 캔버스로 쓰는 말 없는 화가입니다. 고고학 붓과 소리 블록으로 허공에 균열을 그려 넣고, 작업하는 동안 상처가 아뭅니다. 아주 오랫동안 알맞은 모델을 찾고 있었습니다. 엔드 레이드의 1단계입니다.',
    },
  },
  {
    id: 'voidGod',
    zone: 'ender',
    entity: 'stray',
    kind: 'raidBoss',
    hpScale: 1.2,
    en: {
      name: 'VoidGod',
      story: 'The VoidArtist has found its subject: the heroes themselves. It swells to a towering size and sets about turning them into its final work. "Become my masterpiece..." When it falls, it mourns only one thing. "My works..." This is the second phase of the End raid, after VoidArtist.',
    },
    ko: {
      name: '공허의화신',
      story: '공허예술가가 드디어 모델을 찾았습니다. 바로 영웅들입니다. 거대하게 부풀어 오른 그것은 그들을 마지막 작품으로 만들려 합니다. "내 걸작이 되거라.." 쓰러질 때 그것이 아쉬워하는 것은 단 하나뿐입니다. "내 작품들이..." 공허예술가 다음 엔드 레이드 2단계입니다.',
    },
  },
  {
    id: 'theWither',
    zone: 'wither',
    entity: 'witherSkeleton',
    kind: 'raidBoss',
    hp: 2500000,
    en: {
      name: 'The Wither',
      story: 'The ancient being whose broken seal let the violet mist spill across every continent. In its own world it has taken the form of a giant wither skeleton in dune-trimmed netherite and sits on a quartz throne, watching the heroes the dimensional travelers have brought to its door. It does not consider them worth standing up for until half its strength has been torn away. This is the first phase of the Wither raid.',
    },
    ko: {
      name: '더 위더',
      story: '봉인이 깨지며 모든 대륙에 보랏빛 안개를 흘려보낸 고대의 존재입니다. 자신의 세계에서는 듄 장식 네더라이트를 두른 거대한 위더스켈레톤의 모습으로 석영 왕좌에 앉아, 차원 여행자들이 데려온 영웅들을 내려다봅니다. 힘의 절반이 찢겨 나가기 전까지는 일어설 가치조차 없다고 여깁니다. 위더 레이드의 1단계입니다.',
    },
  },
  {
    id: 'theWitherPhase2',
    zone: 'wither',
    entity: 'witherSkeleton',
    kind: 'raidBoss',
    en: {
      name: 'The Wither (Phase 2)',
      story: 'At half health the quartz throne shatters, and The Wither stands for the first time in ages. It stops toying with the heroes and starts trying to end them. It says only one thing. "Die..." This is the second phase of the Wither raid.',
    },
    ko: {
      name: '더 위더 (2단계)',
      story: '체력이 절반에 이르면 석영 왕좌가 산산이 부서지고, 더 위더가 아주 오랜만에 자리에서 일어납니다. 더는 영웅들을 가지고 놀지 않고 끝장내려 듭니다. 입에 담는 말은 단 하나뿐입니다. "죽어라.." 위더 레이드의 2단계입니다.',
    },
  },
  {
    id: 'witherTrueForm',
    zone: 'wither',
    entity: 'wither',
    kind: 'raidBoss',
    hpScale: 1.5,
    en: {
      name: 'The Wither: True Form',
      story: 'When its skeletal body finally falls, The Wither sheds the disguise and takes the shape it wore before it was sealed: three heads, endless hunger, and half again the strength of what came before. This is the root of the catastrophe that spread to every parallel world. Defeat it, and the violet sky may finally clear. This is the final boss of the Wither raid.',
    },
    ko: {
      name: '더 위더: 트루폼',
      story: '해골의 몸이 마침내 쓰러지면, 더 위더는 껍데기를 벗고 봉인되기 전의 모습을 드러냅니다. 머리 셋, 끝없는 굶주림, 그리고 이전보다 1.5배 강한 힘. 모든 평행 세계로 번진 재앙의 근원입니다. 이것을 쓰러뜨리면 보랏빛 하늘이 마침내 걷힐지도 모릅니다. 위더 레이드의 최종 보스입니다.',
    },
  },
];
