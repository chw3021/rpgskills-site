import type { ClassDetailDef } from './types';

export const witchDoctorDetail: ClassDetailDef = {
  id: 'witchDoctor',
  order: 31,
  element: { en: 'Poison & Earth', ko: '맹독·대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      {
        tier: 0,
        portraitFile: 'witchDoctor.png',
        en: { title: 'Witch Doctor' },
        ko: { title: '부두술사' },
      },
      {
        tier: 1,
        portraitFile: 'witchDoctor-limit1.png',
        en: { title: 'Reviver' },
        ko: { title: '부활자' },
      },
      {
        tier: 2,
        portraitFile: 'witchDoctor-limit2.png',
        en: { title: 'Immortal' },
        ko: { title: '불멸자' },
      },
    ],
  },
  story: {
    ko: [
      '괭이와 토템으로 부두술을 펼치는 부두술사입니다. 독사의 송곳니·보수 로아·수확·망령·유체이탈·주술로 전장을 다루고, 소생과 렉바로 아군을 지킵니다.',
      '부활자는 바롱 사메디와 계약해 파티의 죽음을 막고, 삶의 순환으로 적을 좀비로 일으킵니다.',
      '불멸자는 죽음을 초월한 영적 존재가 되어 영원의 마법진으로 전장을 지배합니다.',
    ],
    en: [
      'A witch doctor who fights with hoe and totem. Fangs, Bosou, Harvest, Wraith, astral projection, and incantation shape the field while Resurrect and Legba protect allies.',
      'The Reviver contracts Baron Samedi to prevent party deaths and raises harvest-marked foes as zombies.',
      'The Immortal transcends death as a spiritual being and commands the Eternal Magic Circle.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'fangs',
          icon: 'pickaxe',
          element: 'poison',
          ko: {
            name: '독사의송곳니',
            input: '웅크리기 + 손 바꾸기',
            description: '독사의 송곳니 피해를 줍니다.',
          },
          en: {
            name: 'Fangs',
            input: 'Sneak + swap hands',
            description: 'Viper fang damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'bosou',
          icon: 'soul',
          element: 'earth',
          ko: {
            name: '수호의로아:보수',
            input: '우클릭',
            description: '파티 공격력·받는 피해를 조절합니다.',
          },
          en: {
            name: 'Bosou',
            input: 'Right-click',
            description: 'Raises party damage and reduces damage taken.',
          },
          masterLevel: 10,
        },
        {
          id: 'harvest',
          icon: 'pickaxe',
          element: 'earth',
          ko: {
            name: '수확',
            input: '좌클릭',
            description:
              '영혼 미흡수 적에게 재사용 시 체력·허기를 회복하고, 적이 받는 피해를 15% 증가시킵니다.',
          },
          en: {
            name: 'Harvest',
            input: 'Left-click',
            description:
              'Reuse on unharvested souls to heal and raise damage taken by 15%.',
          },
          masterLevel: 50,
        },
        {
          id: 'wraith',
          icon: 'flame',
          element: 'poison',
          ko: {
            name: '망령',
            input: '좌클릭 + 웅크리기',
            description: '망령 피해를 줍니다.',
          },
          en: {
            name: 'Wraith',
            input: 'Left-click + sneak',
            description: 'Wraith damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'astralProjection',
          icon: 'soul',
          element: 'earth',
          ko: {
            name: '유체이탈',
            input: '손 바꾸기 (웅크리기로 종료)',
            description: '유체이탈 상태가 됩니다.',
          },
          en: {
            name: 'Astral Projection',
            input: 'Swap hands (sneak to end early)',
            description: 'Enters astral projection.',
          },
          masterLevel: 1,
        },
        {
          id: 'incantation',
          icon: 'soul',
          element: 'earth',
          ko: {
            name: '주술',
            input: '우클릭 + 웅크리기',
            description: '주술을 사용합니다.',
          },
          en: {
            name: 'Incantation',
            input: 'Right-click + sneak',
            description: 'Casts incantation.',
          },
          masterLevel: 1,
        },
        {
          id: 'resurrect',
          icon: 'soul',
          element: 'earth',
          passive: true,
          ko: {
            name: '소생',
            description:
              '토템 대신 별도 대기시간으로 소생합니다. 파티원도 소생 가능(개인 25초).',
          },
          en: {
            name: 'Resurrect',
            description:
              'Resurrection uses its own cooldown instead of totems. Party members can also resurrect (25s each).',
          },
        },
        {
          id: 'legba',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '중재의로아:렉바',
            description: '대지 저항과 공격력이 증가합니다.',
          },
          en: {
            name: 'Legba',
            description: 'Increases earth resistance and damage.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'zoglinCharge',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          chainOf: 'fangs',
          ko: {
            name: '조글린돌격',
            input: '독사의송곳니 재입력',
            description: '조글린 돌격을 사용합니다. 피해량은 독사의송곳니 레벨에 비례합니다.',
          },
          en: {
            name: 'Zoglin Charge',
            input: 'Use Fangs again',
            description: 'Zoglin charge follow-up. Damage scales with Fangs level.',
          },
        },
        {
          id: 'forbiddenHex',
          icon: 'soul',
          element: 'earth',
          followUp: true,
          chainOf: 'bosou',
          ko: {
            name: '금술',
            input: '보수 로아 재입력',
            description:
              '파티원 체력 20%를 소모해 재생을 주고 잠시 무적으로 만듭니다. 지속은 보수 레벨에 비례합니다.',
          },
          en: {
            name: 'Forbidden Hex',
            input: 'Use Bosou again',
            description:
              'Consumes 20% party HP for regeneration and brief invulnerability. Duration scales with Bosou.',
          },
        },
        {
          id: 'vengefulSpirit',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          chainOf: 'harvest',
          ko: {
            name: '원혼',
            input: '수확 재입력',
            description: '원혼을 사용합니다. 피해량은 수확 레벨에 비례합니다.',
          },
          en: {
            name: 'Vengeful Spirit',
            input: 'Use Harvest again',
            description: 'Vengeful spirit follow-up. Damage scales with Harvest level.',
          },
        },
        {
          id: 'phantomSwoop',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          chainOf: 'wraith',
          ko: {
            name: '팬텀슴격',
            input: '망령 재입력',
            description: '팬텀 슴격을 사용합니다. 피해량은 망령 레벨에 비례합니다.',
          },
          en: {
            name: 'Phantom Swoop',
            input: 'Use Wraith again',
            description: 'Phantom swoop follow-up. Damage scales with Wraith level.',
          },
        },
        {
          id: 'lightFooted',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '가벼운발걸음',
            description: '유체이탈 종료 후 이동 속도·점프 효과를 얻습니다.',
          },
          en: {
            name: 'Light Footed',
            description: 'After astral projection ends, gain speed and jump boost.',
          },
        },
        {
          id: 'totemOfAbundant',
          icon: 'recovery',
          element: 'earth',
          ko: {
            name: '풍요의토템',
            description: '파티원의 허기를 채웁니다.',
          },
          en: {
            name: 'Totem of Abundant',
            description: 'Fills party saturation.',
          },
        },
        {
          id: 'circleOfLife',
          icon: 'book',
          element: 'poison',
          ko: {
            name: '삶의순환',
            description:
              '공격력이 증가합니다. 수확에 영향받은 적이 죽으면 좀비로 변합니다(12초, 최대 6마리). 능력치는 렉바 레벨에 비례.',
          },
          en: {
            name: 'Circle of Life',
            description:
              'More damage. Harvest-marked enemies rise as zombies for 12s (max 6). Stats scale with Legba.',
          },
        },
        {
          id: 'baronSamedi',
          icon: 'soul',
          element: 'poison',
          ultimate: true,
          ko: {
            name: '바롱사메디',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '바롱 사메디를 계약 소환해 파티의 죽음을 막고 공격력을 올립니다.',
          },
          en: {
            name: 'Baron Samedi',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Contracts Baron Samedi to prevent party deaths and raise damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'fangsRush',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          chainOf: 'fangs',
          ko: {
            name: '송곳니쇄도',
            input: '독사의송곳니 재입력',
            description:
              '조글린이 즉시 돌격하고 송곳니·좀비가 해당 위치로 모입니다. 피해량은 독사의송곳니 레벨에 비례.',
          },
          en: {
            name: 'Fangs Rush',
            input: 'Use Fangs again',
            description:
              'Instant zoglin charge; fangs and zombies converge on the spot. Damage scales with Fangs.',
          },
        },
        {
          id: 'frighten',
          icon: 'soul',
          element: 'earth',
          ko: {
            name: '공포',
            description: '수확 사용 시 적을 제압합니다.',
          },
          en: {
            name: 'Frighten',
            description: 'Harvest also suppresses enemies.',
          },
        },
        {
          id: 'sacrifice',
          icon: 'poison',
          element: 'poison',
          followUp: true,
          chainOf: 'wraith',
          ko: {
            name: '희생',
            input: '망령 재입력',
            description:
              '좀비를 폭발시킵니다. 없으면 6마리 소환. 죽음의 기사는 유지되며 피해가 두 배. 피해량은 망령 레벨에 비례.',
          },
          en: {
            name: 'Sacrifice',
            input: 'Use Wraith again',
            description:
              'Explodes zombies or summons six. Death knight persists with double damage. Scales with Wraith.',
          },
        },
        {
          id: 'totemOfBravery',
          icon: 'recovery',
          element: 'earth',
          ko: {
            name: '용기의토템',
            description: '파티의 해로운 효과를 제거합니다.',
          },
          en: {
            name: 'Totem of Bravery',
            description: 'Removes negative effects from party.',
          },
        },
        {
          id: 'immortality',
          icon: 'soul',
          element: 'earth',
          ko: {
            name: '불멸',
            description: '유체이탈 사용 시 자신의 소생 대기시간이 초기화됩니다.',
          },
          en: {
            name: 'Immortality',
            description: 'Astral projection resets your resurrect cooldown.',
          },
        },
        {
          id: 'attunement',
          icon: 'book',
          element: 'poison',
          passive: true,
          chainOf: 'legba',
          ko: {
            name: '영적조율',
            description:
              '공격력·방어력이 증가하고 바롱사메디 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Attunement',
            description:
              'More damage and armor; shorter Baron Samedi cooldown.',
          },
        },
        {
          id: 'eternalMagicCircle',
          icon: 'poison',
          element: 'poison',
          ultimate: true,
          ko: {
            name: '영원의 마법진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '마법진을 펼쳐 파티에 힘·재생, 적에 약함·둔화를 주고 죽음의 기사를 소환합니다. 15초 후 누적 피해에 비례해 폭발합니다.',
          },
          en: {
            name: 'Eternal Magic Circle',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Magic circle buffs party, debuffs foes, summons a death knight, then explodes after 15s scaling with damage dealt on it.',
          },
        },
      ],
    },
  ],
};
