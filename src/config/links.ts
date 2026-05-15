import { site } from './site';

export const reportChannels = [
  {
    label: 'GitHub Issues',
    href: `${site.pluginRepo}/issues/new`,
    description: '버그·기능 제안 (로그·버전 정보 포함)',
  },
  {
    label: 'Spigot Resource',
    href: site.spigotUrl,
    description: '리뷰·토론·다운로드',
  },
] as const;

export const bugReportChecklist = [
  '서버 소프트웨어 및 버전 (Paper/Spigot, 1.21.x)',
  'RPGSkills JAR 버전 또는 Releases 태그',
  '설치된 다른 플러그인 목록 (/plugins)',
  '재현 단계',
  '콘솔 전체 스택 트레이스',
  '리소스팩 적용 여부',
  '관련 월드·바이옴',
] as const;
