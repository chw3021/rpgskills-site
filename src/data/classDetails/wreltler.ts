import type { ClassDetailDef } from './types';

export const wreltlerDetail: ClassDetailDef = {
  id: 'wreltler',
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
      '깃발무늬 무기와 금빛 갑옷으로 싸우는 유술가입니다. 길로틴 초크·태클·수플렉스·업어치기·자이언트 스윙·초크 슬램으로 한 명을 붙잡습니다.',
      '포어암 스매시는 높이에 비례해 강해지고, 테이크다운은 피해와 넉백 저항을 올립니다. 연계기로 파운딩·백드롭·파일 드라이버를 이어갑니다.',
      '고수는 힐 훅(다리 꺾기)으로 상대를 묶고, 패왕은 링 위에서 백플립 뒤 사이클론 드라이버로 전장을 끝냅니다.',
    ],
    en: [
      'A wrestler who fights with banner-pattern weapons and golden armor. Guillotine choke, tackle, suplex, arm throw, giant swing, and choke slam lock down one target.',
      'Forearm smash scales with jump height; takedown raises damage and knockback resistance. Follow-ups chain into pounding, backdrop, and pile driver.',
      'Adept applies the heel hook leg lock; Champion leaps from the ring with a backflip into cyclone driver to finish the fight.',
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
            name: '길로틴 초크',
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
            name: '태클',
            input: '깃발무늬 + 웅크리기 + 우클릭',
            description: '적을 넘어뜨리고 파운딩 연계를 엽니다.',
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
            name: '수플렉스',
            input: '깃발무늬 + 비웅크리기 + 우클릭',
            description: '잡은 적을 뒤로 넘기고 백드롭 연계를 엽니다.',
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
            description: '업어치기로 던지고 파일 드라이버 연계를 엽니다.',
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
            name: '자이언트 스윙',
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
            name: '초크 슬램',
            input: '깃발무늬 + 비웅크리기 + 손 바꾸기',
            description: '잡은 적을 내려찍고 슬랩 연계를 엽니다.',
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
            name: '포어암 스매시',
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
            name: '테이크다운',
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
            name: '전위',
            input: '길로틴 초크 적중 후 같은 키로 재사용',
            description: '전위 기술을 사용합니다.',
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
            name: '파운딩',
            input: '태클 적중 후 같은 키로 재사용',
            description: '파운딩 연타를 가합니다.',
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
            name: '백드롭',
            input: '수플렉스 적중 후 같은 키로 재사용',
            description: '백드롭 피해를 줍니다.',
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
            name: '파일 드라이버',
            input: '업어치기 적중 후 같은 키로 재사용',
            description: '파일 드라이버 피해를 줍니다.',
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
            input: '자이언트 스윙 적중 후 같은 키로 재사용',
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
            name: '슬랩',
            input: '초크 슬램 적중 후 같은 키로 재사용',
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
          ko: { name: '서브미션', description: '연계기의 구속 시간이 증가합니다.' },
          en: { name: 'Submission', description: 'Increases follow-up lock duration.' },
        },
        {
          id: 'heelHook',
          icon: 'steady',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '다리 꺾기 (힐 훅)',
            input: '전투 모드 + 깃발무늬 + 웅크리기 + 전투 숫자키 4',
            description: '힐 훅으로 주변 적을 제압한 뒤 연계 피해를 입힙니다.',
          },
          en: {
            name: 'Heel Hook',
            input: 'Combat mode + banner-pattern + sneak + combat hotkey 4',
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
            name: '문쏠트',
            description: '전위가 강화된 문쏠트 기술입니다.',
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
            name: '머슬 밤',
            description: '문쏠트 적중 시 추가 폭발 피해를 줍니다(×공격력).',
          },
          en: {
            name: 'Muscle Bomb',
            description: 'Bonus explosion after Moonsault (×attack damage).',
          },
        },
        {
          id: 'slamToBlow',
          icon: 'fist',
          element: 'earth',
          ko: {
            name: '슬램 투 블로',
            description: '문쏠트 이후 적을 띄웁니다(×공격력).',
          },
          en: {
            name: 'Slam to Blow',
            description: 'Launches enemies after Moonsault (×attack damage).',
          },
        },
        {
          id: 'fighterOnTheRing',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '링의 파이터',
            description: '추가 피해 배율이 오릅니다(테이크다운 레벨 반영).',
          },
          en: {
            name: 'Fighter on the Ring',
            description: 'Extra damage multiplier scales with Takedown level.',
          },
        },
        {
          id: 'cycloneDriver',
          icon: 'storm',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '사이클론 드라이버',
            input: '전투 모드 + 깃발무늬 + 웅크리기 + 전투 숫자키 5',
            description: '공중 회전 후 강하게 내려찍습니다. 피해는 패널 공격력에 곱해집니다.',
          },
          en: {
            name: 'Cyclone Driver',
            input: 'Combat mode + banner-pattern + sneak + combat hotkey 5',
            description: 'Spins in the air then slams down. Damage is multiplier × panel attack damage.',
          },
        },
      ],
    },
  ],
};
