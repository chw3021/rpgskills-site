import type { ClassDetailDef } from './types';

export const illusionistDetail: ClassDetailDef = {
  id: 'illusionist',
  order: 12,
  element: { en: 'Wind', ko: '바람' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'illusionist.png', en: { title: 'Illusionist' }, ko: { title: '환술사' } },
      { tier: 1, portraitFile: 'illusionist-limit1.png', en: { title: 'Vanisher' }, ko: { title: '소멸령' } },
      { tier: 2, portraitFile: 'illusionist-limit2.png', en: { title: 'Phantom' }, ko: { title: '환영귀' } },
    ],
  },
  story: {
    ko: [
      '완드와 잭오랜턴, 허수아비로 전장을 속이는 환술사입니다. 바꿔치기·속임수·왜곡으로 순간 폭딜을 내고, 역설로 쿨다운과 상태를 되돌립니다.',
      '투명·은신 중 깜짝쇼로 공격력이 오릅니다. 허수아비는 도발·위치변경·기믹 폭발의 중심입니다.',
      '소멸령은 공허의 환상으로 적을 공포에 빠뜨리고, 환영귀는 피날레로 쇼타임을 펼칩니다. 환상과 현실의 경계에서 전장을 지배합니다.',
    ],
    en: [
      'An illusion mage who baits the field with wands, jack-o-lanterns, and decoy dolls. Switch, Trick, and Distortion burst in an instant; Paradox resets cooldowns and cleanses debuffs.',
      'Surprise raises damage while invisible. Fake dolls taunt, swap places, and fuel gimmick explosions.',
      'Vanisher terrifies foes with the void illusion; Phantom crowns the act with Finale showtime. They rule the fight where mirage and reality blur.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'switch',
          icon: 'wand',
          element: 'wind',
          ko: {
            name: '바꿔치기',
            input: '근접 공격 + 웅크리기',
            description: '적과 위치를 바꿉니다.',
          },
          en: {
            name: 'Switch',
            input: 'Melee attack + sneak',
            description: 'Swaps positions with the target.',
          },
          masterLevel: 1,
        },
        {
          id: 'trick',
          icon: 'wind',
          element: 'wind',
          ko: { name: '속임수', input: '점프 + 좌클릭', description: '속임수 공격을 사용합니다.' },
          en: { name: 'Trick', input: 'Jump + left-click', description: 'Performs a trick strike.' },
          masterLevel: 50,
        },
        {
          id: 'jackoLantern',
          icon: 'flame',
          element: 'wind',
          ko: { name: '잭오랜턴', input: '손 바꾸기', description: '잭오랜턴 마법을 쏩니다.' },
          en: { name: 'Jack-o-Lantern', input: 'Swap hands', description: 'Fires jack-o-lantern magic.' },
          masterLevel: 50,
        },
        {
          id: 'distortion',
          icon: 'wind-slash',
          element: 'wind',
          ko: { name: '왜곡', input: '우클릭', description: '왜곡 공격을 사용합니다.' },
          en: { name: 'Distortion', input: 'Right-click', description: 'Unleashes a distortion attack.' },
          masterLevel: 50,
        },
        {
          id: 'paradox',
          icon: 'cycle',
          element: 'wind',
          ko: {
            name: '역설',
            input: '웅크리기 + 우클릭',
            description:
              '궁극기를 제외한 모든 기술의 재사용 대기시간을 초기화합니다. 해로운 효과를 제거하고 체력과 허기를 모두 회복합니다.',
          },
          en: {
            name: 'Paradox',
            input: 'Sneak + right-click',
            description:
              'Resets cooldowns for all skills except ultimates. Removes negative effects and fully restores HP and hunger.',
          },
          masterLevel: 1,
        },
        {
          id: 'fakeDoll',
          icon: 'target-shot',
          element: 'wind',
          ko: {
            name: '허수아비',
            input: '손 바꾸기 + 웅크리기',
            description:
              '허수아비가 주변 적을 도발합니다. 0.5초 무적, 5초 은신이 됩니다.',
          },
          en: {
            name: 'Fake Doll',
            input: 'Swap hands + sneak',
            description:
              'A decoy taunts nearby enemies. Grants 0.5s invulnerability and 5s invisibility.',
          },
          masterLevel: 1,
        },
        {
          id: 'surprise',
          icon: 'stealth',
          element: 'wind',
          passive: true,
          ko: {
            name: '깜짝쇼',
            description: '투명화 상태일 때 공격력이 증가합니다.',
          },
          en: {
            name: 'Surprise',
            description: 'Increases damage while invisible.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'confusion',
          icon: 'storm',
          element: 'wind',
          ko: { name: '혼란', description: '적중한 적을 짧게 제압합니다.' },
          en: { name: 'Confusion', description: 'Briefly locks down a hit enemy.' },
        },
        {
          id: 'encore',
          icon: 'wind',
          element: 'wind',
          followUp: true,
          ko: {
            name: '앙코르',
            input: '같은 스킬 재입력',
            description: '속임수를 한 번 더 사용합니다.',
          },
          en: {
            name: 'Encore',
            input: 'Use the same skill again',
            description: 'Repeats Trick.',
          },
        },
        {
          id: 'magnify',
          icon: 'wand',
          element: 'wind',
          followUp: true,
          ko: {
            name: '확대',
            input: '같은 스킬 재입력',
            description: '잭오랜턴을 한 번 더 사용합니다.',
          },
          en: {
            name: 'Magnify',
            input: 'Use the same skill again',
            description: 'Repeats Jack-o-Lantern.',
          },
        },
        {
          id: 'shuffle',
          icon: 'wind-slash',
          element: 'wind',
          followUp: true,
          ko: {
            name: '뒤섞기',
            input: '같은 스킬 재입력',
            description: '왜곡을 한 번 더 사용합니다.',
          },
          en: {
            name: 'Shuffle',
            input: 'Use the same skill again',
            description: 'Repeats Distortion.',
          },
        },
        {
          id: 'gimmick',
          icon: 'bomb',
          element: 'wind',
          ko: {
            name: '기믹',
            input: '재입력',
            description: '남아 있는 허수아비를 폭발시킵니다.',
          },
          en: {
            name: 'Gimmick',
            input: 'Use again',
            description: 'Detonates remaining fake dolls.',
          },
        },
        {
          id: 'change',
          icon: 'rush',
          element: 'wind',
          followUp: true,
          ko: {
            name: '위치변경',
            input: '같은 스킬 재입력',
            description: '허수아비와 자신의 위치를 바꿉니다. 0.5초 무적이 됩니다.',
          },
          en: {
            name: 'Change',
            input: 'Use the same skill again',
            description: 'Swaps places with your fake doll. Grants 0.5s invulnerability.',
          },
        },
        {
          id: 'manipulation',
          icon: 'book',
          element: 'wind',
          passive: true,
          ko: {
            name: '조작',
            description: '공격력이 증가합니다. 스킬 사용 시 0.3초 무적이 됩니다.',
          },
          en: {
            name: 'Manipulation',
            description: 'Increases damage. Grants 0.3s invulnerability after using any skill.',
          },
        },
        {
          id: 'theVoid',
          icon: 'soul',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '공허의 환상',
            input: '웅크리기 + 숫자키 4',
            description: '공허의 환상으로 적을 압도합니다.',
          },
          en: {
            name: 'The Void',
            input: 'Sneak + hotkey 4',
            description: 'Overwhelms foes with a void illusion.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'misdirection',
          icon: 'target-shot',
          element: 'wind',
          ko: { name: '착란', description: '주변 적이 대상을 공격하게 만듭니다.' },
          en: { name: 'Misdirection', description: 'Forces nearby enemies to attack the marked target.' },
        },
        {
          id: 'penetration',
          icon: 'stab',
          element: 'wind',
          followUp: true,
          ko: {
            name: '관통',
            input: '같은 스킬 재입력',
            description: '속임수 연계 관통 공격입니다.',
          },
          en: {
            name: 'Penetration',
            input: 'Use the same skill again',
            description: 'Piercing follow-up to Trick.',
          },
        },
        {
          id: 'juggling',
          icon: 'dance',
          element: 'wind',
          followUp: true,
          ko: {
            name: '곡예',
            input: '같은 스킬 재입력',
            description: '잭오랜턴 연계 곡예 공격입니다.',
          },
          en: {
            name: 'Juggling',
            input: 'Use the same skill again',
            description: 'Juggling follow-up to Jack-o-Lantern.',
          },
        },
        {
          id: 'mindControl',
          icon: 'mind-sword',
          element: 'wind',
          followUp: true,
          ko: {
            name: '세뇌',
            input: '같은 스킬 재입력',
            description: '왜곡 연계 세뇌 공격입니다.',
          },
          en: {
            name: 'Mind Control',
            input: 'Use the same skill again',
            description: 'Mind-control follow-up to Distortion.',
          },
        },
        {
          id: 'hypnosis',
          icon: 'book',
          element: 'wind',
          ko: {
            name: '최면',
            description:
              '허수아비 주변 적을 재웁니다. 잠든 적은 공격 시 더 큰 피해를 입고 깨어납니다. 1초 무적이 됩니다.',
          },
          en: {
            name: 'Hypnosis',
            description:
              'Puts enemies near the doll to sleep. Sleeping foes take extra damage when hit and wake up. Grants 1s invulnerability.',
          },
        },
        {
          id: 'esp',
          icon: 'steady',
          element: 'wind',
          passive: true,
          ko: {
            name: '초감각적 지각',
            description:
              '공격력과 방어력이 증가하고 공허의 환상 재사용 대기시간이 감소합니다. 깜짝쇼는 은신이 아니어도 발동합니다.',
          },
          en: {
            name: 'ESP',
            description:
              'More damage and armor; shorter The Void cooldown. Surprise always activates, even without invisibility.',
          },
        },
        {
          id: 'finale',
          icon: 'aura',
          element: 'wind',
          ultimate: true,
          ko: {
            name: '피날레',
            input: '웅크리기 + 숫자키 5',
            description:
              '역설 재사용 대기시간이 80% 감소합니다. 기술 사용 시 피날레가 중첩되며 8중첩 시 추가 고정 피해를 입힙니다. 10초 지속.',
          },
          en: {
            name: 'Finale',
            input: 'Sneak + hotkey 5',
            description:
              'Reduces Paradox cooldown by 80%. Stacks Finale on skill use; at 8 stacks, deals bonus flat damage for 10 seconds.',
          },
        },
      ],
    },
  ],
};
