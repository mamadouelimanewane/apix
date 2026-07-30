import React, { useState } from 'react';
import { Search, Book, FileText, Bot, AlertCircle, ChevronRight, Settings } from 'lucide-react';

const RegulatoryHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [aiProvider, setAiProvider] = useState('perplexity'); // perplexity ou deepseek

  const documents = [
    { id: 1, title: 'Code des Investissements', desc: 'Loi n° 2004-03 du 06 février 2004', icon: <Book size={20} /> },
    { id: 2, title: 'Code Général des Impôts', desc: 'Loi n° 2012-31 du 31 décembre 2012', icon: <FileText size={20} /> },
    { id: 3, title: 'Loi sur les Zones Économiques', desc: 'Loi n° 2017-06 du 06 janvier 2017', icon: <Book size={20} /> },
    { id: 4, title: 'Code du Travail', desc: 'Loi n° 97-17 du 1er décembre 1997', icon: <FileText size={20} /> },
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    setAiResponse(null);
    
    // Pour une vraie application, ajoutez ces clés dans un fichier .env (VITE_PERPLEXITY_API_KEY et VITE_DEEPSEEK_API_KEY)
    const apiKey = import.meta.env[`VITE_${aiProvider.toUpperCase()}_API_KEY`];

    if (!apiKey) {
      // Mode simulation (Fallback) si les clés API ne sont pas configurées
      setTimeout(() => {
        let response = {
          text: `[Mode Simulation ${aiProvider.toUpperCase()}] : Je n'ai pas trouvé d'article spécifique correspondant à votre recherche. Veuillez reformuler ou configurer votre clé d'API.`,
          source: "Corpus Général"
        };

        const query = searchQuery.toLowerCase();
        
        if (query.includes('délai') || query.includes('agrément') || query.includes('jour')) {
          response = {
            text: "« L'Agence est tenue de notifier au requérant la décision motivée d'octroi ou de refus d'agrément dans un délai maximum de trente (30) jours à compter de la date de délivrance du récépissé de dépôt du dossier complet. »",
            source: `Code des Investissements - Article 15 (Simulé via ${aiProvider})`
          };
        } else if (query.includes('douane') || query.includes('matériel') || query.includes('import')) {
          response = {
            text: "« Les entreprises agréées bénéficient de l'exonération des droits de douane et de la suspension de la TVA sur les matériels, matériaux et équipements qui ne sont pas produits ou fabriqués au Sénégal et qui sont destinés spécifiquement à la production. »",
            source: "Code des Investissements - Article 23"
          };
        }

        setAiResponse(response);
        setIsSearching(false);
      }, 1500);
      return;
    }

    // Appel réel aux APIs (OpenAI-compatible)
    try {
      let endpoint = '';
      let body = {};

      if (aiProvider === 'perplexity') {
        endpoint = 'https://api.perplexity.ai/chat/completions';
        body = {
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            { role: 'system', content: 'Tu es un expert juridique sénégalais du droit des affaires. Cite tes sources.' },
            { role: 'user', content: searchQuery }
          ]
        };
      } else {
        endpoint = 'https://api.deepseek.com/chat/completions';
        body = {
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: 'Tu es un expert juridique du Sénégal. Réponds de façon précise avec les articles de loi.' },
            { role: 'user', content: searchQuery }
          ]
        };
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(body)
      });

      const data = await res.json();
      
      if (data.choices && data.choices.length > 0) {
        setAiResponse({
          text: data.choices[0].message.content,
          source: `Recherche IA propulsée par ${aiProvider === 'perplexity' ? 'Perplexity' : 'DeepSeek'}`
        });
      } else {
        throw new Error('Réponse invalide de l\'API');
      }
    } catch (error) {
      console.error(error);
      setAiResponse({
        text: "Erreur lors de la connexion à l'API. Vérifiez votre clé d'accès ou votre connexion réseau.",
        source: "Erreur Système"
      });
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="regulatory-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Hub Réglementaire & Fiscal</h1>
          <p className="page-subtitle">Recherche intelligente dans le corpus juridique sénégalais.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        {/* Main Content: Search and Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, var(--brand-blue) 0%, #1e40af 100%)', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
                <Bot size={28} /> Assistant Juridique IA Multi-Modèles
              </h2>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '8px' }}>
                <Settings size={16} />
                <select 
                  value={aiProvider} 
                  onChange={(e) => setAiProvider(e.target.value)}
                  style={{ background: 'transparent', color: 'white', border: 'none', outline: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  <option value="perplexity" style={{ color: 'black' }}>Moteur : Perplexity AI</option>
                  <option value="deepseek" style={{ color: 'black' }}>Moteur : DeepSeek</option>
                </select>
              </div>
            </div>
            
            <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>L'IA analyse le Code des Investissements et le Code Général des Impôts pour vous répondre avec l'article de loi exact.</p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="text" 
                className="form-control" 
                style={{ flex: 1, padding: '16px 20px', fontSize: '1.1rem', borderRadius: '12px', border: 'none' }}
                placeholder="Ex: Quel est le délai maximum pour obtenir l'agrément APIX ?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button className="btn-primary" style={{ background: 'var(--accent-primary)', padding: '0 32px', borderRadius: '12px' }} onClick={handleSearch} disabled={isSearching}>
                {isSearching ? 'Recherche...' : <Search size={24} />}
              </button>
            </div>
          </div>

          {aiResponse && (
            <div className="card" style={{ borderLeft: '4px solid var(--accent-primary)', animation: 'slideUp 0.4s ease' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <AlertCircle size={24} color="var(--accent-primary)" style={{ marginTop: '2px' }} />
                <div>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Analyse Juridique ({aiProvider === 'perplexity' ? 'Perplexity' : 'DeepSeek'})</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', fontStyle: 'italic', marginBottom: '1rem', whiteSpace: 'pre-line' }}>
                    {aiResponse.text}
                  </p>
                  <div style={{ display: 'inline-block', background: 'rgba(30, 58, 138, 0.1)', color: 'var(--brand-blue)', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    Source : {aiResponse.source}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="card">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>Matrice des Avantages par Régime</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-tertiary)' }}>
                  <th style={{ padding: '12px', borderBottom: '2px solid var(--brand-blue)' }}>Avantage</th>
                  <th style={{ padding: '12px', borderBottom: '2px solid var(--brand-blue)' }}>Droit Commun</th>
                  <th style={{ padding: '12px', borderBottom: '2px solid var(--brand-blue)' }}>ZES / EFE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: '500' }}>Impôt sur les Sociétés (IS)</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-secondary)' }}>30%</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--accent-primary)', fontWeight: 'bold' }}>15%</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: '500' }}>Droits de Douane (Matériel)</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-secondary)' }}>Applicables</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Exonération totale</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: '500' }}>Contribution Forfaitaire (CFCE)</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-secondary)' }}>3% de la masse salariale</td>
                  <td style={{ padding: '16px 12px', borderBottom: '1px solid rgba(0,0,0,0.05)', color: 'var(--accent-primary)', fontWeight: 'bold' }}>Exonération totale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: Documents */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', color: 'var(--brand-blue)', fontSize: '1.1rem' }}>Corpus Documentaire</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {documents.map(doc => (
                <div key={doc.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: 'var(--bg-primary)', borderRadius: '8px', cursor: 'pointer', transition: 'background 0.2s' }} onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-tertiary)'} onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-primary)'}>
                  <div style={{ color: 'var(--accent-primary)' }}>{doc.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', margin: '0 0 2px 0', color: 'var(--text-primary)' }}>{doc.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>{doc.desc}</p>
                  </div>
                  <ChevronRight size={16} color="var(--text-muted)" />
                </div>
              ))}
            </div>
            <button className="btn-secondary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>Voir tout le corpus</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RegulatoryHub;
