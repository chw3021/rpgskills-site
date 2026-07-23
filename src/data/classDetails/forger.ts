import type { ClassDetailDef } from './types';

export const forgerDetail: ClassDetailDef = {
  id: 'forger',
  order: 13,
  element: { en: 'Earth & Lightning', ko: '대지·번개' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'forger.png', en: { title: 'Forger' }, ko: { title: '무기공' } },
      { tier: 1, portraitFile: 'forger-limit1.png', en: { title: 'Artificer' }, ko: { title: '장인' } },
      { tier: 2, portraitFile: 'forger-limit2.png', en: { title: 'Creator' }, ko: { title: '창조자' } },
    ],
  },
  story: {
    ko: [
      '곡괭이를 매개로 화기를 바꿔 쓰는 최첨단 무기공입니다. TNT발사기·전자기관단총·천둥포·점착미사일·기관총으로 원거리 화력을 쏟아냅니다.',
      '개발로 공격력과 기관총 재장전이 빨라집니다. 충격파·과열로 연사와 순간 제압을 노립니다.',
      '장인은 용의숨결발사기로 드래곤 브레스를 쏟고, 창조자는 영혼절단기로 위성 광선과 전 무기 총포격을 펼칩니다. 대지와 번개로 전장을 연구소처럼 지배합니다.',
    ],
    en: [
      'A high-tech gunsmith who swaps firearms through the pickaxe. TNT launchers, rail SMGs, lightning cannons, sticky missiles, and machine guns pour ranged fire onto the field.',
      'Development raises damage and shortens machine-gun reloads. Shockwaves and overheat ramp burst and stun pressure.',
      'Artificer wields the dragon-breath launcher; Creator calls Soul Divider—orbital beams plus every weapon in a full barrage. Earth and lightning turn the battlefield into a lab of destruction.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'tntLauncher',
          icon: 'bomb',
          element: 'earth',
          ko: { name: 'TNT발사기', input: '손 바꾸기', description: 'TNT 로켓을 발사합니다.' },
          en: { name: 'TNT Launcher', input: 'Swap hands', description: 'Fires TNT rockets.' },
          masterLevel: 50,
        },
        {
          id: 'railSmg',
          icon: 'storm',
          element: 'lightning',
          ko: { name: '전자기관단총', input: '우클릭', description: '전자기 탄환을 연사합니다.' },
          en: { name: 'Rail SMG', input: 'Right-click', description: 'Sprays electromagnetic rounds.' },
          masterLevel: 50,
        },
        {
          id: 'shockwave',
          icon: 'storm',
          element: 'lightning',
          ko: { name: '충격파', input: '좌클릭', description: '충격파를 발사합니다.' },
          en: { name: 'Shockwave', input: 'Left-click', description: 'Fires a shockwave blast.' },
          masterLevel: 1,
        },
        {
          id: 'lightningCannon',
          icon: 'wand',
          element: 'lightning',
          ko: { name: '천둥포', input: '웅크리기 + 우클릭', description: '천둥 에너지 포를 쏩니다.' },
          en: { name: 'Lightning Cannon', input: 'Sneak + right-click', description: 'Channels a lightning cannon beam.' },
          masterLevel: 50,
        },
        {
          id: 'honeyMissile',
          icon: 'bomb',
          element: 'earth',
          ko: {
            name: '점착미사일',
            input: '웅크리기 + 좌클릭',
            description:
              '적에게 부착됩니다. 20회 피격 또는 15초 후 폭발하며, 부착 중 받는 피해가 증가합니다.',
          },
          en: {
            name: 'Honey Missile',
            input: 'Sneak + left-click',
            description:
              'Sticks to foes. Explodes after 20 hits or 15 seconds; stuck targets take increased damage.',
          },
          masterLevel: 50,
        },
        {
          id: 'machineGun',
          icon: 'crossbow',
          element: 'earth',
          ko: {
            name: '기관총',
            input: '손 바꾸기 + 웅크리기',
            description:
              '마우스 휠로 화살·탄알을 전환합니다. 화살은 관통·엔더 드래곤 공격 가능, 탄알은 고피해·위더 공격 가능.',
          },
          en: {
            name: 'Machine Gun',
            input: 'Swap hands + sneak',
            description:
              'Scroll to swap arrow and bullet modes. Arrows pierce and can hit the ender dragon; bullets deal more damage and can hit the wither.',
          },
          masterLevel: 50,
        },
        {
          id: 'development',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '개발',
            description: '공격력이 증가하고 기관총 재장전 시간이 감소합니다.',
          },
          en: {
            name: 'Development',
            description: 'Increases weapon damage and shortens machine-gun reload time.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'compressor',
          icon: 'wind',
          element: 'earth',
          followUp: true,
          ko: {
            name: '압축공기',
            input: '같은 스킬 재입력',
            description: '압축 공기로 위로 올라갑니다.',
          },
          en: {
            name: 'Compressor',
            input: 'Use the same skill again',
            description: 'Launches compressed air upward.',
          },
        },
        {
          id: 'railScrew',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '전자나선',
            input: '같은 스킬 재입력',
            description: '전자 나선탄을 쏩니다.',
          },
          en: {
            name: 'Rail Screw',
            input: 'Use the same skill again',
            description: 'Fires rail screws.',
          },
        },
        {
          id: 'impulse',
          icon: 'slash',
          element: 'lightning',
          ko: { name: '충격', description: '적중한 적을 기절시킵니다.' },
          en: { name: 'Impulse', description: 'Stuns hit enemies.' },
        },
        {
          id: 'spectral',
          icon: 'wind-slash',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '분광기',
            input: '같은 스킬 재입력',
            description: '적들의 위치를 재정렬합니다.',
          },
          en: {
            name: 'Spectral',
            input: 'Use the same skill again',
            description: 'Repositions enemies.',
          },
        },
        {
          id: 'detonator',
          icon: 'bomb',
          element: 'earth',
          followUp: true,
          ko: {
            name: '뇌관',
            input: '같은 스킬 재입력',
            description: '부착 미사일을 즉시 폭발시킵니다. 뇌관으로 폭발 시 피해가 더 큽니다.',
          },
          en: {
            name: 'Detonator',
            input: 'Use the same skill again',
            description: 'Detonates stuck missiles instantly for higher burst damage.',
          },
        },
        {
          id: 'overHeat',
          icon: 'flame',
          element: 'lightning',
          passive: true,
          ko: {
            name: '과열',
            description: '사격을 유지하면 피해량과 연사력이 점차 상승합니다. 최대 2배.',
          },
          en: {
            name: 'Overheat',
            description: 'Holding fire gradually raises damage and fire rate up to double.',
          },
        },
        {
          id: 'highTech',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '첨단기술',
            description: '전체 피해량이 상승하고 모든 스킬에 대지·번개 추가 피해가 붙습니다.',
          },
          en: {
            name: 'High Tech',
            description: 'Raises all skill damage and adds earth and lightning bonus damage to every skill.',
          },
        },
        {
          id: 'dragonBreather',
          icon: 'phoenix',
          element: 'earth',
          ultimate: true,
          ko: {
            name: '용의숨결발사기',
            input: '웅크리기 + 숫자키 4',
            description: '엔더 드래곤의 브레스를 뿜는 무기로 전방을 압도합니다.',
          },
          en: {
            name: 'Dragon Breather',
            input: 'Sneak + hotkey 4',
            description: 'Unleashes an ender-dragon breath stream from a crafted launcher.',
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'plasmaGrenade',
          icon: 'bomb',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '플라즈마류탄',
            input: '같은 스킬 재입력',
            description: '플라즈마 수류탄을 투척합니다.',
          },
          en: {
            name: 'Plasma Grenade',
            input: 'Use the same skill again',
            description: 'Throws a plasma grenade.',
          },
        },
        {
          id: 'railCannon',
          icon: 'storm',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '전자포',
            input: '같은 스킬 재입력',
            description: '전자포를 발사합니다.',
          },
          en: {
            name: 'Rail Cannon',
            input: 'Use the same skill again',
            description: 'Fires a rail cannon blast.',
          },
        },
        {
          id: 'photonBarrier',
          icon: 'shield',
          element: 'lightning',
          passive: true,
          ko: {
            name: '광자방벽',
            description: '전방에서 받는 피해가 50% 감소합니다.',
          },
          en: {
            name: 'Photon Barrier',
            description: 'Reduces damage taken from the front by 50%.',
          },
        },
        {
          id: 'beamWave',
          icon: 'wind-slash',
          element: 'lightning',
          followUp: true,
          ko: {
            name: '광자파도',
            input: '같은 스킬 재입력',
            description: '광자 파도를 방출합니다.',
          },
          en: {
            name: 'Beam Wave',
            input: 'Use the same skill again',
            description: 'Releases a photon wave.',
          },
        },
        {
          id: 'energyCycle',
          icon: 'cycle',
          element: 'lightning',
          passive: true,
          ko: {
            name: '에너지순환',
            description: '다른 기술 사용 시에도 과열이 5%씩 유발됩니다.',
          },
          en: {
            name: 'Energy Cycle',
            description: 'Other skills also build 5% overheat stacks.',
          },
        },
        {
          id: 'creation',
          icon: 'book',
          element: 'earth',
          passive: true,
          ko: {
            name: '창조',
            description: '공격력·방어력이 증가하고 용의숨결발사기 재사용 대기시간이 감소합니다.',
          },
          en: {
            name: 'Creation',
            description: 'More damage and armor; shorter Dragon Breather cooldown.',
          },
        },
        {
          id: 'soulDivider',
          icon: 'sun',
          element: 'lightning',
          ultimate: true,
          ko: {
            name: '영혼절단기',
            input: '웅크리기 + 숫자키 5',
            description:
              '인공위성 광선을 하늘에서 호출하고 보유 무기를 총동원해 포격합니다.',
          },
          en: {
            name: 'Soul Divider',
            input: 'Sneak + hotkey 5',
            description:
              'Calls an orbital satellite beam from the sky while firing every weapon in a full bombardment.',
          },
        },
      ],
    },
  ],
};
