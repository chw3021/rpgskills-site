import type { ClassDetailDef } from './types';

export const vanguardDetail: ClassDetailDef = {
  id: 'vanguard',
  order: 8,
  element: { en: 'Earth', ko: '대지' },
  proficiency: {
    expLimit1: 29_315,
    expLimit2: 155_015,
    tiers: [
      { tier: 0, portraitFile: 'vanguard.png', en: { title: 'Vanguard' }, ko: { title: '선봉병' } },
      { tier: 1, portraitFile: 'vanguard-limit1.png', en: { title: 'Iron Vanguard' }, ko: { title: '철선봉' } },
      { tier: 2, portraitFile: 'vanguard-limit2.png', en: { title: 'Line Marshal' }, ko: { title: '진군장' } },
    ],
  },
  story: {
    ko: [
      '창으로 최전선을 압박하는 선봉병입니다. 포진찌르기는 전방 원뿔을 연타하며 적을 붙잡고, 시전 중 무적 상태가 됩니다.',
      '창격돌로 지면을 내려찍어 적을 중앙으로 모으고, 창고착은 거대 창을 회전 휘두르며 주위를 벱니다. 상승창격으로 적을 띄운 뒤 공중창격·천공창격으로 연계합니다.',
      '창술·진형 숙련·선봉 교리로 근접·스킬 피해가 성장하며, 철벽진영과 관통진으로 전장의 중심이 됩니다. 보조에 방패·삼지창이 있으면 스킬을 쓸 수 없습니다.',
    ],
    en: [
      'A frontline soldier who pins foes with spear pressure. Phalanx Jab multi-hits a forward cone, super-holds enemies, and grants channel invulnerability.',
      'Spear Brace slams the ground and pulls foes inward. Skewering Charge spins a giant spear arc; Rising Spear launches foes into Aerial Spear and Skybound Spear.',
      'Spear Discipline, Phalanx Training, and Vanguard Doctrine raise melee and skill damage. Iron Phalanx and Piercing Array anchor the fight. No skills with shield or trident off-hand.',
    ],
  },
  skillSections: [
    {
      id: 'base',
      requiredProficiency: 0,
      skills: [
        {
          id: 'phalanxJab',
          icon: 'spear',
          element: 'earth',
          guiColumn: 0,
          ko: {
            name: '포진찌르기',
            input: '우클릭',
            description:
              '짧게 전방으로 파고든 뒤, 시선 방향 원뿔(~5.6블록)을 창으로 6회 연타합니다. 원뿔 안 적에게 슈퍼홀딩을 걸고, 시전 중 무적입니다.',
            extra: [
              'CRIT·SWEEP 원뿔 파티클. 피해 계수 0.55+Lv×0.038 (40% 기본 / 60% 보너스, 대지).',
              '재사용 2.8초×(1−행운/1024)×일반쿨감소. 숙련 1 이상 시 돌진찌르기 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Phalanx Jab',
            input: 'Right-click',
            description:
              'Step in, then multi-hit a forward cone (~5.6 blocks) six times. Super-holds enemies in the cone and grants channel invulnerability.',
            extra: [
              'CRIT/SWEEP cone particles. Damage 0.55+Lv×0.038 (40% base / 60% bonus, earth).',
              'Cooldown 2.8s×(1−luck/1024)×normal CD reduction. Unlocks Phalanx Rend combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'spearBrace',
          icon: 'shield',
          element: 'earth',
          guiColumn: 1,
          ko: {
            name: '창격돌',
            input: '웅크리기 + 좌클릭',
            description:
              '전방 2.2블록(수평) 지점에 창을 내려찍어 지진장을 설치합니다. 중심 Y는 해당 위치에서 아래로 찾은 로컬 지면입니다(동굴·실내 대응). 반경 2.8 권역에서 4회 다단히트(3틱 간격)하며 적을 중앙으로 끌어당깁니다.',
            extra: [
              '1타에 전방 넉백, 이후 매 틱 수렴 소용돌이·균열 파티클. 피해 0.62+Lv×0.042 (40%/60%).',
              '재사용 5.5초×일반쿨감소. 숙련 1 이상 시 맹렬창격 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Spear Brace',
            input: 'Sneak + left-click',
            description:
              'Slams the spear 2.2 blocks ahead on the horizontal plane (Y snapped to local floor below the point, cave-safe). Radius 2.8, 4 multi-hits every 3 ticks, pulling enemies inward.',
            extra: [
              'First hit knocks back; later ticks show converging vortex and crack particles. Damage 0.62+Lv×0.042 (40%/60%).',
              'Cooldown 5.5s×normal CD reduction. Unlocks Spear Drive combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'skeweringCharge',
          icon: 'rush',
          element: 'earth',
          guiColumn: 2,
          ko: {
            name: '창고착',
            input: '손 바꾸기',
            description:
              '시선은 고정한 채 거대 창 파티클이 주위를 3회 회전하며 휘둘러집니다. 반경 3.0 호 판정, 4틱 간격 3회 다단히트.',
            extra: [
              '피해 0.58+Lv×0.04 (40%/60%). 재사용 7초×일반쿨감소.',
              '숙련 1 이상 시 연속창고 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Skewering Charge',
            input: 'Swap hands',
            description:
              'A giant spear arc spins around you 3 times (camera fixed). Radius 3.0 frontal arc, 3 multi-hits every 4 ticks.',
            extra: [
              'Damage 0.58+Lv×0.04 (40%/60%). Cooldown 7s×normal CD reduction.',
              'Unlocks Charge Follow combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'rallyingCall',
          icon: 'spear',
          element: 'earth',
          guiColumn: 3,
          ko: {
            name: '전열 함성',
            input: '웅크리기 + 손 바꾸기',
            description:
              '반경 4.8 권역의 적에게 1회 피해를 주고, 본인·파티원(반경 10)에게 신속·흡수를 부여합니다(솔로는 본인만).',
            extra: [
              '적 피해 0.48+Lv×0.03 (45%/55%). 지휘 링·비콘 사운드 연출.',
              '재사용 14초×일반쿨감소. 숙련 1 이상 시 함성잔향 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Rallying Call',
            input: 'Sneak + swap hands',
            description:
              'Damages enemies in radius 4.8 once, then grants Speed and Absorption to self and party within 10 blocks (solo: self only).',
            extra: [
              'Enemy damage 0.48+Lv×0.03 (45%/55%). Command ring and horn FX.',
              'Cooldown 14s×normal CD reduction. Unlocks Rally Echo combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'spearSweep',
          icon: 'slash',
          element: 'earth',
          guiColumn: 4,
          ko: {
            name: '창 휘두르기',
            input: '좌클릭',
            description:
              '최대 1.0블록 소폭 전진(통과 가능 경로 텔레포트) 후, 전방 호(반경 5.0, 시선 수평 dot>0.2)를 1회 타격합니다. 호 안 적을 구역 중앙(전방 최소 2블록)으로 끌어모으며 6틱 Holding을 겁니다.',
            extra: [
              '피해 = 창고착 계수×0.88 (40%/60%). 마스터 레벨은 창고착 레벨을 따릅니다.',
              '재사용 4.2초×일반쿨감소. 숙련 1 이상 시 휘두르기연격 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Spear Sweep',
            input: 'Left-click',
            description:
              'Steps forward up to 1.0 block (passable-path teleports), then one frontal arc hit (radius 5.0, view flat dot>0.2). Pulls arc foes to the zone center (at least 2 blocks ahead) and applies 6-tick Holding.',
            extra: [
              'Damage = Skewering Charge coeff×0.88 (40%/60%). Uses Skewering Charge master level.',
              'Cooldown 4.2s×normal CD reduction. Unlocks Sweep Arc combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'risingSpear',
          icon: 'stab',
          element: 'earth',
          guiColumn: 5,
          ko: {
            name: '상승창격',
            input: '웅크리기 + 우클릭',
            description:
              '상승 창격(어퍼 슬래시)으로 본인을 띄우고, 발밑 반경 3.4에서 4회 다단히트(2틱 간격)합니다. 적은 위로 뜹니다.',
            extra: [
              '피해 = 전열 함성 적 피해×1.12 (45%/55%). 마스터 레벨은 전열 함성 레벨을 따릅니다.',
              '재사용 6.5초×일반쿨감소. 숙련 1 이상 시 공중창격 연계 창이 열립니다.',
            ],
          },
          en: {
            name: 'Rising Spear',
            input: 'Sneak + right-click',
            description:
              'An upper slash launches you; 4 multi-hits at radius 3.4 every 2 ticks, knocking enemies upward.',
            extra: [
              'Damage = Rallying Call enemy damage×1.12 (45%/55%). Uses Rallying Call master level.',
              'Cooldown 6.5s×normal CD reduction. Unlocks Aerial Spear combo at proficiency 1+.',
            ],
          },
          masterLevel: 50,
        },
        {
          id: 'spearDiscipline',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '창술',
            description:
              '창 근접 공격 피해가 증가합니다(1.08+Lv×0.022, 2차 한계 시 ×1.06 추가). 보조 슬롯에 방패·삼지창이 있으면 스킬을 사용할 수 없습니다.',
          },
          en: {
            name: 'Spear Discipline',
            description:
              'Increases spear melee damage (1.08+Lv×0.022; ×1.06 more at limit 2). Cannot use skills with shield or trident off-hand.',
          },
        },
      ],
    },
    {
      id: 'limit1',
      requiredProficiency: 1,
      skills: [
        {
          id: 'phalanxRend',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'phalanxJab',
          guiColumn: 0,
          ko: {
            name: '돌진찌르기',
            input: '포진찌르기 후 재우클릭',
            description:
              '더 깊게 파고들며 넓은 원뿔을 8회 연타합니다. 슈퍼홀딩·채널 무적이 유지됩니다. 총 피해는 포진찌르기×0.72입니다.',
            extra: [
              '연계 창 3.5초. 연계 재사용 0.55초×일반쿨감소.',
              '진형 숙련(창술 레벨)에 따라 스킬 피해 배율 적용.',
            ],
          },
          en: {
            name: 'Phalanx Rend',
            input: 'Right-click again after Phalanx Jab',
            description:
              'Drive deeper and multi-hit a wider cone eight times with super-hold and channel invulnerability. Total damage = Phalanx Jab×0.72.',
            extra: [
              'Combo window 3.5s. Combo cooldown 0.55s×normal CD reduction.',
              'Skill damage scales with Phalanx Training (Spear Discipline level).',
            ],
          },
        },
        {
          id: 'spearDrive',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          chainOf: 'spearBrace',
          guiColumn: 1,
          ko: {
            name: '맹렬창격',
            input: '창격돌 후 웅크리기 + 재좌클릭',
            description:
              '전방 2.4블록 지진장. 반경 3.4, 6회 다단히트(3틱 간격). 매 틱 중앙 인력, 마지막 타에 4틱 제압.',
            extra: [
              '총 피해 = 창격돌×1.15를 6회 분할. 연계 창 3.5초, 재사용 0.65초×일반쿨감소.',
            ],
          },
          en: {
            name: 'Spear Drive',
            input: 'Sneak + left-click again after Spear Brace',
            description:
              'Earthquake at 2.4 blocks ahead. Radius 3.4, 6 multi-hits every 3 ticks with pull; final hit applies 4-tick suppression.',
            extra: [
              'Total damage = Spear Brace×1.15 split across hits. Combo window 3.5s; cooldown 0.65s×normal CD reduction.',
            ],
          },
        },
        {
          id: 'chargeFollow',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          chainOf: 'skeweringCharge',
          guiColumn: 2,
          ko: {
            name: '연속창고',
            input: '창고착 후 손 바꾸기',
            description:
              '전방 직선 다단 찌르기(도달 7.0, 4회/2틱). 총 피해 = 창고착×0.82를 4회 분할. 자기 이동 없음.',
            extra: ['연계 창 3.5초. 재사용 0.58초×일반쿨감소.'],
          },
          en: {
            name: 'Charge Follow',
            input: 'Swap hands again after Skewering Charge',
            description:
              'Forward line multi-thrust (reach 7.0, 4 hits / 2 ticks). Total = Skewering Charge×0.82 split. No self movement.',
            extra: ['Combo window 3.5s. Cooldown 0.58s×normal CD reduction.'],
          },
        },
        {
          id: 'rallyEcho',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'rallyingCall',
          guiColumn: 3,
          ko: {
            name: '함성잔향',
            input: '전열 함성 후 웅크리기 + 손 바꾸기',
            description:
              '반경 4.8에서 1회 광역 피해(전열 함성×0.9). 6틱 후 함성 잔향 파티클·사운드(피해 없음).',
            extra: ['연계 창 3.5초. 재사용 0.7초×일반쿨감소.'],
          },
          en: {
            name: 'Rally Echo',
            input: 'Sneak + swap again after Rallying Call',
            description:
              'One radial hit at radius 4.8 (Rallying Call×0.9). After 6 ticks, echo ripple FX only (no damage).',
            extra: ['Combo window 3.5s. Cooldown 0.7s×normal CD reduction.'],
          },
        },
        {
          id: 'sweepArc',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '휘두르기연격',
            input: '창 휘두르기 후 좌클릭',
            description:
              '소폭 전진 후 반경 5.5 호 1회 타격·중앙 집결·6틱 Holding + 스윕 파티클 3단. 피해 = 창 휘두르기×0.78 (1회만).',
            extra: ['연계 창 3.5초. 재사용 0.5초×일반쿨감소.'],
          },
          en: {
            name: 'Sweep Arc',
            input: 'Left-click again after Spear Sweep',
            description:
              'Step in, then one arc hit at radius 5.5 with gather + 6-tick Holding and 3 sweep FX waves. Damage = Spear Sweep×0.78 (single hit).',
            extra: ['Combo window 3.5s. Cooldown 0.5s×normal CD reduction.'],
          },
        },
        {
          id: 'aerialSpear',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'risingSpear',
          guiColumn: 5,
          ko: {
            name: '공중창격',
            input: '상승창격 후 웅크리기 + 우클릭',
            description:
              '더 높이 상승한 뒤 반경 3.6에서 5회 공중 다단히트(2틱 간격). 마지막 타에 6틱 제압.',
            extra: [
              '총 피해 = 상승창격×0.85를 5회 분할. 연계 창 3.5초, 재사용 0.62초×일반쿨감소.',
            ],
          },
          en: {
            name: 'Aerial Spear',
            input: 'Sneak + right-click again after Rising Spear',
            description:
              'Higher launch, then 5 aerial multi-hits at radius 3.6 every 2 ticks; final hit applies 6-tick suppression.',
            extra: [
              'Total = Rising Spear×0.85 split across hits. Combo window 3.5s; cooldown 0.62s×normal CD reduction.',
            ],
          },
        },
        {
          id: 'phalanxTraining',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '진형 숙련',
            description:
              '창 스킬 피해가 증가합니다(1+창술Lv×0.006). 1차 연계 기술이 해제되고 연계 창이 열립니다.',
          },
          en: {
            name: 'Phalanx Training',
            description:
              'Increases spear skill damage (1+Spear Discipline Lv×0.006). Unlocks limit-1 combo follow-ups.',
          },
        },
        {
          id: 'ironPhalanx',
          icon: 'shield',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '철벽진영',
            input: '웅크리기 + 숫자키 4 (전투 모드)',
            description:
              '반경 5.5에 철벽 링 파티클과 함께 10회 다단 flat 피해(2틱 간격, 총 18.5를 분할). 가까운 파티원에게 흡수(반경 12).',
            extra: [
              '재사용 52초×궁극쿨감소(2차 한계 32초). 2차 한계 시 스킬 피해 ×1.1 추가.',
            ],
          },
          en: {
            name: 'Iron Phalanx',
            input: 'Sneak + hotkey 4 (combat mode)',
            description:
              'Iron wall ring FX at radius 5.5; 10 flat multi-hits every 2 ticks (18.5 total split). Grants Absorption to nearby party (radius 12).',
            extra: [
              'Cooldown 52s×ultimate CD reduction (32s at limit 2). Limit 2 adds ×1.1 skill damage.',
            ],
          },
        },
      ],
    },
    {
      id: 'limit2',
      requiredProficiency: 2,
      skills: [
        {
          id: 'phalanxRendII',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'phalanxJab',
          guiColumn: 0,
          ko: {
            name: '맹렬돌진찌르기',
            input: '포진찌르기 연계(2차)',
            description:
              '최전선까지 파고들어 넓은 원뿔을 12회 고속 연타합니다. 끝점 충격파·강화 슈퍼홀딩·채널 무적. 총 피해 = 돌진찌르기×1.35.',
            extra: ['연계 창 4.0초. 숙련2에서는 본기 직후 이 연계만 발동(L1 대체).'],
          },
          en: {
            name: 'Phalanx Rend II',
            input: 'Limit 2 Phalanx Jab combo',
            description:
              'Drive to the frontline and multi-hit a wide cone 12 times with tip shockwaves, stronger super-hold, and channel invulnerability. Total = Phalanx Rend×1.35.',
            extra: ['Combo window 4.0s. At limit 2 this replaces L1 on the same input after the base skill.'],
          },
        },
        {
          id: 'spearDriveII',
          icon: 'sword-drive',
          element: 'earth',
          followUp: true,
          chainOf: 'spearBrace',
          guiColumn: 1,
          ko: {
            name: '극렬창격',
            input: '창격돌 연계(2차)',
            description:
              '반경 3.8 지진장, 8회 다단히트(3틱 간격). 강한 인력, 마지막 타 8틱 제압. 총 피해 = 맹렬창격×1.35.',
            extra: ['연계 창 4.0초.'],
          },
          en: {
            name: 'Spear Drive II',
            input: 'Limit 2 Spear Brace combo',
            description:
              'Radius 3.8 earthquake, 8 multi-hits every 3 ticks, heavy pull, 8-tick suppression on final hit. Total = Spear Drive×1.35.',
            extra: ['Combo window 4.0s.'],
          },
        },
        {
          id: 'chargeFollowII',
          icon: 'rush',
          element: 'earth',
          followUp: true,
          chainOf: 'skeweringCharge',
          guiColumn: 2,
          ko: {
            name: '관통연착',
            input: '창고착 연계(2차)',
            description:
              '거대 창 6회 회전(반경 3.8, 3틱 간격 6회 다단). 총 피해 = 연속창고×1.35를 6회 분할.',
            extra: ['연계 창 4.0초.'],
          },
          en: {
            name: 'Charge Follow II',
            input: 'Limit 2 Skewering Charge combo',
            description:
              'Giant spear spins 6 times (radius 3.8, 6 multi-hits every 3 ticks). Total = Charge Follow×1.35 split across hits.',
            extra: ['Combo window 4.0s.'],
          },
        },
        {
          id: 'rallyEchoII',
          icon: 'spear',
          element: 'earth',
          followUp: true,
          chainOf: 'rallyingCall',
          guiColumn: 3,
          ko: {
            name: '전열폭음',
            input: '전열 함성 연계(2차)',
            description: '반경 5.4에서 1회 광역 피해(함성잔향×1.35). 6틱 후 잔향 연출.',
            extra: ['연계 창 4.0초.'],
          },
          en: {
            name: 'Rally Echo II',
            input: 'Limit 2 Rallying Call combo',
            description: 'One radial hit at radius 5.4 (Rally Echo×1.35). Echo ripple after 6 ticks.',
            extra: ['Combo window 4.0s.'],
          },
        },
        {
          id: 'sweepArcII',
          icon: 'slash',
          element: 'earth',
          followUp: true,
          chainOf: 'spearSweep',
          guiColumn: 4,
          ko: {
            name: '광역창휘',
            input: '창 휘두르기 연계(2차)',
            description:
              '소폭 전진 후 반경 6.0 호 1회 타격·중앙 집결·6틱 Holding + 스윕 3단. 피해 = 휘두르기연격×1.35 (1회).',
            extra: ['연계 창 4.0초.'],
          },
          en: {
            name: 'Sweep Arc II',
            input: 'Limit 2 Spear Sweep combo',
            description:
              'Step in, then one arc hit at radius 6.0 with gather + 6-tick Holding and 3 sweep FX waves. Damage = Sweep Arc×1.35 (single hit).',
            extra: ['Combo window 4.0s.'],
          },
        },
        {
          id: 'skyboundSpear',
          icon: 'stab',
          element: 'earth',
          followUp: true,
          chainOf: 'risingSpear',
          guiColumn: 5,
          ko: {
            name: '천공창격',
            input: '상승창격 연계(2차)',
            description:
              '강한 상승 후 반경 4.2에서 8회 공중 다단(2틱 간격). 마지막 타 12틱 제압. 총 피해 = 공중창격×1.35.',
            extra: ['연계 창 4.0초.'],
          },
          en: {
            name: 'Skybound Spear',
            input: 'Limit 2 Rising Spear combo',
            description:
              'Strong launch, 8 aerial multi-hits at radius 4.2 every 2 ticks; final hit 12-tick suppression. Total = Aerial Spear×1.35.',
            extra: ['Combo window 4.0s.'],
          },
        },
        {
          id: 'vanguardDoctrine',
          icon: 'book',
          element: 'earth',
          guiColumn: 7,
          passive: true,
          ko: {
            name: '선봉 교리',
            description:
              '스킬 피해 ×1.1, 근접 피해 ×1.06, 연계 창 4.0초. 철벽진영 재사용이 절반(32초×궁극쿨감소)으로 감소합니다.',
          },
          en: {
            name: 'Vanguard Doctrine',
            description:
              '×1.1 skill damage, ×1.06 melee damage, 4.0s combo window. Iron Phalanx cooldown halved (32s×ultimate CD reduction).',
          },
        },
        {
          id: 'piercingArray',
          icon: 'spear',
          element: 'earth',
          ultimate: true,
          guiColumn: 8,
          ko: {
            name: '관통진',
            input: '웅크리기 + 숫자키 5 (전투 모드)',
            description:
              '시선 방향 직선 9블록에 거대 창 형상 파티클과 함께 8회 다단히트(2틱 간격). 총 32를 8회 분할(30%/70%).',
            extra: ['재사용 72초×궁극쿨감소. 2차 한계 전용 궁극기.'],
          },
          en: {
            name: 'Piercing Array',
            input: 'Sneak + hotkey 5 (combat mode)',
            description:
              'Giant spear FX along a 9-block line; 8 multi-hits every 2 ticks. 32 total split (30%/70%).',
            extra: ['Cooldown 72s×ultimate CD reduction. Limit-2 ultimate only.'],
          },
        },
      ],
    },
  ],
};
