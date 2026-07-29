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
            description: '하트 모양의 치유 파동으로 전방 아군을 회복·정화하고 재생을 부여합니다.',
          },
          en: {
            name: 'Healing Song',
            input: 'Sneak + right-click',
            description: 'Heals and cleanses allies ahead with a heart-shaped wave, then grants regeneration.',
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
              '전방에 앰프를 설치합니다. 이후 연주 스킬이 앰프에서도 함께 울리고, 근처면 다른 연주 사거리가 늘어납니다.',
          },
          en: {
            name: 'Amp',
            input: 'Swap hands',
            description:
              'Places an amp ahead that repeats later performances at reduced strength. A nearby amp also extends other skill range.',
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
            description: '소용돌이 연주로 적을 중앙으로 끌어당기고 실명·멀미·구속으로 제어합니다.',
          },
          en: {
            name: 'Confusion',
            input: 'Left-click',
            description: 'Pulls foes into a vortex and controls them with Blindness, Nausea, and a bind.',
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
            description: '전방 원뿔 파동으로 적을 타격하고 구속합니다. A코드를 저음에서 고음까지 빠르게 연주합니다.',
          },
          en: {
            name: 'Crescendo',
            input: 'Sneak + swap hands',
            description: 'Fires a forward cone wave that binds struck foes while rising through an A chord.',
          },
          masterLevel: 50,
        },
        {
          id: 'noteBurst',
          icon: 'wand',
          element: 'lightning',
          guiColumn: 5,
          ko: {
            name: '퍼포먼스',
            input: '웅크리기 + 좌클릭',
            description: '전방으로 짧게 순간이동한 뒤 원형으로 적을 공격하고 아군에게 힘·신속·흡수를 부여합니다.',
          },
          en: {
            name: 'Performance',
            input: 'Sneak + left-click',
            description: 'Flash-dashes forward, then damages in a ring and buffs allies with Strength, Speed, and Absorption.',
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
            description: '본인의 공격력이 증가합니다. 강화 연주는 아군에게 힘·신속과 공격 배율(×1.74)을 부여합니다.',
          },
          en: {
            name: 'Harmony',
            description: 'Increases your damage. Empowering performances grant allies Strength, Speed, and attack ×1.74.',
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
            name: '치유의합창',
            input: '치유의노래 직후 재입력',
            description: '작은 하트 6개를 원형으로 소환해 아군을 회복·정화하고 짧은 흡수를 부여합니다.',
          },
          en: {
            name: 'Healing Chorus',
            input: 'Re-input after Healing Song',
            description: 'Spawns six colored hearts in a ring to heal and cleanse allies with brief Absorption.',
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
            description: '전기처럼 전방으로 음표를 발사해 피해·약화·둔화·짧은 구속을 부여합니다.',
          },
          en: {
            name: 'Dissonance',
            input: 'Left-click again after Confusion',
            description: 'Screams jagged note bolts forward with Weakness, Slowness, and a brief bind.',
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
            description: 'fff 기호로 주위 적을 구속합니다.',
          },
          en: {
            name: 'Fortissimo',
            input: 'Re-input after Crescendo',
            description: 'Marks fff around you and binds nearby foes.',
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
            input: '퍼포먼스 직후 웅크리기 + 재좌클릭',
            description: '스타카토 음표(점 찍힌 음표)를 3회 연주하며 전방을 타격합니다.',
          },
          en: {
            name: 'Staccato Volley',
            input: 'Sneak + left-click again after Performance',
            description: 'Plays three staccato notes with dotted heads while striking ahead.',
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
              '단상을 소환하고 캐논 메인 멜로디를 연주합니다. 연주 중 아군을 회복·정화·강화하고 적에게 피해·둔화·짧은 제압을 줍니다.',
          },
          en: {
            name: 'Concert',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Summons a platform and plays Canon while pulsing heal, cleanse, and buffs for allies and damage, slow, and brief suppression for foes.',
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
            name: '행진곡',
            input: '치유의합창 직후 재입력',
            description: '거대 북을 소환해 C스케일 행진곡을 연주하고, 아군을 회복·보호하며 이속을 부여합니다.',
          },
          en: {
            name: 'March',
            input: 'Re-input after Healing Chorus',
            description: 'Summons a giant snare, plays a short C-major march, heals allies, and grants Speed.',
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
            description: '설치된 앰프 위치를 우선해 3회 낙뢰 공격을 가합니다. 앰프가 없으면 조준 지점에서 발동합니다.',
          },
          en: {
            name: 'Thunder Ripple',
            input: 'Swap hands again after Amp (limit 2)',
            description: 'Prioritizes the placed amp and calls three lightning strikes, or uses the aimed point if no amp remains.',
          },
        },
        {
          id: 'chaosChord',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'confusion',
          ko: {
            name: '악센트',
            input: '불협화음 직후 재좌클릭',
            description: '악센트(>) 기호와 크리퍼 얼굴 음표로 적을 놀래키며 공격하고 제압합니다.',
          },
          en: {
            name: 'Accent',
            input: 'Left-click again after Dissonance',
            description: 'Draws accent (>) marks and a creeper face in notes to scare, damage, and suppress foes.',
          },
        },
        {
          id: 'colossalPress',
          icon: 'wind-slash',
          element: 'lightning',
          followUp: true,
          chainOf: 'crescendo',
          ko: {
            name: '속주',
            input: '포르티시모 직후 재입력',
            description: '전방으로 음표를 10회 난사하고 오선지를 뻗으며, 타격한 적을 구속합니다.',
          },
          en: {
            name: 'Virtuoso Run',
            input: 'Re-input after Fortissimo',
            description: 'Barrages notes 10 times along a forward staff and binds struck foes.',
          },
        },
        {
          id: 'grandNote',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'noteBurst',
          ko: {
            name: '거대음표',
            input: '스타카토 직후 재입력',
            description: '거대 온음표를 소환해 폭발시키고 아군 전투 강화를 갱신합니다.',
          },
          en: {
            name: 'Giant Note',
            input: 'Re-input after Staccato',
            description: 'Spawns a giant whole note that explodes and refreshes ally combat buffs.',
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
              '무대·조명·단원을 소환하고 캐논을 풍성하게 연주합니다. 연주 중 아군에게 저항·흡수·힘을 주고 적에게 피해·실명·밀치기를 가합니다.',
          },
          en: {
            name: 'Maestro',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Summons a stage, lights, and ensemble for a rich Canon performance that grants allies Resistance, Absorption, and Strength while damaging, blinding, and blasting foes.',
          },
        },
      ],
    },
  ],
};
