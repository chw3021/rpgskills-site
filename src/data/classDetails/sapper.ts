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
      '삽으로 야전을 다지는 공병입니다. 투석기·스프링갈드·그리스불·비등유·전술철수로 적을 억제하고, TNT 돌격과 야전공성으로 화력을 키웁니다.',
      '공성기장으로 승진하며 추침찍기·노선강철·잔화씻기 연계와 포격난류가 열리고, 난격으로 거대 포탄을 투하합니다.',
      '포성장은 선인장 돌격·잔화편조·포성 교리로 포탄술을 완성하고, 포대열로 전장을 쓸어 버립니다. 비등유 위 그리스불은 화염 지대를 만듭니다.',
    ],
    en: [
      'A sapper who fortifies the field with a shovel. Catapult, springald, Greek fire, boiling oil, and tactical withdrawal suppress foes while TNT Rush and Fieldworks raise pressure.',
      'Promotion to Siege Warden unlocks brace, spring rip, Greek wash, and Shell Drift before Bombardment drops a massive shell.',
      'The Battery Captain masters Cactus Rush, Blaze Weave, and Siege Doctrine before Grand Battery clears the field. Greek fire on oil puddles leaves a burning zone.',
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
            description: '전방에 투석기를 설치해 돌탄을 날려 피해·제압합니다.',
          },
          en: {
            name: 'Catapult',
            input: 'Right-click',
            description: 'Deploys a catapult that lobs stone for damage and suppression.',
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
            description: '석궁 거치대를 설치해 짧은 연사를 합니다.',
          },
          en: {
            name: 'Springald',
            input: 'Sneak + right-click',
            description: 'Deploys a bolt-thrower for a short burst.',
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
            description: '발밑에 기름을 부어 광역 피해·강한 제압을 줍니다.',
          },
          en: {
            name: 'Boiling Oil',
            input: 'Sneak + swap hands',
            description: 'Pours oil around you for area damage and heavy slow.',
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
          id: 'shellDrift',
          icon: 'bomb',
          element: 'earth',
          guiColumn: 13,
          followUp: true,
          chainOf: 'tntRush',
          ko: {
            name: '포격난류',
            input: 'TNT 돌격 직후 웅크리기 + 좌클릭',
            description: '전방 하향 포격선 피해를 줍니다.',
          },
          en: {
            name: 'Shell Drift',
            input: 'Sneak + left-click after TNT Rush',
            description: 'Downward bombing line damage.',
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
            description: '거대 포탄을 낙하시킵니다. 2차 한계 돌파 시 재사용 대기가 감소합니다.',
          },
          en: {
            name: 'Bombardment',
            input: 'Sneak + hotkey 4 (combat mode)',
            description: 'Drops a massive shell. Cooldown is shorter at second limit break.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
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
            description: '주변에 연속 포탄을 낙하시킵니다.',
          },
          en: {
            name: 'Grand Battery',
            input: 'Sneak + hotkey 5 (combat mode)',
            description: 'Staggered shells fall around you.',
          },
        },
      ],
    },
  ],
};
