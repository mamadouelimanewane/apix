import React, { useState } from 'react';
import { Map, MapPin, Navigation, Info, Search, Building2, Ruler, CheckCircle2, Factory } from 'lucide-react';

const ZesExplorer = () => {
  const [selectedZone, setSelectedZone] = useState('diass');

  const zones = [
    { id: 'diass', name: 'ZES de Diass', type: 'Industrie & Logistique', location: 'Proximité AIBD' },
    { id: 'sandiara', name: 'ZES de Sandiara', type: 'Agro-industrie & Énergie', location: 'Région de Thiès' },
    { id: 'diamniadio', name: 'ZES de Diamniadio', type: 'Tech & Services', location: 'Pôle Urbain' }
  ];

  const plots = {
    diass: [
      { id: 'D-01', size: '10 000 m²', status: 'Disponible', price: '500 FCFA/m²/an', type: 'Industriel Lourd' },
      { id: 'D-02', size: '5 000 m²', status: 'Réservé', price: '500 FCFA/m²/an', type: 'Logistique' },
      { id: 'D-03', size: '20 000 m²', status: 'Disponible', price: '450 FCFA/m²/an', type: 'Usine d\'Assemblage' },
    ],
    sandiara: [
      { id: 'S-14', size: '15 000 m²', status: 'Disponible', price: '400 FCFA/m²/an', type: 'Agro-Industrie' },
      { id: 'S-15', size: '8 000 m²', status: 'Disponible', price: '400 FCFA/m²/an', type: 'Transformation' },
    ],
    diamniadio: [
      { id: 'DIA-08', size: '2 000 m²', status: 'Réservé', price: '800 FCFA/m²/an', type: 'Data Center' },
      { id: 'DIA-09', size: '4 000 m²', status: 'Disponible', price: '800 FCFA/m²/an', type: 'Bureaux/Tech' },
    ]
  };

  return (
    <div className="page-container page-fade-in" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Map size={32} color="var(--brand-blue)" /> Cadastre Industriel Interactif
        
            </h1>
            <p className="page-subtitle">
              Explorez les parcelles disponibles dans les Zones Économiques Spéciales en temps réel.
            </p>
          </div>
        </div>
    
      </div>

      <div style={{ display: 'flex', gap: '20px', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar Zones */}
        <div className="card" style={{ width: '300px', display: 'flex', flexDirection: 'column', padding: '1rem', overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1rem', color: 'var(--text-secondary)' }}>Sélectionnez une ZES</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {zones.map(zone => (
              <div 
                key={zone.id} 
                onClick={() => setSelectedZone(zone.id)}
                style={{ 
                  padding: '15px', 
                  borderRadius: '10px', 
                  cursor: 'pointer',
                  border: selectedZone === zone.id ? '2px solid var(--brand-blue)' : '2px solid transparent',
                  background: selectedZone === zone.id ? 'rgba(59, 130, 246, 0.05)' : 'var(--bg-tertiary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-primary)' }}>{zone.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <Factory size={14} /> {zone.type}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '5px' }}>
                  <MapPin size={14} /> {zone.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content - Plots & Map Mockup */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          
          {/* Map Placeholder */}
          <div className="card" style={{ flex: '0 0 300px', position: 'relative', padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80") center/cover' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.7)' }}></div>
            
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <Navigation size={48} color="var(--brand-blue)" style={{ marginBottom: '10px' }} />
              <h2 style={{ color: 'white', margin: 0 }}>Vue Satellite - {zones.find(z => z.id === selectedZone)?.name}</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>Module SIG en cours d'intégration (Données cadastrales APIX)</p>
            </div>
            
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', zIndex: 1 }}>
              <button className="btn-primary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>
                <Search size={16} /> Explorer en 3D
              </button>
            </div>
          </div>

          {/* Plots List */}
          <div className="card" style={{ flex: 1 }}>
            <h3 style={{ margin: '0 0 20px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Building2 size={20} color="var(--brand-blue)" /> Parcelles Disponibles
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {plots[selectedZone].map(plot => (
                <div key={plot.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px', background: 'var(--bg-tertiary)', borderRadius: '10px', borderLeft: plot.status === 'Disponible' ? '4px solid #10b981' : '4px solid #f59e0b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', color: 'var(--text-primary)' }}>Parcelle {plot.id}</h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{plot.type}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', fontSize: '0.9rem', background: 'var(--bg-secondary)', padding: '5px 10px', borderRadius: '5px' }}>
                      <Ruler size={16} /> {plot.size}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ color: plot.status === 'Disponible' ? '#10b981' : '#f59e0b', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                        {plot.status === 'Disponible' && <CheckCircle2 size={16} />} {plot.status}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '2px' }}>{plot.price}</div>
                    </div>
                    
                    <button 
                      className={plot.status === 'Disponible' ? 'btn-primary' : 'btn-secondary'} 
                      disabled={plot.status !== 'Disponible'}
                      style={{ padding: '8px 15px' }}
                    >
                      {plot.status === 'Disponible' ? 'Réserver' : 'Indisponible'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZesExplorer;
