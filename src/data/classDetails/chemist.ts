import type { ClassDetailDef } from './types';

export const chemistDetail: ClassDetailDef = {
  id: 'chemist',
  order: 5,
  element: { en: 'Poison & Flame', ko: '맹독·화염' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'chemist.png', en: { title: 'Chemist' }, ko: { title: '화학자' } },
      { tier: 1, portraitFile: 'chemist-limit1.png', en: { title: 'Maniac' }, ko: { title: '열광자' } },
      { tier: 2, portraitFile: 'chemist-limit2.png', en: { title: 'Pioneer' }, ko: { title: '선구자' } },
    ],
  },
  story: {
    ko: [
      '곡괭이와 물약으로 전장을 뒤흔드는 기술자입니다. 네이팜·화염병·산성 구름으로 진형을 무너뜨리고, 몬스터를 추출해 몸을 강화합니다.',
      '돌진으로 무적 상태를 만들고, 산성 게이지로 구름을 유지합니다. 유독성은 독에 면역되게 하며 맹독 저항을 올립니다.',
      '한계를 넘기면 신경독과 아마겟돈이 깃듭니다. 열광자, 선구자라 불려도 본질은 같습니다. 실험실의 광기로 전장을 지배하는 자입니다.',
    ],
    en: [
      'A technician who disrupts the front with a pickaxe and potions. Napalm, molotovs, and acid clouds break formations while extractions buff the body.',
      'Charge grants invulnerability; an acid gauge sustains the cloud. Poisonous grants poison immunity and raises poison resistance.',
      'Beyond the limit break come nerve toxin and Armageddon. Titles may read Maniac or Pioneer, but the essence is unchanged: to rule the fight with laboratory madness.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'napalm',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '네이팜',
            input: '손 바꾸기',
            description: '네이팜을 투척합니다.',
          },
          en: {
            name: 'Napalm',
            input: 'Swap hands',
            description: 'Throws napalm.',
          },
          masterLevel: 50,
        },
        {
          id: 'extraction',
          icon: 'potion',
          element: 'poison',
          ko: {
            name: '추출',
            input: '웅크리기 + 좌클릭',
            description:
              '추출한 몹 종류에 따라 이로운 효과를 얻습니다. 기본: 속도·점프 / 벌레: 야간 투시 / 언데드: 힘·저항 / 수중: 돌고래의 우아함·수중 호흡 / 엔더: 은신 / 기타: 재생.',
          },
          en: {
            name: 'Extraction',
            input: 'Sneak + left-click',
            description:
              'Buffs depend on extracted mob type. Base: speed & jump / Arthropod: night vision / Undead: strength & resistance / Water: dolphin’s grace & water breathing / Ender: invisibility / Else: regeneration.',
          },
          masterLevel: 1,
        },
        {
          id: 'charge',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '돌진',
            input: '웅크리기 + 우클릭',
            description: '돌진 중 무적입니다. 재입력 시 조기 종료할 수 있습니다.',
          },
          en: {
            name: 'Charge',
            input: 'Sneak + right-click',
            description: 'Invulnerable while charging. Use again to end early.',
          },
          masterLevel: 50,
        },
        {
          id: 'acidCloud',
          icon: 'acid',
          element: 'poison',
          ko: {
            name: '산성 구름',
            input: '우클릭',
            description: '활성화/비활성화 스킬. 산성 게이지를 소모합니다.',
          },
          en: {
            name: 'Acid Cloud',
            input: 'Right-click',
            description: 'Toggle on/off. Consumes acid gauge.',
          },
          masterLevel: 50,
        },
        {
          id: 'molotov',
          icon: 'potion',
          element: 'fire',
          ko: {
            name: '화염병',
            input: '좌클릭 + 점프',
            description: '화염병을 투척합니다.',
          },
          en: {
            name: 'Molotov Cocktail',
            input: 'Left-click + jump',
            description: 'Throws a molotov cocktail.',
          },
          masterLevel: 50,
        },
        {
          id: 'slimeBall',
          icon: 'poison',
          element: 'poison',
          ko: {
            name: '슬라임볼',
            input: '손 바꾸기 + 웅크리기',
            description: '독성 슬라임볼을 투척합니다.',
          },
          en: {
            name: 'Slime Ball',
            input: 'Swap hands + sneak',
            description: 'Throws a toxic slime ball.',
          },
          masterLevel: 50,
        },
        {
          id: 'poisonous',
          icon: 'book',
          element: 'poison',
          passive: true,
          ko: {
            name: '유독성',
            description: '공격력이 증가하고 독 면역·맹독 저항이 올라갑니다.',
          },
          en: {
            name: 'Poisonous',
            description: 'Increases damage; immune to poison and gains poison resistance.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'whitePhosphorus',
          icon: 'flame',
          element: 'fire',
          followUp: true,
          ko: {
            name: '백린',
            input: '같은 스킬 재입력',
            description: '네이팜 후 재입력 시 백린탄.',
          },
          en: {
            name: 'White Phosphorus',
            input: 'Use the same skill again',
            description: 'Follow-up to Napalm.',
          },
        },
        {
          id: 'adaptation',
          icon: 'pickaxe',
          element: 'poison',
          passive: true,
          ko: {
            name: '적응',
            description:
              '추출 효과가 강화되고 멀미가 제거됩니다. 기본: 화염 저항 / 벌레: 공격 속도 / 언데드: 흡수 / 수상: 전도체의 힘 / 엔더: 행운 / 기타: 포만감.',
          },
          en: {
            name: 'Adaptation',
            description:
              'Stronger extraction buffs; removes nausea. Base: fire resistance / Arthropod: attack speed / Undead: absorption / Water: conduit power / Ender: luck / Else: saturation.',
          },
        },
        {
          id: 'acidStorm',
          icon: 'storm',
          element: 'poison',
          followUp: true,
          ko: {
            name: '산성 폭풍',
            input: '돌진 종료 후 재입력',
            description:
              '2초간 산성 구름이 강화되어 적을 중앙으로 모읍니다. 이동 속도가 감소합니다.',
          },
          en: {
            name: 'Acid Storm',
            input: 'After ending charge, use again',
            description:
              'Empowers acid cloud for 2s and pulls enemies to the center. You move slower.',
          },
        },
        {
          id: 'addicting',
          icon: 'acid',
          element: 'poison',
          ko: { name: '중독성', description: '산성 구름의 잔류 시간과 범위가 증가합니다.' },
          en: { name: 'Addicting', description: 'Increases acid cloud duration and range.' },
        },
        {
          id: 'glue',
          icon: 'poison',
          element: 'poison',
          ko: { name: '접착제', description: '피격한 적을 짧게 제압합니다.' },
          en: { name: 'Glue', description: 'Briefly immobilizes struck enemies.' },
        },
        {
          id: 'magmaBall',
          icon: 'lava',
          element: 'fire',
          followUp: true,
          ko: {
            name: '마그마볼',
            input: '같은 스킬 재입력',
            description: '슬라임볼 후 재입력.',
          },
          en: {
            name: 'Magma Ball',
            input: 'Use the same skill again',
            description: 'Follow-up to Slime Ball.',
          },
        },
        {
          id: 'venom',
          icon: 'book',
          element: 'poison',
          passive: true,
          ko: {
            name: '맹독',
            description: '전체 피해량이 증가합니다. 활성 물약 효과 종류수에 비례해 받는 피해가 감소합니다.',
          },
          en: {
            name: 'Venom',
            description: 'Increases all skill damage. Less damage taken per active potion effect type.',
          },
        },
        {
          id: 'nerveToxin',
          icon: 'poison',
          element: 'poison',
          ultimate: true,
          ko: {
            name: '신경독',
            input: '웅크리기 + 숫자키 4',
            description: '산성 구름이 추가 피해를 입힙니다.',
          },
          en: {
            name: 'VX',
            input: 'Sneak + hotkey 4',
            description: 'Acid clouds deal bonus damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'hallucinogen',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '환각제',
            input: '같은 스킬 재입력',
            description: '네이팜 후 재입력.',
          },
          en: {
            name: 'Hallucinogen',
            input: 'Use the same skill again',
            description: 'Follow-up to Napalm.',
          },
        },
        {
          id: 'acidExtraction',
          icon: 'potion',
          element: 'poison',
          ko: {
            name: '산성 추출',
            description: '추출한 적을 짧게 제압하고 산성 게이지를 5% 충전합니다.',
          },
          en: {
            name: 'Acid Extraction',
            description: 'Briefly immobilizes extracted foes and restores 5% acid gauge.',
          },
        },
        {
          id: 'acidBomb',
          icon: 'bomb',
          element: 'poison',
          followUp: true,
          ko: {
            name: '산성 폭탄',
            input: '같은 스킬 재입력',
            description: '돌진 후 재입력.',
          },
          en: {
            name: 'Acid Bomb',
            input: 'Use the same skill again',
            description: 'Follow-up to Charge.',
          },
        },
        {
          id: 'necrosis',
          icon: 'acid',
          element: 'poison',
          ko: {
            name: '괴사',
            description: '범위가 증가하고 방어력을 무시하는 추가 고정 피해를 입힙니다.',
          },
          en: {
            name: 'Necrosis',
            description: 'Larger range and bonus fixed damage that ignores armor.',
          },
        },
        {
          id: 'cocktailFlower',
          icon: 'flame',
          element: 'fire',
          ko: { name: '화염병 난사', description: '8방향으로 화염병을 투척합니다.' },
          en: { name: 'Cocktail Flower', description: 'Throws molotovs in eight directions.' },
        },
        {
          id: 'glowingBall',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '발광구',
            input: '같은 스킬 재입력',
            description: '슬라임볼 후 재입력.',
          },
          en: {
            name: 'Glowing Ball',
            input: 'Use the same skill again',
            description: 'Follow-up to Slime Ball.',
          },
        },
        {
          id: 'bioreformation',
          icon: 'book',
          element: 'poison',
          passive: true,
          ko: {
            name: '생체 강화',
            description: '공격력·방어력이 증가하고 신경독 재사용 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Bioreformation',
            description: 'More damage and armor; shorter VX cooldown.',
          },
        },
        {
          id: 'armageddon',
          icon: 'bomb',
          element: 'poison',
          ultimate: true,
          ko: {
            name: '아마겟돈',
            input: '웅크리기 + 숫자키 5',
            description: '맹독의 대재앙으로 막대한 연속 피해를 줍니다.',
          },
          en: {
            name: 'Armageddon',
            input: 'Sneak + hotkey 5',
            description: 'Unleashes a devastating poison cataclysm.',
          },
        },
      ],
    },
  ],
};
