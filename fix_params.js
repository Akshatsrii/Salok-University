const fs = require('fs');
const path = require('path');

function fixParamsRecursively(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixParamsRecursively(fullPath);
        } else if (file === 'page.tsx' && fullPath.includes('[id]')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Check if it's using next.js params
            if (content.includes('params: { id }') || content.includes('params: { id: string }')) {
                // Remove the prop
                content = content.replace(/\{ params: \{ id \} \}/g, '');
                content = content.replace(/\{ params \}: \{ params: \{ id: string \} \}/g, '');
                content = content.replace(/\{ params \}/g, '');
                
                // Add import if missing
                if (!content.includes('useParams')) {
                    content = 'import { useParams } from "react-router-dom";\n' + content;
                }
                
                // Add hook inside component
                content = content.replace(/export default function[^{]+{/, (match) => {
                    return match + '\n  const { id } = useParams();\n';
                });
                
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Fixed useParams in ' + fullPath);
            }
        }
    }
}

fixParamsRecursively(path.join(__dirname, 'apps/client/src/pages'));
