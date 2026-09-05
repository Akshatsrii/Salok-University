const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'apps', 'client', 'src');
const pagesDir = path.join(srcDir, 'pages');

let imports = [
    "import { BrowserRouter, Routes, Route } from 'react-router-dom';",
    "import DashboardLayout from './pages/(dashboard)/layout';"
];

let publicRoutes = [];
let authRoutes = [];
let dashboardRoutes = [];

function toPascalCase(str) {
    // Remove (auth), (public), (dashboard) entirely
    let clean = str.replace(/\([^)]+\)/g, '');
    
    // Replace non-alphanumeric chars with underscore temporarily
    clean = clean.replace(/[^a-zA-Z0-9]/g, '_');
    
    // Convert to PascalCase
    return clean.split('_').filter(Boolean).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function processDirectory(dir, basePath) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath, basePath + '/' + file);
        } else if (file === 'page.tsx') {
            const relPath = path.relative(pagesDir, fullPath).replace(/\\/g, '/');
            
            // Skip layout file
            if (relPath === '(dashboard)/layout.tsx') continue;
            
            let routePath = basePath.replace(/\/\([^)]+\)/g, '').replace(/\[([^\]]+)\]/g, ':');
            if (routePath === '' || routePath === '/') routePath = '/';
            else if (!routePath.startsWith('/')) routePath = '/' + routePath;
            
            // Format component name cleanly
            let componentName = "Page" + toPascalCase(relPath.replace('/page.tsx', ''));
            if(componentName === "Page") componentName = "PageHome";
            
            imports.push("import " + componentName + " from './pages/" + relPath.replace('.tsx', '') + "';");
            
            const routeConfig = "<Route path=\"" + routePath + "\" element={<" + componentName + " />} />";
            
            if (relPath.startsWith('(public)')) {
                publicRoutes.push(routeConfig);
            } else if (relPath.startsWith('(auth)')) {
                authRoutes.push(routeConfig);
            } else if (relPath.startsWith('(dashboard)')) {
                dashboardRoutes.push(routeConfig);
            }
        }
    }
}

processDirectory(pagesDir, '');

const appTsx = imports.join('\n') + "\n\n" +
"function App() {\n" +
"  return (\n" +
"    <BrowserRouter>\n" +
"      <Routes>\n" +
"        {/* Public Routes */}\n" +
"        " + publicRoutes.join('\n        ') + "\n\n" +
"        {/* Auth Routes */}\n" +
"        " + authRoutes.join('\n        ') + "\n\n" +
"        {/* Dashboard Routes wrapped in layout */}\n" +
"        <Route element={<DashboardLayout />}>\n" +
"          " + dashboardRoutes.join('\n          ') + "\n" +
"        </Route>\n" +
"        \n" +
"        {/* Fallback */}\n" +
"        <Route path=\"*\" element={<div className=\"min-h-screen flex items-center justify-center text-2xl font-bold\">404 - Not Found</div>} />\n" +
"      </Routes>\n" +
"    </BrowserRouter>\n" +
"  );\n" +
"}\n\n" +
"export default App;\n";

fs.writeFileSync(path.join(srcDir, 'App.tsx'), appTsx);
console.log('App.tsx successfully regenerated!');
