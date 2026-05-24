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
      '삽으로 전장에 요리를 펼치는 요리사입니다. 디저트비·버섯탕·나눔밥상·멜론벽·구운요리·프라이팬 휘두르기로 아군을 돕고, 포만감으로 공격력을 키웁니다.',
      '셰프는 슈가러시·스톡팟·한상차림·식칼 연속 베기로 지원을 강화하고, 특별메뉴로 화려한 일격을 냅니다.',
      '대가는 치즈분수·마이야르·국자 휘두르기·헬키친으로 전장을 뜨거운 주방처럼 지배합니다.',
    ],
    en: [
      'A cook who feeds the front line with a shovel. Dessert Rain, Mushroom Soup, Shared Table, Melon Wall, Grilled Dish, and Pan Whirl support allies while Saturation raises damage.',
      'The Chef adds Sugar Rush, Stockpot, Feast Spread, and Knife Flurry, then finishes with Special Menu in combat mode.',
      'The Demeter rules the field with Cheese Fountain, Maillard, Ladle Swing, and Hell Kitchen.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'dessertBee',
          icon: 'pickaxe',
          element: 'fire',
          guiColumn: 0,
          ko: {
            name: '디저트비',
            input: '삽 + 손 바꾸기',
            description: '달콤한 비로 아군을 강화합니다.',
          },
          en: {
            name: 'Dessert Rain',
            input: 'Shovel + swap hands',
            description: 'Sweet rain buffs allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'mushroomSoup',
          icon: 'recovery',
          element: 'fire',
          guiColumn: 1,
          ko: {
            name: '버섯탕',
            input: '삽 + 웅크리기 + 우클릭',
            description: '뜨거운 버섯탕으로 아군을 회복합니다.',
          },
          en: {
            name: 'Mushroom Soup',
            input: 'Shovel + sneak + right-click',
            description: 'Hot mushroom soup heals allies.',
          },
          masterLevel: 50,
        },
        {
          id: 'sharedTable',
          icon: 'potion',
          element: 'fire',
          guiColumn: 2,
          ko: {
            name: '나눔밥상',
            input: '삽 + 우클릭',
            description:
              '주변에 음식을 나눠 아군·적에게 서서히 효과를 줍니다. 몬스터에게는 불타는 덤불 공격을 합니다.',
          },
          en: {
            name: 'Shared Table',
            input: 'Shovel + right-click',
            description:
              'Gradually shares food effects with nearby allies and foes. Burns mobs with a flaming brush.',
          },
          masterLevel: 50,
        },
        {
          id: 'chefGuard',
          icon: 'shield',
          element: 'fire',
          guiColumn: 3,
          ko: {
            name: '멜론벽',
            input: '삽 + 좌클릭',
            description:
              '주변 아군에게 잠시 피해 저항을 부여하고, 충돌한 몹을 기절시킵니다.',
          },
          en: {
            name: 'Melon Wall',
            input: 'Shovel + left-click',
            description:
              'Briefly grants nearby allies damage resistance and stuns colliding mobs.',
          },
          masterLevel: 1,
        },
        {
          id: 'grilledDish',
          icon: 'flame',
          element: 'fire',
          guiColumn: 4,
          ko: {
            name: '구운요리',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '목표 주변에 구운 요리를 떨어뜨립니다.',
          },
          en: {
            name: 'Grilled Dish',
            input: 'Shovel + sneak + swap hands',
            description: 'Drops grilled meals around the target.',
          },
          masterLevel: 50,
        },
        {
          id: 'panWhirl',
          icon: 'flame',
          element: 'fire',
          guiColumn: 5,
          ko: {
            name: '프라이팬 휘두르기',
            input: '삽 + 웅크리기 + 좌클릭',
            description: '전방에 화염 피해를 줍니다. 숙련도에 따라 식칼·국자로 연계됩니다.',
          },
          en: {
            name: 'Pan Whirl',
            input: 'Shovel + sneak + left-click',
            description: 'Deals flame damage in front. Chains into knife and ladle at higher proficiency.',
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
          id: 'sugarRush',
          icon: 'rush',
          element: 'fire',
          guiColumn: 9,
          chainOf: 'dessertBee',
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
          id: 'stockpot',
          icon: 'recovery',
          element: 'fire',
          guiColumn: 10,
          chainOf: 'mushroomSoup',
          ko: {
            name: '스톡팟',
            description: '버섯탕이 주변 아군을 강화하고 적을 불태웁니다.',
          },
          en: {
            name: 'Stockpot',
            description: 'Mushroom Soup strengthens allies and burns enemies.',
          },
        },
        {
          id: 'feastSpread',
          icon: 'recovery',
          element: 'fire',
          guiColumn: 11,
          chainOf: 'sharedTable',
          ko: {
            name: '한상차림',
            description: '나눔밥상이 더 넓은 범위로 천천히 회복·해로운 효과를 나눕니다.',
          },
          en: {
            name: 'Feast Spread',
            description: 'Shared Table spreads gradual heals and debuffs farther.',
          },
        },
        {
          id: 'chefsGuard',
          icon: 'shield',
          element: 'fire',
          guiColumn: 12,
          chainOf: 'chefGuard',
          ko: {
            name: '셰프의수호',
            description: '멜론벽 사용 시 주변 아군에게 흡수 체력을 추가로 부여합니다.',
          },
          en: {
            name: "Chef's Guard",
            description: 'Melon Wall also grants nearby allies absorption.',
          },
        },
        {
          id: 'spicyPlating',
          icon: 'flame',
          element: 'fire',
          guiColumn: 13,
          chainOf: 'grilledDish',
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
          id: 'knifeFlurry',
          icon: 'fist',
          element: 'fire',
          guiColumn: 14,
          chainOf: 'panWhirl',
          followUp: true,
          ko: {
            name: '식칼 연속 베기',
            input: '삽 + 웅크리기 + 좌클릭 (연계)',
            description: '프라이팬 휘두르기 직후 전방 적에게 연속 화염 베기를 가합니다.',
          },
          en: {
            name: 'Knife Flurry',
            input: 'Shovel + sneak + left-click (chain)',
            description: 'After Pan Whirl, slashes nearby foes with rapid flame cuts.',
          },
        },
        {
          id: 'culinaryKnack',
          icon: 'book',
          element: 'fire',
          passive: true,
          guiColumn: 16,
          ko: {
            name: '요리솜씨',
            description: '공격력이 증가합니다. 치료받은 파티원의 피해도 증가합니다.',
          },
          en: {
            name: 'Culinary Knack',
            description: 'Increases damage; healed allies also deal more damage.',
          },
        },
        {
          id: 'specialMenu',
          icon: 'flame',
          element: 'fire',
          ultimate: true,
          guiColumn: 17,
          ko: {
            name: '특별메뉴',
            input: '삽 + 웅크리기 + 전투 숫자키 4(핫바 4번)',
            description:
              '전투 모드에서만 발동합니다. 피해량은 경험치 레벨에 비례합니다.',
          },
          en: {
            name: 'Special Menu',
            input: 'Shovel + sneak + combat hotbar 4',
            description: 'Combat mode only. Damage scales with your level.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'cheeseFountain',
          icon: 'sun',
          element: 'fire',
          guiColumn: 18,
          chainOf: 'dessertBee',
          ko: {
            name: '치즈분수',
            description: '디저트비에 녹아내린 치즈가 추가 화염 피해를 줍니다.',
          },
          en: {
            name: 'Cheese Fountain',
            description: 'Dessert Rain adds molten cheese fire damage.',
          },
        },
        {
          id: 'maillard',
          icon: 'flame',
          element: 'fire',
          guiColumn: 22,
          chainOf: 'grilledDish',
          ko: {
            name: '마이야르',
            description: '구운요리의 지속 화염 피해가 강화됩니다.',
          },
          en: {
            name: 'Maillard',
            description: 'Grilled Dish burn damage is empowered.',
          },
        },
        {
          id: 'ladleSwing',
          icon: 'flame',
          element: 'fire',
          guiColumn: 23,
          chainOf: 'panWhirl',
          followUp: true,
          ko: {
            name: '국자 휘두르기',
            input: '삽 + 웅크리기 + 좌클릭 (연계)',
            description: '식칼 연속 베기 직후 넓은 범위의 강화 화염 타격을 가합니다.',
          },
          en: {
            name: 'Ladle Swing',
            input: 'Shovel + sneak + left-click (chain)',
            description: 'After Knife Flurry, sweeps a wide empowered flame strike.',
          },
        },
        {
          id: 'bigEater',
          icon: 'book',
          element: 'fire',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '대식가',
            description: '공격력이 증가합니다. 특별메뉴 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Big Eater',
            description: 'Increases damage. Special Menu cooldown is halved.',
          },
        },
        {
          id: 'hellKitchen',
          icon: 'lava',
          element: 'fire',
          ultimate: true,
          guiColumn: 26,
          ko: {
            name: '헬키친',
            input: '삽 + 웅크리기 + 전투 숫자키 5(핫바 5번)',
            description:
              '전투 모드에서만 발동합니다. 피해량은 경험치 레벨에 비례합니다.',
          },
          en: {
            name: 'Hell Kitchen',
            input: 'Shovel + sneak + combat hotbar 5',
            description: 'Combat mode only. Damage scales with your level.',
          },
        },
      ],
    },
  ],
};
