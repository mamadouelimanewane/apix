import React, { useState } from 'react';
import { Presentation, Wand2, Download, CheckCircle2, Loader2, PlayCircle } from 'lucide-react';

const PitchDeckGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [sector, setSector] = useState('agri');

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsDone(false);
    
    // Simulate generation time
    setTimeout(() => {
      setIsGenerating(false);
      setIsDone(true);
    }, 3000);
  };

  return (
    <div className="page-container page-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Presentation size={32} color="var(--brand-blue)" /> Générateur de Pitch Deck IA
        </h1>
        <p className="page-subtitle">Générez un argumentaire exécutif "Prêt pour le Board" basé sur vos critères d'investissement.</p>
      </div>

      <div style={{ display: 'flex', gap: '30px', flex: 1 }}>
        {/* Form */}
        <div className="card" style={{ flex: '0 0 350px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Paramètres d'investissement</h3>
          
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Secteur d'activité</label>
            <select 
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}
            >
              <option value="agri">Agro-industrie</option>
              <option value="tech">Technologies & Numérique</option>
              <option value="energy">Énergie & Pétrole/Gaz</option>
              <option value="manufacturing">Manufacturier</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Zone d'implantation visée</label>
            <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
              <option>ZES (Zone Économique Spéciale)</option>
              <option>Région de Dakar</option>
              <option>Agropole Centre</option>
            </select>
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Taille de l'investissement (FCFA)</label>
            <select style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
              <option>1 Milliard - 5 Milliards</option>
              <option>5 Milliards - 25 Milliards</option>
              <option>&gt; 25 Milliards</option>
            </select>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="btn-primary" 
              style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
            >
              {isGenerating ? <Loader2 className="spin" size={20} /> : <Wand2 size={20} />}
              {isGenerating ? 'Génération par l\'IA...' : 'Générer le Pitch Deck'}
            </button>
          </div>
        </div>

        {/* Result Area */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-tertiary)', border: '2px dashed var(--border-color)' }}>
          {!isGenerating && !isDone && (
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <Presentation size={64} style={{ opacity: 0.2, marginBottom: '20px' }} />
              <h3>Prêt à compiler les données</h3>
              <p style={{ maxWidth: '400px', margin: '0 auto' }}>L'IA va extraire les lois fiscales, les coûts des facteurs et les arguments macroéconomiques pertinents pour votre board.</p>
            </div>
          )}

          {isGenerating && (
            <div style={{ textAlign: 'center', color: 'var(--brand-blue)' }}>
              <Loader2 size={64} className="spin" style={{ marginBottom: '20px' }} />
              <h3>Compilation en cours...</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Analyse de la loi 2017-06 sur les ZES... Calcul des OPEX... Extraction des notes du FMI...</p>
            </div>
          )}

          {isDone && (
            <div className="page-fade-in" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', padding: '0 20px' }}>
                <h3 style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
                  <CheckCircle2 size={24} /> Pitch Deck Généré avec succès !
                </h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-secondary"><PlayCircle size={18} /> Présenter</button>
                  <button className="btn-primary"><Download size={18} /> Exporter (PDF/PPTX)</button>
                </div>
              </div>
              
              {/* Slide Preview Mockup */}
              <div style={{ flex: 1, background: 'var(--bg-secondary)', borderRadius: '12px', margin: '0 20px 20px', padding: '40px', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '8px', background: 'linear-gradient(90deg, #10b981, #0284c7)' }}></div>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '10px', maxWidth: '80%' }}>Pourquoi investir au Sénégal en 2026 ?</h2>
                <h3 style={{ color: 'var(--brand-blue)', marginBottom: '40px' }}>Dossier Stratégique : {sector === 'agri' ? 'Agro-industrie' : sector === 'tech' ? 'Technologies' : sector === 'energy' ? 'Énergie' : 'Industrie'}</h3>
                
                <div style={{ display: 'flex', gap: '30px' }}>
                  <div style={{ flex: 1, background: 'var(--bg-primary)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#f59e0b', marginBottom: '15px' }}>01. Stabilité & Macroéconomie</h4>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <li>Croissance PIB 2025: 6,7% (FMI)</li>
                      <li>Vision 2050 claire (Gouvernement)</li>
                      <li>Leader régional UEMOA</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, background: 'var(--bg-primary)', padding: '20px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#10b981', marginBottom: '15px' }}>02. Incitations ZES (Loi 2017)</h4>
                    <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <li>Exonération TVA et Droits de Douane</li>
                      <li>IS réduit à 15% (au lieu de 30%)</li>
                      <li>Terrains prêts à 500 FCFA/m²/an</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PitchDeckGenerator;
