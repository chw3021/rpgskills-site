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
      '흰 깃발과 단검으로 전열을 다지는 기수입니다. 전장기·기세꺾기·신호·포고로 적을 포섭하고, 기병깃술로 근접 피해를 키웁니다.',
      '기장으로 승진하며 깃봉추적·기세분쇄·신호반향·포고각인 연계와 패업령으로 군진을 이끕니다.',
      '진기는 연대기와 기운파달·율격종결로 군기를 정점에 올리며, 전장 전체를 깃발 아래 통일합니다.',
    ],
    en: [
      'A standard bearer who holds the line with white banner and dagger. War Banner, Demoralize, Signal Call, and Proclaim coerce foes while Heraldry boosts melee damage.',
      'Promotion to Ensign unlocks flag fall, dirge cut, recall ping, and edict mark before Decree of Ruin leads the formation.',
      'The Grand Ensign commands with Rally Standard and high command chains until the whole army marches under one banner.',
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
          ko: {
            name: '신호',
            input: '손 바꾸기',
            description: '본인과 가까운 파티원에게 신속을 부여합니다.',
          },
          en: {
            name: 'Signal Call',
            input: 'Swap hands',
            description: 'Grants Speed to you and nearby party members.',
          },
          masterLevel: 50,
        },
        {
          id: 'proclaim',
          icon: 'stab',
          element: 'wind',
          ko: {
            name: '포고',
            input: '웅크리기 + 손 바꾸기',
            description: '주변 적에게 지원 피해(85%)와 포섭을 줍니다.',
          },
          en: {
            name: 'Proclaim',
            input: 'Sneak + swap hands',
            description: 'Nearby support damage (85% power) and coerce.',
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
              '염소 뿔 소리와 함께 본인·가까운 파티원에게 힘·성급을 부여합니다. 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'War Horn',
            input: 'Sneak + left-click',
            description:
              'Plays a goat horn and grants Strength and Haste to you and nearby party. Scales with Signal Call level.',
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
            description: '공격력이 증가합니다. 깃발 또는 검으로 근접 공격 시 최종 피해에 곱해집니다.',
          },
          en: {
            name: 'Heraldry',
            description: 'Increases damage. Multiplies final melee damage with banner or sword.',
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
          ko: {
            name: '깃봉추적',
            input: '전장기 맥동 종료 직후 비웅크리기 + 좌클릭',
            description: '전방 직선 지원 피해. 계수는 전장기 레벨에 비례합니다.',
          },
          en: {
            name: 'Flag Fall',
            input: 'No sneak + left-click after War Banner pulses end',
            description: 'Forward support line. Scales with War Banner level.',
          },
        },
        {
          id: 'dirgeCut',
          icon: 'slash',
          element: 'wind',
          followUp: true,
          chainOf: 'demoralize',
          ko: {
            name: '기세분쇄',
            input: '기세꺾기 직후 웅크리기 + 좌클릭',
            description: '전방 직선 지원 피해. 계수는 기세꺾기 레벨에 비례합니다.',
          },
          en: {
            name: 'Dirge Cut',
            input: 'Sneak + left-click after Demoralize',
            description: 'Forward support line. Scales with Demoralize level.',
          },
        },
        {
          id: 'recallPing',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'signalCall',
          ko: {
            name: '신호반향',
            input: '신호 직후 비웅크리기 + 우클릭',
            description:
              '전방 직선 지원 피해. 신호 창이 있을 때 전장기 대신 발동합니다. 계수는 신호 레벨에 비례합니다.',
          },
          en: {
            name: 'Recall Ping',
            input: 'No sneak + right-click after Signal Call',
            description:
              'Forward line; takes priority over War Banner when the recall window is open. Scales with Signal Call.',
          },
        },
        {
          id: 'edictMark',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          chainOf: 'proclaim',
          ko: {
            name: '포고각인',
            input: '포고 직후 비웅크리기 + 좌클릭',
            description: '전방 직선 지원 피해. 계수는 포고 레벨에 비례합니다.',
          },
          en: {
            name: 'Edict Mark',
            input: 'No sneak + left-click after Proclaim',
            description: 'Forward support line. Scales with Proclaim level.',
          },
        },
        {
          id: 'heraldryLimit1',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: { name: '기병깃술', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Heraldry', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'decreeOfRuin',
          icon: 'axe',
          element: 'wind',
          ultimate: true,
          guiColumn: 8,
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
        {
          id: 'heraldryLimit2',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '기병깃술',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Heraldry',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'rallyStandard',
          icon: 'shield',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '연대기',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '본인과 가까운 파티원에게 흡수·저항을 부여합니다.',
          },
          en: {
            name: 'Rally Standard',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Grants Absorption and Resistance to you and nearby party.',
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
          ko: {
            name: '기운파달',
            input: '깃봉추적 직후 웅크리기 + 전투 숫자키 2',
            description: '긴 전방 직선 지원 피해를 줍니다.',
          },
          en: {
            name: 'High Command',
            input: 'Sneak + combat hotkey 2 after Flag Fall',
            description: 'Long forward support line damage.',
          },
        },
        {
          id: 'lowCrush',
          icon: 'storm',
          element: 'wind',
          followUp: true,
          chainOf: 'demoralize',
          ko: {
            name: '기세압축',
            input: '기세분쇄 직후 웅크리기 + 전투 숫자키 3',
            description: '주변 지원 피해를 줍니다.',
          },
          en: {
            name: 'Low Crush',
            input: 'Sneak + combat hotkey 3 after Dirge Cut',
            description: 'Nearby support burst damage.',
          },
        },
        {
          id: 'surgeRecall',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          chainOf: 'signalCall',
          ko: {
            name: '파열호각',
            input: '신호반향 직후 웅크리기 + 전투 숫자키 8',
            description: '전방 직선 지원 피해를 줍니다.',
          },
          en: {
            name: 'Surge Recall',
            input: 'Sneak + combat hotkey 8 after Recall Ping',
            description: 'Forward support line damage.',
          },
        },
        {
          id: 'lawPurge',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          chainOf: 'proclaim',
          ko: {
            name: '율격종결',
            input: '포고각인 직후 웅크리기 + 전투 숫자키 7',
            description: '주변 지원 피해를 줍니다.',
          },
          en: {
            name: 'Law Purge',
            input: 'Sneak + combat hotkey 7 after Edict Mark',
            description: 'Nearby support burst damage.',
          },
        },
      ],
    },
  ],
};
