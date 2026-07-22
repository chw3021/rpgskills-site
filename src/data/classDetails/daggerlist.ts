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
      '양손 단검과 그림자로 적진을 누비며 출혈을 쌓는 기동형 암살자입니다.',
      '숙련이 오르면 모든 공격 기술과 동맥절단에 연계기가 추가되고, 그림자를 늘려 기술을 함께 사용합니다.',
      '칼날낙인과 그림자원무로 출혈을 쌓아 폭발적으로 마무리합니다.',
    ],
    en: [
      'A mobile assassin who moves through enemy lines with twin daggers and shadows, stacking bleed.',
      'Proficiency adds follow-ups to every attack skill, including ArteryCut, and expands the shadow echoes.',
      'DeathMark and FinalCut rapidly build bleed stacks to finish the fight.',
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
            description: '전방 원뿔을 베어 출혈 1을 부여합니다.',
          },
          en: {
            name: 'Slash',
            input: 'Dagger + not sneaking + right-click',
            description: 'Slash a forward cone and apply 1 bleed.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowDash',
          icon: 'rush',
          element: 'dark',
          ko: {
            name: '그림자질주',
            input: '단검 + 웅크리기 + 우클릭',
            description:
              '전방 질주 중 적중 시 대상 뒤로 이동해 시선을 고정하고 타격합니다. 출혈 1을 부여한 뒤 질주를 종료합니다.',
          },
          en: {
            name: 'ShadowDash',
            input: 'Dagger + sneak + right-click',
            description:
              'Dash forward; on hit, move behind the target, face and strike it, apply 1 bleed, then end the dash.',
          },
          masterLevel: 50,
        },
        {
          id: 'fanOfBlades',
          icon: 'stab',
          element: 'dark',
          ko: {
            name: '칼날부채',
            input: '단검 + 비웅크리기 + 좌클릭',
            description:
              '원뿔로 관통 칼날을 투척한 뒤 되돌아옵니다. 왕복 각 1회 타격하며 타격당 출혈 1을 부여합니다.',
          },
          en: {
            name: 'FanOfBlades',
            input: 'Dagger + not sneaking + left-click',
            description:
              'Throw piercing blades in a cone that return. They hit once each way and apply 1 bleed per hit.',
          },
          masterLevel: 50,
        },
        {
          id: 'shadowClone',
          icon: 'stealth',
          element: 'dark',
          ko: {
            name: '그림자소환',
            input: '단검 + 비웅크리기 + 손 바꾸기',
            description:
              '시선 방향 3.5블록 앞에 플레이어를 바라보는 그림자를 소환합니다. 그림자는 기술을 50% 피해로 따라 사용합니다.',
          },
          en: {
            name: 'ShadowSummon',
            input: 'Dagger + not sneaking + swap hands',
            description:
              'Summon a shadow 3.5 blocks ahead, facing you. The shadow echoes your skills at 50% damage.',
          },
          masterLevel: 1,
        },
        {
          id: 'execution',
          icon: 'stab',
          element: 'dark',
          ko: {
            name: '처형',
            input: '단검 + 웅크리기 + 손 바꾸기',
            description:
              '전방 4블록을 돌진해 적을 모으고 Holding합니다. 밝고 어두운 X자 파티클과 함께 출혈 스택당 배율 +5%의 8회 타격 후 출혈을 갱신하고 복귀합니다.',
          },
          en: {
            name: 'Execution',
            input: 'Dagger + sneak + swap hands',
            description:
              'Dash 4 blocks, gather foes, and Holding. Strike 8 times with bright and dark X particles at +5% per bleed stack, refresh bleed, then return.',
          },
          masterLevel: 50,
        },
        {
          id: 'arteryCut',
          icon: 'slash',
          element: 'dark',
          ko: {
            name: '동맥절단',
            input: '단검 + 웅크리기 + 좌클릭',
            description: '짧게 전진하며 전방 3.5블록을 찌릅니다. 출혈 2와 Holding을 부여합니다.',
          },
          en: {
            name: 'ArteryCut',
            input: 'Dagger + sneak + left-click',
            description: 'Advance briefly and stab 3.5 blocks ahead, applying 2 bleed and Holding.',
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
              '공격력이 증가합니다. 스킬 타격 시 출혈을 부여합니다. 출혈은 스택별 4초(+숙련×1.5초) 동안 유지되며, 초당 현재 체력 × (0.05% + 상처 LV×0.012%) × 스택 피해를 줍니다. 중첩 상한은 없습니다.',
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
            name: '그림자절단',
            input: '절개 후 재우클릭',
            description: '반대 방향의 원호를 베며 CRIT 파티클과 출혈 2를 부여합니다.',
          },
          en: {
            name: 'ShadowCut',
            input: 'Right-click again after Slash',
            description: 'Slash an arc in the opposite direction with CRIT particles and apply 2 bleed.',
          },
        },
        {
          id: 'afterimage',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowDash',
          ko: {
            name: '잔상베기',
            input: '그림자질주 후 웅크리기 + 재우클릭',
            description: '공중에서 내려찍어 하강 보텍스를 만들고 4회 타격합니다. 타격당 출혈 1을 부여합니다.',
          },
          en: {
            name: 'Afterimage',
            input: 'Sneak + right-click again after ShadowDash',
            description: 'Aerial stomp with a downward vortex for 4 hits, applying 1 bleed per hit.',
          },
        },
        {
          id: 'bladeStorm',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'fanOfBlades',
          ko: {
            name: '칼날폭풍',
            input: '칼날부채 후 좌클릭',
            description:
              '칼날이 전방 3~4블록 이동한 뒤 회전 폭풍을 만듭니다. 적을 끌어당기며 타격마다 출혈 1을 부여합니다.',
          },
          en: {
            name: 'BladeStorm',
            input: 'Left-click after FanOfBlades',
            description:
              'Blades travel 3–4 blocks, then form a spinning storm that pulls enemies and applies 1 bleed per hit.',
          },
        },
        {
          id: 'shadowStep',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowClone',
          ko: {
            name: '그림자밟기',
            input: '그림자소환 후 손 바꾸기',
            description: '그림자와 위치를 바꾸고 그림자의 기술 피해를 50%에서 60%로 강화합니다.',
          },
          en: {
            name: 'ShadowStep',
            input: 'Swap hands after ShadowSummon',
            description: 'Swap places with the shadow and increase its echo damage from 50% to 60%.',
          },
        },
        {
          id: 'shadowBurst',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'execution',
          ko: {
            name: '그림자폭발',
            input: '처형 후 웅크리기 + 손 바꾸기',
            description: '처형으로 모은 중심에서 폭발해 5회 타격하고 출혈 지속을 갱신합니다.',
          },
          en: {
            name: 'ShadowBurst',
            input: 'Sneak + swap hands after Execution',
            description: "Explode at Execution's gather center for 5 hits and refresh bleed duration.",
          },
        },
        {
          id: 'bloodTrail',
          icon: 'blood',
          element: 'dark',
          followUp: true,
          chainOf: 'arteryCut',
          ko: {
            name: '혈흔연타',
            input: '동맥절단 후 웅크리기 + 좌클릭',
            description: '동맥절단에 맞은 각 대상에게 베기와 혈흔 파티클을 일으키며 3회 연속 타격합니다.',
          },
          en: {
            name: 'BloodTrail',
            input: 'Sneak + left-click after ArteryCut',
            description: 'Create sweep and blood particles at every ArteryCut target and strike 3 times.',
          },
        },
        {
          id: 'assassinLimit1',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: { name: '단검술 숙련', description: '출혈 지속 +1.5초. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Dagger Mastery', description: 'Bleed duration +1.5s. Unlocks Limit 1 follow-ups.' },
        },
        {
          id: 'deathMark',
          icon: 'target-shot',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '칼날낙인',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '공중으로 도약한 뒤 전방 적에게 칼날을 여러 번 박아 Holding과 출혈을 쌓습니다. 칼날은 적에게 항상 박히는 판정이며, 마무리로 칼날이 회귀하며 심장에서 피·어둠 폭발을 일으킵니다. 폭발 피해는 출혈 스택당 +3%입니다.',
          },
          en: {
            name: 'Blade Brand',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Leap and pin multiple blades into forward foes with Holding and bleed. Blades always land; the finale pulls them back for a blood/dark heart explosion that gains +3% per bleed stack.',
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
            name: '암영절단',
            input: '그림자절단 후 재우클릭',
            description: '십자 원뿔로 베어 Holding하고 흑요석 파티클을 일으킵니다.',
          },
          en: {
            name: 'ShadowCutII',
            input: 'Right-click again after ShadowCut',
            description: 'Slash cross-shaped cones with Holding and obsidian particles.',
          },
        },
        {
          id: 'afterimageII',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowDash',
          ko: {
            name: '암영잔상',
            input: '잔상베기 후 웅크리기 + 재우클릭',
            description:
              '질주로 맞힌 단일 대상 뒤에 그림자 2기를 세우고 포탈과 별 모양 베기 궤적으로 3회 타격합니다.',
          },
          en: {
            name: 'AfterimageII',
            input: 'Sneak + right-click again after Afterimage',
            description:
              'Place 2 shadow stands behind the single dash-hit target and strike 3 times with portal and star-shaped swing trails.',
          },
        },
        {
          id: 'shadowRush',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'fanOfBlades',
          ko: {
            name: '그림자쇄도',
            input: '칼날폭풍 후 좌클릭',
            description: '그림자 잔상이 전방으로 쇄도하며 경로를 4회 타격하고 타격마다 출혈 1을 부여합니다.',
          },
          en: {
            name: 'ShadowRush',
            input: 'Left-click after BladeStorm',
            description: 'Shadow afterimages rush forward, hitting the path 4 times and applying 1 bleed per hit.',
          },
        },
        {
          id: 'twinShadow',
          icon: 'stealth',
          element: 'dark',
          followUp: true,
          chainOf: 'shadowClone',
          ko: {
            name: '쌍영',
            input: '그림자밟기 후 손 바꾸기',
            description: '그림자를 다시 소환해 2기의 그림자가 동시에 존재하게 합니다.',
          },
          en: {
            name: 'TwinShadow',
            input: 'Swap hands after ShadowStep',
            description: 'Resummon a shadow so 2 shadows exist at once.',
          },
        },
        {
          id: 'finisher',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'execution',
          ko: {
            name: '마무리일격',
            input: '그림자폭발 후 웅크리기 + 손 바꾸기',
            description:
              '화면을 어둡게 하고 선을 베며 끝까지 질주한 뒤 돌아옵니다. 경로의 적을 타격하고 출혈 지속을 갱신합니다.',
          },
          en: {
            name: 'Finisher',
            input: 'Sneak + swap hands after ShadowBurst',
            description:
              'Darken the screen, line-strike, dash to the end, and return. Hit path enemies and refresh bleed.',
          },
        },
        {
          id: 'heartseeker',
          icon: 'blood',
          element: 'dark',
          followUp: true,
          chainOf: 'arteryCut',
          ko: {
            name: '심장추적자',
            input: '혈흔연타 후 웅크리기 + 좌클릭',
            description:
              '각 대상에게 superHolding을 부여하고 심장에 X를 새긴 뒤 폭발시켜 1회 타격하고 출혈 지속을 갱신합니다.',
          },
          en: {
            name: 'Heartseeker',
            input: 'Sneak + left-click after BloodTrail',
            description:
              "Apply superHolding, mark an X at each target's heart, then explode for 1 hit and refresh bleed.",
          },
        },
        {
          id: 'assassinLimit2',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: {
            name: '암영술',
            description: '출혈 지속 +1.5초. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Shade Arts',
            description: 'Bleed duration +1.5s. Halves the first limit-break ultimate cooldown.',
          },
        },
        {
          id: 'finalCut',
          icon: 'slash',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '그림자원무',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '전방 중심을 기준으로 그림자 6기가 원을 그리고, 플레이어는 중앙에서 도약해 원 안 적을 Holding하며 중앙으로 모읍니다. 마주보는 그림자들이 자리를 바꾸며 경로를 휩쓸고, 약 20회 타격과 출혈 10중첩 후 처음 위치로 회귀합니다. 그림자가 중앙으로 모여 폭발하며, 폭발 피해는 출혈 스택당 +5%입니다.',
          },
          en: {
            name: 'Shadow Waltz',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Six shadows form a ring ahead while you leap into the center, Holding and pulling foes inward. Opposite shadows swap and sweep the lanes for about 20 hits and 10 bleed stacks, then you return home as the shadows converge for an explosion that gains +5% per bleed stack.',
          },
        },
      ],
    },
  ],
};
