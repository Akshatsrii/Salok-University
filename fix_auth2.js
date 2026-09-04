const fs = require('fs');
const file = 'apps/server/src/controllers/auth.controller.ts';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/result\?\.user\.role/g, 'result.user?.role');
content = content.replace(/result\?\.user/g, 'result.user');
content = content.replace(/result\.user\.role/g, 'result.user?.role');
fs.writeFileSync(file, content, 'utf8');
