import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Zap, Ship, CheckCircle, Download } from 'lucide-react';

const SiteSelector = () => {
  const [surfaceNeeded, setSurfaceNeeded] = useState(2); // in Hectares
  const [powerNeeded, setPowerNeeded] = useState('Moyenne'); // Basse, Moyenne, Haute
  const [maxDistancePort, setMaxDistancePort] = useState(50); // km

  const parks = [
    { 
      id: 1, name: 'ZES de Diamniadio', coords: [14.7167, -17.1833], surfaceAvailable: 50, 
      powerLevels: ['Basse', 'Moyenne', 'Haute'], distancePort: 35, 
      desc: 'Parc industriel intégré haut de gamme. Proche autoroute et TER.', price: '10 000 FCFA/m²/an'
    },
    { 
      id: 2, name: 'ZES de Sandiara', coords: [14.3942, -16.8153], surfaceAvailable: 100, 
      powerLevels: ['Basse', 'Moyenne'], distancePort: 80, 
      desc: 'Idéal pour l\'agro-industrie et la logistique. Centrale solaire locale.', price: '5 000 FCFA/m²/an'
    },
    { 
      id: 3, name: 'ZES de Diass', coords: [14.6333, -17.0667], surfaceAvailable: 200, 
      powerLevels: ['Basse', 'Moyenne', 'Haute'], distancePort: 45, 
      desc: 'Focus logistique et export. Adjacente à l\'Aéroport AIBD.', price: '8 000 FCFA/m²/an'
    },
    { 
      id: 4, name: 'Domaine Industriel de Dakar', coords: [14.6928, -17.4467], surfaceAvailable: 1, 
      powerLevels: ['Basse', 'Moyenne', 'Haute'], distancePort: 5, 
      desc: 'Zone portuaire. Foncier très limité et cher.', price: 'Prix du marché'
    }
  ];

  const filteredParks = parks.filter(park => 
    park.surfaceAvailable >= surfaceNeeded &&
    park.powerLevels.includes(powerNeeded) &&
    park.distancePort <= maxDistancePort
  );

  return (
    <div className="site-selector-page" style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <h1 className="page-title" style={{ fontSize: '1.8rem' }}>Smart Site Selector</h1>
          <p className="page-subtitle" style={{ marginBottom: '0.5rem' }}>Identifiez la zone industrielle optimale selon vos critères opérationnels.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '1.5rem', height: 'calc(100% - 100px)' }}>
        {/* Panneau de filtres */}
        <div className="card" style={{ width: '350px', display: 'flex', flexDirection: 'column', gap: '1.5rem', overflowY: 'auto' }}>
          <h3 style={{ color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <MapPin size={20} /> Critères d'implantation
          </h3>
          
          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Superficie Requise</span>
              <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>{surfaceNeeded} ha</span>
            </label>
            <input type="range" className="form-control" min="1" max="50" value={surfaceNeeded} onChange={(e) => setSurfaceNeeded(Number(e.target.value))} />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Besoin minimum en hectares.</span>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Distance max au Port de Dakar</span>
              <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>{maxDistancePort} km</span>
            </label>
            <input type="range" className="form-control" min="5" max="150" step="5" value={maxDistancePort} onChange={(e) => setMaxDistancePort(Number(e.target.value))} />
          </div>

          <div className="form-group">
            <label className="form-label">Raccordement Électrique</label>
            <select className="form-control" value={powerNeeded} onChange={(e) => setPowerNeeded(e.target.value)}>
              <option value="Basse">Basse Tension</option>
              <option value="Moyenne">Moyenne Tension (Industrie standard)</option>
              <option value="Haute">Haute Tension (Industrie lourde)</option>
            </select>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)' }} />

          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>Résultats ({filteredParks.length})</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {filteredParks.length === 0 ? (
              <div style={{ padding: '1rem', background: 'rgba(227, 27, 35, 0.1)', color: 'var(--accent-secondary)', borderRadius: '8px', fontSize: '0.9rem' }}>
                Aucune zone ne correspond à tous vos critères. Essayez d'augmenter la distance au port ou de réduire la superficie.
              </div>
            ) : (
              filteredParks.map(park => (
                <div key={park.id} style={{ padding: '12px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
                  <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle size={16} /> {park.name}
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <li>Dispo: {park.surfaceAvailable} ha</li>
                    <li>Distance Port: {park.distancePort} km</li>
                    <li>Loyer: {park.price}</li>
                  </ul>
                  <button className="btn-secondary" style={{ width: '100%', marginTop: '10px', fontSize: '0.85rem', padding: '6px' }}>
                    <Download size={14} /> Fiche Détaillée
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Carte Leaflet */}
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
          <MapContainer center={[14.65, -17.05]} zoom={10} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            {filteredParks.map(park => (
              <Circle 
                key={park.id} 
                center={park.coords} 
                radius={park.surfaceAvailable * 50 + 1000} // Dynamic radius just for visual effect
                pathOptions={{ color: 'var(--accent-primary)', fillColor: 'var(--accent-primary)', fillOpacity: 0.5 }}
              >
                <Popup>
                  <strong style={{ color: 'var(--brand-blue)' }}>{park.name}</strong><br/>
                  {park.desc}
                </Popup>
              </Circle>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default SiteSelector;
