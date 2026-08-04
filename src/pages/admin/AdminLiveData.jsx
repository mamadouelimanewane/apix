import React, { useState } from 'react';
import { Activity, Save, RefreshCw } from 'lucide-react';

const AdminLiveData = () => {
  const [data, setData] = useState({
    companiesCreated: 14,
    avgDelay: 24,
    investments: 450,
    filesProcessing: 8
  });

  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 1000);
  };

  return (
    <div className="page-fade-in">
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Activity color="#ef4444" /> Contrôle APIX Live
          </h1>
          <p style={{ color: '#94a3b8', margin: '5px 0 0 0' }}>Ajustez manuellement les données projetées sur le tableau de bord de transparence public.</p>
        </div>
        <button onClick={handleSave} disabled={saving} style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {saving ? <RefreshCw size={18} className="spin" /> : <Save size={18} />}
          {saving ? 'Sauvegarde...' : 'Publier les modifications'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <label style={{ display: 'block', color: '#94a3b8', marginBottom: '10px' }}>Entreprises Créées (Aujourd'hui)</label>
          <input 
            type="number" 
            value={data.companiesCreated}
            onChange={(e) => setData({...data, companiesCreated: parseInt(e.target.value)})}
            style={{ width: '100%', padding: '15px', background: '#0f172a', border: '1px solid #334155', color: 'white', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}
          />
          <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '5px' }}>* Ce nombre s'incrémente automatiquement via l'API Orbus, modifiez-le uniquement en cas d'erreur système.</p>
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <label style={{ display: 'block', color: '#94a3b8', marginBottom: '10px' }}>Délai Moyen (Heures)</label>
          <input 
            type="number" 
            value={data.avgDelay}
            onChange={(e) => setData({...data, avgDelay: parseInt(e.target.value)})}
            style={{ width: '100%', padding: '15px', background: '#0f172a', border: '1px solid #334155', color: 'white', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}
          />
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <label style={{ display: 'block', color: '#94a3b8', marginBottom: '10px' }}>Flux IDE Mensuel (Milliards FCFA)</label>
          <input 
            type="number" 
            value={data.investments}
            onChange={(e) => setData({...data, investments: parseInt(e.target.value)})}
            style={{ width: '100%', padding: '15px', background: '#0f172a', border: '1px solid #334155', color: 'white', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}
          />
        </div>

        <div style={{ background: '#1e293b', padding: '20px', borderRadius: '12px', border: '1px solid #334155' }}>
          <label style={{ display: 'block', color: '#94a3b8', marginBottom: '10px' }}>Dossiers ZES en traitement</label>
          <input 
            type="number" 
            value={data.filesProcessing}
            onChange={(e) => setData({...data, filesProcessing: parseInt(e.target.value)})}
            style={{ width: '100%', padding: '15px', background: '#0f172a', border: '1px solid #334155', color: 'white', borderRadius: '8px', fontSize: '1.2rem', fontWeight: 'bold' }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLiveData;
