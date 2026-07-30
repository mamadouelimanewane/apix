import React, { useState } from 'react';
import { Check, Clock, FileText, UserCircle, Upload, MessageCircle, AlertCircle, Plus, X } from 'lucide-react';

const Portal = () => {
  const [activeTab, setActiveTab] = useState('dossiers');
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [isDocUploaded, setIsDocUploaded] = useState(false);
  
  const [dossiers, setDossiers] = useState([
    {
      id: 'SN-2024-8902',
      name: 'Création SARL',
      status: 'En cours',
      step: 3
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    type: 'SARL',
    capital: '1000000',
  });

  const handleCreateDossier = () => {
    const newDossier = {
      id: `SN-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
      name: `Création ${formData.type} - ${formData.name}`,
      status: 'Nouvelle demande',
      step: 1
    };
    setDossiers([...dossiers, newDossier]);
    setShowWizard(false);
    setWizardStep(1);
    setFormData({ name: '', type: 'SARL', capital: '1000000' });
  };

  const uploadDoc = () => {
    // Simulate upload delay
    setTimeout(() => {
      setIsDocUploaded(true);
    }, 1000);
  };

  return (
    <div className="portal-page">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">E-Guichet Unique</h1>
          <p className="page-subtitle">Gérez vos dossiers de création, agréments et correspondances.</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-secondary)', padding: '8px 16px', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
          <UserCircle size={24} color="var(--brand-blue)" />
          <span style={{ fontWeight: '600' }}>John Doe (Acme Corp)</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button className="btn-primary" style={{ background: 'var(--brand-blue)' }} onClick={() => setShowWizard(true)}>
          <Plus size={18} /> Nouveau Dossier
        </button>
        <button onClick={() => setActiveTab('dossiers')} style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', background: activeTab === 'dossiers' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', color: activeTab === 'dossiers' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'dossiers' ? '600' : 'normal' }}>
          Mes Dossiers ({dossiers.length})
        </button>
        <button onClick={() => setActiveTab('messages')} style={{ padding: '8px 16px', borderRadius: 'var(--radius-full)', background: activeTab === 'messages' ? 'rgba(30, 58, 138, 0.1)' : 'transparent', color: activeTab === 'messages' ? 'var(--brand-blue)' : 'var(--text-secondary)', fontWeight: activeTab === 'messages' ? '600' : 'normal', position: 'relative' }}>
          Messagerie APIX
          <span style={{ position: 'absolute', top: '2px', right: '4px', width: '8px', height: '8px', background: 'var(--accent-secondary)', borderRadius: '50%' }}></span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'dossiers' ? '2fr 1fr' : '1fr', gap: '2rem' }}>
        
        {activeTab === 'dossiers' && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {dossiers.map(dossier => (
                <div key={dossier.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3 style={{ color: 'var(--brand-blue)', margin: 0 }}>Dossier #{dossier.id} : {dossier.name}</h3>
                    <span style={{ background: dossier.step === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(252, 209, 22, 0.2)', color: dossier.step === 1 ? 'var(--brand-blue)' : '#b39500', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                      {dossier.status}
                    </span>
                  </div>
                  
                  <div className="timeline">
                    <div className={`timeline-item ${dossier.step > 1 ? 'completed' : (dossier.step === 1 ? 'active' : '')}`}>
                      <div className="timeline-icon">
                        {dossier.step > 1 ? <Check size={24} /> : (dossier.step === 1 ? <Clock size={24} /> : <FileText size={24}/>)}
                      </div>
                      <div className="timeline-content" style={dossier.step === 1 ? { border: '2px solid rgba(0, 150, 57, 0.3)' } : {}}>
                        <h4>1. Dépôt et Vérification des Pièces</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                          {dossier.step > 1 ? "Validation terminée." : "En attente de traitement par l'APIX."}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`timeline-item ${dossier.step > 2 ? 'completed' : (dossier.step === 2 ? 'active' : '')}`}>
                      <div className="timeline-icon">
                         {dossier.step > 2 ? <Check size={24} /> : (dossier.step === 2 ? <Clock size={24} /> : <FileText size={24}/>)}
                      </div>
                      <div className="timeline-content" style={{ opacity: dossier.step >= 2 ? 1 : 0.6, border: dossier.step === 2 ? '2px solid rgba(0, 150, 57, 0.3)' : 'none' }}>
                        <h4>2. Enregistrement aux Impôts</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
                          {dossier.step > 2 ? "Frais acquittés." : "En attente d'enregistrement."}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`timeline-item ${dossier.step > 3 ? 'completed' : (dossier.step === 3 ? 'active' : '')}`}>
                      <div className="timeline-icon">
                        {dossier.step > 3 ? <Check size={24} /> : (dossier.step === 3 ? <Clock size={24} /> : <FileText size={24}/>)}
                      </div>
                      <div className="timeline-content" style={{ opacity: dossier.step >= 3 ? 1 : 0.6, border: dossier.step === 3 ? '2px solid rgba(0, 150, 57, 0.3)' : 'none' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div>
                            <h4 style={dossier.step === 3 ? { color: 'var(--accent-primary)' } : {}}>3. Immatriculation au RCCM & NINEA</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Transmission au Greffe du Tribunal de Commerce.</p>
                            {dossier.step === 3 && (
                              <div style={{ marginTop: '1rem', display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                <AlertCircle size={14} /> Délai estimé : 24h ouvrées.
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`timeline-item ${dossier.step > 4 ? 'completed' : (dossier.step === 4 ? 'active' : '')}`}>
                      <div className="timeline-icon">
                        {dossier.step > 4 ? <Check size={24} /> : (dossier.step === 4 ? <Clock size={24} /> : <FileText size={24}/>)}
                      </div>
                      <div className="timeline-content" style={{ opacity: dossier.step >= 4 ? 1 : 0.6, border: dossier.step === 4 ? '2px solid rgba(0, 150, 57, 0.3)' : 'none' }}>
                        <h4>4. Retrait de l'Agrément et NINEA définitif</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>Étape finale. Vous serez notifié dès disponibilité.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="card">
                <h3 style={{ marginBottom: '1rem', color: 'var(--brand-blue)', fontSize: '1.1rem' }}>Documents Requis (Dossier SN-2024-8902)</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'var(--bg-primary)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="var(--accent-primary)" /> Statuts de la société</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'var(--bg-primary)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Check size={16} color="var(--accent-primary)" /> Pièces d'identité (Gérant)</span>
                  </div>
                  
                  {isDocUploaded ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(0, 150, 57, 0.1)', borderRadius: '8px' }}>
                      <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)' }}><Check size={16} /> Déclaration sur l'honneur (Validé)</span>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'rgba(227, 27, 35, 0.05)', borderRadius: '8px', border: '1px dashed var(--accent-secondary)' }}>
                      <span style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-secondary)' }}><AlertCircle size={16} /> Déclaration sur l'honneur (Manquant)</span>
                      <button onClick={uploadDoc} style={{ color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', cursor: 'pointer' }}><Upload size={14}/> Uploader</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="card" style={{ background: 'var(--brand-blue)', color: 'white' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Besoin d'aide ?</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', opacity: 0.9 }}>Votre chargé de compte APIX est Mme Ndiaye. Elle traite actuellement l'étape 3 de votre dossier.</p>
                <button className="btn-primary" style={{ background: 'white', color: 'var(--brand-blue)', width: '100%', justifyContent: 'center' }} onClick={() => setActiveTab('messages')}>
                  <MessageCircle size={18} /> La contacter
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === 'messages' && (
          <div className="card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', marginBottom: '1rem' }}>
              <h3 style={{ color: 'var(--brand-blue)', margin: 0 }}>Conversation avec Fatou Ndiaye (APIX)</h3>
            </div>
            
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
              <div style={{ alignSelf: 'flex-start', background: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '12px', borderBottomLeftRadius: '0', maxWidth: '70%' }}>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Bonjour M. Doe, j'ai bien reçu vos statuts modifiés ce matin. Je les ai transmis au Greffe.</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Hier, 14:30</span>
              </div>
              <div style={{ alignSelf: 'flex-end', background: 'var(--brand-blue)', color: 'white', padding: '12px 16px', borderRadius: '12px', borderBottomRightRadius: '0', maxWidth: '70%' }}>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Merci Mme Ndiaye. Avez-vous une idée du délai pour le NINEA ?</p>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px', display: 'block' }}>Aujourd'hui, 09:15</span>
              </div>
              <div style={{ alignSelf: 'flex-start', background: 'var(--bg-primary)', padding: '12px 16px', borderRadius: '12px', borderBottomLeftRadius: '0', maxWidth: '70%', border: !isDocUploaded ? '1px solid var(--accent-secondary)' : 'none' }}>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>Généralement 24h ouvrées. Cependant, il manque la <strong>Déclaration sur l'honneur</strong> signée dans votre dossier. Pourriez-vous l'uploader via le portail ?</p>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Aujourd'hui, 09:45</span>
              </div>
              {isDocUploaded && (
                <div style={{ alignSelf: 'flex-end', background: 'var(--brand-blue)', color: 'white', padding: '12px 16px', borderRadius: '12px', borderBottomRightRadius: '0', maxWidth: '70%' }}>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>C'est fait, je viens d'uploader le document manquant.</p>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px', display: 'block' }}>À l'instant</span>
                </div>
              )}
            </div>
            
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
              <input type="text" className="form-control" placeholder="Répondre..." />
              <button className="btn-primary">Envoyer</button>
            </div>
          </div>
        )}
      </div>

      {/* WIZARD MODAL */}
      {showWizard && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setShowWizard(false)}>
              <X size={24} />
            </button>
            <h2 style={{ color: 'var(--brand-blue)', marginBottom: '1.5rem' }}>Nouveau Dossier de Création</h2>
            
            <div className="wizard-steps">
              <div className={`wizard-step ${wizardStep >= 1 ? 'active' : ''} ${wizardStep > 1 ? 'completed' : ''}`}>
                <div className="wizard-step-number">1</div>
                <div className="wizard-step-label">Informations</div>
              </div>
              <div className={`wizard-step ${wizardStep >= 2 ? 'active' : ''} ${wizardStep > 2 ? 'completed' : ''}`}>
                <div className="wizard-step-number">2</div>
                <div className="wizard-step-label">Capital</div>
              </div>
              <div className={`wizard-step ${wizardStep >= 3 ? 'active' : ''}`}>
                <div className="wizard-step-number">3</div>
                <div className="wizard-step-label">Pièces Jointes</div>
              </div>
            </div>

            {wizardStep === 1 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Type de société</label>
                  <select className="form-control" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="SARL">SARL (Société à Responsabilité Limitée)</option>
                    <option value="SUARL">SUARL (Société Unipersonnelle à Responsabilité Limitée)</option>
                    <option value="SA">SA (Société Anonyme)</option>
                    <option value="GIE">GIE (Groupement d'Intérêt Économique)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Nom de la société</label>
                  <input type="text" className="form-control" placeholder="Ex: SenTechnologies SARL" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                  <button className="btn-primary" onClick={() => setWizardStep(2)} disabled={!formData.name}>Suivant</button>
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div>
                <div className="form-group">
                  <label className="form-label">Capital Social (FCFA)</label>
                  <input type="number" className="form-control" value={formData.capital} onChange={e => setFormData({...formData, capital: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Nombre d'associés</label>
                  <input type="number" className="form-control" defaultValue="2" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button className="btn-secondary" onClick={() => setWizardStep(1)}>Précédent</button>
                  <button className="btn-primary" onClick={() => setWizardStep(3)}>Suivant</button>
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div>
                <div style={{ border: '2px dashed rgba(0,0,0,0.1)', borderRadius: '12px', padding: '2rem', textAlign: 'center', marginBottom: '1.5rem', background: 'var(--bg-primary)' }}>
                  <Upload size={32} color="var(--brand-blue)" style={{ marginBottom: '1rem' }} />
                  <p style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Déposez vos statuts et pièces d'identité ici</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Format PDF ou JPG, max 5MB.</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button className="btn-secondary" onClick={() => setWizardStep(2)}>Précédent</button>
                  <button className="btn-primary" onClick={handleCreateDossier} style={{ background: 'var(--accent-primary)' }}>Soumettre le dossier</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Portal;
