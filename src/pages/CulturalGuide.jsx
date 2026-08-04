import React, { useState } from 'react';
import { BookOpen, Coffee, Sun, Building, Scale, Clock } from 'lucide-react';

const CulturalGuide = () => {
  const [activeTab, setActiveTab] = useState('etiquette');

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <BookOpen size={32} color="var(--brand-blue)" /> Guide Pratique "Doing Business"
        
            </h1>
            <p className="page-subtitle">
              Découvrez l'étiquette des affaires, la culture du travail et les astuces pour une intégration réussie au Sénégal.
            </p>
          </div>
        </div>
    
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button onClick={() => setActiveTab('etiquette')} style={{ padding: '12px', textAlign: 'left', background: activeTab === 'etiquette' ? 'var(--bg-tertiary)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'etiquette' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'etiquette' ? 'bold' : 'normal' }}>
              <Coffee size={18} /> L'Étiquette des Affaires
            </button>
            <button onClick={() => setActiveTab('hours')} style={{ padding: '12px', textAlign: 'left', background: activeTab === 'hours' ? 'var(--bg-tertiary)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'hours' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'hours' ? 'bold' : 'normal' }}>
              <Clock size={18} /> Horaires & Jours Fériés
            </button>
            <button onClick={() => setActiveTab('labor')} style={{ padding: '12px', textAlign: 'left', background: activeTab === 'labor' ? 'var(--bg-tertiary)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'labor' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'labor' ? 'bold' : 'normal' }}>
              <Scale size={18} /> Droit du Travail & Syndicats
            </button>
          </div>
        </div>

        <div className="card">
          {activeTab === 'etiquette' && (
            <div>
              <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>L'Étiquette des Affaires et le "Téranga"</h2>
              <div style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <p style={{ marginBottom: '1rem' }}>Le Sénégal est mondialement connu pour la <strong>Téranga</strong>, qui signifie l'hospitalité. Dans le monde des affaires, cela se traduit par une grande courtoisie et de l'importance accordée aux relations interpersonnelles.</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>Prenez toujours le temps de saluer longuement vos interlocuteurs et de vous enquérir de leur santé avant d'aborder les sujets professionnels.</li>
                  <li style={{ marginBottom: '0.5rem' }}>La hiérarchie est très respectée au sein des entreprises et des administrations.</li>
                  <li style={{ marginBottom: '0.5rem' }}>Le vouvoiement et l'utilisation des titres (Monsieur le Directeur, Madame le Ministre) sont de rigueur lors des premiers échanges.</li>
                </ul>
              </div>
            </div>
          )}
          {activeTab === 'hours' && (
            <div>
              <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>Horaires de Travail</h2>
              <div style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <p>La semaine de travail standard est de 40 heures. Les horaires typiques des bureaux et de l'administration sont de <strong>08h00 à 17h00</strong> du lundi au vendredi, avec une pause déjeuner.</p>
                <p><strong>Note importante :</strong> Le vendredi après-midi est souvent marqué par la grande prière musulmane (vers 13h30-14h30). Il est recommandé d'éviter de programmer des réunions importantes sur ce créneau.</p>
              </div>
            </div>
          )}
          {activeTab === 'labor' && (
            <div>
              <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>Code du Travail</h2>
              <div style={{ lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                <p>Le Sénégal dispose d'un code du travail structuré protégeant les employés. L'embauche de travailleurs locaux est fortement encouragée et soutenue par des dispositifs d'aide à la formation.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CulturalGuide;
