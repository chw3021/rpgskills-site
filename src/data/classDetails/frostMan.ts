import type { ClassDetailDef } from './types';

export const frostManDetail: ClassDetailDef = {
  id: 'frostMan',
  order: 22,
  element: { en: 'Frost', ko: '서리' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'frostMan.png', en: { title: 'Frostman' }, ko: { title: '빙술사' } },
      { tier: 1, portraitFile: 'frostMan-limit1.png', en: { title: 'Everfrost' }, ko: { title: '만년설' } },
      { tier: 2, portraitFile: 'frostMan-limit2.png', en: { title: 'Khazhad' }, ko: { title: '설화' } },
    ],
  },
  story: {
    ko: [
      '단검과 얼음으로 적을 얼려 움직임을 빼앗는 빙술사입니다. 얼음수정·우박·고드름화살·거대고드름·균열·눈바람으로 제압하고, 동상으로 경직을 쌓습니다.',
      '숙련이 오르면 한기·눈사태·극소용돌이 등 재입력 연계가 열리고, 냉혈로 동상 경직이 길어집니다. 만년설은 서리폭풍으로 눈보라를 일으킵니다.',
      '설화는 대균열·서리칼날·빙적으로 지역을 얼리고, 절대영도와 빙하시대로 전장을 빙하기에 가두듯 끝냅니다.',
    ],
    en: [
      'A frost mage who steals mobility with a dagger and ice. Frozen crystal, hailstones, icicle shot, ice spikes, crack, and snow breeze suppress while Frostbite stacks freezes.',
      'Higher proficiency unlocks re-input chains like Chill, Avalanche, and Polar Vortex; Cold Blood lengthens freeze stuns. Everfrost unleashes Blizzard across the field.',
      'Khazhad widens breaks, frost blades, and glacial drift before Absolute Zero and Ice Age lock the battlefield in eternal winter.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'frozenCrystal',
          icon: 'soul',
          element: 'frost',
          ko: {
            name: '얼음수정',
            input: '손 바꾸기',
            description: '얼음 수정을 생성합니다. 재입력 시 일찍 깨뜨릴 수 있습니다.',
          },
          en: {
            name: 'Frozen Crystal',
            input: 'Swap hands',
            description: 'Creates a frozen crystal. Use again to break it early.',
          },
          masterLevel: 50,
        },
        {
          id: 'hailstones',
          icon: 'storm',
          element: 'frost',
          ko: {
            name: '우박',
            input: '웅크리기 + 손 바꾸기',
            description: '우박을 떨어뜨립니다.',
          },
          en: {
            name: 'Hailstones',
            input: 'Sneak + swap hands',
            description: 'Drops hailstones.',
          },
          masterLevel: 50,
        },
        {
          id: 'icicleShot',
          icon: 'stab',
          element: 'frost',
          ko: {
            name: '고드름화살',
            input: '우클릭',
            description: '고드름 화살을 쏩니다.',
          },
          en: {
            name: 'Icicle Shot',
            input: 'Right-click',
            description: 'Fires icicle arrows.',
          },
          masterLevel: 50,
        },
        {
          id: 'iceSpikes',
          icon: 'spike',
          element: 'frost',
          ko: {
            name: '거대고드름',
            input: '웅크리기 + 우클릭',
            description: '거대 고드름을 솟구칩니다.',
          },
          en: {
            name: 'Ice Spikes',
            input: 'Sneak + right-click',
            description: 'Erupts giant ice spikes.',
          },
          masterLevel: 50,
        },
        {
          id: 'crack',
          icon: 'slash',
          element: 'frost',
          ko: {
            name: '균열',
            input: '웅크리기 + 좌클릭',
            description: '시야 안의 적에게만 피해를 줍니다.',
          },
          en: {
            name: 'Crack',
            input: 'Sneak + left-click',
            description: 'Damages only enemies within line of sight.',
          },
          masterLevel: 50,
        },
        {
          id: 'snowBreeze',
          icon: 'wind',
          element: 'frost',
          ko: {
            name: '눈바람',
            input: '점프 + 좌클릭',
            description: '눈바람으로 피해를 줍니다.',
          },
          en: {
            name: 'Snow Breeze',
            input: 'Jump + left-click',
            description: 'Deals damage with a snow breeze.',
          },
          masterLevel: 1,
        },
        {
          id: 'frostbite',
          icon: 'book',
          element: 'frost',
          passive: true,
          ko: {
            name: '동상',
            description:
              '공격력과 서리 저항이 증가합니다. 3회 타격한 적은 2초 경직(대기 5초)에 걸리며, 동상 피해와 둔화에 면역됩니다.',
          },
          en: {
            name: 'Frostbite',
            description:
              'Raises damage and frost resistance. Foes hit three times freeze for 2s (5s cooldown); immune to freeze damage and slow.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'chill',
          icon: 'soul',
          element: 'frost',
          followUp: true,
          chainOf: 'frozenCrystal',
          ko: {
            name: '한기',
            input: '얼음수정 파괴 후',
            description: '수정이 깨진 뒤 주변 적에게 추가 피해를 주고 기절 시간이 증가합니다.',
          },
          en: {
            name: 'Chill',
            input: 'After crystal breaks',
            description: 'Bonus damage to nearby foes after the crystal breaks; longer stun.',
          },
        },
        {
          id: 'avalanche',
          icon: 'storm',
          element: 'frost',
          followUp: true,
          chainOf: 'hailstones',
          ko: {
            name: '눈사태',
            input: '우박 재입력',
            description: '눈사태를 사용합니다. 피해량은 우박 레벨에 비례합니다.',
          },
          en: {
            name: 'Avalanche',
            input: 'Use Hailstones again',
            description: 'Triggers an avalanche. Damage scales with Hailstones level.',
          },
        },
        {
          id: 'snowball',
          icon: 'stab',
          element: 'frost',
          followUp: true,
          chainOf: 'icicleShot',
          ko: {
            name: '눈덩이',
            input: '고드름화살 재입력',
            description: '눈덩이를 사용합니다. 피해량은 고드름화살 레벨에 비례합니다.',
          },
          en: {
            name: 'Snowball',
            input: 'Use Icicle Shot again',
            description: 'Throws snowballs. Damage scales with Icicle Shot level.',
          },
        },
        {
          id: 'polarVortex',
          icon: 'cycle',
          element: 'frost',
          followUp: true,
          chainOf: 'iceSpikes',
          ko: {
            name: '극소용돌이',
            input: '거대고드름 재입력',
            description: '극소용돌이를 사용합니다. 피해량은 거대고드름 레벨에 비례합니다.',
          },
          en: {
            name: 'Polar Vortex',
            input: 'Use Ice Spikes again',
            description: 'Uses polar vortex. Damage scales with Ice Spikes level.',
          },
        },
        {
          id: 'crevasse',
          icon: 'slash',
          element: 'frost',
          followUp: true,
          chainOf: 'crack',
          ko: {
            name: '크레바스',
            input: '균열 재입력',
            description: '1초 동안 경직 상태로 만듭니다.',
          },
          en: {
            name: 'Crevasse',
            input: 'Use Crack again',
            description: 'Freezes the target for 1 second.',
          },
        },
        {
          id: 'icefall',
          icon: 'shield',
          element: 'frost',
          followUp: true,
          chainOf: 'snowBreeze',
          ko: {
            name: '빙폭',
            input: '눈바람 재입력',
            description: '2초 동안 무적 상태가 됩니다.',
          },
          en: {
            name: 'Icefall',
            input: 'Use Snow Breeze again',
            description: 'Grants invulnerability for 2 seconds.',
          },
        },
        {
          id: 'coldBlood',
          icon: 'book',
          element: 'frost',
          passive: true,
          chainOf: 'frostbite',
          ko: {
            name: '냉혈',
            description: '공격력과 동상 경직 지속 시간이 증가합니다.',
          },
          en: {
            name: 'Cold Blood',
            description: 'Increases damage and Frostbite freeze duration.',
          },
        },
        {
          id: 'blizzard',
          icon: 'storm',
          element: 'frost',
          ultimate: true,
          ko: {
            name: '서리폭풍',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '서리 폭풍으로 광역 피해를 줍니다.',
          },
          en: {
            name: 'Blizzard',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Deals heavy area damage with a blizzard.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'hugeBreak',
          icon: 'soul',
          element: 'frost',
          followUp: true,
          chainOf: 'frozenCrystal',
          ko: {
            name: '대균열',
            input: '한기 연계 후',
            description: '균열 범위가 증가합니다.',
          },
          en: {
            name: 'Huge Break',
            input: 'After Chill chain',
            description: 'Increases crack range.',
          },
        },
        {
          id: 'extremeCold',
          icon: 'storm',
          element: 'frost',
          followUp: true,
          chainOf: 'hailstones',
          ko: {
            name: '극한의추위',
            input: '눈사태 재입력',
            description: '극한의 추위를 사용합니다. 피해량은 우박 레벨에 비례합니다.',
          },
          en: {
            name: 'Extreme Cold',
            input: 'Use Avalanche again',
            description: 'Uses extreme cold. Damage scales with Hailstones level.',
          },
        },
        {
          id: 'frostBlade',
          icon: 'slash',
          element: 'frost',
          followUp: true,
          chainOf: 'icicleShot',
          ko: {
            name: '서리칼날',
            input: '눈덩이 재입력',
            description: '서리 칼날을 휘두릅니다. 피해량은 고드름화살 레벨에 비례합니다.',
          },
          en: {
            name: 'Frost Blade',
            input: 'Use Snowball again',
            description: 'Swings frost blades. Damage scales with Icicle Shot level.',
          },
        },
        {
          id: 'glacialDrift',
          icon: 'spike',
          element: 'frost',
          followUp: true,
          chainOf: 'iceSpikes',
          ko: {
            name: '빙적',
            input: '극소용돌이 재입력',
            description: '빙적을 사용합니다. 피해량은 거대고드름 레벨에 비례합니다.',
          },
          en: {
            name: 'Glacial Drift',
            input: 'Use Polar Vortex again',
            description: 'Uses glacial drift. Damage scales with Ice Spikes level.',
          },
        },
        {
          id: 'regelation',
          icon: 'slash',
          element: 'frost',
          followUp: true,
          chainOf: 'crack',
          ko: {
            name: '복빙',
            input: '크레바스 재입력',
            description: '동상 대기 시간을 초기화합니다.',
          },
          en: {
            name: 'Regelation',
            input: 'Use Crevasse again',
            description: 'Resets Frostbite cooldown on hit enemies.',
          },
        },
        {
          id: 'absoluteZero',
          icon: 'book',
          element: 'frost',
          passive: true,
          chainOf: 'frostbite',
          ko: {
            name: '절대영도',
            description:
              '공격력과 방어력이 증가합니다. 서리폭풍 재사용 대기가 감소하고 동상 경직 지속이 늘어납니다.',
          },
          en: {
            name: 'Absolute Zero',
            description:
              'Increases damage and armor. Shortens Blizzard cooldown and lengthens Frostbite freeze.',
          },
        },
        {
          id: 'iceAge',
          icon: 'storm',
          element: 'frost',
          ultimate: true,
          ko: {
            name: '빙하시대',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '타격한 적은 15초 동안 동상 대기 시간이 없어집니다. 광역 빙하 피해를 줍니다.',
          },
          en: {
            name: 'Ice Age',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Hit enemies have no Frostbite cooldown for 15s. Deals area ice-age damage.',
          },
        },
      ],
    },
  ],
};
