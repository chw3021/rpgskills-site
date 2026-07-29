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
      '창 휘두르기는 짧은 최소 대기 후 1·2·3타를 순환하는 기본 공격입니다. 현재 타수가 표시되며, 마지막으로 친 타수에 맞춰 다른 스킬이 강해지고, 그 강화된 스킬을 쓰면 잠시 받는 피해가 줄어듭니다.',
      '창격돌·창고착·상승창격으로 전선을 열고, 창술·진형 숙련·선봉 교리로 성장합니다. 철벽진영과 관통진은 창 휘두르기 타수 강화 대상이 아닙니다. 보조에 방패·삼지창이 있으면 스킬을 쓸 수 없습니다.',
    ],
    en: [
      'A frontline soldier who pins foes with spear pressure. Phalanx Jab multi-hits a forward cone, super-holds enemies, and grants channel invulnerability.',
      'Spear Sweep is your no-cooldown basic attack that cycles hit 1, 2, and 3. The last hit you landed strengthens matching skills, and using those enhanced skills briefly reduces damage you take.',
      'Spear Brace, Skewering Charge, and Rising Spear open the line. Spear Discipline, Phalanx Training, and Vanguard Doctrine raise your power. Iron Phalanx and Piercing Array are not strengthened by Spear Sweep hits. No skills with a shield or trident off-hand.',
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
              '짧게 전방으로 파고든 뒤, 시선 방향 원뿔 안의 적을 창으로 연속 찌릅니다. 원뿔 안 적을 강하게 붙잡고, 시전 중에는 무적 상태가 됩니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고 원뿔 범위가 넓어집니다.',
          },
          en: {
            name: 'Phalanx Jab',
            input: 'Right-click',
            description:
              'Step in and repeatedly thrust at enemies in a forward cone. Strongly holds foes in the cone and grants invulnerability while channeling. Right after Spear Sweep hit 1, damage rises and the cone reaches farther.',
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
              '전방 지면을 창으로 내려찍어 지진을 일으킵니다. 적을 중앙으로 끌어당기며 연속으로 피해를 줍니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고 지진 범위가 넓어집니다.',
          },
          en: {
            name: 'Spear Brace',
            input: 'Sneak + left-click',
            description:
              'Slams the spear into the ground ahead, shaking the earth and pulling enemies inward with repeated hits. Right after Spear Sweep hit 3, damage rises and the quake covers a wider area.',
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
            description:
              '거대한 창을 회전시켜 전방을 휩쓸며 연속으로 피해를 줍니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고, 호 형태 대신 자신을 중심으로 한 원형 휘두르기로 바뀝니다.',
          },
          en: {
            name: 'Skewering Charge',
            input: 'Swap hands',
            description:
              'Spins a giant spear in a forward arc, sweeping foes with repeated hits. Right after Spear Sweep hit 1, damage rises and the strike becomes a full circle around you instead of a forward arc.',
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
              '주변 적에게 피해를 주고, 아군에게 신속과 흡수를 부여합니다. 혼자일 때는 본인만 강화됩니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고, 영향 범위와 아군 버프가 더 강해집니다.',
          },
          en: {
            name: 'Rallying Call',
            input: 'Sneak + swap hands',
            description:
              'Damages nearby foes, then grants Speed and Absorption to allies (yourself only when solo). Right after Spear Sweep hit 3, damage rises and both the blast radius and ally buffs grow stronger.',
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
              '짧은 최소 대기 후 사용할 수 있는 기본 공격입니다. 클릭할 때마다 1타·2타·3타가 순서대로 나가고, 3타 다음에는 다시 1타로 이어지며 현재 타수가 표시됩니다. 1타는 짧게 전진하며 전방을 호로 베고, 2타는 어퍼컷으로 적을 띄우며 잠시 붙잡으며, 3타는 내려찍기와 충격파로 마무리합니다. 피해는 창 휘두르기 스킬 레벨에 비례합니다. 마지막으로 친 타수에 맞춰 다른 스킬이 강화되며(강화 시 피해량 7% 증가), 아직 한 번도 치지 않았다면 3타를 친 상태로 취급합니다. 로그아웃하거나 서버가 재시작되면 다시 처음부터입니다.',
          },
          en: {
            name: 'Spear Sweep',
            input: 'Left-click',
            description:
              'Your no-cooldown basic attack. Each click advances through hit 1, hit 2, and hit 3, then loops back to hit 1. Hit 1 steps in with a forward arc, hit 2 uppercuts to lift and briefly hold foes, and hit 3 finishes with a slam and shockwave. Damage scales with Spear Sweep skill level. The last hit you landed strengthens matching skills; if you have not swung yet, it counts as hit 3. The combo resets when you log out or the server restarts.',
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
            description:
              '상승 창격으로 적을 띄우고, 발밑의 적에게 연속 타격을 가합니다. 피해는 전열 함성 레벨을 따릅니다. 창 휘두르기 2타를 친 직후에 사용하면 피해량이 7% 증가하고, 범위와 띄우기가 커지며 적을 중앙으로 끌어모읍니다. 또한 재사용 대기시간이 15% 줄어듭니다.',
          },
          en: {
            name: 'Rising Spear',
            input: 'Sneak + right-click',
            description:
              'A rising spear slash launches foes and strikes enemies at your feet in rapid succession. Damage follows Rallying Call level. Right after Spear Sweep hit 2, damage rises, range and launch grow, foes are pulled inward, and cooldown is 15% shorter.',
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
              '창 근접 공격 피해가 증가합니다. 창 휘두르기로 강화된 스킬을 사용할 때마다 피해감소 중첩을 얻습니다. 중첩은 최대 3까지 쌓이며 6초 동안 유지되고, 중첩당 받는 피해가 16% 줄어듭니다. 보조에 방패나 삼지창을 들면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Spear Discipline',
            description:
              'Increases spear melee damage. Each time you use a skill strengthened by Spear Sweep, you gain a damage-reduction stack. Stacks reach a maximum of 3, last 6 seconds, and reduce damage taken by 16% per stack. Cannot use skills with a shield or trident off-hand.',
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
              '더 깊게 파고들며 넓은 원뿔을 횡으로 연속 가릅니다. 적을 강하게 붙잡고, 시전 중 무적 상태가 됩니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고 돌진 거리가 길어집니다.',
          },
          en: {
            name: 'Phalanx Rend',
            input: 'Right-click again after Phalanx Jab',
            description:
              'Drive deeper and slash a wider cone in rapid horizontal arcs with strong hold and channel invulnerability. Right after Spear Sweep hit 1, damage rises and the dash carries farther.',
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
              '전방으로 창을 연속 관통시켜 직선상의 적을 연타합니다. 마지막 타격으로 적을 잠시 제압합니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고 관통 사거리가 늘어납니다.',
          },
          en: {
            name: 'Spear Drive',
            input: 'Sneak + left-click again after Spear Brace',
            description:
              'Pierces forward in a line with repeated thrusts and briefly suppresses foes on the final hit. Right after Spear Sweep hit 3, damage rises and the pierce reaches farther.',
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
            description:
              '전방 직선으로 창을 여러 번 찌릅니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고 찌르기 사거리가 늘어나며, 맞은 적을 잠시 붙잡습니다.',
          },
          en: {
            name: 'Charge Follow',
            input: 'Swap hands again after Skewering Charge',
            description:
              'Multi-thrusts in a straight line ahead. Right after Spear Sweep hit 1, damage rises, reach grows, and struck foes are briefly held.',
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
            description:
              '함성의 파동으로 주변 적을 끌어당기며 피해를 줍니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고 범위가 넓어지며, 파동 타격 횟수가 3회 더 늘어납니다.',
          },
          en: {
            name: 'Rally Echo',
            input: 'Sneak + swap again after Rallying Call',
            description:
              'A shockwave pulls nearby foes inward and damages them. Right after Spear Sweep hit 3, damage rises, the radius grows, and the wave gains three extra hits.',
          },
        },
        {
          id: 'sweepArc',
          icon: 'slash',
          element: 'earth',
          followUp: false,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '창 휘두르기 돌파',
            input: '숙련 1 — 패시브',
            description:
              '창 휘두르기 콤보 자체를 강하게 만듭니다. 별도의 좌클릭 연계 스킬이 아닙니다. 1타는 범위가 넓어지고 맞은 적을 중앙으로 끌어모으며, 2타는 범위와 피해가 커지고, 3타는 충격파가 두 번 나가며 두 번째가 더 넓습니다.',
          },
          en: {
            name: 'Spear Sweep Breakthrough',
            input: 'Proficiency 1 — passive',
            description:
              'Strengthens the Spear Sweep combo itself. This is not a separate left-click follow-up skill. Hit 1 reaches farther and pulls struck foes inward, hit 2 gains range and damage, and hit 3 fires two shockwaves with the second one wider.',
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
              '더 높이 뛰어오른 뒤 공중에서 창을 휘둘러 연속 타격을 가합니다. 마지막 타격으로 적을 잠시 제압합니다. 창 휘두르기 2타를 친 직후에 사용하면 피해량이 7% 증가하고, 도약과 횡베기 범위가 커집니다.',
          },
          en: {
            name: 'Aerial Spear',
            input: 'Sneak + right-click again after Rising Spear',
            description:
              'Leaps higher, then slashes in midair for repeated hits and brief suppression on the final strike. Right after Spear Sweep hit 2, damage rises and both the leap and slash cover more ground.',
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
            description:
              '창 스킬 피해가 증가합니다. 강화 스킬로 쌓는 피해감소 중첩이 중첩당 19%로 강해집니다. 1차 돌파 연계 기술과 창 휘두르기 돌파가 해제됩니다.',
          },
          en: {
            name: 'Phalanx Training',
            description:
              'Increases spear skill damage. Damage-reduction stacks from enhanced skills rise to 19% per stack. Unlocks limit-1 combo follow-ups and Spear Sweep Breakthrough.',
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
            description:
              '철벽처럼 창을 세워 파동 연타를 가하고, 가까운 아군에게 흡수를 부여합니다. 창 휘두르기 타수에 따른 강화 대상이 아닙니다.',
          },
          en: {
            name: 'Iron Phalanx',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Raises an iron wall of spear strikes and grants Absorption to nearby allies. Not strengthened by Spear Sweep hits.',
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
              '최전선까지 돌진해 넓은 원뿔을 맹렬히 연타합니다. 끝점 충격파로 적을 붙잡고, 시전 중 무적 상태가 됩니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고, 창끝으로 적을 끌어모아 더 오래 붙잡습니다.',
          },
          en: {
            name: 'Phalanx Rend II',
            input: 'Limit 2 Phalanx Jab combo',
            description:
              'Charges to the frontline and barrages a wide cone with tip shockwaves, strong hold, and channel invulnerability. Right after Spear Sweep hit 1, damage rises and foes are gathered to the spear tip with a longer hold.',
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
              '더 넓은 범위의 지진장을 일으켜 적을 끌어당기고 연속 타격합니다. 마지막 타격으로 강하게 제압합니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고 범위가 넓어지며, 적을 더 오래 붙잡습니다.',
          },
          en: {
            name: 'Spear Drive II',
            input: 'Limit 2 Spear Brace combo',
            description:
              'Triggers a wider earthquake that pulls foes in with repeated hits and heavy suppression on the final strike. Right after Spear Sweep hit 3, damage rises, the area grows, and foes are held longer.',
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
            description:
              '거대한 창을 넓게 휘두르며 적을 모아 붙잡고 연속 타격합니다. 창 휘두르기 1타를 친 직후에 사용하면 피해량이 7% 증가하고 휘두르기 횟수가 늘어나며, 마지막에 추가 마무리 타격이 들어갑니다.',
          },
          en: {
            name: 'Charge Follow II',
            input: 'Limit 2 Skewering Charge combo',
            description:
              'Swings a giant spear in a wide arc, gathering and holding foes with repeated hits. Right after Spear Sweep hit 1, damage rises, more swings land, and a finishing strike follows at the end.',
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
              '더 넓은 범위에 함성 충격을 가하고, 잠시 후 잔향이 퍼집니다. 아군 강화를 다시 적용합니다. 창 휘두르기 3타를 친 직후에 사용하면 피해량이 7% 증가하고 범위·버프·붙잡기가 모두 강해집니다.',
          },
          en: {
            name: 'Rally Echo II',
            input: 'Limit 2 Rallying Call combo',
            description:
              'Blasts a wider area with a rally shockwave and reapplies ally buffs as the echo ripples outward. Right after Spear Sweep hit 3, damage rises and the radius, buffs, and hold all grow stronger.',
          },
        },
        {
          id: 'sweepArcII',
          icon: 'slash',
          element: 'earth',
          followUp: false,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '창 휘두르기 돌파 II',
            input: '숙련 2 — 패시브',
            description:
              '창 휘두르기 콤보를 한층 더 강하게 만듭니다. 별도의 좌클릭 연계 스킬이 아닙니다. 1타는 여러 번 타격하고, 2타는 자신 주변을 원형으로 벤 뒤 어퍼컷으로 이어가며, 3타는 충격파가 세 번 나가며 갈수록 더 넓어집니다.',
          },
          en: {
            name: 'Spear Sweep Breakthrough II',
            input: 'Proficiency 2 — passive',
            description:
              'Further strengthens the Spear Sweep combo itself. This is not a separate left-click follow-up skill. Hit 1 multi-hits, hit 2 adds a circular slash around you before the uppercut, and hit 3 fires three shockwaves that grow wider each time.',
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
              '높이 뛰어올라 공중에서 창을 내리꽂으며 연속 타격합니다. 마지막 타격으로 오래 제압합니다. 창 휘두르기 2타를 친 직후에 사용하면 피해량이 7% 증가하고 충격파 범위가 넓어집니다.',
          },
          en: {
            name: 'Skybound Spear',
            input: 'Limit 2 Rising Spear combo',
            description:
              'Soars high, then slams down from the air with repeated hits and long suppression on the final strike. Right after Spear Sweep hit 2, damage rises and the shockwave covers a wider area.',
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
              '스킬·근접 피해가 더 증가합니다. 강화 스킬로 쌓는 피해감소 중첩이 중첩당 22%로 강해집니다. 연계 입력 시간이 늘고, 1차 돌파 궁극기 재사용 대기시간이 절반으로 줄어듭니다.',
          },
          en: {
            name: 'Vanguard Doctrine',
            description:
              'Further increases skill and melee damage. Damage-reduction stacks from enhanced skills rise to 22% per stack. Extends the combo input window and halves the first limit-break ultimate cooldown.',
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
            description:
              '시선 방향으로 거대한 창이 나선형으로 관통하며 연속 타격을 가합니다. 창 휘두르기 타수에 따른 강화 대상이 아닙니다.',
          },
          en: {
            name: 'Piercing Array',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'A giant spear spirals along your line of sight, piercing through with repeated hits. Not strengthened by Spear Sweep hits.',
          },
        },
      ],
    },
  ],
};
