import type { ClassDetailDef } from './types';

export const fireMageDetail: ClassDetailDef = {
  id: 'fireMage',
  order: 4,
  element: { en: 'Flame', ko: '화염' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'fireMage.png', en: { title: 'Fire Mage' }, ko: { title: '화염술사' } },
      { tier: 1, portraitFile: 'fireMage-limit1.png', en: { title: 'Pyromancer' }, ko: { title: '화신' } },
      { tier: 2, portraitFile: 'fireMage-limit2.png', en: { title: 'Solar Deity' }, ko: { title: '태양신' } },
    ],
  },
  story: {
    ko: [
      '완드로 불꽃을 다루는 정면 돌격형 마법사입니다. 분화구와 화염구, 숨결과 살아 있는 불꽃으로 전장을 태웁니다.',
      '열기는 스킬을 이어 쓸수록 몸을 둘러싼 불꽃 오라로 변합니다. 피해를 줄이고 주변 적을 녹이며, 최대 여섯 겹까지 쌓입니다.',
      '한계를 넘기면 불사조의 날개와 두 번째 태양이 깃듭니다. 화신, 태양신이라 불려도 본질은 같습니다. 불꽃으로 전장을 지배하는 자입니다.',
    ],
    en: [
      'A frontline mage who wields flame through a wand. Eruptions, fireballs, breath, and living flame burn the battlefield.',
      'Hot Body turns chained casts into a blazing aura that cuts damage taken and scorches nearby foes, stacking up to six times.',
      'Beyond the limit break, phoenix wings and a second sun answer the call. Titles may read Pyromancer or Solar Deity, but the essence is unchanged: to rule the fight with fire.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'eruption',
          icon: 'lava',
          element: 'fire',
          ko: {
            name: '분화구',
            input: '우클릭',
            description: '분화구를 일으켜 피해를 줍니다. 스킬 레벨에 따라 피해량이 증가합니다.',
          },
          en: {
            name: 'Eruption',
            input: 'Right-click',
            description: 'Triggers an eruption. Damage scales with skill level.',
          },
          masterLevel: 50,
        },
        {
          id: 'ring',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '불의고리',
            input: '웅크리기 + 우클릭',
            description: '불의 고리로 적을 공격합니다.',
          },
          en: {
            name: 'Ring',
            input: 'Sneak + right-click',
            description: 'Strikes with a ring of fire.',
          },
          masterLevel: 50,
        },
        {
          id: 'fireball',
          icon: 'fireball',
          element: 'fire',
          ko: {
            name: '화염구',
            input: '좌클릭 + 점프',
            description: '화염구를 발사합니다.',
          },
          en: {
            name: 'Fireball',
            input: 'Left-click + jump',
            description: 'Launches a fireball.',
          },
          masterLevel: 50,
        },
        {
          id: 'spread',
          icon: 'wand',
          element: 'fire',
          ko: {
            name: '확산',
            input: '웅크리기 + 근접 공격',
            description: '웅크린 상태에서 근접 공격으로 화염을 퍼뜨립니다.',
          },
          en: {
            name: 'Spread',
            input: 'Sneak + melee hit',
            description: 'Spreads flame with a melee strike while sneaking.',
          },
          masterLevel: 50,
        },
        {
          id: 'breath',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '화염의 숨결',
            input: '손 바꾸기',
            description: '화염 숨결을 뿜습니다. 시전 중 방어력이 최대가 됩니다.',
          },
          en: {
            name: 'Breath',
            input: 'Swap hands',
            description: 'Breathes fire. Armor is maximized while casting.',
          },
          masterLevel: 50,
        },
        {
          id: 'aliveFlame',
          icon: 'fireball',
          element: 'fire',
          ko: {
            name: '살아있는 불꽃',
            input: '손 바꾸기 + 웅크리기',
            description: '살아 움직이는 불꽃을 날립니다.',
          },
          en: {
            name: 'Alive Flame',
            input: 'Swap hands + sneak',
            description: 'Unleashes a living flame.',
          },
          masterLevel: 50,
        },
        {
          id: 'hotBody',
          icon: 'book',
          element: 'fire',
          passive: true,
          ko: {
            name: '열기',
            description:
              '공격력이 증가하고 적을 태웁니다. 화염 면역·화염 저항, 피해 5% 반사(플레이어 1%). 스킬 사용 후 3초 안에 다른 스킬을 쓰면 3초간 열기가 활성화되어 받는 피해가 줄고 주변 적에게 피해를 줍니다(최대 6중첩).',
          },
          en: {
            name: 'Hot Body',
            description:
              'Increases damage and burns foes. Fire immunity and resistance; reflects 5% damage (1% vs players). Chain another skill within 3s to activate Hot Body for 3s: less damage taken and aura damage to nearby enemies (max 6 stacks).',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'flowingLava',
          icon: 'lava',
          element: 'fire',
          followUp: true,
          ko: {
            name: '흐르는 용암',
            input: '같은 스킬 재입력',
            description: '분화구 후 재입력 시 용암이 흐릅니다. 피해량은 분화구 레벨에 비례합니다.',
          },
          en: {
            name: 'Flowing Lava',
            input: 'Use the same skill again',
            description: 'Follow-up to Eruption. Damage scales with Eruption level.',
          },
        },
        {
          id: 'sunClutch',
          icon: 'sun',
          element: 'fire',
          followUp: true,
          ko: {
            name: '태양의 움켜쥠',
            input: '같은 스킬 재입력',
            description: '불의고리 후 재입력. 피해량은 불의고리 레벨에 비례합니다.',
          },
          en: {
            name: 'Sun Clutch',
            input: 'Use the same skill again',
            description: 'Follow-up to Ring. Damage scales with Ring level.',
          },
        },
        {
          id: 'doubleBall',
          icon: 'fireball',
          element: 'fire',
          ko: { name: '쌍구', description: '한 번에 화염구 두 개를 발사합니다.' },
          en: { name: 'Double Ball', description: 'Fires two fireballs at once.' },
        },
        {
          id: 'flameChain',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '연화',
            description: '화염이 퍼진 적이 주변 다른 적에게도 화염을 퍼뜨립니다.',
          },
          en: {
            name: 'Flame Chain',
            description: 'Burning enemies spread flame to nearby foes.',
          },
        },
        {
          id: 'lavaShower',
          icon: 'lava',
          element: 'fire',
          followUp: true,
          ko: {
            name: '용암 소나기',
            input: '같은 스킬 재입력',
            description: '화염의 숨결 후 재입력. 피해량은 숨결 레벨에 비례합니다.',
          },
          en: {
            name: 'Lava Shower',
            input: 'Use the same skill again',
            description: 'Follow-up to Breath. Damage scales with Breath level.',
          },
        },
        {
          id: 'fireStrike',
          icon: 'flame',
          element: 'fire',
          followUp: true,
          ko: {
            name: '화염격',
            input: '같은 스킬 재입력',
            description: '살아있는 불꽃 후 재입력. 피해량은 살아있는 불꽃 레벨에 비례합니다.',
          },
          en: {
            name: 'Fire Strike',
            input: 'Use the same skill again',
            description: 'Follow-up to Alive Flame. Damage scales with Alive Flame level.',
          },
        },
        {
          id: 'burningHeart',
          icon: 'book',
          element: 'fire',
          passive: true,
          ko: { name: '타오르는 심장', description: '공격력과 방어력이 증가합니다.' },
          en: { name: 'Burning Heart', description: 'Increases damage and armor.' },
        },
        {
          id: 'phoenixFlap',
          icon: 'phoenix',
          element: 'fire',
          ultimate: true,
          ko: {
            name: '불사조의 날갯짓',
            input: '웅크리기 + 숫자키 4',
            description: '불사조의 날개로 휘둘러 광역 피해를 줍니다.',
          },
          en: {
            name: 'Flapping of Phoenix',
            input: 'Sneak + hotkey 4',
            description: 'Strikes with phoenix wings for heavy area damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'volcanicStorm',
          icon: 'storm',
          element: 'fire',
          followUp: true,
          ko: {
            name: '화산 폭풍',
            input: '같은 스킬 재입력',
            description: '불의고리 후 재입력 시 화산 폭풍. 피해량은 불의고리 레벨에 비례합니다.',
          },
          en: {
            name: 'Volcanic Storm',
            input: 'Use the same skill again',
            description: 'Follow-up to Ring. Damage scales with Ring level.',
          },
        },
        {
          id: 'magmaBlock',
          icon: 'lava',
          element: 'fire',
          followUp: true,
          ko: {
            name: '마그마 결정체',
            input: '같은 스킬 재입력',
            description: '화염구 후 재입력. 피해량은 화염구 레벨에 비례합니다.',
          },
          en: {
            name: 'Magma Block',
            input: 'Use the same skill again',
            description: 'Follow-up to Fireball. Damage scales with Fireball level.',
          },
        },
        {
          id: 'lavaBoom',
          icon: 'lava',
          element: 'fire',
          followUp: true,
          ko: {
            name: '용암 폭발',
            input: '같은 스킬 재입력',
            description: '화염의 숨결 후 재입력. 피해량은 숨결 레벨에 비례합니다.',
          },
          en: {
            name: 'Lava Boom',
            input: 'Use the same skill again',
            description: 'Follow-up to Breath. Damage scales with Breath level.',
          },
        },
        {
          id: 'sunlightSpear',
          icon: 'sun',
          element: 'fire',
          followUp: true,
          ko: {
            name: '햇빛의 창',
            input: '같은 스킬 재입력',
            description: '살아있는 불꽃 후 재입력. 피해량은 살아있는 불꽃 레벨에 비례합니다.',
          },
          en: {
            name: 'Sunlight Spear',
            input: 'Use the same skill again',
            description: 'Follow-up to Alive Flame. Damage scales with Alive Flame level.',
          },
        },
        {
          id: 'solarForce',
          icon: 'book',
          element: 'fire',
          passive: true,
          ko: {
            name: '태양의 힘',
            description: '공격력·방어력이 증가하고 불사조의 날갯짓 재사용 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Solar Force',
            description: 'More damage and armor; shorter Flapping of Phoenix cooldown.',
          },
        },
        {
          id: 'secondSun',
          icon: 'sun',
          element: 'fire',
          ultimate: true,
          ko: {
            name: '두 번째 태양',
            input: '웅크리기 + 숫자키 5',
            description: '태양을 소환해 막대한 피해를 줍니다. 폭발 피해량은 마그마 결정체와 동일합니다.',
          },
          en: {
            name: 'New Sun Rise',
            input: 'Sneak + hotkey 5',
            description: 'Summons a second sun for devastating damage. Explosion damage matches Magma Block.',
          },
        },
      ],
    },
  ],
};
