import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FolderOpen, Map, FileText, Activity, LogOut, ArrowLeft, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#0f172a', color: 'white' }}>
      {/* Admin Sidebar */}
      <div style={{ width: '280px', background: '#1e293b', borderRight: '1px solid #334155', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #334155' }}>
          <Shield size={32} color="#ef4444" />
          <div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'white' }}>APIX Admin</h2>
            <span style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 'bold' }}>SYSTEME CENTRAL</span>
          </div>
        </div>

        <div style={{ padding: '20px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <NavLink to="/admin" end className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <LayoutDashboard size={20} /> Vue d'ensemble
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Gestion Opérationnelle</div>
          
          <NavLink to="/admin/crm" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <Users size={20} /> Base Investisseurs (CRM)
          </NavLink>
          
          <NavLink to="/admin/guichet" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <FolderOpen size={20} /> Dossiers Guichet Unique
          </NavLink>

          <NavLink to="/admin/zes" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <Map size={20} /> Cadastre ZES
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#64748b', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contenus & Plateforme</div>

          <NavLink to="/admin/content" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <FileText size={20} /> Textes & Rapports
          </NavLink>

          <NavLink to="/admin/live-data" className={({ isActive }) => `admin-nav-link ${isActive ? 'active' : ''}`} style={navLinkStyle}>
            <Activity size={20} /> Indicateurs Live
          </NavLink>
        </div>

        <div style={{ padding: '20px', borderTop: '1px solid #334155' }}>
          <button onClick={() => navigate('/')} style={{ ...btnStyle, marginBottom: '10px', background: 'transparent', border: '1px solid #334155', color: '#94a3b8' }}>
            <ArrowLeft size={18} /> Retour au Front-Office
          </button>
          <button onClick={handleLogout} style={{ ...btnStyle, background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: 'none' }}>
            <LogOut size={18} /> Déconnexion
          </button>
        </div>
      </div>

      {/* Admin Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        <Outlet />
      </div>

      <style>{`
        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          border-radius: 8px;
          color: #cbd5e1;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .admin-nav-link:hover {
          background: rgba(255,255,255,0.05);
          color: white;
        }
        .admin-nav-link.active {
          background: var(--brand-blue);
          color: white;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

const navLinkStyle = {};
const btnStyle = {
  width: '100%',
  padding: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
};

export default AdminLayout;
