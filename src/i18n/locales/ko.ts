import type { Translations } from '../types';

export const ko: Translations = {
  meta: {
    htmlLang: 'ko',
    siteDescription:
      'RPGSkills — 마인크래프트 서버를 RPG 어드벤처로. 커스텀 몬스터, 스킬, 퀘스트, 레이드 등.',
  },
  nav: {
    home: '홈',
    features: '기능',
    classes: '직업',
    install: '설치',
    download: '다운로드',
    support: '지원',
    donate: '후원',
    ariaMain: '주 메뉴',
  },
  lang: {
    label: '언어',
    en: 'English',
    ko: '한국어',
  },
  hero: {
    tagline: '마인크래프트 서버를 RPG 어드벤처로 바꿔 보세요',
    intro:
      '커스텀 몬스터, 무기·방어구, 스킬, 퀘스트, 보스 레이드, 파티 시스템으로 서버를 RPG 어드벤처로 바꿔 보세요.',
    download: '다운로드',
    spigot: 'Spigot 페이지',
    gettingStarted: '시작하기',
    compatible: '호환 버전',
    mcVersionLabel: 'Spigot/Paper API 26.1.2 (26.1.2-R0.1-SNAPSHOT) · Minecraft 1.21.x',
  },
  home: {
    whyTitle: 'RPGSkills를 선택하는 이유',
    viewAllFeatures: '전체 기능 보기',
    viewClasses: '직업·조합식 가이드',
  },
  features: {
    pageTitle: '기능',
    pageDescription: '몬스터, 아이템, 퀘스트, 레이드, 파티, 설정 등 RPGSkills 핵심 시스템 안내.',
    sections: [
      {
        title: '커스텀 몬스터 & 전투',
        items: [
          '특수 능력을 가진 유니크 몬스터',
          '바이옴별 몬스터 스케일링 — 바이옴에 따라 강도 변화',
          '콤보: 5스택 시 추가 스폰, 마일스톤마다 필드 보스',
        ],
      },
      {
        title: '무기·방어구·스킬',
        items: [
          '다양한 커스텀 무기·방어구',
          '8계열 × 4역할 32직업 — 직업 페이지 참고',
          '스킬·숙련도·피해량: /rpg skill, /rpg rank, /rpg graph',
          '리소스팩 지원 (Beta)',
        ],
      },
      {
        title: '바이옴 속성 & 무기 강화',
        items: [
          '바이옴마다 고유 속성 조각으로 무기 강화',
          '순서: Earth(평원) → Wind(산/언덕) → Frost → Ocean → Dark(숲) → Hyper(사막) → Burning(악지) → Poison(늪) → Wild(정글)',
          '네더라이트 무기 레벨업; 삼지창·철퇴는 네더라이트 없이 직접 강화 가능',
          '/smith 로 장비 제작·네더라이트급 무기 획득',
        ],
      },
      {
        title: '퀘스트 & 보스 레이드',
        items: [
          '구조물 전리품 후 퀘스트 NPC 등장',
          '정글·네더: 몬스터 처치 시 포탈 생성 → 우클릭으로 레이드',
          '엔드: EnderMimic 처치 시 레이드 포탈',
          '위더 레이드 (Beta): 필드 위더 처치 후 포탈',
          '재설치 시 폴더 삭제: OverworldRaid, NethercoreRaid, EndercoreRaid, WitherRaid',
        ],
      },
      {
        title: '파티 & 서버 설정',
        items: [
          '파티: create, join, password, invite, kick, leave, assemble, list',
          'config 다국어 지원',
          '월드별 플러그인 on/off',
          'plugins/에 JAR 배치 후 config·리소스팩 적용',
        ],
      },
    ],
  },
  install: {
    pageTitle: '설치',
    pageDescription: '플러그인 설치, 버전 호환, 리소스팩 적용 가이드.',
    versionNotice: '버전',
    steps: [
      {
        title: '1. 서버 준비',
        body: 'Paper 또는 Spigot 1.21.x + Spigot API 26.1.2 이상 (pom.xml spigot-api 26.1.2-R0.1-SNAPSHOT 기준).',
      },
      {
        title: '2. 플러그인 설치',
        body: 'RPGskills.jar를 plugins 폴더에 넣고 서버를 재시작합니다. config는 plugins/RPGskills/ 에 생성됩니다.',
      },
      {
        title: '3. 리소스팩 적용',
        body:
          'Download 페이지에서 리소스팩을 받습니다. GitHub Code → Download ZIP 또는 Google Drive를 사용하세요. ' +
          'server.properties resource-pack 또는 클라이언트 개별 적용이 가능합니다.',
      },
      {
        title: '4. 월드·설정',
        body:
          'config에서 언어·월드별 활성화를 설정합니다. 레이드 재설치 시 raid 월드 폴더 삭제를 권장합니다.',
      },
    ],
  },
  download: {
    pageTitle: '다운로드',
    pageDescription:
      '최신 플러그인 JAR와 리소스팩을 받으세요. JAR 링크는 GitHub Releases API로 자동 갱신됩니다.',
    pluginJar: '플러그인 JAR',
    latestFromGithub: 'GitHub 최신 릴리스',
    loading: ' — 불러오는 중…',
    apiFallback: 'API 대체',
    downloadJar: 'JAR 다운로드',
    allReleases: '전체 릴리스',
    resourcePackGithub: '리소스팩 (GitHub)',
    resourcePackGithubMeta: 'RpgSkills 리포지토리 — Code → Download ZIP',
    downloadZip: 'ZIP 다운로드',
    repository: '리포지토리',
    resourcePackDrive: '리소스팩 (Google Drive)',
    resourcePackDriveMeta: '플레이어용 미러 링크',
    openDrive: 'Drive 열기',
    noGithubReleaseHint:
      'GitHub Releases에서 최신 JAR를 불러오지 못했습니다. chw3021/rpgskills-releases 전체 릴리스 또는 아래 Spigot을 이용하세요.',
    getJarFromSpigot: 'Spigot에서 받기',
  },
  support: {
    pageTitle: '지원',
    pageDescription: '커맨드 참고, FAQ, 버그 제보 안내.',
    reportTitle: '버그 제보',
    reportIntro: '아래 정보를 포함하면 원인 파악이 빨라집니다.',
    faqTitle: '자주 묻는 질문',
    commandsTitle: '커맨드',
    playerCommands: '플레이어',
    partyCommands: '파티',
    adminCommands: '관리자',
    commandCol: '커맨드',
    descriptionCol: '설명',
    reportChannels: [
      {
        label: 'GitHub Issues',
        description: '버그·기능 제안 (로그·버전 정보 포함)',
      },
      {
        label: 'Spigot 리소스',
        description: '리뷰·토론·다운로드',
      },
    ],
    bugReportChecklist: [
      '서버 소프트웨어 및 버전 (Paper/Spigot, 1.21.x)',
      'RPGSkills JAR 버전 또는 Releases 태그',
      '설치된 다른 플러그인 목록 (/plugins)',
      '재현 단계',
      '콘솔 전체 스택 트레이스',
      '리소스팩 적용 여부',
      '관련 월드·바이옴',
    ],
  },
  donate: {
    pageTitle: '후원',
    pageDescription: 'RPGSkills 개발을 응원해 주세요. 후원은 기능 해금과 무관합니다.',
    intro: 'RPGSkills는 무료 플러그인입니다. 후원은 개발·서버 비용·업데이트에 도움이 됩니다. ',
    introBold: '후원은 프리미엄 기능 해금과 연동되지 않습니다.',
    paypalButton: 'PayPal로 후원하기',
    disclaimer1: '· 후원은 자발적인 지원이며, 디지털 콘텐츠 환불이 어려울 수 있습니다.',
    disclaimer2: '· 결제·영수증 문의는 PayPal 거래 내역을 기준으로 합니다.',
    disclaimer3:
      '· 향후 프리미엄 라이선스는 별도 구매·키 발급 절차로 제공될 예정입니다 (Firebase 연동 예정).',
    premiumTitle: '추후 제공 예정:',
    premiumBody:
      'Firebase 기반 프리미엄 라이선스 구매 및 키 활성화 — PremiumSection 확장을 위한 구조가 준비되어 있습니다.',
  },
  footer: {
    spigot: 'Spigot',
    releases: '릴리스',
    website: '웹사이트',
  },
  commands: {
    player: [
      { cmd: '/rpg dam (d, damage)', desc: '현재 공격력 표시' },
      { cmd: '/rpg element (el)', desc: '속성력·저항 표시' },
      { cmd: '/rpg skill (s)', desc: '스킬 GUI 열기' },
      { cmd: '/rpg escape (es)', desc: '현재 전투 종료' },
      { cmd: '/rpg class (c)', desc: '직업 GUI 열기' },
      { cmd: '/rpg rank (r)', desc: '직업 숙련도 Top 10' },
      { cmd: '/rpg graph (g)', desc: '적에게 가한 피해량' },
      { cmd: '/rpg gclear (gc)', desc: '기록된 피해량 초기화' },
      { cmd: '/smith', desc: '1번 슬롯 장비를 2번 슬롯 재료로 제작' },
    ],
    party: [
      { cmd: '/party create <partyname>', desc: '파티 생성 (방장 됨)' },
      { cmd: '/party join <partyname>', desc: '파티 참가' },
      { cmd: '/party password <password>', desc: '비밀번호로 잠금' },
      { cmd: '/party invite <player>', desc: '플레이어 초대 (방장)' },
      { cmd: '/party kick <player>', desc: '추방 (방장)' },
      { cmd: '/party leave', desc: '파티 탈퇴' },
      { cmd: '/party assemble', desc: '멤버를 방장 위치로 (방장)' },
      { cmd: '/party list', desc: '파티 목록' },
    ],
    admin: [
      { cmd: '/rpg exp [amount]', desc: '경험치 지급' },
      { cmd: '/rpg pro [amount]', desc: '숙련도 포인트 지급' },
      { cmd: '/rpg enchant [enchant] [level]', desc: '주 손 아이템 인챈트' },
      { cmd: '/rpg enchant clear', desc: '주 손 인챈트 제거' },
      { cmd: '/rpg elements (elm)', desc: '속성 인벤토리 열기' },
    ],
  },
  classes: {
    pageTitle: '직업 & 조합식',
    pageDescription: '게임 내 /rpg class GUI와 동일한 32직업 설명 및 커스텀 무기 조합식.',
    tabListLabel: '직업 페이지 섹션',
    tabClasses: '직업',
    tabCrafting: '조합식',
    archetypesTitle: '직업 계열 (GUI 열)',
    rolesTitle: '역할군 (GUI 행)',
    rosterTitle: '전체 직업',
    rosterHint: '스탯은 게임 내 직업 선택 GUI와 동일합니다 (공격·방어·제어·지원·범위·사거리·기동).',
    filterArchetype: '계열',
    filterRole: '역할',
    filterAll: '전체',
    showingCount: '{count}개 직업 표시',
    equipmentLabel: '추천 장비',
    portraitZoom: '{name} 초상화 크게 보기',
    closeLightbox: '이미지 닫기',
    archetypeLabels: {
      warrior: '전사',
      shooter: '사수',
      fighter: '격투가',
      mage: '마법사',
      technician: '전문가',
      marine: '해상',
      avenger: '복수자',
      battleLine: '군진',
    },
    roleLabels: {
      assault: '돌격',
      nuker: '공격',
      suppressor: '제압',
      supporter: '지원',
    },
    difficulty: { easy: '쉬움', normal: '보통', hard: '어려움' },
    stats: {
      attack: '공격',
      defence: '방어',
      control: '제어',
      support: '지원',
      area: '범위',
      range: '사거리',
      mobility: '기동',
    },
  },
  crafting: {
    title: '커스텀 무기 조합',
    intro:
      '너클·완드·단검은 대체 재료로 제작합니다. 활·쇠뇌·낚싯대는 나무 대신 다른 재료를 넣을 수 있습니다.',
    smithTitle: '/smith:',
    smithBody: '첫 슬롯 장비를 둔 채 두 번째 슬롯 재료로 제련합니다. 네더라이트급 무기도 획득 가능합니다.',
    alternateTools: '활·쇠뇌·낚싯대: 제작 시 나무 부분을 다른 재료로 대체.',
    mirrorNote: '모든 조합식은 좌우 반전(거울)이 가능합니다.',
    legendMaterial: '재료 (x)',
    legendStick: '막대 (a)',
    legendMaterialShort: '재',
    legendStickShort: '막',
    recipeNames: { knuckle: '너클', wand: '완드', dagger: '단검' },
  },
  faq: [
    {
      id: 'version-mismatch',
      question: '서버 버전이 맞지 않으면 어떻게 되나요?',
      answer:
        'RPGSkills는 Spigot/Paper 1.21.x (API 26.1.2) 기준으로 개발·테스트됩니다. ' +
        '다른 메이저 버전에서는 명령어·몬스터·GUI가 동작하지 않거나 콘솔 오류가 발생할 수 있습니다.',
    },
    {
      id: 'resource-pack',
      question: '리소스팩을 적용하지 않으면 텍스처가 깨져 보여요',
      answer:
        '커스텀 무기·방어구·몬스터는 리소스팩(Beta)이 필요합니다. Download 페이지에서 ' +
        'GitHub ZIP 또는 Google Drive 팩을 받아 서버 resource-pack 또는 클라이언트에 적용하세요.',
    },
    {
      id: 'party-error',
      question: '/party 명령이 오류를 냅니다',
      answer:
        '다른 플러그인과 명령 충돌, 구버전 JAR, 손상된 설정이 원인일 수 있습니다. ' +
        '전체 콘솔 로그, /plugins 목록, RPGSkills 버전을 Issues에 첨부해 주세요.',
    },
    {
      id: 'raid-world',
      question: '보스 레이드 포탈·월드가 이상해요',
      answer:
        '플러그인 재설치 후 서버 폴더의 OverworldRaid, NethercoreRaid, ' +
        'EndercoreRaid, WitherRaid 폴더 삭제를 권장합니다.',
    },
    {
      id: 'monster-lag',
      question: '몬스터가 너무 많이 스폰되어 렉이 납니다',
      answer:
        '바이옴별 스케일링과 콤보 시스템으로 추가 스폰이 발생합니다. config에서 월드별 설정을 확인하고, ' +
        '재현 조건(바이옴, 콤보 수)을 제보에 포함해 주세요.',
    },
    {
      id: 'backpack-gui',
      question: '전리품·가방 GUI 버튼이 동작하지 않아요',
      answer:
        '리소스팩 미적용, 버전 불일치, 다른 GUI 플러그인 충돌을 확인하세요. ' +
        '최신 JAR와 서버 로그를 함께 제보해 주시면 빠르게 확인할 수 있습니다.',
    },
  ],
};
