import type { ClassDetailDef } from './types';

export const tamerDetail: ClassDetailDef = {
  id: 'tamer',
  order: 11,
  element: { en: 'Earth & Poison', ko: '대지·맹독' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'tamer.png', en: { title: 'Tamer' }, ko: { title: '조련사' } },
      { tier: 1, portraitFile: 'tamer-limit1.png', en: { title: 'Trainer' }, ko: { title: '훈육사' } },
      { tier: 2, portraitFile: 'tamer-limit2.png', en: { title: 'Communicator' }, ko: { title: '교감사' } },
    ],
  },
  story: {
    ko: [
      '양손 너클과 집중 공격으로 동물 군단을 지휘하는 조련사입니다. 스파이디·반려동물·벌집·크리퍼·판다를 부려 전장을 뒤흔듭니다.',
      '조련 스킬 레벨에 따라 소환수의 체력·공격·이속이 오릅니다. 웅크리기+휠 위로 동물을 모으고, 아래로내며 집중 공격을 해제합니다.',
      '훈육사는 철골렘과 더 많은 반려동물을, 교감사는 엔더 드래곤까지 부립니다. 동물과 하나 되어 전장을 지배하는 자입니다.',
    ],
    en: [
      'A beast commander who directs a menagerie with knuckles and focused fire. Spidey, pets, bees, creepers, and pandas swarm the field on command.',
      'Taming level raises summon HP, damage, and speed. Sneak + scroll up gathers animals and clears focus; scroll down sends them away.',
      'Trainer brings an iron golem and fox and ocelot; Communicator bonds with every beast and rides the tamed dragon. They rule the fight as one with their pack.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'pressTheAttack',
          icon: 'target-shot',
          element: 'earth',
          ko: {
            name: '집중 공격',
            input: '손 바꾸기(화살) 또는 근접 공격',
            description:
              '표적을 지정합니다. 화살 공격력은 동물 공격력 총합의 5%입니다. 스파이디는 적을 붙잡고, 크리퍼 폭탄은 즉시 폭발합니다.',
          },
          en: {
            name: 'Press the Attack',
            input: 'Swap hands (arrow) or melee',
            description:
              'Marks a focus target. Arrow damage equals 5% of total pet damage. Spidey holds the foe; creep bombs explode instantly.',
          },
          masterLevel: 1,
        },
        {
          id: 'spidey',
          icon: 'poison',
          element: 'earth',
          ko: { name: '스파이디', input: '웅크리기 + 우클릭', description: '동굴 거미를 소환합니다.' },
          en: { name: 'Spidey', input: 'Sneak + right-click', description: 'Summons a cave spider.' },
          masterLevel: 50,
        },
        {
          id: 'pets',
          icon: 'paw',
          element: 'earth',
          ko: {
            name: '반려동물',
            input: '손 바꾸기 + 웅크리기',
            description: '늑대·고양이·앵무새를 소환합니다.',
          },
          en: {
            name: 'Pets',
            input: 'Swap hands + sneak',
            description: 'Summons wolf, cat, and parrot.',
          },
          masterLevel: 50,
        },
        {
          id: 'beeHive',
          icon: 'poison',
          element: 'poison',
          ko: { name: '벌집', input: '점프 + 우클릭', description: '벌 떼를 소환합니다.' },
          en: { name: 'Bee Hive', input: 'Jump + right-click', description: 'Summons a bee swarm.' },
          masterLevel: 50,
        },
        {
          id: 'creepBomb',
          icon: 'bomb',
          element: 'poison',
          ko: { name: '크리퍼 폭탄', input: '웅크리기 + 좌클릭', description: '크리퍼 폭탄을 소환합니다.' },
          en: { name: 'Creep Bomb', input: 'Sneak + left-click', description: 'Summons a creep bomb.' },
          masterLevel: 50,
        },
        {
          id: 'panda',
          icon: 'paw',
          element: 'earth',
          ko: {
            name: '판다',
            input: '점프 + 좌클릭',
            description: '판다를 소환해 10초간 주변 적을 도발합니다.',
          },
          en: {
            name: 'Panda',
            input: 'Jump + left-click',
            description: 'Summons a panda that taunts nearby foes for 10s.',
          },
          masterLevel: 50,
        },
        {
          id: 'taming',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '조련',
            description:
              '동물 체력·공격·속도가 증가합니다. 웅크리기+휠 위: 동물 집결·집중 공격 해제. 웅크리기+휠 아래: 동물 귀환.',
          },
          en: {
            name: 'Taming',
            description:
              'Raises pet HP, damage, and speed. Sneak + scroll up: gather pets, clear focus. Sneak + scroll down: dismiss pets.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'vitality',
          icon: 'recovery',
          element: 'earth',
          passive: true,
          ko: { name: '활력', description: '화살 적중 시 체력을 회복합니다.' },
          en: { name: 'Vitality', description: 'Heal when your arrow hits.' },
        },
        {
          id: 'webSpread',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          ko: {
            name: '거미줄 발사',
            input: '같은 스킬 재입력',
            description: '스파이디 후 재입력. 피해량은 스파이디 레벨에 비례합니다.',
          },
          en: {
            name: 'Web Spread',
            input: 'Use the same skill again',
            description: 'Follow-up to Spidey. Damage scales with Spidey level.',
          },
        },
        {
          id: 'leap',
          icon: 'paw',
          element: 'earth',
          followUp: true,
          ko: {
            name: '도약 공격',
            input: '반려동물 존재 시 재입력',
            description: '반려동물이 도약 공격합니다. 집중 표적이 있으면 해당 위치로 점프합니다.',
          },
          en: {
            name: 'Leap',
            input: 'While pets exist, use again',
            description: 'Pets leap attack. Jumps to focus target if set.',
          },
        },
        {
          id: 'disruption',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          ko: {
            name: '혼란',
            input: '같은 스킬 재입력',
            description: '벌집 후 재입력. 벌이 주변 적을 공격하며 표적이 있으면 이동합니다.',
          },
          en: {
            name: 'Disruption',
            input: 'Use the same skill again',
            description: 'After bee hive, bees attack nearby foes and move to focus target.',
          },
        },
        {
          id: 'allure',
          icon: 'target-shot',
          element: 'earth',
          ko: { name: '매력', description: '주변 적을 끌어당깁니다.' },
          en: { name: 'Allure', description: 'Pulls nearby enemies inward.' },
        },
        {
          id: 'pandaSweep',
          icon: 'paw',
          element: 'earth',
          followUp: true,
          ko: {
            name: '판다 휩쓸기',
            input: '판다 존재 시 재입력',
            description: '판다가 휩쓸기 공격합니다. 표적이 있으면 해당 위치로 이동합니다.',
          },
          en: {
            name: 'Panda Sweep',
            input: 'While panda exists, use again',
            description: 'Panda sweeps. Moves to focus target if set.',
          },
        },
        {
          id: 'animalTraining',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '훈육',
            description:
              '전체 피해량 증가. 여우·오셀롯이 반려동물에 추가됩니다. 모든 동물이 피해 면역, 재사용해도 기존 동물이 사라지지 않습니다.',
          },
          en: {
            name: 'Animal Training',
            description:
              'More damage; adds fox and ocelot to pets. All animals immune to damage; reusing skills does not dismiss existing pets.',
          },
        },
        {
          id: 'ironGolem',
          icon: 'golem',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '철골렘 / 골렘 강타',
            input: '웅크리기 + 숫자키 4',
            description: '철골렘을 소환합니다. 골렘 강타는 철골렘이 있을 때만 사용할 수 있습니다.',
          },
          en: {
            name: 'Iron Golem / Golem Smash',
            input: 'Sneak + hotkey 4',
            description: 'Summons an iron golem. Golem Smash requires the golem to exist.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'stunArrow',
          icon: 'arrow',
          element: 'wind',
          ko: { name: '기절 화살', description: '적을 기절시킵니다.' },
          en: { name: 'Stun Arrow', description: 'Stuns the target.' },
        },
        {
          id: 'scratch',
          icon: 'paw',
          element: 'earth',
          followUp: true,
          ko: {
            name: '할퀴기',
            input: '같은 스킬 재입력',
            description: '반려동물이 할퀴기 공격합니다. 피해량은 반려동물 레벨에 비례합니다.',
          },
          en: {
            name: 'Scratch',
            input: 'Use the same skill again',
            description: 'Pets scratch attack. Damage scales with Pets level.',
          },
        },
        {
          id: 'hotChicken',
          icon: 'flame',
          element: 'fire',
          followUp: true,
          ko: {
            name: '불닭',
            input: '같은 스킬 재입력',
            description: '불닭이 상승하며 화염구를 쏩니다. 표적이 있으면 그쪽으로 공격합니다.',
          },
          en: {
            name: 'Hot Chicken',
            input: 'Use the same skill again',
            description: 'Summons a fire chicken that launches fireballs at the focus target.',
          },
        },
        {
          id: 'creepCloud',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          ko: {
            name: '크리퍼 구름',
            input: '폭발 후',
            description: '크리퍼 폭탄 폭발 후 독 구름이 생성됩니다.',
          },
          en: {
            name: 'Creep Cloud',
            input: 'After explosion',
            description: 'Creates a poison cloud after creep bomb detonates.',
          },
        },
        {
          id: 'stomp',
          icon: 'golem',
          element: 'earth',
          followUp: true,
          ko: {
            name: '발구르기',
            input: '같은 스킬 재입력',
            description: '판다가 발구릅니다. 피해량은 판다 레벨에 비례합니다.',
          },
          en: {
            name: 'Stomp',
            input: 'Use the same skill again',
            description: 'Panda stomps. Damage scales with Panda level.',
          },
        },
        {
          id: 'communication',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '교감',
            description: '공격력·방어력 증가, 철골렘 재사용 대기시간 감소.',
          },
          en: {
            name: 'Communication',
            description: 'More damage and armor; shorter iron golem cooldown.',
          },
        },
        {
          id: 'tamedDragon',
          icon: 'phoenix',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '길들여진 드래곤',
            input: '웅크리기 + 숫자키 5',
            description: '길들인 엔더 드래곤을 소환해 탑승·공격합니다.',
          },
          en: {
            name: 'Tamed Dragon',
            input: 'Sneak + hotkey 5',
            description: 'Summons a tamed ender dragon to ride and attack.',
          },
        },
      ],
    },
  ],
};
