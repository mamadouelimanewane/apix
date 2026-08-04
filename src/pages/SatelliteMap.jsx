import React from 'react';
import { Satellite, Map as MapIcon, Activity, Camera, AlertTriangle } from 'lucide-react';

const SatelliteMap = () => {
  return (
    <div className="page-container" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 100px)' }}>
      <div style={{ marginBottom: '1rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Satellite size={32} color="#0284c7" /> APIX Earth : Observation Satellitaire
        
            </h1>
            <p className="page-subtitle">
              Surveillance en temps réel des chantiers industriels via imagerie satellite (Copernicus/Sentinel).
            </p>
          </div>
        </div>
    
      </div>

      <div className="card" style={{ flex: 1, padding: 0, position: 'relative', overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}>
        
        {/* Fausse carte satellite */}
        <div style={{ width: '100%', height: '100%', background: 'url(https://images.unsplash.com/photo-1518331647614-7a1f04cd34af?auto=format&fit=crop&q=80&w=1600) center/cover no-repeat', position: 'absolute', top: 0, left: 0 }}>
          {/* Overlay Tech */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(2, 132, 199, 0.1)', pointerEvents: 'none' }}></div>
          
          {/* Un marqueur animé */}
          <div style={{ position: 'absolute', top: '45%', left: '55%', transform: 'translate(-50%, -50%)' }}>
            <div style={{ width: '40px', height: '40px', background: 'rgba(16, 185, 129, 0.2)', border: '2px solid #10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}>
              <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%' }}></div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.8)', color: 'white', padding: '5px 10px', borderRadius: '4px', fontSize: '0.8rem', marginTop: '10px', whiteSpace: 'nowrap', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)' }}>
              ZES Diass - Phase 2 (En construction)
            </div>
          </div>
        </div>

        {/* UI Overlay */}
        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#38bdf8' }}>
              <Camera size={20} /> <span style={{ fontWeight: 'bold' }}>Flux Actif : Sentinel-2A</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '5px' }}>Dernière capture : Aujourd'hui, 08:45 GMT</div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '5px' }}>Résolution : 10m / pixel</div>
            <div style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Couverture Nuageuse : 12%</div>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '8px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: '#f59e0b' }}>
              <Activity size={20} /> <span style={{ fontWeight: 'bold' }}>Analyse IA (Chantiers)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '8px' }}>
              <span>Avancement Usine A</span>
              <span style={{ color: '#10b981' }}>+4% cette semaine</span>
            </div>
            <div style={{ width: '100%', background: 'rgba(255,255,255,0.2)', height: '4px', borderRadius: '2px', marginBottom: '15px' }}>
              <div style={{ width: '65%', background: '#10b981', height: '100%', borderRadius: '2px' }}></div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(239, 68, 68, 0.2)', padding: '8px', borderRadius: '4px', fontSize: '0.8rem', color: '#fca5a5' }}>
              <AlertTriangle size={16} /> Déforestation non autorisée détectée (Zone Ouest)
            </div>
          </div>

        </div>

      </div>
      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default SatelliteMap;
