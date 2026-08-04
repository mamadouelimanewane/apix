import React, { useState, useEffect } from 'react';
import { Activity, Clock, Building, FileCheck, TrendingUp, Users, RefreshCw } from 'lucide-react';

const LiveTransparency = () => {
  const [data, setData] = useState({
    companiesCreated: 14,
    avgDelay: '24h',
    investments: 450,
    filesProcessing: 8
  });

  // Simuler des mises à jour en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        companiesCreated: prev.companiesCreated + (Math.random() > 0.7 ? 1 : 0),
        investments: prev.investments + (Math.random() > 0.8 ? 5 : 0),
        filesProcessing: prev.filesProcessing + (Math.random() > 0.5 ? (Math.random() > 0.5 ? 1 : -1) : 0)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container page-fade-in" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Activity size={32} color="#ef4444" /> Live Data APIX
          </h1>
          <p className="page-subtitle">Transparence absolue : Suivez l'activité de l'Agence et du Guichet Unique en temps réel.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '8px 15px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', animation: 'pulse 2s infinite' }}></div>
          En Direct
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px' }}>
        {/* KPI 1 */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Building size={30} color="#10b981" />
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{data.companiesCreated}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>Entreprises créées (Aujourd'hui)</div>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={30} color="#3b82f6" />
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{data.avgDelay}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>Délai moyen de création</div>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileCheck size={30} color="#f59e0b" />
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{Math.max(0, data.filesProcessing)}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>Dossiers ZES en traitement</div>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <TrendingUp size={30} color="#8b5cf6" />
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)', lineHeight: 1 }}>{data.investments}</div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '5px' }}>Milliards FCFA captés (Mois)</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1 }}>
        <div className="card" style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 20px 0', color: 'var(--text-primary)' }}>Activité Récente</h3>
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', paddingRight: '10px' }}>
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: 'var(--bg-tertiary)', borderRadius: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  <RefreshCw size={20} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 'bold', fontSize: '0.95rem' }}>Dossier d'agrément ZES validé</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Secteur : Agro-industrie</div>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  Il y a {i * 12 + Math.floor(Math.random() * 10)} min
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ flex: 1, background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
          <Users size={64} color="var(--brand-blue)" style={{ marginBottom: '20px' }} />
          <h2 style={{ color: 'white', fontSize: '1.8rem', margin: '0 0 10px 0' }}>Engagement Qualité</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', margin: '0 0 20px 0', lineHeight: 1.5 }}>
            L'APIX s'engage à traiter vos demandes de création d'entreprise en moins de 24 heures et vos demandes d'agrément en moins de 15 jours.
          </p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '30px', color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>
            Certifié ISO 9001
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTransparency;
