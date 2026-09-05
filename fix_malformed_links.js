const fs = require('fs');

const malformedLinks = [
    'apps/client/src/pages/(dashboard)/admin/admissions/[id]/page.tsx',
    'apps/client/src/pages/(dashboard)/admin/students/[id]/page.tsx',
    'apps/client/src/pages/(dashboard)/student/assignments/[id]/page.tsx',
    'apps/client/src/pages/(dashboard)/teacher/assignments/[id]/submissions/page.tsx'
];

malformedLinks.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<Link="/g, '<Link to="');
    fs.writeFileSync(file, content, 'utf8');
});
