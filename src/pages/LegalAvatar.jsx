import React, { useState } from 'react';
import { Scale, MessageSquare, ExternalLink, Send, Gavel } from 'lucide-react';

const LegalAvatar = () => {
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: 'Bonjour, je suis votre Avocat Conseil IA. Posez-moi vos questions sur le droit des affaires au Sénégal, l\'OHADA ou le régime fiscal. Je vous répondrai en citant précisément les textes de loi.',
      source: null
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: 'user', text: input }]);
    
    // Simulate IA thinking and responding with a legal source
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'bot',
        text: 'Oui, vous pouvez rapatrier 100% de vos dividendes. Le Code des Investissements garantit aux investisseurs étrangers la libre transférabilité des capitaux et de leurs revenus.',
        source: {
          title: 'Code des Investissements - Loi n° 2004-06',
          article: 'Article 8 : Liberté de transfert',
          extract: 'Les investisseurs étrangers bénéficient de la garantie de libre transfert des revenus de toute nature provenant de leurs capitaux investis, y compris les dividendes, produits de cession et bonis de liquidation.'
        }
      }]);
    }, 1500);
    
    setInput('');
  };

  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
      <div style={{ marginBottom: '1rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Gavel size={32} color="#0284c7" /> Robo-Avocat (Avatar Juridique)
        
            </h1>
            <p className="page-subtitle">
              Obtenez des réponses instantanées et sourcées sur la fiscalité et le droit OHADA.
            </p>
          </div>
        </div>
    
      </div>

      <div className="responsive-grid responsive-grid-2" style={{ flex: 1, overflow: 'hidden' }}>
        
        {/* Chat Area */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'var(--bg-tertiary)' }}>
            <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
              <MessageSquare size={18} /> Discussion Juridique
            </h3>
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ 
                  background: msg.role === 'user' ? 'var(--brand-blue)' : '#f8fafc',
                  color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: msg.role === 'bot' ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  borderBottomRightRadius: msg.role === 'user' ? 0 : '12px',
                  borderBottomLeftRadius: msg.role === 'bot' ? 0 : '12px',
                  maxWidth: '85%',
                  lineHeight: '1.5'
                }}>
                  {msg.text}
                </div>
                
                {/* Source Box if Bot has a source */}
                {msg.source && (
                  <div style={{ 
                    marginTop: '10px', 
                    background: 'rgba(59, 130, 246, 0.05)', 
                    border: '1px solid rgba(59, 130, 246, 0.2)', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    maxWidth: '85%',
                    borderLeft: '4px solid #3b82f6'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '5px' }}>
                      <Scale size={14} /> {msg.source.title}
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '5px' }}>{msg.source.article}</div>
                    <div style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      "{msg.source.extract}"
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ex: Puis-je rapatrier 100% de mes dividendes ?" 
                style={{ flex: 1 }}
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ padding: '12px', borderRadius: '8px' }}>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* 3D Avatar Area */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.1)', padding: '5px 15px', borderRadius: '20px', color: 'white', fontSize: '0.8rem', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
            IA Juridique Connectée
          </div>

          {/* Fake 3D Robot Counsel */}
          <div style={{ width: '250px', height: '250px', borderRadius: '50%', background: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 50px rgba(2, 132, 199, 0.3)' }}>
            <Gavel size={100} color="white" />
          </div>

          <div style={{ position: 'absolute', bottom: '30px', textAlign: 'center', color: '#cbd5e1', fontSize: '0.9rem' }}>
            Base de données : OHADA, CGI, Code des Investissements, Code Minier. <br/>
            Mise à jour : Août 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalAvatar;
