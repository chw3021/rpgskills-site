import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirebaseAuth, isFirebaseConfigured } from '../lib/firebase';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  configured: boolean;
  signInWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const configured = isFirebaseConfigured();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(configured);

  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }
    const auth = getFirebaseAuth();
    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setLoading(false);
    });
  }, [configured]);

  const signInWithGoogle = useCallback(async () => {
    if (!configured) return;
    const auth = getFirebaseAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }, [configured]);

  const logout = useCallback(async () => {
    if (!configured) return;
    await signOut(getFirebaseAuth());
  }, [configured]);

  const value = useMemo(
    () => ({ user, loading, configured, signInWithGoogle, logout }),
    [user, loading, configured, signInWithGoogle, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
