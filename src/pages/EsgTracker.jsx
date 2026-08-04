import React, { useState } from 'react';
import { Leaf, BarChart2, CheckCircle2, AlertCircle } from 'lucide-react';

const EsgTracker = () => {
  const [score, setScore] = useState(null);

  const calculateEsg = () => {
    setScore(85);
  };

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Leaf size={32} color="#009639" /> Calculateur d'Impact ESG & Carbone
        </h1>
        <p className="page-subtitle">Estimez votre alignement avec les Objectifs de Développement Durable (ODD) pour accéder aux fonds verts.</p>
      </div>

      <div className="responsive-grid responsive-grid-2">
        <div className="card">
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>Paramètres d'évaluation</h3>
          <div className="form-group">
            <label className="form-label">Consommation énergétique estimée (kWh/an)</label>
            <input type="number" className="form-control" placeholder="100000" />
          </div>
          <div className="form-group">
            <label className="form-label">% d'énergie renouvelable (Solaire/Éolien)</label>
            <input type="number" className="form-control" placeholder="40" />
          </div>
          <div className="form-group">
            <label className="form-label">Nombre d'emplois créés (Impact Social)</label>
            <input type="number" className="form-control" placeholder="50" />
          </div>
          <button className="btn-primary" onClick={calculateEsg} style={{ background: '#009639', width: '100%', justifyContent: 'center' }}>
            <BarChart2 size={18} /> Calculer le score ESG
          </button>
        </div>

        {score && (
          <div className="card" style={{ background: 'var(--brand-blue)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ position: 'relative', width: '150px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '8px solid #009639', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold' }}>{score}</span>
              <span style={{ fontSize: '1rem', position: 'absolute', bottom: '20px' }}>/100</span>
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Excellent alignement ESG</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '20px' }}>
              <CheckCircle2 color="#009639" /> <span>Éligible aux subventions FONSIS Vert</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EsgTracker;
