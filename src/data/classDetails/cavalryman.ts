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
      '창과 말(탈것)로 전장을 가르는 기마병입니다. 기마찌르기·고삐 내려·질주찌르·마상 돌격으로 기동전을 펼치고, 기마 창술로 근접 화력을 키웁니다.',
      '숙련이 오르면 찌르기 파고·낙마 찍기 등 연계가 열리고, 돌풍창으로 주변을 압도합니다.',
      '창기장은 군진의 중견으로 승진하며, 질풍기사는 최정예 갑주와 천마 통과로 바람을 타고 진군합니다. 계급이 오를수록 갑주와 명령의 위엄이 커집니다.',
    ],
    en: [
      'A cavalry lancer who cuts the field with spear and mount. Tilt pass, bridle slam, gallop spur, and ride herald define mobile combat; lancer discipline raises melee damage.',
      'Higher proficiency unlocks tilt rend, bridle drive, and more combos, capped by Wind Lance area devastation.',
      'Promotion to Lance Warden and Gale Knight brings richer armor and grander marches. Rank rises with pose, battlefield, and the splendor of their kit.',
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
          ko: { name: '기마 찌르기', input: '우클릭', description: '전방으로 긴 찌르기를 합니다.' },
          en: { name: 'Tilt Pass', input: 'Right-click', description: 'A long forward thrust.' },
          masterLevel: 50,
        },
        {
          id: 'bridleSlam',
          icon: 'sword-drive',
          element: 'wind',
          ko: {
            name: '고삐 내려',
            input: '웅크리기 + 우클릭',
            description: '전방에 내려찍어 밀치며 피해를 줍니다.',
          },
          en: {
            name: 'Bridle Slam',
            input: 'Sneak + right-click',
            description: 'Slams ahead for damage and knockback.',
          },
          masterLevel: 50,
        },
        {
          id: 'gallopSpur',
          icon: 'rush',
          element: 'wind',
          ko: {
            name: '질주 찌르',
            input: '손 바꾸기',
            description: '전방으로 질주하며 관통 피해를 줍니다.',
          },
          en: {
            name: 'Gallop Spur',
            input: 'Swap hands',
            description: 'Charges forward with piercing damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'rideHerald',
          icon: 'spear',
          element: 'wind',
          ko: {
            name: '마상 돌격',
            input: '웅크리기 + 손 바꾸기',
            description: '주변 적에게 피해를 주고 파티에 신속을 부여합니다(솔로는 본인만).',
          },
          en: {
            name: 'Ride Herald',
            input: 'Sneak + swap hands',
            description: 'Damages nearby foes and grants Speed to the party (solo: self only).',
          },
          masterLevel: 50,
        },
        {
          id: 'lancerDiscipline',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '기마 창술',
            description: '근접 피해가 증가합니다. 보조 슬롯에 방패·삼지창이 있으면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Lancer Discipline',
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
          id: 'tiltRend',
          icon: 'spear',
          element: 'wind',
          followUp: true,
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
          id: 'bridleDrive',
          icon: 'sword-drive',
          element: 'wind',
          followUp: true,
          ko: {
            name: '낙마 찍기',
            input: '고삐 내려 직후 웅크리기 + 재우클릭',
            description: '짧은 시간 안에만 사용 가능합니다. 피해량은 고삐 내려 레벨에 비례합니다.',
          },
          en: {
            name: 'Bridle Drive',
            input: 'Sneak + right-click again after Bridle Slam',
            description: 'Only within a short window. Damage scales with Bridle Slam level.',
          },
        },
        {
          id: 'drawCut',
          icon: 'slash',
          element: 'wind',
          followUp: true,
          ko: {
            name: '인출 베기',
            input: '찌르기 파고 직후 비웅크리기 + 좌클릭',
            description: '짧은 추가 베기를 합니다.',
          },
          en: {
            name: 'Draw Cut',
            input: 'No sneak + left-click after Tilt Rend',
            description: 'A short extra slash.',
          },
        },
        {
          id: 'bridleStamp',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          ko: {
            name: '고삐 낙인',
            input: '낙마 찍기 직후 웅크리기 + 좌클릭',
            description: '전방 소범위 피해를 줍니다.',
          },
          en: {
            name: 'Bridle Stamp',
            input: 'Sneak + left-click after Bridle Drive',
            description: 'Small forward stomp damage.',
          },
        },
        {
          id: 'windLance',
          icon: 'storm',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '돌풍창',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '주변 적에게 큰 피해를 줍니다. 2차 한계 돌파 시 재사용 대기시간이 감소합니다.',
          },
          en: {
            name: 'Wind Lance',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Heavy area damage. Cooldown is shorter at second limit break.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'stampedeFeint',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          ko: {
            name: '쏜살 추격',
            input: '질주 찌르 적중 직후 전투 모드 기술 0',
            description: '전방 직선 베기입니다. 피해량은 질주 찌르 레벨에 비례합니다.',
          },
          en: {
            name: 'Stampede Feint',
            input: 'Combat skill 0 after Gallop Spur hits',
            description: 'Forward line slash. Damage scales with Gallop Spur level.',
          },
        },
        {
          id: 'heraldSkewer',
          icon: 'spear',
          element: 'wind',
          followUp: true,
          ko: {
            name: '기병 찌르기',
            input: '마상 돌격 직후 전투 모드 기술 1',
            description: '전방 직선 관통입니다. 피해량은 마상 돌격 레벨에 비례합니다.',
          },
          en: {
            name: 'Herald Skewer',
            input: 'Combat skill 1 after Ride Herald',
            description: 'Forward line pierce. Damage scales with Ride Herald level.',
          },
        },
        {
          id: 'galeRip',
          icon: 'wind-slash',
          element: 'wind',
          followUp: true,
          ko: {
            name: '풍연 베기',
            input: '돌풍창 직후 웅크리기 + 좌클릭',
            description: '전방 직선 베기를 합니다.',
          },
          en: {
            name: 'Gale Rip',
            input: 'Sneak + left-click after Wind Lance',
            description: 'Forward line slash.',
          },
        },
        {
          id: 'skyRake',
          icon: 'air-cut',
          element: 'wind',
          followUp: true,
          ko: {
            name: '천마 긁기',
            input: '천마 통과 직후 웅크리기 + 전투 숫자키 8',
            description: '긴 직선 긁기 공격입니다.',
          },
          en: {
            name: 'Sky Rake',
            input: 'Sneak + combat hotkey 8 after Sky Pass',
            description: 'Long line rake attack.',
          },
        },
        {
          id: 'windRush',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          ko: {
            name: '역풍 질주',
            input: '풍연 베기 직후 비웅크리기 + 손 바꾸기',
            description: '짧은 돌진 베기입니다. 피해량은 질주 찌르 레벨에 비례합니다.',
          },
          en: {
            name: 'Wind Rush',
            input: 'Swap hands (no sneak) after Gale Rip',
            description: 'Short rush slash. Damage scales with Gallop Spur level.',
          },
        },
        {
          id: 'skyPass',
          icon: 'wind-slash',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '천마 통과',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '시선 방향 직선으로 관통 피해를 줍니다.',
          },
          en: {
            name: 'Sky Pass',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Massive line pierce along your gaze.',
          },
        },
      ],
    },
  ],
};
