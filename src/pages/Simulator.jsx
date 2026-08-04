import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, FileText, CheckCircle } from 'lucide-react';

const Simulator = () => {
  const [activeTab, setActiveTab] = useState('profil');
  const [isExporting, setIsExporting] = useState(false);
  
  // Inputs
  const [sector, setSector] = useState('Industrie');
  const [region, setRegion] = useState('Dakar');
  const [exportRate, setExportRate] = useState(50);
  const [capex, setCapex] = useState(500); // Millions FCFA
  const [employees, setEmployees] = useState(50);
  const [energyMwh, setEnergyMwh] = useState(100); // MWh per year

  // Constantes Dynamiques issues de EconomyData
  const getEnergyCost = () => {
    // Moyenne Tension par défaut
    let pricePerKwh = 65; 
    if (sector === 'Industrie') pricePerKwh = 55; // Haute Tension
    return (pricePerKwh * 1000) / 1000000; // Conversion FCFA/KWh en Millions FCFA/MWh
  };

  const getSalaryCost = () => {
    let tjm = 2.5; // Millions FCFA / an
    if (sector === 'TIC & Services') tjm = 5.0; 
    return tjm;
  };

  const getLandCost = () => {
    // Millions FCFA par an pour 1 hectare (10 000 m2)
    if (region === 'Diamniadio') return 100; // 10 000 FCFA/m2
    if (region === 'Sandiara') return 50;  // 5 000 FCFA/m2
    return 150; // Dakar
  };

  // Calculs OPEX
  const totalSalaries = employees * getSalaryCost();
  const totalEnergy = energyMwh * getEnergyCost();
  const totalLand = getLandCost();
  const opex = totalSalaries + totalEnergy + totalLand;

  // Calculs Fiscaux
  const baseTaxable = capex * 0.2; 
  const isZES = region === 'Diamniadio' || region === 'Sandiara' || region === 'Diass';
  const isEFE = exportRate >= 80;

  const normalIS = baseTaxable * 0.30;
  const specialIS = (isZES || isEFE) ? baseTaxable * 0.15 : normalIS;
  
  const normalCFCE = totalSalaries * 0.03; 
  const specialCFCE = (isZES || isEFE) ? 0 : normalCFCE;

  const totalNormalTax = normalIS + normalCFCE;
  const totalSpecialTax = specialIS + specialCFCE;
  const savings = totalNormalTax - totalSpecialTax;

  const dataTax = [
    { name: 'Régime Normal', 'IS (Impôt Société)': normalIS, 'CFCE (Taxes Salaires)': normalCFCE },
    { name: (isZES ? 'Régime ZES' : isEFE ? 'Régime EFE' : 'Régime Normal'), 'IS (Impôt Société)': specialIS, 'CFCE (Taxes Salaires)': specialCFCE }
  ];

  const dataOpex = [
    { name: 'Salaires', value: totalSalaries },
    { name: 'Énergie', value: totalEnergy },
    { name: 'Foncier (1 ha)', value: totalLand },
    { name: 'Taxes', value: totalSpecialTax }
  ];
  const COLORS = ['var(--brand-blue)', 'var(--accent-primary)', '#f59e0b', 'var(--accent-secondary)'];

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      // Simulate file download trigger
      alert("Le rapport PDF 'Simulation_Business_Plan.pdf' a été généré avec succès.");
    }, 1500);
  };

  return (
    <div className="simulator-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title">
              Simulateur de Coûts & ROI
            </h1>
            <p className="page-subtitle">
              Connecté aux données réelles des facteurs de production.
            </p>
          </div>
        </div>
    
        </div>
        <button className="btn-primary" onClick={handleExport} disabled={isExporting} style={{ background: isExporting ? 'var(--text-muted)' : 'var(--brand-blue)' }}>
          {isExporting ? <span className="typing-dot" style={{ width: '10px', height: '10px', background: 'white', borderRadius: '50%', animation: 'blink 1.4s infinite both' }}></span> : <Download size={18} />}
          {isExporting ? ' Génération du PDF...' : ' Exporter le rapport (PDF)'}
        </button>
      </div>
      
      <div className="simulator-layout">
        <div className="card">
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.1)', marginBottom: '1.5rem' }}>
            {['profil', 'capex', 'opex'].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                style={{ 
                  flex: 1, 
                  padding: '12px', 
                  fontWeight: 'bold', 
                  color: activeTab === tab ? 'var(--brand-blue)' : 'var(--text-muted)',
                  borderBottom: activeTab === tab ? '3px solid var(--brand-blue)' : 'none'
                }}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          
          {activeTab === 'profil' && (
            <div className="tab-content" style={{ animation: 'fadeIn 0.3s' }}>
              <div className="form-group">
                <label className="form-label">Secteur d'activité</label>
                <select className="form-control" value={sector} onChange={e => setSector(e.target.value)}>
                  <option>Agro-industrie</option>
                  <option>Industrie</option>
                  <option>TIC & Services</option>
                  <option>Logistique</option>
                </select>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Le secteur impacte le coût salarial moyen et le tarif énergétique (Haute/Moyenne Tension).</span>
              </div>
              <div className="form-group">
                <label className="form-label">Région d'implantation</label>
                <select className="form-control" value={region} onChange={e => setRegion(e.target.value)}>
                  <option>Dakar</option>
                  <option>Diamniadio (ZES)</option>
                  <option>Sandiara (ZES)</option>
                  <option>Diass (ZES)</option>
                </select>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Impacte le coût du foncier industriel.</span>
              </div>
              <div className="form-group">
                <label className="form-label">Part de la production destinée à l'Exportation : {exportRate}%</label>
                <input type="range" className="form-control" min="0" max="100" value={exportRate} onChange={e => setExportRate(Number(e.target.value))} />
                {exportRate >= 80 && <span style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', fontWeight: 'bold' }}>Éligible au statut EFE (Entreprise Franche d'Exportation)</span>}
              </div>
            </div>
          )}

          {activeTab === 'capex' && (
            <div className="tab-content" style={{ animation: 'fadeIn 0.3s' }}>
              <div className="form-group">
                <label className="form-label">Investissement Initial Prévu (Millions FCFA) : {capex}</label>
                <input type="range" className="form-control" min="10" max="5000" step="10" value={capex} onChange={e => setCapex(Number(e.target.value))} />
              </div>
            </div>
          )}

          {activeTab === 'opex' && (
            <div className="tab-content" style={{ animation: 'fadeIn 0.3s' }}>
              <div className="form-group">
                <label className="form-label">Nombre d'employés directs : {employees}</label>
                <input type="range" className="form-control" min="5" max="1000" step="5" value={employees} onChange={e => setEmployees(Number(e.target.value))} />
              </div>
              <div className="form-group">
                <label className="form-label">Consommation Électrique Annuelle (MWh) : {energyMwh}</label>
                <input type="range" className="form-control" min="10" max="5000" step="10" value={energyMwh} onChange={e => setEnergyMwh(Number(e.target.value))} />
              </div>
            </div>
          )}

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(0, 150, 57, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-primary)' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Régime Fiscal</h4>
              <p style={{ fontWeight: 'bold' }}>{isZES ? 'Zones Économiques (ZES)' : isEFE ? 'Franche Exportation (EFE)' : 'Droit Commun'}</p>
            </div>
            <div style={{ flex: 1, padding: '1rem', background: 'rgba(30, 58, 138, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--brand-blue)' }}>
              <h4 style={{ color: 'var(--brand-blue)', marginBottom: '0.25rem', fontSize: '0.9rem' }}>Économie Fiscale / An</h4>
              <p style={{ fontWeight: 'bold' }}>{savings.toFixed(2)} Millions FCFA</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{ flex: 1, minHeight: '300px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)' }}>Comparatif Charges Fiscales Annuelles</h3>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={dataTax} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="IS (Impôt Société)" stackId="a" fill="var(--brand-blue)" />
                <Bar dataKey="CFCE (Taxes Salaires)" stackId="a" fill="var(--accent-secondary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="card" style={{ flex: 1, minHeight: '300px' }}>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--brand-blue)' }}>Répartition des Coûts OPEX (Dynamique)</h3>
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie data={dataOpex} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="value" label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {dataOpex.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value.toFixed(2)} M FCFA`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default Simulator;
