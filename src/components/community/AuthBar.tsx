import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';
import { Avatar } from './Avatar';

export function AuthBar() {
  const { t } = useI18n();
  const { user, loading, configured, signInWithGoogle, logout } = useAuth();

  if (!configured) {
    return (
      <div className="community-auth community-auth--warn" role="status">
        {t.community.firebaseNotConfigured}
      </div>
    );
  }

  if (loading) {
    return <div className="community-auth community-auth--muted">{t.community.authLoading}</div>;
  }

  if (!user) {
    return (
      <div className="community-auth">
        <p className="community-auth__hint">{t.community.signInHint}</p>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => void signInWithGoogle()}>
          {t.community.signInGoogle}
        </button>
      </div>
    );
  }

  const name = user.displayName || user.email || '';

  return (
    <div className="community-auth community-auth--signed-in">
      <Avatar name={name} photoURL={user.photoURL} />
      <span className="community-auth__name">{name}</span>
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => void logout()}>
        {t.community.signOut}
      </button>
    </div>
  );
}
