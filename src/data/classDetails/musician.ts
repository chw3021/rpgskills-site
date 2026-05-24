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
      '완드로 연주하며 아군 사기를 올리는 예술가입니다. 음파·치유의 노래·앰프·혼란 연주·크레센도·음표연주로 전장을 다루고, 화음으로 공격력을 키웁니다.',
      '연출가는 5종 연계 연주와 콘서트로 광역 공연을 펼치며 아군을 강화하고 적을 제압합니다.',
      '거장은 마에스트로의 경지에 달해 2차 연계와 콘서트 무대 위 음악의 신처럼 연주하며 전장을 지배합니다.',
    ],
    en: [
      'A musician who raises morale with a wand. Sonic wave, healing song, amp, confusion, crescendo, and note burst shape the fight while Harmony boosts damage for healed allies.',
      'The Producer unlocks five combo follow-ups, Note Burst chains, and Concert to buff allies and suppress foes across the field.',
      'The Maestro ascends with stronger limit-2 combos and a divine performance that commands the battlefield.',
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
            description: '전방 아군을 회복·강화하고 독·시듦·실명 등 해로운 효과를 제거합니다.',
          },
          en: {
            name: 'Healing Song',
            input: 'Sneak + right-click',
            description: 'Heals and buffs allies ahead while cleansing harmful effects.',
          },
          masterLevel: 50,
        },
        {
          id: 'amp',
          icon: 'storm',
          element: 'lightning',
          ko: {
            name: '앰프설치',
            input: '손 바꾸기',
            description:
              '전방에 피해와 회복 장판을 펼칩니다. 숙련 1+에서 근처 앰프가 음파·치유·혼란·크레센도·음표연주 사거리를, 숙련 2에서 앰프 지속을 늘립니다.',
          },
          en: {
            name: 'Amp',
            input: 'Swap hands',
            description:
              'Creates a damage and heal field ahead. Limit 1 extends other skill range near amp; limit 2 extends amp duration.',
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
            description: '적에게 혼란과 실명을 줍니다.',
          },
          en: {
            name: 'Confusion',
            input: 'Left-click',
            description: 'Confuses and blinds enemies.',
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
            description: '강한 음압으로 적을 밀어냅니다.',
          },
          en: {
            name: 'Crescendo',
            input: 'Sneak + swap hands',
            description: 'Pushes enemies with heavy sound pressure.',
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
            description: '음표 파티클로 적에게 피해를 주고 아군을 회복·강화합니다.',
          },
          en: {
            name: 'Note Burst',
            input: 'Sneak + left-click',
            description: 'Note particles damage foes and heal/buff allies.',
          },
        },
        {
          id: 'harmony',
          icon: 'book',
          element: 'lightning',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '화음',
            description: '공격력이 증가합니다. 치유받은 아군의 공격력도 증가합니다.',
          },
          en: {
            name: 'Harmony',
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
          id: 'waveEcho',
          icon: 'wand',
          element: 'lightning',
          followUp: true,
          chainOf: 'sonicWave',
          ko: {
            name: '음파잔향',
            input: '음파 직후 재우클릭',
            description: '짧은 음파 잔향 피해를 줍니다.',
          },
          en: {
            name: 'Wave Echo',
            input: 'Right-click again after Sonic Wave',
            description: 'Short echo wave damage.',
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
            description: '아군 회복과 적 피해를 동시에 줍니다.',
          },
          en: {
            name: 'Chorus',
            input: 'Re-input after Healing Song',
            description: 'Heals allies and damages foes.',
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
            description: '앰프 장판을 재폭발시킵니다.',
          },
          en: {
            name: 'Amp Ripple',
            input: 'Swap hands again after Amp',
            description: 'Re-triggers the amp field burst.',
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
            description: '추가 혼란·제압 피해를 줍니다.',
          },
          en: {
            name: 'Dissonance',
            input: 'Left-click again after Confusion',
            description: 'Extra confusion and suppression damage.',
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
            description: '강한 음압 연속 피해를 줍니다.',
          },
          en: {
            name: 'Fortissimo',
            input: 'Re-input after Crescendo',
            description: 'Follow-up sound pressure damage.',
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
            description: '빠른 음표 연속으로 적을 타격하고 아군을 회복합니다.',
          },
          en: {
            name: 'Staccato Volley',
            input: 'Sneak + left-click again after Note Burst',
            description: 'Rapid note volley damages foes and heals allies.',
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
              '광역 공연으로 아군을 강화·회복하고 적을 제압합니다. 2차 한계 돌파 시 재사용 대기 35초(기본 70초).',
          },
          en: {
            name: 'Concert',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Area performance buffs and heals allies while suppressing foes. Cooldown 35s at second limit break (70s base).',
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
            description: '공명이 연쇄하며 강화된 음파 잔향 피해를 줍니다.',
          },
          en: {
            name: 'Resonant Cascade',
            input: 'Right-click again after Sonic Wave (limit 2)',
            description: 'Resonant chain deals stronger echo wave damage.',
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
            description: '웅장한 합창으로 강화된 회복·피해를 줍니다.',
          },
          en: {
            name: 'Grand Chorus',
            input: 'Re-input after Healing Song (limit 2)',
            description: 'Grand chorus with stronger heal and damage.',
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
            description: '번개처럼 퍼지는 강화 앰프 재폭발입니다.',
          },
          en: {
            name: 'Thunder Ripple',
            input: 'Swap hands again after Amp (limit 2)',
            description: 'Lightning-like stronger amp field burst.',
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
            description: '혼돈의 화음으로 강화된 제압 피해를 줍니다.',
          },
          en: {
            name: 'Chaos Chord',
            input: 'Left-click again after Confusion (limit 2)',
            description: 'Chaotic chord with stronger suppression damage.',
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
            description: '압도적인 음압으로 적을 강하게 밀어냅니다.',
          },
          en: {
            name: 'Colossal Press',
            input: 'Re-input after Crescendo (limit 2)',
            description: 'Colossal sound pressure knocks enemies back harder.',
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
            description: '대서사시 같은 음표 폭풍으로 광역 피해·회복을 줍니다.',
          },
          en: {
            name: 'Grand Note',
            input: 'Sneak + left-click again after Note Burst (limit 2)',
            description: 'Epic note storm for wide damage and healing.',
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
              '광역 연주로 아군을 강화하고 적에게 피해·실명을 줍니다. 공격력·방어력이 오르고 콘서트 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Maestro',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Wide performance buffs allies and damages/blinds foes. Raises damage and armor; shortens Concert cooldown.',
          },
        },
      ],
    },
  ],
};
