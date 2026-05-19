import type { ClassDetailDef } from './types';

export const gardenerDetail: ClassDetailDef = {
  id: 'gardener',
  order: 20,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'gardener.png', en: { title: 'Gardener' }, ko: { title: '원예가' } },
      { tier: 1, portraitFile: 'gardener-limit1.png', en: { title: 'Flower Mage' }, ko: { title: '조물주' } },
      { tier: 2, portraitFile: 'gardener-limit2.png', en: { title: 'Flora' }, ko: { title: '자연신' } },
    ],
  },
  story: {
    ko: [
      '삽으로 땅을 다루며 식물로 적을 묶는 원예가입니다. 덩굴채찍·씨앗폭탄·뿌리감옥·가시밭·포자구름으로 제압하고, 성장으로 공격력을 키웁니다.',
      '과성장은 광역 뿌리 폭발로 오래 묶으며, 숙련 2에서 재사용 대기가 짧아집니다(35초/70초).',
      '조물주는 식물을 자유자재로 다루고, 자연신은 세계수 꼭대기에서 숲 전체를 거느리듯 더 넓은 세계수로 전장을 지배합니다.',
    ],
    en: [
      'A horticulturist who binds foes with plants wielding a shovel. Vine whip, seed bomb, root prison, thorn field, and spore cloud suppress while Growth raises damage.',
      'Overgrowth unleashes a wide root burst with a long hold; at proficiency 2 its cooldown shortens (35s / 70s).',
      'The Flower Mage commands plants at will; Flora sits atop the world tree, ruling the battlefield with an even wider World Tree.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'vineWhip',
          icon: 'leaf',
          element: 'earth',
          ko: {
            name: '덩굴채찍',
            input: '삽 + 비웅크리기 + 우클릭',
            description: '전방 적을 덩굴로 묶습니다.',
          },
          en: {
            name: 'Vine Whip',
            input: 'Shovel + not sneaking + right-click',
            description: 'Binds enemies ahead with vines.',
          },
          masterLevel: 50,
        },
        {
          id: 'seedBomb',
          icon: 'storm',
          element: 'earth',
          ko: {
            name: '씨앗폭탄',
            input: '삽 + 비웅크리기 + 손 바꾸기',
            description: '씨앗을 던져 폭발시킵니다.',
          },
          en: {
            name: 'Seed Bomb',
            input: 'Shovel + not sneaking + swap hands',
            description: 'Throws seeds that explode.',
          },
          masterLevel: 50,
        },
        {
          id: 'rootPrison',
          icon: 'spike',
          element: 'earth',
          ko: {
            name: '뿌리감옥',
            input: '삽 + 웅크리기 + 우클릭',
            description: '뿌리 감옥으로 광역 제압합니다.',
          },
          en: {
            name: 'Root Prison',
            input: 'Shovel + sneak + right-click',
            description: 'Area root suppression.',
          },
          masterLevel: 50,
        },
        {
          id: 'thornField',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '가시밭',
            input: '삽 + 비웅크리기 + 좌클릭',
            description: '가시밭을 펼쳐 피해를 줍니다.',
          },
          en: {
            name: 'Thorn Field',
            input: 'Shovel + not sneaking + left-click',
            description: 'Spreads damaging thorns.',
          },
          masterLevel: 50,
        },
        {
          id: 'sporeCloud',
          icon: 'aura',
          element: 'earth',
          ko: {
            name: '포자구름',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '포자로 적의 시야를 가립니다. 피해는 패널 공격력에 곱해지는 배율입니다.',
          },
          en: {
            name: 'Spore Cloud',
            input: 'Shovel + sneak + swap hands',
            description: 'Blinds enemies with spores. Damage is a multiplier × panel attack damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'growth',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '성장',
            description: '공격력이 증가합니다.',
          },
          en: {
            name: 'Growth',
            description: 'Increases damage.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'overgrowth',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '과성장',
            input: '삽 + 웅크리기 + 삽 버리기(Q)',
            description:
              '전투 모드에서만 발동합니다. 광역 뿌리 폭발로 적을 오래 묶습니다(배율 × 패널 공격력). 숙련 2에서 재사용 대기 35초/70초.',
          },
          en: {
            name: 'Overgrowth',
            input: 'Shovel + sneak + drop shovel (Q)',
            description:
              'Combat mode only. Large root burst with a long hold (multiplier × panel attack damage). Proficiency 2 shortens cooldown to 35s / 70s.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'worldTree',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '세계수',
            input: '삽 + 웅크리기 + 전투 숫자키 4',
            description:
              '전투 모드에서만 발동합니다. 더 넓은 범위 피해와 장시간 제압(배율 × 패널 공격력).',
          },
          en: {
            name: 'World Tree',
            input: 'Shovel + sneak + combat hotkey 4',
            description:
              'Combat mode only. Wider damage and longer suppression (multiplier × panel attack damage).',
          },
        },
      ],
    },
  ],
};
