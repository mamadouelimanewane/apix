import React from 'react';
import { Users, Search, Filter, MoreVertical, Mail, Phone } from 'lucide-react';

const AdminCRM = () => {
  const investors = [
    { id: 'INV-1029', name: 'Jean Dupont', company: 'AgriTech Europe', sector: 'Agro-industrie', country: 'France', status: 'Actif', lastLogin: 'Il y a 2h' },
    { id: 'INV-1030', name: 'Fatou Sow', company: 'Digital Hub SN', sector: 'Numérique', country: 'Sénégal', status: 'Actif', lastLogin: 'Aujourd\'hui' },
    { id: 'INV-1031', name: 'Michael Chen', company: 'Global Logistics', sector: 'Logistique', country: 'Chine', status: 'Inactif', lastLogin: 'Il y a 5 jours' },
    { id: 'INV-1032', name: 'Sarah Connor', company: 'Nexus Data', sector: 'Numérique', country: 'USA', status: 'Nouveau', lastLogin: 'Il y a 10 min' },
  ];

  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Users color="var(--brand-blue)" /> CRM Investisseurs
          </h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Gérez la base de données des investisseurs inscrits sur la plateforme.</p>
        </div>
        <button style={{ background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          + Ajouter un Investisseur
        </button>
      </div>

      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text" 
              placeholder="Rechercher par nom, entreprise, ID..." 
              style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: 'white' }}
            />
          </div>
          <button style={{ padding: '0 20px', display: 'flex', alignItems: 'center', gap: '10px', background: '#0f172a', border: '1px solid #334155', color: '#cbd5e1', borderRadius: '8px', cursor: 'pointer' }}>
            <Filter size={18} /> Filtrer
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#94a3b8', fontSize: '0.9rem', borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>ID</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Investisseur / Entreprise</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Secteur</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Pays</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Statut</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {investors.map((inv, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '16px', color: '#94a3b8', fontSize: '0.9rem' }}>{inv.id}</td>
                <td style={{ padding: '16px' }}>
                  <div style={{ fontWeight: '500', color: 'white' }}>{inv.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{inv.company}</div>
                </td>
                <td style={{ padding: '16px', color: '#cbd5e1' }}>{inv.sector}</td>
                <td style={{ padding: '16px', color: '#cbd5e1' }}>{inv.country}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '0.8rem',
                    background: inv.status === 'Actif' ? 'rgba(16, 185, 129, 0.1)' : inv.status === 'Nouveau' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(148, 163, 184, 0.1)',
                    color: inv.status === 'Actif' ? '#10b981' : inv.status === 'Nouveau' ? '#3b82f6' : '#94a3b8'
                  }}>
                    {inv.status}
                  </span>
                </td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Mail size={18} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Phone size={18} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><MoreVertical size={18} /></button>
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

export default AdminCRM;
