import React, { useState } from 'react';
import { Truck, MapPin, PackageCheck, AlertTriangle, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

const LogisticsTracking = () => {
  const [trackingCode, setTrackingCode] = useState('SN-APIX-98234');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(true);

  const steps = [
    { label: 'Déclaration préalable (DIPA) validée', date: '12 Août 2026', done: true },
    { label: 'Arrivée au Port Autonome de Dakar', date: '25 Août 2026', done: true },
    { label: 'Inspection douanière (GAINDE 2000)', date: '26 Août 2026', done: true },
    { label: 'Application de l\'exonération (Code Invest.)', date: 'En cours', done: false, active: true },
    { label: 'Bon à enlever délivré', date: 'En attente', done: false }
  ];

  const handleSearch = () => {
    setIsSearching(true);
    setShowResult(false);
    setTimeout(() => {
      setIsSearching(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Truck size={32} color="var(--brand-blue)" /> Suivi Logistique & Douanier
        
            </h1>
            <p className="page-subtitle">
              Suivez en temps réel le dédouanement de vos équipements industriels interconnecté avec GAINDE 2000.
            </p>
          </div>
        </div>
    
      </div>

      <div className="card" style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Entrez votre numéro de connaissement (Bill of Lading) ou DIPA" 
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            style={{ flex: 1 }}
          />
          <button className="btn-primary" onClick={handleSearch} disabled={isSearching || !trackingCode}>
            {isSearching ? 'Recherche...' : 'Suivre le conteneur'}
          </button>
        </div>
      </div>

      {showResult && (
        <div className="responsive-grid responsive-grid-2-1">
          <div className="card">
            <h3 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <PackageCheck size={20} /> Statut de l'expédition : {trackingCode}
            </h3>
            
            <div className="timeline">
              {steps.map((step, idx) => (
                <div key={idx} className={`timeline-item ${step.done ? 'completed' : ''} ${step.active ? 'active' : ''}`}>
                  <div className="timeline-icon">
                    {step.done ? <CheckCircle2 size={16} /> : (step.active ? <Clock size={16} /> : <div style={{width: '8px', height: '8px', background: 'currentColor', borderRadius: '50%'}}></div>)}
                  </div>
                  <div className="timeline-content">
                    <h4 style={{ margin: '0 0 4px 0', color: step.active ? 'var(--accent-primary)' : 'var(--text-primary)' }}>{step.label}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{step.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ background: 'var(--bg-tertiary)', border: 'none' }}>
            <h4 style={{ marginBottom: '1.5rem' }}>Informations Déclaration</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Nature</span>
                <strong style={{ textAlign: 'right' }}>Machines Industrielles (Ligne de production)</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Valeur FOB</span>
                <strong>450 000 EUR</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Port d'origine</span>
                <strong>Hambourg, DE</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Régime Douanier</span>
                <strong style={{ color: 'var(--accent-primary)' }}>Exonération Code Invest.</strong>
              </div>
            </div>

            <div style={{ background: 'rgba(242, 148, 0, 0.1)', padding: '1rem', borderRadius: '8px', marginTop: '2rem', display: 'flex', gap: '10px' }}>
              <AlertTriangle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                Pour accélérer la validation, veuillez vous assurer que l'attestation de conformité environnementale a été déposée.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogisticsTracking;
