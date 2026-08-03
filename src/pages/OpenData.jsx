import React, { useState } from 'react';
import { Database, Download, Code, Table as TableIcon, KeyRound, Copy, Check } from 'lucide-react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const DATASETS = [
  {
    id: 'gdp-growth',
    title: 'Croissance du PIB',
    description: 'Taux de croissance annuel du PIB du Sénégal (%).',
    endpoint: '/api/opendata/v1/gdp-growth',
    updated: '2026-07-01',
    columns: ['year', 'croissance'],
    rows: [
      { year: '2020', croissance: 1.3 },
      { year: '2021', croissance: 6.5 },
      { year: '2022', croissance: 4.2 },
      { year: '2023', croissance: 5.3 },
      { year: '2024', croissance: 7.1 },
      { year: '2025(P)', croissance: 10.1 },
    ]
  },
  {
    id: 'inflation',
    title: 'Taux d\'Inflation',
    description: 'Taux d\'inflation annuel comparé à la cible BCEAO.',
    endpoint: '/api/opendata/v1/inflation',
    updated: '2026-07-01',
    columns: ['year', 'inflation'],
    rows: [
      { year: '2020', inflation: 2.5 },
      { year: '2021', inflation: 2.2 },
      { year: '2022', inflation: 9.7 },
      { year: '2023', inflation: 5.9 },
      { year: '2024', inflation: 3.1 },
    ]
  },
  {
    id: 'sector-structure',
    title: 'Structure du PIB par secteur',
    description: 'Répartition du PIB entre secteurs primaire, secondaire et tertiaire.',
    endpoint: '/api/opendata/v1/sector-structure',
    updated: '2026-06-15',
    columns: ['name', 'value'],
    rows: [
      { name: 'Tertiaire (Services)', value: 58 },
      { name: 'Secondaire (Industrie)', value: 24 },
      { name: 'Primaire (Agriculture)', value: 18 },
    ]
  },
  {
    id: 'exports',
    title: 'Top Exportations',
    description: 'Répartition des exportations sénégalaises par produit (%).',
    endpoint: '/api/opendata/v1/exports',
    updated: '2026-06-15',
    columns: ['name', 'value'],
    rows: [
      { name: 'Or & Métaux', value: 35 },
      { name: 'Produits Pétroliers', value: 18 },
      { name: 'Produits de la mer', value: 15 },
      { name: 'Arachide & Dérivés', value: 12 },
      { name: 'Acide Phosphorique', value: 10 },
      { name: 'Autres', value: 10 },
    ]
  }
];

const toCsv = (dataset) => {
  const header = dataset.columns.join(',');
  const lines = dataset.rows.map(row => dataset.columns.map(col => row[col]).join(','));
  return [header, ...lines].join('\n');
};

const downloadCsv = (dataset) => {
  const csv = toCsv(dataset);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${dataset.id}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const generateApiKey = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let key = 'apix_live_';
  for (let i = 0; i < 32; i++) key += chars[Math.floor(Math.random() * chars.length)];
  return key;
};

const OpenData = () => {
  const [selectedId, setSelectedId] = useState(DATASETS[0].id);
  const [activeTab, setActiveTab] = useState('table');
  const [apiKey, setApiKey] = useLocalStorage('apix_opendata_key', null);
  const [copied, setCopied] = useState(false);

  const dataset = DATASETS.find(d => d.id === selectedId);

  const handleCopy = () => {
    navigator.clipboard?.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="opendata-page">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Database size={32} color="var(--brand-blue)" /> Portail Open Data
        </h1>
        <p className="page-subtitle">Données économiques publiques du Sénégal, en libre consultation et téléchargement pour chercheurs et analystes.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <KeyRound size={24} color="var(--accent-primary)" />
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem' }}>Clé d'API personnelle</h3>
            <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Requise pour interroger l'API en dehors du portail (limite : 1000 req/jour).</p>
          </div>
        </div>
        {apiKey ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <code style={{ background: 'var(--bg-primary)', padding: '8px 12px', borderRadius: '6px', fontSize: '0.85rem' }}>{apiKey}</code>
            <button className="btn-secondary" onClick={handleCopy}>
              {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copié' : 'Copier'}
            </button>
          </div>
        ) : (
          <button className="btn-primary" onClick={() => setApiKey(generateApiKey())}>
            <KeyRound size={16} /> Générer une clé
          </button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {DATASETS.map(d => (
            <div
              key={d.id}
              onClick={() => setSelectedId(d.id)}
              className="card"
              style={{ cursor: 'pointer', padding: '1rem', border: d.id === selectedId ? '2px solid var(--brand-blue)' : '1px solid rgba(0,0,0,0.05)' }}
            >
              <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem', color: 'var(--brand-blue)' }}>{d.title}</h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{d.description}</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)' }}>MAJ : {d.updated} · {d.rows.length} lignes</p>
            </div>
          ))}
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setActiveTab('table')} className="btn-secondary" style={{ background: activeTab === 'table' ? 'rgba(30, 58, 138, 0.1)' : 'var(--bg-tertiary)', color: activeTab === 'table' ? 'var(--brand-blue)' : 'var(--text-secondary)' }}>
                <TableIcon size={16} /> Table
              </button>
              <button onClick={() => setActiveTab('api')} className="btn-secondary" style={{ background: activeTab === 'api' ? 'rgba(30, 58, 138, 0.1)' : 'var(--bg-tertiary)', color: activeTab === 'api' ? 'var(--brand-blue)' : 'var(--text-secondary)' }}>
                <Code size={16} /> API
              </button>
            </div>
            <button className="btn-primary" onClick={() => downloadCsv(dataset)}>
              <Download size={16} /> Exporter CSV
            </button>
          </div>

          {activeTab === 'table' ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-tertiary)' }}>
                  {dataset.columns.map(col => (
                    <th key={col} style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid var(--brand-blue)' }}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataset.rows.map((row, i) => (
                  <tr key={i}>
                    {dataset.columns.map(col => (
                      <td key={col} style={{ padding: '10px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>{row[col]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Exemple de requête :</p>
              <pre style={{ background: '#0f172a', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', overflowX: 'auto' }}>
{`curl https://apix-phi.vercel.app${dataset.endpoint} \\
  -H "Authorization: Bearer ${apiKey || 'VOTRE_CLE_API'}"`}
              </pre>
              <p style={{ color: 'var(--text-secondary)', margin: '1.5rem 0 1rem' }}>Exemple de réponse :</p>
              <pre style={{ background: '#0f172a', color: '#e2e8f0', padding: '1rem', borderRadius: '8px', fontSize: '0.85rem', overflowX: 'auto' }}>
{JSON.stringify({ dataset: dataset.id, updated: dataset.updated, rows: dataset.rows.slice(0, 3) }, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpenData;
