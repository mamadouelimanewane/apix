import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Globe, KeyRound } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth, ROLES } from '../context/AuthContext';

const Login = () => {
  const [step, setStep] = useState('credentials'); // 'credentials' | 'otp'
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('investisseur');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const { t } = useLanguage();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation d'envoi d'un code de vérification (MFA) par email
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 1200);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.trim().length !== 6) {
      setOtpError('Le code doit contenir 6 chiffres.');
      return;
    }
    setOtpError('');
    setIsLoading(true);
    // Simulation de vérification MFA (tout code à 6 chiffres est accepté en mode démo)
    setTimeout(() => {
      login(email, role);
    }, 1000);
  };

  return (
    <div className="login-container" style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      background: '#0f172a',
      color: 'white',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* LEFT PANEL - BRANDING */}
      <div className="login-panel" style={{
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
      <div className="login-panel" style={{
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

          {step === 'credentials' ? (
            <form key="credentials-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500' }}>Profil d'accès</label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: '1px solid #334155',
                    background: '#1e293b',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none'
                  }}
                >
                  {Object.entries(ROLES).map(([key, r]) => (
                    <option key={key} value={key}>{r.label}</option>
                  ))}
                </select>
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
          ) : (
            <form key="otp-form" onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(0, 150, 57, 0.1)', border: '1px solid rgba(0, 150, 57, 0.3)', borderRadius: '8px', padding: '1rem', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <KeyRound size={20} color="var(--brand-blue-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1' }}>
                  Un code de vérification à 6 chiffres a été envoyé à <strong>{email}</strong> (authentification à deux facteurs).
                </p>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#cbd5e1', fontSize: '0.9rem', fontWeight: '500' }}>Code de vérification</label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="000000"
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    border: otpError ? '1px solid var(--accent-secondary)' : '1px solid #334155',
                    background: '#1e293b',
                    color: 'white',
                    fontSize: '1.4rem',
                    letterSpacing: '0.5rem',
                    textAlign: 'center',
                    outline: 'none'
                  }}
                />
                {otpError && <p style={{ color: 'var(--accent-secondary)', fontSize: '0.8rem', marginTop: '8px' }}>{otpError}</p>}
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
                  transition: 'background 0.2s'
                }}
              >
                {isLoading ? 'Vérification...' : <>Valider et accéder <ArrowRight size={20} /></>}
              </button>
              <button
                type="button"
                onClick={() => setStep('credentials')}
                style={{ background: 'transparent', color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center' }}
              >
                Retour
              </button>
            </form>
          )}

          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.85rem', marginTop: '2rem' }}>
            {t('login.terms')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
