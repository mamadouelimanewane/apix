import React, { useState } from 'react';
import { FileText, Download, Briefcase, TrendingUp, Users, DownloadCloud } from 'lucide-react';

const BusinessPlanGenerator = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    projectName: '', sector: '', investment: '', jobs: ''
  });

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FileText size={32} color="var(--brand-blue)" /> Générateur de Business Plan
        </h1>
        <p className="page-subtitle">Générez automatiquement un document standard pour vos levées de fonds et banques locales.</p>
      </div>

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', marginBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
          {[1,2,3].map(i => (
            <div key={i} style={{ flex: 1, padding: '10px', textAlign: 'center', borderBottom: step === i ? '2px solid var(--accent-primary)' : 'none', color: step === i ? 'var(--brand-blue)' : 'var(--text-muted)', fontWeight: step === i ? 'bold' : 'normal' }}>
              Étape {i}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>Données du Projet</h3>
            <div className="form-group">
              <label className="form-label">Nom du Projet</label>
              <input type="text" className="form-control" value={data.projectName} onChange={e => setData({...data, projectName: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Secteur</label>
              <select className="form-control" value={data.sector} onChange={e => setData({...data, sector: e.target.value})}>
                <option value="">Sélectionnez un secteur...</option>
                <option value="Agro">Agro-industrie</option>
                <option value="Energie">Énergie</option>
                <option value="Tech">Technologies</option>
              </select>
            </div>
            <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={() => setStep(2)}>Suivant</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>Prévisions Financières</h3>
            <div className="form-group">
              <label className="form-label">Investissement Initial (FCFA)</label>
              <input type="number" className="form-control" value={data.investment} onChange={e => setData({...data, investment: e.target.value})} />
            </div>
            <div className="form-group">
              <label className="form-label">Emplois directs créés (Année 1)</label>
              <input type="number" className="form-control" value={data.jobs} onChange={e => setData({...data, jobs: e.target.value})} />
            </div>
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
              <button className="btn-secondary" onClick={() => setStep(1)}>Retour</button>
              <button className="btn-primary" onClick={() => setStep(3)}>Générer le document</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <FileText size={64} color="var(--brand-blue)" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1rem' }}>Business Plan Généré</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Le document intègre automatiquement les données macroéconomiques du Sénégal, les incitations fiscales prévues pour votre secteur, et vos projections.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <DownloadCloud size={18} /> Télécharger PDF
              </button>
              <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Download size={18} /> Format Word (.docx)
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessPlanGenerator;
