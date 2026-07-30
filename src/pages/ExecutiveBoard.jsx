import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, ShieldCheck, Target, Activity, Users, FileText, ArrowUpRight, ArrowDownRight, Briefcase } from 'lucide-react';

const ExecutiveBoard = () => {
  // Données fictives pour le Command Center
  const fdiPipeline = [
    { month: 'Jan', 'Investissements Confirmés': 120, 'En Négociation': 300 },
    { month: 'Fév', 'Investissements Confirmés': 150, 'En Négociation': 280 },
    { month: 'Mar', 'Investissements Confirmés': 180, 'En Négociation': 320 },
    { month: 'Avr', 'Investissements Confirmés': 250, 'En Négociation': 450 },
    { month: 'Mai', 'Investissements Confirmés': 300, 'En Négociation': 500 },
    { month: 'Juin', 'Investissements Confirmés': 420, 'En Négociation': 600 },
  ];

  const sectorTrends = [
    { name: 'Pétrole & Gaz', value: 35 },
    { name: 'Agro-Industrie', value: 25 },
    { name: 'Numérique (BPO)', value: 20 },
    { name: 'Tourisme', value: 15 },
    { name: 'Autres', value: 5 },
  ];
  const COLORS = ['#F29400', '#009639', '#3b82f6', '#e31b23', '#94a3b8'];

  const recentDeals = [
    { company: 'Global Logistics LLC', sector: 'ZES Diass', amount: '45M USD', status: 'Closing imminent', probability: 95 },
    { company: 'AgriTech Europe', sector: 'Agropole Nord', amount: '12M USD', status: 'Phase d\'étude', probability: 60 },
    { company: 'DP World (Extension)', sector: 'Port Ndayane', amount: '300M USD', status: 'MoU Signé', probability: 100 },
    { company: 'Nexus Data Centers', sector: 'PTN Diamniadio', amount: '80M USD', status: 'Recherche Foncier', probability: 75 },
  ];

  return (
    <div className="executive-page" style={{ background: '#0f172a', minHeight: 'calc(100vh - 4rem)', padding: '2rem', color: 'white', borderRadius: '12px' }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
            <ShieldCheck size={36} color="var(--accent-primary)" />
            <h1 style={{ fontSize: '2rem', margin: 0, fontWeight: '700', letterSpacing: '-0.5px' }}>Executive Command Center</h1>
          </div>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '1.1rem' }}>Accès Direction Générale APIX - Vue consolidée du pipeline FDI et intelligence économique.</p>
        </div>
        <div style={{ background: 'rgba(242, 148, 0, 0.1)', border: '1px solid var(--accent-primary)', padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></div>
          <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>LIVE DATA FEED</span>
        </div>
      </div>

      {/* TOP KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
        
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 'bold' }}>FDI Confirmé (YTD)</span>
            <Target size={20} color="var(--accent-primary)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1.42 Md$</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#22c55e', fontSize: '0.9rem' }}>
            <ArrowUpRight size={16} /> <span>+18% vs N-1</span>
          </div>
        </div>

        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Pipeline en Négociation</span>
            <Activity size={20} color="#3b82f6" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2.15 Md$</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#22c55e', fontSize: '0.9rem' }}>
            <ArrowUpRight size={16} /> <span>+5% ce mois-ci</span>
          </div>
        </div>

        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Dossiers E-Guichet Actifs</span>
            <FileText size={20} color="var(--brand-blue-light)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>842</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#ef4444', fontSize: '0.9rem' }}>
            <ArrowDownRight size={16} /> <span>-12h temps de trait.</span>
          </div>
        </div>

        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94a3b8', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.9rem', textTransform: 'uppercase', fontWeight: 'bold' }}>Emplois Projetés</span>
            <Users size={20} color="#a855f7" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>12,450</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#22c55e', fontSize: '0.9rem' }}>
            <ArrowUpRight size={16} /> <span>+2,100 liés au Contenu Local</span>
          </div>
        </div>
      </div>

      {/* CHARTS SECTION */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
        
        {/* FDI Evolution Chart */}
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', fontSize: '1.1rem', color: '#cbd5e1' }}>Évolution du Pipeline d'Investissements (Millions USD)</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={fdiPipeline} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorConfirm" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorNego" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }} itemStyle={{ color: 'white' }} />
                <Legend />
                <Area type="monotone" dataKey="En Négociation" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNego)" />
                <Area type="monotone" dataKey="Investissements Confirmés" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorConfirm)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AI Sector Prediction */}
        <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: '#cbd5e1' }}>Tendances Sectorielles (IA)</h3>
          <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.85rem', color: '#94a3b8' }}>Basé sur l'analyse NLP des requêtes Copilot.</p>
          <div style={{ flex: 1, minHeight: '220px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorTrends}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {sectorTrends.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: 'white' }} itemStyle={{ color: 'white' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            {sectorTrends.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#cbd5e1' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: COLORS[i] }}></span>
                {item.name} ({item.value}%)
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* DEAL ROOM PIPELINE */}
      <div style={{ background: '#1e293b', padding: '1.5rem', borderRadius: '12px', border: '1px solid #334155' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={20} color="var(--brand-blue-light)" /> Smart Deal Room (Transactions en cours)
          </h3>
          <button style={{ background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
            Ouvrir la Data Room
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #334155', color: '#94a3b8', fontSize: '0.9rem' }}>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Investisseur (Prospect)</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Zone / Projet</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Montant Estimé</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Statut Legal</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Probabilité de Closing</th>
            </tr>
          </thead>
          <tbody>
            {recentDeals.map((deal, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '16px', fontWeight: '600' }}>{deal.company}</td>
                <td style={{ padding: '16px', color: '#94a3b8' }}>{deal.sector}</td>
                <td style={{ padding: '16px', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{deal.amount}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                    {deal.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ flex: 1, background: '#334155', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${deal.probability}%`, background: deal.probability > 80 ? 'var(--accent-primary)' : '#f59e0b', height: '100%' }}></div>
                    </div>
                    <span style={{ fontSize: '0.85rem', width: '35px' }}>{deal.probability}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ExecutiveBoard;
