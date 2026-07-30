import React from 'react';
import { Award, Milestone, Rocket, CheckCircle, TrendingUp, Building, ArrowRight, Clock, ShieldCheck, MapPin } from 'lucide-react';

const ApixTrackRecord = () => {
  const achievements = [
    { year: '2000', title: 'Création de l\'APIX', desc: 'Lancement de l\'Agence sous l\'impulsion présidentielle pour dynamiser l\'investissement.' },
    { year: '2013', title: 'Autoroute à Péage', desc: 'Inauguration Dakar-Diamniadio, 1er Partenariat Public-Privé (PPP) routier d\'Afrique de l\'Ouest.' },
    { year: '2017', title: 'Inauguration AIBD', desc: 'Mise en service de l\'Aéroport International Blaise Diagne, géré par l\'APIX.' },
    { year: '2021', title: 'Lancement du TER', desc: 'Le Train Express Régional révolutionne le transport interurbain au Sénégal.' },
    { year: '2023', title: 'ZES & Mega-Projets', desc: 'Montée en puissance des Zones Économiques Spéciales (Diamniadio, Sandiara, Diass) et Port de Ndayane.' }
  ];

  const workflowSteps = [
    { step: 1, title: 'Accueil & Information', icon: <InfoIcon />, desc: 'Prise de contact, orientation stratégique et remise du dossier d\'information (Copilot IA / Deal Room).' },
    { step: 2, title: 'Création d\'Entreprise', icon: <Rocket />, desc: 'Passage au Guichet Unique. Formalités administratives bouclées en 48 heures maximum.' },
    { step: 3, title: 'Agrément Investissement', icon: <ShieldCheck />, desc: 'Obtention des avantages fiscaux et douaniers (Code des Investissements / ZES) en 21 jours.' },
    { step: 4, title: 'Foncier & Environnement', icon: <MapPin />, desc: 'Affectation de parcelle (Jumeau Numérique) et validation des études d\'impact environnemental.' },
    { step: 5, title: 'Réalisation du Projet', icon: <Building />, desc: 'Phase de construction, importations d\'équipements détaxés, recrutement (Local Content Matchmaker).' },
    { step: 6, title: 'Aftercare & Expansion', icon: <TrendingUp />, desc: 'Suivi post-investissement, résolution de goulots d\'étranglement et accompagnement pour l\'extension.' }
  ];

  return (
    <div className="track-record-page" style={{ paddingBottom: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Award size={32} color="var(--brand-blue)" /> Track Record & Parcours Investisseur
        </h1>
        <p className="page-subtitle">Découvrez l'héritage des grands travaux de l'APIX et notre méthodologie d'accompagnement de A à Z.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>
        
        {/* SECTION 1: HISTORIQUE ET REALISATIONS */}
        <div className="card" style={{ background: '#fff', padding: '2rem' }}>
          <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '2px solid rgba(0,0,0,0.05)', paddingBottom: '10px' }}>
            <Milestone size={24} color="var(--accent-primary)" /> Historique & Réalisations Structurantes
          </h2>
          
          <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '1rem 0', paddingBottom: '2rem', scrollbarWidth: 'thin' }}>
            {achievements.map((item, idx) => (
              <div key={idx} style={{ minWidth: '250px', background: 'var(--bg-tertiary)', padding: '1.5rem', borderRadius: '12px', position: 'relative', borderTop: '4px solid var(--accent-primary)' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '20px', background: 'var(--brand-blue)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                  {item.year}
                </div>
                <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="responsive-grid-3" style={{ marginTop: '1rem' }}>
            <div style={{ background: 'rgba(0, 150, 57, 0.1)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>20+</div>
              <div style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>Années d'Expertise</div>
            </div>
            <div style={{ background: 'rgba(30, 58, 138, 0.1)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-blue)' }}>3 000+</div>
              <div style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>Milliards FCFA Mobilisés</div>
            </div>
            <div style={{ background: 'rgba(242, 148, 0, 0.1)', padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent-tertiary)' }}>1er</div>
              <div style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>Guichet Unique UEMOA</div>
            </div>
          </div>
        </div>

        {/* SECTION 2: WORKFLOW D'ACCOMPAGNEMENT */}
        <div className="card" style={{ background: 'linear-gradient(to right, #006B3F, #004b2c)', color: 'white', padding: '2.5rem' }}>
          <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <CheckCircle size={28} color="var(--accent-primary)" /> Le Workflow d'Accompagnement APIX
          </h2>
          <p style={{ marginBottom: '3rem', opacity: 0.9 }}>
            De la phase d'idéation jusqu'à l'inauguration de votre usine, l'APIX vous tient la main à travers un processus certifié ISO 9001.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', position: 'relative' }}>
            
            {workflowSteps.map((step, idx) => (
              <div key={idx} style={{ background: 'rgba(255,255,255,0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', position: 'absolute', top: '-20px', left: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                  {step.step}
                </div>
                
                <h3 style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', color: '#fcd34d' }}>
                  {step.icon} {step.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.9, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

// Helper icon component
const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export default ApixTrackRecord;
