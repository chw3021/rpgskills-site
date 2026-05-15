export const installSteps = [
  {
    title: '1. 서버 준비',
    body: 'Paper 또는 Spigot 1.21.x 서버를 준비합니다. API 26.1.2와 호환되는 빌드를 권장합니다.',
  },
  {
    title: '2. 플러그인 설치',
    body: 'RPGskills.jar를 plugins 폴더에 넣고 서버를 재시작합니다. config는 plugins/RPGskills/ 에 생성됩니다.',
  },
  {
    title: '3. 리소스팩 적용',
    body:
      'Download 페이지에서 리소스팩을 받습니다. GitHub에서 Code → Download ZIP 또는 Google Drive 링크를 사용하세요. ' +
      'server.properties의 resource-pack 옵션이나 플레이어 개별 적용으로 배포할 수 있습니다.',
  },
  {
    title: '4. 월드·설정',
    body:
      'config에서 언어·월드별 활성화를 설정합니다. 레이드 재설치 시 raid 월드 폴더 삭제를 권장합니다.',
  },
];
