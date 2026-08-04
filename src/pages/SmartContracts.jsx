import React, { useState } from 'react';
import { Hexagon, CheckCircle2, FileKey, Shield, Clock } from 'lucide-react';

const SmartContracts = () => {
  const [contracts] = useState([
    { id: 'CONV-2026-892', type: 'Agrément Code Investissements', investor: 'SINO-HYDRO Africa', hash: '0x8f2a...9b4c', status: 'Validé', date: '2026-08-01', confirmations: 1240 },
    { id: 'NDA-2026-104', type: 'Accord de Confidentialité (ZES)', investor: 'TotalEnergies', hash: '0x3c1d...f2a1', status: 'Validé', date: '2026-08-03', confirmations: 890 },
    { id: 'BAIL-2026-455', type: 'Bail Emphytéotique (Diass)', investor: 'DP World', hash: '0x7e4b...d1c9', status: 'En attente', date: '2026-08-04', confirmations: 12 }
  ]);

  return (
    <div className="page-container" style={{ background: '#f8fafc' }}>
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Hexagon size={32} color="#8b5cf6" /> Blockchain & Smart Contracts
        
            </h1>
            <p className="page-subtitle">
              Registre décentralisé, immuable et transparent pour sécuriser les conventions d'investissement de l'État du Sénégal.
            </p>
          </div>
        </div>
    
      </div>

      <div className="responsive-grid responsive-grid-3" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FileKey size={24} color="#8b5cf6" />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>1,452</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Contrats Ancrés</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Shield size={24} color="#10b981" />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Zéro</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Falsifications détectées</div>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={24} color="#3b82f6" />
          </div>
          <div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>&lt; 3s</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Temps de vérification</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)' }}>Grand Livre (Ledger) des Conventions</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ background: 'var(--bg-tertiary)' }}>
              <tr>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Référence</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Type de Document</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Investisseur</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Hash Cryptographique</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>Statut & Réseau</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', background: 'white' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 'bold', color: 'var(--brand-blue)' }}>{c.id}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>{c.type}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>{c.investor}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.05)', padding: '4px 8px', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                      {c.hash}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    {c.status === 'Validé' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981', fontWeight: 'bold', fontSize: '0.85rem' }}>
                        <CheckCircle2 size={16} /> Validé ({c.confirmations} conf.)
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', fontWeight: 'bold', fontSize: '0.85rem' }}>
                        <Clock size={16} /> En attente ({c.confirmations} conf.)
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SmartContracts;
