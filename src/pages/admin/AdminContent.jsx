import React from 'react';
import { FileText, Upload, Book, Trash2, Edit } from 'lucide-react';

const AdminContent = () => {
  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText color="var(--brand-blue)" /> Gestion des Contenus (CMS)
          </h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Ajoutez ou mettez à jour les textes de loi et les rapports macroéconomiques.</p>
        </div>
        <button style={{ background: 'var(--brand-blue)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Upload size={18} /> Uploader un Document
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Rapports Macro */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #334155', paddingBottom: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={20} color="#3b82f6" /> Rapports Macroéconomiques
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Sénégal 2050 - Note d\'Orientation', 'FMI - Rapport Pays 2026', 'Banque Mondiale - Perspectives 2025'].map((doc, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <div style={{ color: '#cbd5e1' }}>{doc}</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Edit size={16} /></button>
                  <button style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Textes Légaux */}
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <h3 style={{ margin: '0 0 20px 0', borderBottom: '1px solid #334155', paddingBottom: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Book size={20} color="#10b981" /> Textes Légaux & Fiscaux
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['Code des Investissements 2024', 'Loi sur les PPP', 'Code de l\'Environnement', 'Convention Collective'].map((doc, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px' }}>
                <div style={{ color: '#cbd5e1' }}>{doc}</div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer' }}><Edit size={16} /></button>
                  <button style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
