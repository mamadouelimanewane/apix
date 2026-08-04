import React from 'react';
import { Map, Edit2, Trash2, Plus } from 'lucide-react';

const AdminZes = () => {
  const parcels = [
    { id: 'D-01', zes: 'ZES de Diass', size: '10 000 m²', status: 'Disponible', price: '500 FCFA/m²/an', company: '-' },
    { id: 'D-02', zes: 'ZES de Diass', size: '5 000 m²', status: 'Réservé', price: '500 FCFA/m²/an', company: 'Global Logistics LLC' },
    { id: 'S-14', zes: 'ZES de Sandiara', size: '15 000 m²', status: 'Disponible', price: '400 FCFA/m²/an', company: '-' },
    { id: 'DIA-08', zes: 'ZES de Diamniadio', size: '2 000 m²', status: 'Occupé', price: '800 FCFA/m²/an', company: 'Nexus Data Centers' },
  ];

  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Map color="var(--brand-blue)" /> Gestion du Cadastre ZES
          </h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Administrez les parcelles industrielles (ajouts, modifications de statut, attributions).</p>
        </div>
        <button style={{ background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Plus size={18} /> Nouvelle Parcelle
        </button>
      </div>

      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ color: '#94a3b8', fontSize: '0.9rem', borderBottom: '1px solid #334155' }}>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>ID Parcelle</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>ZES</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Superficie</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Prix</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Statut</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Attribution</th>
              <th style={{ padding: '12px 16px', fontWeight: '500' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((p, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #334155' }}>
                <td style={{ padding: '16px', fontWeight: 'bold', color: 'white' }}>{p.id}</td>
                <td style={{ padding: '16px', color: '#cbd5e1' }}>{p.zes}</td>
                <td style={{ padding: '16px', color: '#cbd5e1' }}>{p.size}</td>
                <td style={{ padding: '16px', color: '#cbd5e1' }}>{p.price}</td>
                <td style={{ padding: '16px' }}>
                  <select 
                    defaultValue={p.status}
                    style={{ 
                      padding: '5px 10px', 
                      borderRadius: '4px', 
                      border: '1px solid #334155',
                      background: p.status === 'Disponible' ? 'rgba(16, 185, 129, 0.1)' : p.status === 'Réservé' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                      color: p.status === 'Disponible' ? '#10b981' : p.status === 'Réservé' ? '#f59e0b' : '#ef4444',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="Disponible" style={{ background: '#0f172a', color: 'white' }}>Disponible</option>
                    <option value="Réservé" style={{ background: '#0f172a', color: 'white' }}>Réservé</option>
                    <option value="Occupé" style={{ background: '#0f172a', color: 'white' }}>Occupé</option>
                  </select>
                </td>
                <td style={{ padding: '16px', color: p.company !== '-' ? 'var(--brand-blue-light)' : '#64748b' }}>{p.company}</td>
                <td style={{ padding: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: '#3b82f6', cursor: 'pointer' }}><Edit2 size={18} /></button>
                    <button style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={18} /></button>
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

export default AdminZes;
