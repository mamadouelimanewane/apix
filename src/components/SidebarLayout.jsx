import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, Map as MapIcon, Calculator, FileText, Users, BookOpen, BarChart3, Landmark, Palmtree, MapPin, Route as RouteIcon, Briefcase, HeadphonesIcon, ShieldCheck, Lock, Layers, Award, Globe, DollarSign, Menu, X, Network, Database, LogOut, Newspaper, Building2, Truck, View, Leaf, Calendar, Bot, Hexagon, Satellite, Factory, TrendingUp, Maximize, Minimize, Scale, Shield, ClipboardCheck, Gavel, LineChart, Presentation, Activity, BatteryCharging } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth, ROLES } from '../context/AuthContext';

const SidebarLayout = () => {
  const { t, language, setLanguage } = useLanguage();
  const { email, role, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [toast, setToast] = useState(null);
  const location = useLocation();
  const initials = (email || 'AP').slice(0, 2).toUpperCase();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Fake Live Notifications
  useEffect(() => {
    const notifications = [
      "🟢 Nouvel investisseur connecté depuis Dubaï (Émirats Arabes Unis).",
      "📝 Convention de financement #459 validée sur la Blockchain.",
      "🚢 Conteneur MAEU8930 dédouané au Port Autonome de Dakar (Gaindé 2000)."
    ];
    let count = 0;
    
    const interval = setInterval(() => {
      setToast(notifications[count % notifications.length]);
      count++;
      
      setTimeout(() => {
        setToast(null);
      }, 5000);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Toast Notification */}
      {toast && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '12px 24px', borderRadius: '8px', zIndex: 9999, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)', animation: 'slideUp 0.3s ease', borderLeft: '4px solid #10b981' }}>
          {toast}
        </div>
      )}

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
          <NavLink to="/portal" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            <LayoutDashboard size={20} />
            <span>Hub Investisseur</span>
          </NavLink>

          <NavLink to="/dashboard" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <LayoutDashboard size={20} />
            <span>{t('sidebar.dashboard')}</span>
          </NavLink>

          <NavLink to="/portail-bureau" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Landmark size={20} />
            <span>Bureau Exécutif</span>
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

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>DeepTech & Innovation Ultime</div>

          <NavLink to="/live-data" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Activity size={20} color="#ef4444" />
            <span style={{ color: '#ef4444', fontWeight: 'bold' }}>APIX Live (Temps Réel)</span>
          </NavLink>

          <NavLink to="/zes-explorer" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Satellite size={20} />
            <span>Cadastre ZES Interactif</span>
          </NavLink>

          <NavLink to="/pitch-deck" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Presentation size={20} />
            <span>Pitch Deck IA</span>
          </NavLink>

          <NavLink to="/carbon-simulator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <BatteryCharging size={20} />
            <span>Simulateur ESG & Carbone</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Facilitation & Info</div>
          
          <NavLink to="/macro-reports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <BarChart3 size={20} />
            <span>Rapports Macro (FMI/BM)</span>
          </NavLink>

          <NavLink to="/factor-costs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <LineChart size={20} />
            <span>Coûts des Facteurs</span>
          </NavLink>

          <NavLink to="/guichet-unique" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Building2 size={20} />
            <span>E-Procédures (Guichet)</span>
          </NavLink>

          <NavLink to="/tracking" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Truck size={20} />
            <span>Suivi Douanier</span>
          </NavLink>

          <NavLink to="/business-plan" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <FileText size={20} />
            <span>Business Plan</span>
          </NavLink>

          <NavLink to="/virtual-tours" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <View size={20} />
            <span>Visites 360° ZES</span>
          </NavLink>

          <NavLink to="/funding" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <DollarSign size={20} />
            <span>Financements</span>
          </NavLink>

          <NavLink to="/esg-tracker" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Leaf size={20} />
            <span>Impact ESG</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Accompagnement</div>

          <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Calendar size={20} />
            <span>Communauté & Events</span>
          </NavLink>

          <NavLink to="/culture" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <BookOpen size={20} />
            <span>Guide Culturel</span>
          </NavLink>

          <NavLink to="/jobs" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Briefcase size={20} />
            <span>Bourse de l'Emploi</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#f59e0b', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Innovation & DeepTech</div>

          <NavLink to="/deal-room-investisseur" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#60a5fa' }}>
            <TrendingUp size={20} />
            <span>Smart Deal Room</span>
          </NavLink>

          <NavLink to="/ai-avatar" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#38bdf8' }}>
            <Bot size={20} />
            <span>Concierge IA 3D</span>
          </NavLink>

          <NavLink to="/smart-contracts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#8b5cf6' }}>
            <Hexagon size={20} />
            <span>Smart Contracts</span>
          </NavLink>

          <NavLink to="/satellite" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#0284c7' }}>
            <Satellite size={20} />
            <span>APIX Earth (Satellite)</span>
          </NavLink>

          <NavLink to="/brownfield" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} style={({isActive}) => isActive ? {} : { color: '#f97316' }}>
            <Factory size={20} />
            <span>Actifs Industriels</span>
          </NavLink>

          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#10b981', marginTop: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Pôle Juridique & Fiscal</div>

          <NavLink to="/legal-library" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Scale size={20} />
            <span>Codes & OHADA</span>
          </NavLink>

          <NavLink to="/tax-incentives" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <ShieldCheck size={20} />
            <span>Simulateur Fiscal</span>
          </NavLink>

          <NavLink to="/compliance" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <ClipboardCheck size={20} />
            <span>Audit Conformité</span>
          </NavLink>

          <NavLink to="/legal-avatar" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Gavel size={20} />
            <span>Avocat Conseil IA</span>
          </NavLink>

          {role === ROLES.AGENT && (
            <div style={{ marginTop: '2rem', padding: '10px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <NavLink to="/admin" className="nav-link" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', fontWeight: 'bold' }}>
                <Shield size={20} />
                <span>Backoffice APIX</span>
              </NavLink>
            </div>
          )}

        </nav>
      </aside>
      <div className="main-content" style={{ padding: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Confidential Banner */}
        <div style={{ background: '#ef4444', color: 'white', padding: '6px', textAlign: 'center', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', overflow: 'hidden' }}>
          <marquee scrollamount="6">⚠️ PROTOTYPE CONFIDENTIEL - Réservé à l'usage exclusif de la Direction Générale de l'APIX et du Gouvernement. Ne pas distribuer.</marquee>
        </div>
        {/* TOPBAR INTERNATIONALE */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: 'white', borderBottom: '1px solid rgba(0,0,0,0.05)', height: '70px', flexShrink: 0 }}>
          
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

            <button onClick={toggleFullscreen} style={{ background: 'var(--bg-tertiary)', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%' }}>
              {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
            </button>

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

        <div className="main-content-scroll" style={{ padding: '2rem', flex: 1, overflowY: 'auto' }}>
          <div key={location.pathname} className="page-fade-in" style={{ height: '100%' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
