import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Login = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'authentification et chargement sécurisé
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* LEFT PANEL - BRANDING */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, var(--brand-blue) 0%, #004b2c 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '600px', height: '600px', background: 'rgba(242, 148, 0, 0.05)', borderRadius: '50%' }}></div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '30px', marginBottom: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Globe size={24} color="var(--accent-primary)" />
            <span style={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '1.2rem' }}>{t('login.brand')}</span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            {t('login.title1')}<br/>
            {t('login.title2')}<br/>
            <span style={{ color: 'var(--accent-primary)' }}>{t('login.title3')}</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '500px', lineHeight: '1.6', marginBottom: '3rem' }}>
            {t('login.subtitle')}
          </p>

          <div style={{ display: 'flex', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>{t('login.kpi1_val')}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('login.kpi1_desc')}</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>{t('login.kpi2_val')}</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{t('login.kpi2_desc')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL - LOGIN */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: '#0f172a'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <ShieldCheck size={48} color="var(--brand-blue-light)" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0' }}>{t('login.secure_space')}</h2>
            <p style={{ color: '#94a3b8', margin: 0 }}>{t('login.login_desc')}</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500' }}>{t('login.email_label')}</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={t('login.email_placeholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: '#1e293b',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--brand-blue-light)'}
                onBlur={e => e.target.style.borderColor = '#334155'}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500' }}>{t('login.pwd_label')}</label>
              <input 
                type="password" 
                required
                placeholder={t('login.pwd_placeholder')}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  border: '1px solid #334155',
                  background: '#1e293b',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'var(--brand-blue-light)'}
                onBlur={e => e.target.style.borderColor = '#334155'}
              />
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              style={{
                background: isLoading ? '#334155' : 'var(--brand-blue)',
                color: 'white',
                border: 'none',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '1.05rem',
                fontWeight: 'bold',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginTop: '1rem',
                transition: 'background 0.2s'
              }}
            >
              {isLoading ? (
                <>
                  <Lock size={20} /> {t('login.btn_loading')}
                </>
              ) : (
                <>
                  {t('login.btn_submit')} <ArrowRight size={20} />
                </>
              )}
            </button>
          </form>

          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', marginTop: '2rem' }}>
            {t('login.terms')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
