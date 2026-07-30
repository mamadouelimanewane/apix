import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Clock, Info } from 'lucide-react';

const Copilot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Bonjour ! Je suis Copilot Invest, votre assistant juridique et fiscal virtuel pour le Sénégal.\n\nJe peux vous renseigner sur le Code des Investissements, la fiscalité, le droit du travail ou les démarches de création d'entreprise. Comment puis-je vous aider aujourd'hui ?",
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (text = inputValue) => {
    if (!text.trim()) return;
    
    const newUserMsg = { 
      id: Date.now(), 
      sender: 'user', 
      text: text,
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    const currentMessages = [...messages, newUserMsg];
    setMessages(currentMessages);
    setInputValue('');
    setIsTyping(true);

    const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;

    if (!apiKey) {
      // Fallback si pas de clé (Mode Demo)
      setTimeout(() => {
        let botResponse = "Je n'ai pas cette information précise dans ma base de connaissances. Souhaitez-vous que je vous mette en relation avec un expert de l'APIX ?";
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes('diamniadio') || lowerText.includes('zes')) {
          botResponse = "Pour une entreprise agréée au régime des Zones Économiques Spéciales (ZES) comme Diamniadio ou Sandiara, les avantages sont majeurs :\n\n• **Impôt sur les Sociétés (IS)** : Fixé à 15% (au lieu de 30%).\n• **TVA** : Exonération totale sur les achats locaux et les importations.\n\nL'agrément est délivré sous 30 jours par l'APIX.";
        }
        
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
        setIsTyping(false);
      }, 1500);
      return;
    }

    // Appel réel à l'API Perplexity (Connecté à Internet)
    try {
      const history = currentMessages.map(m => ({
        role: m.sender === 'bot' ? 'assistant' : 'user',
        content: m.text
      }));

      const body = {
        model: 'llama-3.1-sonar-small-128k-online', // Modèle connecté au web
        messages: [
          { role: 'system', content: "Tu es Copilot Invest, un assistant virtuel expert du Sénégal, conçu par l'APIX (Agence pour la Promotion des Investissements). Tu aides les investisseurs avec précision. Sois courtois, professionnel et utilise du markdown (puces, gras) pour aérer tes réponses. Cite tes sources quand c'est pertinent." },
          ...history
        ]
      };

      const res = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      
      if (data.choices && data.choices.length > 0) {
        setMessages(prev => [...prev, { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: data.choices[0].message.content,
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }]);
      } else {
        throw new Error("Réponse vide de l'API");
      }

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: 'bot', 
        text: "Désolé, je rencontre des difficultés de connexion à mes serveurs d'intelligence artificielle. Veuillez réessayer dans quelques instants.",
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    "Quels sont les avantages de la ZES de Diamniadio ?",
    "Comment créer une SARL au Sénégal ?",
    "Qu'est-ce que le statut d'Entreprise Franche d'Exportation ?"
  ];

  return (
    <div className="copilot-page" style={{ display: 'flex', gap: '2rem', height: 'calc(100vh - 120px)' }}>
      {/* Sidebar Info */}
      <div className="card" style={{ width: '300px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>
          <Info size={20} /> À propos du Copilot
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          <strong>Copilot Invest</strong> est propulsé par <em>Perplexity AI</em> (connecté à internet). Il est spécialisé dans le Code des Investissements, le Code du Travail et le Code Général des Impôts du Sénégal.
        </p>
        
        <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '0.95rem' }}>Questions suggérées :</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {suggestions.map((sug, i) => (
            <button 
              key={i} 
              onClick={() => handleSend(sug)}
              style={{ textAlign: 'left', padding: '10px', background: 'var(--bg-tertiary)', borderRadius: '8px', color: 'var(--brand-blue)', fontSize: '0.9rem', transition: 'background 0.2s', border: 'none', cursor: 'pointer' }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0, 107, 63, 0.1)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'}
            >
              {sug}
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="card chat-container" style={{ flex: 1, margin: 0, height: '100%' }}>
        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--brand-blue)', margin: 0 }}>Copilot Invest</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block' }}></span> En ligne (Moteur : Perplexity AI)
            </span>
          </div>
        </div>

        <div className="chat-messages" style={{ height: 'calc(100% - 140px)', overflowY: 'auto' }}>
          {messages.map(msg => (
            <div key={msg.id} className={`message ${msg.sender}`} style={{ position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 'bold' }}>
                {msg.sender === 'bot' ? <><Bot size={18} /> APIX Copilot</> : <><User size={18} /> Vous</>}
              </div>
              <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{msg.text}</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.7, marginTop: '8px', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <Clock size={10} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}/>
                {msg.timestamp}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot" style={{ display: 'flex', gap: '4px', alignItems: 'center', padding: '12px 20px', width: 'fit-content' }}>
              <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-secondary)', borderRadius: '50%', animation: 'blink 1.4s infinite both' }}></span>
              <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-secondary)', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.2s' }}></span>
              <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--text-secondary)', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.4s' }}></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input-area" style={{ marginTop: 'auto' }}>
          <input 
            type="text" 
            className="chat-input" 
            placeholder="Écrivez votre question ici..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
            disabled={isTyping}
            style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
          />
          <button className="btn-send" onClick={() => handleSend(inputValue)} disabled={isTyping} style={{ opacity: isTyping ? 0.5 : 1, padding: '12px', background: 'var(--brand-blue)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Send size={20} />
          </button>
        </div>
      </div>
      <style>{`
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default Copilot;
