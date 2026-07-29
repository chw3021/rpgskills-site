import type { ClassDetailDef } from './types';

export const taoistDetail: ClassDetailDef = {
  id: 'taoist',
  order: 27,
  element: { en: 'Fire & Earth · Frost & Dark', ko: '화염·대지 · 서리·어둠' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'taoist.png', en: { title: 'Taoist' }, ko: { title: '도사' } },
      { tier: 1, portraitFile: 'taoist-limit1.png', en: { title: 'Xian' }, ko: { title: '선인' } },
      { tier: 2, portraitFile: 'taoist-limit2.png', en: { title: 'Numen' }, ko: { title: '신선' } },
    ],
  },
  story: {
    ko: [
      '너클과 부적·양음 기운으로 아군을 돕는 도사입니다. 잠해소비·연상·기공권·증폭·부적·공중제비로 전장을 다루고, 기운으로 파티 버프를, 내공으로 공격력을 키웁니다.',
      '선인은 기폭발·기공참·평온·속박진·순보 연계와 명상으로 공중에서 가부좌 명상하며 녹색 기운을 일으킵니다.',
      '신선은 승천·기공장·만트라·기공파로 기공을 완성하고, 음양팔괘진을 바닥에 펼쳐 초월의 경지를 보여 줍니다.',
    ],
    en: [
      'A taoist who supports with knuckles, talismans, and yin–yang aura. Combust Inside, Imagery, Wave, Amplify, Charm, and Flip control the field; Aura buffs the party while Vibe raises damage.',
      'The Xian chains blast, charm slash, serenity, binding formation, and shunpo, then meditates in lotus pose with rippling green qi.',
      'The Numen masters ascension, spirit storm, mantra, and energy blast before summoning the Eight Trigrams Formation from the air.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'combustInside',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '잠해소비',
            input: '웅크리기 + 근접 공격',
            description: '근접 타격 피해를 줍니다.',
          },
          en: {
            name: 'Combust Inside',
            input: 'Sneak + melee attack',
            description: 'Melee strike damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'imagery',
          icon: 'soul',
          element: 'dark',
          ko: {
            name: '연상',
            input: '손 바꾸기',
            description: '연상 피해를 줍니다.',
          },
          en: {
            name: 'Imagery',
            input: 'Swap hands',
            description: 'Imagery damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'wave',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '기공권',
            input: '우클릭',
            description: '기공권 피해를 줍니다.',
          },
          en: {
            name: 'Wave',
            input: 'Right-click',
            description: 'Wave fist damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'amplify',
          icon: 'aura',
          element: 'fire',
          ko: {
            name: '증폭',
            input: '웅크리기 + 우클릭',
            description:
              '기운 범위를 일시 확장합니다. 양의 기운은 주변 적을 공격하고, 음의 기운은 파티를 즉시 회복합니다.',
          },
          en: {
            name: 'Amplify',
            input: 'Sneak + right-click',
            description:
              'Briefly expands aura range. Positive aura attacks nearby foes; negative aura heals party instantly.',
          },
          masterLevel: 50,
        },
        {
          id: 'charm',
          icon: 'soul',
          element: 'dark',
          ko: {
            name: '부적',
            input: '손 바꾸기 + 웅크리기',
            description: '부적 연타 후 마무리 타격 피해를 줍니다.',
          },
          en: {
            name: 'Charm',
            input: 'Swap hands + sneak',
            description: 'Talisman hits then a finishing strike.',
          },
          masterLevel: 50,
        },
        {
          id: 'flip',
          icon: 'fist-flurry',
          element: 'wind',
          ko: {
            name: '공중제비',
            input: '점프 + 좌클릭',
            description: '공중제비 피해를 줍니다.',
          },
          en: {
            name: 'Flip',
            input: 'Jump + left-click',
            description: 'Aerial flip strike damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'aura',
          icon: 'recovery',
          element: 'fire',
          ko: {
            name: '기운',
            input: '웅크리기 + 아이템 바꾸기(휠)',
            description:
              '양의 기운: 파티 공격력(스택당 34%, 최대 약 ×1.68)·속도 증가. 음의 기운: 파티 방어력 증가, 적 공격 시 파티 체력 회복.',
          },
          en: {
            name: 'Aura',
            input: 'Sneak + scroll hotbar',
            description:
              'Positive: party damage and speed. Negative: party armor; heals party when you attack enemies.',
          },
          masterLevel: 1,
        },
        {
          id: 'vibe',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '내공',
            description: '공격력이 증가합니다.',
          },
          en: {
            name: 'Vibe',
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
          id: 'resonance',
          icon: 'storm',
          element: 'wind',
          ko: {
            name: '공명',
            description: '광역 피해를 적용합니다.',
          },
          en: {
            name: 'Resonance',
            description: 'Applies splash damage.',
          },
        },
        {
          id: 'blast',
          icon: 'flame',
          element: 'dark',
          followUp: true,
          chainOf: 'imagery',
          ko: {
            name: '기폭발',
            input: '연상 재입력',
            description: '기폭발을 사용합니다.',
          },
          en: {
            name: 'Blast',
            input: 'Use Imagery again',
            description: 'Qi blast follow-up.',
          },
        },
        {
          id: 'charmSlash',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'wave',
          ko: {
            name: '기공참',
            input: '기공권 재입력',
            description: '기공참을 사용합니다.',
          },
          en: {
            name: 'Charm Slash',
            input: 'Use Wave again',
            description: 'Charm slash follow-up.',
          },
        },
        {
          id: 'serenity',
          icon: 'recovery',
          element: 'fire',
          followUp: true,
          chainOf: 'amplify',
          ko: {
            name: '평온',
            input: '증폭 재입력',
            description:
              '양의 기운: 주변 적 공격·제압. 음의 기운: 파티 무적. 공통: 해로운 효과 제거.',
          },
          en: {
            name: 'Serenity',
            input: 'Use Amplify again',
            description:
              'Positive: attack and suppress nearby foes. Negative: party invulnerability. Both: clear debuffs.',
          },
        },
        {
          id: 'bindingFormation',
          icon: 'spike',
          element: 'dark',
          followUp: true,
          chainOf: 'charm',
          ko: {
            name: '속박진',
            input: '부적 재입력',
            description: '속박진을 사용합니다.',
          },
          en: {
            name: 'Binding Formation',
            input: 'Use Charm again',
            description: 'Binding formation follow-up.',
          },
        },
        {
          id: 'shunpo',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'flip',
          ko: {
            name: '순보',
            input: '공중제비 재입력',
            description: '순보를 사용합니다.',
          },
          en: {
            name: 'Shunpo',
            input: 'Use Flip again',
            description: 'Shunpo follow-up.',
          },
        },
        {
          id: 'mentalTraining',
          icon: 'soul',
          element: 'fire',
          ko: {
            name: '운기조식',
            description: '기운 버프 효과가 두 배로 증가합니다.',
          },
          en: {
            name: 'Mental Training',
            description: 'Doubles aura buff strength.',
          },
        },
        {
          id: 'insight',
          icon: 'book',
          element: 'earth',
          ko: {
            name: '통찰',
            description: '전체 공격력이 증가합니다.',
          },
          en: {
            name: 'Insight',
            description: 'Increases all skill damage.',
          },
        },
        {
          id: 'meditation',
          icon: 'recovery',
          element: 'frost',
          ultimate: true,
          ko: {
            name: '명상',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '주변 파티원을 치료합니다.',
          },
          en: {
            name: 'Meditation',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Heals nearby party members.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'ascension',
          icon: 'soul',
          element: 'dark',
          followUp: true,
          chainOf: 'imagery',
          ko: {
            name: '승천',
            input: '연상 재입력',
            description: '승천을 사용합니다.',
          },
          en: {
            name: 'Ascension',
            input: 'Use Imagery again',
            description: 'Ascension follow-up.',
          },
        },
        {
          id: 'spiritStorm',
          icon: 'wind-slash',
          element: 'earth',
          followUp: true,
          chainOf: 'wave',
          ko: {
            name: '기공장',
            input: '기공권 재입력',
            description: '기공장을 사용합니다.',
          },
          en: {
            name: 'Spirit Storm',
            input: 'Use Wave again',
            description: 'Spirit storm follow-up.',
          },
        },
        {
          id: 'mantra',
          icon: 'recovery',
          element: 'fire',
          followUp: true,
          chainOf: 'amplify',
          ko: {
            name: '만트라',
            input: '증폭 재입력',
            description:
              '만트라를 사용합니다. 기운을 바꿔도 5초간 효과가 유지되고 파티 허기를 채웁니다.',
          },
          en: {
            name: 'Mantra',
            input: 'Use Amplify again',
            description:
              'Mantra follow-up. Aura persists 5s after switching; fills party saturation.',
          },
        },
        {
          id: 'energyBlast',
          icon: 'soul',
          element: 'dark',
          followUp: true,
          chainOf: 'charm',
          ko: {
            name: '기공파',
            input: '부적 재입력',
            description: '기공파를 사용합니다.',
          },
          en: {
            name: 'Energy Blast',
            input: 'Use Charm again',
            description: 'Energy blast follow-up.',
          },
        },
        {
          id: 'transcendence',
          icon: 'book',
          element: 'earth',
          passive: true,
          chainOf: 'vibe',
          ko: {
            name: '초월',
            description:
              '공격력·방어력이 증가하고 명상 재사용 대기가 감소합니다. 모든 개체를 통과하며 투사체에 면역입니다.',
          },
          en: {
            name: 'Transcendence',
            description:
              'More damage and armor; shorter Meditation cooldown. Phases through entities and blocks projectiles.',
          },
        },
        {
          id: 'eightTrigrams',
          icon: 'cycle',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '음양팔괘진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '음양팔괘진을 펼쳐 다단 피해를 입힙니다.',
          },
          en: {
            name: 'Eight Trigrams Formation',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Deploys the yin–yang eight-trigram formation for multi-hit damage.',
          },
        },
      ],
    },
  ],
};
