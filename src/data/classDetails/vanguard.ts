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
      '창으로 최전선을 압박하는 선봉병입니다. 포진찌르기는 전방 원뿔을 연타하며 적을 붙잡고, 시전 중 무적 상태가 됩니다.',
      '창격돌로 지면을 내려찍어 적을 중앙으로 모으고, 창고착은 거대 창을 회전 휘두르며 주위를 벱니다. 상승창격으로 적을 띄운 뒤 공중창격·천공창격으로 연계합니다.',
      '창술·진형 숙련·선봉 교리로 근접·스킬 피해가 성장하며, 철벽진영과 관통진으로 전장의 중심이 됩니다. 보조에 방패·삼지창이 있으면 스킬을 쓸 수 없습니다.',
    ],
    en: [
      'A frontline soldier who pins foes with spear pressure. Phalanx Jab multi-hits a forward cone, super-holds enemies, and grants channel invulnerability.',
      'Spear Brace slams the ground and pulls foes inward. Skewering Charge spins a giant spear arc; Rising Spear launches foes into Aerial Spear and Skybound Spear.',
      'Spear Discipline, Phalanx Training, and Vanguard Doctrine raise melee and skill damage. Iron Phalanx and Piercing Array anchor the fight. No skills with shield or trident off-hand.',
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
          guiColumn: 0,
          ko: {
            name: '포진찌르기',
            input: '우클릭',
            description:
              '짧게 전방으로 파고든 뒤, 시선 방향 원뿔 안의 적을 창으로 연속 찌릅니다. 적을 강하게 붙잡고, 시전 중 무적 상태가 됩니다.',
          },
          en: {
            name: 'Phalanx Jab',
            input: 'Right-click',
            description:
              'Step in and repeatedly thrust at enemies in a forward cone. Strongly holds foes in the cone and grants invulnerability while channeling.',
          },
          masterLevel: 50,
        },
        {
          id: 'spearBrace',
          icon: 'shield',
          element: 'earth',
          guiColumn: 1,
          ko: {
            name: '창격돌',
            input: '웅크리기 + 좌클릭',
            description:
              '전방 지면을 창으로 내려찍어 지진을 일으킵니다. 적을 중앙으로 끌어당기며 연속으로 피해를 줍니다.',
          },
          en: {
            name: 'Spear Brace',
            input: 'Sneak + left-click',
            description:
              'Slams the spear into the ground ahead, shaking the earth and pulling enemies inward with repeated hits.',
          },
          masterLevel: 50,
        },
        {
          id: 'skeweringCharge',
          icon: 'rush',
          element: 'earth',
          guiColumn: 2,
          ko: {
            name: '창고착',
            input: '손 바꾸기',
            description: '거대한 창을 회전시켜 전방을 휩쓸며 연속으로 피해를 줍니다.',
          },
          en: {
            name: 'Skewering Charge',
            input: 'Swap hands',
            description: 'Spins a giant spear in a forward arc, sweeping foes with repeated hits.',
          },
          masterLevel: 50,
        },
        {
          id: 'rallyingCall',
          icon: 'spear',
          element: 'earth',
          guiColumn: 3,
          ko: {
            name: '전열 함성',
            input: '웅크리기 + 손 바꾸기',
            description:
              '주변 적에게 피해를 주고, 아군에게 신속과 흡수를 부여합니다. 혼자일 때는 본인만 강화됩니다.',
          },
          en: {
            name: 'Rallying Call',
            input: 'Sneak + swap hands',
            description:
              'Damages nearby foes, then grants Speed and Absorption to allies (yourself only when solo).',
          },
          masterLevel: 50,
        },
        {
          id: 'spearSweep',
          icon: 'slash',
          element: 'earth',
          guiColumn: 4,
          ko: {
            name: '창 휘두르기',
            input: '좌클릭',
            description:
              '짧게 전진한 뒤 창을 휘둘러 전방의 적을 타격하고 중앙으로 끌어모읍니다. 맞은 적은 잠시 붙잡힙니다.',
          },
          en: {
            name: 'Spear Sweep',
            input: 'Left-click',
            description:
              'Steps in, sweeps the spear in a forward arc, and pulls struck foes toward the center while briefly holding them.',
          },
          masterLevel: 50,
        },
        {
          id: 'risingSpear',
          icon: 'stab',
          element: 'earth',
          guiColumn: 5,
          ko: {
            name: '상승창격',
            input: '웅크리기 + 우클릭',
            description: '상승 창격으로 적을 띄우고, 발밑의 적에게 연속 타격을 가합니다.',
          },
          en: {
            name: 'Rising Spear',
            input: 'Sneak + right-click',
            description: 'A rising spear slash launches foes and strikes enemies at your feet in rapid succession.',
          },
          masterLevel: 50,
        },
        {
          id: 'spearDiscipline',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '창술',
            description:
              '창 근접 공격 피해가 증가합니다. 보조에 방패나 삼지창을 들면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Spear Discipline',
            description:
              'Increases spear melee damage. Cannot use skills with a shield or trident off-hand.',
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
          chainOf: 'phalanxJab',
          guiColumn: 0,
          ko: {
            name: '돌진찌르기',
            input: '포진찌르기 후 재우클릭',
            description:
              '더 깊게 파고들며 넓은 원뿔을 횡으로 연속 가릅니다. 적을 강하게 붙잡고, 시전 중 무적 상태가 됩니다.',
          },
          en: {
            name: 'Phalanx Rend',
            input: 'Right-click again after Phalanx Jab',
            description:
              'Drive deeper and slash a wider cone in rapid horizontal arcs with strong hold and channel invulnerability.',
          },
        },
        {
          id: 'spearDrive',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          chainOf: 'spearBrace',
          guiColumn: 1,
          ko: {
            name: '맹렬창격',
            input: '창격돌 후 웅크리기 + 재좌클릭',
            description:
              '전방으로 창을 연속 관통시켜 직선상의 적을 연타합니다. 마지막 타격으로 적을 잠시 제압합니다.',
          },
          en: {
            name: 'Spear Drive',
            input: 'Sneak + left-click again after Spear Brace',
            description:
              'Pierces forward in a line with repeated thrusts and briefly suppresses foes on the final hit.',
          },
        },
        {
          id: 'chargeFollow',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          chainOf: 'skeweringCharge',
          guiColumn: 2,
          ko: {
            name: '연속창고',
            input: '창고착 후 손 바꾸기',
            description: '전방 직선으로 창을 여러 번 찌릅니다.',
          },
          en: {
            name: 'Charge Follow',
            input: 'Swap hands again after Skewering Charge',
            description: 'Multi-thrusts in a straight line ahead.',
          },
        },
        {
          id: 'rallyEcho',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'rallyingCall',
          guiColumn: 3,
          ko: {
            name: '함성잔향',
            input: '전열 함성 후 웅크리기 + 손 바꾸기',
            description: '함성의 파동으로 주변 적을 끌어당기며 피해를 줍니다.',
          },
          en: {
            name: 'Rally Echo',
            input: 'Sneak + swap again after Rallying Call',
            description: 'A shockwave pulls nearby foes inward and damages them.',
          },
        },
        {
          id: 'sweepArc',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '휘두르기연격',
            input: '창 휘두르기 후 좌클릭',
            description: '짧게 전진한 뒤 넓은 호를 그리며 적을 모아 타격합니다.',
          },
          en: {
            name: 'Sweep Arc',
            input: 'Left-click again after Spear Sweep',
            description: 'Steps in, gathers foes with a wide arc, and strikes.',
          },
        },
        {
          id: 'aerialSpear',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'risingSpear',
          guiColumn: 5,
          ko: {
            name: '공중창격',
            input: '상승창격 후 웅크리기 + 우클릭',
            description:
              '더 높이 뛰어오른 뒤 공중에서 창을 휘둘러 연속 타격을 가합니다. 마지막 타격으로 적을 잠시 제압합니다.',
          },
          en: {
            name: 'Aerial Spear',
            input: 'Sneak + right-click again after Rising Spear',
            description:
              'Leaps higher, then slashes in midair for repeated hits and brief suppression on the final strike.',
          },
        },
        {
          id: 'phalanxTraining',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '진형 숙련',
            description: '창 스킬 피해가 증가합니다. 1차 돌파 연계 기술이 해제됩니다.',
          },
          en: {
            name: 'Phalanx Training',
            description: 'Increases spear skill damage. Unlocks limit-1 combo follow-ups.',
          },
        },
        {
          id: 'ironPhalanx',
          icon: 'shield',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '철벽진영',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '철벽처럼 창을 세워 파동 연타를 가하고, 가까운 아군에게 흡수를 부여합니다.',
          },
          en: {
            name: 'Iron Phalanx',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Raises an iron wall of spear strikes and grants Absorption to nearby allies.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'phalanxRendII',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'phalanxJab',
          guiColumn: 0,
          ko: {
            name: '맹렬돌진찌르기',
            input: '포진찌르기 연계(2차)',
            description:
              '최전선까지 돌진해 넓은 원뿔을 맹렬히 연타합니다. 끝점 충격파로 적을 붙잡고, 시전 중 무적 상태가 됩니다.',
          },
          en: {
            name: 'Phalanx Rend II',
            input: 'Limit 2 Phalanx Jab combo',
            description:
              'Charges to the frontline and barrages a wide cone with tip shockwaves, strong hold, and channel invulnerability.',
          },
        },
        {
          id: 'spearDriveII',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          chainOf: 'spearBrace',
          guiColumn: 1,
          ko: {
            name: '극렬창격',
            input: '창격돌 연계(2차)',
            description:
              '더 넓은 범위의 지진장을 일으켜 적을 끌어당기고 연속 타격합니다. 마지막 타격으로 강하게 제압합니다.',
          },
          en: {
            name: 'Spear Drive II',
            input: 'Limit 2 Spear Brace combo',
            description:
              'Triggers a wider earthquake that pulls foes in with repeated hits and heavy suppression on the final strike.',
          },
        },
        {
          id: 'chargeFollowII',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          chainOf: 'skeweringCharge',
          guiColumn: 2,
          ko: {
            name: '관통연착',
            input: '창고착 연계(2차)',
            description: '거대한 창을 넓게 휘두르며 적을 모아 붙잡고 연속 타격합니다.',
          },
          en: {
            name: 'Charge Follow II',
            input: 'Limit 2 Skewering Charge combo',
            description: 'Swings a giant spear in a wide arc, gathering and holding foes with repeated hits.',
          },
        },
        {
          id: 'rallyEchoII',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'rallyingCall',
          guiColumn: 3,
          ko: {
            name: '전열폭음',
            input: '전열 함성 연계(2차)',
            description:
              '더 넓은 범위에 함성 충격을 가하고, 잠시 후 잔향이 퍼집니다. 아군 강화를 다시 적용합니다.',
          },
          en: {
            name: 'Rally Echo II',
            input: 'Limit 2 Rallying Call combo',
            description:
              'Blasts a wider area with a rally shockwave and reapplies ally buffs as the echo ripples outward.',
          },
        },
        {
          id: 'sweepArcII',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '광역창휘',
            input: '창 휘두르기 연계(2차)',
            description: '더 넓게 전진해 창을 휘두르며 적을 모아 강하게 타격합니다.',
          },
          en: {
            name: 'Sweep Arc II',
            input: 'Limit 2 Spear Sweep combo',
            description: 'Steps in farther with a wider arc that gathers and strikes foes hard.',
          },
        },
        {
          id: 'skyboundSpear',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'risingSpear',
          guiColumn: 5,
          ko: {
            name: '천공창격',
            input: '상승창격 연계(2차)',
            description:
              '높이 뛰어올라 공중에서 창을 내리꽂으며 연속 타격합니다. 마지막 타격으로 오래 제압합니다.',
          },
          en: {
            name: 'Skybound Spear',
            input: 'Limit 2 Rising Spear combo',
            description:
              'Soars high, then slams down from the air with repeated hits and long suppression on the final strike.',
          },
        },
        {
          id: 'vanguardDoctrine',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '선봉 교리',
            description:
              '스킬·근접 피해가 더 증가합니다. 연계 입력 시간이 늘고, 1차 돌파 궁극기 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Vanguard Doctrine',
            description:
              'Further increases skill and melee damage, extends combo window, and halves the first limit-break ultimate cooldown.',
          },
        },
        {
          id: 'piercingArray',
          icon: 'spear',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '관통진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '시선 방향으로 거대한 창이 나선형으로 관통하며 연속 타격을 가합니다.',
          },
          en: {
            name: 'Piercing Array',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'A giant spear spirals along your line of sight, piercing through with repeated hits.',
          },
        },
      ],
    },
  ],
};
