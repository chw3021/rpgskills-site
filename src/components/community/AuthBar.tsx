import { useAuth } from '../../contexts/AuthContext';
import { useI18n } from '../../i18n/useI18n';

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
    return <div className="community-auth">{t.community.authLoading}</div>;
  }

  if (!user) {
    return (
      <div className="community-auth">
        <p className="community-auth__hint">{t.community.signInHint}</p>
        <button type="button" className="btn btn-primary" onClick={() => void signInWithGoogle()}>
          {t.community.signInGoogle}
        </button>
      </div>
    );
  }

  return (
    <div className="community-auth community-auth--signed-in">
      {user.photoURL ? (
        <img src={user.photoURL} alt="" className="community-auth__avatar" width={32} height={32} />
      ) : null}
      <span className="community-auth__name">{user.displayName || user.email}</span>
      <button type="button" className="btn btn-ghost" onClick={() => void logout()}>
        {t.community.signOut}
      </button>
    </div>
  );
}
