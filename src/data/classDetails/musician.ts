import type { ClassDetailDef } from './types';

export const musicianDetail: ClassDetailDef = {
  id: 'musician',
  order: 28,
  element: { en: 'Lightning', ko: '전격' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'musician.png', en: { title: 'Musician' }, ko: { title: '예술가' } },
      { tier: 1, portraitFile: 'musician-limit1.png', en: { title: 'Producer' }, ko: { title: '연출가' } },
      { tier: 2, portraitFile: 'musician-limit2.png', en: { title: 'Maestro' }, ko: { title: '거장' } },
    ],
  },
  story: {
    ko: [
      '공격·회복·장판·제어·밀치기·강화의 여섯 연주를 지휘하는 전장 지원가입니다. 화음은 본인의 공격력을 높입니다.',
      '연출가는 여섯 연계를 이어가며, 네 번의 공연으로 아군을 회복·정화·강화하고 적을 제압하는 콘서트를 엽니다.',
      '거장은 여섯 연계를 완성하고, 즉발 피날레 마에스트로로 적을 날리며 아군에게 강력한 전투 보호를 부여합니다.',
    ],
    en: [
      'A battlefield support conductor with six distinct roles: attack, healing, zoning, control, peel, and combat buffs. Harmony increases the musician’s own damage.',
      'The Producer chains six follow-ups and stages Concert, a four-pulse performance that heals, cleanses, and buffs allies while suppressing foes.',
      'The Maestro completes all six chains and delivers an instant finale that blasts enemies away while strongly protecting allies.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'sonicWave',
          icon: 'wand',
          element: 'lightning',
          ko: {
            name: '음파',
            input: '우클릭',
            description: '전방에 음파를 발사합니다. 가까운 앰프가 있으면 사거리가 늘어납니다.',
          },
          en: {
            name: 'Sonic Wave',
            input: 'Right-click',
            description: 'Fires a forward sonic wave. Range extends near an active amp field.',
          },
          masterLevel: 50,
        },
        {
          id: 'healingSong',
          icon: 'recovery',
          element: 'lightning',
          ko: {
            name: '치유의노래',
            input: '웅크리기 + 우클릭',
            description: '전방 아군을 회복·정화하고 재생을 부여합니다. 공격 효과나 전투 강화는 없습니다.',
          },
          en: {
            name: 'Healing Song',
            input: 'Sneak + right-click',
            description: 'Heals and cleanses allies ahead, then grants regeneration without offensive buffs.',
          },
          masterLevel: 10,
        },
        {
          id: 'amp',
          icon: 'storm',
          element: 'lightning',
          ko: {
            name: '앰프설치',
            input: '손 바꾸기',
            description:
              '전방에 5회 피해와 둔화를 주는 장판을 펼칩니다. 숙련 1+에서 다른 연주 사거리를, 숙련 2에서 앰프 지속을 늘립니다.',
          },
          en: {
            name: 'Amp',
            input: 'Swap hands',
            description:
              'Creates a five-pulse damage and slow field. Limit 1 extends other skill range near it; limit 2 extends its duration.',
          },
          masterLevel: 1,
        },
        {
          id: 'confusion',
          icon: 'wand',
          element: 'lightning',
          ko: {
            name: '혼란연주',
            input: '좌클릭',
            description: '전방 적에게 피해를 주고 실명·멀미·구속으로 제어합니다.',
          },
          en: {
            name: 'Confusion',
            input: 'Left-click',
            description: 'Damages enemies ahead and controls them with Blindness, Nausea, and a bind.',
          },
          masterLevel: 50,
        },
        {
          id: 'crescendo',
          icon: 'wind-slash',
          element: 'lightning',
          ko: {
            name: '크레센도',
            input: '웅크리기 + 손 바꾸기',
            description: '자기 주변 적에게 피해를 주고 바깥으로 강하게 밀어냅니다.',
          },
          en: {
            name: 'Crescendo',
            input: 'Sneak + swap hands',
            description: 'Damages nearby enemies and forcefully peels them outward.',
          },
          masterLevel: 50,
        },
        {
          id: 'noteBurst',
          icon: 'wand',
          element: 'lightning',
          guiColumn: 5,
          ko: {
            name: '음표연주',
            input: '웅크리기 + 좌클릭',
            description: '적에게 단발 피해를 주고 아군에게 힘·신속·흡수를 부여합니다. 레벨에 따라 강화 시간이 늘어납니다.',
          },
          en: {
            name: 'Note Burst',
            input: 'Sneak + left-click',
            description: 'Deals one hit to foes and grants allies Strength, Speed, and Absorption for a level-scaled duration.',
          },
          masterLevel: 50,
        },
        {
          id: 'harmony',
          icon: 'book',
          element: 'lightning',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '화음',
            description: '본인의 공격력이 증가합니다. 강화 연주는 아군에게 힘·신속을 부여합니다.',
          },
          en: {
            name: 'Harmony',
            description: 'Increases your damage. Empowering performances grant allies Strength and Speed.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'waveEcho',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'sonicWave',
          ko: {
            name: '음파잔향',
            input: '음파 직후 재우클릭',
            description: '잔향이 전방으로 나갔다 돌아오며 단계마다 대상을 한 번씩 타격합니다.',
          },
          en: {
            name: 'Wave Echo',
            input: 'Right-click again after Sonic Wave',
            description: 'An echo travels forward and returns, hitting each target once per stage.',
          },
        },
        {
          id: 'chorus',
          icon: 'recovery',
          element: 'lightning',
          followUp: true,
          chainOf: 'healingSong',
          ko: {
            name: '합창',
            input: '치유의노래 직후 재입력',
            description: '아군을 회복·정화하고 짧은 흡수 보호를 부여합니다.',
          },
          en: {
            name: 'Chorus',
            input: 'Re-input after Healing Song',
            description: 'Heals and cleanses allies, then grants brief Absorption.',
          },
        },
        {
          id: 'ampRipple',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'amp',
          ko: {
            name: '앰프파문',
            input: '앰프설치 직후 재손바꾸기',
            description: '현재 앰프 중심을 폭발시켜 적을 끌어당기고 둔화합니다. 앰프가 없으면 조준 지점에서 발동합니다.',
          },
          en: {
            name: 'Amp Ripple',
            input: 'Swap hands again after Amp',
            description: 'Bursts at the amp center to pull and slow foes, or uses the aimed point when no amp is active.',
          },
        },
        {
          id: 'dissonance',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'confusion',
          ko: {
            name: '불협화음',
            input: '혼란연주 직후 재좌클릭',
            description: '피해와 함께 약화·둔화·짧은 구속을 부여해 적의 전투력을 낮춥니다.',
          },
          en: {
            name: 'Dissonance',
            input: 'Left-click again after Confusion',
            description: 'Deals damage and reduces combat power with Weakness, Slowness, and a brief bind.',
          },
        },
        {
          id: 'fortissimo',
          icon: 'wind-slash',
          element: 'lightning',
          followUp: true,
          chainOf: 'crescendo',
          ko: {
            name: '포르티시모',
            input: '크레센도 직후 재입력',
            description: '전방 부채꼴을 강타해 맞은 적만 강하게 날립니다.',
          },
          en: {
            name: 'Fortissimo',
            input: 'Re-input after Crescendo',
            description: 'Strikes a forward cone and launches only enemies caught ahead.',
          },
        },
        {
          id: 'staccatoVolley',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'noteBurst',
          ko: {
            name: '스타카토',
            input: '음표연주 직후 웅크리기 + 재좌클릭',
            description: '전방으로 빠른 음표를 3회 사격하며, 각 발은 대상당 한 번 타격합니다.',
          },
          en: {
            name: 'Staccato Volley',
            input: 'Sneak + left-click again after Note Burst',
            description: 'Fires three rapid notes forward, each hitting a target at most once.',
          },
        },
        {
          id: 'harmonyLimit1',
          icon: 'book',
          element: 'lightning',
          passive: true,
          ko: { name: '화음강화', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Harmony Ascendant', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'concert',
          icon: 'storm',
          element: 'lightning',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '콘서트',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '10틱 간격의 4회 공연으로 아군을 소량 회복·정화·강화하고 적에게 피해·둔화·짧은 제압을 줍니다. 2차 한계 돌파 시 재사용 대기 35초(기본 70초).',
          },
          en: {
            name: 'Concert',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Four pulses at 10-tick intervals lightly heal, cleanse, and buff allies while damaging, slowing, and briefly suppressing foes. Cooldown is 35s at limit 2 (70s base).',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'resonantCascade',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'sonicWave',
          ko: {
            name: '공명연쇄',
            input: '음파 직후 재우클릭 (2차)',
            description: '더 멀리 진행하는 음파를 3회 발사하며, 각 파동은 대상당 한 번 타격합니다.',
          },
          en: {
            name: 'Resonant Cascade',
            input: 'Right-click again after Sonic Wave (limit 2)',
            description: 'Launches three farther-reaching waves, each hitting a target at most once.',
          },
        },
        {
          id: 'grandChorus',
          icon: 'recovery',
          element: 'lightning',
          followUp: true,
          chainOf: 'healingSong',
          ko: {
            name: '웅장합창',
            input: '치유의노래 직후 재입력 (2차)',
            description: '넓은 전방 아군을 강하게 회복·정화하고 흡수 보호를 부여합니다.',
          },
          en: {
            name: 'Grand Chorus',
            input: 'Re-input after Healing Song (limit 2)',
            description: 'Strongly heals and cleanses allies across a wide area, then grants Absorption.',
          },
        },
        {
          id: 'thunderRipple',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'amp',
          ko: {
            name: '낙뢰파문',
            input: '앰프설치 직후 재손바꾸기 (2차)',
            description: '현재 앰프 중심 또는 조준 지점에 3회 낙뢰 공격을 가합니다.',
          },
          en: {
            name: 'Thunder Ripple',
            input: 'Swap hands again after Amp (limit 2)',
            description: 'Calls three strikes at the active amp center or aimed point.',
          },
        },
        {
          id: 'chaosChord',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'confusion',
          ko: {
            name: '혼돈화음',
            input: '혼란연주 직후 재좌클릭 (2차)',
            description: '전방 적에게 피해를 주고 장시간 실명·멀미·구속을 부여합니다.',
          },
          en: {
            name: 'Chaos Chord',
            input: 'Left-click again after Confusion (limit 2)',
            description: 'Damages enemies ahead and applies long Blindness, Nausea, and binding.',
          },
        },
        {
          id: 'colossalPress',
          icon: 'wind-slash',
          element: 'lightning',
          followUp: true,
          chainOf: 'crescendo',
          ko: {
            name: '거대압전',
            input: '크레센도 직후 재입력 (2차)',
            description: '주변 적을 끌어모은 뒤 폭발 피해와 함께 바깥으로 날립니다.',
          },
          en: {
            name: 'Colossal Press',
            input: 'Re-input after Crescendo (limit 2)',
            description: 'Pulls nearby enemies inward, then detonates and blasts them outward.',
          },
        },
        {
          id: 'grandNote',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'noteBurst',
          ko: {
            name: '대장연이표',
            input: '음표연주 직후 웅크리기 + 재좌클릭 (2차)',
            description: '3회 연주로 적에게 피해를 주고 아군의 힘·신속·흡수 지속시간을 갱신합니다.',
          },
          en: {
            name: 'Grand Note',
            input: 'Sneak + left-click again after Note Burst (limit 2)',
            description: 'Three pulses damage foes and refresh ally Strength, Speed, and Absorption.',
          },
        },
        {
          id: 'harmonyLimit2',
          icon: 'book',
          element: 'lightning',
          passive: true,
          ko: {
            name: '거장화음',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Grand Harmony',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'maestro',
          icon: 'wand',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '마에스트로',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '즉발 피날레로 적에게 강한 피해·실명·외곽 밀치기를 주고 아군에게 저항·흡수·힘을 부여합니다. 직접 회복이나 정화는 없습니다.',
          },
          en: {
            name: 'Maestro',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'An instant finale heavily damages, blinds, and blasts foes outward while granting allies Resistance, Absorption, and Strength without direct healing or cleansing.',
          },
        },
      ],
    },
  ],
};
