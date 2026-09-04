const fs = require('fs');
const path = require('path');

function replaceInFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    for (const [search, replace] of Object.entries(replacements)) {
        content = content.split(search).join(replace);
    }
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated', file);
    }
}

// 1. useRouter -> useNavigate
const routerFiles = [
    'apps/client/src/pages/(auth)/login/page.tsx',
    'apps/client/src/pages/(auth)/register/page.tsx'
];
routerFiles.forEach(f => {
    replaceInFile(f, {
        'import { useRouter } from "next/navigation";': 'import { useNavigate } from "react-router-dom";',
        'const router = useRouter();': 'const navigate = useNavigate();',
        'router.push(': 'navigate('
    });
});

// 2. usePathname -> useLocation
const pathFiles = [
    'apps/client/src/components/examination/ExaminationNav.tsx',
    'apps/client/src/components/layout/Sidebar.tsx',
    'apps/client/src/components/layout/Topbar.tsx',
    'apps/client/src/components/shared/PageTransition.tsx'
];
pathFiles.forEach(f => {
    replaceInFile(f, {
        'import { usePathname } from "next/navigation";': 'import { useLocation } from "react-router-dom";',
        'import { usePathname } from \'next/navigation\';': 'import { useLocation } from "react-router-dom";',
        'const pathname = usePathname();': 'const { pathname } = useLocation();'
    });
});

// 3. redirect -> Navigate
const redirectFiles = [
    'apps/client/src/pages/(dashboard)/admin/placement/page.tsx',
    'apps/client/src/pages/(dashboard)/facility/hostel/page.tsx',
    'apps/client/src/pages/(dashboard)/facility/transport/page.tsx'
];
redirectFiles.forEach(f => {
    replaceInFile(f, {
        'import { redirect } from \'next/navigation\';': 'import { Navigate } from "react-router-dom";',
        'redirect(' : 'return <Navigate to='
    });
});
