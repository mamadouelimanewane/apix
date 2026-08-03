import React, { useState } from 'react';
import { HeadphonesIcon, MessageSquare, FileText, CheckCircle2, Clock, AlertCircle, Send, Star, ShieldAlert, ArrowUpCircle, Scale } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ESCALATION_LEVELS = [
  { level: 1, label: 'Chargé de Compte APIX' },
  { level: 2, label: 'Direction Régionale APIX' },
  { level: 3, label: 'Médiateur National (CPI)' }
];

const Aftercare = () => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [grievances, setGrievances] = useLocalStorage('apix_grievances', [
    {
      id: 'REC-2026-014',
      subject: "Retard d'exonération douanière sur équipements ZES Diass",
      severity: 'Élevée',
      level: 2,
      status: 'En médiation',
      createdAt: '2026-07-20'
    }
  ]);
  const [newSubject, setNewSubject] = useState('');
  const [newSeverity, setNewSeverity] = useState('Moyenne');
  const [newDescription, setNewDescription] = useState('');

  const tickets = [
    { id: 'TKT-2024-089', subject: 'Renouvellement Agrément Code des Investissements', date: '28 Juillet 2026', status: 'En cours', statusColor: 'var(--accent-primary)' },
    { id: 'TKT-2024-042', subject: 'Demande de Visa Long Séjour (Expatriés)', date: '15 Juillet 2026', status: 'Résolu', statusColor: '#009639' },
    { id: 'TKT-2024-091', subject: 'Problème raccordement SENELEC Zone Diass', date: '29 Juillet 2026', status: 'Nouveau', statusColor: 'var(--accent-secondary)' },
  ];

  const handleFileGrievance = () => {
    if (!newSubject.trim()) return;
    const newGrievance = {
      id: `REC-${new Date().getFullYear()}-${Math.floor(Math.random() * 900) + 100}`,
      subject: newSubject,
      description: newDescription,
      severity: newSeverity,
      level: 1,
      status: 'Ouverte',
      createdAt: new Date().toLocaleDateString('fr-FR')
    };
    setGrievances([newGrievance, ...grievances]);
    setNewSubject('');
    setNewDescription('');
    setNewSeverity('Moyenne');
  };

  const handleEscalate = (id) => {
    setGrievances(grievances.map(g => {
      if (g.id !== id || g.level >= 3) return g;
      return { ...g, level: g.level + 1, status: g.level + 1 === 3 ? 'En médiation nationale' : 'En médiation' };
    }));
  };

  return (
    <div className="aftercare-page">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <HeadphonesIcon size={32} color="var(--brand-blue)" /> Investor Aftercare & Support
        </h1>
        <p className="page-subtitle">Gérez vos requêtes administratives post-installation et participez à l'amélioration du climat des affaires.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '2rem' }}>
        {/* Sidebar Menu */}
        <div className="card" style={{ padding: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('tickets')}
              style={{ padding: '12px', textAlign: 'left', background: activeTab === 'tickets' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'tickets' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'tickets' ? 'bold' : 'normal' }}
            >
              <MessageSquare size={18} /> Mes Requêtes (Tickets)
            </button>
            <button
              onClick={() => setActiveTab('grievance')}
              style={{ padding: '12px', textAlign: 'left', background: activeTab === 'grievance' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'grievance' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'grievance' ? 'bold' : 'normal' }}
            >
              <Scale size={18} /> Réclamation & Médiation
            </button>
            <button
              onClick={() => setActiveTab('survey')}
              style={{ padding: '12px', textAlign: 'left', background: activeTab === 'survey' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'survey' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'survey' ? 'bold' : 'normal' }}
            >
              <Star size={18} /> Enquête de Satisfaction
            </button>
            <button 
              onClick={() => setActiveTab('docs')}
              style={{ padding: '12px', textAlign: 'left', background: activeTab === 'docs' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', color: activeTab === 'docs' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'docs' ? 'bold' : 'normal' }}
            >
              <FileText size={18} /> Modèles de Documents
            </button>
          </div>

          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--brand-blue)', color: 'white', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '1rem' }}>Contact Direct APIX</h4>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, margin: '0 0 10px 0' }}>Votre Chargé de Compte :</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                MD
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '0.9rem' }}>M. Diallo</strong>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>+221 33 849 05 55</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="card">
          {activeTab === 'tickets' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--brand-blue)' }}>Suivi des Requêtes</h2>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Send size={16} /> Nouveau Ticket
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tickets.map((ticket, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>{ticket.id}</span>
                        <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '12px', background: ticket.status === 'Résolu' ? 'rgba(0,150,57,0.1)' : 'rgba(30,58,138,0.1)', color: ticket.statusColor, fontWeight: 'bold' }}>
                          {ticket.status}
                        </span>
                      </div>
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{ticket.subject}</h3>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dernière mise à jour : {ticket.date}</span>
                    </div>
                    <div>
                      <button className="btn-secondary" style={{ padding: '8px 16px' }}>Consulter</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'grievance' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(227, 27, 35, 0.05)', border: '1px solid rgba(227, 27, 35, 0.15)', padding: '1.25rem', borderRadius: '8px', marginBottom: '2rem' }}>
                <ShieldAlert size={22} color="var(--accent-secondary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Mécanisme formel de réclamation (Investor Grievance Mechanism), conforme aux recommandations de la Banque Mondiale. Toute réclamation non résolue par votre Chargé de Compte est automatiquement escaladable jusqu'au Médiateur National auprès du Conseil Présidentiel de l'Investissement (CPI).
                </p>
              </div>

              <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem', color: 'var(--brand-blue)' }}>Déposer une réclamation</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Objet</label>
                  <input type="text" className="form-control" placeholder="Ex: Retard d'exonération douanière" value={newSubject} onChange={e => setNewSubject(e.target.value)} />
                </div>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Sévérité</label>
                  <select className="form-control" value={newSeverity} onChange={e => setNewSeverity(e.target.value)}>
                    <option>Faible</option>
                    <option>Moyenne</option>
                    <option>Élevée</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows="3" placeholder="Décrivez le blocage rencontré et les administrations concernées..." value={newDescription} onChange={e => setNewDescription(e.target.value)}></textarea>
              </div>
              <button className="btn-primary" onClick={handleFileGrievance} disabled={!newSubject.trim()} style={{ marginBottom: '2.5rem' }}>
                <Send size={16} /> Soumettre la réclamation
              </button>

              <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem', color: 'var(--brand-blue)' }}>Suivi des réclamations</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {grievances.map(g => (
                  <div key={g.id} style={{ padding: '1.25rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)' }}>{g.id}</span>
                          <span style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '12px', background: g.severity === 'Élevée' ? 'rgba(227,27,35,0.1)' : 'rgba(252,209,22,0.15)', color: g.severity === 'Élevée' ? 'var(--accent-secondary)' : '#b39500', fontWeight: 'bold' }}>
                            {g.severity}
                          </span>
                        </div>
                        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{g.subject}</h3>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Ouverte le {g.createdAt} · {g.status}</span>
                      </div>
                      {g.level < 3 && (
                        <button className="btn-secondary" style={{ padding: '8px 14px', fontSize: '0.85rem' }} onClick={() => handleEscalate(g.id)}>
                          <ArrowUpCircle size={14} /> Escalader
                        </button>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {ESCALATION_LEVELS.map(l => (
                        <div key={l.level} style={{ flex: 1, textAlign: 'center' }}>
                          <div style={{ height: '4px', borderRadius: '2px', background: g.level >= l.level ? 'var(--accent-secondary)' : 'rgba(0,0,0,0.08)', marginBottom: '6px' }} />
                          <span style={{ fontSize: '0.7rem', color: g.level >= l.level ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: g.level === l.level ? 'bold' : 'normal' }}>{l.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'survey' && (
            <div>
              <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem', color: 'var(--brand-blue)' }}>Baromètre Climat des Affaires</h2>
              <div style={{ background: 'rgba(252, 209, 22, 0.1)', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #fcd116', marginBottom: '2rem' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#b39500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={20} /> Votre avis compte !
                </h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Aidez l'État du Sénégal à améliorer l'environnement des affaires en répondant à notre enquête trimestrielle. 
                  Vos retours sont anonymisés et transmis directement au Conseil Présidentiel de l'Investissement (CPI).
                </p>
              </div>

              <div className="form-group">
                <label className="form-label">Comment évaluez-vous la facilité de vos démarches administratives récentes ?</label>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '10px' }}>
                  {[1,2,3,4,5].map(star => (
                    <button key={star} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <Star size={32} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group" style={{ marginTop: '1.5rem' }}>
                <label className="form-label">Avez-vous rencontré des blocages spécifiques avec certaines administrations ? (Optionnel)</label>
                <textarea className="form-control" rows="4" placeholder="Décrivez votre expérience..."></textarea>
              </div>

              <button className="btn-primary" style={{ marginTop: '1rem' }}>Soumettre l'évaluation</button>
            </div>
          )}

          {activeTab === 'docs' && (
            <div>
               <h2 style={{ margin: '0 0 1.5rem 0', fontSize: '1.3rem', color: 'var(--brand-blue)' }}>Modèles & Formulaires</h2>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Formulaire Renouvellement Agrément', 'Attestation de Régularité Fiscale', 'Déclaration d\'Emploi Main d\'Oeuvre Locale', 'Contrat Type ZES'].map((doc, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '1rem', background: 'var(--bg-primary)', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px' }}>
                      <FileText size={24} color="var(--accent-primary)" />
                      <span style={{ fontSize: '0.9rem', fontWeight: '500', flex: 1 }}>{doc}</span>
                    </div>
                  ))}
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aftercare;
