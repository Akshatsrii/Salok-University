const fs = require('fs');
const path = 'apps/client/src/components/public/PublicNavbar.tsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/className={\\ transition-colors text-sm tracking-wide}/g, 'className={\ transition-colors text-sm tracking-wide}');
fs.writeFileSync(path, content, 'utf8');
