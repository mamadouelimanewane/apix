import React from 'react';
import { Palmtree, GraduationCap, HeartPulse, Home, MapPin, Coffee } from 'lucide-react';

const LifeQuality = () => {
  return (
    <div className="life-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Cadre de Vie & Soft Power</h1>
          <p className="page-subtitle">S'installer au Sénégal : Un environnement exceptionnel pour vous et vos équipes.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Culture & Arts */}
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ height: '160px', background: 'url(https://images.unsplash.com/photo-1542459952-4fc82e16b9b3?q=80&w=600&auto=format&fit=crop) center/cover', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><Palmtree size={20} /> Culture & Patrimoine</h3>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Le Sénégal est un carrefour culturel vibrant, reconnu mondialement pour sa stabilité, sa *Téranga* (hospitalité) et sa richesse artistique.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--brand-blue)" /> <strong>Île de Gorée</strong> : Patrimoine mondial de l'UNESCO</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--brand-blue)" /> <strong>Musée des Civilisations Noires</strong> : Hub culturel moderne</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--brand-blue)" /> <strong>Biennale de Dakar (Dak'Art)</strong> : Événement majeur de l'art contemporain africain</li>
            </ul>
          </div>
        </div>

        {/* Tourisme */}
        <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ height: '160px', background: 'url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop) center/cover', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><Coffee size={20} /> Tourisme & Loisirs</h3>
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
              Avec ses 700 km de côtes et un ensoleillement optimal toute l'année, le pays offre des infrastructures touristiques de premier plan.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--accent-primary)" /> <strong>Saly Portudal</strong> : Plus grande station balnéaire d'Afrique de l'Ouest</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--accent-primary)" /> <strong>Cap Skirring</strong> : Plages paradisiaques (Club Med)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} color="var(--accent-primary)" /> <strong>Tourisme d'Affaires</strong> : Hôtels 5 étoiles (Radisson Blu, Pullman, King Fahd Palace)</li>
            </ul>
          </div>
        </div>

      </div>

      <h2 style={{ marginBottom: '1.5rem', color: 'var(--brand-blue)', fontSize: '1.4rem' }}>Guide Pratique pour Expatriés & Cadres</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        
        {/* Education */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(30, 58, 138, 0.1)', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GraduationCap size={24} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Éducation Internationale</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Dakar accueille d'excellentes écoles internationales pour les familles d'expatriés :
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li>• Lycée Français Jean Mermoz (Programme Français)</li>
            <li>• International School of Dakar - ISD (Programme Américain)</li>
            <li>• Cours Sainte-Marie de Hann</li>
          </ul>
        </div>

        {/* Santé */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(227, 27, 35, 0.1)', color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <HeartPulse size={24} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Infrastructures de Santé</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Le pays dispose de plateaux médicaux aux normes internationales :
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li>• Hôpital Principal de Dakar (HPD)</li>
            <li>• Clinique de la Madeleine</li>
            <li>• Clinique Casahous (Plateau médical privé de pointe)</li>
          </ul>
        </div>

        {/* Logement */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(0, 150, 57, 0.1)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Home size={24} />
          </div>
          <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Zones Résidentielles Prisées</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
            Des quartiers sécurisés offrant un cadre de vie très agréable :
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
            <li>• <strong>Les Almadies</strong> : Quartier chic, ambassades, bord de mer</li>
            <li>• <strong>Fann Résidence</strong> : Résidentiel, très prisé, arboré</li>
            <li>• <strong>Le Plateau</strong> : Centre des affaires, appartements luxueux</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LifeQuality;
