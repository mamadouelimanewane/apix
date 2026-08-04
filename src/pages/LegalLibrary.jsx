import React, { useState } from 'react';
import { Book, FileText, Search, Download, ExternalLink, Scale, Briefcase, Droplets, Users, Leaf, Truck, Handshake, MapPin, Building2 } from 'lucide-react';

const LegalLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const codes = [
    { 
      id: 1, 
      title: "Actes Uniformes de l'OHADA", 
      icon: <Scale size={24} color="#8b5cf6" />,
      color: "rgba(139, 92, 246, 0.1)",
      summary: "Cadre juridique commun aux 17 pays membres régissant le droit des sociétés, le recouvrement et l'arbitrage.",
      highlights: ["Création de SARL/SA simplifiée", "Droit Commercial Général", "Sûretés et garanties"],
      link: "https://www.ohada.org/documentation/textes-ohada/"
    },
    { 
      id: 2, 
      title: "Code des Investissements (Loi 2025-16)", 
      icon: <Briefcase size={24} color="#10b981" />,
      color: "rgba(16, 185, 129, 0.1)",
      summary: "Loi n° 2025-16 définissant le nouveau régime général des investissements au Sénégal et les garanties offertes aux IDE.",
      highlights: ["Liberté de transfert de capitaux", "Égalité de traitement", "Protection contre l'expropriation"],
      link: "https://investinsenegal.sn/"
    },
    { 
      id: 3, 
      title: "Code Minier (Loi 2016-32)", 
      icon: <Droplets size={24} color="#f59e0b" />,
      color: "rgba(245, 158, 11, 0.1)",
      summary: "Loi n° 2016-32 réglementant l'exploration, l'exploitation et la fiscalité des ressources du sous-sol.",
      highlights: ["Loi sur le Contenu Local", "Redevances minières", "Permis d'exploration"],
      link: "https://itie.sn/lois-et-decrets/"
    },
    { 
      id: 4, 
      title: "Code Général des Impôts (CGI)", 
      icon: <FileText size={24} color="#3b82f6" />,
      color: "rgba(59, 130, 246, 0.1)",
      summary: "Législation fiscale, barèmes de l'Impôt sur les Sociétés (IS), TVA et taxes locales.",
      highlights: ["TVA à 18%", "Impôt sur les Sociétés", "Incitations fiscales ZES"],
      link: "https://www.impotsetdomaines.gouv.sn/"
    },
    { 
      id: 5, 
      title: "Code du Travail (Loi 97-17)", 
      icon: <Users size={24} color="#ec4899" />,
      color: "rgba(236, 72, 153, 0.1)",
      summary: "Réglementation des relations employeurs-employés, types de contrats et droits sociaux.",
      highlights: ["Contrats CDD/CDI", "Temps de travail et congés", "Liberté syndicale"],
      link: "https://archives.sn/"
    },
    { 
      id: 6, 
      title: "Code de l'Environnement (Loi 2023-15)", 
      icon: <Leaf size={24} color="#10b981" />,
      color: "rgba(16, 185, 129, 0.1)",
      summary: "Nouveau cadre de gestion écologique, études d'impact environnemental (EIES) et RSE.",
      highlights: ["Études d'impact obligatoires", "Gestion des déchets dangereux", "Responsabilité environnementale"],
      link: "https://primature.sn/"
    },
    { 
      id: 7, 
      title: "Code des Douanes (Loi 2014-10)", 
      icon: <Truck size={24} color="#f97316" />,
      color: "rgba(249, 115, 22, 0.1)",
      summary: "Règles d'import-export, régimes douaniers économiques et contentieux douanier.",
      highlights: ["Régimes de perfectionnement actif", "Suspension de droits", "Procédures de dédouanement"],
      link: "https://www.douanes.sn/"
    },
    { 
      id: 8, 
      title: "Loi sur les PPP (Loi 2021-23)", 
      icon: <Handshake size={24} color="#6366f1" />,
      color: "rgba(99, 102, 241, 0.1)",
      summary: "Cadre unifié pour les Partenariats Public-Privé (PPP) favorisant l'investissement dans les infrastructures.",
      highlights: ["Procédures de passation", "Fonds d'appui aux PPP", "Comité interministériel UNAPPP"],
      link: "https://ppp.gouv.sn/"
    },
    { 
      id: 9, 
      title: "Loi sur le Domaine National (Loi 64-46)", 
      icon: <MapPin size={24} color="#84cc16" />,
      color: "rgba(132, 204, 22, 0.1)",
      summary: "Cadre fondamental de la gestion foncière au Sénégal, définissant les terres du domaine de la Nation.",
      highlights: ["Baux emphytéotiques", "Terres urbaines et zones pionnières", "Sécurisation foncière"],
      link: "https://www.fao.org/faolex/results/details/fr/c/LEX-FAOC004739/"
    },
    { 
      id: 10, 
      title: "Lois sur les ZES (Lois 2017-06 & 07)", 
      icon: <Building2 size={24} color="#06b6d4" />,
      color: "rgba(6, 182, 212, 0.1)",
      summary: "Cadre juridique et dispositif d'incitations fiscales exceptionnelles pour les Zones Économiques Spéciales.",
      highlights: ["Guichet unique en ZES", "Statut d'entreprise franche", "Exonérations douanières"],
      link: "https://investinsenegal.sn/"
    }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Book size={32} color="var(--brand-blue)" /> Bibliothèque Juridique Intelligente
        
            </h1>
            <p className="page-subtitle">
              Accédez aux textes de lois, codes et actes uniformes avec des résumés clairs pour les investisseurs.
            </p>
          </div>
        </div>
    
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Search size={20} color="var(--text-muted)" />
        <input 
          type="text" 
          placeholder="Rechercher une loi, un décret ou un mot-clé (ex: rapatriement dividendes)..." 
          style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1rem', background: 'transparent' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-primary">Chercher</button>
      </div>

      <div className="responsive-grid responsive-grid-2">
        {codes.map(code => (
          <div key={code.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: code.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {code.icon}
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{code.title}</h3>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
              {code.summary}
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Points Clés (Executive Summary)</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {code.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={code.link} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem', textDecoration: 'none' }}>
                <ExternalLink size={16} /> Lire le texte
              </a>
              <a href={code.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem', background: 'var(--brand-blue)', textDecoration: 'none' }}>
                <Download size={16} /> Télécharger (PDF)
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalLibrary;
