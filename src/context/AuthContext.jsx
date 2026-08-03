import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();

export const ROLES = {
  investisseur: { label: 'Investisseur', description: 'Accès aux outils investisseur (simulateurs, matchmaking, guichet unique).' },
  agent: { label: 'Agent APIX', description: "Accès complet, y compris Deal Room et Executive Board." },
  partenaire: { label: 'Partenaire Institutionnel', description: 'Accès aux données économiques et réglementaires partagées.' }
};

const INITIAL_SESSION = { isAuthenticated: false, email: '', role: null };

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useLocalStorage('apix_session', INITIAL_SESSION);

  const login = (email, role) => {
    setSession({ isAuthenticated: true, email, role });
  };

  const logout = () => {
    setSession(INITIAL_SESSION);
  };

  const hasAccess = (roles) => {
    if (!roles || roles.length === 0) return true;
    return session.isAuthenticated && roles.includes(session.role);
  };

  return (
    <AuthContext.Provider value={{ ...session, login, logout, hasAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
