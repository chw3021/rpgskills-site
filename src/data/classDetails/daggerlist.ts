import type { ClassDetailDef } from './types';

export const daggerlistDetail: ClassDetailDef = {
  id: 'daggerlist',
  order: 15,
  element: { en: 'Dark', ko: '어둠' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'daggerlist.png', en: { title: 'Daggerlist' }, ko: { title: '단검사' } },
      { tier: 1, portraitFile: 'daggerlist-limit1.png', en: { title: 'Assassin' }, ko: { title: '암살자' } },
      { tier: 2, portraitFile: 'daggerlist-limit2.png', en: { title: 'Shade' }, ko: { title: '암영' } },
    ],
  },
  story: {
    ko: [
      '양손 단검과 그림자로 싸우는 기동형 암살자입니다. 절개·그림자 질주·칼날 부채로 출혈을 쌓고, 분신이 기술을 따라 칩니다.',
      '처형은 출혈 중첩마다 피해가 커지고, 암살자 패시브로 공격력과 최대 5중첩 출혈을 노립니다.',
      '암살자는 어둠 속 급습과 죽음의 표식으로 적을 사냥하고, 암영은 다섯 개 넘는 그림자 분신과 최후의 절단으로 전장을 가릅니다.',
    ],
    en: [
      'A mobile assassin who fights with twin daggers and shadow. Slash, shadow dash, and fan of blades stack bleed while clones echo your strikes.',
      'Execution hits harder per bleed stack; the Assassin passive raises damage and caps bleed at five stacks.',
      'The Assassin tier strikes from darkness with Death Mark; Shade commands five or more shadow clones and finishes with Final Cut.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'slash',
          icon: 'slash',
          element: 'wind',
          ko: {
            name: '절개',
            input: '가위 + 비웅크리기 + 우클릭',
            description: '짧게 베어 출혈을 쌓습니다. 분신이 좁은 범위를 약하게 따라 타격합니다.',
          },
          en: {
            name: 'Slash',
            input: 'Shears + not sneaking + right-click',
            description: 'Quick slash that stacks bleed. Your clone echoes a weaker slash in a small arc.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowDash',
          icon: 'rush',
          element: 'wind',
          ko: {
            name: '그림자 질주',
            input: '가위 + 웅크리기 + 우클릭',
            description: '전방으로 돌진하며 벱니다.',
          },
          en: {
            name: 'Shadow Dash',
            input: 'Shears + sneak + right-click',
            description: 'Dashes forward and cuts.',
          },
          masterLevel: 50,
        },
        {
          id: 'fanOfBlades',
          icon: 'stab',
          element: 'wind',
          ko: {
            name: '칼날 부채',
            input: '가위 + 비웅크리기 + 좌클릭',
            description: '주변으로 칼날을 흩뿌립니다.',
          },
          en: {
            name: 'Fan of Blades',
            input: 'Shears + not sneaking + left-click',
            description: 'Scatters blades around you.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowClone',
          icon: 'stealth',
          element: 'wind',
          ko: {
            name: '그림자 분신',
            input: '가위 + 비웅크리기 + 손 바꾸기',
            description: '분신을 소환하고 절개·칼날 부채를 복제합니다.',
          },
          en: {
            name: 'Shadow Clone',
            input: 'Shears + not sneaking + swap hands',
            description: 'Summons a clone that echoes Slash and Fan of Blades.',
          },
          masterLevel: 50,
        },
        {
          id: 'execution',
          icon: 'stab',
          element: 'wind',
          ko: {
            name: '처형',
            input: '가위 + 웅크리기 + 손 바꾸기',
            description: '출혈 대상에게 큰 피해를 줍니다. 출혈 1중첩마다 보너스 +1(최대 5).',
          },
          en: {
            name: 'Execution',
            input: 'Shears + sneak + swap hands',
            description: 'Heavy damage to bleeding targets. +1 bonus per bleed stack (max 5).',
          },
          masterLevel: 50,
        },
        {
          id: 'assassin',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '암살자',
            description: '공격력이 증가합니다. 출혈은 최대 5중첩까지 쌓입니다.',
          },
          en: {
            name: 'Assassin',
            description: 'Increases damage. Bleed stacks up to 5 times.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'deathMark',
          icon: 'target-shot',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '죽음의 표식',
            input: '가위 + 웅크리기 + 가위 버리기(Q)',
            description:
              '전투 모드에서만 발동합니다. 광역 표식과 출혈 피해를 입힙니다(배율 × 패널 공격력).',
          },
          en: {
            name: 'Death Mark',
            input: 'Shears + sneak + drop shears (Q)',
            description:
              'Combat mode only. Deals area mark and bleed damage (multiplier × panel attack damage).',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'finalCut',
          icon: 'slash',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '최후의 절단',
            input: '가위 + 웅크리기 + 전투 숫자키 4',
            description:
              '전투 모드에서만 발동합니다. 광역 절단과 출혈 피해를 입힙니다(배율 × 패널 공격력).',
          },
          en: {
            name: 'Final Cut',
            input: 'Shears + sneak + combat hotkey 4',
            description:
              'Combat mode only. Wide slash and bleed damage (multiplier × panel attack damage).',
          },
        },
      ],
    },
  ],
};
