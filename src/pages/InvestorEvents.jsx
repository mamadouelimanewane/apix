import React from 'react';
import { Calendar, Video, Users, ArrowRight } from 'lucide-react';

const InvestorEvents = () => {
  const events = [
    { title: 'Forum Invest in Senegal 2026', date: '15 Septembre 2026', type: 'Présentiel & Virtuel', location: 'CICAD, Diamniadio' },
    { title: 'Webinaire : Nouvelles Incitations Fiscales', date: '22 Septembre 2026', type: 'En ligne', location: 'Zoom' },
    { title: 'Masterclass : Comprendre le Contenu Local', date: '05 Octobre 2026', type: 'En ligne', location: 'Microsoft Teams' }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Calendar size={32} color="var(--brand-blue)" /> Événements & Communauté
        </h1>
        <p className="page-subtitle">Participez à nos webinaires, forums d'investissement et développez votre réseau au Sénégal.</p>
      </div>

      <div className="responsive-grid responsive-grid-3">
        {events.map((evt, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ background: 'var(--bg-tertiary)', height: '150px', borderRadius: '8px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              {evt.type === 'En ligne' ? <Video size={48} /> : <Users size={48} />}
            </div>
            <h3 style={{ color: 'var(--brand-blue)', marginBottom: '0.5rem' }}>{evt.title}</h3>
            <p style={{ margin: '0 0 4px 0', fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{evt.date}</p>
            <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{evt.type} • {evt.location}</p>
            <div style={{ marginTop: 'auto' }}>
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>S'inscrire <ArrowRight size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorEvents;
