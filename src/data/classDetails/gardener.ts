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
      '숙련 1에서 기본 스킬 재입력 연계가 열리고, 과성장으로 범위 내 설치 스킬을 키우며 장판 다단 피해를 냅니다. 숙련 2에서 연계가 강화되고 세계수로 거대 나무와 낙하 씨앗 폭발을 씁니다.',
      '조물주는 식물을 자유자재로 다루고, 자연신은 세계수 꼭대기에서 숲 전체를 거느리듯 전장을 지배합니다.',
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
              '전방 지점에 덩굴 뿌리(BlockDisplay) 장판을 설치합니다. 5초간 SWEEP·덩굴 파티클이 중앙으로 수렴하며 적을 끌어당기고 제압·틱 피해를 줍니다.',
            extra: [
              '반경 2.3, 10틱마다 판정. 재사용 5초×(1−행운/1024)×일반쿨감소.',
              '숙련 1 이상 시 식충 줄기 연계 창이 열립니다(3.5초 / 숙련2 4.0초).',
            ],
          },
          en: {
            name: 'Vine Whip',
            input: 'Shovel + not sneaking + right-click',
            description:
              'Deploys a vine root patch (BlockDisplay) ahead. For 5s, SWEEP and vine particles converge inward, pulling, suppressing, and ticking damage.',
            extra: [
              'Radius 2.3, hit every 10 ticks. Cooldown 5s×(1−luck/1024)×normal CD reduction.',
              'Unlocks Carnivorous Stalk combo at proficiency 1+ (3.5s / 4.0s at proficiency 2).',
            ],
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
              '대상 지점에 작은 씨앗(ArmorStand)을 소환합니다. 즉시 폭발하지 않으며, 다른 정원사 스킬 사용 시 성장해 5단계에서 자동 폭발합니다.',
            extra: [
              '씨앗폭탄·숙성 폭발 사용 시에는 성장하지 않습니다.',
              '재사용 6초×일반쿨감소. 숙련 1 이상 시 숙성 폭발 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Seed Bomb',
            input: 'Shovel + not sneaking + swap hands',
            description:
              'Plants a small seed (ArmorStand) at the target. It does not explode immediately; other gardener skills make it grow until stage 5 triggers a blast.',
            extra: [
              'Seed Bomb and Ripe Detonation do not count as growth triggers.',
              'Cooldown 6s×normal CD reduction. Unlocks Ripe Detonation combo at proficiency 1+.',
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
              'BlockDisplay 뿌리 감옥을 소환합니다. 내부 적에게 6회 다단히트와 superholding을 적용하며, 밖에서 들어온 적도 제압됩니다.',
            extra: [
              '반경 3.2, 8틱 간격 6타. 재사용 9초×일반쿨감소.',
              '숙련 1 이상 시 뿌리 올가미 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Root Prison',
            input: 'Shovel + sneak + right-click',
            description:
              'Summons a BlockDisplay root cage. 6 multi-hits with superholding inside; enemies entering from outside are also suppressed.',
            extra: [
              'Radius 3.2, 6 hits every 8 ticks. Cooldown 9s×normal CD reduction.',
              'Unlocks Root Lasso combo at proficiency 1+.',
            ],
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
            description:
              '주력 공격기. 가시 BlockDisplay가 솟구치며 4회 다단히트합니다. 공격적으로 튀어 오르는 가시 파티클 연출.',
            extra: [
              '반경 3.1, 7틱 간격 4타(5회 미만). 재사용 7초×일반쿨감소.',
              '숙련 1 이상 시 가시 솟구침 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Thorn Field',
            input: 'Shovel + not sneaking + left-click',
            description:
              'Main attack skill. Thorn BlockDisplays erupt for 4 multi-hits with aggressive upward spike particles.',
            extra: [
              'Radius 3.1, 4 hits every 7 ticks (under 5 hits). Cooldown 7s×normal CD reduction.',
              'Unlocks Thorn Eruption combo at proficiency 1+.',
            ],
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
            description:
              '전방에 포자 구름을 펼칩니다. SPORE_BLOSSOM BlockDisplay와 함께 15회 다단히트, 실명, 간헐 제압.',
            extra: [
              '전방 4블록, 반경 3.4, 4틱 간격 15타. 재사용 8초×일반쿨감소.',
              '숙련 1 이상 시 포자 만화 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Spore Cloud',
            input: 'Shovel + sneak + swap hands',
            description:
              'Spreads a spore cloud ahead with a BlockDisplay blossom. 15 multi-hits, blindness, and periodic suppression.',
            extra: [
              '4 blocks forward, radius 3.4, 15 hits every 4 ticks. Cooldown 8s×normal CD reduction.',
              'Unlocks Spore Flourish combo at proficiency 1+.',
            ],
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
              '다양한 꽃 BlockDisplay 정원을 소환합니다. 10틱마다 주변 적에게 피해·제압 버프존을 유지합니다.',
            extra: [
              '반경 2.8, 지속 틱 피해. 재사용 12초×(1−행운/1024)×일반쿨감소.',
              '숙련 1 이상 시 꽃가루 폭풍 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Flower Garden',
            input: 'Shovel + not sneaking + jump + left-click',
            description:
              'Summons a flower garden of varied BlockDisplays. Every 10 ticks, damages and suppresses nearby foes.',
            extra: [
              'Radius 2.8, sustained tick damage. Cooldown 12s×(1−luck/1024)×normal CD reduction.',
              'Unlocks Pollen Gale combo at proficiency 1+.',
            ],
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
              '세로로 솟은 포식 줄기(이끼·슬라임·피처플랜트)를 소환합니다. 중심에서 바깥으로 채찍이 뻗으며 다단 타격합니다.',
            extra: ['5방향 바깥 채찍. 피해량은 덩굴채찍 레벨에 비례합니다.'],
          },
          en: {
            name: 'Carnivorous Stalk',
            input: 'Right-click again after Vine Whip',
            description:
              'Summons tall carnivorous stalks (moss, slime, pitcher plant). Whips lash outward from the center in multi-hits.',
            extra: ['5 outward lashes. Damage scales with Vine Whip level.'],
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
              '활성 씨앗이 있으면 즉시 만렙 성장 후 폭발. 없으면 대상 지점에 3파 링 연쇄 폭발.',
            extra: ['배율 1.25. 피해량은 씨앗폭탄 레벨에 비례합니다.'],
          },
          en: {
            name: 'Ripe Detonation',
            input: 'Swap hands again after Seed Bomb',
            description:
              'If a seed is active, instantly max-grows and detonates. Otherwise, 3-ring chain explosions at the target.',
            extra: ['1.25× multiplier. Damage scales with Seed Bomb level.'],
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
            description: '확대 뿌리 감옥. 7회 다단히트, 반경 확대, superholding 유지.',
            extra: ['반경 3.4. 피해량은 뿌리감옥 레벨에 비례합니다.'],
          },
          en: {
            name: 'Root Lasso',
            input: 'Right-click again after Root Prison',
            description: 'Larger root cage: 7 multi-hits, wider radius, sustained superholding.',
            extra: ['Radius 3.4. Damage scales with Root Prison level.'],
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
            description: '가시 4회 다단, 웨이브당 가시 2개 동시 솟구침.',
            extra: ['반경 3.4, 6틱 간격. 피해량은 가시밭 레벨에 비례합니다.'],
          },
          en: {
            name: 'Thorn Eruption',
            input: 'Left-click again after Thorn Field',
            description: '4 multi-hits with 2 thorn spikes erupting per wave.',
            extra: ['Radius 3.4, 6-tick interval. Damage scales with Thorn Field level.'],
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
            description: '18회 다단 포자 구름. 반경·실명 시간 확대.',
            extra: ['전방 5블록, 반경 3.8. 피해량은 포자구름 레벨에 비례합니다.'],
          },
          en: {
            name: 'Spore Flourish',
            input: 'Swap hands again after Spore Cloud',
            description: '18-hit spore cloud with wider radius and longer blindness.',
            extra: ['5 blocks forward, radius 3.8. Damage scales with Spore Cloud level.'],
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
            description: '대상 지점에 꽃 정원을 펼치고 4회 다단 꽃가루 폭발.',
            extra: ['반경 3.2. 피해량은 꽃소환 레벨에 비례합니다.'],
          },
          en: {
            name: 'Pollen Gale',
            input: 'Jump + left-click after Flower Garden',
            description: 'Deploys a flower garden at the target and 4-hit pollen bursts.',
            extra: ['Radius 3.2. Damage scales with Flower Garden level.'],
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
              '공격력이 증가합니다(성장 레벨 비례). 숙련 1 연계 기술이 해제되고 연계 창이 열립니다.',
          },
          en: {
            name: 'Garden Training',
            description:
              'Increases damage (scales with Growth level). Unlocks limit-1 combo follow-ups.',
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
              '범위 내 설치 스킬·소환체의 크기와 장판 반경을 키우고, 성장 파티클 장판에서 8회 다단 피해를 줍니다.',
            extra: [
              '스캔 반경 6블록, 버프 배율 1.35(숙련2 1.45). 8타, 10틱 간격, 총 공격력×18 분배.',
              '전투 모드 전용. 재사용 숙련1 70초 / 숙련2 35초×궁극기쿨감소.',
            ],
          },
          en: {
            name: 'Overgrowth',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Buffs deployed skills and summons in range (size + radius), then deals 8-hit aura damage with growth particles.',
            extra: [
              'Scan radius 6 blocks, buff 1.35× (1.45× at proficiency 2). 8 hits every 10 ticks, 18× ATK total.',
              'Combat mode only. Cooldown 70s / 35s at proficiency 2 × ultimate CD reduction.',
            ],
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
              '맹그로브 뿌리가 나선으로 감싸 오르는 교살 감옥을 소환합니다. 영혼·역포털 파티클이 위로 솟았다가 중앙으로 짓누르며 superholding합니다.',
            extra: ['반경 2.5, 약 5초. 피해량은 덩굴채찍 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Vine Strangle',
            input: 'Vine Whip follow-up (proficiency 2)',
            description:
              'Summons a mangrove-root helix cage. Soul and reverse-portal particles spiral up then crush inward with superholding.',
            extra: ['Radius 2.5, ~5s. Damage scales with Vine Whip level ×1.35.'],
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
            description: '만렙 즉시 폭발 또는 4파 링 폭발 + 대상 지점 추가 폭발(배율 1.45).',
            extra: ['피해량은 씨앗폭탄 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Seed Hail',
            input: 'Seed Bomb follow-up (proficiency 2)',
            description: 'Instant max detonation or 4-ring blasts + bonus blast at target (1.45×).',
            extra: ['Damage scales with Seed Bomb level ×1.35.'],
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
            description: '이중 링 감옥, 높이 4층, 8회 다단히트.',
            extra: ['반경 3.8. 피해량은 뿌리감옥 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Earth Pen',
            input: 'Root Prison follow-up (proficiency 2)',
            description: 'Double-ring cage, 4-block height, 8 multi-hits.',
            extra: ['Radius 3.8. Damage scales with Root Prison level ×1.35.'],
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
            description: '5틱 간격 4타, 웨이브당 가시 2개, 반경 확대.',
            extra: ['반경 3.8. 피해량은 가시밭 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Thorn Flurry',
            input: 'Thorn Field follow-up (proficiency 2)',
            description: '4 hits every 5 ticks, 2 spikes per wave, wider radius.',
            extra: ['Radius 3.8. Damage scales with Thorn Field level ×1.35.'],
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
            description: '20회 다단 + 중독 + 강화 제압. 3틱 간격.',
            extra: ['반경 4.2. 피해량은 포자구름 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Blight Mist',
            input: 'Spore Cloud follow-up (proficiency 2)',
            description: '20 multi-hits with poison and stronger suppression. 3-tick interval.',
            extra: ['Radius 4.2. Damage scales with Spore Cloud level ×1.35.'],
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
            description: '대형 꽃 정원 + 꽃잎 수렴 5회 다단. 매타 제압·끌기.',
            extra: ['반경 3.6. 피해량은 꽃소환 레벨×1.35에 비례합니다.'],
          },
          en: {
            name: 'Thousand Blossoms',
            input: 'Flower Garden follow-up (proficiency 2)',
            description: 'Large flower garden + 5-hit converging petal bursts. Suppression and pull each hit.',
            extra: ['Radius 3.6. Damage scales with Flower Garden level ×1.35.'],
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
              '거대 세계수(BlockDisplay)를 소환하고 수관에서 거대 씨앗 8개가 낙하·폭발합니다. 폭발마다 제압 45틱.',
            extra: [
              '자기 위치 중심. 폭발 반경 2.8, 총 공격력×30을 8폭발로 분배.',
              '전투 모드 전용. 재사용 80초×궁극기쿨감소.',
            ],
          },
          en: {
            name: 'World Tree',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Summons a giant BlockDisplay world tree; 8 huge seeds fall from the canopy and explode. 45-tick suppression per blast.',
            extra: [
              'Centered on caster. Blast radius 2.8, 30× ATK split across 8 explosions.',
              'Combat mode only. Cooldown 80s × ultimate CD reduction.',
            ],
          },
        },
      ],
    },
  ],
};
