import type { ClassDetailDef } from './types';

export const anglerDetail: ClassDetailDef = {
  id: 'angler',
  order: 30,
  element: { en: 'Water & Wind', ko: '물·바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'angler.png', en: { title: 'Angler' }, ko: { title: '낚시꾼' } },
      { tier: 1, portraitFile: 'angler-limit1.png', en: { title: 'Savant' }, ko: { title: '달인' } },
      { tier: 2, portraitFile: 'angler-limit2.png', en: { title: 'Idler' }, ko: { title: '한량' } },
    ],
  },
  story: {
    ko: [
      '낚시대로 적을 끌고 아군을 돕는 여유로운 낚시꾼입니다. 미끼·낚시·낚시대법·산호주·산호뿌리·음주가무로 전장을 다루고, 노련함으로 공격력과 수영 능력을 키웁니다.',
      '달인은 만선 배 위에서 떡밥·산호감옥·취보 연계와 만선 궁극기로 파티를 지킵니다.',
      '한량은 자연과 물아일체가 되어 해탈한 완전한 여유로 물아일체를 펼칩니다.',
    ],
    en: [
      'A carefree angler who hooks foes and supports allies with a fishing rod. Bait, fishing, whipping, coral liquor, coral roots, and drunken dance control the field while Technic raises damage and swim power.',
      'The Savant sails a fully loaded boat, chaining paste bait, coral prison, and drunken dash before Fully Load.',
      'The Idler attains liberation—one with nature and water—and unleashes Water Oneness in perfect ease.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'bait',
          icon: 'hook-shot',
          element: 'water',
          ko: {
            name: '미끼',
            input: '웅크리기 + 낚시대 던지기',
            description: '주변 파티원의 체력을 회복합니다.',
          },
          en: {
            name: 'Bait',
            input: 'Sneak + cast fishing rod',
            description: 'Heals nearby party members.',
          },
          masterLevel: 50,
        },
        {
          id: 'fishing',
          icon: 'hook-shot',
          element: 'wind',
          ko: {
            name: '낚시',
            description:
              '낚시대 회수 시 주변 적을 함께 당깁니다. 찌 속도가 빨라지고 일반 낚시 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Fishing',
            description:
              'Retrieving the rod pulls nearby enemies. Faster bobber and shorter normal fishing wait.',
          },
          masterLevel: 1,
        },
        {
          id: 'whipping',
          icon: 'wind-slash',
          element: 'wind',
          ko: {
            name: '낚시대법',
            input: '좌클릭',
            description: '낚시대로 타격 피해를 줍니다.',
          },
          en: {
            name: 'Whipping',
            input: 'Left-click',
            description: 'Rod whip strike damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'coralLiquor',
          icon: 'recovery',
          element: 'water',
          ko: {
            name: '산호주',
            input: '웅크리기 + 손 바꾸기',
            description:
              '파티를 잠시 무적으로 만들고 피해·받는 피해를 조절합니다. 지속은 산호주 레벨에 비례합니다.',
          },
          en: {
            name: 'Coral Liquor',
            input: 'Sneak + swap hands',
            description:
              'Brief party invulnerability with damage dealt/taken modifiers. Duration scales with skill level.',
          },
          masterLevel: 20,
        },
        {
          id: 'coralRoots',
          icon: 'wave',
          element: 'water',
          ko: {
            name: '산호뿌리',
            input: '웅크리기 + 좌클릭',
            description: '산호뿌리 피해를 줍니다.',
          },
          en: {
            name: 'Coral Roots',
            input: 'Sneak + left-click',
            description: 'Coral root damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'drunkenDance',
          icon: 'dance',
          element: 'wind',
          ko: {
            name: '음주가무',
            input: '점프 + 손 바꾸기',
            description: '음주가무 피해를 줍니다.',
          },
          en: {
            name: 'Drunken Dance',
            input: 'Jump + swap hands',
            description: 'Drunken dance damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'technic',
          icon: 'book',
          element: 'water',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '노련함',
            description: '공격력이 증가합니다. 수영 시 물 관련 효과를 얻습니다.',
          },
          en: {
            name: 'Technic',
            description: 'Increases damage. Grants water abilities while swimming.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'pasteBait',
          icon: 'hook-shot',
          element: 'wind',
          followUp: true,
          chainOf: 'bait',
          ko: {
            name: '떡밥',
            description:
              '포만감을 주고 범위가 늘어납니다. 회수 시 주변 적을 끌어옵니다. 피해량은 미끼 레벨에 비례합니다.',
          },
          en: {
            name: 'Paste Bait',
            description:
              'Grants saturation and wider range. Pulls nearby enemies on retrieve. Damage scales with Bait level.',
          },
        },
        {
          id: 'fishingTackle',
          icon: 'hook-shot',
          element: 'wind',
          ko: {
            name: '장비개선',
            description: '재사용 대기시간이 감소합니다.',
          },
          en: {
            name: 'Fishing Tackle',
            description: 'Reduces cooldowns.',
          },
        },
        {
          id: 'therapy',
          icon: 'recovery',
          element: 'water',
          ko: {
            name: '민간요법',
            description: '주변 파티원을 치유합니다.',
          },
          en: {
            name: 'Therapy',
            description: 'Heals nearby party members.',
          },
        },
        {
          id: 'energizer',
          icon: 'potion',
          element: 'water',
          ko: {
            name: '활력제',
            description: '힘·재생 효과를 부여합니다.',
          },
          en: {
            name: 'Energizer',
            description: 'Grants Strength and Regeneration.',
          },
        },
        {
          id: 'coralPrison',
          icon: 'wave',
          element: 'wind',
          followUp: true,
          chainOf: 'coralRoots',
          ko: {
            name: '산호감옥',
            input: '산호뿌리 재입력',
            description:
              '산호감옥을 사용합니다. 안의 아군은 무적입니다. 피해량은 산호뿌리 레벨에 비례합니다.',
          },
          en: {
            name: 'Coral Prison',
            input: 'Use Coral Roots again',
            description:
              'Summons coral prison; allies inside are invulnerable. Damage scales with Coral Roots level.',
          },
        },
        {
          id: 'drunkenDash',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'drunkenDance',
          ko: {
            name: '취보',
            input: '음주가무 재입력',
            description: '취보를 사용합니다. 피해량은 음주가무 레벨에 비례합니다.',
          },
          en: {
            name: 'Drunken Dash',
            input: 'Use Drunken Dance again',
            description: 'Drunken dash follow-up. Damage scales with Drunken Dance level.',
          },
        },
        {
          id: 'laidBack',
          icon: 'book',
          element: 'water',
          ko: {
            name: '여유',
            description: '전체 공격력이 증가합니다.',
          },
          en: {
            name: 'Laid Back',
            description: 'Increases all skill damage.',
          },
        },
        {
          id: 'fullyLoad',
          icon: 'wave',
          element: 'water',
          ultimate: true,
          ko: {
            name: '만선',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '파티의 해로운 효과를 제거하고 3초간 무적으로 만듭니다. 적이 받는 피해가 증가합니다.',
          },
          en: {
            name: 'Fully Load',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Clears party debuffs and grants 3s invulnerability. Enemies take increased damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'spout',
          icon: 'wave',
          element: 'water',
          followUp: true,
          chainOf: 'coralLiquor',
          ko: {
            name: '내뿜기',
            input: '산호주 재입력',
            description: '내뿜기를 사용합니다. 피해량은 산호주 레벨에 비례합니다.',
          },
          en: {
            name: 'Spout',
            input: 'Use Coral Liquor again',
            description: 'Spout follow-up. Damage scales with Coral Liquor level.',
          },
        },
        {
          id: 'pufferfishBomb',
          icon: 'bomb',
          element: 'water',
          followUp: true,
          chainOf: 'coralRoots',
          ko: {
            name: '복어폭탄',
            input: '산호뿌리 재입력',
            description: '복어폭탄을 사용합니다. 피해량은 산호뿌리 레벨에 비례합니다.',
          },
          en: {
            name: 'Pufferfish Bomb',
            input: 'Use Coral Roots again',
            description: 'Pufferfish bomb follow-up. Damage scales with Coral Roots level.',
          },
        },
        {
          id: 'drunkenSmash',
          icon: 'wind-slash',
          element: 'wind',
          followUp: true,
          chainOf: 'drunkenDance',
          ko: {
            name: '취격',
            input: '음주가무 재입력',
            description: '취격을 사용합니다. 피해량은 음주가무 레벨에 비례합니다.',
          },
          en: {
            name: 'Drunken Smash',
            input: 'Use Drunken Dance again',
            description: 'Drunken smash follow-up. Damage scales with Drunken Dance level.',
          },
        },
        {
          id: 'liberation',
          icon: 'book',
          element: 'water',
          passive: true,
          chainOf: 'technic',
          ko: {
            name: '해탈',
            description: '공격력·방어력이 증가하고 만선 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Liberation',
            description: 'Increases damage and armor. Shortens Fully Load cooldown.',
          },
        },
        {
          id: 'waterOneness',
          icon: 'wave',
          element: 'water',
          ultimate: true,
          ko: {
            name: '물아일체',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '파티의 해로운 효과를 제거하고 5초간 무적으로 만듭니다.',
          },
          en: {
            name: 'Water Oneness',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Clears party debuffs and grants 5s invulnerability.',
          },
        },
      ],
    },
  ],
};
