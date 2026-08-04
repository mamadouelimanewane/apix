import React from 'react';
import { FolderOpen, Check, X, Eye, Clock } from 'lucide-react';

const AdminGuichet = () => {
  const dossiers = [
    { id: 'DOS-2026-001', entreprise: 'TechVision SARL', type: 'Création SARL', soumisLe: '04 Août 2026', statut: 'En cours', etape: 'Analyse Juridique' },
    { id: 'DOS-2026-002', entreprise: 'AgroSen SA', type: 'Agrément ZES', soumisLe: '03 Août 2026', statut: 'En attente document', etape: 'Étude d\'impact env.' },
    { id: 'DOS-2026-003', entreprise: 'Global Logistics', type: 'Immatriculation NINEA', soumisLe: '02 Août 2026', statut: 'Validé', etape: 'Finalisé' },
    { id: 'DOS-2026-004', entreprise: 'SolarFarm', type: 'Création SA', soumisLe: '01 Août 2026', statut: 'En cours', etape: 'Validation Fiscale' },
  ];

  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FolderOpen color="var(--brand-blue)" /> Guichet Unique (Backoffice)
          </h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Traitement des dossiers de création d'entreprise et demandes d'agrément.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
        {dossiers.map((dossier, i) => (
          <div key={i} style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '50px', background: '#0f172a', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--brand-blue)' }}>
                {dossier.type.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <h3 style={{ margin: '0 0 5px 0', color: 'white' }}>{dossier.entreprise} <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 'normal' }}>({dossier.id})</span></h3>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <span><strong style={{ color: '#64748b' }}>Type:</strong> {dossier.type}</span>
                  <span><strong style={{ color: '#64748b' }}>Étape:</strong> {dossier.etape}</span>
                  <span><strong style={{ color: '#64748b' }}>Soumis le:</strong> {dossier.soumisLe}</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ 
                padding: '5px 10px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px',
                background: dossier.statut === 'Validé' ? 'rgba(16, 185, 129, 0.1)' : dossier.statut === 'En cours' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                color: dossier.statut === 'Validé' ? '#10b981' : dossier.statut === 'En cours' ? '#3b82f6' : '#f59e0b'
              }}>
                {dossier.statut === 'En cours' && <Clock size={14} />}
                {dossier.statut === 'Validé' && <Check size={14} />}
                {dossier.statut}
              </span>
              
              <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
                <button style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Eye size={16} /> Examiner
                </button>
                {dossier.statut !== 'Validé' && (
                  <>
                    <button style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}><Check size={16} /></button>
                    <button style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}><X size={16} /></button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGuichet;
