import React from 'react';
import { Briefcase, Search, MapPin, GraduationCap } from 'lucide-react';

const JobBoard = () => {
  const talents = [
    { name: 'Amadou Fall', role: 'Ingénieur Pétrole & Gaz', exp: '5 ans d\'expérience', location: 'Dakar', degree: 'Polytechnique Thiès' },
    { name: 'Fatou Diop', role: 'Responsable Logistique', exp: '8 ans d\'expérience', location: 'Diaspora (France)', degree: 'KEDGE Business School' },
    { name: 'Moussa Ndiaye', role: 'Technicien Supérieur Maintenance', exp: '3 ans d\'expérience', location: 'Thiès', degree: 'CFPT Sénégal-Japon' }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Briefcase size={32} color="var(--brand-blue)" /> Bourse des Talents & Recrutement
        </h1>
        <p className="page-subtitle">Trouvez les meilleurs talents locaux et issus de la diaspora pour accompagner votre implantation.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        <input type="text" className="form-control" placeholder="Compétence, poste ou mot-clé..." style={{ flex: 1 }} />
        <select className="form-control">
          <option>Tous les secteurs</option>
          <option>Mines & Énergie</option>
          <option>Logistique</option>
          <option>Agro-industrie</option>
        </select>
        <button className="btn-primary"><Search size={18} /> Rechercher</button>
      </div>

      <div className="responsive-grid responsive-grid-3">
        {talents.map((t, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--brand-blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{t.name}</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 'bold' }}>{t.role}</span>
              </div>
            </div>
            
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <Briefcase size={16} /> {t.exp}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <MapPin size={16} /> {t.location}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <GraduationCap size={16} /> {t.degree}
              </div>
            </div>
            
            <button className="btn-secondary" style={{ width: '100%', marginTop: 'auto', justifyContent: 'center' }}>Voir le profil CV</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBoard;
