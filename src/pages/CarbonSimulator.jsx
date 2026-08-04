import React, { useState } from 'react';
import { Leaf, Wind, Sun, BatteryCharging, Factory, TrendingDown, Info } from 'lucide-react';

const CarbonSimulator = () => {
  const [energyUsage, setEnergyUsage] = useState(1000);
  
  // Simulation simple: 
  // Base Asie (charbon dominant) = ~0.7 kg CO2 / kWh
  // Base Senegal (mix gaz-to-power + solaire) = ~0.4 kg CO2 / kWh
  const co2Asia = energyUsage * 0.7;
  const co2Senegal = energyUsage * 0.4;
  const savings = co2Asia - co2Senegal;
  const percentageSaved = Math.round((savings / co2Asia) * 100);

  return (
    <div className="page-container page-fade-in">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Leaf size={32} color="#10b981" /> Simulateur ESG & Carbone
        
            </h1>
            <p className="page-subtitle">
              Évaluez la réduction de votre empreinte carbone grâce au mix énergétique durable du Sénégal (Gas-to-Power & EnR).
            </p>
          </div>
        </div>
    
      </div>

      <div className="responsive-grid responsive-grid-2">
        {/* Controls */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Factory size={20} color="var(--text-secondary)" /> Profil de l'Usine
          </h3>
          
          <div className="form-group">
            <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-secondary)' }}>
              <span>Consommation Électrique (MWh/an)</span>
              <span style={{ fontWeight: 'bold', color: 'var(--brand-blue)' }}>{energyUsage} MWh</span>
            </label>
            <input 
              type="range" 
              min="100" 
              max="5000" 
              step="100"
              value={energyUsage} 
              onChange={(e) => setEnergyUsage(parseInt(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--brand-blue)' }}
            />
          </div>

          <div style={{ background: 'var(--bg-tertiary)', padding: '15px', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Info size={16} color="var(--brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0 }}>
                Le Sénégal opère une transition majeure vers le <strong>Gas-to-Power</strong> (utilisant le gaz de GTA) et augmente considérablement la part du Solaire/Éolien dans son mix énergétique, offrant un avantage comparatif énorme face aux réseaux dépendants du charbon.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <div style={{ flex: 1, padding: '15px', background: 'rgba(234, 179, 8, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
              <Sun size={24} color="#eab308" style={{ marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold', color: '#eab308' }}>30%</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Énergies Renouvelables</div>
            </div>
            <div style={{ flex: 1, padding: '15px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
              <Wind size={24} color="#0ea5e9" style={{ marginBottom: '10px' }} />
              <div style={{ fontWeight: 'bold', color: '#0ea5e9' }}>Parc Éolien</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Taiba N'Diaye</div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ margin: '0 0 20px 0', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <TrendingDown size={20} color="#10b981" /> Impact Environnemental (Scope 2)
          </h3>
          
          <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
            <div style={{ flex: 1, textAlign: 'center', padding: '20px', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid rgba(255,0,0,0.2)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-muted)' }}>Moyenne Émergents (Asie)</h4>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>{co2Asia.toLocaleString()}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tonnes CO2e / an</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', padding: '20px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
              <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-muted)' }}>Implantation Sénégal</h4>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{co2Senegal.toLocaleString()}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Tonnes CO2e / an</div>
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', borderRadius: '12px', color: 'white', padding: '20px', textAlign: 'center' }}>
            <BatteryCharging size={48} style={{ marginBottom: '10px' }} />
            <h2 style={{ fontSize: '3rem', margin: '0 0 5px 0' }}>-{percentageSaved}%</h2>
            <h3 style={{ margin: 0, fontWeight: 'normal', opacity: 0.9 }}>d'émissions de Gaz à Effet de Serre</h3>
            <p style={{ marginTop: '15px', fontSize: '0.9rem', opacity: 0.8, maxWidth: '80%' }}>
              Produire au Sénégal vous aide à respecter les normes ESG européennes (CBAM) et à attirer les financements verts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonSimulator;
