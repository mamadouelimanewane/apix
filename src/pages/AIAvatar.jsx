import React, { useState, useEffect } from 'react';
import { Bot, Mic, MicOff, Volume2, Globe2 } from 'lucide-react';

const AIAvatar = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState([
    { role: 'bot', text: 'Nanga def! Welcome to the APIX Virtual Concierge. How can I assist you with your investment project in Senegal today?', lang: 'en' }
  ]);

  const toggleListen = () => {
    if (!isListening) {
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        setTranscript(prev => [...prev, 
          { role: 'user', text: 'Quelles sont les conditions pour obtenir l\'agrément au code des investissements ?', lang: 'fr' },
          { role: 'bot', text: 'L\'agrément au code des investissements nécessite un investissement minimum de 100 millions de FCFA. Vous devez soumettre un business plan, vos statuts et remplir le formulaire en ligne sur ce portail. Voulez-vous que je vous ouvre la page des E-Procédures ?', lang: 'fr' }
        ]);
      }, 3000);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
      <div style={{ marginBottom: '1rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bot size={32} color="var(--brand-blue)" /> Concierge IA Multilingue (3D)
        </h1>
        <p className="page-subtitle">Discutez naturellement à la voix avec l'intelligence artificielle de l'APIX.</p>
      </div>

      <div className="responsive-grid responsive-grid-2" style={{ flex: 1 }}>
        {/* Fake 3D Avatar Area */}
        <div className="card" style={{ padding: 0, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)' }}>
          
          <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', gap: '10px' }}>
            <span style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px', backdropFilter: 'blur(5px)' }}><Globe2 size={14} /> Wolof / FR / EN / ZH</span>
          </div>

          <div style={{ width: '250px', height: '250px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-blue) 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: isListening ? '0 0 50px rgba(56, 189, 248, 0.5)' : '0 0 20px rgba(0,0,0,0.3)', transition: 'box-shadow 0.3s ease', animation: isListening ? 'pulse 1.5s infinite' : 'none' }}>
            <Bot size={120} color="white" />
          </div>

          <div style={{ position: 'absolute', bottom: '30px', display: 'flex', gap: '15px' }}>
            <button 
              onClick={toggleListen}
              style={{ width: '60px', height: '60px', borderRadius: '50%', border: 'none', background: isListening ? '#ef4444' : 'var(--brand-blue)', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)', transition: 'all 0.3s ease' }}
            >
              {isListening ? <MicOff size={28} /> : <Mic size={28} />}
            </button>
          </div>

          {isListening && (
            <div style={{ position: 'absolute', bottom: '100px', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', animation: 'blink 1.5s infinite' }}>
              Écoute en cours...
            </div>
          )}
        </div>

        {/* Live Transcript Area */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
          <h3 style={{ color: 'var(--brand-blue)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem' }}>
            <Volume2 size={20} /> Transcription en Temps Réel
          </h3>
          
          <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem 0' }}>
            {transcript.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '4px', textAlign: msg.role === 'user' ? 'right' : 'left', textTransform: 'uppercase' }}>
                  {msg.role === 'user' ? 'Vous' : 'APIX Concierge'} ({msg.lang})
                </div>
                <div style={{ background: msg.role === 'user' ? 'var(--brand-blue)' : 'white', color: msg.role === 'user' ? 'white' : 'var(--text-primary)', padding: '12px 16px', borderRadius: '12px', borderBottomRightRadius: msg.role === 'user' ? '0' : '12px', borderBottomLeftRadius: msg.role === 'bot' ? '0' : '12px', boxShadow: 'var(--shadow-sm)', border: msg.role === 'bot' ? '1px solid rgba(0,0,0,0.05)' : 'none', lineHeight: '1.5' }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 20px rgba(56, 189, 248, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(56, 189, 248, 0); }
        }
      `}</style>
    </div>
  );
};

export default AIAvatar;
