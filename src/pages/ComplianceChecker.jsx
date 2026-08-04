import React, { useState } from 'react';
import { ClipboardCheck, CheckCircle2, XCircle, ChevronRight } from 'lucide-react';

const ComplianceChecker = () => {
  const [score, setScore] = useState(80);

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ClipboardCheck size={32} color="#0284c7" /> Audit de Conformité & Contenu Local
        </h1>
        <p className="page-subtitle">Auto-évaluez votre projet pour garantir le respect strict de la réglementation sénégalaise avant de vous lancer.</p>
      </div>

      <div className="responsive-grid responsive-grid-1-2">
        
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3rem 2rem' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'conic-gradient(#10b981 0% 80%, #e2e8f0 80% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', position: 'relative' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{score}%</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Conforme</span>
            </div>
          </div>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '10px' }}>Statut : Bon</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>Votre projet respecte la majorité des prérequis légaux, mais quelques actions sont requises concernant le Contenu Local.</p>
        </div>

        <div className="card" style={{ padding: '2rem' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Checklist Légale</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Immatriculation RCCM</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Création de l'entité juridique OHADA valide.</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Étude d'Impact Environnemental et Social (EIES)</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dossier soumis au Ministère de l'Environnement.</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px', background: 'rgba(239, 68, 68, 0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <XCircle size={24} color="#ef4444" />
                <div>
                  <div style={{ fontWeight: '600', color: '#b91c1c' }}>Plan de Contenu Local</div>
                  <div style={{ fontSize: '0.85rem', color: '#dc2626' }}>Obligatoire : 50% de sous-traitance locale non atteint.</div>
                </div>
              </div>
              <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>Corriger <ChevronRight size={14}/></button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '8px', background: 'var(--bg-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Déclaration d'Établissement (Inspection du Travail)</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Enregistrement des employés validé.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceChecker;
