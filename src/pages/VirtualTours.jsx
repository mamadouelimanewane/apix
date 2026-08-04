import React, { useState } from 'react';
import { View, Map, Maximize2, PlayCircle, Info } from 'lucide-react';

const VirtualTours = () => {
  const [activeZone, setActiveZone] = useState('diamniadio');

  const zones = {
    diamniadio: { name: 'ZES de Diamniadio', desc: 'Pôle industriel et technologique', img: 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800' },
    diass: { name: 'ZES de Diass', desc: 'Pôle logistique et aéroportuaire', img: 'https://images.unsplash.com/photo-1542289659-33513364f3ce?auto=format&fit=crop&q=80&w=800' },
    sandiara: { name: 'ZES de Sandiara', desc: 'Zone agro-industrielle', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' }
  };

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <View size={32} color="var(--brand-blue)" /> Visites Virtuelles (360° & VR)
        </h1>
        <p className="page-subtitle">Explorez les Zones Économiques Spéciales du Sénégal comme si vous y étiez.</p>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {Object.entries(zones).map(([key, z]) => (
          <button 
            key={key} 
            onClick={() => setActiveZone(key)}
            className={activeZone === key ? 'btn-primary' : 'btn-secondary'}
          >
            {z.name}
          </button>
        ))}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
        <div style={{ height: '60vh', background: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={zones[activeZone].img} alt={zones[activeZone].name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
          
          <div style={{ position: 'absolute', textAlign: 'center', color: 'white' }}>
            <PlayCircle size={64} style={{ cursor: 'pointer', marginBottom: '1rem' }} />
            <h2>Démarrer la visite immersive</h2>
            <p style={{ opacity: 0.8 }}>Glissez pour regarder autour de vous (360°)</p>
          </div>

          <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ background: 'rgba(0,0,0,0.5)', padding: '10px 20px', borderRadius: '8px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', backdropFilter: 'blur(5px)' }}>
              <Map size={20} />
              <span>{zones[activeZone].name} - {zones[activeZone].desc}</span>
            </div>
            <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', padding: '10px', borderRadius: '50%', color: 'white', cursor: 'pointer', backdropFilter: 'blur(5px)' }}>
              <Maximize2 size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;
