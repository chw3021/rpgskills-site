import { useState } from 'react';

type Props = {
  name: string;
  photoURL: string | null;
  size?: number;
};

export function Avatar({ name, photoURL, size = 32 }: Props) {
  const [failed, setFailed] = useState(false);
  const style = { width: size, height: size };

  if (photoURL && !failed) {
    return (
      <img
        src={photoURL}
        alt=""
        className="avatar"
        style={style}
        // Google profile images return 403 when a referrer is sent from another origin.
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="avatar avatar--initial" style={style} aria-hidden>
      {(name.trim()[0] ?? '?').toUpperCase()}
    </span>
  );
}
