import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, Upload, CreditCard, Building2, ShieldCheck, Building } from 'lucide-react';

const GuichetUnique = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = [
    { num: 1, label: 'Informations Entreprise' },
    { num: 2, label: 'Dépôt des Statuts' },
    { num: 3, label: 'Paiement Frais' },
    { num: 4, label: 'Validation APIX' }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Building2 size={32} color="var(--brand-blue)" /> Guichet Unique Dématérialisé
        </h1>
        <p className="page-subtitle">Créez votre entreprise au Sénégal, obtenez votre NINEA et votre RCCM en 48 heures, 100% en ligne.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', padding: '2rem' }}>
        <div className="wizard-steps">
          {steps.map(step => (
            <div key={step.num} className={`wizard-step ${activeStep === step.num ? 'active' : ''} ${activeStep > step.num ? 'completed' : ''}`}>
              <div className="wizard-step-number">
                {activeStep > step.num ? <CheckCircle size={16} /> : step.num}
              </div>
              <span className="wizard-step-label">{step.label}</span>
            </div>
          ))}
        </div>

        {!isSubmitted ? (
          <>
            {activeStep === 1 && (
              <div className="responsive-grid responsive-grid-2">
                <div className="form-group">
                  <label className="form-label">Dénomination Sociale</label>
                  <input type="text" className="form-control" placeholder="Nom de l'entreprise" />
                </div>
                <div className="form-group">
                  <label className="form-label">Forme Juridique</label>
                  <select className="form-control">
                    <option>SARL</option>
                    <option>SUARL</option>
                    <option>SA</option>
                    <option>GIE</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Capital Social (FCFA)</label>
                  <input type="number" className="form-control" placeholder="1 000 000" />
                </div>
                <div className="form-group">
                  <label className="form-label">Secteur d'Activité</label>
                  <select className="form-control">
                    <option>Agro-industrie</option>
                    <option>Technologies / IT</option>
                    <option>Énergie</option>
                    <option>Mines</option>
                  </select>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div style={{ textAlign: 'center', padding: '2rem', border: '2px dashed rgba(0,0,0,0.1)', borderRadius: '12px', background: 'var(--bg-tertiary)' }}>
                <Upload size={48} color="var(--text-muted)" style={{ marginBottom: '1rem' }} />
                <h3 style={{ marginBottom: '0.5rem' }}>Déposez vos documents constitutifs</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Statuts signés, pièce d'identité des gérants, déclaration sur l'honneur.</p>
                <button className="btn-secondary">Parcourir les fichiers</button>
              </div>
            )}

            {activeStep === 3 && (
              <div style={{ maxWidth: '400px', margin: '0 auto' }}>
                <div style={{ background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Frais de création (SARL)</span>
                    <strong>25 000 FCFA</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Frais de timbre</span>
                    <strong>10 000 FCFA</strong>
                  </div>
                  <hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)', margin: '15px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', color: 'var(--brand-blue)' }}>
                    <strong>Total à payer</strong>
                    <strong>35 000 FCFA</strong>
                  </div>
                </div>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsSubmitted(true)}>
                  <CreditCard size={18} /> Payer en ligne (Orangemoney / Carte)
                </button>
              </div>
            )}

            {activeStep < 3 && (
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                <button className="btn-primary" onClick={() => setActiveStep(prev => prev + 1)}>
                  Étape Suivante
                </button>
              </div>
            )}
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '3rem 0' }}>
            <ShieldCheck size={64} color="var(--accent-primary)" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1rem' }}>Dossier soumis avec succès !</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Vos frais de création ont été validés. Le bureau d'appui à la création d'entreprise (BCE) de l'APIX examine votre dossier.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(242, 148, 0, 0.1)', padding: '12px 24px', borderRadius: '8px', color: 'var(--accent-primary)', fontWeight: 'bold' }}>
              <Clock size={20} /> Temps estimé : 48 Heures (Ouvrées)
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuichetUnique;
