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
      '양손 단검과 그림자로 싸우는 기동형 암살자입니다. 절개·동맥 절단·그림자 질주·칼날 부채로 출혈 스택을 쌓고, 상처 패시브가 초당 출혈 피해를 키웁니다.',
      '숙련 1부터 연계 기술(그림자 절단, 잔상 베기, 칼날 폭풍, 쌍격습, 마무리 일격)이 열립니다. 출혈은 스택별 만료이며 중첩 상한이 없습니다.',
      '암살자는 죽음의 표식으로 적을 사냥하고, 암영은 2차 연계와 최후의 절단으로 전장을 가릅니다.',
    ],
    en: [
      'A mobile assassin who fights with twin daggers and shadow. Slash, artery cut, shadow dash, and fan of blades stack bleed while Wound scales the per-second bleed DoT.',
      'Proficiency 1 unlocks combo follow-ups: Shadow Cut, Afterimage, Blade Storm, Twin Assault, and Finisher. Bleed stacks expire individually with no cap.',
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
            description: '전방 원뿔을 베어 출혈 1을 부여합니다. 분신이 좁은 범위를 약하게 따라 타격합니다.',
          },
          en: {
            name: 'Slash',
            input: 'Dagger + not sneaking + right-click',
            description: 'Forward cone slash that applies 1 bleed. Your clone echoes a weaker slash in a small arc.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowDash',
          icon: 'rush',
          element: 'dark',
          ko: {
            name: '그림자 질주',
            input: '단검 + 웅크리기 + 우클릭',
            description: '전방 질주 중 적중 시 등 뒤로 이동·시선을 고정한 뒤 타격하고 출혈 1을 부여하며 질주를 종료합니다.',
          },
          en: {
            name: 'Shadow Dash',
            input: 'Dagger + sneak + right-click',
            description: 'Dash forward; on hit, move behind the foe, face them, strike, apply 1 bleed, and end the dash.',
          },
          masterLevel: 50,
        },
        {
          id: 'fanOfBlades',
          icon: 'stab',
          element: 'dark',
          ko: {
            name: '칼날 부채',
            input: '단검 + 비웅크리기 + 좌클릭',
            description: '원뿔로 관통 칼날을 투척한 뒤 되돌아옵니다. 왕복 각 1회 타격하며 타격당 출혈 1을 부여합니다.',
          },
          en: {
            name: 'Fan of Blades',
            input: 'Dagger + not sneaking + left-click',
            description: 'Throws piercing blades in a cone that return. Hits once each way and applies 1 bleed per hit.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowClone',
          icon: 'stealth',
          element: 'dark',
          ko: {
            name: '그림자 분신',
            input: '단검 + 비웅크리기 + 손 바꾸기',
            description: '시전자 머리가 장착된 분신을 소환하고 절개·칼날 부채를 복제합니다.',
          },
          en: {
            name: 'Shadow Clone',
            input: 'Dagger + not sneaking + swap hands',
            description: 'Summons a clone wearing your head that echoes Slash and Fan of Blades.',
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
            description:
              '전방 4블록 돌진 후 경로의 적을 모아 Holding합니다. 출혈 스택당 +5% 배율의 8히트 후 출혈 지속을 전량 갱신하고 시전 위치로 복귀합니다.',
          },
          en: {
            name: 'Execution',
            input: 'Dagger + sneak + swap hands',
            description:
              'Dash 4 blocks, pull path foes, and Holding. Deal 8 hits at +5% per bleed stack, refresh all bleed durations, then return to cast position.',
          },
          masterLevel: 50,
        },
        {
          id: 'arteryCut',
          icon: 'slash',
          element: 'dark',
          ko: {
            name: '동맥 절단',
            input: '단검 + 웅크리기 + 좌클릭',
            description: '짧게 전진하며 전방 3.5를 찌릅니다. 출혈 2와 Holding을 부여합니다. 연계는 없습니다.',
          },
          en: {
            name: 'Artery Cut',
            input: 'Dagger + sneak + left-click',
            description: 'Short advance and a 3.5-block stab. Applies 2 bleed and Holding. No follow-up chain.',
          },
          masterLevel: 50,
        },
        {
          id: 'assassin',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: {
            name: '상처',
            description:
              '공격력이 증가합니다. 스킬 타격 시 출혈을 부여합니다. 출혈은 스택별 4초(+숙련×1.5초) 만료이며, 초당 현재 체력 × (0.05% + 상처 LV×0.012%) × 스택 피해를 줍니다. 중첩 상한 없음.',
          },
          en: {
            name: 'Wound',
            description:
              'Increases damage. Skills apply bleed. Each stack lasts 4s (+1.5s per proficiency) and deals current HP × (0.05% + Wound LV×0.012%) × stacks per second. No stack cap.',
          },
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
            description: '더 긴 원뿔로 재베고 출혈 2를 부여합니다.',
          },
          en: {
            name: 'Shadow Cut',
            input: 'Right-click again after Slash',
            description: 'Longer cone re-slash that applies 2 bleed.',
          },
        },
        {
          id: 'afterimage',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowDash',
          ko: {
            name: '잔상 베기',
            input: '그림자 질주 후 웅크리기 + 재우클릭',
            description: '같은 대상의 뒤로 다시 출현해 타격하고 출혈 1을 부여합니다.',
          },
          en: {
            name: 'Afterimage',
            input: 'Sneak + right-click again after Shadow Dash',
            description: 'Appear behind the same target again, strike, and apply 1 bleed.',
          },
        },
        {
          id: 'bladeStorm',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'fanOfBlades',
          ko: {
            name: '칼날 폭풍',
            input: '칼날 부채 후 좌클릭',
            description: '투사체 수와 폭이 늘어난 왕복 칼날을 투척합니다.',
          },
          en: {
            name: 'Blade Storm',
            input: 'Left-click again after Fan of Blades',
            description: 'Throws more and wider returning blades.',
          },
        },
        {
          id: 'twinAssault',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowClone',
          ko: {
            name: '쌍격습',
            input: '그림자 분신 후 손 바꾸기',
            description: '본인과 분신이 동시에 원뿔을 벱니다.',
          },
          en: {
            name: 'Twin Assault',
            input: 'Swap hands again after Shadow Clone',
            description: 'You and your clone cone-slash together.',
          },
        },
        {
          id: 'finisher',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'execution',
          ko: {
            name: '마무리 일격',
            input: '처형 후 웅크리기 + 손 바꾸기',
            description: '복귀 없이 모아둔 적에게 추가 다단 히트를 가하고 출혈 지속을 전량 갱신합니다.',
          },
          en: {
            name: 'Finisher',
            input: 'Sneak + swap again after Execution',
            description: 'Without returning, multi-hit gathered foes and refresh all bleed durations.',
          },
        },
        {
          id: 'assassinLimit1',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: { name: '상처', description: '출혈 지속 +1.5초. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Wound', description: 'Bleed duration +1.5s. Limit 1 combo follow-ups unlocked.' },
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
              '전투 모드에서만 발동합니다. 광역 표식과 출혈 3스택을 부여합니다(배율 × 패널 공격력). 출혈은 스택별 만료·초당 DoT이며 중첩 상한이 없습니다.',
          },
          en: {
            name: 'Death Mark',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Combat mode only. Deals area mark damage and applies 3 bleed stacks (multiplier × panel attack damage). Bleed stacks expire individually and deal per-second DoT with no cap.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'shadowCutII',
          icon: 'slash',
          element: 'dark',
          followUp: true,
          chainOf: 'slash',
          ko: {
            name: '암영 절단',
            input: '절개 연계(2차)',
            description: '십자 이중 원뿔과 짧은 Holding을 가하고 출혈 2를 부여합니다.',
          },
          en: {
            name: 'Shadow Cut II',
            input: 'Limit 2 Slash combo',
            description: 'Cross cones with short Holding and 2 bleed.',
          },
        },
        {
          id: 'afterimageII',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowDash',
          ko: {
            name: '암영 잔상',
            input: '그림자 질주 연계(2차)',
            description: '질주·잔상에서 맞은 적 전원 뒤로 순간 출현해 연타하고 출혈 2를 부여합니다.',
          },
          en: {
            name: 'Afterimage II',
            input: 'Limit 2 Shadow Dash combo',
            description: 'Appear behind every marked foe for a chain strike and apply 2 bleed.',
          },
        },
        {
          id: 'bladeStormII',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'fanOfBlades',
          ko: {
            name: '암영 칼날 폭풍',
            input: '칼날 부채 연계(2차)',
            description: '짧은 선회 후 더 넓은 왕복 칼날을 투척합니다.',
          },
          en: {
            name: 'Blade Storm II',
            input: 'Limit 2 Fan of Blades combo',
            description: 'Short orbit, then wider returning blades.',
          },
        },
        {
          id: 'twinAssaultII',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowClone',
          ko: {
            name: '쌍영 습격',
            input: '그림자 분신 연계(2차)',
            description: '분신이 주 대상 뒤로 이동한 뒤 동시 강타하고 출혈 2를 부여합니다.',
          },
          en: {
            name: 'Twin Assault II',
            input: 'Limit 2 Shadow Clone combo',
            description: 'Clone moves behind the main target for a dual strike and applies 2 bleed.',
          },
        },
        {
          id: 'finisherII',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'execution',
          ko: {
            name: '암영 처단',
            input: '처형 연계(2차)',
            description: 'Holding을 유지한 채 최종 처형 히트(스택 배율 강화)를 가하고 출혈을 갱신합니다.',
          },
          en: {
            name: 'Finisher II',
            input: 'Limit 2 Execution combo',
            description: 'While Holding, deliver a final execute with stronger stack scaling and refresh bleed.',
          },
        },
        {
          id: 'assassinLimit2',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: {
            name: '상처',
            description: '출혈 지속 +1.5초. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Wound',
            description: 'Bleed duration +1.5s. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'finalCut',
          icon: 'slash',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '최후의 절단',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '전투 모드에서만 발동합니다. 광역 절단과 출혈 5스택을 부여합니다(배율 × 패널 공격력).',
          },
          en: {
            name: 'Final Cut',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Combat mode only. Wide slash and 5 bleed stacks (multiplier × panel attack damage).',
          },
        },
      ],
    },
  ],
};
