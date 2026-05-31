import type { ClassDetailDef } from './types';

export const sapperDetail: ClassDetailDef = {
  id: 'sapper',
  order: 24,
  element: { en: 'Earth & Flame', ko: '대지·화염' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'sapper.png', en: { title: 'Sapper' }, ko: { title: '공병' } },
      { tier: 1, portraitFile: 'sapper-limit1.png', en: { title: 'Siege Warden' }, ko: { title: '공성기장' } },
      { tier: 2, portraitFile: 'sapper-limit2.png', en: { title: 'Battery Captain' }, ko: { title: '포성장' } },
    ],
  },
  story: {
    ko: [
      '삽으로 야전을 다지는 공병입니다. 투석기·스프링갈드·그리스불·비등유로 적을 억제하고, TNT 돌격과 야전공성으로 화력을 키웁니다.',
      '비등유는 적을 중심으로 끌어당겨 설치물의 집중 포화를 유도합니다. 투석기는 적 근처에서 자동 폭발해 공중전·물속에서도 유효합니다.',
      '공성기장으로 승진하며 추침찍기·노선강철·잔화씻기·기름함정 연계와 포격난류 대포가 열리고, 난격으로 포격 거점을 설치합니다.',
      '포성장은 파쇄포격·철갑관통·선인장 돌격·잔화편조로 연계를 완성하고, 포대열로 전장을 포격 구역으로 재편합니다.',
    ],
    en: [
      'A sapper who fortifies the field with a shovel. Catapult, springald, Greek fire, and boiling oil suppress foes while TNT Rush and Fieldworks raise pressure.',
      'Boiling oil pulls enemies inward for focused bombardment. Catapult stones auto-detonate near foes, staying effective in air and water.',
      'Promotion to Siege Warden unlocks brace, spring rip, Greek wash, oil snares, and a shell cannon before Bombardment plants a fire battery.',
      'The Battery Captain masters Siege Barrage, Piercing Salvo, Cactus Rush, and Blaze Weave before Grand Battery reshapes the battlefield into a bombardment zone.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'catapult',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 0,
          ko: {
            name: '투석기',
            input: '우클릭',
            description:
              '전방에 투석기를 설치해 돌탄 3발을 포물선으로 발사합니다. 돌은 1초 후 자동 폭발하며, 적 근처에서도 즉시 터집니다.',
            extra: ['착탄 시 광역 피해와 제압을 가합니다.', '투석기는 가장 가까운 적 방향으로 회전합니다.'],
          },
          en: {
            name: 'Catapult',
            input: 'Right-click',
            description:
              'Deploys a catapult that lobs 3 stone shots. Stones auto-detonate after 1 second or near enemies.',
            extra: ['Deals area damage and suppression on impact.', 'Catapult rotates toward nearest enemy.'],
          },
          masterLevel: 50,
        },
        {
          id: 'springald',
          icon: 'crossbow',
          element: 'earth',
          guiColumn: 1,
          ko: {
            name: '스프링갈드',
            input: '웅크리기 + 우클릭',
            description: '전방에 석궁 거치대를 설치해 4발의 화살을 직선으로 관통 발사합니다. 화살은 근처 적을 자동 조준합니다.',
          },
          en: {
            name: 'Springald',
            input: 'Sneak + right-click',
            description: 'Deploys a springald that fires 4 bolts in a line. Bolts auto-aim toward nearby enemies.',
          },
          masterLevel: 50,
        },
        {
          id: 'greekFire',
          icon: 'flame',
          element: 'fire',
          guiColumn: 2,
          ko: {
            name: '그리스불',
            input: '손 바꾸기',
            description:
              '전방 부채꼴로 화염을 분사해 피해·제압합니다. 비등유 웅덩이 위에서 사용하면 화염 지대가 생깁니다.',
          },
          en: {
            name: 'Greek Fire',
            input: 'Swap hands',
            description:
              'Sprays a cone of clinging fire for damage and suppression. Ignites boiling-oil puddles into a fire zone.',
          },
          masterLevel: 50,
        },
        {
          id: 'boilingOil',
          icon: 'storm',
          element: 'earth',
          guiColumn: 3,
          ko: {
            name: '비등유',
            input: '웅크리기 + 손 바꾸기',
            description:
              '발밑에 끓는 기름을 쏟아 광역 피해와 강한 제압을 가합니다. 웅덩이는 8초간 유지되며, 적을 중심으로 끌어당깁니다.',
            extra: ['그리스불로 점화 가능합니다.'],
          },
          en: {
            name: 'Boiling Oil',
            input: 'Sneak + swap hands',
            description:
              'Pours boiling oil, dealing area damage and heavy suppression. The pool lasts 8 seconds and pulls enemies toward its center.',
            extra: ['Can ignite with Greek fire.'],
          },
          masterLevel: 50,
        },
        {
          id: 'tntRush',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 4,
          ko: {
            name: 'TNT 돌격',
            input: '웅크리기 + 좌클릭',
            description: 'TNT 수레를 적에게 돌진시켜 피해·제압합니다.',
          },
          en: {
            name: 'TNT Rush',
            input: 'Sneak + left-click',
            description: 'Rushes a TNT minecart at foes for damage and suppression.',
          },
          masterLevel: 50,
        },
        {
          id: 'tacticalWithdrawal',
          icon: 'rush',
          element: 'earth',
          guiColumn: 5,
          ko: {
            name: '전술철수',
            input: '좌클릭',
            description:
              '설치한 공성물을 모두 폭파·철거하고 주변에 피해를 준 뒤 전방으로 도약합니다. 숙련도에 따라 폭발 범위·피해가 증가합니다.',
          },
          en: {
            name: 'Tactical Withdrawal',
            input: 'Left-click',
            description:
              'Detonates and clears all deployables, damages nearby foes, then leaps forward. Blast radius and damage scale with proficiency.',
          },
          masterLevel: 1,
        },
        {
          id: 'fieldworks',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '야전공성',
            description: '공격력이 증가합니다. 삽으로 근접 공격 시 피해가 증가합니다.',
          },
          en: {
            name: 'Fieldworks',
            description: 'Increases damage. Also boosts melee damage with shovels.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'catapultBrace',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 9,
          followUp: true,
          chainOf: 'catapult',
          ko: {
            name: '추침찍기',
            input: '투석기 설치 종료 직후 우클릭',
            description: '전방 짧은 직선 파쇄. 피해량은 투석기 레벨에 비례합니다.',
          },
          en: {
            name: 'Catapult Brace',
            input: 'Right-click after Catapult ends',
            description: 'Short forward smash line. Damage scales with Catapult level.',
          },
        },
        {
          id: 'springRip',
          icon: 'crossbow',
          element: 'earth',
          guiColumn: 10,
          followUp: true,
          chainOf: 'springald',
          ko: {
            name: '노선강철',
            input: '스프링갈드 종료 직후 웅크리기 + 우클릭',
            description: '전방 직선 피해. 피해량은 스프링갈드 레벨에 비례합니다.',
          },
          en: {
            name: 'Spring Rip',
            input: 'Sneak + right-click after Springald ends',
            description: 'Forward line damage. Damage scales with Springald level.',
          },
        },
        {
          id: 'greekWash',
          icon: 'flame',
          element: 'fire',
          guiColumn: 11,
          followUp: true,
          chainOf: 'greekFire',
          ko: {
            name: '잔화씻기',
            input: '그리스불 직후 손 바꾸기',
            description: '좁은 부채꼴 추가 피해. 피해량은 그리스불 레벨에 비례합니다.',
          },
          en: {
            name: 'Greek Wash',
            input: 'Swap hands after Greek Fire',
            description: 'Narrow cone follow-up. Damage scales with Greek Fire level.',
          },
        },
        {
          id: 'oilSnare',
          icon: 'spike',
          element: 'earth',
          guiColumn: 12,
          followUp: true,
          chainOf: 'boilingOil',
          ko: {
            name: '기름함정',
            input: '비등유 직후 웅크리기 + 손 바꾸기',
            description:
              '전방에 기름 함정 3개를 설치해 지속 피해·제압합니다. 전술철수 시 함정이 폭발·철거됩니다. 피해량은 비등유 레벨에 비례합니다.',
          },
          en: {
            name: 'Oil Snare',
            input: 'Sneak + swap hands after Boiling Oil',
            description:
              'Deploys three oil traps ahead for sustained damage and suppression. Detonates with Tactical Withdrawal. Damage scales with Boiling Oil level.',
          },
        },
        {
          id: 'shellDrift',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 13,
          followUp: true,
          chainOf: 'tntRush',
          ko: {
            name: '포격난류',
            input: 'TNT 돌격 직후 웅크리기 + 좌클릭',
            description:
              '전방에 포격 대포를 설치해 지속 포격합니다. 피해량은 TNT 돌격 레벨에 비례합니다. 전술철수 시 대포가 폭발·철거됩니다.',
          },
          en: {
            name: 'Shell Drift',
            input: 'Sneak + left-click after TNT Rush',
            description:
              'Deploys a shell cannon for sustained bombardment. Damage scales with TNT Rush level. Detonates with Tactical Withdrawal.',
          },
        },
        {
          id: 'tacticalWithdrawalBoost1',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 14,
          ko: {
            name: '전술철수 강화',
            description: '전술철수 폭발 범위·피해가 증가합니다.',
          },
          en: {
            name: 'Tactical Withdrawal Boost',
            description: 'Increases Tactical Withdrawal blast radius and damage.',
          },
        },
        {
          id: 'fieldworksLimit1',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 16,
          ko: { name: '야전공성강화', description: '공격력이 증가합니다. 숙련 1 연계 기술이 해제됩니다.' },
          en: { name: 'Fieldworks Boost', description: 'Increases damage. Limit 1 combo follow-ups unlocked.' },
        },
        {
          id: 'bombardment',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
          guiColumn: 17,
          ko: {
            name: '난격',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '거대 포탄을 떨어뜨려 착탄 지점에 포격 거점을 설치합니다. 거점은 8초간 주변 적에게 자동으로 포탄을 발사합니다.',
            extra: ['전술철수로 즉시 폭파 가능합니다.', '좁은 통로나 거점 방어에 효과적입니다.'],
          },
          en: {
            name: 'Bombardment',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Drops a massive shell that becomes a bombardment battery. The battery auto-fires shells at nearby enemies for 8 seconds.',
            extra: ['Can be detonated with Tactical Withdrawal.', 'Effective for chokepoint defense.'],
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'siegeBarrage',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 9,
          followUp: true,
          chainOf: 'catapultBrace',
          ko: {
            name: '파쇄포격',
            input: '우클릭 (추침찍기 직후)',
            description:
              '추침찍기 직후 우클릭 시, 하늘에서 돌 파편 5발이 부채꼴로 떨어져 광역을 폭격합니다.',
            extra: ['적중 시 광역 피해와 제압을 가합니다.'],
          },
          en: {
            name: 'Siege Barrage',
            input: 'Right-click (after Catapult Brace)',
            description:
              'Right-click after Catapult Brace to rain 5 stone fragments in a spread, bombarding the area.',
            extra: ['Deals area damage and suppression on impact.'],
          },
        },
        {
          id: 'piercingSalvo',
          icon: 'crossbow',
          element: 'earth',
          guiColumn: 10,
          followUp: true,
          chainOf: 'springRip',
          ko: {
            name: '철갑관통',
            input: '웅크+우클릭 (노선강철 직후)',
            description: '노선강철 직후 웅크+우클릭 시, 초대형 볼트로 적을 관통하며 벽으로 밀어붙입니다.',
            extra: ['좁은 통로에서 사용하면 적을 벽에 꽂을 수 있습니다.'],
          },
          en: {
            name: 'Piercing Salvo',
            input: 'Sneak+right-click (after Spring Rip)',
            description:
              'Sneak+right-click after Spring Rip to fire a massive bolt that pierces and slams enemies into walls.',
            extra: ['Most effective in narrow corridors.'],
          },
        },
        {
          id: 'blazeWeave',
          icon: 'flame',
          element: 'fire',
          guiColumn: 20,
          followUp: true,
          chainOf: 'greekWash',
          ko: {
            name: '잔화편조',
            input: '잔화씻기 직후 손 바꾸기',
            description: '부채꼴 재점화. 피해량은 그리스불 레벨에 비례합니다.',
          },
          en: {
            name: 'Blaze Weave',
            input: 'Swap hands after Greek Wash',
            description: 'Reignites a cone. Damage scales with Greek Fire level.',
          },
        },
        {
          id: 'cactusRush',
          icon: 'spike',
          element: 'earth',
          guiColumn: 21,
          followUp: true,
          chainOf: 'boilingOil',
          ko: {
            name: '선인장 돌격',
            input: '비등유 직후 웅크리기 + 손 바꾸기',
            description: '선인장 기둥을 굴려 적에게 피해·제압합니다. 피해량은 비등유 레벨에 비례합니다.',
          },
          en: {
            name: 'Cactus Rush',
            input: 'Sneak + swap hands after Boiling Oil',
            description:
              'Rolls a cactus column at foes for damage and suppression. Damage scales with Boiling Oil level.',
          },
        },
        {
          id: 'tacticalWithdrawalBoost2',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 23,
          ko: {
            name: '전술철수 강화 II',
            description: '전술철수 폭발 범위·피해가 더욱 증가합니다.',
          },
          en: {
            name: 'Tactical Withdrawal Boost II',
            description: 'Further increases Tactical Withdrawal blast radius and damage.',
          },
        },
        {
          id: 'fieldworksLimit2',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 25,
          ko: {
            name: '포성 교리',
            description: '공격력이 증가합니다. 1차 돌파 궁극기의 대기시간이 절반으로 감소합니다.',
          },
          en: {
            name: 'Siege Doctrine',
            description: 'Increases damage. First limit-break ultimate cooldown is halved.',
          },
        },
        {
          id: 'grandBattery',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
          guiColumn: 26,
          ko: {
            name: '포대열',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '주변 12블록을 3초간 포격 구역으로 만들고 6방향에서 포탄을 투하합니다. 구역 내 적은 이동속도 감소·약화·발광 효과를 받습니다.',
            extra: ['구역 내 적은 발광 효과로 표시됩니다.', '아군의 집중 공격 기회를 만듭니다.'],
          },
          en: {
            name: 'Grand Battery',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Turns the 12-block area into a bombardment zone for 3 seconds, raining shells from 6 directions. Enemies inside are slowed, weakened, and glowing.',
            extra: ['Enemies glow for visibility.', 'Creates an opening for allied assaults.'],
          },
        },
      ],
    },
  ],
};
