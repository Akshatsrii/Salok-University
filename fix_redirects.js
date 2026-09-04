const fs = require('fs');
const redirectFiles = [
    'apps/client/src/pages/(dashboard)/admin/placement/page.tsx',
    'apps/client/src/pages/(dashboard)/facility/hostel/page.tsx',
    'apps/client/src/pages/(dashboard)/facility/transport/page.tsx'
];
redirectFiles.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/return <Navigate to='([^']+)'\);/g, "return <Navigate to='$1' replace />;")
                     .replace(/return <Navigate to="([^"]+)"\);/g, 'return <Navigate to="$1" replace />;');
    fs.writeFileSync(f, content, 'utf8');
});
