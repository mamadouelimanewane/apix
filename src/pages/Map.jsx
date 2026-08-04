import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polygon, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixation de l'icône par défaut de Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [layers, setLayers] = useState({
    zes: true,
    agropoles: true,
    ports: true,
    aeroports: true,
    energie: true,
    transport: false
  });

  const toggleLayer = (layer) => {
    setLayers(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  // Centre global du Sénégal
  const centerPos = [14.45, -14.45];
  const zoomLevel = 7;

  return (
    <div className="map-page" style={{ height: 'calc(100vh - 4rem)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ fontSize: '1.8rem' }}>
              Cartographie SIG Nationale
            </h1>
            <p className="page-subtitle" style={{ marginBottom: '0.5rem' }}>
              Vue macroscopique des zones d'investissements, agropoles, infrastructures et ressources du Sénégal.
            </p>
          </div>
        </div>
    
        </div>
      </div>
      
      <div className="map-container" style={{ height: 'calc(100% - 100px)', display: 'flex', gap: '1rem' }}>
        {/* Gestionnaire de couches latéral */}
        <div className="card" style={{ width: '300px', overflowY: 'auto' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)', fontSize: '1.1rem', borderBottom: '2px solid var(--brand-blue)', paddingBottom: '0.5rem' }}>
            Couches de Données
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.zes ? 'rgba(0, 107, 63, 0.1)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.zes} onChange={() => toggleLayer('zes')} style={{ width: '18px', height: '18px', accentColor: 'var(--brand-blue)' }} /> 
              <div>
                <strong style={{ display: 'block', color: 'var(--brand-blue)' }}>Zones Économiques (ZES)</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Diamniadio, Sandiara, Diass...</span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.agropoles ? 'rgba(242, 148, 0, 0.1)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.agropoles} onChange={() => toggleLayer('agropoles')} style={{ width: '18px', height: '18px', accentColor: 'var(--accent-primary)' }} /> 
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-primary)' }}>Agropoles (PSE)</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Nord, Centre, Sud</span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.ports ? 'rgba(0,0,0, 0.05)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.ports} onChange={() => toggleLayer('ports')} style={{ width: '18px', height: '18px' }} /> 
              <div>
                <strong style={{ display: 'block' }}>Infrastructures Portuaires</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Dakar, Ndayane, Bargny...</span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.aeroports ? 'rgba(0,0,0, 0.05)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.aeroports} onChange={() => toggleLayer('aeroports')} style={{ width: '18px', height: '18px' }} /> 
              <div>
                <strong style={{ display: 'block' }}>Aéroports Internationaux</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>AIBD, Cap Skirring, St-Louis</span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.energie ? 'rgba(227, 27, 35, 0.1)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.energie} onChange={() => toggleLayer('energie')} style={{ width: '18px', height: '18px', accentColor: 'var(--accent-secondary)' }} /> 
              <div>
                <strong style={{ display: 'block', color: 'var(--accent-secondary)' }}>Énergie & Hydrocarbures</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>GTA, Sangomar, Éolien, Solaire</span>
              </div>
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', background: layers.transport ? 'rgba(0,0,0, 0.05)' : 'transparent', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="checkbox" checked={layers.transport} onChange={() => toggleLayer('transport')} style={{ width: '18px', height: '18px' }} /> 
              <div>
                <strong style={{ display: 'block' }}>Réseaux de Transport</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>TER, Autoroute A1, Ila Touba</span>
              </div>
            </label>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            <strong>Note :</strong> Les données cartographiques sont basées sur le Plan Sénégal Émergent (PSE) et les projets structurants validés par l'APIX.
          </div>
        </div>

        {/* Carte Interactive */}
        <div style={{ flex: 1, borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)', position: 'relative' }}>
          <MapContainer center={centerPos} zoom={zoomLevel} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            
            {/* COUCHE ZES */}
            {layers.zes && (
              <>
                <Circle center={[14.7167, -17.1833]} radius={8000} pathOptions={{ color: 'var(--brand-blue)', fillColor: 'var(--brand-blue)', fillOpacity: 0.5 }}>
                  <Popup>
                    <div style={{ width: '220px' }}>
                      <h3 style={{ color: 'var(--brand-blue)', margin: '0 0 5px 0' }}>ZES de Diamniadio</h3>
                      <span style={{ fontSize: '0.75rem', background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '4px' }}>Tech / Industrie / Services</span>
                      <p style={{ fontSize: '0.85rem', margin: '8px 0' }}>Pole urbain et technologique. Hub d'innovation abritant le Parc des Technologies Numériques (PTN).</p>
                    </div>
                  </Popup>
                </Circle>
                <Circle center={[14.3942, -16.8153]} radius={6000} pathOptions={{ color: 'var(--brand-blue)', fillColor: 'var(--brand-blue)', fillOpacity: 0.5 }}>
                  <Popup><strong>ZES de Sandiara</strong><br/>Focus sur l'industrie lourde, agro-industrie et manufacturier. Proximité axe Mali.</Popup>
                </Circle>
                <Circle center={[14.6333, -17.0667]} radius={6000} pathOptions={{ color: 'var(--brand-blue)', fillColor: 'var(--brand-blue)', fillOpacity: 0.5 }}>
                  <Popup><strong>ZES de Diass</strong><br/>Logistique et fret, accolée à l'AIBD.</Popup>
                </Circle>
              </>
            )}

            {/* COUCHE AGROPOLES */}
            {layers.agropoles && (
              <>
                <Circle center={[12.5833, -16.2733]} radius={15000} pathOptions={{ color: 'var(--accent-primary)', fillColor: 'var(--accent-primary)', fillOpacity: 0.4 }}>
                  <Popup>
                    <div style={{ width: '220px' }}>
                      <h3 style={{ color: 'var(--accent-primary)', margin: '0 0 5px 0' }}>Agropole Sud (Ziguinchor)</h3>
                      <p style={{ fontSize: '0.85rem', margin: '8px 0' }}>Spécialisation : Transformation de noix de cajou, mangues, et maïs. Projet co-financé par la BAD et la BID.</p>
                    </div>
                  </Popup>
                </Circle>
                <Circle center={[14.15, -16.0667]} radius={15000} pathOptions={{ color: 'var(--accent-primary)', fillColor: 'var(--accent-primary)', fillOpacity: 0.4 }}>
                  <Popup><strong>Agropole Centre (Kaolack/Fatick)</strong><br/>Focus : Arachide, sel, céréales locales.</Popup>
                </Circle>
                <Circle center={[16.0333, -16.4833]} radius={15000} pathOptions={{ color: 'var(--accent-primary)', fillColor: 'var(--accent-primary)', fillOpacity: 0.4 }}>
                  <Popup><strong>Agropole Nord (Vallée du Fleuve)</strong><br/>Focus : Riz, oignon, tomate, patate douce.</Popup>
                </Circle>
              </>
            )}

            {/* COUCHE PORTS */}
            {layers.ports && (
              <>
                <Marker position={[14.6784, -17.4258]}><Popup><strong>Port Autonome de Dakar (PAD)</strong><br/>Capacité : 20+ Millions de Tonnes. Hub maritime majeur d'Afrique de l'Ouest.</Popup></Marker>
                <Marker position={[14.5936, -17.0863]}><Popup><strong>Port de Ndayane (En construction)</strong><br/>Investissement de 1.13 Milliard USD (DP World). Accueillera les navires post-panamax.</Popup></Marker>
                <Marker position={[14.6833, -17.2167]}><Popup><strong>Port Vraquier de Bargny-Sendou</strong><br/>Dédié au minerai et produits en vrac.</Popup></Marker>
                <Marker position={[12.5833, -16.2733]}><Popup><strong>Port de Ziguinchor</strong><br/>Desserte Sud et cabotage.</Popup></Marker>
              </>
            )}

            {/* COUCHE AEROPORTS */}
            {layers.aeroports && (
              <>
                <Marker position={[14.6711, -17.0733]}><Popup><strong>AIBD (Aéroport Intl Blaise Diagne)</strong><br/>Capacité : 3 millions de passagers. Hub régional d'Air Sénégal.</Popup></Marker>
                <Marker position={[12.3967, -16.7450]}><Popup><strong>Aéroport de Cap Skirring</strong><br/>Orienté tourisme de station balnéaire.</Popup></Marker>
                <Marker position={[16.0500, -16.4600]}><Popup><strong>Aéroport International Ousmane Baldé (St-Louis)</strong><br/>Récemment réhabilité, appui au développement touristique et pétro-gazier.</Popup></Marker>
              </>
            )}

            {/* COUCHE ÉNERGIE & HYDROCARBURES */}
            {layers.energie && (
              <>
                {/* Pétrole & Gaz */}
                <Circle center={[16.1, -17.0]} radius={20000} pathOptions={{ color: '#e31b23', fillColor: '#e31b23', fillOpacity: 0.3, dashArray: '4' }}>
                  <Popup>
                    <div style={{ width: '220px' }}>
                      <h3 style={{ color: '#e31b23', margin: '0 0 5px 0' }}>Champ Gazier GTA</h3>
                      <p style={{ fontSize: '0.85rem', margin: '8px 0' }}>Grand Tortue Ahmeyim (Offshore). Réserve mondiale (BP / Kosmos Energy). Production GNL ciblant l'export et le marché domestique (Gas-to-Power).</p>
                    </div>
                  </Popup>
                </Circle>
                <Circle center={[14.0, -17.5]} radius={18000} pathOptions={{ color: '#e31b23', fillColor: '#e31b23', fillOpacity: 0.3, dashArray: '4' }}>
                  <Popup><strong>Champ Pétrolier Sangomar</strong><br/>Opéré par Woodside Energy. Premiers barils extraits en 2024. Capacité ~100 000 barils/jour.</Popup>
                </Circle>
                
                {/* EnR */}
                <Circle center={[14.9083, -16.8917]} radius={5000} pathOptions={{ color: '#22c55e', fillColor: '#22c55e', fillOpacity: 0.6 }}>
                  <Popup><strong>Parc Éolien de Taïba Ndiaye (PETN)</strong><br/>158 MW. Le plus grand d'Afrique de l'Ouest.</Popup>
                </Circle>
                <Circle center={[16.5167, -15.4]} radius={4000} pathOptions={{ color: '#fcd116', fillColor: '#fcd116', fillOpacity: 0.6 }}>
                  <Popup><strong>Centrale Solaire de Bokhol</strong><br/>20 MW (Senergy 2).</Popup>
                </Circle>
                <Circle center={[14.4167, -16.95]} radius={4000} pathOptions={{ color: '#fcd116', fillColor: '#fcd116', fillOpacity: 0.6 }}>
                  <Popup><strong>Centrale Solaire de Malicounda</strong><br/>22 MW.</Popup>
                </Circle>
              </>
            )}

            {/* COUCHE TRANSPORT (Réseau routier et ferroviaire majeur) */}
            {layers.transport && (
              <>
                <Polyline positions={[
                  [14.675, -17.433], // Dakar
                  [14.733, -17.366], // Pikine
                  [14.7167, -17.1833], // Diamniadio
                  [14.6711, -17.0733]  // AIBD
                ]} pathOptions={{ color: 'var(--brand-blue)', weight: 4 }}>
                  <Popup><strong>Train Express Régional (TER)</strong><br/>Phase 1 et 2 reliant Dakar au nouvel aéroport AIBD.</Popup>
                </Polyline>
                
                <Polyline positions={[
                  [14.7167, -17.1833], // Diamniadio
                  [14.7933, -16.9400], // Thiès
                  [14.8667, -15.8833]  // Touba
                ]} pathOptions={{ color: '#333', weight: 3, opacity: 0.6 }}>
                  <Popup><strong>Autoroute Ila-Touba</strong><br/>Axe stratégique vers le centre du pays (113 km).</Popup>
                </Polyline>
              </>
            )}

          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
