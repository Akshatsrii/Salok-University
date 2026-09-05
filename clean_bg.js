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

            // Remove the dirty pinkish background
            if (content.includes('#fdf7f7')) {
                content = content.replace(/#fdf7f7/g, '#ffffff');
                modified = true;
            }
            if (content.includes('bg-[#fcf5f5]')) {
                content = content.replace(/bg-\[#fcf5f5\]/g, 'bg-gray-50');
                modified = true;
            }
            if (content.includes('bg-primary/80 mix-blend-multiply')) {
                content = content.replace(/bg-primary\/80 mix-blend-multiply/g, 'bg-black/50');
                modified = true;
            }
            if (content.includes('bg-primary-dark/80 mix-blend-multiply')) {
                content = content.replace(/bg-primary-dark\/80 mix-blend-multiply/g, 'bg-black/50');
                modified = true;
            }
            if (content.includes('bg-primary/90')) {
                content = content.replace(/bg-primary\/90/g, 'bg-black/50');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    }
}

processDirectory(srcDir);
console.log('Cleaned up dirty backgrounds');
