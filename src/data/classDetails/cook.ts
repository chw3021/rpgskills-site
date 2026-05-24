import type { ClassDetailDef } from './types';

export const cookDetail: ClassDetailDef = {
  id: 'cook',
  order: 29,
  element: { en: 'Flame', ko: '화염' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'cook.png', en: { title: 'Cook' }, ko: { title: '요리사' } },
      { tier: 1, portraitFile: 'cook-limit1.png', en: { title: 'Chef' }, ko: { title: '셰프' } },
      { tier: 2, portraitFile: 'cook-limit2.png', en: { title: 'Demeter' }, ko: { title: '대가' } },
    ],
  },
  story: {
    ko: [
      '삽으로 전장에 요리를 펼치는 요리사입니다. 디저트비·버섯스파·베리샐러드·멜론벽·구운요리로 아군을 돕고, 포만감으로 공격력을 키웁니다.',
      '셰프는 여러 조리 도구를 능숙히 다루며 플람베·스톡팟·연회준비로 지원 리듬을 완성하고, 특별메뉴로 화려한 일격을 냅니다.',
      '대가는 요리의 신에 달한 경지로 헬키친·황금코스·왕실뷔페로 전장 전체를 식탁처럼 지배합니다.',
    ],
    en: [
      'A cook who feeds the front line with a shovel. Dessert rain, mushroom spa, berry salad, melon wall, and grilled dishes support allies while Saturation raises damage.',
      'The Chef juggles many tools at once—flambé, stockpot, and banquet prep—then finishes with Special Menu.',
      'The Demeter stands as a grand master of cuisine, ruling the field with Hell Kitchen, golden course, and royal buffet.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'dessertRain',
          icon: 'pickaxe',
          element: 'fire',
          ko: {
            name: '디저트비',
            input: '삽 + 비웅크리기 + 손 바꾸기',
            description: '달콤한 비로 아군을 강화합니다.',
          },
          en: {
            name: 'Dessert Rain',
            input: 'Shovel + not sneaking + swap hands',
            description: 'Sweet rain buffs allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'mushSpa',
          icon: 'recovery',
          element: 'fire',
          ko: {
            name: '버섯스파',
            input: '삽 + 웅크리기 + 우클릭',
            description: '뜨거운 버섯탕으로 아군을 회복합니다.',
          },
          en: {
            name: 'Mushroom Spa',
            input: 'Shovel + sneak + right-click',
            description: 'Hot mushroom spa heals allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'berrySalad',
          icon: 'potion',
          element: 'fire',
          ko: {
            name: '베리샐러드',
            input: '삽 + 비웅크리기 + 우클릭',
            description:
              '파티의 허기·독·시듦·실명·멀미를 제거합니다. 몬스터에게는 불타는 덤불 공격을 합니다.',
          },
          en: {
            name: 'Berry Salad',
            input: 'Shovel + not sneaking + right-click',
            description:
              'Clears hunger, poison, wither, blindness, and nausea for party. Burns mobs with flaming brush.',
          },
          masterLevel: 50,
        },
        {
          id: 'melonWall',
          icon: 'shield',
          element: 'fire',
          ko: {
            name: '멜론벽',
            input: '삽 + 공중 + 비웅크리기 + 좌클릭',
            description: '멜론벽을 세우고 충돌한 몹을 기절시킵니다.',
          },
          en: {
            name: 'Melon Wall',
            input: 'Shovel + airborne + not sneaking + left-click',
            description: 'Raises a melon wall; colliding mobs are stunned.',
          },
          masterLevel: 1,
        },
        {
          id: 'grilledDishes',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '구운요리',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '목표 주변에 구운 요리를 떨어뜨립니다.',
          },
          en: {
            name: 'Grilled Dishes',
            input: 'Shovel + sneak + swap hands',
            description: 'Drops grilled meals around the target.',
          },
          masterLevel: 50,
        },
        {
          id: 'saturation',
          icon: 'book',
          element: 'fire',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '포만감',
            description: '공격력이 증가합니다. 치료받은 파티원의 피해도 증가합니다.',
          },
          en: {
            name: 'Saturation',
            description: 'Increases your damage; healed allies also deal more damage.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'flambe',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '플람베',
            description: '요리사 공격이 지원형 합산 화염 피해를 사용합니다.',
          },
          en: {
            name: 'Flambé',
            description: 'Cook attacks use support-style additive fire damage.',
          },
        },
        {
          id: 'stockpot',
          icon: 'recovery',
          element: 'fire',
          ko: {
            name: '스톡팟',
            description: '버섯스파가 주변 아군을 강화하고 적을 불태웁니다.',
          },
          en: {
            name: 'Stockpot',
            description: 'Mushroom Spa strengthens nearby allies and burns enemies.',
          },
        },
        {
          id: 'sugarRush',
          icon: 'rush',
          element: 'fire',
          ko: {
            name: '슈가러시',
            description: '디저트비가 속도·점프력·야간 투시를 부여합니다.',
          },
          en: {
            name: 'Sugar Rush',
            description: 'Dessert Rain grants speed, jump boost, and night vision.',
          },
        },
        {
          id: 'chefsGuard',
          icon: 'shield',
          element: 'fire',
          ko: {
            name: '셰프의수호',
            description: '멜론벽이 공간을 지키고 충돌한 몹을 기절시킵니다.',
          },
          en: {
            name: "Chef's Guard",
            description: 'Melon Wall protects space and stuns colliding mobs.',
          },
        },
        {
          id: 'spicyPlating',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '매콤한플레이팅',
            description: '치료받은 파티원이 포만감으로 추가 피해를 얻습니다.',
          },
          en: {
            name: 'Spicy Plating',
            description: 'Healed allies gain extra damage through Saturation.',
          },
        },
        {
          id: 'banquetPrep',
          icon: 'sun',
          element: 'fire',
          ko: {
            name: '연회준비',
            description: '화염 요리로 지원 리듬을 유지합니다.',
          },
          en: {
            name: 'Banquet Prep',
            description: 'Fire-themed meals keep the support rhythm active.',
          },
        },
        {
          id: 'saturationLimit1',
          icon: 'book',
          element: 'fire',
          passive: true,
          ko: { name: '포만감', description: '공격력이 증가합니다. 치료받은 파티원의 피해도 증가합니다.' },
          en: { name: 'Saturation', description: 'Increases damage; healed allies also deal more damage.' },
        },
        {
          id: 'specialMenu',
          icon: 'flame',
          element: 'fire',
          ultimate: true,
          ko: {
            name: '특별메뉴',
            input: '삽 + 웅크리기 + 전투 숫자키 4(핫바 4번) 또는 삽 버리기(Q)',
            description:
              '전투 모드에서만 발동합니다. 피해량은 경험치 레벨에 비례합니다. 2차 한계 돌파 시 헬키친 계수로 강화됩니다.',
          },
          en: {
            name: 'Special Menu',
            input: 'Shovel + sneak + combat hotbar 4 or drop shovel (Q)',
            description:
              'Combat mode only. Damage scales with level. At second limit break, uses Hell Kitchen coefficients.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'infernoCatering',
          icon: 'lava',
          element: 'fire',
          ko: {
            name: '지옥출장요리',
            description: '특별메뉴가 더 강한 헬키친 피해로 강화됩니다.',
          },
          en: {
            name: 'Inferno Catering',
            description: 'Special Menu upgrades to stronger Hell Kitchen damage.',
          },
        },
        {
          id: 'royalBuffet',
          icon: 'recovery',
          element: 'fire',
          ko: {
            name: '왕실뷔페',
            description: '연회 효과가 주변 파티원에게 퍼집니다.',
          },
          en: {
            name: 'Royal Buffet',
            description: 'Banquet effects spread to nearby party members.',
          },
        },
        {
          id: 'dragonWok',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '드래곤웍',
            description: '대부분의 공격형 요리 효과가 화염 공격으로 처리됩니다.',
          },
          en: {
            name: 'Dragon Wok',
            description: 'Most offensive cook effects count as flame attacks.',
          },
        },
        {
          id: 'emergencyRations',
          icon: 'recovery',
          element: 'fire',
          ko: {
            name: '비상식량',
            description: '특별메뉴가 체력 증가·포만·재생을 부여합니다.',
          },
          en: {
            name: 'Emergency Rations',
            description: 'Special Menu grants health boost, saturation, and regeneration.',
          },
        },
        {
          id: 'goldenCourse',
          icon: 'sun',
          element: 'fire',
          ko: {
            name: '황금코스',
            description: '화려한 식사가 피해와 회복 지역을 표시합니다.',
          },
          en: {
            name: 'Golden Course',
            description: 'Grand meal particles mark the damage and heal area.',
          },
        },
        {
          id: 'kitchenRally',
          icon: 'book',
          element: 'fire',
          ko: {
            name: '주방집결',
            description: '요리사의 핵심은 파티 지원입니다.',
          },
          en: {
            name: 'Kitchen Rally',
            description: 'Party support remains the Cook identity.',
          },
        },
        {
          id: 'saturationLimit2',
          icon: 'book',
          element: 'fire',
          passive: true,
          ko: {
            name: '포만감',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Saturation',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'hellKitchen',
          icon: 'lava',
          element: 'fire',
          chainOf: 'specialMenu',
          ko: {
            name: '헬키친',
            description:
              '특별메뉴와 같은 입력(별도 단축키 없음). 피해 수치는 특별메뉴 슬롯에 표시됩니다.',
          },
          en: {
            name: 'Hell Kitchen',
            description:
              'Same inputs as Special Menu (no extra keybind). Damage values shown on the Special Menu slot.',
          },
        },
      ],
    },
  ],
};
