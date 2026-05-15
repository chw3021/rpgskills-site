import { Link } from 'react-router-dom';
import { site } from '../../config/site';

export function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>{site.name}</h1>
        <p>{site.tagline}</p>
        <p style={{ color: 'var(--text-muted)' }}>
          커스텀 몬스터, 무기·방어구, 스킬, 퀘스트, 보스 레이드, 파티 시스템으로 서버를
          RPG 어드벤처로 바꿔 보세요.
        </p>
        <div className="btn-row">
          <Link to="/download" className="btn btn-primary">
            Download
          </Link>
          <a
            href={site.spigotUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Spigot Page
          </a>
          <Link to="/install" className="btn btn-secondary">
            Getting Started
          </Link>
        </div>
      </div>
      <div className="hero-visual" aria-hidden>
        <div className="hero-badge">
          Compatible with <strong>Minecraft {site.mcVersion}</strong>
          <br />
          <span style={{ fontSize: '0.75rem' }}>{site.mcVersionsNote}</span>
        </div>
      </div>
    </section>
  );
}
