import React, { useState } from 'react';
import { Mail, Newspaper, ExternalLink, CheckCircle2, Send } from 'lucide-react';
import { newsletters } from '../data/newsletters';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | subscribed | demo | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();

      if (data.demo) {
        setStatus('demo');
      } else if (res.ok) {
        setStatus('subscribed');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="newsletter-page">
      <div style={{ marginBottom: '2rem' }}>
        
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              
          <Newspaper size={32} color="var(--brand-blue)" /> Sénégal Invest Brief
        
            </h1>
            <p className="page-subtitle">
              Newsletter économique et financière bi-mensuelle sur le Sénégal, à destination des investisseurs. Recherche et rédaction assistées par IA, sources publiques citées à chaque numéro.
            </p>
          </div>
        </div>
    
      </div>

      <div className="card" style={{ background: 'linear-gradient(135deg, var(--brand-blue) 0%, #004b2c 100%)', color: 'white', marginBottom: '2rem', padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
          <Mail size={28} color="var(--accent-primary)" />
          <h2 style={{ fontSize: '1.3rem', margin: 0 }}>S'abonner à la newsletter</h2>
        </div>
        <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>Recevez chaque numéro directement par email, tous les 15 jours.</p>

        {status === 'subscribed' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.15)', padding: '1rem', borderRadius: '8px' }}>
            <CheckCircle2 size={20} /> Inscription confirmée pour {email}.
          </div>
        ) : status === 'demo' ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.15)', padding: '1rem', borderRadius: '8px' }}>
            <CheckCircle2 size={20} /> Inscription enregistrée (mode démo — l'envoi email réel sera activé une fois le service configuré côté serveur).
          </div>
        ) : (
          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '1rem' }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="investisseur@entreprise.com"
              style={{ flex: 1, padding: '14px 16px', borderRadius: '8px', border: 'none', fontSize: '1rem' }}
            />
            <button className="btn-primary" type="submit" disabled={status === 'loading'} style={{ background: 'var(--accent-primary)' }}>
              <Send size={16} /> {status === 'loading' ? 'Inscription...' : "S'abonner"}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p style={{ marginTop: '1rem', color: '#fecaca' }}>Une erreur est survenue. Veuillez réessayer.</p>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {newsletters.map(issue => (
          <div key={issue.id} className="card">
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Numéro {issue.issueNumber} · {issue.date}</span>
              <h2 style={{ margin: '4px 0 8px 0', color: 'var(--brand-blue)', fontSize: '1.4rem' }}>{issue.title}</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{issue.summary}</p>
            </div>

            {issue.sections.map(section => (
              <div key={section.heading} style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-primary)', marginBottom: '1rem' }}>{section.heading}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {section.items.map((item, i) => (
                    <div key={i} style={{ padding: '1rem', background: 'var(--bg-primary)', borderRadius: '8px' }}>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                      <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.text}</p>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: '600' }}>
                        <ExternalLink size={12} /> Source : {item.source}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
