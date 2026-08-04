import React, { useState } from 'react';
import { LineChart, Download, ExternalLink, Globe, FileBarChart, TrendingUp, BarChart3, Target, Landmark } from 'lucide-react';

const MacroReports = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const reports = [
    {
      id: 1,
      institution: "Fonds Monétaire International (FMI)",
      title: "Perspectives Économiques : Un nouveau cap franchi",
      date: "Rapport 2025/2026",
      icon: <Globe size={24} color="#0284c7" />,
      color: "rgba(2, 132, 199, 0.1)",
      summary: "Le FMI salue une année 2025 historique avec une croissance du PIB estimée à 6,7%, propulsée par le démarrage effectif de la production de pétrole (Sangomar) et de gaz (GTA). Le programme 'Sénégal 2050' instaure un climat de confiance inédit.",
      highlights: ["Croissance du PIB de 6,7% en 2025", "Assainissement budgétaire en cours", "Confiance des investisseurs rétablie"],
      link: "https://www.imf.org/fr/Countries/SEN"
    },
    {
      id: 2,
      institution: "Banque Mondiale",
      title: "Note de Conjoncture : L'ère des hydrocarbures",
      date: "Mise à jour 2026",
      icon: <Globe size={24} color="#16a34a" />,
      color: "rgba(22, 163, 74, 0.1)",
      summary: "La Banque Mondiale souligne l'impact transformationnel des revenus extractifs sur l'économie. Le rapport met en évidence la résilience économique du pays face aux chocs exogènes et la stabilité de son cadre macroéconomique.",
      highlights: ["Boom des exportations extractives", "Résilience face aux chocs mondiaux", "Attractivité renforcée pour les IDE"],
      link: "https://www.banquemondiale.org/fr/country/senegal"
    },
    {
      id: 3,
      institution: "ANSD (Agence Nationale de la Statistique)",
      title: "Bulletin Mensuel des Statistiques Économiques",
      date: "T1 2026",
      icon: <FileBarChart size={24} color="#f59e0b" />,
      color: "rgba(245, 158, 11, 0.1)",
      summary: "Les données nationales confirment une hausse spectaculaire des exportations (+48,5%) et une réduction du déficit commercial. Le secteur tertiaire maintient une très forte dynamique avec une progression de +3,6%.",
      highlights: ["Bond des exportations de +48,5%", "Baisse des importations de -0,5%", "Secteur tertiaire très dynamique (+3,6%)"],
      link: "https://ansd.sn/"
    },
    {
      id: 4,
      institution: "DPEE (Direction de la Prévision)",
      title: "Situation Économique et Financière",
      date: "Note de Conjoncture",
      icon: <TrendingUp size={24} color="#8b5cf6" />,
      color: "rgba(139, 92, 246, 0.1)",
      summary: "Analyse confirmant l'amélioration du solde budgétaire et le succès des émissions de titres publics sur le marché régional, prouvant la liquidité et la solvabilité de l'État sénégalais.",
      highlights: ["Amélioration du solde budgétaire", "Succès sur le marché financier de l'UEMOA", "Stabilité des prix"],
      link: "https://dpee.sn/"
    },
    {
      id: 5,
      institution: "Gouvernement du Sénégal",
      title: "Sénégal 2050 : Agenda National de Transformation",
      date: "Masterplan 2025-2034",
      icon: <Target size={24} color="#ec4899" />,
      color: "rgba(236, 72, 153, 0.1)",
      summary: "Le nouveau référentiel stratégique remplaçant le PSE. Il vise une économie compétitive et souveraine, un aménagement durable et une gouvernance transparente.",
      highlights: ["Rupture vers la souveraineté économique", "Accélération du numérique", "Développement de pôles économiques"],
      link: "https://presidence.sn/"
    },
    {
      id: 6,
      institution: "Ministère des Finances et du Budget",
      title: "DPBEP 2027-2029 (Prog. Budgétaire Pluriannuelle)",
      date: "Orientation Budgétaire",
      icon: <Landmark size={24} color="#f97316" />,
      color: "rgba(249, 115, 22, 0.1)",
      summary: "Document définissant les orientations macroéconomiques. Vise une réduction du déficit à 3% du PIB d'ici 2029 et prévoit 703 milliards FCFA de recettes pétrolières.",
      highlights: ["Déficit cible : 3% du PIB en 2029", "703 Milliards FCFA de recettes extractives", "Priorité au Capital Humain (34%)"],
      link: "https://finances.gouv.sn/"
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
              
          <BarChart3 size={32} color="var(--brand-blue)" /> Data Room : Rapports Macroéconomiques
        
            </h1>
            <p className="page-subtitle">
              Consultez les dernières analyses et perspectives des institutions de Bretton Woods et des agences nationales confirmant l'attractivité du Sénégal.
            </p>
          </div>
        </div>
    
      </div>

      <div className="responsive-grid responsive-grid-2">
        {reports.map(report => (
          <div key={report.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: report.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {report.icon}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)' }}>{report.institution}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 'bold' }}>{report.date}</span>
                </div>
              </div>
            </div>
            
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '10px', fontSize: '1rem' }}>{report.title}</h4>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '1.5rem', flex: 1 }}>
              {report.summary}
            </p>

            <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Points Forts (Executive Summary)</h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#10b981', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px', fontWeight: '500' }}>
                {report.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href={report.link} target="_blank" rel="noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.9rem', textDecoration: 'none' }}>
                <ExternalLink size={16} /> Lire le rapport complet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MacroReports;
