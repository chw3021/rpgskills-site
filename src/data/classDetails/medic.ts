import type { ClassDetailDef } from './types';

export const medicDetail: ClassDetailDef = {
  id: 'medic',
  order: 26,
  element: { en: 'Frost & Wind', ko: '서리·바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'medic.png', en: { title: 'ArrowMedic' }, ko: { title: '의궁' } },
      { tier: 1, portraitFile: 'medic-limit1.png', en: { title: 'Restorer' }, ko: { title: '소생자' } },
      { tier: 2, portraitFile: 'medic-limit2.png', en: { title: 'Rescuer' }, ko: { title: '명의' } },
    ],
  },
  story: {
    ko: [
      '쇠뇌로 치유 화살과 제독·보급을 펼치는 의궁입니다. 화살치료와 자동제세동기로 원거리 지원을 하고, 구조 패시브로 빈사 아군을 AED로 되살립니다.',
      '소생자는 진공·보호막·지원사격·미세바늘 연계와 카드세우스 탑으로 전장에 회복 구역을 세웁니다.',
      '명의는 회복펌프·집단치료·초음파 분무기로 범위를 넓히고, 날개슈트로 전장을 가로지르며 생명의은인처럼 아군을 구출합니다.',
    ],
    en: [
      'An arrow medic who heals and debuffs from range with remedying bolts, decontamination, and supply carts. Arrow Clinic and AED support allies; Rescue puts groggy allies back on their feet.',
      'The Restorer chains vacuum, barrier, support fire, and fine needles while Caduceus Tower anchors recovery on the field.',
      'The Rescuer expands with healing pump, mass treatment, and ultrasonic nebulizer, then crosses the battlefield in a wing suit like a lifesaver.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'remedyingRocket',
          icon: 'crossbow',
          element: 'frost',
          ko: {
            name: '치유로켓',
            input: '점프 + 좌클릭',
            description: '치유 화살을 발사해 피해를 줍니다.',
          },
          en: {
            name: 'Remedying Rocket',
            input: 'Jump + left-click',
            description: 'Fires a healing bolt that also deals damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'decontamination',
          icon: 'crossbow',
          element: 'frost',
          ko: {
            name: '제독',
            input: '웅크리기 + 손 바꾸기',
            description: '해로운 효과를 제거하고 피해를 줍니다.',
          },
          en: {
            name: 'Decontamination',
            input: 'Sneak + swap hands',
            description: 'Clears negative effects and deals damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'supplyCart',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '보급카트',
            input: '점프 + 손 바꾸기',
            description: '파티에 속도·점프·힘 효과를 부여합니다.',
          },
          en: {
            name: 'Supply Cart',
            input: 'Jump + swap hands',
            description: 'Grants party Speed, Jump Boost, and Strength.',
          },
          masterLevel: 5,
        },
        {
          id: 'hideout',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '은신처',
            input: '웅크리기',
            description: '은신처를 설치합니다.',
          },
          en: {
            name: 'Hideout',
            input: 'Sneak',
            description: 'Deploys a hideout.',
          },
          masterLevel: 1,
        },
        {
          id: 'arrowClinic',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '화살치료',
            description:
              '적중한 파티원을 치료합니다. 적에게는 부패를 쌓아 받는 피해를 키웁니다.',
          },
          en: {
            name: 'Arrow Clinic',
            description:
              'Heals struck allies. On enemies, stacks decay to increase damage taken.',
          },
          masterLevel: 30,
        },
        {
          id: 'aed',
          icon: 'crossbow',
          element: 'wind',
          ko: {
            name: '자동제세동기',
            input: '웅크리기 + 좌클릭',
            description: '제세동 피해를 줍니다. 구조 패시브와 연계해 빈사 아군을 소생시킵니다.',
          },
          en: {
            name: 'AED',
            input: 'Sneak + left-click',
            description: 'Defibrillation damage. Works with Rescue to revive groggy allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'rescue',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '구조',
            description:
              '파티원이 죽음 직전 피해를 받으면 5초간 빈사 상태가 됩니다. 이동 속도가 오르고 AED로 구조할 수 있습니다.',
          },
          en: {
            name: 'Rescue',
            description:
              'Party members at death’s door enter a 5s groggy state. You gain speed and can revive them with AED.',
          },
        },
        {
          id: 'medicine',
          icon: 'book',
          element: 'frost',
          passive: true,
          ko: {
            name: '의학',
            description: '공격력과 회복률이 상승합니다.',
          },
          en: {
            name: 'Medicine',
            description: 'Increases damage and healing rate.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'vacuum',
          icon: 'storm',
          element: 'wind',
          followUp: true,
          chainOf: 'remedyingRocket',
          ko: {
            name: '진공',
            input: '치유로켓 재입력',
            description: '주변 적을 끌어옵니다.',
          },
          en: {
            name: 'Vacuum',
            input: 'Use Remedying Rocket again',
            description: 'Pulls nearby enemies.',
          },
        },
        {
          id: 'barrier',
          icon: 'recovery',
          element: 'frost',
          followUp: true,
          chainOf: 'decontamination',
          ko: {
            name: '보호막',
            input: '제독 재입력',
            description:
              '보호막을 설치합니다. 안의 파티원은 무적입니다.',
          },
          en: {
            name: 'Barrier',
            input: 'Use Decontamination again',
            description:
              'Places a barrier; allies inside are invulnerable.',
          },
        },
        {
          id: 'supportFire',
          icon: 'spectral-arrow',
          element: 'wind',
          followUp: true,
          chainOf: 'supplyCart',
          ko: {
            name: '지원사격',
            input: '보급카트 재입력',
            description: '지원사격을 요청합니다.',
          },
          en: {
            name: 'Support Fire',
            input: 'Use Supply Cart again',
            description: 'Calls support fire.',
          },
        },
        {
          id: 'anodyne',
          icon: 'recovery',
          element: 'frost',
          ko: {
            name: '진통제',
            description: '주변 파티원의 방어력이 상승합니다.',
          },
          en: {
            name: 'Anodyne',
            description: 'Raises nearby party armor.',
          },
        },
        {
          id: 'excitometabolic',
          icon: 'rush',
          element: 'wind',
          ko: {
            name: '각성제',
            description: '적은 잠시 기절하고, 파티원에게 이동 속도를 줍니다.',
          },
          en: {
            name: 'Excitometabolic',
            description: 'Briefly stuns enemies and grants party speed.',
          },
        },
        {
          id: 'fineNeedles',
          icon: 'bow',
          element: 'wind',
          followUp: true,
          chainOf: 'aed',
          ko: {
            name: '미세바늘',
            input: '자동제세동기 재입력',
            description: '미세바늘을 뿌립니다.',
          },
          en: {
            name: 'Fine Needles',
            input: 'Use AED again',
            description: 'Spreads fine needles.',
          },
        },
        {
          id: 'evacuation',
          icon: 'recovery',
          element: 'wind',
          ko: {
            name: '후송',
            description: '빈사 상태의 파티원을 후송합니다.',
          },
          en: {
            name: 'Evacuation',
            description: 'Evacuates groggy party members.',
          },
        },
        {
          id: 'firstAids',
          icon: 'book',
          element: 'frost',
          ko: {
            name: '응급처치',
            description:
              '공격력이 증가합니다. 제독과 자동제세동기가 파티원을 치료하고 적은 기절시킵니다.',
          },
          en: {
            name: 'First Aids',
            description:
              'Increases damage. Decontamination and AED heal allies and stun enemies.',
          },
        },
        {
          id: 'caduceusTower',
          icon: 'recovery',
          element: 'frost',
          ultimate: true,
          ko: {
            name: '카드세우스 탑',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '카드세우스 탑을 설치해 주기적으로 회복과 포만을 제공합니다. 의학 레벨에 따라 간격이 달라집니다.',
          },
          en: {
            name: 'Caduceus Tower',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Deploys a Caduceus tower that pulses heal and saturation. Interval',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'anesthetic',
          icon: 'recovery',
          element: 'wind',
          ko: {
            name: '마취',
            description: '적중한 파티원을 잠시 무적으로, 적은 기절시킵니다.',
          },
          en: {
            name: 'Anesthetic',
            description: 'Briefly makes hit allies invulnerable and stuns hit enemies.',
          },
        },
        {
          id: 'healingPump',
          icon: 'recovery',
          element: 'frost',
          followUp: true,
          chainOf: 'decontamination',
          ko: {
            name: '회복펌프',
            input: '제독 재입력',
            description: '회복펌프를 설치합니다.',
          },
          en: {
            name: 'Healing Pump',
            input: 'Use Decontamination again',
            description: 'Places a healing pump.',
          },
        },
        {
          id: 'massTreatment',
          icon: 'storm',
          element: 'wind',
          followUp: true,
          chainOf: 'supplyCart',
          ko: {
            name: '집단치료',
            input: '보급카트 재입력',
            description: '집단치료를 실시합니다.',
          },
          en: {
            name: 'Mass Treatment',
            input: 'Use Supply Cart again',
            description: 'Mass treatment burst.',
          },
        },
        {
          id: 'expand',
          icon: 'potion',
          element: 'frost',
          ko: {
            name: '확장',
            description: '범위와 보호막·흡수량이 증가합니다.',
          },
          en: {
            name: 'Expand',
            description: 'Increases range, barrier size, and absorption.',
          },
        },
        {
          id: 'ultrasonicNebulizer',
          icon: 'bow',
          element: 'wind',
          followUp: true,
          chainOf: 'aed',
          ko: {
            name: '초음파 분무기',
            input: '자동제세동기 재입력',
            description:
              '초음파 분무기를 사용합니다. 부패 중첩이 늘고',
          },
          en: {
            name: 'Ultrasonic Nebulizer',
            input: 'Use AED again',
            description:
              'Uses an ultrasonic nebulizer. Adds decay stacks;',
          },
        },
        {
          id: 'stretcher',
          icon: 'recovery',
          element: 'wind',
          ko: {
            name: '환자운반',
            input: '파티원: 웅크리기 + 우클릭(맨손)',
            description:
              '파티원이 당신에게 웅크리기+우클릭으로 달라붙으면 운반합니다. 파티원은 은신 상태가 됩니다.',
          },
          en: {
            name: 'Stretcher',
            input: 'Party: sneak + right-click (bare hand)',
            description:
              'Party members sneak+right-click you to be carried invisibly until you click to release.',
          },
        },
        {
          id: 'lifeSaver',
          icon: 'book',
          element: 'frost',
          passive: true,
          chainOf: 'medicine',
          ko: {
            name: '생명의은인',
            description:
              '공격력과 방어력이 증가합니다. 카드세우스 탑 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Life Saver',
            description:
              'Increases damage and armor. Shortens Caduceus Tower cooldown.',
          },
        },
        {
          id: 'wingSuit',
          icon: 'rush',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '날개슈트',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '날개슈트가 활성화되는 동안 공격력이 오르고(25초) 치유로켓 대기시간이 없어집니다.',
          },
          en: {
            name: 'Wing Suit',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Wing suit boosts damage for 25s and removes Remedying Rocket cooldown while active.',
          },
        },
      ],
    },
  ],
};
