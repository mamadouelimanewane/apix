import React, { useState } from 'react';
import { ShieldCheck, Calculator, TrendingDown, CheckCircle, Percent } from 'lucide-react';

const TaxIncentives = () => {
  const [sector, setSector] = useState('agriculture');
  const [zone, setZone] = useState('zes');
  const [investment, setInvestment] = useState(1000000000);

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={32} color="#10b981" /> Simulateur de Bouclier Fiscal
        </h1>
        <p className="page-subtitle">Calculez instantanément les exonérations et avantages fiscaux auxquels votre projet est éligible.</p>
      </div>

      <div className="responsive-grid responsive-grid-1-2">
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h3 style={{ color: 'var(--text-primary)' }}>Paramètres du Projet</h3>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 'bold' }}>Secteur d'Activité</label>
            <select className="form-control" value={sector} onChange={e => setSector(e.target.value)}>
              <option value="agriculture">Agriculture & Agro-industrie</option>
              <option value="industrie">Industrie Manufacturière</option>
              <option value="services">Téléservices / TIC</option>
              <option value="mines">Mines & Hydrocarbures</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 'bold' }}>Localisation (Zone)</label>
            <select className="form-control" value={zone} onChange={e => setZone(e.target.value)}>
              <option value="zes">Zone Économique Spéciale (ZES)</option>
              <option value="dakar">Région de Dakar</option>
              <option value="regions">Autres Régions (Intérieur du pays)</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px', fontWeight: 'bold' }}>Montant de l'Investissement (FCFA)</label>
            <input type="number" className="form-control" value={investment} onChange={e => setInvestment(Number(e.target.value))} />
          </div>

          <button className="btn-primary" style={{ marginTop: 'auto', justifyContent: 'center' }}>
            <Calculator size={18} /> Calculer les Avantages
          </button>
        </div>

        <div className="card" style={{ background: '#f8fafc', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingDown size={32} />
            </div>
            <div>
              <h2 style={{ margin: 0, color: 'var(--text-primary)' }}>Vos Incitations Fiscales Estimées</h2>
              <p style={{ margin: '5px 0 0 0', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Basées sur la Loi n°2017-06 sur les ZES</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '20px' }}>
              <div style={{ color: '#10b981' }}><Percent size={32} /></div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Impôt sur les Sociétés (IS) réduit à 15%</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Au lieu du taux standard de 30%. Valable pendant une durée renouvelable, conditionnée à l'exportation d'au moins 50% de la production.</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '20px' }}>
              <div style={{ color: '#8b5cf6' }}><CheckCircle size={32} /></div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Exonération totale des Droits de Douane</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Suspension des droits de douane et de la TVA sur les équipements et matières premières importés pour la production.</p>
              </div>
            </div>

            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: '20px' }}>
              <div style={{ color: '#f59e0b' }}><CheckCircle size={32} /></div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>Exonération de la Contribution Forfaitaire à la Charge de l'Employeur (CFCE)</h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Avantage majeur pour stimuler la création d'emplois locaux massifs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxIncentives;
