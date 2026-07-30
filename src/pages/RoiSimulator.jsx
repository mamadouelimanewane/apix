import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, ShieldCheck, ArrowRight, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const RoiSimulator = () => {
  const [investissement, setInvestissement] = useState(10); // Millions $
  const [caAnnuel, setCaAnnuel] = useState(5); // Millions $
  const [chargesExplotation, setChargesExplotation] = useState(2); // Millions $
  const { t } = useLanguage();

  // Calculs (Simplifiés)
  const impotDroitCommun = 0.30; // 30% IS
  const impotZes = 0.15; // 15% IS ZES

  const beneficeAvantImpot = caAnnuel - chargesExplotation;
  
  const impotsPayesDroitCommun = beneficeAvantImpot > 0 ? beneficeAvantImpot * impotDroitCommun : 0;
  const impotsPayesZes = beneficeAvantImpot > 0 ? beneficeAvantImpot * impotZes : 0;

  const beneficeNetDroitCommun = beneficeAvantImpot - impotsPayesDroitCommun;
  const beneficeNetZes = beneficeAvantImpot - impotsPayesZes;

  // Projection sur 5 ans (Cumulative)
  const projectionData = Array.from({ length: 5 }, (_, i) => {
    const year = new Date().getFullYear() + i;
    // On simule une croissance de 5% du CA par an
    const growthFactor = Math.pow(1.05, i);
    const baImpots = (caAnnuel * growthFactor) - (chargesExplotation * Math.pow(1.02, i));
    
    return {
      name: year.toString(),
      'Régime Standard (30%)': Number((baImpots * (1 - impotDroitCommun)).toFixed(2)),
      'Régime ZES (15%)': Number((baImpots * (1 - impotZes)).toFixed(2))
    };
  });

  const economieAnnuelle = beneficeNetZes - beneficeNetDroitCommun;

  return (
    <div className="roi-simulator-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calculator size={32} color="var(--accent-primary)" /> {t('roi.title')}
          </h1>
          <p className="page-subtitle">{t('roi.subtitle')}</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        
        {/* COLONNE GAUCHE: Paramètres */}
        <div className="card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DollarSign size={20} /> {t('roi.params_title')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {t('roi.investment')}
                <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>${investissement}M</span>
              </label>
              <input type="range" min="1" max="100" value={investissement} onChange={e => setInvestissement(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--brand-blue)' }} />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {t('roi.revenue')}
                <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>${caAnnuel}M</span>
              </label>
              <input type="range" min="1" max="50" value={caAnnuel} onChange={e => setCaAnnuel(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--brand-blue)' }} />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                {t('roi.expenses')}
                <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>${chargesExplotation}M</span>
              </label>
              <input type="range" min="0.5" max="40" step="0.5" value={chargesExplotation} onChange={e => setChargesExplotation(Number(e.target.value))} style={{ width: '100%', accentColor: 'var(--brand-blue)' }} />
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--bg-tertiary)', borderRadius: '12px', borderLeft: '4px solid var(--accent-primary)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={18} color="var(--accent-primary)" /> {t('roi.benefits_title')}
            </h4>
            <ul style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
              <li>{t('roi.b1')}</li>
              <li>{t('roi.b2')}</li>
              <li>{t('roi.b3')}</li>
              <li>{t('roi.b4')}</li>
            </ul>
          </div>
        </div>

        {/* COLONNE DROITE: Résultats et Graphiques */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div className="card" style={{ borderTop: '4px solid #94a3b8' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px' }}>
                {t('roi.net_standard')}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                ${beneficeNetDroitCommun.toFixed(2)}M
              </div>
              <div style={{ fontSize: '0.85rem', color: '#ef4444', marginTop: '8px' }}>
                {t('roi.tax_30')} : ${impotsPayesDroitCommun.toFixed(2)}M
              </div>
            </div>

            <div className="card" style={{ borderTop: '4px solid var(--accent-primary)', background: 'rgba(242, 148, 0, 0.05)' }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--brand-blue)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                {t('roi.net_zes')} <ShieldCheck size={16} color="var(--accent-primary)" />
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--brand-blue)' }}>
                ${beneficeNetZes.toFixed(2)}M
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', marginTop: '8px', fontWeight: 'bold' }}>
                {t('roi.savings')} : +${economieAnnuelle.toFixed(2)}M
              </div>
            </div>
          </div>

          {/* Graphique */}
          <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ margin: '0 0 1.5rem 0', color: 'var(--text-primary)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={20} color="var(--brand-blue)" /> {t('roi.chart_title')}
            </h3>
            
            <div style={{ flex: 1, minHeight: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectionData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip cursor={{fill: 'rgba(0,0,0,0.05)'}} />
                  <Legend />
                  <Bar dataKey="Régime Standard (30%)" fill="#94a3b8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Régime ZES (15%)" fill="var(--brand-blue)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1rem', borderRadius: '8px', marginTop: '1rem', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Info size={20} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', color: '#166534' }}>
                <strong>{t('roi.impact_title')}</strong> {t('roi.impact_desc')} <strong>${(economieAnnuelle * 5).toFixed(2)} {t('roi.impact_desc2')}</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoiSimulator;
