import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Map as MapIcon, Calculator, FileText, Users, BookOpen, BarChart3, Landmark, Palmtree, MapPin, Route as RouteIcon, Briefcase, HeadphonesIcon, ShieldCheck, Lock, Layers, Award, Globe, DollarSign, Menu, X, Network, Database, LogOut, Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth, ROLES } from '../context/AuthContext';

const SidebarLayout = () => {
  const { t, language, setLanguage } = useLanguage();
  const { email, role, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const initials = (email || 'AP').slice(0, 2).toUpperCase();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-container">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-logo" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>APIX <span>Invest</span></div>
          <button className="mobile-only" onClick={() => setIsMobileMenuOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>{t('sidebar.dashboard')}</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t('sidebar.discover_apix')}</div>
          <NavLink to="/track-record" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Award size={20} />
            <span>{t('sidebar.track_record')}</span>
          </NavLink>
          <NavLink to="/roi-simulator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Calculator size={20} />
            <span>{t('sidebar.roi_simulator')}</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t('sidebar.direction')}</div>
          <NavLink to="/executive" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: 'var(--accent-primary)' }}>
            <ShieldCheck size={20} />
            <span>{t('sidebar.executive_board')}</span>
          </NavLink>
          <NavLink to="/deal-room" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#fcd34d' }}>
            <Lock size={20} />
            <span>{t('sidebar.smart_deal_room')}</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{t('sidebar.tools_services')}</div>
          
          <NavLink to="/digital-twin" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Layers size={20} />
            <span>{t('sidebar.digital_twin')}</span>
          </NavLink>
          
          <NavLink to="/roadmap" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <RouteIcon size={20} />
            <span>{t('sidebar.roadmap')}</span>
          </NavLink>
          
          <NavLink to="/matchmaking" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Briefcase size={20} />
            <span>{t('sidebar.matchmaker')}</span>
          </NavLink>
          
          <NavLink to="/copilot" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <MessageSquare size={20} />
            <span>{t('sidebar.copilot')}</span>
          </NavLink>
          
          <NavLink to="/regulatory" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <BookOpen size={20} />
            <span>{t('sidebar.hub')}</span>
          </NavLink>

          <NavLink to="/interoperability" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Network size={20} />
            <span>{t('sidebar.interoperability')}</span>
          </NavLink>

          <NavLink to="/open-data" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Database size={20} />
            <span>{t('sidebar.open_data')}</span>
          </NavLink>

          <NavLink to="/newsletter" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Newspaper size={20} />
            <span>{t('sidebar.newsletter')}</span>
          </NavLink>
        </nav>
      </aside>
      <div className="main-content" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* TOPBAR INTERNATIONALE */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)', height: '70px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            {/* On Desktop, this area is empty or for future breadcrumbs */}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-tertiary)', padding: '6px 12px', borderRadius: '20px' }}>
              <DollarSign size={16} color="var(--brand-blue)" />
              <select style={{ background: 'transparent', border: 'none', outline: 'none', fontWeight: 'bold', color: 'var(--text-primary)', cursor: 'pointer' }}>
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>XOF (FCFA)</option>
              </select>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-tertiary)', padding: '6px 12px', borderRadius: '20px' }}>
              <Globe size={16} color="var(--brand-blue)" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ background: 'transparent', border: 'none', outline: 'none', fontWeight: 'bold', color: 'var(--text-primary)', cursor: 'pointer' }}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
                <option value="zh">ZH</option>
              </select>
            </div>

            <div style={{ position: 'relative' }}>
              <div
                onClick={() => setIsUserMenuOpen(prev => !prev)}
                style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
              >
                {initials}
              </div>
              {isUserMenuOpen && (
                <div style={{ position: 'absolute', top: '50px', right: 0, background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: '1rem', width: '240px', zIndex: 200 }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 4px 0', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{email}</p>
                  <p style={{ margin: '0 0 1rem 0', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{ROLES[role]?.label}</p>
                  <button onClick={logout} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)', fontSize: '0.9rem', fontWeight: '600' }}>
                    <LogOut size={16} /> Se déconnecter
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="main-content-scroll" style={{ padding: '2rem', height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
