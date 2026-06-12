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
      '흰 깃발과 단검으로 전열을 다지는 기수입니다. 전장기·기세꺾기·신호·포고로 적을 포섭하고 받는 피해를 키우며, 깃기돌진으로 전장을 가로지릅니다.',
      '기장으로 승진하며 깃봉추적·깃기교환 연계와 패업령으로 군진을 이끕니다. 전투나팔·신호는 파티원의 피해도 함께 올립니다.',
      '진기는 연대기와 전장돌파·율격종결로 군기를 정점에 올리며, 기병깃술 스택과 포섭으로 전장 전체를 깃발 아래 통일합니다.',
    ],
    en: [
      'A standard bearer who holds the line with white banner and dagger. War Banner, Demoralize, Signal Call, and Proclaim coerce foes and raise damage taken while Banner Charge cuts across the field.',
      'Promotion to Ensign unlocks flag fall, standard swap, and Decree of Ruin to lead the formation. War Horn and Signal Call also amplify party damage.',
      'The Grand Ensign commands with Rally Standard and field breakthrough chains, Heraldry stacks, and coercion until the whole army marches under one banner.',
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
            input: '우클릭',
            description:
              '깃발을 거치합니다. 주기적으로 주변 적을 포섭하고 받는 피해를 키웁니다.',
          },
          en: {
            name: 'War Banner',
            input: 'Right-click',
            description:
              'Deploys a banner stand that periodically coerces nearby foes and raises damage taken.',
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
            description: '전방 직선 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Demoralize',
            input: 'Sneak + right-click',
            description: 'Forward line support damage and coerce.',
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
              '본인과 가까운 파티원에게 신속과 피해 증가 버프를 부여합니다. 레벨이 높을수록 지속시간과 피해 보너스가 커집니다.',
          },
          en: {
            name: 'Signal Call',
            input: 'Swap hands',
            description:
              'Grants Speed and a damage buff to you and nearby party members. Higher level extends duration and damage bonus.',
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
            description: '주변 적에게 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Proclaim',
            input: 'Sneak + swap hands',
            description: 'Deals nearby support damage and coerces foes.',
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
            input: '공중 우클릭',
            description: '깃발을 들고 전방으로 돌진하며 경로상 적에게 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Banner Charge',
            input: 'Right-click in air',
            description: 'Dash forward with your banner, dealing support damage and coerce along the path.',
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
              '염소 뿔 소리와 함께 본인·가까운 파티원에게 힘·성급과 피해 증가를 부여합니다. 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'War Horn',
            input: 'Sneak + left-click',
            description:
              'Plays a goat horn and grants Strength, Haste, and a damage buff to you and nearby party. Scales with Signal Call level.',
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
              '공격력이 증가합니다. 깃발 또는 검으로 근접 공격 시 최종 피해에 곱해지며, 지원 스킬 적중 시 깃술 스택을 쌓아 다음 공격 피해를 추가로 높입니다(최대 10스택).',
          },
          en: {
            name: 'Heraldry',
            description:
              'Increases damage. Multiplies final melee damage with banner or sword. Support skill hits build Heraldry stacks for bonus damage on later attacks (max 10 stacks).',
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
            input: '깃기돌진 직후 우클릭',
            description: '전방 적과 위치를 교환하거나 전방으로 도약합니다. 착지 시 주변 적에게 지원 피해를 줍니다.',
          },
          en: {
            name: 'Standard Swap',
            input: 'Right-click after Banner Charge',
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
            description: '전방 직선 지원 피해와 사기 갱신. 계수는 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'Battle Dirge',
            input: 'Sneak + left-click after War Horn',
            description: 'Forward support line and morale refresh. Scales with Signal Call level.',
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
            input: '깃기교환 직후 우클릭',
            description: '전장을 가로지르는 긴 돌진으로 경로상 적에게 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Field Breakthrough',
            input: 'Right-click after Standard Swap',
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
            description: '주변 지원 피해와 강화된 사기 갱신을 줍니다.',
          },
          en: {
            name: 'Ruin Dirge',
            input: 'Sneak + left-click after Battle Dirge',
            description: 'Nearby support burst and stronger morale refresh.',
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
              '본인과 가까운 파티원에게 흡수·저항을 부여하고, 주변 적에게 지원 피해와 포섭을 줍니다.',
          },
          en: {
            name: 'Rally Standard',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Grants Absorption and Resistance to you and nearby party, and deals support damage to nearby foes.',
          },
        },
      ],
    },
  ],
};
