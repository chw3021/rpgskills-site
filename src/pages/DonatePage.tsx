import { PageHeader } from '../components/ui/PageHeader';
import { DonateSection } from '../components/donate/DonateSection';

export function DonatePage() {
  return (
    <>
      <PageHeader
        title="Donate"
        description="RPGSkills 개발을 응원해 주세요. 후원은 기능 해금과 무관합니다."
      />
      <DonateSection />
    </>
  );
}
