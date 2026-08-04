import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #004b2c 100%)',
      color: 'white',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorative Elements */}
      <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '800px', height: '800px', background: 'rgba(242, 148, 0, 0.05)', borderRadius: '50%', filter: 'blur(60px)' }}></div>

      {/* Header */}
      <header style={{
        padding: '2rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="https://apix.sn/wp-content/uploads/2022/10/apix-logo-1.png" alt="APIX Logo" style={{ height: '50px', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }} />
        </div>
        <button 
          onClick={() => navigate('/login')}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '50px',
            fontWeight: '600',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
        >
          Espace Connecté
        </button>
      </header>

      {/* Main Content */}
      <main style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        position: 'relative',
        zIndex: 10,
        gap: '2rem'
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'rgba(242, 148, 0, 0.15)',
          color: '#fcd34d',
          borderRadius: '50px',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          marginBottom: '1rem',
          border: '1px solid rgba(242, 148, 0, 0.3)'
        }}>
          Portail Investisseur Nouvelle Génération
        </div>
        
        <h1 style={{
          fontSize: '4.5rem',
          fontWeight: '800',
          lineHeight: '1.1',
          margin: 0,
          background: 'linear-gradient(to right, #ffffff, #94a3b8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          maxWidth: '800px'
        }}>
          Investir au Sénégal <br /> n'a jamais été aussi simple.
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#cbd5e1',
          maxWidth: '600px',
          lineHeight: '1.6',
          margin: '0'
        }}>
          Découvrez une plateforme unifiée pour vos démarches, simulations, financements et données économiques en temps réel.
        </p>

        <button 
          onClick={() => navigate('/login')}
          style={{
            marginTop: '2rem',
            background: 'var(--brand-orange, #f29400)',
            color: 'white',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 10px 25px rgba(242, 148, 0, 0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(242, 148, 0, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(242, 148, 0, 0.4)';
          }}
        >
          Accéder au Portail <ArrowRight size={20} />
        </button>

        {/* Features Preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginTop: '4rem',
          maxWidth: '900px',
          width: '100%'
        }}>
          {[
            { icon: <Globe size={24} color="#38bdf8" />, title: "Jumeau Numérique", desc: "Explorez le cadastre foncier et les ZES en 3D" },
            { icon: <Zap size={24} color="#fcd34d" />, title: "Simulateurs Intelligents", desc: "Calculez votre ROI et votre impact carbone en temps réel" },
            { icon: <Shield size={24} color="#4ade80" />, title: "Guichet Unique", desc: "Démarches administratives 100% dématérialisées" }
          ].map((feature, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              textAlign: 'left'
            }}>
              <div style={{ 
                width: '50px', height: '50px', 
                borderRadius: '12px', 
                background: 'rgba(255,255,255,0.1)', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'white' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.5', margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        color: '#64748b',
        fontSize: '0.9rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative',
        zIndex: 10
      }}>
        © {new Date().getFullYear()} APIX Sénégal. Tous droits réservés.
      </footer>
    </div>
  );
};

export default LandingPage;
