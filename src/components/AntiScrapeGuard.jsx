import { useEffect } from 'react';

// Dissuasion côté client contre la copie manuelle / l'inspection casuelle du contenu.
// Ne bloque ni un utilisateur qui lit le code source, ni un outil qui aspire le
// site (wget, HTTrack) ou appelle directement l'API : ça, c'est le rôle du
// middleware.js (blocage de user-agents + rate limiting côté serveur).
const BLOCKED_KEY_COMBOS = (e) => {
  const key = e.key.toLowerCase();
  if (e.key === 'F12') return true;
  if ((e.ctrlKey || e.metaKey) && ['c', 'u', 's'].includes(key)) return true;
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(key)) return true;
  return false;
};

const AntiScrapeGuard = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      const isEditable = ['INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.isContentEditable;
      if (isEditable) return;
      if (BLOCKED_KEY_COMBOS(e)) e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
};

export default AntiScrapeGuard;
