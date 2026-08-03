import React, { useState } from 'react';
import { Search, Filter, Briefcase, MapPin, Award, Star, X, CheckCircle, Bot, Zap, ShieldCheck } from 'lucide-react';

const Matchmaking = () => {
  const [isAiScanning, setIsAiScanning] = useState(false);
  const [showAiResults, setShowAiResults] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Formulaire IA
  const [projectSector, setProjectSector] = useState('Pétrole & Gaz');
  const [neededService, setNeededService] = useState('Logistique & Transport');
  const [matches, setMatches] = useState([]);

  const suppliers = [
    { id: 1, name: 'Sénégal BTP & Logistique', sector: 'Construction', region: 'Dakar', certified: true, rating: 4.8, description: 'Leader dans la construction d\'infrastructures industrielles et logistiques. Certification ISO 9001.', localContent: 95, services: ['BTP & Génie Civil', 'Logistique & Transport'], sectors: ['Infrastructures', 'Mines', 'Pétrole & Gaz'] },
    { id: 2, name: 'TechSolutions SN', sector: 'IT & Services', region: 'Diamniadio', certified: true, rating: 4.9, description: 'Services cloud, intégration système et cybersécurité pour les entreprises de la ZES.', localContent: 100, services: ['Services IT & Cybersécurité'], sectors: ['Pétrole & Gaz', 'Mines', 'Agro-industrie', 'Infrastructures'] },
    { id: 3, name: 'EcoEnergy Sénégal', sector: 'Énergie', region: 'Dakar', certified: true, rating: 4.7, description: 'Solutions solaires industrielles et efficacité énergétique.', localContent: 80, services: ['Énergie & Efficacité'], sectors: ['Agro-industrie', 'Infrastructures'] },
    { id: 4, name: 'SenTrans International', sector: 'Logistique', region: 'Thiès', certified: true, rating: 4.5, description: 'Transport routier, fret maritime et gestion d\'entrepôts. Flotte de 200 camions.', localContent: 100, services: ['Logistique & Transport', 'Restauration & Base Vie'], sectors: ['Pétrole & Gaz', 'Agro-industrie', 'Mines'] },
  ];

  const computeMatchScore = (supplier) => {
    const serviceMatch = supplier.services.includes(neededService) ? 45 : 0;
    const sectorMatch = supplier.sectors.includes(projectSector) ? 25 : 0;
    const ratingScore = supplier.rating * 4; // jusqu'à 20
    const localContentScore = supplier.localContent / 10; // jusqu'à 10
    return Math.round(serviceMatch + sectorMatch + ratingScore + localContentScore);
  };

  const handleAiScan = () => {
    setIsAiScanning(true);
    setShowAiResults(false);
    setTimeout(() => {
      const ranked = suppliers
        .map(s => ({ ...s, matchScore: computeMatchScore(s) }))
        .sort((a, b) => b.matchScore - a.matchScore);
      setMatches(ranked);
      setIsAiScanning(false);
      setShowAiResults(true);
    }, 2000);
  };

  const handleContact = (supplier) => {
    setSelectedSupplier(supplier);
    setIsSuccess(false);
  };

  const handleSendMessage = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setSelectedSupplier(null);
      setIsSuccess(false);
    }, 2500);
  };

  return (
    <div className="matchmaking-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Local Content Matchmaker IA</h1>
          <p className="page-subtitle">Trouvez des partenaires locaux certifiés pour répondre aux exigences du Contenu Local.</p>
        </div>
      </div>

      {/* IA MATCHER SECTION */}
      <div className="card" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #004b2c 100%)', color: 'white', marginBottom: '2rem', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
          <Bot size={32} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.5rem', margin: 0 }}>Générateur de Shortlist IA</h2>
        </div>
        <p style={{ opacity: 0.9, marginBottom: '2rem' }}>
          L'algorithme analyse vos besoins opérationnels et croise notre base de données nationale pour vous proposer les sous-traitants sénégalais les plus qualifiés, garantissant votre conformité à la Loi sur le Contenu Local.
        </p>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Secteur de votre projet d'investissement</label>
            <select className="form-control" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '8px', width: '100%' }} value={projectSector} onChange={e => setProjectSector(e.target.value)}>
              <option style={{color: 'black'}}>Pétrole & Gaz</option>
              <option style={{color: 'black'}}>Mines</option>
              <option style={{color: 'black'}}>Agro-industrie</option>
              <option style={{color: 'black'}}>Infrastructures</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Besoin en sous-traitance</label>
            <select className="form-control" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '12px', borderRadius: '8px', width: '100%' }} value={neededService} onChange={e => setNeededService(e.target.value)}>
              <option style={{color: 'black'}}>Logistique & Transport</option>
              <option style={{color: 'black'}}>BTP & Génie Civil</option>
              <option style={{color: 'black'}}>Services IT & Cybersécurité</option>
              <option style={{color: 'black'}}>Restauration & Base Vie</option>
              <option style={{color: 'black'}}>Énergie & Efficacité</option>
            </select>
          </div>
          <button className="btn-primary" style={{ padding: '12px 24px', background: 'var(--accent-primary)', color: 'white', border: 'none', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold' }} onClick={handleAiScan} disabled={isAiScanning}>
            {isAiScanning ? (
              <>Recherche en cours...</>
            ) : (
              <><Zap size={18} /> Lancer le Matching</>
            )}
          </button>
        </div>
      </div>

      {isAiScanning && (
        <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--brand-blue)' }}>
          <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', margin: '0 4px', animation: 'blink 1.4s infinite both' }}></div>
          <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', margin: '0 4px', animation: 'blink 1.4s infinite both 0.2s' }}></div>
          <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block', margin: '0 4px', animation: 'blink 1.4s infinite both 0.4s' }}></div>
          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>Analyse des certifications APIX et vérification des capacités...</p>
        </div>
      )}

      {showAiResults && (
        <>
          <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <h2 style={{ color: 'var(--brand-blue)', margin: 0 }}>Sélection IA pour : {neededService} ({projectSector})</h2>
            <span style={{ background: 'rgba(0, 150, 57, 0.1)', color: 'var(--accent-primary)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>{matches.filter(m => m.matchScore >= 40).length} profil(s) fortement recommandé(s)</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {matches.map(supplier => (
              <div key={supplier.id} className="card" style={{ display: 'flex', flexDirection: 'column', border: supplier.matchScore >= 40 ? '2px solid var(--accent-primary)' : '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'var(--brand-blue)', fontSize: '1.2rem', margin: 0 }}>{supplier.name}</h3>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--brand-blue)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    <ShieldCheck size={14} /> Certifié APIX
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <span>Score de correspondance</span><span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>{supplier.matchScore}%</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(0,0,0,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min(supplier.matchScore, 100)}%`, height: '100%', background: 'var(--accent-primary)' }} />
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {supplier.description}
                </p>
                
                <div style={{ background: 'rgba(242, 148, 0, 0.1)', padding: '10px', borderRadius: '8px', marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 'bold' }}>Indice de Contenu Local</span>
                  <span style={{ fontSize: '1.2rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{supplier.localContent}%</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <Briefcase size={16} /> {supplier.sector}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <MapPin size={16} /> {supplier.region}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#f59e0b' }}>
                    <Star size={16} fill="currentColor" /> {supplier.rating}/5
                  </div>
                </div>
                
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => handleContact(supplier)}>
                  Initier une demande de NDA
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* CONTACT MODAL */}
      {selectedSupplier && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedSupplier(null)}>
              <X size={24} />
            </button>
            
            {!isSuccess ? (
              <>
                <h2 style={{ color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>Contacter {selectedSupplier.name}</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Votre demande sera transmise via l'APIX pour garantir la traçabilité du Contenu Local.</p>
                
                <div className="form-group">
                  <label className="form-label">Objet de la demande</label>
                  <select className="form-control">
                    <option>Demande d'Accord de Confidentialité (NDA)</option>
                    <option>Appel d'Offres Restreint</option>
                    <option>Demande de devis préliminaire</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Détails du projet</label>
                  <textarea className="form-control" rows="4" placeholder="Décrivez succinctement le marché ou les lots concernés..."></textarea>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                  <button className="btn-primary" onClick={handleSendMessage} style={{ background: 'var(--accent-primary)' }}>Envoyer la requête officielle</button>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={64} color="var(--accent-primary)" style={{ margin: '0 auto 1rem' }} />
                <h2 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Requête Transmise !</h2>
                <p style={{ color: 'var(--text-secondary)' }}>L'APIX a enregistré votre démarche de Contenu Local. L'entreprise {selectedSupplier.name} vous contactera sous 48h.</p>
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default Matchmaking;
