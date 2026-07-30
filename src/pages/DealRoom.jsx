import React, { useState } from 'react';
import { Lock, FileText, Download, CheckCircle, Brain, Shield, AlertTriangle, Building, Briefcase } from 'lucide-react';

const DealRoom = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState(null);

  // Form State
  const [investorName, setInvestorName] = useState('Global Logistics LLC');
  const [projectType, setProjectType] = useState('Construction Hub Logistique');
  const [investmentAmount, setInvestmentAmount] = useState('45');
  const [zone, setZone] = useState('ZES de Diass');
  const [employment, setEmployment] = useState('250');

  const handleGenerateMoU = () => {
    setIsGenerating(true);
    // Simulate AI Draft Generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedDoc(`MEMORANDUM OF UNDERSTANDING (MoU)
Entre : L'Agence pour la Promotion des Investissements et des Grands Travaux (APIX)
Et : ${investorName}

1. OBJET
Le présent protocole a pour objet de définir le cadre de coopération pour le projet de "${projectType}" situé dans la ${zone}.

2. ENGAGEMENTS DE L'INVESTISSEUR
- Montant d'investissement projeté : ${investmentAmount} Millions USD.
- Création d'emplois locaux directs : ${employment} emplois garantis.
- Respect strict de la loi sur le Contenu Local (Loi N°2019-04).

3. INCITATIONS APIX (ZES)
Sous réserve de l'agrément définitif, l'APIX s'engage à garantir :
- Exonération de la TVA sur les équipements de production.
- Taux d'Impôt sur les Sociétés (IS) réduit à 15%.
- Facilitation de l'obtention des titres fonciers sous 30 jours.

Fait à Dakar, le ${new Date().toLocaleDateString('fr-FR')}

[Signature APIX]                     [Signature ${investorName}]`);
    }, 2500);
  };

  return (
    <div className="deal-room-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lock size={32} color="#e31b23" /> Smart Deal Room & VDR
          </h1>
          <p className="page-subtitle">Espace ultra-sécurisé de négociation (Virtual Data Room) et génération de contrats assistée par IA.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(227, 27, 35, 0.1)', color: '#e31b23', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
          <Shield size={18} /> Chiffrement AES-256
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* COLONNE GAUCHE: Formulaire IA */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Brain size={24} color="var(--accent-primary)" /> Assistant Juridique IA (Term Sheet)
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            L'IA analyse les paramètres de l'investissement et rédige un Protocole d'Accord (MoU) préliminaire conforme au Code des Investissements du Sénégal.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', flex: 1 }}>
            <div className="form-group">
              <label className="form-label">Entité Investisseur</label>
              <input type="text" className="form-control" value={investorName} onChange={e => setInvestorName(e.target.value)} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Nature du Projet</label>
              <input type="text" className="form-control" value={projectType} onChange={e => setProjectType(e.target.value)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Montant (Millions USD)</label>
                <input type="number" className="form-control" value={investmentAmount} onChange={e => setInvestmentAmount(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Emplois Projetés</label>
                <input type="number" className="form-control" value={employment} onChange={e => setEmployment(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Zone Ciblée (ZES/Agropole)</label>
              <select className="form-control" value={zone} onChange={e => setZone(e.target.value)}>
                <option>ZES de Diamniadio</option>
                <option>ZES de Sandiara</option>
                <option>ZES de Diass</option>
                <option>Agropole Sud</option>
              </select>
            </div>
          </div>

          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '1.5rem', background: isGenerating ? '#94a3b8' : 'var(--brand-blue)' }} 
            onClick={handleGenerateMoU}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both' }}></span>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.2s' }}></span>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.4s' }}></span>
                Génération en cours...
              </div>
            ) : (
              <><FileText size={20} /> Générer le Protocole (MoU)</>
            )}
          </button>
        </div>

        {/* COLONNE DROITE: Document Généré & Data Room */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Document Généré (Draft)</h3>
            
            {generatedDoc ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', height: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
                  {generatedDoc}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-primary" style={{ flex: 1, background: 'var(--accent-primary)', justifyContent: 'center' }}>
                    <CheckCircle size={18} /> Soumettre au Légal (APIX)
                  </button>
                  <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                    <Download size={18} /> Exporter PDF
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '2px dashed #cbd5e1', borderRadius: '8px', minHeight: '300px' }}>
                Remplissez le formulaire pour générer le MoU via l'IA.
              </div>
            )}
          </div>

          <div className="card" style={{ background: '#fffbeb', border: '1px solid #fcd34d' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#b45309', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} /> Confidentialité (Data Room)
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#92400e', margin: 0 }}>
              Les études de faisabilité (géologiques, financières) déposées dans cette Deal Room sont protégées par un filigrane dynamique et ne peuvent être téléchargées qu'avec l'accord du comité directeur.
            </p>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default DealRoom;
