import type { ClassDetailDef } from './types';

export const archerDetail: ClassDetailDef = {
  id: 'archer',
  order: 2,
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'archer.png', en: { title: 'Hunter' }, ko: { title: '사냥꾼' } },
      { tier: 1, portraitFile: 'archer-limit1.png', en: { title: 'Jaeger' }, ko: { title: '사냥귀' } },
      { tier: 2, portraitFile: 'archer-limit2.png', en: { title: 'Executor' }, ko: { title: '집행자' } },
    ],
  },
  story: {
    ko: [
      '멀리서 적을 꿰뚫는 궁수입니다. 화살 한 자루가 바람을 가르며 날아가는 궤적을 읽는 법을 오래도록 연마했습니다.',
      '전장에서는 이동과 사격이 하나의 호흡이 됩니다. 화살을 뿌리고, 당기고, 다시 쏘는 리듬 속에서 궁술은 점점 빠르고 정확해집니다.',
      '숙련도가 쌓이면 이름은 사냥귀, 집행자로 바뀌지만 본질은 같습니다. 어디에 있든 화살로 전장을 지배하는 자입니다.',
    ],
    en: [
      'An archer who pierces foes from afar. They spent years learning to read the arc of every arrow as it cuts the wind.',
      'On the battlefield, movement and shooting share one breath. Spreading, drawing, and firing again—the rhythm grows faster and more precise.',
      'As proficiency rises, titles may change to Jaeger and Executor, but the essence stays the same: to rule the fight with arrows from any distance.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'spreadingArrows',
          icon: 'arrows-scatter',
          element: 'earth',
          ko: {
            name: '화살뿌리기',
            input: '좌클릭',
            description:
              '이동 방향으로 돌진하며 공격합니다. 연속 사용 시 같은 방향으로 계속 이동합니다.',
          },
          en: {
            name: 'Spreading Arrows',
            input: 'Left-click',
            description: 'Dashes in your movement direction. Repeated use continues in the same direction.',
          },
          masterLevel: 1,
        },
        {
          id: 'retrieve',
          icon: 'arrow',
          element: 'earth',
          ko: {
            name: '회수',
            input: '손 바꾸기',
            description: '적에게 박힌 화살 수에 비례해 피해가 증가합니다.',
          },
          en: {
            name: 'Retrieve',
            input: 'Swap hands',
            description: 'Damage scales with the number of arrows stuck in the target.',
          },
          masterLevel: 1,
        },
        {
          id: 'rapidFire',
          icon: 'bow',
          element: 'earth',
          ko: {
            name: '속사',
            input: '웅크리기 + 손 바꾸기',
            description: '짧은 시간에 다발 화살을 쏩니다. 스킬 레벨에 따라 피해량이 증가합니다.',
          },
          en: {
            name: 'Rapid Fire',
            input: 'Sneak + swap hands',
            description: 'Fires a burst of arrows. Damage scales with skill level.',
          },
          masterLevel: 50,
        },
        {
          id: 'multiShot',
          icon: 'bow',
          element: 'earth',
          ko: {
            name: '다중사격',
            input: '웅크리기 + 발사',
            description: '웅크린 상태에서 여러 발을 연속 사격합니다.',
          },
          en: {
            name: 'Multi Shot',
            input: 'Sneak + shoot',
            description: 'Fires multiple shots while sneaking.',
          },
          masterLevel: 50,
        },
        {
          id: 'hookAndShot',
          icon: 'hook-shot',
          element: 'earth',
          ko: {
            name: '훅앤샷',
            input: '웅크리기 + 근접 공격',
            description:
              '대상을 약 2초간 붙잡습니다. 발사하거나 시간이 지나면 놓아줍니다.',
          },
          en: {
            name: 'Hook and Shot',
            input: 'Sneak + melee hit',
            description: 'Grabs a target for about 2 seconds; releases on shot or timeout.',
          },
          masterLevel: 1,
        },
        {
          id: 'tripleShot',
          icon: 'bow',
          element: 'earth',
          ko: {
            name: '트리플샷',
            description: '한 번에 화살 세 발을 쏩니다. 첫 화살이 가장 강하고 나머지는 비례 피해를 줍니다.',
          },
          en: {
            name: 'Triple Shot',
            description: 'Fires three arrows at once; the first hits hardest, follow-ups scale from it.',
          },
          masterLevel: 50,
        },
        {
          id: 'archery',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '궁술',
            description:
              '공격력이 증가합니다. 활시위를 당기는 동안 잠시 피해를 버팁니다.',
            extra: ['숙련도가 오를수록 버티기 효과가 강해집니다.'],
          },
          en: {
            name: 'Archery',
            description: 'Increases damage and briefly endures all damage while drawing the bow.',
            extra: ['Endurance improves with proficiency.'],
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'agility',
          icon: 'bow',
          element: 'earth',
          passive: true,
          ko: { name: '민첩함', description: '사용 횟수가 늘고, 화살이 적중할 때마다 1회 충전됩니다.' },
          en: { name: 'Agility', description: 'More uses; hitting with arrows restores one charge.' },
        },
        {
          id: 'wound',
          icon: 'slash',
          element: 'earth',
          ko: { name: '상처', description: '한 번 더 공격하고 적을 잠시 제압합니다.' },
          en: { name: 'Wound', description: 'Strikes again and briefly suppresses the target.' },
        },
        {
          id: 'spinShots',
          icon: 'spectral-arrow',
          element: 'earth',
          followUp: true,
          ko: {
            name: '나선화살',
            input: '같은 스킬 재입력',
            description: '속사 후 재입력 시 나선화살을 쏩니다. 피해량은 속사 레벨에 비례합니다.',
          },
          en: {
            name: 'Spin Shots',
            input: 'Use the same skill again',
            description: 'Follow-up to Rapid Fire. Damage scales with Rapid Fire level.',
          },
        },
        {
          id: 'scatterShot',
          icon: 'target-shot',
          element: 'earth',
          ko: { name: '흩뿌리기', description: '다중사격 발사 횟수가 3회로 증가합니다.' },
          en: { name: 'Scatter Shot', description: 'Multi Shot fires three times.' },
        },
        {
          id: 'pitch',
          icon: 'spike',
          element: 'earth',
          ko: { name: '꽂기', description: '명중한 적을 잠시 기절시킵니다.' },
          en: { name: 'Pitch', description: 'Briefly stuns hit enemies.' },
        },
        {
          id: 'quadraShot',
          icon: 'bow',
          element: 'earth',
          ko: { name: '쿼드라샷', description: '발사 횟수·연사력·피해량이 증가합니다.' },
          en: { name: 'Quadra Shot', description: 'More shots, faster rate, and higher damage.' },
        },
        {
          id: 'combat',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '전투술',
            description:
              '피해와 버티기 시간이 증가합니다. 화살뿌리기 직후 활시위를 당기면 즉시 사격합니다.',
          },
          en: {
            name: 'Combat',
            description:
              'More damage and longer endure. Drawing right after Spreading Arrows fires instantly.',
          },
        },
        {
          id: 'crazyArrows',
          icon: 'storm',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '광란의화살',
            input: '웅크리기 + 숫자키 4',
            description: '광범위에 화살을 쏟아붓습니다. 피해량은 경험치 레벨에 영향을 받습니다.',
          },
          en: {
            name: 'Crazy Arrows',
            input: 'Sneak + hotkey 4',
            description: 'Floods a wide area with arrows. Damage scales with your XP level.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'blindside',
          icon: 'slash',
          element: 'earth',
          ko: { name: '약점공격', description: '주변 적을 기절시킨 뒤 한 번 더 공격합니다.' },
          en: { name: 'Blindside', description: 'Stuns nearby foes, then attacks again.' },
        },
        {
          id: 'arcShot',
          icon: 'spectral-arrow',
          element: 'earth',
          followUp: true,
          ko: {
            name: '곡사',
            input: '같은 스킬 재입력',
            description: '속사 후 재입력 시 곡사 화살을 쏩니다. 피해량은 속사 레벨에 비례합니다.',
          },
          en: {
            name: 'Arc Shot',
            input: 'Use the same skill again',
            description: 'Follow-up to Rapid Fire. Damage scales with Rapid Fire level.',
          },
        },
        {
          id: 'sevenShots',
          icon: 'bow',
          element: 'earth',
          ko: { name: '세븐즈샷', description: '한 번에 화살 일곱 발을 발사합니다.' },
          en: { name: '7 Shots', description: 'Fires seven arrows at once.' },
        },
        {
          id: 'advancedTactics',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '백전불태',
            description:
              '공격력·방어력이 증가하고 광란의화살 대기시간이 줄어듭니다. 위더 보호막·엔더맨도 공격 가능합니다.',
          },
          en: {
            name: 'Advanced Tactics',
            description:
              'More damage and armor, shorter Crazy Arrows cooldown; can hit Wither barriers and Endermen.',
          },
        },
        {
          id: 'arrowArts',
          icon: 'mind-sword',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '화살의춤',
            input: '웅크리기 + 숫자키 5',
            description: '화살의 춤으로 막대한 피해를 줍니다. 피해량은 경험치 레벨에 영향을 받습니다.',
          },
          en: {
            name: 'Arrow Arts',
            input: 'Sneak + hotkey 5',
            description: 'A devastating arrow dance. Damage scales with your XP level.',
          },
        },
      ],
    },
  ],
};
