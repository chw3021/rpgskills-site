import { useEffect } from 'react';
import { useI18n } from '../../i18n/useI18n';

type ImageLightboxProps = {
  src: string;
  title: string;
  onClose: () => void;
};

export function ImageLightbox({ src, title, onClose }: ImageLightboxProps) {
  const { t } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        className="image-lightbox__close"
        onClick={onClose}
        aria-label={t.classes.closeLightbox}
      >
        ×
      </button>
      <figure
        className="image-lightbox__figure"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={title} className="image-lightbox__img" />
        <figcaption>{title}</figcaption>
      </figure>
    </div>
  );
}
