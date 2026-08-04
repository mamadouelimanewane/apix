import React, { useState, useEffect, useRef } from 'react';
import { Network, CheckCircle2, AlertTriangle, Landmark, Ship, Building2, Zap, BarChart3, MapPin, ArrowLeftRight, Activity } from 'lucide-react';

const AGENCIES = [
  { id: 'dgid', name: 'DGID', fullName: 'Direction Générale des Impôts et des Domaines', icon: Landmark, domain: 'Fiscalité & régularité fiscale', endpoint: '/xroad/dgid/v1/attestations', status: 'connected', baseVolume: 1240 },
  { id: 'douanes', name: 'Douanes Sénégalaises', fullName: 'Direction Générale des Douanes', icon: Ship, domain: 'Import / Export & exonérations ZES', endpoint: '/xroad/douanes/v1/exonerations', status: 'connected', baseVolume: 860 },
  { id: 'greffe', name: 'Greffe RCCM', fullName: 'Tribunal de Commerce - Greffe RCCM/NINEA', icon: Building2, domain: 'Immatriculation des sociétés', endpoint: '/xroad/greffe/v1/immatriculations', status: 'degraded', baseVolume: 410 },
  { id: 'senelec', name: 'SENELEC', fullName: 'Société Nationale d\'Électricité', icon: Zap, domain: 'Raccordement & capacité énergétique', endpoint: '/xroad/senelec/v1/raccordements', status: 'connected', baseVolume: 190 },
  { id: 'ansd', name: 'ANSD', fullName: 'Agence Nationale de la Statistique et de la Démographie', icon: BarChart3, domain: 'Données macroéconomiques', endpoint: '/xroad/ansd/v1/indicateurs', status: 'connected', baseVolume: 320 },
  { id: 'cadastre', name: 'Cadastre', fullName: 'Direction Générale des Impôts et des Domaines - Cadastre', icon: MapPin, domain: 'Titres fonciers & disponibilité ZES', endpoint: '/xroad/cadastre/v1/parcelles', status: 'connected', baseVolume: 275 },
];

const formatElapsed = (date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return `il y a ${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `il y a ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  return `il y a ${hours}h`;
};

const Interoperability = () => {
  const [, forceTick] = useState(0);
  const [lastSync, setLastSync] = useState(() =>
    Object.fromEntries(AGENCIES.map(a => [a.id, new Date(Date.now() - Math.random() * 60000)]))
  );
  const [volumes, setVolumes] = useState(() => Object.fromEntries(AGENCIES.map(a => [a.id, a.baseVolume])));
  const [feed, setFeed] = useState([
    { id: 0, agency: 'DGID', message: "Vérification attestation de régularité fiscale — dossier SN-2024-8902", time: new Date(Date.now() - 45000) }
  ]);
  const feedIdRef = useRef(1);

  useEffect(() => {
    const tickInterval = setInterval(() => forceTick(t => t + 1), 5000);
    const syncInterval = setInterval(() => {
      const agency = AGENCIES[Math.floor(Math.random() * AGENCIES.length)];
      setLastSync(prev => ({ ...prev, [agency.id]: new Date() }));
      setVolumes(prev => ({ ...prev, [agency.id]: prev[agency.id] + Math.floor(Math.random() * 3) + 1 }));

      const actions = {
        dgid: "Synchronisation attestation fiscale",
        douanes: "Contrôle exonération douanière ZES",
        greffe: "Mise à jour immatriculation RCCM",
        senelec: "Vérification capacité de raccordement",
        ansd: "Actualisation indicateur macroéconomique",
        cadastre: "Vérification disponibilité parcelle ZES"
      };

      setFeed(prev => [
        { id: feedIdRef.current++, agency: agency.name, message: actions[agency.id], time: new Date() },
        ...prev
      ].slice(0, 12));
    }, 4000);

    return () => {
      clearInterval(tickInterval);
      clearInterval(syncInterval);
    };
  }, []);

  const totalVolume = Object.values(volumes).reduce((a, b) => a + b, 0);
  const connectedCount = AGENCIES.filter(a => a.status === 'connected').length;

  return (
    <div className="interoperability-page">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Network size={32} color="var(--brand-blue)" /> Interopérabilité Inter-Administrations
        
            </h1>
            <p className="page-subtitle">
              Échange sécurisé de données en temps réel avec les systèmes d'information des administrations partenaires (architecture inspirée du modèle X-Road).
            </p>
          </div>
        </div>
    
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="card" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #004b2c 100%)', color: 'white' }}>
          <p style={{ opacity: 0.85, fontSize: '0.9rem', marginBottom: '4px' }}>Administrations connectées</p>
          <h3 style={{ fontSize: '2rem', margin: 0 }}>{connectedCount} / {AGENCIES.length}</h3>
        </div>
        <div className="card">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Échanges de données (aujourd'hui)</p>
          <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-primary)' }}>{totalVolume.toLocaleString('fr-FR')}</h3>
        </div>
        <div className="card">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>Disponibilité du bus (30j)</p>
          <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--accent-primary)' }}>99.6%</h3>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignContent: 'start' }}>
          {AGENCIES.map(agency => {
            const Icon = agency.icon;
            const isDegraded = agency.status === 'degraded';
            return (
              <div key={agency.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ padding: '10px', background: isDegraded ? 'rgba(252, 209, 22, 0.15)' : 'rgba(0, 150, 57, 0.1)', borderRadius: '8px', color: isDegraded ? '#b39500' : 'var(--accent-primary)' }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1rem' }}>{agency.name}</h3>
                      <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>{agency.domain}</p>
                    </div>
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 'bold', padding: '4px 10px', borderRadius: 'var(--radius-full)', background: isDegraded ? 'rgba(252, 209, 22, 0.15)' : 'rgba(0, 150, 57, 0.1)', color: isDegraded ? '#b39500' : 'var(--accent-primary)' }}>
                    {isDegraded ? <AlertTriangle size={12} /> : <CheckCircle2 size={12} />}
                    {isDegraded ? 'Dégradé' : 'Connecté'}
                  </span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '10px', fontFamily: 'monospace', background: 'var(--bg-primary)', padding: '6px 10px', borderRadius: '6px' }}>
                  {agency.endpoint}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Dernière synchro : <strong style={{ color: 'var(--text-primary)' }}>{formatElapsed(lastSync[agency.id])}</strong></span>
                  <span style={{ color: 'var(--text-secondary)' }}>Vol. : <strong style={{ color: 'var(--text-primary)' }}>{volumes[agency.id]}</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Activity size={20} /> Flux d'échanges en direct
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowY: 'auto', maxHeight: '600px' }}>
            {feed.map(entry => (
              <div key={entry.id} style={{ display: 'flex', gap: '10px', padding: '10px', background: 'var(--bg-primary)', borderRadius: '8px', fontSize: '0.85rem' }}>
                <ArrowLeftRight size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ margin: 0, fontWeight: '600', color: 'var(--text-primary)' }}>{entry.agency}</p>
                  <p style={{ margin: '2px 0', color: 'var(--text-secondary)' }}>{entry.message}</p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{formatElapsed(entry.time)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interoperability;
