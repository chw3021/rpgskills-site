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
      '흰 깃발과 가위로 전열을 지휘하는 근접 지원가입니다. 스킬이 적중할수록 주변 아군을 격려해 치유하고, 포섭으로 적을 붙잡아 약화·받는 피해를 키웁니다.',
      '깃발 구역, 기세 제압, 신호 기동, 포고 망루, 전투나팔·종 사기로 전선이 갈리며, 이동기와 상승·돌진 연계가 많아 전장을 넓게 누빕니다.',
      '진기는 연대기와 전장돌파, 결전장송의 거대 종으로 군기를 정점에 올리며, 격려와 포섭으로 깃발 아래 전선을 유지합니다.',
    ],
    en: [
      'A frontline support who commands with banner and shears. Skill hits inspire-heal nearby allies, while coerce holds foes, weakens them, and raises damage taken.',
      'Banner zones, demoralizing pressure, signal mobility, proclaim towers, and war-horn or bell morale split by lane. Many dashes and lifts make the class highly mobile.',
      'Grand Ensigns peak with Rally Standard, Field Breakthrough, and Ruin Dirge’s giant bell, holding the line through inspire and coerce.',
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
              '지휘 깃발을 세워 구역을 표시합니다. 안의 적을 붙잡고 약화·받는 피해를 키우며, 아군에게 신속과 약간의 격려를 줍니다.',
          },
          en: {
            name: 'War Banner',
            input: 'On ground + not sneaking + right-click',
            description:
              'Plants a command banner that marks its zone. Holds foes, weakens them, and raises damage taken, while granting Speed and light inspire to allies.',
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
            description:
              '전방을 가르며 피해를 주고, 적을 붙잡아 약화·받는 피해를 키우며 짧게 감속도 겁니다.',
          },
          en: {
            name: 'Demoralize',
            input: 'Sneak + right-click',
            description:
              'Cuts forward to damage foes, then holds them, weakens them, raises damage taken, and briefly slows them.',
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
              '신호불을 피워 주변을 표시합니다. 가까운 적에게 피해를 주고, 본인과 파티에게 신속과 공격 배율 버프를 줍니다.',
          },
          en: {
            name: 'Signal Call',
            input: 'Swap hands',
            description:
              'Lights a signal fire that marks the area. Damages nearby foes and grants Speed plus an attack-multiplier buff to you and your party.',
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
            description:
              '위로 떠오른 뒤 석조 망루를 소환해 올라섭니다. 주변 적에게 인장 피해를 주고 붙잡아 약화·받는 피해를 키웁니다. 시전 후 약 3초간 느린 낙하가 걸립니다.',
          },
          en: {
            name: 'Proclaim',
            input: 'Sneak + swap hands',
            description:
              'Rises onto a summoned stone watchtower. Seals nearby foes with damage, then holds them, weakens them, and raises damage taken. Gains Slow Falling for about 3 seconds after cast.',
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
            description:
              '큰 깃발과 카펫 궤적을 펼치며 돌진합니다. 지나가는 적에게 피해를 주고 붙잡아 약화·받는 피해를 키우며 격려를 발동합니다.',
          },
          en: {
            name: 'Banner Charge',
            input: 'While airborne + not sneaking + left-click',
            description:
              'Charges forward with large banners and a carpet trail, damaging foes along the path, holding and weakening them while inspiring allies.',
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
              '금색 거대 나팔을 소환해 불어 주변 적에게 피해를 주고 포섭합니다. 본인과 파티에게 힘·성급·격려와 사기(공격 배율) 버프를 줍니다.',
          },
          en: {
            name: 'War Horn',
            input: 'Sneak + left-click',
            description:
              'Summons a giant golden trumpet and sounds it, damaging and coercing nearby foes. Grants Strength, Haste, inspire, and a war-morale attack buff to you and your party.',
          },
          masterLevel: 50,
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
              '근접 최종 피해가 증가합니다. 스킬이 적중할 때마다 주변 아군을 조금 격려 치유합니다.',
          },
          en: {
            name: 'Heraldry',
            description:
              'Increases melee final damage. Skill hits lightly inspire-heal nearby allies.',
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
            input: '전장기 시전 직후 우클릭',
            description: '전방을 가로지르는 호로 베어 적에게 지원 피해를 줍니다.',
          },
          en: {
            name: 'Flag Fall',
            input: 'Right-click shortly after War Banner cast',
            description: 'Sweeps a forward arc and deals support damage to enemies ahead.',
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
            description: '양옆의 부하와 함께 전방을 가르며 적에게 지원 피해를 줍니다.',
          },
          en: {
            name: 'Dirge Cut',
            input: 'Sneak + right-click after Demoralize',
            description: 'Cuts forward with retainers at your sides, dealing support damage ahead.',
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
            description:
              '불화살 발사대를 세웁니다. 범위 피해와 홀딩·화상을 주고, 아군에게 화상 면역을 부여합니다.',
          },
          en: {
            name: 'Recall Ping',
            input: 'Swap hands after Signal Call',
            description:
              'Sets up a fire-arrow turret that damages and holds foes while protecting allies from fire.',
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
            description:
              '바닥에 거대한 문장을 새겨 주변 적에게 지원 피해를 주고 포섭합니다.',
          },
          en: {
            name: 'Edict Mark',
            input: 'Sneak + swap hands after Proclaim',
            description:
              'Imprints a giant heraldic seal on the ground, dealing support damage and coercing nearby enemies.',
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
            name: '깃기질주',
            input: '깃기돌진 직후 공중 + 비웅크리기 + 좌클릭',
            description: '전방을 가로지르며 속도 기반 돌진으로 적들에게 피해를 줍니다.',
          },
          en: {
            name: 'Standard Swap',
            input: 'Airborne + not sneaking + left-click after Banner Charge',
            description: 'Dashes across the front with velocity-based travel and damages enemies along your path.',
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
            description:
              '종 5개가 걸린 거치대를 소환해 타종합니다. 사기를 다시 북돋우고 넓은 격려 파동을 퍼뜨립니다.',
          },
          en: {
            name: 'Battle Dirge',
            input: 'Sneak + left-click after War Horn',
            description:
              'Summons a rack of five bells and rings them. Refreshes war morale and sends out a wide inspire wave.',
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
              '주황색 카펫 5줄 행진로를 길게 깔고 양옆에 소형 깃발을 세웁니다. 길 위의 본인·파티는 무적과 신속, 적은 둔화를 받습니다(판정은 카펫보다 넓고 Y±10). 직선 지원 피해와 함께 적을 붙잡아 약화·받는 피해를 키웁니다. 2차 한계 돌파 시 재사용 대기가 줄어듭니다.',
          },
          en: {
            name: 'Decree of Ruin',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Lays a long 5-lane orange carpet road with mini flags on both sides. Allies on the road gain invulnerability and Speed; foes are slowed (hitbox wider than carpets, Y±10). Deals line support damage while holding foes, weakening them, and raising damage taken. Cooldown is shorter at second limit break.',
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
            description: '더 넓은 파동과 이어지는 타격으로 주변 적에게 지원 피해를 줍니다.',
          },
          en: {
            name: 'High Command',
            input: 'Right-click after Flag Fall',
            description: 'Unleashes a wider wave and a follow-up hit of support damage on nearby foes.',
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
            description: '세 번의 충격파로 적을 중앙으로 끌어모으며 피해를 줍니다.',
          },
          en: {
            name: 'Low Crush',
            input: 'Sneak + right-click after Dirge Cut',
            description: 'Three shockwaves pull foes inward and damage them.',
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
            description:
              '거대한 호각을 불어 적을 붙잡고 멀미를 주며, 아군에게 화상 면역을 부여합니다.',
          },
          en: {
            name: 'Surge Recall',
            input: 'Swap hands after Recall Ping',
            description:
              'Blows a giant whistle that holds and nauseates foes while granting allies fire resistance.',
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
            description: '주변을 강타하여 적에게 광역 종결 지원 피해를 줍니다.',
          },
          en: {
            name: 'Law Purge',
            input: 'Sneak + swap hands after Edict Mark',
            description: 'Strikes nearby enemies for a finishing support burst.',
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
            input: '깃기질주 직후 공중 + 비웅크리기 + 좌클릭',
            description:
              '주변 적을 끌어당기는 기운을 펼치고, 작은 깃발과 함께 연속으로 타격합니다.',
          },
          en: {
            name: 'Field Breakthrough',
            input: 'Airborne + not sneaking + left-click after Standard Swap',
            description: 'Spreads a pull aura and strikes repeatedly with mini-banners.',
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
            description:
              '석재 기둥에 매달린 거대 종을 소환해 타종합니다. 더 강한 사기와 넓은 격려·광역 파동으로 전선을 다시 북돋웁니다.',
          },
          en: {
            name: 'Ruin Dirge',
            input: 'Sneak + left-click after Battle Dirge',
            description:
              'Summons a giant hanging bell and rings it. Refreshes morale more strongly and sends out a wide inspire and burst wave.',
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
              '짧게 흡수·저항을 얻고 큰 격려 파동과 깃발 숲을 펼칩니다. 주변 적에게 피해를 주고 붙잡아 약화·받는 피해를 키웁니다.',
          },
          en: {
            name: 'Rally Standard',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Briefly gains Absorption and Resistance, then unleashes a large inspire wave and a banner grove. Damages nearby foes while holding, weakening them, and raising damage taken.',
          },
        },
      ],
    },
  ],
};
