import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Calculator, 
  Leaf, 
  Layers, 
  Satellite, 
  Users, 
  MessageSquare, 
  BookOpen, 
  Route as RouteIcon,
  Network,
  Database,
  ArrowRight
} from 'lucide-react';

const modules = [
  { path: '/dashboard', icon: <LayoutDashboard size={32} />, title: "Tableau de Bord", desc: "Aperçu global de votre espace investisseur", color: "#38bdf8" },
  { path: '/guichet', icon: <FileText size={32} />, title: "Guichet Unique", desc: "Démarches 100% dématérialisées (Création, Agréments)", color: "#4ade80" },
  { path: '/deal-room-investisseur', icon: <Briefcase size={32} />, title: "Smart Deal Room", desc: "Suivi confidentiel de vos dossiers avec l'APIX", color: "#fcd34d" },
  { path: '/roi-simulator', icon: <Calculator size={32} />, title: "Simulateur ROI", desc: "Modélisation financière et Business Plan interactif", color: "#fb923c" },
  { path: '/carbon-simulator', icon: <Leaf size={32} />, title: "Simulateur Carbone", desc: "Évaluation de l'empreinte écologique de votre projet", color: "#22c55e" },
  { path: '/digital-twin', icon: <Layers size={32} />, title: "Jumeau Numérique", desc: "Cartographie avancée du territoire", color: "#818cf8" },
  { path: '/zes-explorer', icon: <Satellite size={32} />, title: "Cadastre ZES", desc: "Visite virtuelle et disponibilité foncière en ZES", color: "#a78bfa" },
  { path: '/matchmaking', icon: <Users size={32} />, title: "Matchmaking B2B", desc: "Mise en relation avec des partenaires locaux", color: "#f472b6" },
  { path: '/copilot', icon: <MessageSquare size={32} />, title: "AI Copilot", desc: "Assistant intelligent pour vos recherches", color: "#34d399" },
  { path: '/regulatory', icon: <BookOpen size={32} />, title: "Regulatory Hub", desc: "Textes de loi, conventions et incitations", color: "#94a3b8" }
];

const PortalHub = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      padding: '2rem 3rem',
      minHeight: '100%',
      background: '#f8fafc',
      color: '#1e293b'
    }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, color: '#0f172a' }}>
          Bienvenue sur le Hub Investisseur
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '0.5rem' }}>
          Sélectionnez un module pour démarrer ou poursuivre vos activités.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {modules.map((mod, index) => (
          <div 
            key={index} 
            onClick={() => navigate(mod.path)}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              group: 'true'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              e.currentTarget.style.borderColor = mod.color;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '12px',
              background: `${mod.color}15`,
              color: mod.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {mod.icon}
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#0f172a' }}>
              {mod.title}
            </h3>
            
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5', flex: 1 }}>
              {mod.desc}
            </p>

            <div style={{
              marginTop: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              color: mod.color,
              fontWeight: '600',
              fontSize: '0.9rem',
              gap: '0.5rem'
            }}>
              Accéder <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortalHub;
