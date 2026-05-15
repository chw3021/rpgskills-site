import type { FaqItem } from '../types/faq';

export const faqItems: FaqItem[] = [
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
];
