import type { ClassDetailDef } from './types';

export const vanguardDetail: ClassDetailDef = {
  id: 'vanguard',
  order: 8,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'vanguard.png', en: { title: 'Vanguard' }, ko: { title: '선봉병' } },
      { tier: 1, portraitFile: 'vanguard-limit1.png', en: { title: 'Iron Vanguard' }, ko: { title: '철선봉' } },
      { tier: 2, portraitFile: 'vanguard-limit2.png', en: { title: 'Line Marshal' }, ko: { title: '진군장' } },
    ],
  },
  story: {
    ko: [
      '창과 방패로 최전선을 지키는 선봉병입니다. 포진찌르기와 창격돌, 창고착으로 진형을 뚫고 전열함성으로 아군을 이끕니다.',
      '창술은 근접 피해를 키우며, 방패·삼지창 보조 슬롯에서는 스킬을 쓸 수 없습니다. 숙련이 오르면 연계 창술이 열립니다.',
      '철벽진영과 관통진으로 전장의 중심이 됩니다. 철선봉, 진군장으로 승진할수록 갑주는 무거워지고 명령은 더 단단해집니다.',
    ],
    en: [
      'A frontline soldier who holds the line with spear and shield. Phalanx jab, spear brace, and skewering charge break ranks while rallying call buffs allies.',
      'Spear Discipline raises melee damage; skills cannot be used with a shield or trident in the off-hand. Higher proficiency unlocks combo follow-ups.',
      'Iron Phalanx and Piercing Array make them the anchor of the fight. Promotion to Iron Vanguard and Line Marshal brings heavier armor and sharper command.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'phalanxJab',
          icon: 'spear',
          element: 'earth',
          ko: {
            name: '포진찌르기',
            input: '우클릭',
            description: '전방 직선으로 길게 찌릅니다.',
          },
          en: {
            name: 'Phalanx Jab',
            input: 'Right-click',
            description: 'A long thrust in a straight line.',
          },
          masterLevel: 50,
        },
        {
          id: 'spearBrace',
          icon: 'shield',
          element: 'earth',
          ko: {
            name: '창격돌',
            input: '웅크리기 + 우클릭',
            description: '전방을 밀치며 피해를 줍니다.',
          },
          en: {
            name: 'Spear Brace',
            input: 'Sneak + right-click',
            description: 'Shoves enemies ahead for damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'skeweringCharge',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '창고착',
            input: '손 바꾸기',
            description: '전방으로 짧게 돌진하며 관통 피해를 줍니다.',
          },
          en: {
            name: 'Skewering Charge',
            input: 'Swap hands',
            description: 'A short lunge that pierces enemies.',
          },
          masterLevel: 50,
        },
        {
          id: 'rallyingCall',
          icon: 'spear',
          element: 'earth',
          ko: {
            name: '전열 함성',
            input: '웅크리기 + 손 바꾸기',
            description:
              '주변 적에게 피해를 주고, 파티원에게 신속·흡수를 부여합니다(솔로는 본인만).',
          },
          en: {
            name: 'Rallying Call',
            input: 'Sneak + swap hands',
            description:
              'Damages nearby foes; grants Speed and Absorption to party (solo: self only).',
          },
          masterLevel: 50,
        },
        {
          id: 'spearDiscipline',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '창술',
            description: '근접 피해가 증가합니다. 보조 슬롯에 방패·삼지창이 있으면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Spear Discipline',
            description: 'Increases melee damage. Cannot use skills with shield or trident in off-hand.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'phalanxRend',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          ko: {
            name: '돌진찌르기',
            input: '포진찌르기 후 재우클릭',
            description: '포진찌르기 사용 후 짧은 시간 안에 재우클릭으로 돌진 찌르기를 이어갑니다.',
          },
          en: {
            name: 'Phalanx Rend',
            input: 'Right-click again after Phalanx Jab',
            description: 'Within a short window after Phalanx Jab, right-click again to lunge-thrust.',
          },
        },
        {
          id: 'spearDrive',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          ko: {
            name: '맹렬창격',
            input: '창격돌 후 웅크리기 + 재우클릭',
            description: '창격돌 사용 후 짧은 시간 안에 웅크리기+재우클릭으로 맹렬 창격을 이어갑니다.',
          },
          en: {
            name: 'Spear Drive',
            input: 'Sneak + right-click again after Spear Brace',
            description: 'Within a short window after Spear Brace, sneak and right-click again for a fierce drive.',
          },
        },
        {
          id: 'ironPhalanx',
          icon: 'shield',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '철벽진영',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '웅크린 상태에서 핫바 4번으로 전환합니다. 주변 적에게 피해를 주고 가까운 파티원에게 흡수를 부여합니다.',
          },
          en: {
            name: 'Iron Phalanx',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'While sneaking, switch to hotbar slot 4. Damages nearby foes and grants Absorption to nearby party members.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'piercingArray',
          icon: 'spear',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '관통진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '웅크린 상태에서 핫바 5번으로 전환합니다. 시선 방향 직선에 막대한 피해를 줍니다.',
          },
          en: {
            name: 'Piercing Array',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'While sneaking, switch to hotbar slot 5. Deals massive line damage along your gaze.',
          },
        },
      ],
    },
  ],
};
