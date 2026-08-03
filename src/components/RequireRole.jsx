import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { useAuth, ROLES } from '../context/AuthContext';

const RequireRole = ({ roles, children }) => {
  const { hasAccess, role } = useAuth();

  if (hasAccess(roles)) {
    return children;
  }

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center', padding: '3rem' }}>
      <ShieldAlert size={48} color="var(--accent-secondary)" style={{ margin: '0 auto 1.5rem' }} />
      <h2 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Accès Restreint</h2>
      <p style={{ color: 'var(--text-secondary)' }}>
        Cet espace est réservé au profil <strong>{roles.map(r => ROLES[r]?.label).join(', ')}</strong>.
        Votre profil actuel ({ROLES[role]?.label || 'inconnu'}) n'y a pas accès.
      </p>
    </div>
  );
};

export default RequireRole;
