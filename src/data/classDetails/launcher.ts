import type { ClassDetailDef } from './types';

export const launcherDetail: ClassDetailDef = {
  id: 'launcher',
  order: 18,
  element: { en: 'Multi-Element', ko: '복합 원소' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'launcher.png', en: { title: 'Elementalist' }, ko: { title: '원소술사' } },
      { tier: 1, portraitFile: 'launcher-limit1.png', en: { title: 'Fusion Mage' }, ko: { title: '융합술사' } },
      { tier: 2, portraitFile: 'launcher-limit2.png', en: { title: 'Mystic' }, ko: { title: '신비술사' } },
    ],
  },
  story: {
    ko: [
      '활로 불·물·바람·번개 화살을 바꿔 쓰는 원소술사입니다. 화살 세례·방출·거대 화살·폭발·응집으로 원거리 제압을 펼칩니다.',
      '마력 강화로 공격력이 오릅니다. 융합술사는 달·태양 화살과 소용돌이, 흡수의 화살로 전장을 뒤흔듭니다.',
      '신비술사는 은하·혜성·성운을 부리고, 하늘 높이서 행성 화살을 쏘아 전장을 종결합니다.',
    ],
    en: [
      'An elementalist who swaps fire, water, wind, and lightning arrows. Arrow rain, discharge, giant arrows, explosions, and charging shots control the field from range.',
      'Magic Arrow raises damage. Fusion Mage merges elements into lunar and solar arrows, tornados, and the absorbing arrow.',
      'Mystic calls galaxy, comet, and nebula—then fires a planetary arrow from the sky to end the fight.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'arrowChange',
          icon: 'arrows-scatter',
          element: 'fire',
          ko: {
            name: '화살 변경',
            input: '웅크리기 + 아이템 변경(휠)',
            description:
              '불·물·엔더(바람)·번개 화살을 전환합니다. 각 원소별 추가 피해와 연소, 둔화, 공중 부양·순간이동, 발광 효과가 있습니다.',
          },
          en: {
            name: 'Arrow Change',
            input: 'Sneak + change item (scroll)',
            description:
              'Cycles flame, aqua, ender (wind), and lightning arrows with bonus damage and burn, slow, levitate/teleport, and glow effects.',
          },
          masterLevel: 1,
        },
        {
          id: 'arrowRain',
          icon: 'arrow',
          element: 'wind',
          ko: { name: '화살 세례', input: '웅크리기 + 손 바꾸기', description: '화살 세례를 내립니다.' },
          en: { name: 'Arrow Rain', input: 'Sneak + swap hands', description: 'Calls down an arrow rain.' },
          masterLevel: 50,
        },
        {
          id: 'discharge',
          icon: 'flame',
          element: 'fire',
          ko: { name: '방출', input: '좌클릭', description: '로켓을 방출합니다.' },
          en: { name: 'Discharge', input: 'Left-click', description: 'Launches rockets.' },
          masterLevel: 50,
        },
        {
          id: 'giantArrow',
          icon: 'spectral-arrow',
          element: 'wind',
          ko: { name: '거대 화살', input: '손 바꾸기', description: '거대 화살을 쏩니다.' },
          en: { name: 'Giant Arrow', input: 'Swap hands', description: 'Fires a giant arrow.' },
          masterLevel: 50,
        },
        {
          id: 'explosion',
          icon: 'bomb',
          element: 'fire',
          ko: { name: '폭발', input: '웅크리기 + 발사', description: '폭발 화살을 쏩니다.' },
          en: { name: 'Explosion', input: 'Sneak + shoot', description: 'Fires an explosive arrow.' },
          masterLevel: 50,
        },
        {
          id: 'chargingShot',
          icon: 'target-shot',
          element: 'lightning',
          ko: { name: '응집', input: '웅크리기 + 좌클릭', description: '응집 화살을 쏩니다.' },
          en: { name: 'Charging Shot', input: 'Sneak + left-click', description: 'Fires a charging shot.' },
          masterLevel: 50,
        },
        {
          id: 'magicArrow',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: { name: '마력 강화', description: '공격력이 증가합니다.' },
          en: { name: 'Magic Arrow', description: 'Increases damage.' },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'fusion',
          icon: 'cycle',
          element: 'fire',
          passive: true,
          ko: {
            name: '융합',
            description: '화살을 달의 화살(엔더+물)과 태양의 화살(불+번개)로 변경합니다.',
          },
          en: {
            name: 'Fusion',
            description: 'Changes arrows to lunar (ender+water) and solar (fire+lightning).',
          },
        },
        {
          id: 'arrowFountain',
          icon: 'arrows-scatter',
          element: 'wind',
          followUp: true,
          ko: {
            name: '화살 분수',
            input: '같은 스킬 재입력',
            description: '화살 분수를 사용합니다.',
          },
          en: {
            name: 'Arrow Fountain',
            input: 'Use the same skill again',
            description: 'Triggers arrow fountain.',
          },
        },
        {
          id: 'rocketHit',
          icon: 'target-shot',
          element: 'fire',
          followUp: true,
          ko: {
            name: '로켓 적중',
            input: '같은 스킬 재입력',
            description: '화살로 로켓을 맞춰 일찍 폭발시킵니다.',
          },
          en: {
            name: 'Rocket Hit',
            input: 'Use the same skill again',
            description: 'Detonates rockets early with arrows.',
          },
        },
        {
          id: 'meteor',
          icon: 'sun',
          element: 'fire',
          followUp: true,
          ko: {
            name: '운석',
            input: '같은 스킬 재입력',
            description: '운석을 소환합니다.',
          },
          en: {
            name: 'Meteor',
            input: 'Use the same skill again',
            description: 'Calls a meteor.',
          },
        },
        {
          id: 'tornado',
          icon: 'storm',
          element: 'wind',
          ko: {
            name: '소용돌이',
            description: '화살 적중 시 소용돌이를 일으킵니다.',
          },
          en: {
            name: 'Tornado',
            description: 'Spawns a tornado on arrow hit.',
          },
        },
        {
          id: 'arrowForce',
          icon: 'bow',
          element: 'wind',
          passive: true,
          ko: { name: '마력 충전', description: '화살이 관통합니다(최대 5).' },
          en: { name: 'Arrow Force', description: 'Arrows pierce enemies (max 5).' },
        },
        {
          id: 'elementalCycle',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '원소 순환',
            description: '공격력이 상승하고 화살 변경 시 이동 속도·점프 효과를 얻습니다.',
          },
          en: {
            name: 'Elemental Cycle',
            description: 'More damage; changing arrow type grants speed and jump boost.',
          },
        },
        {
          id: 'absorbingArrow',
          icon: 'soul',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '흡수의 화살',
            input: '웅크리기 + 숫자키 4',
            description: '범위 내 기술을 흡수해 화살 피해로 되돌려줍니다.',
          },
          en: {
            name: 'Absorbing Arrow',
            input: 'Sneak + hotkey 4',
            description: 'Absorbs nearby skills and returns their hits as arrow damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'galaxy',
          icon: 'sun',
          element: 'wind',
          followUp: true,
          ko: {
            name: '은하',
            input: '같은 스킬 재입력',
            description: '은하를 소환합니다.',
          },
          en: {
            name: 'Galaxy',
            input: 'Use the same skill again',
            description: 'Summons a galaxy.',
          },
        },
        {
          id: 'comet',
          icon: 'flame',
          element: 'fire',
          ko: {
            name: '혜성',
            description: '로켓 폭발 시 혜성을 소환합니다.',
          },
          en: {
            name: 'Comet',
            description: 'Calls a comet when rockets explode.',
          },
        },
        {
          id: 'nebula',
          icon: 'poison',
          element: 'water',
          followUp: true,
          ko: {
            name: '성운',
            input: '같은 스킬 재입력',
            description: '성운을 소환합니다.',
          },
          en: {
            name: 'Nebula',
            input: 'Use the same skill again',
            description: 'Summons a nebula.',
          },
        },
        {
          id: 'dispersion',
          icon: 'arrows-scatter',
          element: 'wind',
          ko: { name: '분산', description: '여러 화살을 동시에 발사합니다.' },
          en: { name: 'Dispersion', description: 'Fires several arrows at once.' },
        },
        {
          id: 'stellarEvolution',
          icon: 'book',
          element: 'lightning',
          passive: true,
          ko: {
            name: '항성 진화',
            description:
              '공격력·방어력 증가, 흡수의 화살 재사용 대기시간 감소, 이속·점프 증폭, 화살 변경 시 야간 투시.',
          },
          en: {
            name: 'Stellar Evolution',
            description:
              'More damage and armor; shorter Absorbing Arrow cooldown; stronger speed/jump; night vision when changing arrows.',
          },
        },
        {
          id: 'planetArrow',
          icon: 'phoenix',
          element: 'fire',
          ultimate: true,
          ko: {
            name: '행성 화살',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '하늘에서 행성 화살을 쏘아 궤적·충돌 피해를 입힙니다.',
          },
          en: {
            name: 'Planet Arrow',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Fires a planetary arrow from the sky for trail and impact damage.',
          },
        },
      ],
    },
  ],
};
