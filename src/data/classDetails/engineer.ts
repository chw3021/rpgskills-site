import type { ClassDetailDef } from './types';

export const engineerDetail: ClassDetailDef = {
  id: 'engineer',
  order: 21,
  element: { en: 'Lightning', ko: '번개' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'engineer.png', en: { title: 'Engineer' }, ko: { title: '공학자' } },
      { tier: 1, portraitFile: 'engineer-limit1.png', en: { title: 'Controller' }, ko: { title: '제어자' } },
      { tier: 2, portraitFile: 'engineer-limit2.png', en: { title: 'Operator' }, ko: { title: '중재자' } },
    ],
  },
  story: {
    ko: [
      '곡괭이와 장비로 전장을 설계하는 공학자입니다. 중력자·엑스선·자성·정전기장·제트팩·발사기로 적을 끌어모으고, 전투슈트로 공격력과 생존력을 키웁니다.',
      '숙련이 오르면 에너지구체·EMP·강자기장 등 재입력 연계가 열리고, 오버클럭으로 스킬 쿨다운이 줄어듭니다. 제어자는 전투 순양함으로 화력과 사거리가 강화됩니다.',
      '중재자는 원자궤도·역중력장·팩토리로 지역을 장악하고, 원자로로 순양함을 더 자주 쓰며 블랙홀로 전장을 삼킵니다.',
    ],
    en: [
      'An engineer who designs the battlefield with a pickaxe and gadgets. Graviton, X-ray, magnetism, electrostatic field, jetpack, and dispenser herd foes while the combat suit raises damage and mitigation.',
      'Higher proficiency unlocks re-input chains like energy ball, EMP, and strong magnetism; Overclock trims cooldowns. The Controller tiers up with the battle cruiser for more damage and range.',
      'The Operator commands orbitals, anti-gravity, and factories; the nuclear reactor shortens cruiser cooldown before a black hole devours the field.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'graviton',
          icon: 'cycle',
          element: 'lightning',
          ko: {
            name: '중력자',
            input: '손 바꾸기',
            description: '중력 공격을 사용합니다(1차·2차 피해).',
          },
          en: {
            name: 'Graviton',
            input: 'Swap hands',
            description: 'Gravity attack with primary and secondary damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'xRay',
          icon: 'target-shot',
          element: 'lightning',
          ko: {
            name: '엑스선',
            input: '웅크리기 + 우클릭',
            description: '적의 공격력을 낮춥니다.',
          },
          en: {
            name: 'X-ray',
            input: 'Sneak + right-click',
            description: 'Reduces enemy attack damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'magnetic',
          icon: 'book',
          element: 'lightning',
          ko: {
            name: '자성',
            input: '근접 공격 + 웅크리기',
            description: '근접 타격 시 자성 효과가 발동합니다.',
          },
          en: {
            name: 'Magnetic',
            input: 'Melee attack + sneak',
            description: 'Magnetic effect triggers on melee hits while sneaking.',
          },
          masterLevel: 1,
        },
        {
          id: 'electrostatic',
          icon: 'storm',
          element: 'lightning',
          ko: {
            name: '정전기장',
            input: '우클릭',
            description: '정전기장으로 피해를 줍니다.',
          },
          en: {
            name: 'Electrostatic',
            input: 'Right-click',
            description: 'Damages with an electrostatic field.',
          },
          masterLevel: 50,
        },
        {
          id: 'jetpack',
          icon: 'rush',
          element: 'lightning',
          ko: {
            name: '제트팩',
            input: '우클릭 + 점프',
            description:
              '낙하 피해에 면역됩니다. 착지 시 주변 적에게 피해를 주며,',
          },
          en: {
            name: 'Jetpack',
            input: 'Right-click + jump',
            description:
              'Immune to fall damage. Landing damages nearby foes;',
          },
          masterLevel: 1,
        },
        {
          id: 'dispenser',
          icon: 'crossbow',
          element: 'lightning',
          ko: {
            name: '발사기',
            input: '손 바꾸기 + 웅크리기',
            description: '발사기로 피해를 줍니다.',
          },
          en: {
            name: 'Dispenser',
            input: 'Swap hands + sneak',
            description: 'Fires the dispenser for damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'combatSuit',
          icon: 'book',
          element: 'lightning',
          passive: true,
          ko: {
            name: '전투슈트',
            description:
              '공격력이 증가합니다. 최대 체력의 20%를 넘는 피해량을 감소시킵니다.',
          },
          en: {
            name: 'Combat Suit',
            description:
              'Increases damage. Reduces damage that exceeds 20% of max health.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'energyBall',
          icon: 'cycle',
          element: 'lightning',
          followUp: true,
          chainOf: 'graviton',
          ko: {
            name: '에너지구체',
            input: '중력자 재입력',
            description: '에너지구체를 발사합니다.',
          },
          en: {
            name: 'Energy Ball',
            input: 'Use Graviton again',
            description: 'Launches an energy ball.',
          },
        },
        {
          id: 'emp',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'xRay',
          ko: {
            name: 'EMP',
            input: '엑스선 재입력',
            description: 'EMP를 발사합니다.',
          },
          en: {
            name: 'EMP',
            input: 'Use X-ray again',
            description: 'Fires EMP.',
          },
        },
        {
          id: 'strongMagnetic',
          icon: 'cycle',
          element: 'lightning',
          followUp: true,
          chainOf: 'magnetic',
          ko: {
            name: '강자기장',
            input: '자성 재입력',
            description: '여러 적을 끌어올 수 있습니다.',
          },
          en: {
            name: 'Strong Magnetic',
            input: 'Use Magnetic again',
            description: 'Can pull multiple enemies.',
          },
        },
        {
          id: 'thunderCaller',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'electrostatic',
          ko: {
            name: '썬더콜러',
            input: '정전기장 재입력',
            description: '썬더콜러를 설치합니다.',
          },
          en: {
            name: 'Thunder Caller',
            input: 'Use Electrostatic again',
            description: 'Places a thunder caller.',
          },
        },
        {
          id: 'propellant',
          icon: 'rush',
          element: 'lightning',
          followUp: true,
          chainOf: 'jetpack',
          ko: {
            name: '추진',
            input: '제트팩 재입력',
            description: '전방으로 빠르게 이동합니다.',
          },
          en: {
            name: 'Propellant',
            input: 'Use Jetpack again',
            description: 'Dashes forward quickly.',
          },
        },
        {
          id: 'observer',
          icon: 'target-shot',
          element: 'lightning',
          followUp: true,
          chainOf: 'dispenser',
          ko: {
            name: '관측기',
            input: '발사기 재입력',
            description: '관측기를 설치합니다.',
          },
          en: {
            name: 'Observer',
            input: 'Use Dispenser again',
            description: 'Places an observer turret.',
          },
        },
        {
          id: 'overclock',
          icon: 'book',
          element: 'lightning',
          passive: true,
          chainOf: 'combatSuit',
          ko: {
            name: '오버클럭',
            description:
              '공격력이 증가합니다. 궁극기를 제외한 스킬 사용 시 모든 스킬 재사용 대기가 0.5초 감소합니다.',
          },
          en: {
            name: 'Overclock',
            description:
              'Increases damage. Using any skill (except ultimates) reduces all skill cooldowns by 0.5s.',
          },
        },
        {
          id: 'battleCruiser',
          icon: 'crossbow',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '전투 순양함',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description: '스킬 공격력과 성능이 증가합니다(+0.1D). 2차 한계 돌파 시 순양함 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Battle Cruiser',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Raises skill damage and performance (+0.1D). Cruiser cooldown is shorter at second limit break.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'orbital',
          icon: 'cycle',
          element: 'lightning',
          followUp: true,
          chainOf: 'graviton',
          ko: {
            name: '원자궤도',
            input: '에너지구체 재입력',
            description: '원자궤도를 생성합니다.',
          },
          en: {
            name: 'Orbital',
            input: 'Use Energy Ball again',
            description: 'Creates an atomic orbital.',
          },
        },
        {
          id: 'gravityShift',
          icon: 'target-shot',
          element: 'lightning',
          followUp: true,
          chainOf: 'xRay',
          ko: {
            name: '중력가속',
            input: 'EMP 재입력',
            description: '중력가속을 사용합니다.',
          },
          en: {
            name: 'Gravity Shift',
            input: 'Use EMP again',
            description: 'Uses gravity shift.',
          },
        },
        {
          id: 'antiGravity',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          chainOf: 'electrostatic',
          ko: {
            name: '역중력장',
            input: '썬더콜러 재입력',
            description: '역중력장을 생성합니다.',
          },
          en: {
            name: 'Anti-Gravity',
            input: 'Use Thunder Caller again',
            description: 'Creates an anti-gravity field.',
          },
        },
        {
          id: 'factory',
          icon: 'crossbow',
          element: 'lightning',
          followUp: true,
          chainOf: 'dispenser',
          ko: {
            name: '팩토리',
            input: '관측기 재입력',
            description: '팩토리를 설치합니다.',
          },
          en: {
            name: 'Factory',
            input: 'Use Observer again',
            description: 'Places a factory.',
          },
        },
        {
          id: 'nuclearReactor',
          icon: 'book',
          element: 'lightning',
          passive: true,
          chainOf: 'combatSuit',
          ko: {
            name: '원자로',
            description: '공격력과 방어력이 증가합니다. 전투 순양함 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Nuclear Reactor',
            description: 'Increases damage and armor. Reduces Battle Cruiser cooldown.',
          },
        },
        {
          id: 'blackHole',
          icon: 'soul',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '블랙홀',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description: '블랙홀을 소환해 광역 피해를 줍니다.',
          },
          en: {
            name: 'Black Hole',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Summons a black hole for area damage.',
          },
        },
      ],
    },
  ],
};
