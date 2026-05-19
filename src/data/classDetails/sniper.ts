import type { ClassDetailDef } from './types';

export const sniperDetail: ClassDetailDef = {
  id: 'sniper',
  order: 10,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'sniper.png', en: { title: 'Sniper' }, ko: { title: '저격수' } },
      { tier: 1, portraitFile: 'sniper-limit1.png', en: { title: 'Ace' }, ko: { title: '명사수' } },
      { tier: 2, portraitFile: 'sniper-limit2.png', en: { title: 'Eagle Eyes' }, ko: { title: '독안' } },
    ],
  },
  story: {
    ko: [
      '쇠뇌로 먼 거리의 급소를 꿰뚫는 저격수입니다. 밧줄타기·은폐·포복으로 자리를 잡고, 개조 화살과 헤드샷으로 한 방을 노립니다.',
      '철갑화살은 현재 체력 비례 피해, 공습과 지원사격으로 화력을 보강합니다. 연막 속 웅크리기는 무적이 됩니다.',
      '명사수는 완벽한 한 발을, 독안은 독수리 분대와 함께 전장을 지배합니다. 바람을 타고 어디서든 표적을 처단하는 자입니다.',
    ],
    en: [
      'A sniper who pierces vital spots from extreme range with a crossbow. Rope climbs, camouflage, and crawling set the angle; remodeled bolts and headshots finish the hunt.',
      'Armour-piercing arrows scale with current HP; air strikes and backup fire add pressure. Smoke shells grant invulnerability while sneaking inside.',
      'Ace seeks the perfect shot; Eagle Eyes calls the eagle squad. They ride the wind to eliminate targets from any distance.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'rope',
          icon: 'crossbow',
          element: 'wind',
          ko: { name: '밧줄타기', input: '점프 + 좌클릭', description: '밧줄을 타고 위치를 이동합니다.' },
          en: { name: 'Rope', input: 'Jump + left-click', description: 'Uses a rope to reposition.' },
          masterLevel: 1,
        },
        {
          id: 'armourPiercingArrow',
          icon: 'arrow',
          element: 'wind',
          ko: {
            name: '철갑화살',
            input: '웅크리기 + 손 바꾸기',
            description: '적 현재 체력의 일정 비율만큼 피해를 줍니다.',
          },
          en: {
            name: 'Armour-Piercing Arrow',
            input: 'Sneak + swap hands',
            description: 'Deals damage equal to a percent of the target’s current HP.',
          },
          masterLevel: 50,
        },
        {
          id: 'flashBomb',
          icon: 'storm',
          element: 'wind',
          ko: {
            name: '섬광탄',
            input: '점프 + 손 바꾸기',
            description: '섬광탄을 투척합니다.',
          },
          en: {
            name: 'Flash Bomb',
            input: 'Jump + swap hands',
            description: 'Throws a flash bomb.',
          },
          masterLevel: 50,
        },
        {
          id: 'flare',
          icon: 'target-shot',
          element: 'wind',
          ko: { name: '조명 지뢰', input: '웅크리기 + 좌클릭', description: '조명 지뢰를 설치합니다.' },
          en: { name: 'Flare', input: 'Sneak + left-click', description: 'Places a flare mine.' },
          masterLevel: 1,
        },
        {
          id: 'airStrike',
          icon: 'storm',
          element: 'wind',
          ko: {
            name: '공습',
            description: '적중 시 로켓이 떨어집니다.',
          },
          en: {
            name: 'Air Strike',
            description: 'Rockets fall on hit targets.',
          },
          masterLevel: 50,
        },
        {
          id: 'camouflage',
          icon: 'stealth',
          element: 'wind',
          ko: { name: '은폐', input: '웅크리기', description: '웅크려 은폐합니다.' },
          en: { name: 'Camouflage', input: 'Sneak', description: 'Camouflages while sneaking.' },
          masterLevel: 1,
        },
        {
          id: 'remodeling',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '개조',
            description:
              '더 강하고 빠른 화살이 나갑니다. 관통 레벨이 오르고 엔더맨·위더 보호막을 공격할 수 있습니다. 다중 발사 시 화살이 중앙으로 모이며 각 화살 피해는 절반입니다.',
          },
          en: {
            name: 'Remodeling',
            description:
              'Stronger, faster bolts with more pierce; can hit endermen and wither barriers. Multishot bolts converge; each deals half damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'headShot',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '헤드샷',
            description:
              '머리 적중 시 추가 피해. 레벨이 높을수록 판정이 좋아집니다. 철갑화살·궁극기에는 적용되지 않습니다.',
          },
          en: {
            name: 'Headshot',
            description:
              'Bonus damage on head hits; better detection at higher level. Does not apply to armour-piercing arrows or ultimates.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'instantCharge',
          icon: 'crossbow',
          element: 'wind',
          ko: { name: '즉시 장전', description: '밧줄타기 성공 시 일반 화살 하나를 즉시 장전합니다.' },
          en: { name: 'Instant Charge', description: 'After a successful rope ride, instantly loads one normal arrow.' },
        },
        {
          id: 'shockArrow',
          icon: 'arrow',
          element: 'wind',
          followUp: true,
          ko: {
            name: '충격화살',
            input: '같은 스킬 재입력',
            description: '철갑화살 후 재입력. 피해량은 철갑화살 레벨에 비례합니다.',
          },
          en: {
            name: 'Shock Arrow',
            input: 'Use the same skill again',
            description: 'Follow-up to armour-piercing arrow. Damage scales with its level.',
          },
        },
        {
          id: 'smokeShell',
          icon: 'stealth',
          element: 'wind',
          followUp: true,
          ko: {
            name: '연막',
            input: '같은 스킬 재입력',
            description: '섬광탄 후 연막탄. 연막 안에서 웅크리면 무적(지속은 섬광탄 레벨에 비례).',
          },
          en: {
            name: 'Smoke Shell',
            input: 'Use the same skill again',
            description: 'After flash bomb, throw smoke. Invulnerable while sneaking inside (duration scales with flash bomb).',
          },
        },
        {
          id: 'sabotage',
          icon: 'target-shot',
          element: 'wind',
          ko: { name: '교란', description: '적중한 적을 잠시 기절시킵니다.' },
          en: { name: 'Sabotage', description: 'Briefly stuns the hit target.' },
        },
        {
          id: 'backup',
          icon: 'arrows-scatter',
          element: 'wind',
          followUp: true,
          ko: {
            name: '지원 사격',
            description: '적중 시 후속 사격. 피해량은 공습 레벨에 비례합니다.',
          },
          en: {
            name: 'Backup',
            description: 'Follow-up shots on hit. Damage scales with Air Strike level.',
          },
        },
        {
          id: 'crawl',
          icon: 'stealth',
          element: 'wind',
          ko: {
            name: '포복',
            input: '웅크리기 + 핫바 변경(휠)',
            description: '포복이 가능해집니다(재사용 1초).',
          },
          en: {
            name: 'Crawl',
            input: 'Sneak + change hotbar (scroll)',
            description: 'Enables crawling (1s cooldown).',
          },
        },
        {
          id: 'evasion',
          icon: 'rush',
          element: 'wind',
          passive: true,
          ko: { name: '회피 기동', description: '사격 후 이동 속도가 증가합니다.' },
          en: { name: 'Evasion', description: 'Gain speed after shooting.' },
        },
        {
          id: 'precision',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: { name: '정밀', description: '공격력이 증가합니다.' },
          en: { name: 'Precision', description: 'Increases damage.' },
        },
        {
          id: 'lastOne',
          icon: 'target-shot',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '최후의 한발',
            input: '웅크리기 + 숫자키 4',
            description: '완벽하게 조준한 치명적인 한 발을 쏩니다.',
          },
          en: {
            name: 'The Last One',
            input: 'Sneak + hotkey 4',
            description: 'A perfectly aimed lethal shot.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'crawlingCharge',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '포복 장전',
            description: '포복 시 화살을 장전합니다. 휠을 아래로 내리면 제자리 장전(일반 화살만).',
          },
          en: {
            name: 'Crawling Charge',
            description: 'Loads an arrow while crawling. Scroll down to reload in place (normal arrows only).',
          },
        },
        {
          id: 'destroyer',
          icon: 'arrow',
          element: 'wind',
          followUp: true,
          ko: {
            name: '대전차 로켓',
            input: '같은 스킬 재입력',
            description: '철갑화살 후 재입력. 적 방어력에 비례해 피해가 증가합니다.',
          },
          en: {
            name: 'Destroyer',
            input: 'Use the same skill again',
            description: 'Follow-up rocket; more damage vs high armor. Scales with armour-piercing level.',
          },
        },
        {
          id: 'dangerClose',
          icon: 'bomb',
          element: 'wind',
          followUp: true,
          ko: {
            name: '근접 항공 지원',
            input: '같은 스킬 재입력',
            description: '섬광탄 후 재입력. 피해량은 공습 레벨에 비례합니다.',
          },
          en: {
            name: 'Danger Close',
            input: 'Use the same skill again',
            description: 'Requests close air support. Damage scales with Air Strike level.',
          },
        },
        {
          id: 'parachute',
          icon: 'wind',
          element: 'wind',
          ko: { name: '낙하산', input: '웅크리기', description: '웅크리는 동안 느린 낙하 효과를 얻습니다.' },
          en: { name: 'Parachute', input: 'Sneak', description: 'Slow falling while sneaking.' },
        },
        {
          id: 'composure',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '침착',
            description: '공격력·방어력 증가, 최후의 한발 대기시간 감소, 헤드샷 항상 발동.',
          },
          en: {
            name: 'Composure',
            description: 'More damage and armor; shorter Last One cooldown; headshot always procs.',
          },
        },
        {
          id: 'teamEagle',
          icon: 'crossbow',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '독수리 분대',
            input: '웅크리기 + 숫자키 5',
            description: '독수리 분대와 함께 집중 사격을 가합니다.',
          },
          en: {
            name: 'Team Eagle',
            input: 'Sneak + hotkey 5',
            description: 'Elite eagle squad coordinates fire with you.',
          },
        },
      ],
    },
  ],
};
