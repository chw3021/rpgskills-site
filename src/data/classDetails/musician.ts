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
      '완드로 연주하며 아군 사기를 올리는 예술가입니다. 음파·치유의 노래·앰프·혼란 연주·크레센도로 전장을 다루고, 화음으로 공격력을 키웁니다.',
      '연출가는 음악과 예술에 통달해 콘서트로 광역 공연을 펼치며 아군을 강화하고 적을 제압합니다.',
      '거장은 마에스트로의 경지에 달해 콘서트 무대 위 음악의 신처럼 연주하며 전장을 지배합니다.',
    ],
    en: [
      'A musician who raises morale with a wand. Sonic wave, healing song, amp, confusion, and crescendo shape the fight while Harmony boosts damage for healed allies.',
      'The Producer masters music and art, unleashing Concert to buff allies and suppress foes across the field.',
      'The Maestro ascends like a muse of music on stage, commanding the battlefield with a divine performance.',
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
            description: '전방에 음파를 발사합니다.',
          },
          en: {
            name: 'Sonic Wave',
            input: 'Right-click',
            description: 'Fires a forward sonic wave.',
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
            description: '전방 아군을 회복하고 강화합니다.',
          },
          en: {
            name: 'Healing Song',
            input: 'Sneak + right-click',
            description: 'Heals and buffs allies ahead.',
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
            description: '전방에 피해와 회복 장판을 펼칩니다.',
          },
          en: {
            name: 'Amp',
            input: 'Swap hands',
            description: 'Creates a damage and heal field ahead.',
          },
          masterLevel: 50,
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
          id: 'harmony',
          icon: 'book',
          element: 'lightning',
          passive: true,
          guiColumn: 6,
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
          id: 'concert',
          icon: 'storm',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '콘서트',
            input: '웅크리기 + 아이템 버리기(Q)',
            description:
              '광역 공연으로 아군을 강화·회복하고 적을 제압합니다. 2차 한계 돌파 시 재사용 대기 35초(기본 70초).',
          },
          en: {
            name: 'Concert',
            input: 'Sneak + drop item (Q)',
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
          id: 'maestro',
          icon: 'wand',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '마에스트로',
            input: '핫바 4번 슬롯 선택',
            description:
              '광역 연주로 아군을 강화하고 적에게 피해·실명을 줍니다. 공격력·방어력이 오르고 콘서트 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Maestro',
            input: 'Select hotbar slot 4',
            description:
              'Wide performance buffs allies and damages/blinds foes. Raises damage and armor; shortens Concert cooldown.',
          },
        },
      ],
    },
  ],
};
