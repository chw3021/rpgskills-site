import type { ClassDetailDef } from './types';

export const swordmanDetail: ClassDetailDef = {
  id: 'swordman',
  order: 1,
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      {
        tier: 0,
        portraitFile: 'swordman.png',
        en: { title: 'SwordMan' },
        ko: { title: '검사' },
      },
      {
        tier: 1,
        portraitFile: 'swordman-limit1.png',
        en: { title: 'SwordMaster' },
        ko: { title: '검객' },
      },
      {
        tier: 2,
        portraitFile: 'swordman-limit2.png',
        en: { title: 'GrandMaster' },
        ko: { title: '검극' },
      },
    ],
  },
  story: {
    ko: [
      '어릴 적부터 검만 들고 살아온 전사입니다. 수많은 전장을 지나며 검격이 스치는 자리마다 먼지가 일어나는 법을 몸으로 익혔고, 한때는 힘만으로 적을 밀어내는 데 그쳤습니다.',
      '끊임없는 수련 끝에 검 끝에서 아주 얇은 검기가 피어나는 순간을 맞이했습니다. 그 이후로는 베는 것과 닿는 것의 경계가 흐려졌고, 검기는 점점 더 멀리, 더 넓게 뻗어 나갑니다.',
      '검사의 길은 아직 끝나지 않았습니다. 숙련도가 쌓여 한계를 돌파할수록 이름은 검객, 검극으로 바뀌지만, 본질은 변하지 않습니다. 검과 검기로 적진을 가르는 일인 것입니다.',
    ],
    en: [
      'This warrior has lived with a blade since childhood. Across countless battlefields they learned that every swing stirs the dust of the earth—yet for a long time they relied on raw strength alone.',
      'Endless training eventually brought the first thread of sword qi at the edge of their steel. Since then, the line between cutting and reaching has blurred, and each strike sends their aura farther and wider.',
      'The path of the sword is far from over. As proficiency grows and limits break, their title may change from SwordMan to SwordMaster and GrandMaster—but the essence remains: to carve through enemy lines with blade and qi.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'rising',
          icon: 'sword-up',
          element: 'earth',
          ko: {
            name: '올려베기',
            input: '우클릭 + 웅크리기',
            description:
              '검을 크게 들어 올려 베며 전방에 연속 타격을 가합니다. 스킬 레벨에 따라 피해량이 증가합니다.',
          },
          en: {
            name: 'Rising Blades',
            input: 'Right-click + Sneak',
            description:
              'Raises the blade and slashes upward, dealing multiple hits in front. Damage scales with skill level.',
          },
          masterLevel: 50,
        },
        {
          id: 'strike',
          icon: 'sword',
          element: 'earth',
          ko: {
            name: '일격',
            input: '점프 + 좌클릭',
            description: '공중에서 내려찍는 일격으로 단일 대상에 강한 피해를 줍니다.',
          },
          en: {
            name: 'Strike',
            input: 'Jump + Left-click',
            description: 'A downward strike from the air that deals heavy damage to a single target.',
          },
          masterLevel: 50,
        },
        {
          id: 'swordDrive',
          icon: 'sword-drive',
          element: 'earth',
          ko: {
            name: '지진',
            input: '손 바꾸기',
            description:
              '대지의 힘을 끌어올려 범위 피해를 주고, 일정 시간 흡수 효과를 얻습니다. 스킬 레벨에 따라 흡수 지속 시간과 단계가 올라갑니다.',
          },
          en: {
            name: 'Sword Drive',
            input: 'Swap hands',
            description:
              'Channels earth power for area damage and grants Absorption for a duration. Duration and amplifier scale with skill level.',
          },
          masterLevel: 50,
        },
        {
          id: 'flashyRush',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '섬격',
            input: '우클릭',
            description:
              '순간적으로 돌진해 베어 넘깁니다. 섬격으로 적을 처치하면 재사용 대기시간이 초기화됩니다.',
          },
          en: {
            name: 'Flashy Rush',
            input: 'Right-click',
            description:
              'Dashes in for a quick slash. Killing an enemy with Flashy Rush resets its cooldown.',
          },
          masterLevel: 50,
        },
        {
          id: 'criticalDraw',
          icon: 'draw',
          element: 'earth',
          ko: {
            name: '발도',
            input: '손 바꾸기 + 웅크리기',
            description: '검을 뽑아 내며 일직선상의 적에게 강한 피해를 줍니다.',
          },
          en: {
            name: 'Critical Draw',
            input: 'Swap hands + Sneak',
            description: 'Draws the blade in a swift line, dealing heavy damage along the path.',
          },
          masterLevel: 50,
        },
        {
          id: 'swoop',
          icon: 'swoop',
          element: 'earth',
          ko: {
            name: '급습',
            input: '웅크리기 + 근접 공격',
            description: '웅크린 상태에서 돌진하며 적에게 급습 피해를 입힙니다.',
          },
          en: {
            name: 'Swoop',
            input: 'Sneak + melee hit',
            description: 'While sneaking, rushes the target and deals a surprise strike.',
          },
          masterLevel: 50,
        },
        {
          id: 'guard',
          icon: 'shield',
          element: 'earth',
          passive: true,
          ko: {
            name: '막기',
            input: '웅크리기',
            description:
              '웅크리는 동안 받는 피해가 감소합니다. 막기 게이지는 일정 시간 막기를 쓰지 않으면 서서히 회복되며, 숙련도가 오를수록 회복 대기 시간이 줄어듭니다.',
            extra: ['피해 감소율은 스킬 레벨에 비례합니다.'],
          },
          en: {
            name: 'Guard',
            input: 'Sneak',
            description:
              'Reduces damage taken while sneaking. Guard gauge slowly recovers when Guard is not used for a short period; higher proficiency shortens the recovery delay.',
            extra: ['Damage reduction scales with skill level.'],
          },
          masterLevel: 10,
        },
        {
          id: 'swordsmanship',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '검술',
            description: '검술 숙련이 올라가 전체 공격력이 증가합니다.',
          },
          en: {
            name: 'Swordsmanship',
            description: 'Increases overall damage as this passive skill levels up.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'fallenLeaves',
          icon: 'leaf',
          element: 'earth',
          followUp: true,
          ko: {
            name: '낙엽',
            input: '같은 스킬 재입력',
            description:
              '올려베기 사용 후 다시 입력하면 낙엽을 발동합니다. 피해량은 올려베기 레벨에 비례합니다.',
          },
          en: {
            name: 'Fallen Leaves',
            input: 'Use the same skill again',
            description:
              'Follow-up to Rising Blades. Damage scales with Rising Blades level.',
          },
        },
        {
          id: 'wind',
          icon: 'wind',
          element: 'earth',
          followUp: true,
          ko: {
            name: '검풍',
            input: '같은 스킬 재입력',
            description: '일격 사용 후 다시 입력하면 검풍을 날립니다. 피해량은 일격 레벨에 비례합니다.',
          },
          en: {
            name: 'Wind',
            input: 'Use the same skill again',
            description: 'Follow-up to Strike. Damage scales with Strike level.',
          },
        },
        {
          id: 'spike',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          ko: {
            name: '충검',
            input: '같은 스킬 재입력',
            description: '지진 사용 후 다시 입력하면 충검이 솟습니다. 피해량은 지진 레벨에 비례합니다.',
          },
          en: {
            name: 'Spike',
            input: 'Use the same skill again',
            description: 'Follow-up to Sword Drive. Damage scales with Sword Drive level.',
          },
        },
        {
          id: 'stab',
          icon: 'stab',
          element: 'earth',
          ko: {
            name: '자상',
            input: '적 명중 시',
            description:
              '섬격으로 적을 잠시 제압한 뒤 추가 피해를 한 번 더 줍니다. 피해량은 섬격 레벨에 비례합니다.',
          },
          en: {
            name: 'Stab',
            input: 'On hit',
            description:
              'Briefly locks down the target after Flashy Rush, then deals bonus damage. Scales with Flashy Rush level.',
          },
        },
        {
          id: 'swordDance',
          icon: 'dance',
          element: 'earth',
          followUp: true,
          ko: {
            name: '검무',
            input: '같은 스킬 재입력',
            description:
              '발도 사용 후 다시 입력하면 검무를 펼칩니다. 여러 단의 베기와 타격 후 마무리 일격이 이어지며, 피해량은 발도 레벨에 비례합니다.',
          },
          en: {
            name: 'Sword Dance',
            input: 'Use the same skill again',
            description:
              'Follow-up to Critical Draw: a combo of slashes and hits ending in a finisher. Damage scales with Critical Draw level.',
          },
        },
        {
          id: 'slash',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '약점베기',
            description: '명중한 적을 잠시 제압한 뒤 추가 피해를 줍니다.',
          },
          en: {
            name: 'Slash',
            description: 'Briefly suppresses a hit enemy, then deals extra damage.',
          },
        },
        {
          id: 'defensive',
          icon: 'shield',
          element: 'earth',
          passive: true,
          ko: {
            name: '방어자세',
            description: '막기 게이지 최대량이 늘고, 게이지 회복 대기 시간이 줄어듭니다.',
          },
          en: {
            name: 'Defensive Stance',
            description: 'Increases maximum Guard gauge and reduces Guard recovery cooldown.',
          },
        },
        {
          id: 'swordAura',
          icon: 'aura',
          element: 'earth',
          passive: true,
          ko: {
            name: '검기방출',
            description: '검기가 강해져 스킬 공격력과 범위가 증가합니다.',
          },
          en: {
            name: 'Sword Aura',
            description: 'Empowers sword qi, increasing skill damage and range.',
          },
        },
        {
          id: 'swordStorm',
          icon: 'storm',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '비검',
            input: '웅크리기 + 숫자키 4',
            description: '검기를 폭발적으로 방출해 넓은 범위에 피해를 줍니다.',
          },
          en: {
            name: 'Sword Storm',
            input: 'Sneak + hotkey 4',
            description: 'Unleashes a burst of sword qi that damages a wide area.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'motioningAir',
          icon: 'air-cut',
          element: 'earth',
          followUp: true,
          ko: {
            name: '단공참',
            input: '같은 스킬 재입력',
            description:
              '올려베기 후 재입력 시 공기를 가르며 베어 넘깁니다. 피해량은 올려베기 레벨에 비례합니다.',
          },
          en: {
            name: 'Dividing Air',
            input: 'Use the same skill again',
            description:
              'Advanced follow-up to Rising Blades. Damage scales with Rising Blades level.',
          },
        },
        {
          id: 'windBrandish',
          icon: 'wind-slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '바람베기',
            input: '같은 스킬 재입력',
            description: '일격 후 재입력 시 바람을 일으켜 넓게 베어 냅니다. 피해량은 일격 레벨에 비례합니다.',
          },
          en: {
            name: 'Wind Brandish',
            input: 'Use the same skill again',
            description: 'Advanced follow-up to Strike. Damage scales with Strike level.',
          },
        },
        {
          id: 'circulation',
          icon: 'cycle',
          element: 'earth',
          passive: true,
          ko: {
            name: '순환',
            description: '다른 스킬을 사용할 때마다 섬격 재사용 대기시간이 1초 감소합니다.',
          },
          en: {
            name: 'Circulation',
            description: 'Using any other skill reduces Flashy Rush cooldown by 1 second.',
          },
        },
        {
          id: 'soulFlourish',
          icon: 'soul',
          element: 'earth',
          followUp: true,
          ko: {
            name: '영혼가르기',
            input: '같은 스킬 재입력',
            description:
              '발도 후 재입력 시 영혼을 가르는 연속 베기를 펼칩니다. 피해량은 발도 레벨에 비례합니다.',
          },
          en: {
            name: 'Soul Flourish',
            input: 'Use the same skill again',
            description:
              'Advanced follow-up to Critical Draw. Damage scales with Critical Draw level.',
          },
        },
        {
          id: 'recovery',
          icon: 'recovery',
          element: 'earth',
          passive: true,
          ko: {
            name: '회복',
            description: '막기 게이지 최대량이 더 늘고, 회복 대기 시간이 추가로 줄어듭니다.',
          },
          en: {
            name: 'Recovery',
            description: 'Further increases Guard gauge capacity and shortens recovery delay.',
          },
        },
        {
          id: 'steadyBlade',
          icon: 'steady',
          element: 'earth',
          passive: true,
          ko: {
            name: '검신일체',
            description:
              '공격력·방어력·범위가 크게 증가하고, 비검 재사용 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Steady Blade',
            description:
              'Greatly increases damage, armor, and range, and reduces Sword Storm cooldown.',
          },
        },
        {
          id: 'mindSword',
          icon: 'mind-sword',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '심검',
            input: '웅크리기 + 숫자키 5',
            description: '마음을 검에 실어 전방에 막대한 검기를 방출합니다.',
          },
          en: {
            name: 'Mind Sword',
            input: 'Sneak + hotkey 5',
            description: 'Projects overwhelming sword qi forward in a devastating strike.',
          },
        },
      ],
    },
  ],
};
