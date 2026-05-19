import type { ClassDetailDef } from './types';

export const boxerDetail: ClassDetailDef = {
  id: 'boxer',
  order: 3,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'boxer.png', en: { title: 'Boxer' }, ko: { title: '권사' } },
      { tier: 1, portraitFile: 'boxer-limit1.png', en: { title: 'Iron Fist' }, ko: { title: '철권' } },
      { tier: 2, portraitFile: 'boxer-limit2.png', en: { title: 'Unbeatable' }, ko: { title: '금강불괴' } },
    ],
  },
  story: {
    ko: [
      '맨주먹으로 최전선을 지키는 권격가입니다. 패리와 위빙으로 상대의 궤적을 읽고, 틈이 보이는 순간 주먹이 먼저 닿습니다.',
      '오랜 단련 끝에 권기가 몸 안에서 고이고, 피해를 입을수록 아드레날린이 끓어오릅니다. 충전이 차오르면 공격·방어·이동이 한층 날카로워집니다.',
      '한계를 돌파할수록 철권, 금강불괴의 이름으로 불리지만, 본질은 같습니다. 바람을 타고 들어가는 한 방, 그리고 멈추지 않는 주먹의 비가 전장을 지배합니다.',
    ],
    en: [
      'A fist fighter who holds the front line with bare knuckles. Through parry and weaving they read an opponent’s rhythm, and strike the moment a gap appears.',
      'Long training has refined their fist force. Adrenaline surges with every hit taken, and at full charge their offense, defense, and speed all sharpen.',
      'Each limit break brings titles like Iron Fist and Unbeatable, but the essence never changes: one wind-riding blow, then an unending rain of fists that rules the fight.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'adrenaline',
          icon: 'knuckle',
          element: 'wind',
          passive: true,
          ko: {
            name: '아드레날린',
            input: '손 바꾸기',
            description:
              '손 바꾸기로 권기를 방출합니다. 피해를 입을 때마다 충전량이 오르고, 최대(200)에 도달하면 공격력·방어력·이동 속도가 증가합니다.',
          },
          en: {
            name: 'Adrenaline',
            input: 'Swap hands',
            description:
              'Swap hands to release fist force. Charge builds when damaged; at max (200) attack, defense, and speed increase.',
          },
          masterLevel: 1,
        },
        {
          id: 'flickerJab',
          icon: 'fist',
          element: 'wind',
          ko: {
            name: '질풍권',
            input: '우클릭',
            description: '빠른 잽으로 적을 공격합니다. 피해량은 붕권 레벨에 연동됩니다.',
          },
          en: {
            name: 'Flicker Jab',
            input: 'Right-click',
            description: 'A rapid jab. Damage scales with Straight level.',
          },
          masterLevel: 50,
        },
        {
          id: 'straight',
          icon: 'fist',
          element: 'wind',
          ko: {
            name: '붕권',
            input: '좌클릭',
            description: '직선으로 강하게 주먹을 날립니다.',
          },
          en: { name: 'Straight', input: 'Left-click', description: 'A powerful straight punch.' },
          masterLevel: 50,
        },
        {
          id: 'bodyBlow',
          icon: 'fist',
          element: 'wind',
          ko: {
            name: '철산고',
            input: '웅크리기 + 우클릭',
            description: '상체를 낮춰 몸통을 강타합니다.',
          },
          en: {
            name: 'Body Blow',
            input: 'Sneak + right-click',
            description: 'A body blow while sneaking.',
          },
          masterLevel: 50,
        },
        {
          id: 'dempseyRoll',
          icon: 'fist-flurry',
          element: 'wind',
          ko: {
            name: '뎀프시롤',
            input: '손 바꾸기 + 웅크리기',
            description: '위빙이 활성화되며 연속 타격 후 마무리 일격이 이어집니다.',
          },
          en: {
            name: 'Dempsey Roll',
            input: 'Swap hands + sneak',
            description: 'Activates weaving, then a combo and finishing hit.',
          },
          masterLevel: 50,
        },
        {
          id: 'counter',
          icon: 'shield',
          element: 'wind',
          ko: {
            name: '반격',
            description: '패리나 위빙으로 적 공격을 피하면 반격이 발동합니다.',
          },
          en: {
            name: 'Counter',
            description: 'Triggers when you evade with parry or weaving.',
          },
          masterLevel: 50,
        },
        {
          id: 'rest',
          icon: 'book',
          element: 'wind',
          ko: {
            name: '심호흡',
            input: '웅크리기(유지)',
            description: '웅크린 채 심호흡으로 회복합니다.',
          },
          en: { name: 'Rest', input: 'Sneak (hold)', description: 'Recover while sneaking.' },
          masterLevel: 1,
        },
        {
          id: 'training',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '단련',
            description:
              '공격력이 증가합니다. 패리·위빙 설명이 해금되며 바람 저항력이 올라갑니다.',
            extra: [
              '패리: 주먹을 휘두르는 중 피격 시 피해 70% 감소, 투사체 튕김.',
              '위빙: 웅크리며 시선이 적 아래 사선일 때 공격 회피(재사용 0.5초).',
            ],
          },
          en: {
            name: 'Training',
            description: 'Increases damage, unlocks parry/weaving notes, and wind resistance.',
            extra: [
              'Parry: 70% damage reduction while punching; can deflect projectiles.',
              'Weaving: evade while sneaking with eyes diagonally down from enemy (0.5s cooldown).',
            ],
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'intension',
          icon: 'knuckle',
          element: 'wind',
          ko: { name: '긴장', description: '권기 충전량을 즉시 최대로 만듭니다.' },
          en: { name: 'Intension', description: 'Instantly maximizes fist force charge.' },
        },
        {
          id: 'jabRush',
          icon: 'fist-flurry',
          element: 'wind',
          followUp: true,
          ko: {
            name: '질풍쇄도',
            input: '같은 스킬 재입력',
            description: '질풍권 후 재입력 시 연속 타격. 피해량은 질풍권 레벨에 비례합니다.',
          },
          en: {
            name: 'Jab Rush',
            input: 'Use the same skill again',
            description: 'Follow-up to Flicker Jab. Damage scales with jab level.',
          },
        },
        {
          id: 'skyCrasher',
          icon: 'fist',
          element: 'wind',
          followUp: true,
          ko: {
            name: '승천권',
            input: '같은 스킬 재입력',
            description: '붕권 후 재입력 시 승천 타격. 피해량은 붕권 레벨에 비례합니다.',
          },
          en: {
            name: 'Sky Crasher',
            input: 'Use the same skill again',
            description: 'Follow-up to Straight. Damage scales with Straight level.',
          },
        },
        {
          id: 'momentumSmash',
          icon: 'fist',
          element: 'wind',
          followUp: true,
          ko: {
            name: '반달권',
            input: '같은 스킬 재입력',
            description: '철산고 후 재입력 시 반달 권격. 피해량은 철산고 레벨에 비례합니다.',
          },
          en: {
            name: 'Momentum Smash',
            input: 'Use the same skill again',
            description: 'Follow-up to Body Blow. Damage scales with Body Blow level.',
          },
        },
        {
          id: 'immersion',
          icon: 'fist-flurry',
          element: 'wind',
          ko: { name: '몰입', input: '같은 스킬 재입력', description: '뎀프시롤을 한 번 더 사용할 수 있습니다.' },
          en: { name: 'Immersion', input: 'Use the same skill again', description: 'Use Dempsey Roll once more.' },
        },
        {
          id: 'chance',
          icon: 'shield',
          element: 'wind',
          ko: { name: '기회', description: '피격당해도 반격이 발동될 수 있습니다.' },
          en: { name: 'Chance', description: 'Counter can trigger even when hit.' },
        },
        {
          id: 'strongHeart',
          icon: 'recovery',
          element: 'wind',
          passive: true,
          ko: { name: '강심장', description: '체력 재생 효과가 강화됩니다.' },
          en: { name: 'Strong Heart', description: 'Amplifies regeneration.' },
        },
        {
          id: 'patience',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: { name: '인내', description: '전체 공격력과 방어력이 증가합니다.' },
          en: { name: 'Patience', description: 'Increases overall damage and armor.' },
        },
        {
          id: 'onePunch',
          icon: 'fist-serious',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '일격권',
            input: '웅크리기 + 숫자키 4',
            description: '집중한 한 방으로 막대한 피해를 줍니다.',
          },
          en: {
            name: 'One Punch',
            input: 'Sneak + hotkey 4',
            description: 'A focused single strike for massive damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'oneInchPunch',
          icon: 'fist-serious',
          element: 'wind',
          followUp: true,
          ko: {
            name: '촌경',
            input: '같은 스킬 재입력',
            description: '존나센(촌경) 일격. 피해량은 붕권 레벨에 비례합니다.',
          },
          en: {
            name: 'One-Inch Punch',
            input: 'Use the same skill again',
            description: 'A devastating inch punch. Damage scales with Straight level.',
          },
        },
        {
          id: 'earthQuaker',
          icon: 'fist',
          element: 'wind',
          followUp: true,
          ko: {
            name: '대지가르기',
            input: '같은 스킬 재입력',
            description: '대지를 가르는 권격. 피해량은 붕권 레벨에 비례합니다.',
          },
          en: {
            name: 'Earth Quaker',
            input: 'Use the same skill again',
            description: 'An earth-splitting blow. Damage scales with Straight level.',
          },
        },
        {
          id: 'fistStorm',
          icon: 'fist-flurry',
          element: 'wind',
          followUp: true,
          ko: {
            name: '권풍',
            input: '같은 스킬 재입력',
            description: '연속 권풍 타격. 피해량은 철산고 레벨에 비례합니다.',
          },
          en: {
            name: 'Fist Storm',
            input: 'Use the same skill again',
            description: 'A storm of fists. Damage scales with Body Blow level.',
          },
        },
        {
          id: 'explodingFist',
          icon: 'fist',
          element: 'wind',
          followUp: true,
          ko: {
            name: '폭권',
            input: '뎀프시롤 후 재입력',
            description: '뎀프시롤 이후 폭발하는 일격. 피해량은 뎀프시롤 레벨에 비례합니다.',
          },
          en: {
            name: 'Exploding Fist',
            input: 'After Dempsey Roll, use again',
            description: 'An explosive finisher. Damage scales with Dempsey Roll level.',
          },
        },
        {
          id: 'ducking',
          icon: 'shield',
          element: 'wind',
          ko: { name: '더킹', input: '웅크리기', description: '웅크릴 때 반격이 활성화됩니다.' },
          en: { name: 'Ducking', input: 'Sneak', description: 'Counter activates while sneaking.' },
        },
        {
          id: 'stamina',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '활력',
            description: '공격력·방어력이 증가하고 일격권 재사용 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Stamina',
            description: 'More damage and armor; shorter One Punch cooldown.',
          },
        },
        {
          id: 'willOfIronman',
          icon: 'storm',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '철인의 의지',
            input: '웅크리기 + 숫자키 5',
            description: '철인의 의지로 연속 권격을 퍼붓습니다. 경험치 레벨에 영향을 받습니다.',
          },
          en: {
            name: 'Will of Ironman',
            input: 'Sneak + hotkey 5',
            description: 'Unleashes a relentless fist barrage. Damage scales with XP level.',
          },
        },
      ],
    },
  ],
};
