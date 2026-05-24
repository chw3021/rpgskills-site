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
      '삽으로 땅을 다루며 식물로 적을 묶는 원예가입니다. 덩굴채찍·씨앗폭탄·뿌리감옥·가시밭·포자구름으로 제압하고, 식물소환과 성장으로 전장을 지킵니다.',
      '숙련 1에서 기본 스킬 재입력 연계가 열리고 과성장으로 광역 뿌리 폭발을 씁니다. 숙련 2에서 연계가 강화되고 세계수로 더 넓은 제압이 가능합니다.',
      '조물주는 식물을 자유자재로 다루고, 자연신은 세계수 꼭대기에서 숲 전체를 거느리듯 전장을 지배합니다.',
    ],
    en: [
      'A horticulturist who binds foes with plants wielding a shovel. Vine whip, seed bomb, root prison, thorn field, and spore cloud suppress while Plant Guard and Growth hold the line.',
      'Proficiency 1 unlocks follow-up combos on base skills and Overgrowth for a wide root burst. Proficiency 2 empowers combos and adds World Tree for wider suppression.',
      'The Flower Mage commands plants at will; Flora sits atop the world tree, ruling the battlefield with an even wider World Tree.',
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
          ko: {
            name: '덩굴채찍',
            input: '삽 + 비웅크리기 + 우클릭',
            description: '전방 적을 덩굴로 묶습니다.',
          },
          en: {
            name: 'Vine Whip',
            input: 'Shovel + not sneaking + right-click',
            description: 'Binds enemies ahead with vines.',
          },
          masterLevel: 50,
        },
        {
          id: 'seedBomb',
          icon: 'storm',
          element: 'earth',
          ko: {
            name: '씨앗폭탄',
            input: '삽 + 비웅크리기 + 손 바꾸기',
            description: '씨앗을 던져 폭발시킵니다.',
          },
          en: {
            name: 'Seed Bomb',
            input: 'Shovel + not sneaking + swap hands',
            description: 'Throws seeds that explode.',
          },
          masterLevel: 50,
        },
        {
          id: 'rootPrison',
          icon: 'spike',
          element: 'earth',
          ko: {
            name: '뿌리감옥',
            input: '삽 + 웅크리기 + 우클릭',
            description: '뿌리 감옥으로 광역 제압합니다.',
          },
          en: {
            name: 'Root Prison',
            input: 'Shovel + sneak + right-click',
            description: 'Area root suppression.',
          },
          masterLevel: 50,
        },
        {
          id: 'thornField',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '가시밭',
            input: '삽 + 비웅크리기 + 좌클릭',
            description: '가시밭을 펼쳐 피해를 줍니다.',
          },
          en: {
            name: 'Thorn Field',
            input: 'Shovel + not sneaking + left-click',
            description: 'Spreads damaging thorns.',
          },
          masterLevel: 50,
        },
        {
          id: 'sporeCloud',
          icon: 'aura',
          element: 'earth',
          ko: {
            name: '포자구름',
            input: '삽 + 웅크리기 + 손 바꾸기',
            description: '포자로 적의 시야를 가립니다',
          },
          en: {
            name: 'Spore Cloud',
            input: 'Shovel + sneak + swap hands',
            description: 'Blinds enemies with spores',
          },
          masterLevel: 50,
        },
        {
          id: 'plantGuard',
          icon: 'leaf',
          element: 'earth',
          ko: {
            name: '식물소환',
            input: '삽 + 비웅크리기 + 점프 + 좌클릭',
            description: '식물 수호자를 소환해 주변 적에게 피해를 주고 묶습니다.',
          },
          en: {
            name: 'Plant Guard',
            input: 'Shovel + not sneaking + jump + left-click',
            description: 'Summons a plant guardian that damages and roots nearby foes.',
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
          ko: {
            name: '덩굴연타',
            input: '덩굴채찍 후 재우클릭',
            description: '덩굴채찍 사용 후 짧은 시간 안에 재우클릭. 피해량은 덩굴채찍 레벨에 비례합니다.',
          },
          en: {
            name: 'Vine Lash',
            input: 'Right-click again after Vine Whip',
            description: 'Within a short window after Vine Whip, right-click again. Damage scales with Vine Whip level.',
          },
        },
        {
          id: 'seedBurst',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          ko: {
            name: '씨앗연쇄',
            input: '씨앗폭탄 후 손 바꾸기',
            description: '씨앗폭탄 사용 후 짧은 시간 안에 손 바꾸기. 피해량은 씨앗폭탄 레벨에 비례합니다.',
          },
          en: {
            name: 'Seed Burst',
            input: 'Swap hands again after Seed Bomb',
            description: 'Within a short window after Seed Bomb, swap hands again. Damage scales with Seed Bomb level.',
          },
        },
        {
          id: 'rootSnare',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          ko: {
            name: '뿌리덫',
            input: '뿌리감옥 후 재우클릭',
            description: '뿌리감옥 사용 후 짧은 시간 안에 재우클릭. 피해량은 뿌리감옥 레벨에 비례합니다.',
          },
          en: {
            name: 'Root Snare',
            input: 'Right-click again after Root Prison',
            description: 'Within a short window after Root Prison, right-click again. Damage scales with Root Prison level.',
          },
        },
        {
          id: 'thornBurst',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '가시폭발',
            input: '가시밭 후 좌클릭',
            description: '가시밭 사용 후 짧은 시간 안에 좌클릭. 피해량은 가시밭 레벨에 비례합니다.',
          },
          en: {
            name: 'Thorn Burst',
            input: 'Left-click again after Thorn Field',
            description: 'Within a short window after Thorn Field, left-click again. Damage scales with Thorn Field level.',
          },
        },
        {
          id: 'sporeBloom',
          icon: 'aura',
          element: 'earth',
          followUp: true,
          ko: {
            name: '포자만개',
            input: '포자구름 후 손 바꾸기',
            description: '포자구름 사용 후 짧은 시간 안에 손 바꾸기. 피해량은 포자구름 레벨에 비례합니다.',
          },
          en: {
            name: 'Spore Bloom',
            input: 'Swap hands again after Spore Cloud',
            description: 'Within a short window after Spore Cloud, swap hands again. Damage scales with Spore Cloud level.',
          },
        },
        {
          id: 'growthLimit1',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: { name: '성장', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Growth', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'overgrowth',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '과성장',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '전투 모드에서만 발동합니다. 광역 뿌리 폭발로 적을 오래 묶습니다. 숙련 2에서 재사용 대기 35초/70초.',
          },
          en: {
            name: 'Overgrowth',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Combat mode only. Large root burst with a long hold. Proficiency 2 shortens cooldown to 35s / 70s.',
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
          ko: {
            name: '맹렬덩굴',
            input: '덩굴채찍 연계(숙련2)',
            description: '숙련 2에서 덩굴연타가 강화됩니다. 피해량은 덩굴채찍 레벨에 비례합니다.',
          },
          en: {
            name: 'Vine Lash II',
            input: 'Vine Whip follow-up (proficiency 2)',
            description: 'Empowered Vine Lash at proficiency 2. Damage scales with Vine Whip level.',
          },
        },
        {
          id: 'seedBurstII',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          ko: {
            name: '격렬씨앗연쇄',
            input: '씨앗폭탄 연계(숙련2)',
            description: '숙련 2에서 씨앗연쇄가 강화됩니다. 피해량은 씨앗폭탄 레벨에 비례합니다.',
          },
          en: {
            name: 'Seed Burst II',
            input: 'Seed Bomb follow-up (proficiency 2)',
            description: 'Empowered Seed Burst at proficiency 2. Damage scales with Seed Bomb level.',
          },
        },
        {
          id: 'rootSnareII',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          ko: {
            name: '대지감옥',
            input: '뿌리감옥 연계(숙련2)',
            description: '숙련 2에서 뿌리덫이 강화됩니다. 피해량은 뿌리감옥 레벨에 비례합니다.',
          },
          en: {
            name: 'Root Snare II',
            input: 'Root Prison follow-up (proficiency 2)',
            description: 'Empowered Root Snare at proficiency 2. Damage scales with Root Prison level.',
          },
        },
        {
          id: 'thornBurstII',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '가시폭풍',
            input: '가시밭 연계(숙련2)',
            description: '숙련 2에서 가시폭발이 강화됩니다. 피해량은 가시밭 레벨에 비례합니다.',
          },
          en: {
            name: 'Thorn Burst II',
            input: 'Thorn Field follow-up (proficiency 2)',
            description: 'Empowered Thorn Burst at proficiency 2. Damage scales with Thorn Field level.',
          },
        },
        {
          id: 'sporeBloomII',
          icon: 'aura',
          element: 'earth',
          followUp: true,
          ko: {
            name: '독포자구름',
            input: '포자구름 연계(숙련2)',
            description: '숙련 2에서 포자만개가 강화됩니다. 피해량은 포자구름 레벨에 비례합니다.',
          },
          en: {
            name: 'Spore Bloom II',
            input: 'Spore Cloud follow-up (proficiency 2)',
            description: 'Empowered Spore Bloom at proficiency 2. Damage scales with Spore Cloud level.',
          },
        },
        {
          id: 'growthLimit2',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '성장',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Growth',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'worldTree',
          icon: 'leaf',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '세계수',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '전투 모드에서만 발동합니다. 더 넓은 범위 피해와 장시간 제압.',
          },
          en: {
            name: 'World Tree',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Combat mode only. Wider damage and longer suppression.',
          },
        },
      ],
    },
  ],
};
