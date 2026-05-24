import type { ClassDetailDef } from './types';

export const broilerDetail: ClassDetailDef = {
  id: 'broiler',
  order: 17,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'broiler.png', en: { title: 'Broiler' }, ko: { title: '투사' } },
      { tier: 1, portraitFile: 'broiler-limit1.png', en: { title: 'Risk Taker' }, ko: { title: '감내자' } },
      { tier: 2, portraitFile: 'broiler-limit2.png', en: { title: 'Game Changer' }, ko: { title: '역전가' } },
    ],
  },
  story: {
    ko: [
      '상의를 벗은 근육질 투사가 철퇴로 전열을 무너뜨립니다. 지진강타·충격파·방어 분쇄·대지 쐐기·균열·먼지 폭발로 대지를 흔듭니다.',
      '감내는 공격력을 올리고 가까운 적을 도전 상대로 지정합니다. 여진으로 지진강타를 이어갑니다.',
      '감내자는 대지를 분쇄하는 암석 낙하를, 역전가는 태산 꼭대기에서 아래를 내려다보듯 전장을 지배하며 단층 완파로 끝냅니다.',
    ],
    en: [
      'A shirtless, muscular brawler who breaks formations with a mace. Seismic slam, shockwave, armor crack, earth spikes, fissures, and dust bursts shake the ground.',
      'Endurance raises damage and marks a nearby foe for a duel. Afterpulse chains off seismic slam.',
      'Risk Taker shatters the earth with bedrock barrage; Game Changer stands atop the mountain, looking down on the field before faultline finisher ends the fight.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'seismicSlam',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '지진강타',
            input: '웅크리기 + 손 바꾸기',
            description: '광역 지진으로 적을 제압합니다.',
          },
          en: {
            name: 'Seismic Slam',
            input: 'Sneak + swap hands',
            description: 'Area quake to control enemies.',
          },
          masterLevel: 50,
        },
        {
          id: 'shockwave',
          icon: 'storm',
          element: 'earth',
          ko: { name: '충격파', input: '손 바꾸기', description: '전방으로 충격파를 보냅니다.' },
          en: { name: 'Shockwave', input: 'Swap hands', description: 'Sends a shockwave forward.' },
          masterLevel: 1,
        },
        {
          id: 'armorCrack',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '방어 분쇄',
            input: '웅크리기 + 근접 공격',
            description: '대상을 짧게 제압합니다.',
          },
          en: {
            name: 'Armor Crack',
            input: 'Sneak + melee attack',
            description: 'Briefly suppresses the target.',
          },
          masterLevel: 50,
        },
        {
          id: 'earthSpike',
          icon: 'spike',
          element: 'earth',
          ko: {
            name: '대지 쐐기',
            input: '웅크리기 + 우클릭',
            description: '땅에서 쐐기를 솟구치게 합니다.',
          },
          en: {
            name: 'Earth Spike',
            input: 'Sneak + right-click',
            description: 'Spikes erupt from the ground.',
          },
          masterLevel: 50,
        },
        {
          id: 'fissure',
          icon: 'stab',
          element: 'earth',
          ko: {
            name: '균열',
            input: '좌클릭',
            description: '전방 지면을 연속으로 터뜨립니다.',
          },
          en: {
            name: 'Fissure',
            input: 'Left-click',
            description: 'Bursts the ground in a line ahead.',
          },
          masterLevel: 50,
        },
        {
          id: 'dustBurst',
          icon: 'wind',
          element: 'earth',
          ko: { name: '먼지 폭발', input: '우클릭', description: '흙먼지로 적을 제압합니다.' },
          en: { name: 'Dust Burst', input: 'Right-click', description: 'Suppresses foes with a dust burst.' },
          masterLevel: 50,
        },
        {
          id: 'endurance',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '감내',
            input: '숫자키 3 (전투 모드)',
            description: '공격력이 증가하고 가까운 대상을 도전 상대로 지정합니다.',
          },
          en: {
            name: 'Endurance',
            input: 'Hotkey 3 (combat mode)',
            description: 'Increases damage and marks a nearby foe for a duel.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'afterpulse',
          icon: 'fist',
          element: 'earth',
          followUp: true,
          ko: {
            name: '여진',
            input: '지진강타 직후 웅크리기 + 손 바꾸기',
            description: '짧은 시간 안에만 사용 가능합니다. 피해량은 지진강타 레벨에 비례합니다.',
          },
          en: {
            name: 'Afterpulse',
            input: 'Sneak + swap hands right after Seismic Slam',
            description: 'Only within a short window. Damage scales with Seismic Slam level.',
          },
        },
        {
          id: 'bedrockBarrage',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '암석 낙하',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '낙석 연출 후 연속 지진으로 대지를 분쇄합니다. 2차 한계 돌파 시 재사용 대기시간이 감소합니다.',
          },
          en: {
            name: 'Bedrock Barrage',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Falling stone and repeated quakes shatter the earth. Cooldown is shorter at second limit break.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'chasmDrive',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          ko: {
            name: '단층 주행',
            input: '여진 성공 직후 웅크리기 + 좌클릭',
            description: '전방으로 지진을 긋습니다. 피해량은 지진강타 레벨에 비례합니다.',
          },
          en: {
            name: 'Chasm Drive',
            input: 'Sneak + left-click after Afterpulse',
            description: 'Carves forward quakes. Damage scales with Seismic Slam level.',
          },
        },
        {
          id: 'rippleReturn',
          icon: 'wave',
          element: 'earth',
          followUp: true,
          ko: {
            name: '환류격',
            input: '충격파 직후 전투 모드 기술 0',
            description: '뒤로 되튕기는 지진파입니다. 피해량은 충격파 레벨에 비례합니다.',
          },
          en: {
            name: 'Ripple Return',
            input: 'Combat skill 0 after Shockwave',
            description: 'Backward rippling quakes. Damage scales with Shockwave level.',
          },
        },
        {
          id: 'earthBond',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          ko: {
            name: '응결 지반',
            input: '대지 쐐기 직후 웅크리기 + 좌클릭',
            description: '시야 끝 지점 주위에 링 지진을 일으킵니다. 피해량은 대지 쐐기 레벨에 비례합니다.',
          },
          en: {
            name: 'Earth Bond',
            input: 'Sneak + left-click after Earth Spike',
            description: 'Quakes in a ring at targeted ground. Damage scales with Earth Spike level.',
          },
        },
        {
          id: 'stratumBloom',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          ko: {
            name: '판층 개화',
            input: '단층 주행 종료 직후 전투 모드 기술 1',
            description: '주변 링 형태로 지반을 폭발시킵니다. 피해량은 균열 레벨에 비례합니다.',
          },
          en: {
            name: 'Stratum Bloom',
            input: 'Combat skill 1 after Chasm Drive ends',
            description: 'Ring of ground bursts. Damage scales with Fissure level.',
          },
        },
        {
          id: 'faultlineFinisher',
          icon: 'fist-serious',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '단층 완파',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '강한 연속 지진으로 대지를 마무리합니다. 피해량은 균열 레벨에 비례합니다.',
          },
          en: {
            name: 'Faultline Finisher',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Heavy repeated quakes. Damage scales with Fissure level.',
          },
        },
      ],
    },
  ],
};
