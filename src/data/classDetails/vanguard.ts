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
      '창과 방패로 최전선을 지키는 선봉병입니다. 포진찌르기·창격돌·창고착·전열함성으로 진형을 뚫고, 창 휘두르기·내려찍기로 근접 광역을 커버합니다.',
      '창술은 창 근접 피해를 키웁니다. 진형 숙련은 스킬 피해와 연계를, 선봉 교리는 궁극기 대기·연계 창을 강화합니다. 방패·삼지창 보조 슬롯에서는 스킬을 쓸 수 없습니다.',
      '철벽진영과 관통진으로 전장의 중심이 됩니다. 진군장에서는 2차 연계가 강화됩니다.',
    ],
    en: [
      'A frontline soldier who holds the line with spear and shield. Phalanx jab, spear brace, skewering charge, and rallying call break ranks; spear sweep and downward slam cover melee AoE.',
      'Spear Discipline boosts spear melee damage. Phalanx Training adds skill damage and combos; Vanguard Doctrine shortens the first ultimate cooldown and widens combo windows. No skills with shield or trident off-hand.',
      'Iron Phalanx and Piercing Array anchor the fight. Line Marshal tier empowers limit-2 combo skills.',
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
          ko: { name: '포진찌르기', input: '우클릭', description: '전방 직선으로 길게 찌릅니다.' },
          en: { name: 'Phalanx Jab', input: 'Right-click', description: 'A long thrust in a straight line.' },
          masterLevel: 50,
        },
        {
          id: 'spearBrace',
          icon: 'shield',
          element: 'earth',
          ko: { name: '창격돌', input: '웅크리기 + 우클릭', description: '전방을 밀치며 피해를 줍니다.' },
          en: { name: 'Spear Brace', input: 'Sneak + right-click', description: 'Shoves enemies ahead for damage.' },
          masterLevel: 50,
        },
        {
          id: 'skeweringCharge',
          icon: 'rush',
          element: 'earth',
          ko: { name: '창고착', input: '손 바꾸기', description: '전방으로 짧게 돌진하며 관통 피해를 줍니다.' },
          en: { name: 'Skewering Charge', input: 'Swap hands', description: 'A short lunge that pierces enemies.' },
          masterLevel: 50,
        },
        {
          id: 'rallyingCall',
          icon: 'spear',
          element: 'earth',
          ko: {
            name: '전열 함성',
            input: '웅크리기 + 손 바꾸기',
            description: '주변 적에게 피해를 주고, 파티원에게 신속·흡수를 부여합니다(솔로는 본인만).',
          },
          en: {
            name: 'Rallying Call',
            input: 'Sneak + swap hands',
            description: 'Damages nearby foes; grants Speed and Absorption to party (solo: self only).',
          },
          masterLevel: 50,
        },
        {
          id: 'spearSweep',
          icon: 'slash',
          element: 'earth',
          ko: {
            name: '창 휘두르기',
            input: '좌클릭',
            description: '전방 호를 휘둘러 광역 피해를 줍니다. 피해량은 마스터 레벨에 비례합니다.',
          },
          en: {
            name: 'Spear Sweep',
            input: 'Left-click',
            description: 'Sweeps in an arc ahead for AoE damage. Damage scales with master level.',
          },
          masterLevel: 50,
        },
        {
          id: 'downwardSlam',
          icon: 'stab',
          element: 'earth',
          ko: {
            name: '내려찍기',
            input: '웅크리기 + 좌클릭',
            description: '발밑 광역 내려찍기(전열 함성 레벨 적용).',
          },
          en: {
            name: 'Downward Slam',
            input: 'Sneak + left-click',
            description: 'Slams the ground around you (uses Rallying Call level).',
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
            description:
              '창으로 하는 근접 공격 피해가 증가합니다. 보조 슬롯에 방패·삼지창이 있으면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Spear Discipline',
            description:
              'Increases spear melee attack damage. Cannot use skills with shield or trident in off-hand.',
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
          chainOf: 'spearBrace',
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
          id: 'chargeFollow',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          chainOf: 'skeweringCharge',
          ko: {
            name: '연속창고',
            input: '창고착 후 손 바꾸기',
            description: '창고착 직후 손 바꾸기로 추가 관통 돌진을 이어갑니다.',
          },
          en: {
            name: 'Charge Follow',
            input: 'Swap hands again after Skewering Charge',
            description: 'Within a short window after Skewering Charge, swap hands for another piercing lunge.',
          },
        },
        {
          id: 'rallyEcho',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'rallyingCall',
          ko: {
            name: '함성잔향',
            input: '전열 함성 후 웅크리기 + 손 바꾸기',
            description: '전열 함성 직후 웅크리기+손 바꾸기로 충격파를 이어갑니다.',
          },
          en: {
            name: 'Rally Echo',
            input: 'Sneak + swap again after Rallying Call',
            description: 'Within a short window after Rallying Call, sneak and swap for a shockwave.',
          },
        },
        {
          id: 'sweepArc',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'spearSweep',
          ko: {
            name: '휘두르기연격',
            input: '창 휘두르기 후 좌클릭',
            description: '창 휘두르기 직후 좌클릭으로 넓은 호 베기를 이어갑니다.',
          },
          en: {
            name: 'Sweep Arc',
            input: 'Left-click again after Spear Sweep',
            description: 'Within a short window after Spear Sweep, left-click for a wider arc.',
          },
        },
        {
          id: 'slamBurst',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'downwardSlam',
          ko: {
            name: '내려찍기연격',
            input: '내려찍기 후 웅크리기 + 좌클릭',
            description: '내려찍기 직후 웅크리기+좌클릭으로 대지 분쇄를 이어갑니다.',
          },
          en: {
            name: 'Slam Burst',
            input: 'Sneak + left-click again after Downward Slam',
            description: 'Within a short window after Downward Slam, sneak and left-click for a ground burst.',
          },
        },
        {
          id: 'phalanxTraining',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '진형 숙련',
            description:
              '창 스킬 피해가 증가합니다(창술 레벨에 비례). 숙련 1 연계 기술이 해제됩니다.',
          },
          en: {
            name: 'Phalanx Training',
            description:
              'Increases spear skill damage (scales with Spear Discipline level). Unlocks limit-1 combo follow-ups.',
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
              '주변 적에게 피해를 주고 가까운 파티원에게 흡수를 부여합니다. 2차 한계 돌파 시 재사용 대기시간이 감소합니다.',
          },
          en: {
            name: 'Iron Phalanx',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Damages nearby foes and grants Absorption to nearby party members. Cooldown is shorter at second limit break.',
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
          ko: {
            name: '맹렬돌진찌르기',
            input: '포진찌르기 연계(2차)',
            description: '2차 한계에서 포진찌르기 연계가 강화됩니다.',
          },
          en: {
            name: 'Phalanx Rend II',
            input: 'Limit 2 Phalanx Jab combo',
            description: 'Empowered follow-up after Phalanx Jab at limit 2.',
          },
        },
        {
          id: 'spearDriveII',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          ko: { name: '극렬창격', input: '창격돌 연계(2차)', description: '2차 한계에서 창격돌 연계가 강화됩니다.' },
          en: { name: 'Spear Drive II', input: 'Limit 2 Spear Brace combo', description: 'Empowered follow-up after Spear Brace.' },
        },
        {
          id: 'chargeFollowII',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          ko: { name: '관통연착', input: '창고착 연계(2차)', description: '2차 한계에서 창고착 연계가 강화됩니다.' },
          en: { name: 'Charge Follow II', input: 'Limit 2 Skewering Charge combo', description: 'Empowered follow-up after Skewering Charge.' },
        },
        {
          id: 'rallyEchoII',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          ko: { name: '전열폭음', input: '전열 함성 연계(2차)', description: '2차 한계에서 전열 함성 연계가 강화됩니다.' },
          en: { name: 'Rally Echo II', input: 'Limit 2 Rallying Call combo', description: 'Empowered follow-up after Rallying Call.' },
        },
        {
          id: 'sweepArcII',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: { name: '광역창휘', input: '창 휘두르기 연계(2차)', description: '2차 한계에서 창 휘두르기 연계가 강화됩니다.' },
          en: { name: 'Sweep Arc II', input: 'Limit 2 Spear Sweep combo', description: 'Empowered follow-up after Spear Sweep.' },
        },
        {
          id: 'slamBurstII',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          ko: { name: '대지분쇄', input: '내려찍기 연계(2차)', description: '2차 한계에서 내려찍기 연계가 강화됩니다.' },
          en: { name: 'Slam Burst II', input: 'Limit 2 Downward Slam combo', description: 'Empowered follow-up after Downward Slam.' },
        },
        {
          id: 'vanguardDoctrine',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '선봉 교리',
            description:
              '창 스킬·근접 피해가 추가로 증가하고, 연계 입력 가능 시간이 길어집니다. 1차 돌파 궁극기(철벽진영)의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Vanguard Doctrine',
            description:
              'Further increases spear skill and melee damage, and extends combo input windows. Halves the first limit-break ultimate cooldown (Iron Phalanx).',
          },
        },
        {
          id: 'piercingArray',
          icon: 'spear',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '관통진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '웅크린 상태에서 핫바 5번으로 전환합니다. 시선 방향 직선에 막대한 피해를 줍니다.',
          },
          en: {
            name: 'Piercing Array',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'While sneaking, switch to hotbar slot 5. Deals massive line damage along your gaze.',
          },
        },
      ],
    },
  ],
};
