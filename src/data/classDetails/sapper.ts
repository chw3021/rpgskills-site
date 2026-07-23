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
      '삽으로 야전을 다지는 공병입니다. 투석기·스프링갈드·그리스불 방사기·비등유로 적을 억제하고, TNT 돌격과 야전공성으로 화력을 키웁니다.',
      '그리스불은 지속 분사 방사기를 설치하며, 전술철수 시 다른 공성물과 함께 폭파됩니다. 비등유는 적을 끌어당겨 집중 포화를 유도합니다.',
      '공성기장으로 승진하며 추침찍기·노선강철·잔화씻기·기름함정 연계와 포격난류 대포가 열리고, 난격으로 포격 거점을 설치합니다.',
      '포성장은 파쇄포격·철갑관통·선인장 돌격·잔화편조로 연계를 완성하고, 포대열로 전장을 포격 구역으로 재편합니다.',
    ],
    en: [
      'A sapper who fortifies the field with a shovel. Catapult, springald, Greek-fire projectors, and boiling oil suppress foes while TNT Rush and Fieldworks raise pressure.',
      'Greek Fire deploys a continuous flamethrower that detonates with Tactical Withdrawal. Boiling oil pulls enemies inward for focused bombardment.',
      'Promotion to Siege Warden unlocks brace, spring rip, Greek wash, net traps, and a shell cannon before Bombardment plants a fire battery.',
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
              '전방에 투석기를 설치해 돌탄 3발을 포물선으로 발사합니다. 돌은 잠시 후 자동 폭발하며, 적 근처에서도 즉시 터집니다.',
            extra: ['착탄 시 광역 피해와 제압을 가합니다.', '투석기는 가장 가까운 적 방향으로 회전합니다.'],
          },
          en: {
            name: 'Catapult',
            input: 'Right-click',
            description:
              'Deploys a catapult that lobs 3 stone shots. Stones auto-detonate shortly after launch or near enemies.',
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
              '전방에 그리스불 방사기를 설치해 잠시 지속 분사합니다. 근처 적을 조준하며, 전술철수 시 폭파·철거됩니다.',
            extra: ['비등유 웅덩이 근처면 화염 지대를 점화합니다.'],
          },
          en: {
            name: 'Greek Fire',
            input: 'Swap hands',
            description:
              'Deploys a Greek-fire projector that sprays for a short time, auto-aims nearby foes, and detonates with Tactical Withdrawal.',
            extra: ['Ignites nearby boiling-oil pools into a fire zone.'],
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
              '전방 가마에서 검은 기름을 쏟아 광역 피해와 강한 제압을 가합니다. 웅덩이는 잠시 유지되며, 적을 중심으로 끌어당깁니다.',
            extra: ['그리스불로 점화 가능합니다.'],
          },
          en: {
            name: 'Boiling Oil',
            input: 'Sneak + swap hands',
            description:
              'Pours black oil from a forward vat for area damage and heavy suppression. The pool lingers and pulls enemies toward its center.',
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
              '설치한 공성물을 폭파·철거하고 주변에 피해를 준 뒤 전방으로 도약합니다. 궁극기 소환물은 제외됩니다. 숙련도에 따라 폭발이 강해지며, 숙련 2에서는 설치물이 본인 위치로 순간이동한 뒤 폭발합니다.',
          },
          en: {
            name: 'Tactical Withdrawal',
            input: 'Left-click',
            description:
              'Detonates each deployable once, damages nearby foes, then leaps forward. Ultimate summons are excluded. Proficiency raises blast power; at proficiency 2, structures teleport to you before detonating.',
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
            description: '전방 짧은 직선 파쇄.',
          },
          en: {
            name: 'Catapult Brace',
            input: 'Right-click after Catapult ends',
            description: 'Short forward smash line.',
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
            description: '전방 직선 피해.',
          },
          en: {
            name: 'Spring Rip',
            input: 'Sneak + right-click after Springald ends',
            description: 'Forward line damage.',
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
            description: '기존 방사기가 좌우로 쓸며 과열 분사합니다. 방사기가 없으면 새로 설치한 뒤 과열합니다.',
          },
          en: {
            name: 'Greek Wash',
            input: 'Swap hands after Greek Fire',
            description: 'Overcharges your projector into a left-right sweeping wash. Redeploys one if missing.',
          },
        },
        {
          id: 'netTrap',
          icon: 'spike',
          element: 'earth',
          guiColumn: 12,
          followUp: true,
          chainOf: 'boilingOil',
          ko: {
            name: '그물함정',
            input: '비등유 직후 웅크리기 + 손 바꾸기',
            description:
              '전방 바닥에 그물 함정을 깔아 적을 붙잡고 지속 피해·제압합니다. 전술철수 시 함정이 폭발·철거됩니다.',
          },
          en: {
            name: 'Net Trap',
            input: 'Sneak + swap hands after Boiling Oil',
            description:
              'Deploys a floor net ahead that holds foes and deals sustained damage. Detonates with Tactical Withdrawal.',
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
              '전방에 포격 대포를 설치해 전방 적을 우선 조준하며 지속 포격합니다. 전술철수 시 대포가 폭발·철거됩니다.',
          },
          en: {
            name: 'Shell Drift',
            input: 'Sneak + left-click after TNT Rush',
            description:
              'Deploys a shell cannon that prioritizes forward foes for sustained bombardment. Detonates with Tactical Withdrawal.',
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
              '거대 포탄을 떨어뜨려 착탄 지점에 포격 거점을 설치합니다. 거점은 잠시 동안 주변 적에게 자동으로 포탄을 발사합니다.',
            extra: ['전술철수로 즉시 폭파 가능합니다.', '좁은 통로나 거점 방어에 효과적입니다.'],
          },
          en: {
            name: 'Bombardment',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Drops a massive shell that becomes a bombardment battery. The battery auto-fires shells at nearby enemies for a short time.',
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
            description: '방사기에서 이중 나선 화염이 전방으로 뻗어나갑니다. 방사기가 없으면 설치 후 발사합니다.',
          },
          en: {
            name: 'Blaze Weave',
            input: 'Swap hands after Greek Wash',
            description: 'Fires dual spiral flames from the projector. Redeploys one if missing.',
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
            description: '선인장 기둥을 굴려 적에게 피해·제압합니다.',
          },
          en: {
            name: 'Cactus Rush',
            input: 'Sneak + swap hands after Boiling Oil',
            description:
              'Rolls a cactus column at foes for damage and suppression.',
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
            description: '설치물이 본인 위치로 순간이동한 뒤 폭발합니다. 폭발 범위·피해가 더욱 증가합니다.',
          },
          en: {
            name: 'Tactical Withdrawal Boost II',
            description: 'Structures teleport to you before detonating. Further increases blast radius and damage.',
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
              '주변을 포격 구역으로 만들고 여러 방향에서 포탄을 투하합니다. 구역 내 적은 이동속도 감소·약화·발광 효과를 받습니다.',
            extra: ['구역 내 적은 발광 효과로 표시됩니다.', '아군의 집중 공격 기회를 만듭니다.'],
          },
          en: {
            name: 'Grand Battery',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Turns the area into a bombardment zone, raining shells from multiple directions. Enemies inside are slowed, weakened, and glowing.',
            extra: ['Enemies glow for visibility.', 'Creates an opening for allied assaults.'],
          },
        },
      ],
    },
  ],
};
