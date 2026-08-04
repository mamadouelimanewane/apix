import React, { useState } from 'react';
import { Lock, FileText, Download, CheckCircle, Brain, Shield, AlertTriangle, Building, Briefcase, CalendarClock, Video, CalendarPlus } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ADVISORS = ['Mme Ndiaye (Juridique)', 'M. Diallo (Fiscalité & Incitations)', 'Mme Sarr (Foncier & ZES)'];

const generateSlots = () => {
  const slots = [];
  let d = new Date();
  while (slots.length < 5) {
    d = new Date(d.getTime() + 24 * 3600 * 1000);
    const day = d.getDay();
    if (day === 0 || day === 6) continue; // week-ends exclus
    slots.push({ date: d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }), iso: d.toISOString().split('T')[0] });
  }
  return slots;
};

const buildIcs = (booking) => {
  const dt = booking.iso.replace(/-/g, '') + 'T' + booking.time.replace(':', '') + '00';
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'BEGIN:VEVENT',
    `SUMMARY:Rendez-vous APIX - ${booking.advisor}`,
    `DESCRIPTION:Visioconférence Deal Room APIX - ${booking.link}`,
    `DTSTART:${dt}`,
    'DURATION:PT45M',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\n');
};

const downloadIcs = (booking) => {
  const blob = new Blob([buildIcs(booking)], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'rdv-apix.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const DealRoom = ({ mode = 'investor' }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState(null);
  const [slots] = useState(generateSlots);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTime, setSelectedTime] = useState('09:00');
  const [advisor, setAdvisor] = useState(ADVISORS[0]);
  const [booking, setBooking] = useLocalStorage('apix_dealroom_booking', null);

  const handleConfirmBooking = () => {
    if (!selectedSlot) return;
    const meetingId = Math.random().toString(36).slice(2, 9);
    setBooking({
      date: selectedSlot.date,
      iso: selectedSlot.iso,
      time: selectedTime,
      advisor,
      link: `https://meet.apix.sn/${meetingId}`
    });
  };

  // Form State
  const [investorName, setInvestorName] = useState('Global Logistics LLC');
  const [projectType, setProjectType] = useState('Construction Hub Logistique');
  const [investmentAmount, setInvestmentAmount] = useState('45');
  const [zone, setZone] = useState('ZES de Diass');
  const [employment, setEmployment] = useState('250');

  const handleGenerateMoU = () => {
    setIsGenerating(true);
    // Simulate AI Draft Generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedDoc(`MEMORANDUM OF UNDERSTANDING (MoU)
Entre : L'Agence pour la Promotion des Investissements et des Grands Travaux (APIX)
Et : ${investorName}

1. OBJET
Le présent protocole a pour objet de définir le cadre de coopération pour le projet de "${projectType}" situé dans la ${zone}.

2. ENGAGEMENTS DE L'INVESTISSEUR
- Montant d'investissement projeté : ${investmentAmount} Millions USD.
- Création d'emplois locaux directs : ${employment} emplois garantis.
- Respect strict de la loi sur le Contenu Local (Loi N°2019-04).

3. INCITATIONS APIX (ZES)
Sous réserve de l'agrément définitif, l'APIX s'engage à garantir :
- Exonération de la TVA sur les équipements de production.
- Taux d'Impôt sur les Sociétés (IS) réduit à 15%.
- Facilitation de l'obtention des titres fonciers sous 30 jours.

Fait à Dakar, le ${new Date().toLocaleDateString('fr-FR')}

[Signature APIX]                     [Signature ${investorName}]`);
    }, 2500);
  };

  return (
    <div className="deal-room-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Lock size={32} color="#e31b23" /> Smart Deal Room & VDR
          </h1>
          <p className="page-subtitle">Espace ultra-sécurisé de négociation (Virtual Data Room) et génération de contrats assistée par IA.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(227, 27, 35, 0.1)', color: '#e31b23', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold' }}>
          <Shield size={18} /> Chiffrement AES-256
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: mode === 'apix' ? '1fr 1fr' : '1fr', gap: '2rem', maxWidth: mode === 'apix' ? '100%' : '800px', margin: mode === 'apix' ? '0' : '0 auto' }}>
        
        {/* COLONNE GAUCHE: Formulaire IA (APIX ONLY) */}
        {mode === 'apix' && (
          <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Brain size={24} color="var(--accent-primary)" /> Assistant Juridique IA (Term Sheet)
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            L'IA analyse les paramètres de l'investissement et rédige un Protocole d'Accord (MoU) préliminaire conforme au Code des Investissements du Sénégal.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', flex: 1 }}>
            <div className="form-group">
              <label className="form-label">Entité Investisseur</label>
              <input type="text" className="form-control" value={investorName} onChange={e => setInvestorName(e.target.value)} />
            </div>
            
            <div className="form-group">
              <label className="form-label">Nature du Projet</label>
              <input type="text" className="form-control" value={projectType} onChange={e => setProjectType(e.target.value)} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Montant (Millions USD)</label>
                <input type="number" className="form-control" value={investmentAmount} onChange={e => setInvestmentAmount(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Emplois Projetés</label>
                <input type="number" className="form-control" value={employment} onChange={e => setEmployment(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Zone Ciblée (ZES/Agropole)</label>
              <select className="form-control" value={zone} onChange={e => setZone(e.target.value)}>
                <option>ZES de Diamniadio</option>
                <option>ZES de Sandiara</option>
                <option>ZES de Diass</option>
                <option>Agropole Sud</option>
              </select>
            </div>
          </div>

          <button 
            className="btn-primary" 
            style={{ width: '100%', justifyContent: 'center', padding: '14px', marginTop: '1.5rem', background: isGenerating ? '#94a3b8' : 'var(--brand-blue)' }} 
            onClick={handleGenerateMoU}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both' }}></span>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.2s' }}></span>
                <span className="typing-dot" style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both 0.4s' }}></span>
                Génération en cours...
              </div>
            ) : (
              <><FileText size={20} /> Générer le Protocole (MoU)</>
            )}
          </button>
        </div>
        )}

        {/* COLONNE DROITE: Document Généré & Data Room */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Document Généré (Draft)</h3>
            
            {generatedDoc ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', border: '1px solid #cbd5e1', whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', height: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
                  {generatedDoc}
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-primary" style={{ flex: 1, background: 'var(--accent-primary)', justifyContent: 'center' }}>
                    <CheckCircle size={18} /> Soumettre au Légal (APIX)
                  </button>
                  <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                    <Download size={18} /> Exporter PDF
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', border: '2px dashed #cbd5e1', borderRadius: '8px', minHeight: '300px' }}>
                Remplissez le formulaire pour générer le MoU via l'IA.
              </div>
            )}
          </div>

          <div className="card" style={{ background: '#fffbeb', border: '1px solid #fcd34d' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#b45309', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertTriangle size={18} /> Confidentialité (Data Room)
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#92400e', margin: 0 }}>
              Les études de faisabilité (géologiques, financières) déposées dans cette Deal Room sont protégées par un filigrane dynamique et ne peuvent être téléchargées qu'avec l'accord du comité directeur.
            </p>
          </div>

          {mode === 'investor' && (
            <div className="card">
              <h3 style={{ margin: '0 0 1rem 0', color: 'var(--brand-blue)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CalendarClock size={20} /> Rendez-vous avec un Conseiller APIX
              </h3>

            {booking ? (
              <div style={{ background: 'rgba(0, 150, 57, 0.08)', border: '1px solid rgba(0, 150, 57, 0.3)', borderRadius: '8px', padding: '1.25rem' }}>
                <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: 'var(--text-primary)' }}>Confirmé : {booking.date} à {booking.time}</p>
                <p style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Avec {booking.advisor}</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <a href={booking.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ background: 'var(--accent-primary)' }}>
                    <Video size={16} /> Rejoindre la visio
                  </a>
                  <button className="btn-secondary" onClick={() => downloadIcs(booking)}>
                    <CalendarPlus size={16} /> Ajouter au calendrier
                  </button>
                  <button className="btn-secondary" onClick={() => setBooking(null)}>Annuler</button>
                </div>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label className="form-label">Conseiller</label>
                  <select className="form-control" value={advisor} onChange={e => setAdvisor(e.target.value)}>
                    {ADVISORS.map(a => <option key={a}>{a}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Créneau</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {slots.map(slot => (
                      <button
                        key={slot.iso}
                        onClick={() => setSelectedSlot(slot)}
                        className="btn-secondary"
                        style={{ fontSize: '0.8rem', padding: '8px 12px', background: selectedSlot?.iso === slot.iso ? 'rgba(30, 58, 138, 0.15)' : 'var(--bg-tertiary)', color: selectedSlot?.iso === slot.iso ? 'var(--brand-blue)' : 'var(--text-secondary)' }}
                      >
                        {slot.date}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Heure</label>
                  <select className="form-control" value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
                    <option>09:00</option>
                    <option>11:00</option>
                    <option>14:00</option>
                    <option>16:00</option>
                  </select>
                </div>
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleConfirmBooking} disabled={!selectedSlot}>
                  <CalendarClock size={18} /> Confirmer le rendez-vous
                </button>
              </>
            )}
            </div>
          )}

        </div>
      </div>
      <style>{`
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default DealRoom;
