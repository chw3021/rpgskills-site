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
      '삽으로 야전을 다지는 공병입니다. 투석기·스프링갈드·그리스불·비등유로 적을 억제하고, 야전공성으로 근접 화력을 키웁니다.',
      '공성기장으로 승진하며 추침찍기·노선강철·잔화씻기·유조긁기 연계와 TNT·선인장 돌격이 열리고, 난격으로 거대 포탄을 투하합니다.',
      '포성장은 함정봉인·포격난류·노출장약으로 함정과 포탄술을 완성하고, 포대열로 전장을 쓸어 버립니다. 계급이 오를수록 군기와 화력이 거대해집니다.',
    ],
    en: [
      'A sapper who fortifies the field with a shovel. Catapult, springald, Greek fire, and boiling oil suppress foes while Fieldworks raises melee damage.',
      'Promotion to Siege Warden unlocks brace, spring rip, Greek wash, oil scour, and TNT/cactus rushes before Bombardment drops a massive shell.',
      'The Battery Captain masters Pit Seal, Shell Drift, and Grand Expose before Grand Battery clears the field. Rank rises with banners, siege lines, and heavier ordnance.',
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
          ko: {
            name: '그리스불',
            input: '손 바꾸기',
            description: '전방 부채꼴로 화염을 분사해 피해·제압합니다.',
          },
          en: {
            name: 'Greek Fire',
            input: 'Swap hands',
            description: 'Sprays a cone of clinging fire for damage and suppression.',
          },
          masterLevel: 50,
        },
        {
          id: 'boilingOil',
          icon: 'storm',
          element: 'earth',
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
          id: 'fieldworks',
          icon: 'book',
          element: 'earth',
          passive: true,
          guiColumn: 7,
          ko: {
            name: '야전공성',
            description: '삽으로 근접 공격 시 피해가 증가합니다.',
          },
          en: {
            name: 'Fieldworks',
            description: 'Increases melee damage with shovels.',
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
          followUp: true,
          chainOf: 'catapult',
          ko: {
            name: '추침찍기',
            input: '투석기 설치 종료 직후 비웅크리기 + 좌클릭',
            description: '전방 짧은 직선 파쇄. 피해량은 투석기 레벨에 비례합니다.',
          },
          en: {
            name: 'Catapult Brace',
            input: 'No sneak + left-click after Catapult ends',
            description: 'Short forward smash line. Damage scales with Catapult level.',
          },
        },
        {
          id: 'springRip',
          icon: 'crossbow',
          element: 'earth',
          followUp: true,
          chainOf: 'springald',
          ko: {
            name: '노선강철',
            input: '스프링갈드 종료 직후 비웅크리기 + 우클릭',
            description: '전방 직선 피해. 피해량은 스프링갈드 레벨에 비례합니다.',
          },
          en: {
            name: 'Spring Rip',
            input: 'No sneak + right-click after Springald ends',
            description: 'Forward line damage. Damage scales with Springald level.',
          },
        },
        {
          id: 'greekWash',
          icon: 'flame',
          element: 'fire',
          followUp: true,
          chainOf: 'greekFire',
          ko: {
            name: '잔화씻기',
            input: '그리스불 직후 웅크리기 + 좌클릭',
            description: '좁은 부채꼴 추가 피해. 피해량은 그리스불 레벨에 비례합니다.',
          },
          en: {
            name: 'Greek Wash',
            input: 'Sneak + left-click after Greek Fire',
            description: 'Narrow cone follow-up. Damage scales with Greek Fire level.',
          },
        },
        {
          id: 'oilScour',
          icon: 'storm',
          element: 'earth',
          followUp: true,
          chainOf: 'boilingOil',
          ko: {
            name: '유조긁기',
            input: '비등유 직후 웅크리기 + 우클릭',
            description:
              '전방 직선 피해. 유조 창이 있을 때 스프링갈드 대신 발동합니다. 피해량은 비등유 레벨에 비례합니다.',
          },
          en: {
            name: 'Oil Scour',
            input: 'Sneak + right-click after Boiling Oil',
            description:
              'Forward line damage. Takes priority over Springald when the oil window is open. Damage scales with Boiling Oil level.',
          },
        },
        {
          id: 'tntRush',
          icon: 'bomb',
          element: 'earth',
          ko: {
            name: 'TNT 돌격',
            input: '웅크리기 + 숫자키 6 (전투 모드)',
            description: 'TNT 수레를 적에게 돌진시켜 피해·제압합니다.',
          },
          en: {
            name: 'TNT Rush',
            input: 'Sneak + hotkey 6 (combat mode)',
            description: 'Rushes a TNT minecart at foes for damage and suppression.',
          },
        },
        {
          id: 'cactusRush',
          icon: 'spike',
          element: 'earth',
          ko: {
            name: '선인장 돌격',
            input: '웅크리기 + 숫자키 7 (전투 모드)',
            description: '선인장 기둥을 굴려 적에게 피해·제압합니다. 피해량은 비등유 레벨에 비례합니다.',
          },
          en: {
            name: 'Cactus Rush',
            input: 'Sneak + hotkey 7 (combat mode)',
            description: 'Rolls a cactus column at foes for damage and suppression. Damage scales with Boiling Oil level.',
          },
        },
        {
          id: 'bombardment',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
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
          id: 'shellDrift',
          icon: 'bomb',
          element: 'earth',
          followUp: true,
          chainOf: 'bombardment',
          ko: {
            name: '포격난류',
            input: '난격 직후 웅크리기 + 전투 숫자키 8',
            description: '전방 하향 포격선 피해를 줍니다.',
          },
          en: {
            name: 'Shell Drift',
            input: 'Sneak + combat hotkey 8 after Bombardment',
            description: 'Downward bombing line damage.',
          },
        },
        {
          id: 'blazeWeave',
          icon: 'flame',
          element: 'fire',
          followUp: true,
          chainOf: 'greekFire',
          ko: {
            name: '잔화편조',
            input: '잔화씻기 직후 웅크리기 + 전투 숫자키 2',
            description: '부채꼴 재점화. 피해량은 그리스불 레벨에 비례합니다.',
          },
          en: {
            name: 'Blaze Weave',
            input: 'Sneak + combat hotkey 2 after Greek Wash',
            description: 'Reignites a cone. Damage scales with Greek Fire level.',
          },
        },
        {
          id: 'pitSeal',
          icon: 'spike',
          element: 'earth',
          followUp: true,
          chainOf: 'boilingOil',
          ko: {
            name: '함정봉인',
            input: '유조긁기 직후 웅크리기 + 전투 숫자키 3',
            description: '주변 봉인 폭발. 피해량은 비등유 레벨에 비례합니다.',
          },
          en: {
            name: 'Pit Seal',
            input: 'Sneak + combat hotkey 3 after Oil Scour',
            description: 'Short-range seal burst. Damage scales with Boiling Oil level.',
          },
        },
        {
          id: 'grandExpose',
          icon: 'bomb',
          element: 'earth',
          followUp: true,
          chainOf: 'grandBattery',
          ko: {
            name: '노출장약',
            input: '포대열 연출 직후 웅크리기 + 전투 숫자키 7',
            description: '주변 장약 폭발 피해를 줍니다.',
          },
          en: {
            name: 'Grand Expose',
            input: 'Sneak + combat hotkey 7 after Grand Battery volley',
            description: 'Ring powder burst around you.',
          },
        },
        {
          id: 'grandBattery',
          icon: 'bomb',
          element: 'earth',
          ultimate: true,
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
