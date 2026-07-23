import type { ClassDetailDef } from './types';

export const oceanKnightDetail: ClassDetailDef = {
  id: 'oceanKnight',
  order: 6,
  element: { en: 'Water', ko: '물' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'oceanKnight.png', en: { title: 'Ocean Knight' }, ko: { title: '바다기사' } },
      { tier: 1, portraitFile: 'oceanKnight-limit1.png', en: { title: 'Captain' }, ko: { title: '지휘관' } },
      { tier: 2, portraitFile: 'oceanKnight-limit2.png', en: { title: 'General' }, ko: { title: '명장' } },
    ],
  },
  story: {
    ko: [
      '삼지창과 방패로 물의 힘을 다루는 해상 기사입니다. 바다창술·투창·삼지창 돌격으로 전장을 가르며, 역조로 적을 끌어옵니다.',
      '물보라는 공격과 낙하 시 광역 피해를 내고 낙하 면역을 줍니다. 수영 시 바다의 이로운 효과와 급류 마법부여로 기동력이 올라갑니다.',
      '한계를 넘기면 해신격과 바다의 분노가 깃듭니다. 지휘관, 명장이라 불려도 본질은 같습니다. 파도와 함께 전장을 지배하는 자입니다.',
    ],
    en: [
      'A marine knight who commands water with trident and shield. Water spear, javelin, and ocean charge cut the field while rip current pulls foes in.',
      'Splash adds area damage on attacks and falls, grants fall immunity, riptide on the trident, and helpful effects while swimming.',
      'Beyond the limit break come Grand Waves and Wrath of the Sea. Titles may read Captain or General, but the essence is unchanged: to rule the fight with the tide.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'waterSpear',
          icon: 'trident',
          element: 'water',
          ko: {
            name: '바다창술',
            input: '막기 + 손 바꾸기',
            description: '물의 창술로 연속 타격합니다.',
          },
          en: {
            name: 'Water Spear',
            input: 'Block + swap hands',
            description: 'A flurry of water spear strikes while blocking.',
          },
          masterLevel: 50,
        },
        {
          id: 'waterBarrier',
          icon: 'shield',
          element: 'water',
          ko: {
            name: '물의 방벽',
            input: '막기 + 웅크리기 + 손 바꾸기',
            description:
              '물 밖이면 물을 소환합니다. 보호막 안에서는 모든 피해를 막습니다.',
          },
          en: {
            name: 'Water Barrier',
            input: 'Block + sneak + swap hands',
            description: 'Summons water when not submerged. Blocks all damage inside the barrier.',
          },
          masterLevel: 50,
        },
        {
          id: 'javelin',
          icon: 'trident',
          element: 'water',
          ko: {
            name: '투창',
            input: '좌클릭 + 점프',
            description: '삼지창을 투척합니다. 창을 주우면 재사용 대기시간의 절반을 돌려받습니다.',
          },
          en: {
            name: 'Javelin',
            input: 'Left-click + jump',
            description: 'Throws the trident. Picking it up refunds half the cooldown.',
          },
          masterLevel: 50,
        },
        {
          id: 'ripCurrent',
          icon: 'wave',
          element: 'water',
          ko: {
            name: '역조',
            input: '급류 도중 손 바꾸기',
            description: '급류 중 가까운 적을 끌어옵니다.',
          },
          en: {
            name: 'Rip Current',
            input: 'Swap hands while riptiding',
            description: 'Pulls the nearest enemy while riptiding.',
          },
          masterLevel: 1,
        },
        {
          id: 'oceanCharge',
          icon: 'rush',
          element: 'water',
          ko: {
            name: '삼지창 돌격',
            input: '웅크리기 + 좌클릭',
            description: '삼지창으로 돌진해 꿰뚫습니다.',
          },
          en: {
            name: 'Ocean Charge',
            input: 'Sneak + left-click',
            description: 'Charges forward with the trident.',
          },
          masterLevel: 50,
        },
        {
          id: 'wetSwing',
          icon: 'trident',
          element: 'water',
          ko: {
            name: '해풍참',
            input: '손 바꾸기 + 웅크리기',
            description: '물기를 실은 삼지창 참격입니다.',
          },
          en: {
            name: 'Wet Swing',
            input: 'Swap hands + sneak',
            description: 'A sweeping trident slash imbued with water.',
          },
          masterLevel: 50,
        },
        {
          id: 'splash',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '물보라',
            description:
              '공격력이 증가합니다. 공격·낙하 시 광역 피해, 낙하 면역, 물 저항, 삼지창 급류 부여, 수영 시 이로운 효과.',
          },
          en: {
            name: 'Splash',
            description:
              'More damage; area splash on attack or fall; fall immunity; water resistance; riptide on trident; helpful effects while swimming.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'diffraction',
          icon: 'wave',
          element: 'water',
          followUp: true,
          ko: {
            name: '회절',
            input: '같은 스킬 재입력',
            description: '바다창술 후 재입력.',
          },
          en: {
            name: 'Diffraction',
            input: 'Use the same skill again',
            description: 'Follow-up to Water Spear.',
          },
        },
        {
          id: 'shieldSmite',
          icon: 'shield',
          element: 'water',
          followUp: true,
          ko: {
            name: '방패 강타',
            input: '같은 스킬 재입력',
            description: '물의 방벽 후 재입력.',
          },
          en: {
            name: 'Shield Smite',
            input: 'Use the same skill again',
            description: 'Follow-up to Water Barrier.',
          },
        },
        {
          id: 'crisp',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '낙조',
            input: '삼지창 위치 기준',
            description: '삼지창 위치로 주변 적을 모읍니다.',
          },
          en: {
            name: 'Crisp',
            input: 'At trident location',
            description: 'Pulls nearby enemies to the trident.',
          },
        },
        {
          id: 'hightide',
          icon: 'wave',
          element: 'water',
          ko: { name: '고조', description: '여러 적을 당기고 잠시 제압합니다.' },
          en: { name: 'High Tide', description: 'Pulls multiple enemies and briefly immobilizes them.' },
        },
        {
          id: 'tridentExplosion',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '삼지창 폭발',
            input: '꿰뚫기 후 재공격',
            description: '삼지창 돌격 후 재공격.',
          },
          en: {
            name: 'Trident Explosion',
            input: 'After impale, attack again',
            description: 'Follow-up to Ocean Charge.',
          },
        },
        {
          id: 'backwash',
          icon: 'wave',
          element: 'water',
          followUp: true,
          ko: {
            name: '역류',
            input: '같은 스킬 재입력',
            description: '해풍참 후 재입력.',
          },
          en: {
            name: 'Backwash',
            input: 'Use the same skill again',
            description: 'Follow-up to Wet Swing.',
          },
        },
        {
          id: 'aquaCombat',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '해상 전투술',
            description: '공격력·방어력이 증가합니다. 방패를 든 동안 받는 피해가 90% 감소합니다.',
          },
          en: {
            name: 'Aqua Combat',
            description: 'More damage and armor; 90% damage reduction while blocking with shield.',
          },
        },
        {
          id: 'grandWaves',
          icon: 'wave',
          element: 'water',
          ultimate: true,
          ko: {
            name: '해신격',
            input: '웅크리기 + 숫자키 4',
            description: '거대한 파도로 적을 강타합니다.',
          },
          en: {
            name: 'Grand Waves',
            input: 'Sneak + hotkey 4',
            description: 'Calls crushing waves upon foes.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'flood',
          icon: 'wave',
          element: 'water',
          followUp: true,
          ko: {
            name: '범람',
            input: '같은 스킬 재입력',
            description: '바다창술 후 재입력.',
          },
          en: {
            name: 'Flood',
            input: 'Use the same skill again',
            description: 'Follow-up to Water Spear.',
          },
        },
        {
          id: 'torrent',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '급류',
            input: '같은 스킬 재입력',
            description: '삼지창 위치로 이동합니다.',
          },
          en: {
            name: 'Torrent',
            input: 'Use the same skill again',
            description: 'Warp to your trident.',
          },
        },
        {
          id: 'impale',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '찌르기',
            input: '삼지창 폭발 후 재공격',
            description: '삼지창 폭발 후 재공격.',
          },
          en: {
            name: 'Impale',
            input: 'After Trident Explosion, attack again',
            description: 'Follow-up stab.',
          },
        },
        {
          id: 'cleave',
          icon: 'trident',
          element: 'water',
          followUp: true,
          ko: {
            name: '가르기',
            input: '같은 스킬 재입력',
            description: '해풍참 후 재입력.',
          },
          en: {
            name: 'Cleave',
            input: 'Use the same skill again',
            description: 'Follow-up to Wet Swing.',
          },
        },
        {
          id: 'prowess',
          icon: 'book',
          element: 'water',
          passive: true,
          ko: {
            name: '용맹',
            description: '공격력·방어력이 증가하고 해신격 재사용 대기시간이 줄어듭니다.',
          },
          en: {
            name: 'Prowess',
            description: 'More damage and armor; shorter Grand Waves cooldown.',
          },
        },
        {
          id: 'wrathOfSea',
          icon: 'storm',
          element: 'water',
          ultimate: true,
          ko: {
            name: '바다의 분노',
            input: '웅크리기 + 숫자키 5',
            description: '바다의 분노로 막대한 연속 피해를 줍니다.',
          },
          en: {
            name: 'Wrath of the Sea',
            input: 'Sneak + hotkey 5',
            description: 'Unleashes the sea’s wrath for devastating hits.',
          },
        },
      ],
    },
  ],
};
