import type { ClassDetailDef } from './types';

export const wrestlerDetail: ClassDetailDef = {
  id: 'wrestler',
  order: 19,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'wreltler.png', en: { title: 'Wrestler' }, ko: { title: '유술가' } },
      { tier: 1, portraitFile: 'wreltler-limit1.png', en: { title: 'Adept' }, ko: { title: '고수' } },
      { tier: 2, portraitFile: 'wreltler-limit2.png', en: { title: 'Champion' }, ko: { title: '패왕' } },
    ],
  },
  story: {
    ko: [
      '깃발무늬 무기와 금빛 갑옷으로 싸우는 유술가입니다. 앞목 조르기·들이치기·안아넘기기·업어치기·풍차 돌리기·목잡아 메치기로 한 명을 붙잡습니다.',
      '팔뚝 내려치기는 높이에 비례해 강해지고, 낙상은 피해와 넉백 저항을 올립니다. 연계기로 상위 난타·뒤메치기·머리꽂기를 이어갑니다.',
      '고수는 무릎 비틀기로 상대를 묶고, 패왕은 낙상 충격파 범위와 회오리 내려꽂기로 전장을 끝냅니다.',
    ],
    en: [
      'A wrestler who fights with banner-pattern weapons and golden armor. Guillotine choke, tackle, suplex, arm throw, giant swing, and choke slam lock down one target.',
      'Forearm smash scales with jump height; takedown raises damage and knockback resistance. Follow-ups chain into pounding, backdrop, and pile driver.',
      'Adept applies the heel hook leg lock; Champion widens takedown shockwaves before cyclone driver finishes the fight.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'guillotineChoke',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '앞목 조르기',
            input: '깃발무늬 무기 + 점프 + 좌클릭',
            description: '적을 잡고 조른 뒤 피해를 줍니다.',
          },
          en: {
            name: 'Guillotine Choke',
            input: 'Banner-pattern weapon + jump + left-click',
            description: 'Grabs and chokes the enemy for damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'tackle',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '들이치기',
            input: '깃발무늬 + 웅크리기 + 우클릭',
            description: '적을 넘어뜨리고 상위 난타 연계를 엽니다.',
          },
          en: {
            name: 'Tackle',
            input: 'Banner-pattern + sneak + right-click',
            description: 'Knocks the foe down and opens pounding follow-up.',
          },
          masterLevel: 1,
        },
        {
          id: 'suplex',
          icon: 'fist-serious',
          element: 'earth',
          ko: {
            name: '안아넘기기',
            input: '깃발무늬 + 비웅크리기 + 우클릭',
            description: '잡은 적을 뒤로 넘기고 뒤메치기 연계를 엽니다.',
          },
          en: {
            name: 'Suplex',
            input: 'Banner-pattern + not sneaking + right-click',
            description: 'Throws the grabbed foe backward; opens backdrop follow-up.',
          },
          masterLevel: 50,
        },
        {
          id: 'armThrow',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '업어치기',
            input: '깃발무늬 + 웅크리기 + 손 바꾸기',
            description: '업어치기로 던지고 머리꽂기 연계를 엽니다.',
          },
          en: {
            name: 'Arm Throw',
            input: 'Banner-pattern + sneak + swap hands',
            description: 'Arm throw opens pile driver follow-up.',
          },
          masterLevel: 50,
        },
        {
          id: 'giantSwing',
          icon: 'cycle',
          element: 'earth',
          ko: {
            name: '풍차 돌리기',
            input: '깃발무늬 + 웅크리기 + 근접 공격',
            description: '다른 스킬 사용 시 잡은 적을 던집니다.',
          },
          en: {
            name: 'Giant Swing',
            input: 'Banner-pattern + sneak + melee attack',
            description: 'Throws the grabbed target when you use another skill.',
          },
          masterLevel: 50,
        },
        {
          id: 'chokeSlam',
          icon: 'sword-drive',
          element: 'earth',
          ko: {
            name: '목잡아 메치기',
            input: '깃발무늬 + 비웅크리기 + 손 바꾸기',
            description: '잡은 적을 내려찍고 손바닥 치기 연계를 엽니다.',
          },
          en: {
            name: 'Choke Slam',
            input: 'Banner-pattern + not sneaking + swap hands',
            description: 'Slams the foe and opens slap follow-up.',
          },
          masterLevel: 50,
        },
        {
          id: 'foreArmSmash',
          icon: 'knuckle',
          element: 'earth',
          ko: {
            name: '팔뚝 내려치기',
            input: '깃발무늬 + 점프 + 근접 공격',
            description: '점프 높이에 비례해 피해가 증가합니다.',
          },
          en: {
            name: 'Forearm Smash',
            input: 'Banner-pattern + jump + melee attack',
            description: 'Damage increases with jump height.',
          },
          masterLevel: 50,
        },
        {
          id: 'takeDown',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '낙상',
            description: '피해량과 넉백 저항이 증가합니다.',
          },
          en: {
            name: 'Takedown',
            description: 'Increases damage and knockback resistance.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'somersault',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          ko: {
            name: '앞공중돌기',
            input: '앞목 조르기 적중 후 같은 키로 재사용',
            description: '앞공중돌기 기술을 사용합니다.',
          },
          en: {
            name: 'Somersault',
            input: 'Reuse the same input after Guillotine Choke',
            description: 'Performs a somersault follow-up.',
          },
        },
        {
          id: 'pounding',
          icon: 'fist',
          element: 'earth',
          followUp: true,
          ko: {
            name: '상위 난타',
            input: '들이치기 적중 후 같은 키로 재사용',
            description: '상위 난타 연타를 가합니다.',
          },
          en: {
            name: 'Pounding',
            input: 'Reuse the same input after Tackle',
            description: 'Ground-and-pound follow-up.',
          },
        },
        {
          id: 'backDrop',
          icon: 'fist-serious',
          element: 'earth',
          followUp: true,
          ko: {
            name: '뒤메치기',
            input: '안아넘기기 적중 후 같은 키로 재사용',
            description: '뒤메치기 피해를 줍니다.',
          },
          en: {
            name: 'Back Drop',
            input: 'Reuse the same input after Suplex',
            description: 'Backdrop damage follow-up.',
          },
        },
        {
          id: 'pileDriver',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          ko: {
            name: '머리꽂기',
            input: '업어치기 적중 후 같은 키로 재사용',
            description: '머리꽂기 피해를 줍니다.',
          },
          en: {
            name: 'Pile Driver',
            input: 'Reuse the same input after Arm Throw',
            description: 'Pile driver damage follow-up.',
          },
        },
        {
          id: 'whirlwind',
          icon: 'cycle',
          element: 'earth',
          followUp: true,
          ko: {
            name: '회오리',
            input: '풍차 돌리기 적중 후 같은 키로 재사용',
            description: '주변 적을 끌어당기며 연타합니다.',
          },
          en: {
            name: 'Whirlwind',
            input: 'Reuse the same input after Giant Swing',
            description: 'Pulls nearby foes and strikes repeatedly.',
          },
        },
        {
          id: 'slap',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          ko: {
            name: '손바닥 치기',
            input: '목잡아 메치기 적중 후 같은 키로 재사용',
            description: '적을 짧게 묶습니다.',
          },
          en: {
            name: 'Slap',
            input: 'Reuse the same input after Choke Slam',
            description: 'Briefly locks down the target.',
          },
        },
        {
          id: 'submission',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 16,
          ko: { name: '제압', description: '공격력이 증가합니다. 연계기의 구속(홀딩) 시간이 증가합니다.' },
          en: { name: 'Submission', description: 'Increases damage. Follow-up lock duration is increased.' },
        },
        {
          id: 'heelHook',
          icon: 'steady',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '무릎 비틀기',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '무릎 비틀기로 주변 적을 제압한 뒤 연계 피해를 입힙니다.',
          },
          en: {
            name: 'Heel Hook',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Locks nearby foes with a heel hook, then deals follow-up damage.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'moonSault',
          icon: 'rush',
          element: 'earth',
          ko: {
            name: '뒤공중돌기',
            description: '앞공중돌기가 강화된 뒤공중돌기 기술입니다.',
          },
          en: {
            name: 'Moonsault',
            description: 'Enhanced somersault at proficiency 2.',
          },
        },
        {
          id: 'muscleBomb',
          icon: 'bomb',
          element: 'earth',
          ko: {
            name: '금강쇄',
            description: '뒤메치기 적중 시 추가 폭발 피해를 줍니다.',
          },
          en: {
            name: 'Muscle Bomb',
            description: 'Bonus explosion after Back Suplex.',
          },
        },
        {
          id: 'slamToBlow',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '메치고 띄우기',
            description: '머리꽂기 이후 적을 띄웁니다.',
          },
          en: {
            name: 'Slam to Blow',
            description: 'Launches enemies after Piledriver.',
          },
        },
        {
          id: 'fighterOnTheRing',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '진정한 싸움꾼',
            description:
              '공격력·방어력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다. 낙상(지면 충격) 효과의 충격파 범위가 증가합니다(낙상 LV당 +4%).',
          },
          en: {
            name: 'Fighter on the Ring',
            description:
              'Increases damage and defense. First limit-break ultimate cooldown is halved. Shockwave radius of takedown ground impacts increases (+4% per TakeDown level).',
          },
        },
        {
          id: 'cycloneDriver',
          icon: 'storm',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '회오리 내려꽂기',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '공중 회전 후 강하게 내려찍습니다.',
          },
          en: {
            name: 'Cyclone Driver',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Spins in the air then slams down hard.',
          },
        },
      ],
    },
  ],
};
