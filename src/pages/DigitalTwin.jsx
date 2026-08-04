import React, { useState } from 'react';
import { Box, MapPin, Search, CheckCircle, Info, ChevronRight, Layers, ZoomIn } from 'lucide-react';

const DigitalTwin = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  // Faux lots de terrain pour le jumeau numérique
  const plots = Array.from({ length: 48 }, (_, i) => {
    const isOccupied = Math.random() > 0.6;
    let status = 'available';
    let company = null;
    let sector = null;

    if (isOccupied) {
      const companies = ['Atos SN', 'Orange Sonatel', 'Pharmapolis', 'Sen' + 'Logistics', 'Huawei', 'DataCenter National'];
      const sectors = ['Numérique', 'Télécoms', 'Santé', 'Logistique', 'Tech', 'Infrastructures'];
      const rIdx = Math.floor(Math.random() * companies.length);
      status = 'occupied';
      company = companies[rIdx];
      sector = sectors[rIdx];
    } else if (Math.random() > 0.8) {
      status = 'construction';
      company = 'En cours d\'aménagement';
    }

    return {
      id: `P-${100 + i}`,
      size: Math.floor(Math.random() * 5000 + 1000) + ' m²',
      price: '10 000 FCFA / m²',
      status,
      company,
      sector
    };
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return 'rgba(0, 150, 57, 0.2)'; // Vert transparent
      case 'occupied': return 'rgba(30, 58, 138, 0.4)'; // Bleu
      case 'construction': return 'rgba(242, 148, 0, 0.4)'; // Orange
      default: return '#eee';
    }
  };

  const getStatusBorder = (status) => {
    switch(status) {
      case 'available': return '1px solid var(--accent-primary)';
      case 'occupied': return '1px solid var(--brand-blue)';
      case 'construction': return '1px solid var(--accent-tertiary)';
      default: return '1px solid #ccc';
    }
  };

  return (
    <div className="digital-twin-page" style={{ height: 'calc(100vh - 4rem)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
            <Layers size={32} color="var(--brand-blue)" /> Jumeau Numérique - ZES
          
            </h1>
            <p className="page-subtitle">
              Gestion foncière interactive en temps réel du Parc des Technologies Numériques (PTN) de Diamniadio.
            </p>
          </div>
        </div>
    
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <span style={{ width: '12px', height: '12px', background: 'rgba(0, 150, 57, 0.2)', border: '1px solid var(--accent-primary)' }}></span> Disponible
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <span style={{ width: '12px', height: '12px', background: 'rgba(30, 58, 138, 0.4)', border: '1px solid var(--brand-blue)' }}></span> Occupé
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
            <span style={{ width: '12px', height: '12px', background: 'rgba(242, 148, 0, 0.4)', border: '1px solid var(--accent-tertiary)' }}></span> En Aménagement
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '2rem', height: 'calc(100% - 120px)' }}>
        
        {/* GRILLE 2D/3D (SIMULATION) */}
        <div className="card" style={{ flex: 2, background: 'var(--bg-tertiary)', position: 'relative', overflow: 'hidden', padding: '2rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={20} color="var(--brand-blue)" /> Secteur Nord - PTN Diamniadio
            </h3>
            <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
              <ZoomIn size={16} /> Vue 3D Satellite
            </button>
          </div>

          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '8px', padding: '1rem', background: '#e2e8f0', borderRadius: '12px', border: '2px dashed #cbd5e1' }}>
            {plots.map((plot) => (
              <div 
                key={plot.id}
                onClick={() => setSelectedPlot(plot)}
                style={{
                  background: getStatusColor(plot.status),
                  border: getStatusBorder(plot.status),
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  transition: 'transform 0.2s',
                  transform: selectedPlot?.id === plot.id ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedPlot?.id === plot.id ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                  zIndex: selectedPlot?.id === plot.id ? 10 : 1
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => {
                  if (selectedPlot?.id !== plot.id) e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{plot.id}</span>
                {plot.status === 'occupied' && (
                  <span style={{ fontSize: '0.65rem', textAlign: 'center', marginTop: '4px', color: 'var(--brand-blue)', fontWeight: 'bold' }}>
                    {plot.company.split(' ')[0]}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: 'white', padding: '10px 15px', borderRadius: '8px', boxShadow: 'var(--shadow-md)', fontSize: '0.85rem', fontWeight: 'bold' }}>
            Taux d'occupation : <span style={{ color: 'var(--accent-primary)' }}>62%</span>
          </div>
        </div>

        {/* PANNEAU DE DETAILS */}
        <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--brand-blue)', fontSize: '1.2rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>
            Détails de la Parcelle
          </h3>

          {selectedPlot ? (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{selectedPlot.id}</span>
                  <span style={{ 
                    padding: '4px 12px', 
                    borderRadius: '20px', 
                    fontSize: '0.85rem', 
                    fontWeight: 'bold',
                    background: selectedPlot.status === 'available' ? 'rgba(0,150,57,0.1)' : selectedPlot.status === 'occupied' ? 'rgba(30,58,138,0.1)' : 'rgba(242,148,0,0.1)',
                    color: selectedPlot.status === 'available' ? 'var(--accent-primary)' : selectedPlot.status === 'occupied' ? 'var(--brand-blue)' : 'var(--accent-tertiary)'
                  }}>
                    {selectedPlot.status === 'available' ? 'Disponible' : selectedPlot.status === 'occupied' ? 'Occupé' : 'En Aménagement'}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Superficie :</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{selectedPlot.size}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Redevance Annuelle :</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{selectedPlot.price}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Raccordement Électrique :</span>
                    <strong style={{ color: 'var(--accent-primary)' }}>Haute Tension (Prêt)</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '8px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>Fibre Optique :</span>
                    <strong style={{ color: 'var(--accent-primary)' }}>Connecté (Tier III)</strong>
                  </div>
                </div>
              </div>

              {selectedPlot.status === 'occupied' && (
                <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
                  <h4 style={{ margin: '0 0 10px 0', color: 'var(--brand-blue)', fontSize: '0.95rem' }}>Informations Locataire</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold' }}>{selectedPlot.company}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Secteur : {selectedPlot.sector}<br/>
                    Emplois créés : ~120
                  </div>
                </div>
              )}

              <div style={{ marginTop: 'auto' }}>
                {selectedPlot.status === 'available' ? (
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', background: 'var(--accent-primary)' }}>
                    <CheckCircle size={20} /> Réserver cette parcelle (MoU)
                  </button>
                ) : (
                  <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} disabled>
                    Parcelle Indisponible
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
              <Info size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ textAlign: 'center' }}>Cliquez sur une parcelle de la grille pour afficher ses caractéristiques et ses disponibilités.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DigitalTwin;
