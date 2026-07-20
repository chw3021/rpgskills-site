import type { ClassDetailDef } from './types';

export const cavalrymanDetail: ClassDetailDef = {
  id: 'cavalryman',
  order: 16,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'cavalryman.png', en: { title: 'Cavalryman' }, ko: { title: '기마병' } },
      { tier: 1, portraitFile: 'cavalryman-limit1.png', en: { title: 'Lance Warden' }, ko: { title: '창기장' } },
      { tier: 2, portraitFile: 'cavalryman-limit2.png', en: { title: 'Gale Knight' }, ko: { title: '질풍기사' } },
    ],
  },
  story: {
    ko: [
      '창과 말로 전장을 가르는 기마병입니다. 탑승 스킬은 자동으로 말을 소환하고, 하마 스킬은 전방 돌진·연속 찌르기·내려찍기로 이어집니다.',
      '창기장으로 승진하며 찌르기 파고·고삐질타·돌격관통·심장파열·찍기이음 연계와 돌풍창이 열리고, 질주는 파티 신속을 부여합니다.',
      '질풍기사는 쏜살 추격·찌르기 마무리·천지내려·질풍돌파·심장쇄도·지면파쇄로 기동전을 완성하고, 천마 통과로 전장을 관통합니다.',
    ],
    en: [
      'A lancer who fights mounted and dismounted. Mount skills auto-summon a horse; dismount skills charge, multi-thrust, or slam ahead.',
      'Promotion to Lance Warden unlocks Tilt Rend, Bridle Lash, Herald Pierce, Heart Burst, Drive Echo, and Wind Lance.',
      'The Gale Knight masters Heaven Drop, Gale Break, Heart Flurry, Ground Break, Stampede chains, and Sky Pass.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'tiltPass',
          icon: 'spear',
          element: 'wind',
          guiColumn: 0,
          ko: {
            name: '기마 찌르기',
            input: '우클릭',
            description: '미탑승 시 말을 소환·탑승한 뒤 전방으로 긴 찌르기를 합니다.',
          },
          en: {
            name: 'Tilt Pass',
            input: 'Right-click',
            description: 'Summons and mounts if needed, then thrusts forward.',
          },
          masterLevel: 50,
        },
        {
          id: 'bridleSlam',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 1,
          ko: {
            name: '고삐 내려',
            input: '좌클릭',
            description: '탑승 후 전방에 내려찍어 밀치며 피해를 줍니다.',
          },
          en: {
            name: 'Bridle Slam',
            input: 'Left-click',
            description: 'While mounted, slams ahead for damage and knockback.',
          },
          masterLevel: 50,
        },
        {
          id: 'gallopSpur',
          icon: 'rush',
          element: 'wind',
          guiColumn: 2,
          ko: {
            name: '질주',
            input: '손 바꾸기',
            description: '탑승 후 질주·관통 피해를 주고 파티(솔로는 본인)에 신속을 부여합니다.',
          },
          en: {
            name: 'Gallop',
            input: 'Swap hands',
            description: 'While mounted, charges with pierce damage and grants party Speed (solo: self only).',
          },
          masterLevel: 50,
        },
        {
          id: 'rideHerald',
          icon: 'spear',
          element: 'wind',
          guiColumn: 3,
          ko: {
            name: '마상 돌격',
            input: '웅크리기 + 좌클릭',
            description: '하마 후 전방으로 돌진하며 찌르기 피해를 줍니다.',
          },
          en: {
            name: 'Ride Herald',
            input: 'Sneak + left-click',
            description: 'Dismounts, charges forward, and thrusts for line damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'heartLunge',
          icon: 'spear',
          element: 'wind',
          guiColumn: 4,
          ko: {
            name: '심장 관통',
            input: '웅크리기 + 손 바꾸기',
            description: '하마 후 연속 찌르기를 하고 마지막 타에 제압합니다.',
          },
          en: {
            name: 'Heart Lunge',
            input: 'Sneak + swap hands',
            description: 'Dismounts for multi-thrust hits and a hold on the last strike.',
          },
          masterLevel: 50,
        },
        {
          id: 'bridleDrive',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 5,
          ko: {
            name: '낙마 찍기',
            input: '웅크리기 + 우클릭',
            description: '하마 후 전방에 내려찍습니다.',
          },
          en: {
            name: 'Bridle Drive',
            input: 'Sneak + right-click',
            description: 'Dismounts and slams down ahead.',
          },
          masterLevel: 50,
        },
        {
          id: 'lancerDiscipline',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '기마 창술',
            description:
              '공격력이 증가합니다. 탑승 직후 이동 속도가 증가하고, 하마 직후 받는 피해가 감소합니다(숙련·레벨에 따라 상승).',
          },
          en: {
            name: 'Lancer Discipline',
            description:
              'Increases damage. Grants mount speed after boarding and damage reduction briefly after dismounting (scales with proficiency and level).',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'tiltRend',
          icon: 'spear',
          element: 'wind',
          guiColumn: 9,
          followUp: true,
          chainOf: 'tiltPass',
          ko: {
            name: '찌르기 파고',
            input: '기마 찌르기 직후 재우클릭',
            description: '짧은 시간 안에만 사용 가능합니다. 피해량은 기마 찌르기 레벨에 비례합니다.',
          },
          en: {
            name: 'Tilt Rend',
            input: 'Right-click again after Tilt Pass',
            description: 'Only within a short window. Damage scales with Tilt Pass level.',
          },
        },
        {
          id: 'bridleLash',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 10,
          followUp: true,
          chainOf: 'bridleSlam',
          ko: {
            name: '고삐질타',
            input: '고삐 내려 직후 좌클릭',
            description: '전방 짧은 찌르기입니다. 피해량은 고삐 내려 레벨에 비례합니다.',
          },
          en: {
            name: 'Bridle Lash',
            input: 'Left-click after Bridle Slam',
            description: 'Short forward thrust. Damage scales with Bridle Slam level.',
          },
        },
        {
          id: 'stampedeFeint',
          icon: 'rush',
          element: 'wind',
          guiColumn: 11,
          followUp: true,
          chainOf: 'gallopSpur',
          ko: {
            name: '쏜살 추격',
            input: '질주 적중 직후 손 바꾸기',
            description: '전방 직선 베기입니다. 피해량은 질주 레벨에 비례합니다.',
          },
          en: {
            name: 'Stampede Feint',
            input: 'Swap hands after Gallop hits',
            description: 'Forward line slash. Damage scales with Gallop level.',
          },
        },
        {
          id: 'heraldPierce',
          icon: 'spear',
          element: 'wind',
          guiColumn: 12,
          followUp: true,
          chainOf: 'rideHerald',
          ko: {
            name: '돌격 관통',
            input: '마상 돌격 직후 웅크리기 + 좌클릭',
            description: '전방 관통 찌르기입니다. 피해량은 마상 돌격 레벨에 비례합니다.',
          },
          en: {
            name: 'Herald Pierce',
            input: 'Sneak + left-click after Ride Herald',
            description: 'Piercing line thrust. Damage scales with Ride Herald level.',
          },
        },
        {
          id: 'heartBurst',
          icon: 'spear',
          element: 'wind',
          guiColumn: 13,
          followUp: true,
          chainOf: 'heartLunge',
          ko: {
            name: '심장 파열',
            input: '심장 관통 직후 웅크리기 + 손 바꾸기',
            description: '강한 마무리 일격입니다. 피해량은 심장 관통 레벨에 비례합니다.',
          },
          en: {
            name: 'Heart Burst',
            input: 'Sneak + swap hands after Heart Lunge',
            description: 'Heavy finishing thrust. Damage scales with Heart Lunge level.',
          },
        },
        {
          id: 'driveEcho',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 14,
          followUp: true,
          chainOf: 'bridleDrive',
          ko: {
            name: '찍기 이음',
            input: '낙마 찍기 직후 웅크리기 + 우클릭',
            description: '전방 추가 내려찍기입니다. 피해량은 낙마 찍기 레벨에 비례합니다.',
          },
          en: {
            name: 'Drive Echo',
            input: 'Sneak + right-click after Bridle Drive',
            description: 'Follow-up slam ahead. Damage scales with Bridle Drive level.',
          },
        },
        {
          id: 'lancerDisciplineLimit1',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 16,
          ko: {
            name: '기마 조율',
            description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.',
          },
          en: {
            name: 'Steed Training',
            description: 'Increases damage. Limit 1 combo follow-ups unlocked.',
          },
        },
        {
          id: 'windLance',
          icon: 'storm',
          element: 'wind',
          ultimate: true,
          guiColumn: 17,
          ko: {
            name: '돌풍창',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '말에 올라 무적 차징 후 전방으로 드릴 회오리 돌진하며 일직선 적을 공격하고, 도약하며 원위치로 복귀합니다.',
          },
          en: {
            name: 'Wind Lance',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Mount, gain invulnerability while charging, drill-rush in a line, then leap and return to the start.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'bridleHeavenDrop',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 19,
          followUp: true,
          chainOf: 'bridleLash',
          ko: {
            name: '천지 내려',
            input: '고삐질타 직후 좌클릭',
            description: '넓은 내려찍기입니다. 피해량은 고삐 내려 레벨에 비례합니다.',
          },
          en: {
            name: 'Heaven Drop',
            input: 'Left-click after Bridle Lash',
            description: 'Wide slam ahead. Damage scales with Bridle Slam level.',
          },
        },
        {
          id: 'heraldGaleBreak',
          icon: 'spear',
          element: 'wind',
          guiColumn: 21,
          followUp: true,
          chainOf: 'heraldPierce',
          ko: {
            name: '질풍 돌파',
            input: '돌격 관통 직후 웅크리기 + 좌클릭',
            description: '긴 돌진 관통입니다. 피해량은 마상 돌격 레벨에 비례합니다.',
          },
          en: {
            name: 'Gale Break',
            input: 'Sneak + left-click after Herald Pierce',
            description: 'Long charge pierce. Damage scales with Ride Herald level.',
          },
        },
        {
          id: 'heartFlurry',
          icon: 'spear',
          element: 'wind',
          guiColumn: 22,
          followUp: true,
          chainOf: 'heartBurst',
          ko: {
            name: '심장 쇄도',
            input: '심장 파열 직후 웅크리기 + 손 바꾸기',
            description: '연속 찌르기입니다. 피해량은 심장 관통 레벨에 비례합니다.',
          },
          en: {
            name: 'Heart Flurry',
            input: 'Sneak + swap hands after Heart Burst',
            description: 'Rapid thrust flurry. Damage scales with Heart Lunge level.',
          },
        },
        {
          id: 'groundBreak',
          icon: 'sword-drive',
          element: 'wind',
          guiColumn: 23,
          followUp: true,
          chainOf: 'driveEcho',
          ko: {
            name: '지면 파쇄',
            input: '찍기 이음 직후 웅크리기 + 우클릭',
            description: '주변 지면을 파쇄해 피해를 줍니다. 피해량은 낙마 찍기 레벨에 비례합니다.',
          },
          en: {
            name: 'Ground Break',
            input: 'Sneak + right-click after Drive Echo',
            description: 'Shockwave around you. Damage scales with Bridle Drive level.',
          },
        },
        {
          id: 'stampedeFinish',
          icon: 'rush',
          element: 'wind',
          guiColumn: 20,
          followUp: true,
          chainOf: 'gallopSpur',
          ko: {
            name: '쏜살 마무리',
            input: '쏜살 추격 직후 손 바꾸기',
            description: '짧은 시간 안에만 사용 가능합니다.',
          },
          en: {
            name: 'Stampede Finish',
            input: 'Swap hands after Stampede Feint',
            description: 'Only within a short window.',
          },
        },
        {
          id: 'tiltFinish',
          icon: 'spear',
          element: 'wind',
          guiColumn: 18,
          followUp: true,
          chainOf: 'tiltPass',
          ko: {
            name: '찌르기 마무리',
            input: '찌르기 파고 직후 재우클릭',
            description: '짧은 시간 안에만 사용 가능합니다.',
          },
          en: {
            name: 'Tilt Finish',
            input: 'Right-click again after Tilt Rend',
            description: 'Only within a short window.',
          },
        },
        {
          id: 'lancerDisciplineLimit2',
          icon: 'book',
          element: 'wind',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '천마의 가호',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Heavenly Steed',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'skyPass',
          icon: 'wind-slash',
          element: 'wind',
          ultimate: true,
          guiColumn: 26,
          ko: {
            name: '천마 통과',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '기마 돌진으로 적을 끌어모은 뒤 직경 8의 소용돌이로 중심에 수렴하며 피해를 주고, 도약 후 내려찍으며 경로를 재분출합니다.',
          },
          en: {
            name: 'Sky Pass',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Mounted rush pulls foes, spirals inward (diameter 8), then leaps and slams to erupt the path again.',
          },
        },
      ],
    },
  ],
};
