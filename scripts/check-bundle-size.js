#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MAX_MAIN_CHUNK = 50 * 1024; // 50 KB
const MAX_VENDOR_CHUNK = 300 * 1024; // 300 KB
const MAX_PAGE_CHUNK = 30 * 1024; // 30 KB

const distPath = path.join(__dirname, '../dist/assets');
const files = fs.readdirSync(distPath).filter(f => f.endsWith('.js'));

console.log('\n📊 Bundle Size Analysis\n');

let totalSize = 0;
let hasBloat = false;

files.forEach(file => {
  const fullPath = path.join(distPath, file);
  const stats = fs.statSync(fullPath);
  const sizeKB = (stats.size / 1024).toFixed(2);
  totalSize += stats.size;

  let status = '✅';
  let limit = null;

  if (file.includes('index-') && file.endsWith('.js')) {
    limit = MAX_MAIN_CHUNK;
    if (stats.size > limit) { status = '🔴'; hasBloat = true; }
  } else if (file.includes('vendor')) {
    limit = MAX_VENDOR_CHUNK;
    if (stats.size > limit) { status = '🟡'; hasBloat = true; }
  } else if (!file.includes('runtime')) {
    limit = MAX_PAGE_CHUNK;
    if (stats.size > limit) { status = '🟡'; }
  }

  const limitStr = limit ? ` / ${(limit / 1024).toFixed(0)} KB limit` : '';
  console.log(`${status} ${file.padEnd(35)} ${sizeKB.padStart(7)} KB${limitStr}`);
});

const totalMB = (totalSize / 1024 / 1024).toFixed(2);
console.log(`\n📈 Total JS: ${totalMB} MB (${(totalSize / 1024).toFixed(0)} KB)`);

if (hasBloat) {
  console.log('\n⚠️  Some chunks exceed recommended limits.');
  console.log('Consider: 1) lazy loading, 2) code splitting, 3) alternative libs\n');
  process.exit(1);
} else {
  console.log('\n✅ All chunks within size limits!\n');
  process.exit(0);
}
