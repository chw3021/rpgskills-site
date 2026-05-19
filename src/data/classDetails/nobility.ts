import type { ClassDetailDef } from './types';

export const nobilityDetail: ClassDetailDef = {
  id: 'nobility',
  order: 14,
  element: { en: 'Water', ko: '물' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'nobility.png', en: { title: 'Nobility' }, ko: { title: '귀족' } },
      { tier: 1, portraitFile: 'nobility-limit1.png', en: { title: 'Brilliant' }, ko: { title: '왕족' } },
      { tier: 2, portraitFile: 'nobility-limit2.png', en: { title: 'Emperor' }, ko: { title: '황제' } },
    ],
  },
  story: {
    ko: [
      '삼지창과 바다의 심장으로 무장한 해양 지휘관입니다. 돌격·물바퀴·폭풍·가디언·전이·돌고래로 전장을 장악합니다.',
      '삼지창의 주인은 투척한 창에 결속되고, 받기 전까지 무적이 됩니다. 바다의 표식은 적을 표시하고 폭풍과 연계됩니다.',
      '왕족은 거대 폭풍 속 하늘에서 떨어지는 삼지창을 부리고, 황제는 모든 해양 생물과 엘더 가디언이 함께 진격합니다. 바다가 그들의 군단입니다.',
    ],
    en: [
      'A sea lord armed with trident and heart of the sea. Assault, water wheels, storms, guardians, transition, and dolphin surf dominate the field.',
      'Owner of the Trident binds thrown spears and stays invulnerable until they return. Mark of the Sea tags foes for storm combos.',
      'Brilliant calls a colossal trident from the storm sky; Emperor leads every sea creature and elder guardians in a grand ocean march.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'assault',
          icon: 'rush',
          element: 'water',
          ko: { name: '돌격', input: '웅크리기 + 손 바꾸기', description: '돌격을 시작합니다.' },
          en: { name: 'Assault', input: 'Sneak + swap hands', description: 'Begins an assault charge.' },
          masterLevel: 50,
        },
        {
          id: 'waterWheel',
          icon: 'wave',
          element: 'water',
          ko: { name: '물바퀴', input: '손 바꾸기', description: '물바퀴를 생성합니다.' },
          en: { name: 'Water Wheel', input: 'Swap hands', description: 'Creates a water wheel.' },
          masterLevel: 50,
        },
        {
          id: 'storm',
          icon: 'storm',
          element: 'water',
          ko: {
            name: '폭풍',
            input: '웅크리기 + 좌클릭',
            description: '표식이 새겨진 적에게 폭풍을 일으킵니다.',
          },
          en: {
            name: 'Storm',
            input: 'Sneak + left-click',
            description: 'Calls a storm on marked enemies.',
          },
          masterLevel: 50,
        },
        {
          id: 'guardianSupport',
          icon: 'shield',
          element: 'water',
          ko: {
            name: '가디언 지원대',
            description:
              '가디언이 공격을 보조하고 피격 시 반격합니다. 손에 든 아이템을 바꾸면 가디언이 사라집니다.',
          },
          en: {
            name: 'Guardian Support',
            description:
              'Guardians assist attacks and counter when you are hit. They despawn when you change held items.',
          },
          masterLevel: 20,
        },
        {
          id: 'transition',
          icon: 'trident',
          element: 'water',
          ko: { name: '전이', input: '웅크리기 + 투척', description: '삼지창을 투척합니다.' },
          en: { name: 'Transition', input: 'Sneak + throw', description: 'Throws the trident.' },
          masterLevel: 50,
        },
        {
          id: 'dolphinSurf',
          icon: 'wave',
          element: 'water',
          ko: {
            name: '돌고래 타기',
            input: '점프 + 좌클릭',
            description: '돌고래를 탑니다. 우클릭 시 하차하며 주변 적에게 피해를 줍니다.',
          },
          en: {
            name: 'Dolphin Surf',
            input: 'Jump + left-click',
            description: 'Rides a dolphin. Right-click to dismount and damage nearby foes.',
          },
          masterLevel: 50,
        },
        {
          id: 'ownerOfTrident',
          icon: 'trident',
          element: 'water',
          passive: true,
          ko: {
            name: '삼지창의 주인',
            input: '맨손 + 웅크리기 + 좌클릭',
            description:
              '투척한 삼지창에 결속됩니다. 받기 전까지 무적이며, 멀거나 공허에 빠지면 즉시 돌아옵니다.',
          },
          en: {
            name: 'Owner of the Trident',
            input: 'Bare hands + sneak + left-click',
            description:
              'Binds to your thrown trident. Invulnerable until it returns; teleports back if far or in the void.',
          },
        },
        {
          id: 'markOfSea',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '바다의 표식',
            description:
              '공격력 증가, 가디언 반사 피해 면역, 적 표식. 폭풍 사용 시 표식이 사라집니다. 삼지창에 충절·집전 부여, 수영 시 이로운 효과.',
          },
          en: {
            name: 'Mark of the Sea',
            description:
              'More damage, immunity to guardian reflect, marks foes. Storm removes marks. Adds Loyalty and Channeling; swim buffs.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'holdPosition',
          icon: 'target-shot',
          element: 'water',
          followUp: true,
          ko: {
            name: '위치 사수',
            input: '같은 스킬 재입력',
            description: '돌격을 중지합니다. 피해량은 돌격 레벨에 비례합니다.',
          },
          en: {
            name: 'Hold Position',
            input: 'Use the same skill again',
            description: 'Stops assault. Damage scales with Assault level.',
          },
        },
        {
          id: 'release',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '해방',
            input: '같은 스킬 재입력',
            description: '물바퀴 위치에 삼지창의 힘을 해방합니다. 피해량은 물바퀴 레벨에 비례합니다.',
          },
          en: {
            name: 'Release',
            input: 'Use the same skill again',
            description: 'Unleashes trident force at the water wheel. Damage scales with Water Wheel level.',
          },
        },
        {
          id: 'agentTurtle',
          icon: 'shield',
          element: 'water',
          ko: {
            name: '거북 요원',
            description: '거북이가 적을 휩씁니다. 피해량은 폭풍 레벨에 비례합니다.',
          },
          en: {
            name: 'Agent Turtle',
            description: 'Turtles sweep enemies. Damage scales with Storm level.',
          },
        },
        {
          id: 'elderGuardian',
          icon: 'wave',
          element: 'water',
          ko: {
            name: '엘더 가디언',
            description: '가디언을 엘더 가디언으로 교체합니다.',
          },
          en: {
            name: 'Elder Guardian',
            description: 'Replaces guardians with an elder guardian.',
          },
        },
        {
          id: 'axolotlSquad',
          icon: 'paw',
          element: 'water',
          ko: {
            name: '아홀로틀 분대',
            description:
              '삼지창 위치에 아홀로틀 분대를 소환합니다. 최대 체력이 높은 적을 우선 공격합니다.',
          },
          en: {
            name: 'Axolotl Squad',
            description:
              'Summons axolotls at the trident. They prioritize the highest max-HP enemy.',
          },
        },
        {
          id: 'glowSquid',
          icon: 'poison',
          element: 'water',
          ko: {
            name: '발광 오징어',
            description: '돌고래 타기 종료 시 발광 오징어를 소환합니다.',
          },
          en: {
            name: 'Glow Squid',
            description: 'Summons glow squids when dolphin surf ends.',
          },
        },
        {
          id: 'noble',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '고결',
            description: '공격력 증가, 공격 역할군 방어력 감소 제거, 삼지창 속도 증가.',
          },
          en: {
            name: 'Noble',
            description: 'More damage, removes nuker armor penalty, faster trident.',
          },
        },
        {
          id: 'whirlpool',
          icon: 'storm',
          element: 'water',
          ultimate: true,
          ko: {
            name: '바다 소용돌이',
            input: '웅크리기 + 숫자키 4',
            description: '거대한 폭풍 속 하늘에서 삼지창이 떨어지듯 바다를 소용돌이칩니다.',
          },
          en: {
            name: 'Whirlpool',
            input: 'Sneak + hotkey 4',
            description: 'Summons a sea whirlpool as a colossal trident falls through the storm.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'sprayAttack',
          icon: 'wave',
          element: 'water',
          followUp: true,
          ko: {
            name: '분사 공격',
            input: '같은 스킬 재입력',
            description: '분사 공격을 명령합니다. 피해량은 돌격 레벨에 비례합니다.',
          },
          en: {
            name: 'Spray Attack',
            input: 'Use the same skill again',
            description: 'Orders a spray attack. Damage scales with Assault level.',
          },
        },
        {
          id: 'eyesOfSea',
          icon: 'target-shot',
          element: 'water',
          followUp: true,
          ko: {
            name: '바다의 눈',
            input: '같은 스킬 재입력',
            description: '물바퀴 위치에 바다의 눈을 개안합니다. 피해량은 물바퀴 레벨에 비례합니다.',
          },
          en: {
            name: 'Eyes of the Sea',
            input: 'Use the same skill again',
            description: 'Awakens eyes of the sea at the water wheel. Damage scales with Water Wheel level.',
          },
        },
        {
          id: 'omnipotent',
          icon: 'steady',
          element: 'water',
          passive: true,
          ko: { name: '전지전능', description: '폭풍 재사용 대기시간이 절반으로 감소합니다.' },
          en: { name: 'Omnipotent', description: 'Halves Storm cooldown.' },
        },
        {
          id: 'guardianCurse',
          icon: 'soul',
          element: 'water',
          ko: {
            name: '가디언 저주',
            input: '웅크리기 + 아이템 변경(휠)',
            description: '가디언의 저주를 사용합니다. 피해량은 가디언 지원대 레벨에 비례합니다.',
          },
          en: {
            name: 'Guardian Curse',
            input: 'Sneak + change item (scroll)',
            description: 'Casts guardian curse. Damage scales with Guardian Support level.',
          },
        },
        {
          id: 'downpour',
          icon: 'storm',
          element: 'water',
          ko: {
            name: '호우',
            description: '삼지창 위치에 호우를 부립니다. 피해량은 전이 레벨에 비례합니다.',
          },
          en: {
            name: 'Downpour',
            description: 'Calls downpour at the trident. Damage scales with Transition level.',
          },
        },
        {
          id: 'ruler',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '통치자',
            description: '공격력·방어력 증가, 바다 소용돌이 재사용 대기시간 감소.',
          },
          en: {
            name: 'Ruler',
            description: 'More damage and armor; shorter Whirlpool cooldown.',
          },
        },
        {
          id: 'oceanMarch',
          icon: 'trident',
          element: 'water',
          ultimate: true,
          ko: {
            name: '바다 대행진',
            input: '웅크리기 + 숫자키 5',
            description:
              '돌고래·가디언·거북·아홀로틀·발광 오징어·엘더 가디언 등 모든 해양 생물이 함께 진격합니다.',
          },
          en: {
            name: 'Ocean March',
            input: 'Sneak + hotkey 5',
            description:
              'Leads a full ocean army—dolphins, guardians, turtles, axolotls, glow squids, and elder guardians—in a united charge.',
          },
        },
      ],
    },
  ],
};
