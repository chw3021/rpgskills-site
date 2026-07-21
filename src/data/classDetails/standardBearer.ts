import type { ClassDetailDef } from './types';

export const standardBearerDetail: ClassDetailDef = {
  id: 'standardBearer',
  order: 32,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      {
        tier: 0,
        portraitFile: 'standardBearer.png',
        en: { title: 'Standard Bearer' },
        ko: { title: '기수' },
      },
      {
        tier: 1,
        portraitFile: 'standardBearer-limit1.png',
        en: { title: 'Ensign' },
        ko: { title: '기장' },
      },
      {
        tier: 2,
        portraitFile: 'standardBearer-limit2.png',
        en: { title: 'Grand Ensign' },
        ko: { title: '진기' },
      },
    ],
  },
  story: {
    ko: [
      '흰 깃발과 가위로 전열을 지휘하는 근접 지원가입니다. 적을 때릴수록 주변 아군을 격려 치유하고, 포섭으로 팀 딜 윈도우를 엽니다.',
      '깃발 구역·기세 제압·신호 기동·포고 표식·나팔 사기로 라인이 갈리며, 기장은 연계와 패업령으로 전선을 이끕니다.',
      '진기는 연대기와 전장돌파로 군기를 정점에 올리며, 문장 스택과 격려로 전장을 깃발 아래 유지합니다.',
    ],
    en: [
      'A frontline support who commands with banner and shears. Hitting foes inspires nearby allies, while coerce opens team damage windows.',
      'Banner zones, demoralize CC, signal mobility, proclaim marks, and war-horn power split by lane. Ensigns lead with combos and Decree of Ruin.',
      'Grand Ensigns peak with Rally Standard and Field Breakthrough, holding the line via Heraldry stacks and inspire heals.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'warBanner',
          icon: 'spear',
          element: 'wind',
          guiColumn: 0,
          ko: {
            name: '전장기',
            input: '지상에서 비웅크리기 + 우클릭',
            description:
              '지휘 깃발 거점을 세웁니다. 구역 내 적을 포섭하고, 아군에게 신속과 소량 격려를 줍니다.',
          },
          en: {
            name: 'War Banner',
            input: 'On ground + not sneaking + right-click',
            description:
              'Plants a command banner zone that coerces foes and grants Speed plus light inspire to allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'demoralize',
          icon: 'slash',
          element: 'wind',
          guiColumn: 1,
          ko: {
            name: '기세꺾기',
            input: '웅크리기 + 우클릭',
            description: '전방 직선 피해와 포섭에 더해 짧은 감속·약화를 겁니다.',
          },
          en: {
            name: 'Demoralize',
            input: 'Sneak + right-click',
            description: 'Forward line damage and coerce, plus brief Slowness and Weakness.',
          },
          masterLevel: 50,
        },
        {
          id: 'signalCall',
          icon: 'rush',
          element: 'wind',
          guiColumn: 2,
          ko: {
            name: '신호',
            input: '손 바꾸기',
            description:
              '기동 지휘: 본인과 가까운 파티원에게 신속과 피해 버프를 줍니다.',
          },
          en: {
            name: 'Signal Call',
            input: 'Swap hands',
            description:
              'Mobility command: Speed and a damage buff for you and nearby party members.',
          },
          masterLevel: 50,
        },
        {
          id: 'proclaim',
          icon: 'stab',
          element: 'wind',
          guiColumn: 3,
          ko: {
            name: '포고',
            input: '웅크리기 + 손 바꾸기',
            description: '인장 폭발로 주변 적에게 피해를 주고, 가장 강한 포섭·표식을 남깁니다.',
          },
          en: {
            name: 'Proclaim',
            input: 'Sneak + swap hands',
            description: 'Seal burst with nearby damage and the strongest coerce mark.',
          },
          masterLevel: 50,
        },
        {
          id: 'bannerCharge',
          icon: 'rush',
          element: 'wind',
          guiColumn: 4,
          ko: {
            name: '깃기돌진',
            input: '공중 + 비웅크리기 + 좌클릭',
            description: '깃발 잔상을 남기며 돌진합니다. 경로 피해·포섭과 함께 격려가 발동합니다.',
          },
          en: {
            name: 'Banner Charge',
            input: 'While airborne + not sneaking + left-click',
            description: 'Dash with banner afterimages. Path damage, coerce, and inspire on hits.',
          },
          masterLevel: 50,
        },
        {
          id: 'warHorn',
          icon: 'rush',
          element: 'wind',
          guiColumn: 5,
          ko: {
            name: '전투나팔',
            input: '웅크리기 + 좌클릭',
            description:
              '화음 나팔로 본인·파티에게 힘·성급과 격려 파동을 줍니다. 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'War Horn',
            input: 'Sneak + left-click',
            description:
              'Chord fanfare grants Strength, Haste, and an inspire wave. Scales with Signal Call level.',
          },
        },
        {
          id: 'heraldry',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '기병깃술',
            description:
              '근접 최종 피해가 증가합니다. 스킬 적중 시 문장 스택을 쌓고, 주변 아군을 소량 격려 치유합니다(브리기테형).',
          },
          en: {
            name: 'Heraldry',
            description:
              'Increases melee final damage. Skill hits build Heraldry stacks and inspire-heal nearby allies (Brigitte-style).',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'flagFall',
          icon: 'slash',
          element: 'wind',
          followUp: true,
          chainOf: 'warBanner',
          guiColumn: 9,
          ko: {
            name: '깃봉추적',
            input: '전장기 맥동 종료 직후 우클릭',
            description: '전방 직선 지원 피해. 계수는 전장기 레벨에 비례합니다.',
          },
          en: {
            name: 'Flag Fall',
            input: 'Right-click after War Banner pulses end',
            description: 'Forward support line. Scales with War Banner level.',
          },
        },
        {
          id: 'dirgeCut',
          icon: 'slash',
          element: 'wind',
          followUp: true,
          chainOf: 'demoralize',
          guiColumn: 10,
          ko: {
            name: '기세분쇄',
            input: '기세꺾기 직후 웅크리기 + 우클릭',
            description: '전방 직선 지원 피해. 계수는 기세꺾기 레벨에 비례합니다.',
          },
          en: {
            name: 'Dirge Cut',
            input: 'Sneak + right-click after Demoralize',
            description: 'Forward support line. Scales with Demoralize level.',
          },
        },
        {
          id: 'recallPing',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'signalCall',
          guiColumn: 11,
          ko: {
            name: '신호반향',
            input: '신호 직후 손 바꾸기',
            description: '전방 직선 지원 피해. 계수는 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'Recall Ping',
            input: 'Swap hands after Signal Call',
            description: 'Forward support line. Scales with Signal Call level.',
          },
        },
        {
          id: 'edictMark',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          chainOf: 'proclaim',
          guiColumn: 12,
          ko: {
            name: '포고각인',
            input: '포고 직후 웅크리기 + 손 바꾸기',
            description: '전방 직선 지원 피해. 계수는 포고 레벨에 비례합니다.',
          },
          en: {
            name: 'Edict Mark',
            input: 'Sneak + swap hands after Proclaim',
            description: 'Forward support line. Scales with Proclaim level.',
          },
        },
        {
          id: 'standardSwap',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'bannerCharge',
          guiColumn: 13,
          ko: {
            name: '깃기교환',
            input: '깃기돌진 직후 공중 + 비웅크리기 + 좌클릭',
            description: '전방 적과 위치를 교환하거나 전방으로 도약합니다. 착지 시 주변 적에게 지원 피해를 줍니다.',
          },
          en: {
            name: 'Standard Swap',
            input: 'Airborne + not sneaking + left-click after Banner Charge',
            description: 'Swap places with a forward foe or leap ahead. Deals support damage on landing.',
          },
        },
        {
          id: 'battleDirge',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'warHorn',
          guiColumn: 14,
          ko: {
            name: '전장장송',
            input: '전투나팔 직후 웅크리기 + 좌클릭',
            description: '사기 재적용과 넓은 격려 파동. 연계 피해 비중은 낮습니다.',
          },
          en: {
            name: 'Battle Dirge',
            input: 'Sneak + left-click after War Horn',
            description: 'Morale refresh and a wide inspire wave. Follow-up damage is reduced.',
          },
        },
        {
          id: 'heraldryLimit1',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 16,
          ko: { name: '기병깃술강화', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Heraldry Ascendant', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'decreeOfRuin',
          icon: 'axe',
          element: 'wind',
          ultimate: true,
          guiColumn: 17,
          ko: {
            name: '패업령',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '긴 직선 지원 피해와 강한 포섭을 줍니다. 2차 한계 돌파 시 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Decree of Ruin',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Long line support damage and heavy coerce. Cooldown is shorter at second limit break.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'highCommand',
          icon: 'slash',
          element: 'wind',
          followUp: true,
          chainOf: 'warBanner',
          guiColumn: 18,
          ko: {
            name: '기운파달',
            input: '깃봉추적 직후 우클릭',
            description: '긴 전방 직선 지원 피해를 줍니다.',
          },
          en: {
            name: 'High Command',
            input: 'Right-click after Flag Fall',
            description: 'Long forward support line damage.',
          },
        },
        {
          id: 'lowCrush',
          icon: 'storm',
          element: 'wind',
          followUp: true,
          chainOf: 'demoralize',
          guiColumn: 19,
          ko: {
            name: '기세압축',
            input: '기세분쇄 직후 웅크리기 + 우클릭',
            description: '주변 지원 피해를 줍니다.',
          },
          en: {
            name: 'Low Crush',
            input: 'Sneak + right-click after Dirge Cut',
            description: 'Nearby support burst damage.',
          },
        },
        {
          id: 'surgeRecall',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'signalCall',
          guiColumn: 20,
          ko: {
            name: '파열호각',
            input: '신호반향 직후 손 바꾸기',
            description: '전방 직선 지원 피해를 줍니다.',
          },
          en: {
            name: 'Surge Recall',
            input: 'Swap hands after Recall Ping',
            description: 'Forward support line damage.',
          },
        },
        {
          id: 'lawPurge',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          chainOf: 'proclaim',
          guiColumn: 21,
          ko: {
            name: '율격종결',
            input: '포고각인 직후 웅크리기 + 손 바꾸기',
            description: '주변 지원 피해를 줍니다.',
          },
          en: {
            name: 'Law Purge',
            input: 'Sneak + swap hands after Edict Mark',
            description: 'Nearby support burst damage.',
          },
        },
        {
          id: 'fieldBreakthrough',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'bannerCharge',
          guiColumn: 22,
          ko: {
            name: '전장돌파',
            input: '깃기교환 직후 공중 + 비웅크리기 + 좌클릭',
            description: '전장을 가로지르는 긴 돌진으로 경로상 적에게 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Field Breakthrough',
            input: 'Airborne + not sneaking + left-click after Standard Swap',
            description: 'Long dash across the battlefield with support damage and coerce along the path.',
          },
        },
        {
          id: 'ruinDirge',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'warHorn',
          guiColumn: 23,
          ko: {
            name: '결전장송',
            input: '전장장송 직후 웅크리기 + 좌클릭',
            description: '넓은 격려 파동과 강화 사기 재적용. 연계 피해 비중은 낮습니다.',
          },
          en: {
            name: 'Ruin Dirge',
            input: 'Sneak + left-click after Battle Dirge',
            description: 'Wide inspire wave and stronger morale refresh. Follow-up damage is reduced.',
          },
        },
        {
          id: 'heraldryLimit2',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '진기병깃술',
            description:
              '공격력·방어력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Grand Heraldry',
            description:
              'Increases damage and defense. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'rallyStandard',
          icon: 'shield',
          element: 'wind',
          ultimate: true,
          guiColumn: 26,
          ko: {
            name: '연대기',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '짧은 흡수·저항과 격려 대파동, 깃발 숲을 펼칩니다. 주변 적에게 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Rally Standard',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Short Absorption/Resistance, a large inspire wave, and a banner grove. Damages and coerces nearby foes.',
          },
        },
      ],
    },
  ],
};
