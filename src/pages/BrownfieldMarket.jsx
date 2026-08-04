import React, { useState } from 'react';
import { Factory, MapPin, Maximize, Search, CheckCircle2 } from 'lucide-react';

const BrownfieldMarket = () => {
  const assets = [
    { id: 1, type: 'Usine Agroalimentaire', status: 'À Reprendre', region: 'Thiès (Sandiara)', area: '12 000 m²', equip: 'Entièrement équipée', desc: 'Ancienne conserverie avec chambres froides et ligne de conditionnement en état de marche. Reprise immédiate possible.', img: 'https://images.unsplash.com/photo-1565515261924-4a572dbb4142?auto=format&fit=crop&q=80&w=600' },
    { id: 2, type: 'Entrepôt Logistique', status: 'Friche Industrielle', region: 'Dakar (Rufisque)', area: '5 000 m²', equip: 'Bâtiment vide (à rénover)', desc: 'Emplacement stratégique à 10 min du port minéralier. Structure métallique saine. Nécessite rénovation toiture.', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?auto=format&fit=crop&q=80&w=600' },
    { id: 3, type: 'Complexe Textile', status: 'Liquidation', region: 'Louga', area: '20 000 m²', equip: 'Machines à réviser', desc: 'Opportunité pour investisseur textile. Bâtiment aux normes, raccordé moyenne tension. Main d\'œuvre locale qualifiée disponible.', img: 'https://images.unsplash.com/photo-1533619565517-57352331bf72?auto=format&fit=crop&q=80&w=600' }
  ];

  return (
    <div className="page-container">
      <div style={{ marginBottom: '2rem' }}>
        <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Factory size={32} color="#f97316" /> Marketplace des Actifs Industriels (Brownfield)
        </h1>
        <p className="page-subtitle">Recyclez des friches industrielles et usines à l'arrêt pour implanter votre entreprise 2x plus vite.</p>
      </div>

      <div className="card" style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" className="form-control" placeholder="Rechercher par type, région..." style={{ paddingLeft: '45px', width: '100%' }} />
        </div>
        <select className="form-control" style={{ width: '200px' }}>
          <option>Toutes les régions</option>
          <option>Dakar</option>
          <option>Thiès</option>
          <option>Louga</option>
        </select>
        <button className="btn-primary" style={{ background: '#f97316' }}>Filtrer</button>
      </div>

      <div className="responsive-grid responsive-grid-3">
        {assets.map(asset => (
          <div key={asset.id} className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '200px' }}>
              <img src={asset.img} alt={asset.type} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: asset.status === 'À Reprendre' ? '#10b981' : '#f59e0b' }}>
                {asset.status}
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0 0 10px 0', color: 'var(--brand-blue)', fontSize: '1.2rem' }}>{asset.type}</h3>
              
              <div style={{ display: 'flex', gap: '15px', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={16} color="var(--text-muted)" /> {asset.region}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <Maximize size={16} color="var(--text-muted)" /> {asset.area}
                </div>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '10px', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--brand-blue)" /> {asset.equip}
              </div>
              
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5', flex: 1, marginBottom: '1.5rem' }}>
                {asset.desc}
              </p>

              <button className="btn-secondary" style={{ width: '100%', justifyContent: 'center', border: '1px solid #f97316', color: '#f97316' }}>
                Demander le dossier technique
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrownfieldMarket;
