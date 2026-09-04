const fs = require('fs');
const file = 'apps/server/src/controllers/auth.controller.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/result\.user/g, 'result?.user');
fs.writeFileSync(file, content, 'utf8');
