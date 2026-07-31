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
      '전투본능은 공격력을 올립니다. 여진으로 지진강타를 이어갑니다.',
      '감내자는 거대 암석 낙하와 단계별 충격파로 대지를 분쇄하고, 역전가는 암석 언덕 상승 후 강하 초토화로 전장을 마무리합니다.',
    ],
    en: [
      'A shirtless, muscular brawler who breaks formations with a mace. Seismic slam, shockwave, armor crack, earth spikes, fissures, and dust bursts shake the ground.',
      'Combat Instinct raises damage. Afterpulse chains off seismic slam.',
      'Risk Taker shatters the earth with giant falling rocks and staged shockwaves; Game Changer ends the fight by rising on a rock hill and crash-diving to smash the ground.',
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
          ko: {
            name: '충격파',
            input: '손 바꾸기',
            description: '주변 충격파로 적을 제압한 뒤 높이 도약합니다.',
          },
          en: {
            name: 'Shockwave',
            input: 'Swap hands',
            description: 'Suppresses nearby enemies with a shockwave, then launches you high.',
          },
          masterLevel: 1,
        },
        {
          id: 'armorCrack',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '방어 분쇄',
            input: '웅크리기 + 좌클릭',
            description:
              '전방의 적을 공격하고 밀쳐냅니다. 대지 쐐기의 돌벽에 부딪히면 추가 피해와 기절을 부여합니다.',
          },
          en: {
            name: 'Armor Crack',
            input: 'Sneak + left-click',
            description:
              'Strikes and pushes enemies forward. Colliding with an Earth Spike wall deals extra damage and stuns them.',
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
            description:
              '지면에서 임시 돌벽을 솟구칩니다. 방어 분쇄로 밀린 적이 충돌하면 추가 피해와 기절을 받습니다.',
          },
          en: {
            name: 'Earth Spike',
            input: 'Sneak + right-click',
            description:
              'Raises a temporary stone wall. Armor Crack collisions deal extra damage and stun foes.',
          },
          masterLevel: 50,
        },
        {
          id: 'fissure',
          icon: 'stab',
          element: 'earth',
          ko: {
            name: '균열',
            input: '공중 철퇴 스매시 + 근접 적중',
            description: '공중 스매시가 적중하면 균열을 일으킵니다.',
          },
          en: {
            name: 'Fissure',
            input: 'Airborne mace smash + melee hit',
            description: 'Creates fissures when a smash hit lands.',
          },
          masterLevel: 50,
        },
        {
          id: 'dustBurst',
          icon: 'wind',
          element: 'earth',
          ko: {
            name: '먼지 폭발',
            input: '우클릭',
            description: '전방에 모래 블록을 소환해 폭발시킵니다. 피격 적에게 실명을 부여합니다.',
          },
          en: {
            name: 'Dust Burst',
            input: 'Right-click',
            description: 'Spawns a sand block ahead and detonates it. Applies Blindness to hit foes.',
          },
          masterLevel: 50,
        },
        {
          id: 'endurance',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '전투본능',
            description: '공격력이 증가합니다.',
          },
          en: {
            name: 'Combat Instinct',
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
          id: 'afterpulse',
          icon: 'fist',
          element: 'earth',
          followUp: true,
          chainOf: 'seismicSlam',
          guiColumn: 9,
          ko: {
            name: '여진',
            input: '지진강타 직후 웅크리기 + 손 바꾸기',
            description: '짧은 시간 안에만 사용 가능합니다.',
          },
          en: {
            name: 'Afterpulse',
            input: 'Sneak + swap hands right after Seismic Slam',
            description: 'Only within a short window.',
          },
        },
        {
          id: 'shockEcho',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          chainOf: 'shockwave',
          guiColumn: 10,
          ko: {
            name: '바위 투척',
            input: '충격파 직후 손 바꾸기',
            description:
              '시야 방향으로 서로 다른 바위 여러 개를 연발로 던지고 추가 상승합니다. 각 바위는 충돌 지점 주변의 적을 기절시킵니다.',
          },
          en: {
            name: 'Rock Throw',
            input: 'Swap hands after Shockwave',
            description:
              'Throws several different rocks in rapid succession ahead and rises again. Each rock stuns enemies at its impact.',
          },
        },
        {
          id: 'seismicBreaker',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          chainOf: 'armorCrack',
          guiColumn: 2,
          ko: {
            name: '쇄진파',
            input: '방어 분쇄 직후 웅크리기 + 좌클릭',
            description:
              '전방으로 넓어지는 지진파를 단계적으로 전개해 각 적에게 한 번 피해를 주고 기절시킵니다.',
          },
          en: {
            name: 'Seismic Breaker',
            input: 'Sneak + left-click after Armor Crack',
            description:
              'Unleashes a widening quake in stages, damaging and stunning each enemy once.',
          },
        },
        {
          id: 'earthLock',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          chainOf: 'earthSpike',
          guiColumn: 12,
          ko: {
            name: '대지 고정',
            input: '대지 쐐기 직후 웅크리기 + 우클릭',
            description: '짧은 시간 안에만 사용 가능합니다.',
          },
          en: {
            name: 'Earth Lock',
            input: 'Sneak + right-click after Earth Spike',
            description: 'Only within a short window.',
          },
        },
        {
          id: 'fissureSpread',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'fissure',
          guiColumn: 13,
          ko: {
            name: '균열 확산',
            input: '균열 직후 좌클릭',
            description:
              '공중에서는 급강하해 착지 충격파를 일으키며 낙하 피해를 받지 않습니다.',
          },
          en: {
            name: 'Fissure Spread',
            input: 'Left-click after Fissure',
            description:
              'Dives when airborne, creating a landing shockwave and preventing fall damage.',
          },
        },
        {
          id: 'dustWave',
          icon: 'wind',
          element: 'earth',
          followUp: true,
          chainOf: 'dustBurst',
          guiColumn: 14,
          ko: {
            name: '먼지 파동',
            input: '먼지 폭발 직후 우클릭',
            description: '폭발 지점에서 모래 구형 파동이 3회 확장됩니다. 피격 적에게 실명을 부여합니다.',
          },
          en: {
            name: 'Dust Wave',
            input: 'Right-click after Dust Burst',
            description: 'Three expanding sand spheres erupt from the burst point. Applies Blindness.',
          },
        },
        {
          id: 'enduranceLimit1',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 16,
          ko: { name: '감내', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Endurance', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'bedrockBarrage',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
          guiColumn: 17,
          ko: {
            name: '암석 낙하',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '거대 암석이 떨어져 넓은 범위에 충격파를 일으키고 단계별로 대지를 분쇄합니다.',
          },
          en: {
            name: 'Bedrock Barrage',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Giant rocks slam down with wide impact shockwaves that shatter the earth in stages.',
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
          chainOf: 'seismicSlam',
          guiColumn: 18,
          ko: {
            name: '단층 주행',
            input: '여진 성공 직후 웅크리기 + 좌클릭',
            description: '전방으로 지진을 긋습니다.',
          },
          en: {
            name: 'Chasm Drive',
            input: 'Sneak + left-click after Afterpulse',
            description: 'Carves forward quakes.',
          },
        },
        {
          id: 'rippleReturn',
          icon: 'wave',
          element: 'earth',
          followUp: true,
          chainOf: 'shockwave',
          guiColumn: 19,
          ko: {
            name: '거대 암석 투척',
            input: '바위 투척 직후 손 바꾸기',
            description:
              '거대한 암석을 던지고 추가 상승합니다. 충돌 지점 주변의 적에게 피해를 주고 기절시킵니다.',
          },
          en: {
            name: 'Giant Rock Throw',
            input: 'Swap hands after Rock Throw',
            description: 'Throws a giant rock and rises again. Its impact damages and stuns nearby enemies.',
          },
        },
        {
          id: 'bedrockUprising',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          chainOf: 'armorCrack',
          guiColumn: 2,
          ko: {
            name: '암반 융기',
            input: '쇄진파 직후 웅크리기 + 좌클릭',
            description:
              '전방 지점의 넓은 범위에서 암석 기둥을 순차적으로 솟구쳐 적에게 피해를 주고 기절시킵니다.',
          },
          en: {
            name: 'Bedrock Uprising',
            input: 'Sneak + left-click after Seismic Breaker',
            description:
              'Raises stone pillars in sequence across a wide area ahead, damaging and stunning enemies.',
          },
        },
        {
          id: 'earthBond',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          chainOf: 'earthSpike',
          guiColumn: 21,
          ko: {
            name: '응결 지반',
            input: '대지 고정 직후 웅크리기 + 우클릭',
            description: '시야 끝 지점 주위에 링 지진을 일으킵니다.',
          },
          en: {
            name: 'Earth Bond',
            input: 'Sneak + right-click after Earth Lock',
            description: 'Quakes in a ring at targeted ground.',
          },
        },
        {
          id: 'stratumBloom',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          chainOf: 'fissure',
          guiColumn: 22,
          ko: {
            name: '판층 개화',
            input: '균열 확산 직후 좌클릭',
            description: '주변 링 형태로 지반을 폭발시킵니다.',
          },
          en: {
            name: 'Stratum Bloom',
            input: 'Left-click after Fissure Spread',
            description: 'Ring of ground bursts.',
          },
        },
        {
          id: 'dustStorm',
          icon: 'wind',
          element: 'earth',
          followUp: true,
          chainOf: 'dustBurst',
          guiColumn: 23,
          ko: {
            name: '먼지 폭풍',
            input: '먼지 파동 직후 우클릭',
            description: '전방에 모래 회오리를 만들어 적을 중심부로 끌어당깁니다.',
          },
          en: {
            name: 'Dust Storm',
            input: 'Right-click after Dust Wave',
            description: 'Creates a sand whirlwind ahead that pulls enemies into its center.',
          },
        },
        {
          id: 'enduranceLimit2',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '역전',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Reversal',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'faultlineFinisher',
          icon: 'fist-serious',
          element: 'earth',
          ultimate: true,
          guiColumn: 26,
          ko: {
            name: '단층 완파',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '주위 적을 제압하고 암석 언덕과 함께 상승한 뒤, 급강하해 지면을 철퇴로 초토화합니다.',
          },
          en: {
            name: 'Faultline Finisher',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Suppresses nearby foes, rises on a rock hill, then crash-dives to smash the ground with your mace.',
          },
        },
      ],
    },
  ],
};
