import React, { useState } from 'react';
import { Search, DollarSign, Filter, ExternalLink, Leaf } from 'lucide-react';

const FundingFinder = () => {
  const funds = [
    { name: 'FONSIS - Fonds Vert', type: 'Prêt & Capital', target: 'Énergies Renouvelables', amount: 'Jusqu\'à 500M FCFA', tags: ['Green', 'PME'] },
    { name: 'BNDE - Ligne Agro-Industrie', type: 'Prêt Bonifié', target: 'Agriculture, Transformation', amount: '10M - 200M FCFA', tags: ['Agro'] },
    { name: 'Subvention DER/FJ', type: 'Subvention', target: 'Startups Tech & Jeunes', amount: 'Max 50M FCFA', tags: ['Tech', 'Jeunes'] }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <DollarSign size={32} color="var(--brand-blue)" /> Simulateur de Financements
        </h1>
        <p className="page-subtitle">Trouvez les aides de l'État, fonds verts et financements institutionnels adaptés à votre projet.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
        <div style={{ flex: 1 }}>
          <label className="form-label">Secteur d'activité</label>
          <select className="form-control">
            <option>Tous les secteurs</option>
            <option>Agro-industrie</option>
            <option>Énergie & Green Tech</option>
            <option>Numérique</option>
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label className="form-label">Type de financement</label>
          <select className="form-control">
            <option>Tout afficher</option>
            <option>Subvention</option>
            <option>Prêt bonifié</option>
            <option>Prise de participation</option>
          </select>
        </div>
        <button className="btn-primary"><Search size={18} /> Filtrer</button>
      </div>

      <div className="responsive-grid responsive-grid-3">
        {funds.map((f, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ color: 'var(--brand-blue)', fontSize: '1.2rem', margin: 0 }}>{f.name}</h3>
              {f.tags.includes('Green') && <Leaf size={20} color="#009639" />}
            </div>
            
            <div style={{ marginBottom: '1.5rem', flex: 1 }}>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Type:</strong> {f.type}</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>Cible:</strong> {f.target}</p>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}><strong>Montant:</strong> {f.amount}</p>
            </div>
            
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              Vérifier l'éligibilité <ExternalLink size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundingFinder;
