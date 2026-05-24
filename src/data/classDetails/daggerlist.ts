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
      '숙련 1부터 연계 기술(그림자 절단, 잔상 베기, 칼날 폭풍, 쌍격습, 마무리 일격)이 열립니다.',
      '암살자는 죽음의 표식으로 적을 사냥하고, 암영은 2차 연계와 최후의 절단으로 전장을 가릅니다.',
    ],
    en: [
      'A mobile assassin who fights with twin daggers and shadow. Slash, shadow dash, and fan of blades stack bleed while clones echo your strikes.',
      'Proficiency 1 unlocks combo follow-ups: Shadow Cut, Afterimage, Blade Storm, Twin Assault, and Finisher.',
      'Assassin tier hunts with Death Mark; Shade tier adds empowered limit-2 combos and Final Cut.',
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
          element: 'dark',
          ko: {
            name: '절개',
            input: '단검 + 비웅크리기 + 우클릭',
            description: '짧게 베어 출혈을 쌓습니다. 분신이 좁은 범위를 약하게 따라 타격합니다.',
          },
          en: {
            name: 'Slash',
            input: 'Dagger + not sneaking + right-click',
            description: 'Quick slash that stacks bleed. Your clone echoes a weaker slash in a small arc.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowDash',
          icon: 'rush',
          element: 'dark',
          ko: { name: '그림자 질주', input: '단검 + 웅크리기 + 우클릭', description: '전방으로 돌진하며 벱니다.' },
          en: { name: 'Shadow Dash', input: 'Dagger + sneak + right-click', description: 'Dashes forward and cuts.' },
          masterLevel: 50,
        },
        {
          id: 'fanOfBlades',
          icon: 'stab',
          element: 'dark',
          ko: { name: '칼날 부채', input: '단검 + 비웅크리기 + 좌클릭', description: '주변으로 칼날을 흩뿌립니다.' },
          en: { name: 'Fan of Blades', input: 'Dagger + not sneaking + left-click', description: 'Scatters blades around you.' },
          masterLevel: 50,
        },
        {
          id: 'shadowClone',
          icon: 'stealth',
          element: 'dark',
          ko: {
            name: '그림자 분신',
            input: '단검 + 비웅크리기 + 손 바꾸기',
            description: '분신을 소환하고 절개·칼날 부채를 복제합니다.',
          },
          en: {
            name: 'Shadow Clone',
            input: 'Dagger + not sneaking + swap hands',
            description: 'Summons a clone that echoes Slash and Fan of Blades.',
          },
          masterLevel: 50,
        },
        {
          id: 'execution',
          icon: 'stab',
          element: 'dark',
          ko: {
            name: '처형',
            input: '단검 + 웅크리기 + 손 바꾸기',
            description: '출혈 대상에게 큰 피해를 줍니다. 출혈 1중첩마다 보너스 +1(최대 5).',
          },
          en: {
            name: 'Execution',
            input: 'Dagger + sneak + swap hands',
            description: 'Heavy damage to bleeding targets. +1 bonus per bleed stack (max 5).',
          },
          masterLevel: 50,
        },
        {
          id: 'assassin',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: { name: '암살자', description: '공격력이 증가합니다. 출혈은 최대 5중첩까지 쌓입니다.' },
          en: { name: 'Assassin', description: 'Increases damage. Bleed stacks up to 5 times.' },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'shadowCut',
          icon: 'slash',
          element: 'dark',
          followUp: true,
          chainOf: 'slash',
          ko: {
            name: '그림자 절단',
            input: '절개 후 재우클릭',
            description: '절개 사용 후 짧은 시간 안에 재우클릭으로 그림자 절단을 이어갑니다.',
          },
          en: {
            name: 'Shadow Cut',
            input: 'Right-click again after Slash',
            description: 'Within a short window after Slash, right-click again for a shadow cut.',
          },
        },
        {
          id: 'afterimage',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          ko: {
            name: '잔상 베기',
            input: '그림자 질주 후 웅크리기 + 재우클릭',
            description: '그림자 질주 직후 웅크리기+재우클릭으로 잔상 베기를 이어갑니다.',
          },
          en: {
            name: 'Afterimage',
            input: 'Sneak + right-click again after Shadow Dash',
            description: 'Within a short window after Shadow Dash, sneak and right-click again.',
          },
        },
        {
          id: 'bladeStorm',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          ko: {
            name: '칼날 폭풍',
            input: '칼날 부채 후 좌클릭',
            description: '칼날 부채 직후 좌클릭으로 칼날 폭풍을 이어갑니다.',
          },
          en: {
            name: 'Blade Storm',
            input: 'Left-click again after Fan of Blades',
            description: 'Within a short window after Fan of Blades, left-click for a blade storm.',
          },
        },
        {
          id: 'twinAssault',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          ko: {
            name: '쌍격습',
            input: '그림자 분신 후 손 바꾸기',
            description: '그림자 분신 직후 손 바꾸기로 분신과 함께 쌍격습을 이어갑니다.',
          },
          en: {
            name: 'Twin Assault',
            input: 'Swap hands again after Shadow Clone',
            description: 'Within a short window after Shadow Clone, swap hands for a twin assault.',
          },
        },
        {
          id: 'finisher',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          ko: {
            name: '마무리 일격',
            input: '처형 후 웅크리기 + 손 바꾸기',
            description: '처형 직후 웅크리기+손 바꾸기로 마무리 일격을 이어갑니다.',
          },
          en: {
            name: 'Finisher',
            input: 'Sneak + swap again after Execution',
            description: 'Within a short window after Execution, sneak and swap for a finisher.',
          },
        },
        {
          id: 'assassinLimit1',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: { name: '암살자', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Assassin', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'deathMark',
          icon: 'target-shot',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '죽음의 표식',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '전투 모드에서만 발동합니다. 광역 표식과 출혈 피해를 입힙니다(배율 × 패널 공격력). 출혈은 중첩당 현재 체력 0.6% 고정 피해(최대 4/회)이며 최대 5중첩입니다.',
          },
          en: {
            name: 'Death Mark',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Combat mode only. Deals area mark and bleed damage (multiplier × panel attack damage). Bleed: 0.6% of current HP per stack per hit (max 4/stack), up to 5 stacks.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'assassinLimit2',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: {
            name: '암살자',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Assassin',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'shadowCutII',
          icon: 'slash',
          element: 'dark',
          followUp: true,
          ko: { name: '암영 절단', input: '절개 연계(2차)', description: '2차 한계에서 절개 연계가 강화됩니다.' },
          en: { name: 'Shadow Cut II', input: 'Limit 2 Slash combo', description: 'Empowered follow-up after Slash.' },
        },
        {
          id: 'afterimageII',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          ko: { name: '암영 잔상', input: '그림자 질주 연계(2차)', description: '2차 한계에서 그림자 질주 연계가 강화됩니다.' },
          en: { name: 'Afterimage II', input: 'Limit 2 Shadow Dash combo', description: 'Empowered follow-up after Shadow Dash.' },
        },
        {
          id: 'bladeStormII',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          ko: { name: '암영 칼날 폭풍', input: '칼날 부채 연계(2차)', description: '2차 한계에서 칼날 부채 연계가 강화됩니다.' },
          en: { name: 'Blade Storm II', input: 'Limit 2 Fan of Blades combo', description: 'Empowered follow-up after Fan of Blades.' },
        },
        {
          id: 'twinAssaultII',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          ko: { name: '쌍영 습격', input: '그림자 분신 연계(2차)', description: '2차 한계에서 그림자 분신 연계가 강화됩니다.' },
          en: { name: 'Twin Assault II', input: 'Limit 2 Shadow Clone combo', description: 'Empowered follow-up after Shadow Clone.' },
        },
        {
          id: 'finisherII',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          ko: { name: '암영 처단', input: '처형 연계(2차)', description: '2차 한계에서 처형 연계가 강화됩니다.' },
          en: { name: 'Finisher II', input: 'Limit 2 Execution combo', description: 'Empowered follow-up after Execution.' },
        },
        {
          id: 'finalCut',
          icon: 'slash',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '최후의 절단',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '전투 모드에서만 발동합니다. 광역 절단과 출혈 피해를 입힙니다(배율 × 패널 공격력).',
          },
          en: {
            name: 'Final Cut',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Combat mode only. Wide slash and bleed damage (multiplier × panel attack damage).',
          },
        },
      ],
    },
  ],
};
