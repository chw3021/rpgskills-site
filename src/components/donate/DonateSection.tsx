import { site } from '../../config/site';

export function DonateSection() {
  return (
    <section>
      <p>
        RPGSkills는 무료 플러그인입니다. 후원은 개발·서버 비용·업데이트에 도움이 됩니다.
        후원은 <strong>프리미엄 기능 해금과 연동되지 않습니다</strong>.
      </p>

      <div className="btn-row">
        <a
          href={site.paypalDonateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-paypal"
        >
          PayPal로 후원하기
        </a>
      </div>

      <aside className="donate-disclaimer">
        <p>· 후원은 자발적인 지원이며, 디지털 콘텐츠 환불이 어려울 수 있습니다.</p>
        <p>· 결제·영수증 문의는 PayPal 거래 내역을 기준으로 합니다.</p>
        <p>
          · 향후 프리미엄 라이선스는 별도 구매·키 발급 절차로 제공될 예정입니다 (Firebase
          연동 예정).
        </p>
      </aside>

      <div className="premium-placeholder" role="note">
        <strong>Coming later:</strong> Premium license purchase & key activation via Firebase
        — this page structure is ready for <code>PremiumSection</code> expansion.
      </div>
    </section>
  );
}
