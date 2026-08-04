import React, { useState } from 'react';
import { TrendingUp, Activity, BarChart, Globe, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const WarRoom = () => {
  const [investment, setInvestment] = useState(50); // en Millions d'Euros

  // Fake predictive data based on the slider
  const generateData = (baseInv) => {
    return [
      { year: '2026', fdi: 2.1, gdpGrowth: 5.2 },
      { year: '2027', fdi: 2.1 + (baseInv * 0.01), gdpGrowth: 5.2 + (baseInv * 0.005) },
      { year: '2028', fdi: 2.3 + (baseInv * 0.015), gdpGrowth: 5.8 + (baseInv * 0.008) },
      { year: '2029', fdi: 2.6 + (baseInv * 0.02), gdpGrowth: 6.4 + (baseInv * 0.01) },
      { year: '2030', fdi: 3.1 + (baseInv * 0.03), gdpGrowth: 7.1 + (baseInv * 0.015) },
    ];
  };

  const data = generateData(investment);
  
  const indirectJobs = Math.floor(investment * 14.5);
  const taxRevenue = (investment * 0.18).toFixed(1);

  return (
    <div className="page-container" style={{ background: '#0a0f1c', color: 'white', minHeight: '100%', borderRadius: '12px', padding: '2rem' }}>
      <div style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem', margin: 0, color: '#60a5fa' }}>
          <Activity size={36} color="#60a5fa" /> APIX War Room : Observatoire Prédictif
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '0.5rem' }}>Simulateur d'impact macro-économique propulsé par l'IA.</p>
      </div>

      <div className="responsive-grid responsive-grid-3" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Simulation d'Investissement IDE</h3>
          <div style={{ margin: '1.5rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>{investment} M €</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="500" 
              value={investment} 
              onChange={(e) => setInvestment(Number(e.target.value))}
              style={{ width: '100%', accentColor: '#60a5fa' }}
            />
          </div>
          <p style={{ fontSize: '0.8rem', color: '#60a5fa' }}>Ajustez le curseur pour voir l'impact à 5 ans.</p>
        </div>

        <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '4px solid #10b981' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Impact Emplois (Indirects)</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '1rem' }}>
            <UsersIcon size={40} color="#10b981" />
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>+{indirectJobs}</div>
              <div style={{ color: '#10b981', fontSize: '0.85rem' }}>Emplois créés à horizon 2030</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '4px solid #f59e0b' }}>
          <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase' }}>Recettes Fiscales Générées</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '1rem' }}>
            <TrendingUp size={40} color="#f59e0b" />
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>+{taxRevenue} M €</div>
              <div style={{ color: '#f59e0b', fontSize: '0.85rem' }}>TVA & IS cumulés sur 5 ans</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
        <h3 style={{ color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BarChart size={20} color="#60a5fa" /> Projection de la Croissance du PIB (%)
        </h3>
        <div style={{ height: '350px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorGdp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[4, 10]} />
              <Tooltip contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px', color: 'white' }} />
              <Area type="monotone" dataKey="gdpGrowth" stroke="#60a5fa" fillOpacity={1} fill="url(#colorGdp)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const UsersIcon = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

export default WarRoom;
