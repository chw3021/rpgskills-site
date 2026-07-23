import type { ClassDetailDef } from './types';

export const berserkerDetail: ClassDetailDef = {
  id: 'berserker',
  order: 7,
  element: { en: 'Earth & Blood', ko: '대지·혈' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'berserker.png', en: { title: 'Berserker' }, ko: { title: '광전사' } },
      { tier: 1, portraitFile: 'berserker-limit1.png', en: { title: 'Rampager' }, ko: { title: '학살자' } },
      { tier: 2, portraitFile: 'berserker-limit2.png', en: { title: 'Slayer' }, ko: { title: '섬멸귀' } },
    ],
  },
  story: {
    ko: [
      '진홍 검으로 체력을 걸고 싸우는 복수자입니다. 분사·휩쓸기·흡입·난무로 전장을 휩쓸고, 타격마다 생명을 빼앗습니다.',
      '변신으로 갈망과 광란을 오가며, 광기는 공격 속도와 밀치기 저항을 극대화합니다. 체력이 5% 아래로 떨어지면 불사가 발동합니다.',
      '한계를 넘기면 피가 끓고 말살이 깃듭니다. 학살자, 섬멸귀라 불려도 본질은 같습니다. 피와 광기로 전장을 지배하는 자입니다.',
    ],
    en: [
      'An avenger who spends health for crimson blade work. Spray, swipe, inhale, and flurry tear through foes while every hit steals life.',
      'Conversion toggles Eager and Frenzy; Lunacy maximizes attack speed and knockback resistance. Undying triggers below 5% HP.',
      'Beyond the limit break, blood boils and genocide answers. Titles may read Rampager or Slayer, but the essence is unchanged: to rule the fight with blood and madness.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'spray',
          icon: 'blood',
          element: 'earth',
          ko: {
            name: '분사',
            input: '웅크리기 + 손 바꾸기',
            description: '피를 분사해 공격합니다.',
          },
          en: {
            name: 'Spray',
            input: 'Sneak + swap hands',
            description: 'Sprays blood at foes.',
          },
          masterLevel: 50,
        },
        {
          id: 'undying',
          icon: 'recovery',
          element: 'earth',
          passive: true,
          ko: {
            name: '불사',
            description: '체력이 5% 미만으로 떨어지면 불사가 발동합니다.',
          },
          en: {
            name: 'Undying',
            description: 'Triggers Undying when HP falls below 5%.',
          },
        },
        {
          id: 'swipe',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '휩쓸기',
            input: '웅크리기 + 좌클릭',
            description: '넓게 휩쓸어 공격합니다.',
          },
          en: {
            name: 'Swipe',
            input: 'Sneak + left-click',
            description: 'A wide sweeping strike.',
          },
          masterLevel: 50,
        },
        {
          id: 'inhale',
          icon: 'blood',
          element: 'earth',
          ko: {
            name: '흡입',
            input: '점프 + 우클릭',
            description: '피를 흡입해 공격합니다.',
          },
          en: {
            name: 'Inhale',
            input: 'Jump + right-click',
            description: 'Inhales and strikes with blood force.',
          },
          masterLevel: 50,
        },
        {
          id: 'flurry',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '난무',
            input: '점프 + 좌클릭',
            description: '연속 검격을 가합니다.',
          },
          en: {
            name: 'Flurry',
            input: 'Jump + left-click',
            description: 'A flurry of sword strikes.',
          },
          masterLevel: 50,
        },
        {
          id: 'crimsonAdvance',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '진홍빛 전진',
            input: '웅크리기 + 우클릭',
            description: '진홍빛 기운으로 전진 공격합니다.',
          },
          en: {
            name: 'Crimson Advance',
            input: 'Sneak + right-click',
            description: 'Charges forward with crimson force.',
          },
          masterLevel: 50,
        },
        {
          id: 'conversion',
          icon: 'blood',
          element: 'earth',
          ko: {
            name: '변신',
            input: '손 바꾸기',
            description:
              '갈망: 받는 피해 20% 감소, 공격 시 체력 회복. 광란: 피해 20% 증가, 기술 사용 시 체력 추가 소모.',
          },
          en: {
            name: 'Conversion',
            input: 'Swap hands',
            description:
              'Eager: 20% less damage taken, heal on hit. Frenzy: 20% more damage, extra HP cost on skills.',
          },
        },
        {
          id: 'lunacy',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '광기',
            description:
              '데미지·공격 속도·밀치기 저항이 증가합니다. 공격 시 이동 속도와 점프력이 올라갑니다.',
          },
          en: {
            name: 'Lunacy',
            description:
              'More damage, very fast attack speed, max knockback resistance. Hits grant speed and jump boost.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'bloodSquirt',
          icon: 'blood',
          element: 'earth',
          followUp: true,
          ko: {
            name: '분출',
            input: '같은 스킬 재입력',
            description: '분사 후 재입력.',
          },
          en: {
            name: 'Blood Squirt',
            input: 'Use the same skill again',
            description: 'Follow-up to Spray.',
          },
        },
        {
          id: 'scratch',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '할퀴기',
            input: '같은 스킬 재입력',
            description: '휩쓸기 후 재입력.',
          },
          en: {
            name: 'Scratch',
            input: 'Use the same skill again',
            description: 'Follow-up to Swipe.',
          },
        },
        {
          id: 'burstOut',
          icon: 'blood',
          element: 'earth',
          followUp: true,
          ko: {
            name: '폭발',
            input: '같은 스킬 재입력',
            description: '흡입 후 재입력.',
          },
          en: {
            name: 'Burst Out',
            input: 'Use the same skill again',
            description: 'Follow-up to Inhale.',
          },
        },
        {
          id: 'merciless',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '무자비',
            input: '같은 스킬 재입력',
            description: '난무 후 재입력.',
          },
          en: {
            name: 'Merciless',
            input: 'Use the same skill again',
            description: 'Follow-up to Flurry.',
          },
        },
        {
          id: 'smite',
          icon: 'sword',
          element: 'earth',
          followUp: true,
          ko: {
            name: '강타',
            input: '같은 스킬 재입력',
            description: '진홍빛 전진 후 재입력.',
          },
          en: {
            name: 'Smite',
            input: 'Use the same skill again',
            description: 'Follow-up to Crimson Advance.',
          },
        },
        {
          id: 'thirst',
          icon: 'recovery',
          element: 'earth',
          passive: true,
          ko: { name: '갈증', description: '갈망 상태에서 포만감 효과를 얻습니다.' },
          en: { name: 'Thirst', description: 'Grants saturation while in Eager mode.' },
        },
        {
          id: 'rampageous',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: { name: '난폭함', description: '전체 공격력이 증가하고 공격 시 체력을 회복합니다.' },
          en: { name: 'Rampageous', description: 'Increases all skill damage; life steal on hit.' },
        },
        {
          id: 'bloodboil',
          icon: 'flame',
          element: 'fire',
          ultimate: true,
          ko: {
            name: '들끓는 심장',
            input: '웅크리기 + 숫자키 4',
            description: '15초간 공격력이 대폭 증가하고 공격에 화염 피해가 추가됩니다.',
          },
          en: {
            name: 'Bloodboil',
            input: 'Sneak + hotkey 4',
            description: 'Greatly increases damage for 15s and adds flame damage to attacks.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'rave',
          icon: 'blood',
          element: 'earth',
          followUp: true,
          ko: {
            name: '광분',
            input: '같은 스킬 재입력',
            description: '분사 후 재입력.',
          },
          en: {
            name: 'Rave',
            input: 'Use the same skill again',
            description: 'Follow-up to Spray.',
          },
        },
        {
          id: 'crimsonSlash',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '진홍참',
            input: '같은 스킬 재입력',
            description: '난무 후 재입력.',
          },
          en: {
            name: 'Crimson Slash',
            input: 'Use the same skill again',
            description: 'Follow-up to Flurry.',
          },
        },
        {
          id: 'onslaught',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          ko: {
            name: '맹공',
            input: '같은 스킬 재입력',
            description: '진홍빛 전진 후 재입력.',
          },
          en: {
            name: 'Onslaught',
            input: 'Use the same skill again',
            description: 'Follow-up to Crimson Advance.',
          },
        },
        {
          id: 'overPower',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '넘치는 힘',
            description:
              '공격력·방어력이 증가합니다. 들끓는 심장·불사 대기시간 감소, 피격 시 재생(중첩).',
          },
          en: {
            name: 'Over Power',
            description:
              'More damage and armor; shorter Bloodboil and Undying cooldown; regeneration when hit (stacks).',
          },
        },
        {
          id: 'genocide',
          icon: 'blood',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '말살',
            input: '웅크리기 + 숫자키 5',
            description: '막대한 연속 피해로 적을 말살합니다.',
          },
          en: {
            name: 'Genocide',
            input: 'Sneak + hotkey 5',
            description: 'Annihilates foes with devastating repeated strikes.',
          },
        },
      ],
    },
  ],
};
