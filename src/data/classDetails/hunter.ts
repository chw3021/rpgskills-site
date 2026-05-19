import type { ClassDetailDef } from './types';

export const hunterDetail: ClassDetailDef = {
  id: 'hunter',
  order: 9,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'hunter.png', en: { title: 'Hunter' }, ko: { title: '사냥꾼' } },
      { tier: 1, portraitFile: 'hunter-limit1.png', en: { title: 'Jaeger' }, ko: { title: '사냥귀' } },
      { tier: 2, portraitFile: 'hunter-limit2.png', en: { title: 'Executor' }, ko: { title: '집행자' } },
    ],
  },
  story: {
    ko: [
      '후드 아래 그림자에서 단일 표적을 노리는 암살형 전사입니다. 은신·회피·등반으로 접근한 뒤, 도끼 한 방으로 사냥을 끝냅니다.',
      '인생은 한 방은 모든 기술을 한 번의 강화 공격으로 모읍니다. 최대 충전이 아니면 절반 피해, 충전 시 최대 체력 비례 추가 피해가 붙습니다.',
      '사냥귀는 공포를, 집행자는 정의의 처단을 상징합니다. 바람을 타고 어둠 속에서 악을 집행하는 자입니다.',
    ],
    en: [
      'An assassin who strikes one mark from the hooded shadows. Stealth, dodge, and climb close the gap; one axe swing ends the hunt.',
      'One Shot stacks every skill into a single empowered blow. Half damage when not fully charged; at full charge, bonus damage scales with the target’s max HP.',
      'Jaeger brings terror; Executor brings righteous judgment. They ride the wind to execute evil from the dark.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'backattack',
          icon: 'stealth',
          element: 'wind',
          passive: true,
          ko: {
            name: '암습',
            description: '적의 후방을 공격하면 50% 추가 피해를 줍니다. 경험치 레벨이 높을수록 판정이 좋아집니다.',
          },
          en: {
            name: 'Back Attack',
            description: '50% bonus damage when hitting from behind. Hit detection improves with XP level.',
          },
        },
        {
          id: 'webThrow',
          icon: 'poison',
          element: 'wind',
          ko: { name: '그물 투척', input: '웅크리기 + 우클릭', description: '그물을 투척합니다.' },
          en: { name: 'Web Throw', input: 'Sneak + right-click', description: 'Throws a web.' },
        },
        {
          id: 'dodge',
          icon: 'rush',
          element: 'wind',
          ko: {
            name: '회피',
            input: '손 바꾸기',
            description: '회피합니다. 낙하 피해가 감소합니다.',
          },
          en: {
            name: 'Dodge',
            input: 'Swap hands',
            description: 'Dodges. Reduces fall damage.',
          },
        },
        {
          id: 'hunting',
          icon: 'axe',
          element: 'wind',
          ko: {
            name: '사냥',
            input: '우클릭',
            description: '사냥 모드를 켭니다. 적에게 피해를 주면 비활성화되며, 처치 시 재사용 대기시간이 2초 감소합니다.',
          },
          en: {
            name: 'Hunting',
            input: 'Right-click',
            description: 'Activates hunting. Disabled after damaging a foe; killing reduces cooldown by 2s.',
          },
          masterLevel: 50,
        },
        {
          id: 'daze',
          icon: 'slash',
          element: 'wind',
          ko: {
            name: '참격',
            input: '웅크리기 + 공격',
            description: '적을 0.5초 기절시킵니다.',
          },
          en: {
            name: 'Daze',
            input: 'Sneak + attack',
            description: 'Stuns the target for 0.5s.',
          },
          masterLevel: 50,
        },
        {
          id: 'skullCrusher',
          icon: 'axe',
          element: 'wind',
          ko: {
            name: '두개골 분쇄',
            input: '점프 + 공격',
            description: '50% 추가 피해를 줍니다.',
          },
          en: {
            name: 'Skull Crusher',
            input: 'Jump + attack',
            description: 'Deals 50% bonus damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'climb',
          icon: 'stealth',
          element: 'wind',
          ko: {
            name: '등반',
            input: '웅크리기 + 손 바꾸기',
            description: '등반을 활성화/비활성화합니다.',
          },
          en: {
            name: 'Climb',
            input: 'Sneak + swap hands',
            description: 'Toggles wall climbing.',
          },
        },
        {
          id: 'atrocity',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '인생은 한 방',
            description:
              '모든 기술이 한 번의 공격을 강화합니다(합연산). 미충전 시 절반 피해, 허기 면역. 최대 충전 시 최대 체력 비례 추가 피해.',
          },
          en: {
            name: 'One Shot',
            description:
              'All skills empower a single strike (additive). Half damage when not fully charged; hunger immunity. Full charge adds max-HP-based bonus damage.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'extraWebs',
          icon: 'poison',
          element: 'wind',
          ko: { name: '그물 추가', description: '그물 개수가 증가합니다.' },
          en: { name: 'Extra Webs', description: 'Throws more webs.' },
        },
        {
          id: 'agility',
          icon: 'rush',
          element: 'wind',
          passive: true,
          ko: { name: '기민함', description: '적 처치 시 재사용 대기시간이 초기화됩니다.' },
          en: { name: 'Agility', description: 'Killing an enemy resets cooldowns.' },
        },
        {
          id: 'infatuation',
          icon: 'axe',
          element: 'wind',
          ko: { name: '열광', description: '적에게 공격만 해도 재사용 대기시간이 감소합니다.' },
          en: { name: 'Infatuation', description: 'Hitting enemies also reduces cooldown.' },
        },
        {
          id: 'impact',
          icon: 'slash',
          element: 'wind',
          ko: { name: '충격', description: '주변 적도 경직시킵니다.' },
          en: { name: 'Impact', description: 'Also staggers nearby enemies.' },
        },
        {
          id: 'fear',
          icon: 'stealth',
          element: 'wind',
          ko: { name: '공포', description: '적 처치 시 주변 적이 경직됩니다.' },
          en: { name: 'Fear', description: 'Nearby enemies stagger when you get a kill.' },
        },
        {
          id: 'superJump',
          icon: 'wind',
          element: 'wind',
          ko: {
            name: '도움닫기',
            input: '웅크리기 유지(등반 ON)',
            description: '웅크린 채 점프력이 충전됩니다(최대 10).',
          },
          en: {
            name: 'Super Jump',
            input: 'Hold sneak (while climbing on)',
            description: 'Charges jump power while sneaking (max 10).',
          },
        },
        {
          id: 'flawless',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: { name: '무결', description: '전체 공격력이 증가합니다.' },
          en: { name: 'Flawless', description: 'Increases all skill damage.' },
        },
        {
          id: 'rage',
          icon: 'blood',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '갈망',
            input: '웅크리기 + 숫자키 4',
            description:
              '다음 1회 피해를 강화하고 주변 적을 경직시킵니다. 참격·두개골 분쇄 재사용 대기시간이 초기화됩니다.',
          },
          en: {
            name: 'Rage',
            input: 'Sneak + hotkey 4',
            description:
              'Empowers your next hit and staggers nearby foes. Resets Daze and Skull Crusher cooldown.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'webRetrieving',
          icon: 'poison',
          element: 'wind',
          ko: { name: '그물 회수', input: '재사용', description: '그물에 맞은 적을 끌어옵니다.' },
          en: { name: 'Web Retrieving', input: 'Use again', description: 'Pulls enemies caught in webs.' },
        },
        {
          id: 'posture',
          icon: 'slash',
          element: 'wind',
          ko: { name: '자세', description: '회피 후 다음 1회 공격 피해가 증가합니다.' },
          en: { name: 'Posture', description: 'After dodging, your next attack deals bonus damage.' },
        },
        {
          id: 'infinite',
          icon: 'axe',
          element: 'wind',
          ko: {
            name: '무한',
            description: '사냥이 ON/OFF 토글이 되며, 적 공격 시 재사용 대기시간이 적용됩니다.',
          },
          en: {
            name: 'Infinite',
            description: 'Hunting becomes a toggle; cooldown applies when you hit enemies.',
          },
        },
        {
          id: 'summaryExecution',
          icon: 'axe',
          element: 'wind',
          ko: {
            name: '즉결 처형',
            description: '처치 시 사냥·참격·두개골 분쇄 재사용 대기시간이 초기화됩니다(사냥 자동 활성).',
          },
          en: {
            name: 'Summary Execution',
            description: 'On kill, resets Hunting, Daze, and Skull Crusher (Hunting auto-activates).',
          },
        },
        {
          id: 'survivor',
          icon: 'recovery',
          element: 'wind',
          passive: true,
          ko: { name: '생존법', description: '모든 해로운 효과에 면역이 됩니다.' },
          en: { name: 'Survivor', description: 'Immune to all negative effects.' },
        },
        {
          id: 'hardCore',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '산전수전',
            description: '공격력·방어력 증가, 갈망 대기시간 감소, 암습이 항상 발동합니다.',
          },
          en: {
            name: 'Hard Core',
            description: 'More damage and armor; shorter Rage cooldown; back attack always procs.',
          },
        },
        {
          id: 'execute',
          icon: 'axe',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '집행',
            input: '웅크리기 + 숫자키 5',
            description: '집행의 일격. 참격·두개골 분쇄 재사용 대기시간이 초기화됩니다.',
          },
          en: {
            name: 'Execute',
            input: 'Sneak + hotkey 5',
            description: 'The execution strike. Resets Daze and Skull Crusher cooldown.',
          },
        },
      ],
    },
  ],
};
