import React from 'react';
import { Landmark, Shield, TrendingUp, Briefcase, ChevronRight, ExternalLink } from 'lucide-react';

const FinanceHub = () => {
  const banks = [
    { name: 'CBAO Groupe Attijariwafa', type: 'Banque Commerciale', focus: 'Financement d\'Entreprises, Trade Finance' },
    { name: 'Société Générale Sénégal', type: 'Banque Commerciale', focus: 'Corporate Banking, PME/PMI' },
    { name: 'Ecobank Sénégal', type: 'Banque Panafricaine', focus: 'Transactions Transfrontalières' },
    { name: 'BNDE (Banque Nationale)', type: 'Banque de Développement', focus: 'Financement des Projets Locaux' },
  ];

  const funds = [
    { name: 'FONSIS', desc: 'Fonds Souverain d\'Investissements Stratégiques (Co-investissement privé-public)' },
    { name: 'FONGIP', desc: 'Fonds de Garantie des Investissements Prioritaires (Garanties bancaires)' },
  ];

  return (
    <div className="finance-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Écosystème Financier</h1>
          <p className="page-subtitle">Banques, Assurances et Financement pour sécuriser vos investissements.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Banques */}
        <div className="card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>
            <Landmark size={24} /> Paysage Bancaire (UEMOA)
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Le Sénégal dispose d'un secteur bancaire robuste, régulé par la BCEAO. La liberté de transfert des capitaux et des bénéfices est garantie.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {banks.map((bank, i) => (
              <div key={i} style={{ padding: '12px', borderLeft: '3px solid var(--accent-primary)', background: 'var(--bg-primary)', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem' }}>{bank.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span>{bank.type}</span>
                  <span style={{ color: 'var(--brand-blue)', fontWeight: '500' }}>{bank.focus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assurances */}
        <div className="card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>
            <Shield size={24} /> Assurances & Couverture
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
            Réglementées par la Conférence Interafricaine des Marchés d'Assurances (CIMA), offrant des standards internationaux de couverture.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(30, 58, 138, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', marginBottom: '4px' }}>AXA Sénégal</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Risques Industriels</span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(0, 150, 57, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', marginBottom: '4px' }}>Sanlam</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Assurance Transport</span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(252, 209, 22, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', color: '#b39500', marginBottom: '4px' }}>Allianz</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Responsabilité Civile</span>
            </div>
            <div style={{ padding: '1rem', background: 'rgba(227, 27, 35, 0.05)', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '4px' }}>SONAM</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Assurances Santé (Personnel)</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {/* Fonds d'Investissements */}
        <div className="card">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--brand-blue)', marginBottom: '1rem' }}>
            <Briefcase size={24} /> Mécanismes d'Appui Public
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {funds.map((fund, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>{fund.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>{fund.desc}</p>
                </div>
                <button className="btn-secondary" style={{ padding: '8px', borderRadius: '50%' }}><ChevronRight size={20} /></button>
              </div>
            ))}
          </div>
        </div>

        {/* Marché Financier */}
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #1e40af 100%)', color: 'white' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
            <TrendingUp size={24} /> BRVM (Bourse Régionale)
          </h3>
          <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
            La BRVM (Bourse Régionale des Valeurs Mobilières) est la bourse commune aux 8 pays de l'UEMOA, offrant un marché de capitaux profond pour la levée de fonds via des émissions obligataires ou des introductions en bourse (IPO).
          </p>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Indice BRVM Composite</span>
              <span style={{ fontWeight: 'bold' }}>218.45 pts (+1.2%)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>Capitalisation (Actions)</span>
              <span style={{ fontWeight: 'bold' }}>~ 7 500 Milliards FCFA</span>
            </div>
          </div>
          <button className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)', width: '100%', justifyContent: 'center' }}>
            <ExternalLink size={18} /> Consulter les cotations
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinanceHub;
