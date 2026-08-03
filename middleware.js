import { next } from '@vercel/edge';

// Signatures d'outils d'aspiration de site, de scraping et de crawlers agressifs.
const BLOCKED_USER_AGENT_PATTERNS = [
  /curl/i, /wget/i, /httrack/i, /webcopier/i, /teleport ?pro/i,
  /python-requests/i, /python-urllib/i, /scrapy/i, /libwww-perl/i,
  /go-http-client/i, /okhttp/i, /axios\/[\d.]+$/i,
  /phantomjs/i, /headlesschrome/i, /puppeteer/i, /playwright/i,
  /ahrefsbot/i, /semrushbot/i, /mj12bot/i, /dotbot/i, /petalbot/i, /bytespider/i, /gptbot/i, /ccbot/i
];

// Fenêtre glissante par IP. Best-effort : la mémoire n'est pas partagée entre
// toutes les instances Edge, donc ce compteur borne le trafic par instance,
// pas globalement. Suffisant pour dissuader un scraping massif depuis un même
// point ; pas un WAF/anti-DDoS complet.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_DEFAULT = 120;
const RATE_LIMIT_MAX_API = 20; // routes /api/* : plus strict (appels IA payants)
const hits = new Map();

const isRateLimited = (key, max) => {
  const now = Date.now();
  const record = hits.get(key);

  if (!record || now - record.start > RATE_LIMIT_WINDOW_MS) {
    hits.set(key, { start: now, count: 1 });
    return false;
  }

  record.count += 1;
  return record.count > max;
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent') || '';

  if (!userAgent || BLOCKED_USER_AGENT_PATTERNS.some(re => re.test(userAgent))) {
    return new Response('Accès refusé : trafic automatisé détecté.', {
      status: 403,
      headers: { 'content-type': 'text/plain; charset=utf-8' }
    });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const { pathname } = new URL(request.url);
  const isApiRoute = pathname.startsWith('/api/');
  const key = `${ip}:${isApiRoute ? 'api' : 'app'}`;

  // Rate Limiting activé : protège contre les appels API excessifs (coûteux)
  if (isRateLimited(key, isApiRoute ? RATE_LIMIT_MAX_API : RATE_LIMIT_MAX_DEFAULT)) {
    return new Response('Trop de requêtes. Réessayez dans une minute.', {
      status: 429,
      headers: { 'content-type': 'text/plain; charset=utf-8', 'retry-after': '60' }
    });
  }

  return next();
}

export const config = {
  matcher: '/((?!favicon.svg|icons.svg|assets/).*)'
};
