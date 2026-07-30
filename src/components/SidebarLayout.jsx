import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Map as MapIcon, Calculator, FileText, Users, BookOpen, BarChart3, Landmark, Palmtree, MapPin, Route as RouteIcon, Briefcase, HeadphonesIcon, ShieldCheck, Lock, Layers, Award, Globe, DollarSign } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SidebarLayout = () => {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-logo">
          APIX <span>Invest</span>
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
        </nav>
      </aside>
      <div className="main-content" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* TOPBAR INTERNATIONALE */}
        <header style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem', padding: '1rem 2rem', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)', height: '70px' }}>
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
              <option value="fr">Français (FR)</option>
              <option value="en">English (EN)</option>
              <option value="ar">العربية (AR)</option>
              <option value="zh">中文 (ZH)</option>
            </select>
          </div>

          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            DG
          </div>
        </header>

        <div style={{ padding: '2rem', height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
