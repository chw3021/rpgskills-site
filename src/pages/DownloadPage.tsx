import { PageHeader } from '../components/ui/PageHeader';
import { DownloadCards } from '../components/download/DownloadCards';

export function DownloadPage() {
  return (
    <>
      <PageHeader
        title="Download"
        description="최신 플러그인 JAR와 리소스팩을 받으세요. JAR 링크는 GitHub Releases API로 자동 갱신됩니다."
      />
      <DownloadCards />
    </>
  );
}
