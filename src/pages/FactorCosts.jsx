import React from 'react';
import { Zap, Droplet, Wallet, Wifi, Map as MapIcon, Calculator, ChevronRight, BarChart3 } from 'lucide-react';

const FactorCosts = () => {
  const costs = [
    {
      id: "electricity",
      title: "Électricité (Senelec)",
      icon: <Zap size={28} color="#eab308" />,
      bg: "rgba(234, 179, 8, 0.1)",
      metrics: [
        { label: "Basse Tension (Professionnels)", value: "147,43 FCFA / kWh" },
        { label: "Moyenne/Haute Tension (Industrie)", value: "85 - 120 FCFA / kWh" }
      ],
      note: "Baisse de 10% actée en 2026 sur la première tranche. Tarifs préférentiels négociables pour les industries lourdes en ZES."
    },
    {
      id: "water",
      title: "Eau (Sen'Eau)",
      icon: <Droplet size={28} color="#0ea5e9" />,
      bg: "rgba(14, 165, 233, 0.1)",
      metrics: [
        { label: "Tranche 1 (Faible volume)", value: "~200 FCFA / m³" },
        { label: "Industriel (Gros volume)", value: "500 - 800 FCFA / m³" }
      ],
      note: "Barème progressif. Disponibilité garantie dans les parcs industriels aménagés."
    },
    {
      id: "labor",
      title: "Main d'Œuvre & SMIG",
      icon: <Wallet size={28} color="#10b981" />,
      bg: "rgba(16, 185, 129, 0.1)",
      metrics: [
        { label: "SMIG Mensuel", value: "~58 900 FCFA" },
        { label: "Taux horaire de base", value: "333,65 FCFA / heure" }
      ],
      note: "Une main-d'œuvre jeune, dynamique et de plus en plus qualifiée. Les charges sociales employeurs peuvent être exonérées en ZES (CFCE)."
    },
    {
      id: "telecom",
      title: "Télécoms & Internet",
      icon: <Wifi size={28} color="#8b5cf6" />,
      bg: "rgba(139, 92, 246, 0.1)",
      metrics: [
        { label: "Fibre Optique Pro (Base)", value: "~30 000 FCFA / mois" },
        { label: "Liaison Spécialisée (Haut Débit)", value: "Sur devis" }
      ],
      note: "Le Sénégal possède l'un des meilleurs réseaux fibre et 4G/5G d'Afrique de l'Ouest, avec plusieurs câbles sous-marins."
    },
    {
      id: "land",
      title: "Foncier Industriel (ZES)",
      icon: <MapIcon size={28} color="#f97316" />,
      bg: "rgba(249, 115, 22, 0.1)",
      metrics: [
        { label: "Redevance foncière (Sandiara/Diass)", value: "À partir de 500 FCFA / m² / an" },
        { label: "Bail Emphytéotique", value: "Jusqu'à 50 ans" }
      ],
      note: "Terrains viabilisés (eau, électricité, assainissement) prêts à l'emploi au sein des Zones Économiques Spéciales."
    }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <BarChart3 size={32} color="var(--brand-blue)" /> Coûts des Facteurs de Production
        </h1>
        <p className="page-subtitle">Des données transparentes et compétitives pour évaluer avec précision les coûts opérationnels (OPEX) de votre projet au Sénégal.</p>
      </div>

      <div className="responsive-grid responsive-grid-2">
        {costs.map(cost => (
          <div key={cost.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: cost.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cost.icon}
              </div>
              <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>{cost.title}</h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '1.5rem', flex: 1 }}>
              {cost.metrics.map((metric, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{metric.label}</span>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-primary)', fontSize: '1rem' }}>{metric.value}</span>
                </div>
              ))}
            </div>

            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '10px' }}>
              {cost.note}
            </p>
          </div>
        ))}

        <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', color: 'white' }}>
          <Calculator size={48} color="rgba(255,255,255,0.8)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ margin: '0 0 10px 0', fontSize: '1.5rem' }}>Besoin d'un devis sur-mesure ?</h2>
          <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.95rem', opacity: 0.9 }}>
            Pour les projets industriels nécessitant de la Haute Tension ou d'importants volumes d'eau, l'APIX vous accompagne pour négocier les meilleurs tarifs.
          </p>
          <button style={{ background: 'white', color: '#0284c7', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            Contacter un Conseiller APIX <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FactorCosts;
