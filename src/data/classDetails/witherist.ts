import type { ClassDetailDef } from './types';

export const witheristDetail: ClassDetailDef = {
  id: 'witherist',
  order: 23,
  element: { en: 'Dark', ko: '어둠' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'witherist.png', en: { title: 'Witherist' }, ko: { title: '위더리스트' } },
      { tier: 1, portraitFile: 'witherist-limit1.png', en: { title: 'Revenger' }, ko: { title: '복수자' } },
      { tier: 2, portraitFile: 'witherist-limit2.png', en: { title: 'Prophet' }, ko: { title: '선지자' } },
    ],
  },
  story: {
    ko: [
      '괭이로 위더의 저주를 다루는 위더리스트입니다. 위더해골·어둠의 갈고리·구속의 낫·저주·부유·위더장미로 사냥하고, 위더화로 위더형 적에게 강해집니다.',
      '복수자는 올가미·흡수의 갈고리·밤의 고리 등 연계를 갖추고 복수심으로 피해를 키웁니다. 극복으로 저주를 누르듯 씁니다.',
      '선지자는 백색 석영·정화 광선·정혈로 위더를 완전히 정복하고, 정복으로 전장을 밝은 서리처럼 끝냅니다.',
    ],
    en: [
      'A witherist who wields the Wither curse with a hoe. Wither skull, reaping hook, binding scythe, curse, hover, and wither roses hunt foes while Witherize punishes Wither-type enemies.',
      'The Revenger arms specialized hunting tools, chains bolas and night circles, and fuels revenge with Vengeance before Overcome bends the curse.',
      'The Prophet masters White Quartz and purifier beams; Depuration ends the curse entirely before Overthrow finishes the field in radiant white.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'witherSkull',
          icon: 'soul',
          element: 'dark',
          ko: {
            name: '위더해골',
            input: '손 바꾸기',
            description: '위더 해골을 발사합니다. 부유 중 사용 시 강화된 해골을 쏩니다(피해 2배).',
          },
          en: {
            name: 'Wither Skull',
            input: 'Swap hands',
            description: 'Launches a wither skull. While hovering, fires a charged skull (double damage).',
          },
          masterLevel: 50,
        },
        {
          id: 'reapingHook',
          icon: 'hook-shot',
          element: 'dark',
          ko: {
            name: '어둠의 갈고리',
            input: '웅크리기 + 우클릭',
            description: '어둠의 갈고리로 적을 끌어옵니다.',
          },
          en: {
            name: 'Reaping Hook',
            input: 'Sneak + right-click',
            description: 'Pulls foes with a dark reaping hook.',
          },
          masterLevel: 1,
        },
        {
          id: 'witherScythe',
          icon: 'slash',
          element: 'dark',
          ko: {
            name: '구속의 낫',
            input: '웅크리기 + 근접 공격',
            description: '낫으로 큰 피해를 줍니다.',
          },
          en: {
            name: 'Wither Scythe',
            input: 'Sneak + melee attack',
            description: 'Deals heavy scythe damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'curse',
          icon: 'aura',
          element: 'dark',
          ko: {
            name: '저주',
            input: '우클릭',
            description: '저주 피해를 입힙니다.',
          },
          en: {
            name: 'Curse',
            input: 'Right-click',
            description: 'Inflicts curse damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'hover',
          icon: 'rush',
          element: 'dark',
          ko: {
            name: '부유',
            input: '좌클릭 + 점프',
            description: '공중에 부유합니다.',
          },
          en: {
            name: 'Hover',
            input: 'Left-click + jump',
            description: 'Hovers in the air.',
          },
          masterLevel: 1,
        },
        {
          id: 'roses',
          icon: 'stab',
          element: 'dark',
          ko: {
            name: '위더장미',
            input: '손 바꾸기 + 웅크리기',
            description: '위더 장미로 피해를 줍니다.',
          },
          en: {
            name: 'Wither Roses',
            input: 'Swap hands + sneak',
            description: 'Damages with wither roses.',
          },
          masterLevel: 50,
        },
        {
          id: 'witherize',
          icon: 'book',
          element: 'dark',
          passive: true,
          ko: {
            name: '위더화',
            description:
              '공격력이 증가합니다(위더형 적에게 2배). 위더형 적 피해 감소, 위더 효과 면역, 어둠 저항 증가, 적에게 시듦을 겁니다.',
          },
          en: {
            name: 'Witherize',
            description:
              'Increases damage (double vs Wither-type). Reduces damage from Wither-type, immune to Wither, raises dark resistance, applies Wither to foes.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'witherBola',
          icon: 'soul',
          element: 'dark',
          followUp: true,
          chainOf: 'witherSkull',
          ko: {
            name: '위더용 올가미',
            input: '위더해골 재입력',
            description: '올가미를 투척합니다. 피해량은 위더해골 레벨에 비례합니다.',
          },
          en: {
            name: 'Wither Bola',
            input: 'Use Wither Skull again',
            description: 'Throws a wither bola. Damage scales with Wither Skull level.',
          },
        },
        {
          id: 'absorbingHook',
          icon: 'hook-shot',
          element: 'dark',
          followUp: true,
          chainOf: 'reapingHook',
          ko: {
            name: '흡수의 갈고리',
            input: '어둠의 갈고리 재입력',
            description: '주변 적들도 끌어옵니다.',
          },
          en: {
            name: 'Absorbing Hook',
            input: 'Use Reaping Hook again',
            description: 'Pulls nearby enemies as well.',
          },
        },
        {
          id: 'sweeping',
          icon: 'slash',
          element: 'dark',
          followUp: true,
          chainOf: 'witherScythe',
          ko: {
            name: '휩쓸기',
            input: '구속의 낫 재입력',
            description: '낫 범위가 증가합니다.',
          },
          en: {
            name: 'Sweeping',
            input: 'Use Wither Scythe again',
            description: 'Increases scythe range.',
          },
        },
        {
          id: 'circleOfNight',
          icon: 'aura',
          element: 'dark',
          followUp: true,
          chainOf: 'curse',
          ko: {
            name: '밤의 고리',
            input: '저주 재입력',
            description: '밤의 고리를 사용합니다. 피해량은 저주 레벨에 비례합니다.',
          },
          en: {
            name: 'Circle of Night',
            input: 'Use Curse again',
            description: 'Uses circle of night. Damage scales with Curse level.',
          },
        },
        {
          id: 'enhancedHover',
          icon: 'rush',
          element: 'dark',
          followUp: true,
          chainOf: 'hover',
          ko: {
            name: '부유술',
            input: '부유 재입력',
            description: '부유 지속 시간이 두 배로 증가합니다.',
          },
          en: {
            name: 'Enhanced Hover',
            input: 'Use Hover again',
            description: 'Doubles hover duration.',
          },
        },
        {
          id: 'demolition',
          icon: 'stab',
          element: 'dark',
          followUp: true,
          chainOf: 'roses',
          ko: {
            name: '파괴',
            input: '위더장미 재입력',
            description: '파괴를 사용합니다. 피해량은 위더장미 레벨에 비례합니다.',
          },
          en: {
            name: 'Demolition',
            input: 'Use Wither Roses again',
            description: 'Uses demolition. Damage scales with Wither Roses level.',
          },
        },
        {
          id: 'vengeance',
          icon: 'book',
          element: 'dark',
          passive: true,
          chainOf: 'witherize',
          ko: {
            name: '복수심',
            description: '공격력이 증가합니다.',
          },
          en: {
            name: 'Vengeance',
            description: 'Increases damage.',
          },
        },
        {
          id: 'overcome',
          icon: 'soul',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '극복',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '위더의 저주를 눌러 광역 피해를 줍니다.',
          },
          en: {
            name: 'Overcome',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Suppresses the Wither curse for heavy area damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'whiteQuartz',
          icon: 'soul',
          element: 'dark',
          followUp: true,
          chainOf: 'witherSkull',
          ko: {
            name: '백색 석영',
            input: '위더용 올가미 재입력',
            description: '백색 석영을 사용합니다. 피해량은 위더해골 레벨에 비례합니다.',
          },
          en: {
            name: 'White Quartz',
            input: 'Use Wither Bola again',
            description: 'Uses white quartz. Damage scales with Wither Skull level.',
          },
        },
        {
          id: 'crystalCage',
          icon: 'aura',
          element: 'dark',
          followUp: true,
          chainOf: 'curse',
          ko: {
            name: '수정 감옥',
            input: '밤의 고리 재입력',
            description: '수정 감옥을 사용합니다. 피해량은 저주 레벨에 비례합니다.',
          },
          en: {
            name: 'Crystal Cage',
            input: 'Use Circle of Night again',
            description: 'Uses crystal cage. Damage scales with Curse level.',
          },
        },
        {
          id: 'witherBarrier',
          icon: 'shield',
          element: 'dark',
          followUp: true,
          chainOf: 'hover',
          ko: {
            name: '위더 방벽',
            input: '부유술 재입력',
            description: '사용 시 2초 동안 무적 상태가 됩니다.',
          },
          en: {
            name: 'Wither Barrier',
            input: 'Use Enhanced Hover again',
            description: 'Grants 2 seconds of invulnerability when used.',
          },
        },
        {
          id: 'purifierBeam',
          icon: 'steady',
          element: 'dark',
          followUp: true,
          chainOf: 'roses',
          ko: {
            name: '정화 광선',
            input: '파괴 재입력',
            description: '정화 광선을 쏩니다. 피해량은 위더장미 레벨에 비례합니다.',
          },
          en: {
            name: 'Purifier Beam',
            input: 'Use Demolition again',
            description: 'Fires a purifier beam. Damage scales with Wither Roses level.',
          },
        },
        {
          id: 'depuration',
          icon: 'book',
          element: 'dark',
          passive: true,
          chainOf: 'witherize',
          ko: {
            name: '정혈',
            description:
              '공격력과 방어력이 증가합니다. 극복 재사용 대기가 감소하고, 일부 기술 시각 효과가 바뀝니다. 위더형 적에게 완전 면역됩니다.',
          },
          en: {
            name: 'Depuration',
            description:
              'Increases damage and armor. Shortens Overcome cooldown, changes some skill VFX, and grants full immunity to Wither-type foes.',
          },
        },
        {
          id: 'overthrow',
          icon: 'soul',
          element: 'dark',
          ultimate: true,
          ko: {
            name: '정복',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '정화된 위더의 힘으로 광역 피해를 줍니다.',
          },
          en: {
            name: 'Overthrow',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Deals area damage with mastered Wither power.',
          },
        },
      ],
    },
  ],
};
