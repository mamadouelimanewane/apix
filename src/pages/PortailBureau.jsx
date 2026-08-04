import React from 'react';
import { Users, Gavel, Calendar, FileText, Settings, Shield } from 'lucide-react';

const PortailBureau = () => {
  return (
    <div className="page-fade-in" style={{ padding: 0, margin: '-2rem' }}>
      {/* BANDEAU EN COULEUR */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)',
        padding: '3rem 4rem',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        {/* Motif décoratif en arrière-plan */}
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: '400px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-40%', right: '15%', width: '300px', height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', margin: '0 0 1rem 0', letterSpacing: '-1px' }}>
            Bureau Exécutif de l'APIX
          </h1>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', opacity: 0.9, maxWidth: '800px', margin: 0 }}>
            Centre de pilotage stratégique de l'institution. Coordination des investissements, supervision des grands travaux, et gestion des Zones Économiques Spéciales (ZES).
          </p>
        </div>
      </div>

      {/* CONTENU DE LA PAGE */}
      <div style={{ padding: '2rem 4rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="card" style={{ borderTop: '4px solid #3b82f6', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ background: '#eff6ff', padding: '15px', borderRadius: '12px', color: '#3b82f6' }}>
                <Users size={28} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#1e293b' }}>Comité des Investissements</h2>
            </div>
            <p style={{ color: '#64748b', margin: '0 0 1.5rem 0', lineHeight: '1.5' }}>Validation des projets stratégiques, attribution des agréments et suivi des IDE.</p>
            <button style={{ width: '100%', padding: '12px', background: '#f1f5f9', border: 'none', borderRadius: '8px', color: '#334155', fontWeight: 'bold', cursor: 'pointer' }}>Accéder à la salle virtuelle</button>
          </div>

          <div className="card" style={{ borderTop: '4px solid #10b981', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ background: '#ecfdf5', padding: '15px', borderRadius: '12px', color: '#10b981' }}>
                <Gavel size={28} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#1e293b' }}>Supervision des ZES</h2>
            </div>
            <p style={{ color: '#64748b', margin: '0 0 1.5rem 0', lineHeight: '1.5' }}>Pilotage du développement des Zones Économiques Spéciales (Diass, Sandiara, etc.).</p>
            <button style={{ width: '100%', padding: '12px', background: '#f1f5f9', border: 'none', borderRadius: '8px', color: '#334155', fontWeight: 'bold', cursor: 'pointer' }}>Voir les tableaux de bord</button>
          </div>

          <div className="card" style={{ borderTop: '4px solid #f59e0b', background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1.5rem' }}>
              <div style={{ background: '#fffbeb', padding: '15px', borderRadius: '12px', color: '#f59e0b' }}>
                <Calendar size={28} />
              </div>
              <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#1e293b' }}>Agenda Stratégique</h2>
            </div>
            <p style={{ color: '#64748b', margin: '0 0 1.5rem 0', lineHeight: '1.5' }}>Calendrier des missions de promotion économique, forums internationaux et roadshows.</p>
            <button style={{ width: '100%', padding: '12px', background: '#f1f5f9', border: 'none', borderRadius: '8px', color: '#334155', fontWeight: 'bold', cursor: 'pointer' }}>Gérer le calendrier</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PortailBureau;
