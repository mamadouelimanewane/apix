import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { Zap, Droplets, Users, Map as MapIcon, TrendingDown, TrendingUp, Globe, Briefcase, Activity } from 'lucide-react';

const EconomyData = () => {
  const electricityData = [
    { type: 'Basse Tension', prix: 90 },
    { type: 'Moyenne Tension', prix: 65 },
    { type: 'Haute Tension', prix: 55 },
  ];

  const inflationData = [
    { year: '2020', inflation: 2.5 },
    { year: '2021', inflation: 2.2 },
    { year: '2022', inflation: 9.7 },
    { year: '2023', inflation: 5.9 },
    { year: '2024', inflation: 3.1 },
  ];

  const gdpGrowthData = [
    { year: '2020', croissance: 1.3 },
    { year: '2021', croissance: 6.5 },
    { year: '2022', croissance: 4.2 },
    { year: '2023', croissance: 5.3 },
    { year: '2024', croissance: 7.1 },
    { year: '2025(P)', croissance: 10.1 },
  ];

  const sectorData = [
    { name: 'Tertiaire (Services)', value: 58 },
    { name: 'Secondaire (Industrie)', value: 24 },
    { name: 'Primaire (Agriculture)', value: 18 },
  ];
  const sectorColors = ['var(--brand-blue)', 'var(--accent-primary)', '#f59e0b'];

  const exportData = [
    { name: 'Or & Métaux', value: 35 },
    { name: 'Produits Pétroliers', value: 18 },
    { name: 'Produits de la mer', value: 15 },
    { name: 'Arachide & Dérivés', value: 12 },
    { name: 'Acide Phosphorique', value: 10 },
    { name: 'Autres', value: 10 },
  ];
  const exportColors = ['#fcd116', '#1e3a8a', '#3b82f6', '#009639', '#8b5cf6', '#94a3b8'];

  return (
    <div className="economy-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Économie & Facteurs de Production</h1>
          <p className="page-subtitle">Données macroéconomiques et coûts opérationnels au Sénégal.</p>
        </div>
      </div>

      {/* NOUVELLE SECTION : MACROECONOMIE */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Globe size={24} /> Panorama Macroéconomique
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #1e40af 100%)', color: 'white' }}>
          <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '4px' }}>PIB (2024)</p>
          <h3 style={{ fontSize: '1.8rem', margin: 0 }}>~ 31 Milliards USD</h3>
          <p style={{ opacity: 0.8, fontSize: '0.85rem', marginTop: '8px' }}>Une économie diversifiée et résiliente.</p>
        </div>
        <div className="card" style={{ background: 'var(--bg-secondary)', borderLeft: '4px solid var(--accent-primary)' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Démographie</p>
          <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)' }}>18 Millions d'hab.</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Âge médian : 19 ans (Main-d'œuvre jeune).</p>
        </div>
        <div className="card" style={{ background: 'var(--bg-secondary)', borderLeft: '4px solid #fcd116' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Perspective de Croissance (2025)</p>
          <h3 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--text-primary)' }}>+10.1% <TrendingUp size={20} color="#fcd116" /></h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '8px' }}>Boostée par l'exploitation pétrolière & gazière (GTA/Sangomar).</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        {/* Chart PIB */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--brand-blue)' }}>Croissance du PIB (Taux %)</h3>
          <div style={{ height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={gdpGrowthData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorCroissance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis />
                <RechartsTooltip />
                <Area type="monotone" dataKey="croissance" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorCroissance)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart Secteurs */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--brand-blue)' }}>Structure du PIB</h3>
          <div style={{ flex: 1, minHeight: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sectorData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value" labelLine={false}>
                  {sectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={sectorColors[index % sectorColors.length]} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => `${value}%`} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart Exportations */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '0.5rem', fontSize: '1.1rem', color: 'var(--brand-blue)' }}>Top Exportations</h3>
          <div style={{ flex: 1, minHeight: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={exportData} cx="50%" cy="50%" outerRadius={70} dataKey="value" labelLine={false}>
                  {exportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={exportColors[index % exportColors.length]} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '10px' }}>Le Sénégal diversifie ses exportations (Or, Pêche, Arachide, Pétrole).</p>
        </div>
      </div>

      {/* SECTION EXISTANTE : FACTEURS DE PRODUCTION */}
      <h2 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Activity size={24} /> Coûts des Facteurs de Production
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        
        {/* Électricité */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '10px', background: 'rgba(252, 209, 22, 0.2)', borderRadius: '8px', color: '#b39500' }}><Zap size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Électricité (SENELEC)</h3>
          </div>
          <div style={{ height: '200px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={electricityData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis dataKey="type" type="category" width={100} tick={{fontSize: 12}} />
                <RechartsTooltip formatter={(value) => `${value} FCFA / kWh`} />
                <Bar dataKey="prix" fill="#fcd116" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Eau */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '10px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '8px', color: 'var(--brand-blue-light)' }}><Droplets size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Eau Industrielle (SEN'EAU)</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Tranche 1 (0 - 20 m³)</span>
              <span style={{ fontWeight: 'bold' }}>202 FCFA / m³</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Tranche 2 (21 - 40 m³)</span>
              <span style={{ fontWeight: 'bold' }}>674 FCFA / m³</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Tranche 3 (&gt; 40 m³)</span>
              <span style={{ fontWeight: 'bold' }}>843 FCFA / m³</span>
            </div>
          </div>
        </div>

        {/* Main d'Oeuvre */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '10px', background: 'rgba(0, 150, 57, 0.2)', borderRadius: '8px', color: 'var(--accent-primary)' }}><Users size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Main d'Œuvre</h3>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>SMIG Horaire (Général)</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>333,90 FCFA <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/ heure</span></p>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '4px' }}>Salaire Moyen Ingénieur (Débutant)</p>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>350 000 - 500 000 FCFA <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>/ mois</span></p>
            </div>
          </div>
        </div>

        {/* Foncier */}
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <div style={{ padding: '10px', background: 'rgba(227, 27, 35, 0.2)', borderRadius: '8px', color: 'var(--accent-secondary)' }}><MapIcon size={24} /></div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Coût du Foncier Industriel</h3>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <tbody>
              <tr>
                <td style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>ZES Diamniadio</td>
                <td style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', textAlign: 'right', fontWeight: 'bold' }}>~10 000 FCFA / m² / an</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>ZES Sandiara</td>
                <td style={{ padding: '10px 0', borderBottom: '1px solid rgba(0,0,0,0.05)', textAlign: 'right', fontWeight: 'bold' }}>~5 000 FCFA / m² / an</td>
              </tr>
              <tr>
                <td style={{ padding: '10px 0' }}>Dakar (Hors ZES)</td>
                <td style={{ padding: '10px 0', textAlign: 'right', fontWeight: 'bold' }}>Prix de marché (Élevé)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)', fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Briefcase size={24} /> Stabilité Macro-Financière
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Inflation Chart */}
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Taux d'Inflation (Sénégal vs UEMOA)</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={inflationData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis unit="%" />
                <RechartsTooltip />
                <Legend />
                <Line type="monotone" dataKey="inflation" name="Sénégal" stroke="var(--brand-blue)" strokeWidth={3} dot={{ r: 6 }} />
                <Line type="monotone" dataKey={() => 3} name="Cible BCEAO (3%)" stroke="var(--accent-secondary)" strokeDasharray="5 5" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Currency & Ratings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Parité Monétaire (Fixe)</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '2rem', fontWeight: 'bold', color: 'var(--brand-blue)' }}>
              1 EUR = 655.957 XOF
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', textAlign: 'center' }}>Le Franc CFA (XOF) est arrimé à l'Euro, garantissant une absence de risque de change pour les investisseurs européens.</p>
          </div>

          <div className="card" style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>Notations Souveraines (2024)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <span>Moody's</span>
              <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>Ba3 <TrendingUp size={16} color="var(--accent-primary)"/></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
              <span>Standard & Poor's</span>
              <span style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '4px' }}>B+ <TrendingUp size={16} color="var(--accent-primary)"/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomyData;
