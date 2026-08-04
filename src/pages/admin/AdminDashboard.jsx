import React from 'react';
import { Users, FileText, CheckCircle, AlertTriangle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>Vue d'ensemble</h1>
        <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Bienvenue dans l'espace d'administration APIX. Voici l'état du système.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '2rem' }}>
        <StatCard icon={<Users />} title="Nouveaux Investisseurs" value="24" trend="+12% cette semaine" trendUp={true} color="#3b82f6" />
        <StatCard icon={<FileText />} title="Dossiers en attente" value="8" trend="-3 depuis hier" trendUp={true} color="#f59e0b" />
        <StatCard icon={<CheckCircle />} title="Agréments délivrés" value="142" trend="+18% (Mensuel)" trendUp={true} color="#10b981" />
        <StatCard icon={<AlertTriangle />} title="Alertes Conformité" value="2" trend="À traiter urgemment" trendUp={false} color="#ef4444" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>Dernières Inscriptions</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                <th style={{ paddingBottom: '10px' }}>Entreprise</th>
                <th style={{ paddingBottom: '10px' }}>Secteur</th>
                <th style={{ paddingBottom: '10px' }}>Date</th>
                <th style={{ paddingBottom: '10px' }}>Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'TechVision SARL', sector: 'Numérique', date: 'Aujourd\'hui', status: 'Vérifié' },
                { name: 'AgroSen SA', sector: 'Agro-industrie', date: 'Hier', status: 'En attente' },
                { name: 'Global Logistics', sector: 'Logistique', date: 'Il y a 2 jours', status: 'Vérifié' },
              ].map((item, i) => (
                <tr key={i} style={{ borderTop: '1px solid #334155' }}>
                  <td style={{ padding: '15px 0', fontWeight: '500' }}>{item.name}</td>
                  <td style={{ padding: '15px 0', color: '#94a3b8' }}>{item.sector}</td>
                  <td style={{ padding: '15px 0', color: '#94a3b8' }}>{item.date}</td>
                  <td style={{ padding: '15px 0' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem',
                      background: item.status === 'Vérifié' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                      color: item.status === 'Vérifié' ? '#10b981' : '#f59e0b'
                    }}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #334155', paddingBottom: '15px' }}>Tâches Rapides</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button className="admin-btn-outline">Valider les agréments (8)</button>
            <button className="admin-btn-outline">Mettre à jour rapports FMI</button>
            <button className="admin-btn-outline">Libérer parcelles ZES</button>
            <button className="admin-btn-outline" style={{ borderColor: '#ef4444', color: '#ef4444' }}>Forcer rafraîchissement Live</button>
          </div>
        </div>
      </div>

      <style>{`
        .admin-btn-outline {
          background: transparent;
          border: 1px solid #334155;
          color: #cbd5e1;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
        }
        .admin-btn-outline:hover {
          background: rgba(255,255,255,0.05);
          border-color: var(--brand-blue);
        }
      `}</style>
    </div>
  );
};

const StatCard = ({ icon, title, value, trend, trendUp, color }) => (
  <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: `${color}20`, color: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
    </div>
    <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '5px' }}>{value}</div>
    <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '10px' }}>{title}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.85rem', color: trendUp ? '#10b981' : '#ef4444' }}>
      {trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend}
    </div>
  </div>
);

export default AdminDashboard;
