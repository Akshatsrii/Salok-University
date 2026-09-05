const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'apps', 'client', 'src', 'pages', '(public)');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Replace old blue/cream with new crimson/reddish-cream
            if (content.includes('#1a2b4c') || content.includes('#fffdf5') || content.includes('bg-gray-50')) {
                content = content.replace(/#1a2b4c/g, '#8a1538');     // Navy to Crimson
                content = content.replace(/#fffdf5/g, '#fdf7f7');     // Yellowish cream to reddish cream
                content = content.replace(/bg-gray-50/g, 'bg-[#fdf7f7]');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDirectory(srcDir);
console.log('Colors replaced in public pages');
