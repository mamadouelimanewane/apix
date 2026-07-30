import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Map as MapIcon, Calculator, FileText, Users, ArrowRight, TrendingUp, DollarSign, Building } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const dataIDE = [
  { year: '2019', value: 800 },
  { year: '2020', value: 850 },
  { year: '2021', value: 920 },
  { year: '2022', value: 1100 },
  { year: '2023', value: 1350 },
  { year: '2024', value: 1600 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const features = [
    { title: t('sidebar.copilot'), desc: 'Assistant juridique & fiscal 24/7.', icon: <MessageSquare size={24} />, path: '/copilot', color: 'var(--brand-blue)' },
    { title: 'Cartographie SIG', desc: 'Infrastructures et foncier interactif.', icon: <MapIcon size={24} />, path: '/map', color: 'var(--accent-primary)' },
    { title: t('sidebar.roi_simulator'), desc: 'Calcul de coûts et avantages fiscaux.', icon: <Calculator size={24} />, path: '/roi-simulator', color: 'var(--accent-secondary)' },
    { title: 'E-Guichet Unique', desc: 'Suivi des démarches de création.', icon: <FileText size={24} />, path: '/portal', color: 'var(--accent-tertiary)' },
    { title: t('sidebar.matchmaker'), desc: 'Trouver des partenaires locaux certifiés.', icon: <Users size={24} />, path: '/matchmaking', color: '#8b5cf6' }
  ];

  return (
    <div className="dashboard-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">{t('dashboard.title')}</h1>
          <p className="page-subtitle">{t('dashboard.subtitle')}</p>
        </div>
      </div>
      
      {/* KPI Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(0, 150, 57, 0.1)', borderRadius: '50%', color: 'var(--accent-primary)' }}>
            <TrendingUp size={32} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>{t('dashboard.kpi1_title')}</p>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>7.1%</h2>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(30, 58, 138, 0.1)', borderRadius: '50%', color: 'var(--brand-blue)' }}>
            <DollarSign size={32} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>{t('dashboard.kpi2_title')}</p>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>$1,600M</h2>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(227, 27, 35, 0.1)', borderRadius: '50%', color: 'var(--accent-secondary)' }}>
            <Building size={32} />
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>{t('dashboard.kpi3_title')}</p>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>+450</h2>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        {/* Chart Section */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>{t('dashboard.chart_title')}</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dataIDE}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* News Feed */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>{t('dashboard.news_title')}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ borderLeft: '3px solid var(--accent-primary)', paddingLeft: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('dashboard.news1_date')}</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{t('dashboard.news1_title')}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t('dashboard.news1_desc')}</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('dashboard.news2_date')}</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{t('dashboard.news2_title')}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t('dashboard.news2_desc')}</p>
            </div>
            <div style={{ borderLeft: '3px solid var(--accent-tertiary)', paddingLeft: '1rem' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t('dashboard.news3_date')}</p>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{t('dashboard.news3_title')}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{t('dashboard.news3_desc')}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{t('dashboard.services_title')}</h2>
      <div className="dashboard-grid" style={{ marginTop: 0 }}>
        {features.map((feature, index) => (
          <div key={index} className="card" onClick={() => navigate(feature.path)} style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.5rem'}}>
            <div className="feature-icon" style={{ color: feature.color, marginBottom: 0, width: '40px', height: '40px' }}>
              {feature.icon}
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0 }}>
                {feature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
