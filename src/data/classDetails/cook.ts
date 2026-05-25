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
      '셰프는 초코타워·스톡팟·한상차림·식칼 연속 베기로 지원과 화력을 강화하고, 특별메뉴로 화려한 일격을 냅니다.',
      '대가는 치즈분수·끓어넘침·거대멜론·멜론토네이도·불쇼·마이야르·국자 휘두르기·헬키친으로 전장을 뜨거운 주방처럼 지배합니다.',
    ],
    en: [
      'A cook who feeds the front line with a shovel. Dessert Rain, Mushroom Soup, Shared Table, Melon Wall, Grilled Dish, and Pan Whirl support allies while Saturation raises damage.',
      'The Chef adds Chocolate Tower, Stockpot, Feast Spread, and Knife Flurry, then finishes with Special Menu in combat mode.',
      'The Demeter rules the field with Cheese Fountain, Overflow, Giant Melon, Melon Tornado, Fire Show, Maillard, Ladle Swing, and Hell Kitchen.',
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
            description:
              '달콤한 비로 적에게 피해를 주고, 주변 아군과 본인에게 속도·야간 투시를 부여합니다.',
          },
          en: {
            name: 'Dessert Rain',
            input: 'Shovel + swap hands',
            description:
              'Sweet rain damages foes and grants Speed and Night Vision to nearby allies and yourself.',
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
            description:
              '뜨거운 버섯탕으로 적에게 피해를 주고, 위쪽에 있는 아군과 본인을 회복합니다.',
          },
          en: {
            name: 'Mushroom Soup',
            input: 'Shovel + sneak + right-click',
            description:
              'Hot mushroom soup damages foes and heals allies above you and yourself.',
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
              '밥상을 던져 주변에 음식을 나눕니다. 아군은 회복, 적은 화상을 입습니다.',
          },
          en: {
            name: 'Shared Table',
            input: 'Shovel + right-click',
            description:
              'Throws tables to share food. Heals allies, burns enemies.',
          },
          masterLevel: 10,
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
              '주변 아군을 회복하고 적에게 피해·기절을 줍니다.',
          },
          en: {
            name: 'Melon Wall',
            input: 'Shovel + left-click',
            description: 'Heals nearby allies and damages and stuns enemies.',
          },
          masterLevel: 50,
        },
        {
          id: 'grilledDish',
          icon: 'flame',
          element: 'fire',
          guiColumn: 4,
          ko: {
            name: '구운요리',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '목표 주변에 구운 요리를 떨어뜨려 다단히트 피해를 줍니다.',
          },
          en: {
            name: 'Grilled Dish',
            input: 'Shovel + sneak + swap hands',
            description: 'Drops grilled meals around the target for multi-hit damage.',
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
          id: 'chocolateTower',
          icon: 'rush',
          element: 'fire',
          guiColumn: 9,
          followUp: true,
          chainOf: 'dessertBee',
          ko: {
            name: '초코타워',
            input: '디저트비 직후 삽 + 손 바꾸기',
            description:
              '초콜릿 기둥으로 적에게 피해를 주고, 아군·본인에게 속도·야간 투시를 부여합니다.',
          },
          en: {
            name: 'Chocolate Tower',
            input: 'Shovel + swap hands after Dessert Rain',
            description:
              'Chocolate pillars damage foes and grant Speed and Night Vision to allies and yourself.',
          },
        },
        {
          id: 'stockpot',
          icon: 'recovery',
          element: 'fire',
          guiColumn: 10,
          followUp: true,
          chainOf: 'mushroomSoup',
          ko: {
            name: '스톡팟',
            input: '버섯탕 직후 삽 + 웅크리기 + 우클릭',
            description:
              '끓는 스톡으로 적에게 피해를 주고, 위쪽 아군·본인을 회복합니다.',
          },
          en: {
            name: 'Stockpot',
            input: 'Shovel + sneak + right-click after Mushroom Soup',
            description:
              'Boiling stock damages foes and heals allies above you and yourself.',
          },
        },
        {
          id: 'feastSpread',
          icon: 'recovery',
          element: 'fire',
          guiColumn: 11,
          passive: true,
          chainOf: 'sharedTable',
          ko: {
            name: '한상차림',
            description:
              '나눔밥상 투사체가 맞은 대상 기준 반경 3블록, 2초간 확산합니다. 아군 1초 무적, 적 1초 기절.',
          },
          en: {
            name: 'Feast Spread',
            description:
              'On Shared Table hit, spreads in a 3-block radius for 2s. Allies gain 1s invulnerability; enemies are stunned for 1s.',
          },
        },
        {
          id: 'giantMelon',
          icon: 'shield',
          element: 'fire',
          guiColumn: 12,
          followUp: true,
          chainOf: 'chefGuard',
          ko: {
            name: '거대멜론',
            input: '멜론벽 직후 삽 + 좌클릭',
            description:
              '거대 멜론이 낙하하며 폭발 피해와 기절을 줍니다.',
          },
          en: {
            name: 'Giant Melon',
            input: 'Shovel + left-click after Melon Wall',
            description: 'A giant melon falls for explosive damage and stun.',
          },
        },
        {
          id: 'fireShow',
          icon: 'flame',
          element: 'fire',
          guiColumn: 13,
          followUp: true,
          chainOf: 'grilledDish',
          ko: {
            name: '불쇼',
            input: '구운요리 직후 삽 + 웅크리기 + 손 바꾸기',
            description: '화염 연출로 8회 타격 피해를 줍니다.',
          },
          en: {
            name: 'Fire Show',
            input: 'Shovel + sneak + swap hands after Grilled Dish',
            description: 'Flame performance deals damage in 8 hits.',
          },
        },
        {
          id: 'knifeFlurry',
          icon: 'fist',
          element: 'fire',
          guiColumn: 14,
          followUp: true,
          chainOf: 'panWhirl',
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
            description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.',
          },
          en: {
            name: 'Culinary Knack',
            description: 'Increases damage. Limit 1 combo skills unlocked.',
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
            description: '전투 모드에서만 발동합니다. 피해량은 경험치 레벨에 비례합니다.',
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
          followUp: true,
          chainOf: 'chocolateTower',
          ko: {
            name: '치즈분수',
            input: '초코타워 직후 삽 + 손 바꾸기',
            description:
              '치즈 분수로 적에게 피해를 주고, 아군·본인에게 속도·야간 투시를 부여합니다.',
          },
          en: {
            name: 'Cheese Fountain',
            input: 'Shovel + swap hands after Chocolate Tower',
            description:
              'Cheese fountain damages foes and grants Speed and Night Vision to allies and yourself.',
          },
        },
        {
          id: 'overflow',
          icon: 'lava',
          element: 'fire',
          guiColumn: 19,
          followUp: true,
          chainOf: 'stockpot',
          ko: {
            name: '끓어넘침',
            input: '스톡팟 직후 삽 + 웅크리기 + 우클릭',
            description:
              '끓어 넘친 국물로 적에게 피해를 주고, 위쪽 아군·본인을 회복합니다.',
          },
          en: {
            name: 'Overflow',
            input: 'Shovel + sneak + right-click after Stockpot',
            description:
              'Overflowing broth damages foes and heals allies above you and yourself.',
          },
        },
        {
          id: 'melonTornado',
          icon: 'storm',
          element: 'fire',
          guiColumn: 21,
          followUp: true,
          chainOf: 'giantMelon',
          ko: {
            name: '멜론토네이도',
            input: '거대멜론 직후 삽 + 좌클릭',
            description:
              '멜론 토네이도가 이동하며 지속 피해를 줍니다.',
          },
          en: {
            name: 'Melon Tornado',
            input: 'Shovel + left-click after Giant Melon',
            description: 'A melon tornado moves forward dealing sustained damage.',
          },
        },
        {
          id: 'maillard',
          icon: 'flame',
          element: 'fire',
          guiColumn: 22,
          followUp: true,
          chainOf: 'fireShow',
          ko: {
            name: '마이야르',
            input: '불쇼 직후 삽 + 웅크리기 + 손 바꾸기',
            description: '마이야르 반응 화염으로 10회 타격 피해를 줍니다.',
          },
          en: {
            name: 'Maillard',
            input: 'Shovel + sneak + swap hands after Fire Show',
            description: 'Maillard flame deals damage in 10 hits.',
          },
        },
        {
          id: 'ladleSwing',
          icon: 'flame',
          element: 'fire',
          guiColumn: 23,
          followUp: true,
          chainOf: 'panWhirl',
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
            description: '전투 모드에서만 발동합니다. 피해량은 경험치 레벨에 비례합니다.',
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
