import type { ClassDetailDef } from './types';

export const paladinDetail: ClassDetailDef = {
  id: 'paladin',
  order: 25,
  element: { en: 'Earth & Lightning', ko: '대지·번개' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'paladin.png', en: { title: 'Paladin' }, ko: { title: '성기사' } },
      { tier: 1, portraitFile: 'paladin-limit1.png', en: { title: 'Tutelar' }, ko: { title: '수호자' } },
      { tier: 2, portraitFile: 'paladin-limit2.png', en: { title: 'Saviour' }, ko: { title: '구원자' } },
    ],
  },
  story: {
    ko: [
      '도끼와 방패로 아군을 지키는 성기사입니다. 진압·결박·심판·징벌·격려·기도로 전열을 다지고, 보호로 거대 방패를 들며 신앙으로 공격력과 번개 저항을 키웁니다.',
      '수호자는 신격·광명·성수·축복 등 연계를 갖추고, 수호 패시브로 방어력이 오릅니다. 최후의 심판으로 심판의 번개를 내립니다.',
      '구원자는 그리폰을 타고 성역·응징·운명으로 전장을 구원하며, 참회로 끝을 맺습니다.',
    ],
    en: [
      'A paladin who guards allies with axe and shield. Thrust, restraint, judgement, punish, encourage, and pray hold the line; Ward raises a giant shield while Faith raises damage and lightning resistance.',
      'The Tutelar chains holy smash, illumination, asperges, and bless while Tutelary raises offense and armor. Final Judgement calls lightning from above.',
      'The Saviour rides the griffon, masters sanctuary and penance, and redeems the field with salvific light.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'thrust',
          icon: 'shield',
          element: 'earth',
          ko: {
            name: '진압',
            input: '막기 + 손 바꾸기',
            description: '막기 중 손 바꾸기로 진압 피해를 줍니다.',
          },
          en: {
            name: 'Thrust',
            input: 'Block + swap hands',
            description: 'While blocking, swap hands to deal thrust damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'restraint',
          icon: 'shield',
          element: 'earth',
          ko: {
            name: '결박',
            input: '막기 + 웅크리기 + 손 바꾸기',
            description: '막기 중 웅크리기와 손 바꾸기로 결박 피해를 줍니다.',
          },
          en: {
            name: 'Restraint',
            input: 'Block + sneak + swap hands',
            description: 'While blocking and sneaking, swap hands for restraint damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'judgement',
          icon: 'storm',
          element: 'lightning',
          ko: {
            name: '심판',
            input: '웅크리기 + 좌클릭',
            description:
              '파티 공격력을 올리고 신속·힘을 부여합니다(솔로는 본인). 적에게 번개를 내립니다.',
          },
          en: {
            name: 'Judgement',
            input: 'Sneak + left-click',
            description:
              'Raises party damage and grants Speed and Strength (solo: self). Strikes enemies with lightning.',
          },
          masterLevel: 50,
        },
        {
          id: 'punish',
          icon: 'sword-drive',
          element: 'lightning',
          ko: {
            name: '징벌',
            input: '점프 + 근접 공격',
            description: '점프 후 근접 타격 피해가 증가합니다.',
          },
          en: {
            name: 'Punish',
            input: 'Jump + melee attack',
            description: 'Melee hits after jumping deal bonus damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'encourage',
          icon: 'recovery',
          element: 'earth',
          ko: {
            name: '격려',
            input: '손 바꾸기',
            description: '아군을 격려합니다.',
          },
          en: {
            name: 'Encourage',
            input: 'Swap hands',
            description: 'Encourages allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'pray',
          icon: 'book',
          element: 'earth',
          ko: {
            name: '기도',
            input: '손 바꾸기 + 웅크리기',
            description: '기도로 성스러운 효과를 냅니다.',
          },
          en: {
            name: 'Pray',
            input: 'Swap hands + sneak',
            description: 'Prayer with holy effects.',
          },
          masterLevel: 10,
        },
        {
          id: 'ward',
          icon: 'shield',
          element: 'earth',
          passive: true,
          ko: {
            name: '보호',
            description:
              '방패를 들면 거대 방패를 소환합니다. 전방 피해를 모두 막고, 막기 중 파티가 받는 피해를 절반 감소시킵니다.',
          },
          en: {
            name: 'Ward',
            description:
              'Raising a shield summons a giant shield. Blocks all frontal damage; while blocking, party damage taken is halved.',
          },
        },
        {
          id: 'faith',
          icon: 'book',
          element: 'lightning',
          passive: true,
          ko: {
            name: '신앙',
            description: '공격력과 번개 저항이 증가합니다.',
          },
          en: {
            name: 'Faith',
            description: 'Increases damage and lightning resistance.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'holySmash',
          icon: 'shield',
          element: 'earth',
          followUp: true,
          chainOf: 'thrust',
          ko: {
            name: '신격',
            input: '진압 재입력',
            description: '신격을 사용합니다. 피해량은 진압 레벨에 비례합니다.',
          },
          en: {
            name: 'Holy Smash',
            input: 'Use Thrust again',
            description: 'Uses holy smash. Damage scales with Thrust level.',
          },
        },
        {
          id: 'illumination',
          icon: 'steady',
          element: 'lightning',
          followUp: true,
          chainOf: 'restraint',
          ko: {
            name: '광명',
            input: '결박 재입력',
            description: '광명을 사용합니다. 피해량은 결박 레벨에 비례합니다.',
          },
          en: {
            name: 'Illumination',
            input: 'Use Restraint again',
            description: 'Uses illumination. Damage scales with Restraint level.',
          },
        },
        {
          id: 'asperges',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'judgement',
          ko: {
            name: '성수',
            input: '심판 재입력',
            description: '성수를 뿌립니다. 피해량은 심판 레벨에 비례합니다.',
          },
          en: {
            name: 'Asperges',
            input: 'Use Judgement again',
            description: 'Sprinkles holy water. Damage scales with Judgement level.',
          },
        },
        {
          id: 'sanctification',
          icon: 'sword-drive',
          element: 'lightning',
          followUp: true,
          chainOf: 'punish',
          ko: {
            name: '성화',
            input: '징벌 재입력',
            description: '적을 기절시킵니다.',
          },
          en: {
            name: 'Sanctification',
            input: 'Use Punish again',
            description: 'Stuns the enemy.',
          },
        },
        {
          id: 'aria',
          icon: 'recovery',
          element: 'earth',
          followUp: true,
          chainOf: 'encourage',
          ko: {
            name: '영창',
            input: '격려 재입력',
            description: '영창을 사용합니다. 피해량은 격려 레벨에 비례합니다.',
          },
          en: {
            name: 'Aria',
            input: 'Use Encourage again',
            description: 'Uses aria. Damage scales with Encourage level.',
          },
        },
        {
          id: 'bless',
          icon: 'recovery',
          element: 'earth',
          followUp: true,
          chainOf: 'pray',
          ko: {
            name: '축복',
            input: '기도 재입력',
            description: '파티원을 무적 상태로 만듭니다. 지속 시간은 기도 레벨에 비례합니다.',
          },
          en: {
            name: 'Bless',
            input: 'Use Pray again',
            description: 'Grants party invulnerability. Duration scales with Pray level.',
          },
        },
        {
          id: 'tutelary',
          icon: 'book',
          element: 'lightning',
          passive: true,
          chainOf: 'faith',
          ko: {
            name: '수호',
            description: '공격력과 방어력이 증가합니다.',
          },
          en: {
            name: 'Tutelary',
            description: 'Increases damage and armor.',
          },
        },
        {
          id: 'finalJudgement',
          icon: 'storm',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '최후의 심판',
            input: '웅크리기 + 아이템 던지기',
            description: '최후의 심판 번개 피해를 입힙니다.',
          },
          en: {
            name: 'Final Judgement',
            input: 'Sneak + throw item',
            description: 'Deals final judgement lightning damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'holyPile',
          icon: 'shield',
          element: 'earth',
          followUp: true,
          chainOf: 'thrust',
          ko: {
            name: '응징',
            input: '신격 재입력',
            description: '응징을 사용합니다. 피해량은 진압 레벨에 비례합니다.',
          },
          en: {
            name: 'Holy Pile',
            input: 'Use Holy Smash again',
            description: 'Uses holy pile. Damage scales with Thrust level.',
          },
        },
        {
          id: 'doom',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'restraint',
          ko: {
            name: '운명',
            input: '광명 재입력',
            description: '운명을 내립니다. 피해량은 결박 레벨에 비례합니다.',
          },
          en: {
            name: 'Doom',
            input: 'Use Illumination again',
            description: 'Calls doom. Damage scales with Restraint level.',
          },
        },
        {
          id: 'griffon',
          icon: 'rush',
          element: 'lightning',
          followUp: true,
          chainOf: 'judgement',
          ko: {
            name: '그리폰',
            input: '성수 재입력',
            description:
              '그리폰을 소환합니다. 탑승 중 징벌이 강화되고, 점프 시 주변 피해·비행(충전 80% 이상). 피해량은 심판 레벨에 비례합니다.',
          },
          en: {
            name: 'Griffon',
            input: 'Use Asperges again',
            description:
              'Summons a griffon. Enhances Punish while mounted; jump splash and flight at 80%+ charge. Damage scales with Judgement level.',
          },
        },
        {
          id: 'sanctuary',
          icon: 'recovery',
          element: 'earth',
          followUp: true,
          chainOf: 'encourage',
          ko: {
            name: '성역',
            input: '영창 재입력',
            description: '성역을 사용합니다. 피해량은 격려 레벨에 비례합니다.',
          },
          en: {
            name: 'Sanctuary',
            input: 'Use Aria again',
            description: 'Uses sanctuary. Damage scales with Encourage level.',
          },
        },
        {
          id: 'grace',
          icon: 'recovery',
          element: 'earth',
          followUp: true,
          chainOf: 'pray',
          ko: {
            name: '은총',
            input: '축복 재입력',
            description: '파티원의 허기를 채웁니다.',
          },
          en: {
            name: 'Grace',
            input: 'Use Bless again',
            description: 'Restores party saturation.',
          },
        },
        {
          id: 'salvation',
          icon: 'book',
          element: 'lightning',
          passive: true,
          chainOf: 'faith',
          ko: {
            name: '구원',
            description: '공격력과 방어력이 증가합니다. 최후의 심판 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Salvation',
            description: 'Increases damage and armor. Shortens Final Judgement cooldown.',
          },
        },
        {
          id: 'penance',
          icon: 'storm',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '참회',
            input: '달리기 + 아이템 던지기',
            description:
              '참회 피해를 입힙니다(고정 피해 + 적 최대 체력 비율).',
          },
          en: {
            name: 'Penance',
            input: 'Sprint + throw item',
            description:
              'Penance damage (flat + ratio of enemy max HP).',
          },
        },
      ],
    },
  ],
};
