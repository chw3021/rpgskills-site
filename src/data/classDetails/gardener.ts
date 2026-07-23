import type { ClassDetailDef } from './types';

export const gardenerDetail: ClassDetailDef = {
  id: 'gardener',
  order: 20,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'gardener.png', en: { title: 'Gardener' }, ko: { title: '원예가' } },
      { tier: 1, portraitFile: 'gardener-limit1.png', en: { title: 'Flower Mage' }, ko: { title: '조물주' } },
      { tier: 2, portraitFile: 'gardener-limit2.png', en: { title: 'Flora' }, ko: { title: '자연신' } },
    ],
  },
  story: {
    ko: [
      '삽으로 땅을 다루며 식물 설치물로 전장을 깔아 둡니다. 덩굴 장판·씨앗 성장·뿌리 감옥·가시밭·포자 구름으로 제압하고, 꽃 정원과 성장 패시브로 싸웁니다.',
    ],
    en: [
      'A horticulturist who lays the battlefield with plant deployables. Vine patches, growing seeds, root cages, thorn fields, and spore clouds suppress foes while flower gardens and Growth hold the line.',
      'Proficiency 1 unlocks follow-up combos and Overgrowth, which buffs deployed skills in range and deals multi-hit aura damage. Proficiency 2 empowers combos and adds World Tree—a giant tree with falling seed explosions.',
      'The Flower Mage commands plants at will; Flora rules the battlefield from atop the world tree.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'vineWhip',
          icon: 'leaf',
          element: 'earth',
          guiColumn: 0,
          ko: {
            name: '덩굴채찍',
            input: '삽 + 비웅크리기 + 우클릭',
            description:
              '전방 지점에 덩굴 뿌리 장판을 설치합니다. 덩굴이 중앙으로 수렴하며 적을 끌어당기고 제압·지속 피해를 줍니다.',
          },
          en: {
            name: 'Vine Whip',
            input: 'Shovel + not sneaking + right-click',
            description:
              'Deploys a vine root patch ahead. Vines converge inward, pulling, suppressing, and damaging foes over time.',
          },
          masterLevel: 50,
        },
        {
          id: 'seedBomb',
          icon: 'storm',
          element: 'earth',
          guiColumn: 1,
          ko: {
            name: '씨앗폭탄',
            input: '삽 + 비웅크리기 + 손 바꾸기',
            description:
              '대상 지점에 작은 씨앗을 심습니다. 즉시 폭발하지 않으며, 다른 정원사 스킬 사용 시 성장해 완전히 자라면 폭발합니다.',
            extra: [
              '씨앗폭탄·숙성 폭발 사용 시에는 성장하지 않습니다.',
            ],
          },
          en: {
            name: 'Seed Bomb',
            input: 'Shovel + not sneaking + swap hands',
            description:
              'Plants a small seed at the target. It does not explode immediately; other gardener skills make it grow until fully ripe, then it detonates.',
            extra: [
              'Seed Bomb and Ripe Detonation do not count as growth triggers.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'rootPrison',
          icon: 'spike',
          element: 'earth',
          guiColumn: 2,
          ko: {
            name: '뿌리감옥',
            input: '삽 + 웅크리기 + 우클릭',
            description:
              '뿌리 감옥을 소환합니다. 안의 적에게 연속 타격과 강한 구속을 걸고, 밖에서 들어온 적도 제압됩니다.',
          },
          en: {
            name: 'Root Prison',
            input: 'Shovel + sneak + right-click',
            description:
              'Summons a root cage. Repeated hits and strong binding inside; enemies entering from outside are also suppressed.',
          },
          masterLevel: 50,
        },
        {
          id: 'thornField',
          icon: 'slash',
          element: 'earth',
          guiColumn: 3,
          ko: {
            name: '가시밭',
            input: '삽 + 비웅크리기 + 좌클릭',
            description: '주력 공격기. 가시가 솟구치며 적에게 연속 타격을 가합니다.',
          },
          en: {
            name: 'Thorn Field',
            input: 'Shovel + not sneaking + left-click',
            description: 'Main attack skill. Thorns erupt in repeated hits.',
          },
          masterLevel: 50,
        },
        {
          id: 'sporeCloud',
          icon: 'aura',
          element: 'earth',
          guiColumn: 4,
          ko: {
            name: '포자구름',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '전방에 포자 구름을 펼칩니다. 연속 타격과 실명, 간헐적 제압을 겁니다.',
          },
          en: {
            name: 'Spore Cloud',
            input: 'Shovel + sneak + swap hands',
            description: 'Spreads a spore cloud ahead with repeated hits, blindness, and periodic suppression.',
          },
          masterLevel: 50,
        },
        {
          id: 'plantGuard',
          icon: 'leaf',
          element: 'earth',
          guiColumn: 5,
          ko: {
            name: '꽃소환',
            input: '삽 + 비웅크리기 + 점프 + 좌클릭',
            description:
              '다양한 꽃 정원을 소환합니다. 정원이 유지되는 동안 주변 적에게 피해와 제압을 반복합니다.',
          },
          en: {
            name: 'Flower Garden',
            input: 'Shovel + not sneaking + jump + left-click',
            description:
              'Summons a flower garden that repeatedly damages and suppresses nearby foes while it lasts.',
          },
          masterLevel: 50,
        },
        {
          id: 'growth',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '성장',
            description: '공격력이 증가합니다.',
          },
          en: {
            name: 'Growth',
            description: 'Increases damage.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'vineLash',
          icon: 'leaf',
          element: 'earth',
          followUp: true,
          guiColumn: 0,
          chainOf: 'vineWhip',
          ko: {
            name: '식충 줄기',
            input: '덩굴채찍 후 재우클릭',
            description:
              '세로로 솟은 포식 줄기를 소환합니다. 중심에서 바깥으로 채찍이 뻗으며 연속 타격합니다.',
          },
          en: {
            name: 'Carnivorous Stalk',
            input: 'Right-click again after Vine Whip',
            description:
              'Summons tall carnivorous stalks. Whips lash outward from the center in repeated hits.',
          },
        },
        {
          id: 'seedBurst',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          guiColumn: 1,
          chainOf: 'seedBomb',
          ko: {
            name: '숙성 폭발',
            input: '씨앗폭탄 후 손 바꾸기',
            description:
              '활성 씨앗이 있으면 즉시 만렙 성장 후 폭발합니다. 없으면 대상 지점에 연쇄 폭발을 일으킵니다.',
          },
          en: {
            name: 'Ripe Detonation',
            input: 'Swap hands again after Seed Bomb',
            description:
              'If a seed is active, instantly ripens and detonates it. Otherwise, triggers chain explosions at the target.',
          },
        },
        {
          id: 'rootSnare',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          guiColumn: 2,
          chainOf: 'rootPrison',
          ko: {
            name: '뿌리 올가미',
            input: '뿌리감옥 후 재우클릭',
            description: '확대된 뿌리 감옥으로 적을 더 오래 붙잡고 연속 타격합니다.',
          },
          en: {
            name: 'Root Lasso',
            input: 'Right-click again after Root Prison',
            description: 'A larger root cage that binds foes longer with repeated hits.',
          },
        },
        {
          id: 'thornBurst',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          guiColumn: 3,
          chainOf: 'thornField',
          ko: {
            name: '가시 솟구침',
            input: '가시밭 후 좌클릭',
            description: '가시가 연속으로 솟구치며 넓은 범위를 공격합니다.',
          },
          en: {
            name: 'Thorn Eruption',
            input: 'Left-click again after Thorn Field',
            description: 'Thorns erupt in waves across a wider area.',
          },
        },
        {
          id: 'sporeBloom',
          icon: 'aura',
          element: 'earth',
          followUp: true,
          guiColumn: 4,
          chainOf: 'sporeCloud',
          ko: {
            name: '포자 만화',
            input: '포자구름 후 손 바꾸기',
            description: '더 넓고 오래 지속되는 포자 구름으로 실명과 제압을 강화합니다.',
          },
          en: {
            name: 'Spore Flourish',
            input: 'Swap hands again after Spore Cloud',
            description: 'A wider, longer spore cloud with stronger blindness and suppression.',
          },
        },
        {
          id: 'pollenGale',
          icon: 'leaf',
          element: 'earth',
          followUp: true,
          guiColumn: 5,
          chainOf: 'plantGuard',
          ko: {
            name: '꽃가루 폭풍',
            input: '꽃소환 후 점프 + 좌클릭',
            description: '대상 지점에 꽃 정원을 펼치고 꽃가루 폭발로 연속 타격합니다.',
          },
          en: {
            name: 'Pollen Gale',
            input: 'Jump + left-click after Flower Garden',
            description: 'Deploys a flower garden at the target and bursts it with pollen hits.',
          },
        },
        {
          id: 'growthLimit1',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '정원 숙련',
            description:
              '공격력이 증가합니다. 1차 돌파 연계 기술이 해제되고 연계 창이 열립니다.',
          },
          en: {
            name: 'Garden Training',
            description:
              'Increases damage. Unlocks limit-1 combo follow-ups.',
          },
        },
        {
          id: 'overgrowth',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '과성장',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '범위 내 설치 스킬·소환체를 키우고, 장판에서 연속 피해를 줍니다.',
          },
          en: {
            name: 'Overgrowth',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Enlarges deployed skills and summons in range, then deals repeated aura damage from the patch.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'vineLashII',
          icon: 'leaf',
          element: 'earth',
          followUp: true,
          guiColumn: 0,
          chainOf: 'vineLash',
          ko: {
            name: '덩굴 교살',
            input: '덩굴채찍 연계(숙련2)',
            description:
              '맹그로브 뿌리가 나선으로 감싸 오르는 교살 감옥을 소환합니다. 기류가 위로 솟았다가 중앙으로 짓누르며 적을 붙잡습니다.',
          },
          en: {
            name: 'Vine Strangle',
            input: 'Vine Whip follow-up (proficiency 2)',
            description:
              'Summons a mangrove-root helix cage. A whirling force spirals up then crushes inward, binding foes.',
          },
        },
        {
          id: 'seedBurstII',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          guiColumn: 1,
          chainOf: 'seedBurst',
          ko: {
            name: '씨앗 우박',
            input: '씨앗폭탄 연계(숙련2)',
            description: '만렙 즉시 폭발 또는 더 넓은 연쇄 폭발과 추가 폭발을 일으킵니다.',
          },
          en: {
            name: 'Seed Hail',
            input: 'Seed Bomb follow-up (proficiency 2)',
            description: 'Instant max detonation or wider chain blasts plus a bonus burst at the target.',
          },
        },
        {
          id: 'rootSnareII',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          guiColumn: 2,
          chainOf: 'rootSnare',
          ko: {
            name: '대지의 우리',
            input: '뿌리감옥 연계(숙련2)',
            description: '이중 링 감옥으로 더 넓고 높게 적을 붙잡고 연속 타격합니다.',
          },
          en: {
            name: 'Earth Pen',
            input: 'Root Prison follow-up (proficiency 2)',
            description: 'A double-ring cage that binds foes across a wider, taller area with repeated hits.',
          },
        },
        {
          id: 'thornBurstII',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          guiColumn: 3,
          chainOf: 'thornBurst',
          ko: {
            name: '가시 난무',
            input: '가시밭 연계(숙련2)',
            description: '가시가 더 빠르고 넓게 솟구치며 연속 타격합니다.',
          },
          en: {
            name: 'Thorn Flurry',
            input: 'Thorn Field follow-up (proficiency 2)',
            description: 'Thorns erupt faster across a wider area in repeated hits.',
          },
        },
        {
          id: 'sporeBloomII',
          icon: 'aura',
          element: 'earth',
          followUp: true,
          guiColumn: 4,
          chainOf: 'sporeBloom',
          ko: {
            name: '역병 안개',
            input: '포자구름 연계(숙련2)',
            description: '더 넓은 역병 안개로 중독과 강한 제압을 겁니다.',
          },
          en: {
            name: 'Blight Mist',
            input: 'Spore Cloud follow-up (proficiency 2)',
            description: 'A wider blight mist with poison and stronger suppression.',
          },
        },
        {
          id: 'thousandBlossoms',
          icon: 'leaf',
          element: 'earth',
          followUp: true,
          guiColumn: 5,
          chainOf: 'plantGuard',
          ko: {
            name: '만천개화',
            input: '꽃소환 연계(숙련2)',
            description: '대형 꽃 정원과 수렴하는 꽃잎 폭발로 적을 끌어당기며 제압합니다.',
          },
          en: {
            name: 'Thousand Blossoms',
            input: 'Flower Garden follow-up (proficiency 2)',
            description: 'A large flower garden and converging petal bursts that pull and suppress foes.',
          },
        },
        {
          id: 'growthLimit2',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '자연 교리',
            description:
              '공격력이 증가합니다. 연계 입력 시간이 4.0초로 늘고, 1차 돌파 궁극기(과성장)의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Nature Doctrine',
            description:
              'Increases damage. Combo window becomes 4.0s; first limit-break ultimate (Overgrowth) cooldown is halved.',
          },
        },
        {
          id: 'worldTree',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '세계수',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '거대한 세계수를 소환하고, 수관에서 떨어지는 씨앗이 폭발하며 적을 제압합니다.',
          },
          en: {
            name: 'World Tree',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Summons a giant world tree; huge seeds fall from the canopy and explode, suppressing foes.',
          },
        },
      ],
    },
  ],
};
