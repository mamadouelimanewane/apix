import React from 'react';
import { Briefcase, Cpu, Leaf, Plane, Droplets, Download, ChevronRight, FileText } from 'lucide-react';

const SectorOpportunities = () => {
  const sectors = [
    {
      id: 1,
      title: 'Économie Numérique & BPO',
      icon: <Cpu size={28} />,
      color: 'var(--brand-blue)',
      bg: 'rgba(30, 58, 138, 0.1)',
      desc: 'Parc des Technologies Numériques (PTN) de Diamniadio. Hub régional de l\'innovation.',
      incentives: ['Exonération TVA sur équipements', 'Subvention formation'],
      deckUrl: '#'
    },
    {
      id: 2,
      title: 'Agro-Industrie',
      icon: <Leaf size={28} />,
      color: 'var(--accent-primary)',
      bg: 'rgba(0, 150, 57, 0.1)',
      desc: 'Souveraineté alimentaire et export. ZES de Sandiara et Agropoles.',
      incentives: ['ZES - Impôt sur les sociétés à 15%', 'Droits de douane suspendus'],
      deckUrl: '#'
    },
    {
      id: 3,
      title: 'Pétrole & Gaz (GTA / Sangomar)',
      icon: <Droplets size={28} />,
      color: '#fcd116',
      bg: 'rgba(252, 209, 22, 0.1)',
      desc: 'Contenu local et sous-traitance pour les premiers barils. Opportunités logistiques.',
      incentives: ['Cadre légal sécurisé', 'Préférence nationale (Local Content)'],
      deckUrl: '#'
    },
    {
      id: 4,
      title: 'Tourisme & Hôtellerie',
      icon: <Plane size={28} />,
      color: 'var(--accent-secondary)',
      bg: 'rgba(227, 27, 35, 0.1)',
      desc: 'Pôle touristique de Pointe Sarène et Mbour. Tourisme d\'affaires (MICE) à Dakar.',
      incentives: ['Abattements fiscaux sur 10 ans', 'Foncier aménagé'],
      deckUrl: '#'
    }
  ];

  const pppProjects = [
    {
      title: 'Construction du Port Sec de Tambacounda',
      type: 'PPP / Infrastructure',
      budget: '35 Millions USD',
      status: 'Appel d\'offres en cours',
      roi: 'TRI estimé : 12%',
      desc: 'Plateforme logistique bimodale (Rail/Route) pour desservir le Mali.'
    },
    {
      title: 'Agropole Sud (Ziguinchor)',
      type: 'Investissement Direct',
      budget: '50 Millions USD',
      status: 'Recherche de partenaires',
      roi: 'Forte rentabilité (Export)',
      desc: 'Transformation de noix de cajou, mangues et produits halieutiques.'
    },
    {
      title: 'Usine de Dessalement de Dakar (Extension)',
      type: 'PPP / Eau & Énergie',
      budget: '120 Millions USD',
      status: 'Étude de faisabilité terminée',
      roi: 'Garanti par contrat d\'achat (PPA)',
      desc: 'Sécurisation de l\'approvisionnement en eau de la capitale.'
    }
  ];

  return (
    <div className="opportunities-page">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={32} color="var(--brand-blue)" /> Opportunités & Secteurs
        </h1>
        <p className="page-subtitle">Découvrez les secteurs prioritaires du PSE et les projets PPP prêts à l'investissement.</p>
      </div>

      <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FileText size={24} /> Secteurs Stratégiques (Pitch Decks)
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {sectors.map((sector) => (
          <div key={sector.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{ padding: '12px', background: sector.bg, color: sector.color, borderRadius: '12px' }}>
                {sector.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{sector.title}</h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
              {sector.desc}
            </p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>Avantages Cibles :</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                {sector.incentives.map((inc, i) => <li key={i} style={{ marginBottom: '4px' }}>{inc}</li>)}
              </ul>
            </div>
            
            <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
              <Download size={16} /> Télécharger le Pitch Deck
            </button>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '1.4rem', color: 'var(--brand-blue)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Briefcase size={24} /> Projets PPP (Prêts à l'Investissement)
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {pppProjects.map((project, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem' }}>
            <div style={{ flex: 2 }}>
              <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 'bold', background: 'var(--brand-blue)', color: 'white', padding: '4px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                {project.type}
              </span>
              <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>{project.desc}</p>
            </div>
            
            <div style={{ flex: 1, borderLeft: '1px solid rgba(0,0,0,0.1)', paddingLeft: '2rem', marginLeft: '2rem' }}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ticket Estimé :</span><br/>
                <strong style={{ fontSize: '1.1rem', color: 'var(--accent-primary)' }}>{project.budget}</strong>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Statut :</span><br/>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{project.status}</span>
              </div>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rentabilité :</span><br/>
                <span style={{ fontSize: '0.9rem', color: 'var(--brand-blue)', fontWeight: '500' }}>{project.roi}</span>
              </div>
            </div>
            
            <div style={{ flex: 0.5, display: 'flex', justifyContent: 'flex-end' }}>
              <button className="btn-primary" style={{ padding: '10px 15px' }}>
                Détails <ChevronRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorOpportunities;
