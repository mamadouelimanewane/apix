import React, { useState } from 'react';
import { Route as RouteIcon, Target, Users, Calendar, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const RoadmapBuilder = () => {
  const [sector, setSector] = useState('tech');
  const [employees, setEmployees] = useState('1-10');
  const [isExporting, setIsExporting] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setGenerated(true);
  };

  const getTimeline = () => {
    const timeline = [];
    
    // Step 1: Création
    timeline.push({
      title: 'Création de l\'entreprise',
      agency: 'APIX / BCEAO',
      duration: '48 Heures',
      cost: '25 000 FCFA',
      desc: 'Enregistrement au registre du commerce, obtention du NINEA et compte bancaire.',
      completed: true,
    });

    // Step 2: Agrément (dépend du secteur)
    if (sector === 'agro') {
      timeline.push({
        title: 'Étude d\'Impact Environnemental',
        agency: 'DEEC (Ministère de l\'Environnement)',
        duration: '1 à 3 mois',
        cost: 'Variable (Consultant)',
        desc: 'Obligatoire pour l\'agro-industrie. Évaluation des rejets et de la gestion de l\'eau.',
        completed: false,
      });
      timeline.push({
        title: 'Agrément Industriel & Hygiène',
        agency: 'Direction de l\'Industrie',
        duration: '30 Jours',
        cost: '50 000 FCFA',
        desc: 'Certification des normes de production agro-alimentaire (FRA).',
        completed: false,
      });
    } else if (sector === 'tech') {
      timeline.push({
        title: 'Certification CDP',
        agency: 'Commission des Données Personnelles',
        duration: '15 Jours',
        cost: 'Gratuit',
        desc: 'Obligatoire si vous collectez ou traitez des données d\'utilisateurs.',
        completed: false,
      });
    }

    // Step 3: Export / Import
    if (isExporting) {
      timeline.push({
        title: 'Immatriculation Import/Export',
        agency: 'Douanes Sénégalaises (GAINDE)',
        duration: '1 Semaine',
        cost: '30 000 FCFA (Carte)',
        desc: 'Obtention de la carte importateur-exportateur et accès au système ORBUS.',
        completed: false,
      });
    }

    // Step 4: Emploi
    if (employees === '50+') {
      timeline.push({
        title: 'Immatriculation IPRES & CSS (Grand Compte)',
        agency: 'IPRES / Caisse de Sécurité Sociale',
        duration: '10 Jours',
        cost: 'Gratuit (Dépôts)',
        desc: 'Déclaration systématique de la main d\'œuvre et mise en place d\'un CHSCT.',
        completed: false,
      });
    }

    // Final
    timeline.push({
      title: 'Obtention de l\'Agrément Code des Investissements',
      agency: 'APIX (Guichet Unique)',
      duration: '21 Jours',
      cost: 'Frais de dossier',
      desc: 'Exonérations douanières et suspension de TVA validées. Prêt à opérer !',
      completed: false,
    });

    return timeline;
  };

  return (
    <div className="roadmap-page">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <RouteIcon size={32} color="var(--brand-blue)" /> Générateur de Roadmap IA
        
            </h1>
            <p className="page-subtitle">
              Générez un parcours d'implantation personnalisé avec coûts et délais pour votre projet.
            </p>
          </div>
        </div>
    
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* Formulaire */}
        <div className="card" style={{ height: 'fit-content' }}>
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Target size={20} color="var(--accent-primary)" /> Profil du Projet
          </h3>
          <form onSubmit={handleGenerate}>
            <div className="form-group">
              <label className="form-label">Secteur d'Activité</label>
              <select className="form-control" value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="tech">Technologies / Services Numériques</option>
                <option value="agro">Agro-industrie & Transformation</option>
                <option value="logistics">Logistique & Transport</option>
                <option value="energy">Énergies Renouvelables</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Taille Prévue (Employés locaux)</label>
              <select className="form-control" value={employees} onChange={(e) => setEmployees(e.target.value)}>
                <option value="1-10">1 à 10 employés</option>
                <option value="11-49">11 à 49 employés</option>
                <option value="50+">Plus de 50 employés</option>
              </select>
            </div>

            <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '1.5rem' }}>
              <input type="checkbox" id="export" checked={isExporting} onChange={(e) => setIsExporting(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--brand-blue)' }} />
              <label htmlFor="export" style={{ margin: 0, fontWeight: '500', cursor: 'pointer' }}>Le projet prévoit des activités d'Import / Export</label>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '2rem', justifyContent: 'center' }}>
              Générer la Roadmap
            </button>
          </form>
        </div>

        {/* Timeline Result */}
        <div className="card" style={{ background: 'var(--bg-secondary)', border: '1px solid rgba(0,0,0,0.05)' }}>
          {!generated ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '400px', color: 'var(--text-muted)' }}>
              <RouteIcon size={64} style={{ opacity: 0.2, marginBottom: '1rem' }} />
              <p>Remplissez le formulaire pour générer votre feuille de route administrative.</p>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Votre Parcours d'Implantation</h3>
                <button className="btn-secondary" style={{ fontSize: '0.85rem', padding: '6px 12px' }}>Télécharger PDF</button>
              </div>

              <div style={{ position: 'relative', paddingLeft: '20px' }}>
                {/* Ligne verticale de la timeline */}
                <div style={{ position: 'absolute', left: 0, top: '10px', bottom: '10px', width: '3px', background: 'var(--brand-blue)', opacity: 0.2, borderRadius: '3px' }}></div>

                {getTimeline().map((step, idx) => (
                  <div key={idx} style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '20px' }}>
                    {/* Point sur la timeline */}
                    <div style={{ 
                      position: 'absolute', left: '-26.5px', top: '5px', width: '16px', height: '16px', 
                      background: step.completed ? 'var(--accent-primary)' : 'white',
                      border: `3px solid ${step.completed ? 'var(--accent-primary)' : 'var(--brand-blue)'}`,
                      borderRadius: '50%', zIndex: 2
                    }}></div>
                    
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--brand-blue)' }}>Étape {idx + 1} : {step.title}</h4>
                        <span style={{ fontSize: '0.8rem', background: 'rgba(30, 58, 138, 0.1)', color: 'var(--brand-blue)', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                          {step.agency}
                        </span>
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.5' }}>{step.desc}</p>
                      
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                          <Calendar size={16} /> <strong style={{ color: 'var(--text-primary)' }}>Délai :</strong> {step.duration}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                          <ArrowRight size={16} /> <strong style={{ color: 'var(--text-primary)' }}>Coût :</strong> {step.cost}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoadmapBuilder;
