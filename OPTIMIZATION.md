# 🚀 APIX Optimization Guide

## Performance Improvements (2026-08-03)

### Bundle Size Reduction

| Metric | Before | After | Improvement |
|--------|--------|-------|------------|
| Main Bundle | 1,045 KB | 28.76 KB | **97.25% ↓** |
| Gzipped Main | 295 KB | 8.38 KB | **97.16% ↓** |
| Total Initial Load | 1,045 KB | ~350 KB | **67% ↓** |

### Code Splitting Strategy

#### Critical Path (Loaded at startup)
- React/DOM/Router: 225 KB (72 KB gzip)
- Main App Shell: 28.76 KB (8.38 KB gzip)
- CSS: 8.76 KB (2.37 KB gzip)
- **Total Initial**: ~350 KB gzipped

#### On-Demand Chunks (Lazy loaded)
- **Charts** (`/roi-simulator`, `/dashboard`): 436 KB (120 KB gzip)
- **Maps** (`/map`): 151 KB (45 KB gzip)
- **Icons** (lucide-react): 21 KB (7.5 KB gzip)
- **Page Components**: 5-16 KB each

---

## Optimizations Applied

### 1. ✅ Route-Based Code Splitting
```javascript
// All pages lazy-loaded with React.lazy() + Suspense
const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const Map = React.lazy(() => import('./pages/Map'))
// ... 23 pages total
```

**Impact**: 97% reduction in initial JS payload

### 2. ✅ Vendor Chunk Separation
```javascript
// vite.config.js: Manual chunking
manualChunks: (id) => {
  if (id.includes('recharts')) return 'charts';
  if (id.includes('leaflet')) return 'maps';
  // ...
}
```

**Impact**: Heavy libraries load only when needed

### 3. ✅ Font Loading Optimization
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

**Impact**: Prevents FOIT (Flash of Invisible Text), fonts load in parallel

### 4. ✅ Rate Limiting Activated
- API protection enabled in `middleware.js`
- Default: 120 req/min for app, 20 req/min for API
- Prevents abuse of paid services (Perplexity, DeepSeek, Resend)

### 5. ✅ Console Logs Removed in Production
```javascript
terserOptions: {
  compress: { drop_console: true }
}
```

**Impact**: ~2-5 KB saved, faster parsing

### 6. ✅ CSS Optimization
- Removed unused font weights (removed 300)
- Consolidated color variables
- Scoped styles to reduce duplication

---

## Monitoring & Maintenance

### Check Bundle Size
```bash
npm run build
# View dist/assets/*.js sizes
```

### Track Performance
- Use Chrome DevTools → Network tab to track chunk loading
- Monitor Core Web Vitals (LCP, FID, CLS)
- Check waterfall timing on each page

### Identify New Bloat
1. If main chunk grows >30 KB: check for large imports
2. If any chunk >500 KB: consider further splitting
3. Use `vite-plugin-visualizer` for bundle analysis:

```bash
npm install --save-dev vite-plugin-visualizer
# Update vite.config.js to import it
```

---

## Environment Setup (Vercel)

### Set Secrets
1. Go to Vercel Project Settings → Environment Variables
2. Add (never in `.env.local` or .gitignore):
   - `PERPLEXITY_API_KEY`
   - `DEEPSEEK_API_KEY`
   - `RESEND_API_KEY`
   - `RESEND_AUDIENCE_ID`
   - `CRON_SECRET`

### Verify No Secrets Exposed
```bash
git log -S "pplx-" --oneline # Should return nothing
git log -S "sk-" --all --oneline | head -5
```

---

## Best Practices Going Forward

### ⚠️ When Adding New Dependencies
1. Check bundle impact: `npm install <pkg> && npm run build`
2. If >50 KB: consider lazy loading or alternative
3. Prefer tree-shakeable libraries (ESM-first)

### 📦 Lazy Load Patterns
```javascript
// For heavy components (Recharts, Maps)
const HeavyChart = React.lazy(() => import('./components/HeavyChart'))

// Wrap in Suspense
<Suspense fallback={<LoadingSpinner />}>
  <HeavyChart />
</Suspense>
```

### 🎯 Images & Assets
- Use WebP format for images (smaller than PNG/JPG)
- Optimize with `next/image` or `vite-plugin-images`
- Lazy load images below the fold

---

## Performance Timeline

**Initial Load**: ~1-2s (depends on network)
- Critical chunks: 350 KB gzipped
- Parse + execute: ~500ms on mid-range device

**Subsequent Page Loads**: ~200-500ms
- Route chunks load on-demand (20-120 KB each)

---

## References
- [Vite Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)
- [React Lazy + Suspense](https://react.dev/reference/react/Suspense)
- [Web Vitals](https://web.dev/vitals/)
