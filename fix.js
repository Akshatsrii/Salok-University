const fs = require('fs');
fs.copyFileSync('apps/web/app/(public)/convocation/page.tsx', 'apps/client/src/pages/(public)/convocation/page.tsx');
let c = fs.readFileSync('apps/client/src/pages/(public)/convocation/page.tsx', 'utf8');
c = c.replace(/import Link from ["']next\/link["'];?/g, 'import { Link } from "react-router-dom";');
c = c.replace(/import Image from ["']next\/image["'];?/g, '');
c = c.replace(/<Image([^>]+)\/>/g, (m, p) => '<img' + p.replace(/\sfill\b/g, '') + '/>');
fs.writeFileSync('apps/client/src/pages/(public)/convocation/page.tsx', c);
