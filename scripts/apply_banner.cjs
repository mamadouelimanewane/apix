const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Skip if already applied
  if (content.includes('global-page-banner')) continue;

  const regex = /<h1 className="page-title"([^>]*)>([\s\S]*?)<\/h1>\s*<p className="page-subtitle"([^>]*)>([\s\S]*?)<\/p>/g;
  
  const newContent = content.replace(regex, (match, h1Attrs, h1Content, pAttrs, pContent) => {
    return `
        <div className="global-page-banner">
          <div className="banner-decor-1"></div>
          <div className="banner-decor-2"></div>
          <div className="banner-content">
            <h1 className="page-title"` + h1Attrs + `>
              ` + h1Content + `
            </h1>
            <p className="page-subtitle"` + pAttrs + `>
              ` + pContent + `
            </p>
          </div>
        </div>
    `;
  });

  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated ' + file);
  }
}
