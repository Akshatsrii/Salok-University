const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('apps/client/src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Replace next/link
    content = content.replace(/import Link from ["']next\/link["'];?/g, 'import { Link } from "react-router-dom";');
    
    // Replace next/image
    content = content.replace(/import Image from ["']next\/image["'];?/g, '');
    content = content.replace(/<Image([^>]+)\/>/g, (match, props) => {
      let newProps = props.replace(/\sfill\b/g, '').replace(/\spriority\b/g, '');
      return '<img' + newProps + '/>';
    });

    // Replace next/navigation
    content = content.replace(/import { useRouter, usePathname } from ["']next\/navigation["'];?/g, 'import { useNavigate as useRouter, useLocation } from "react-router-dom";');
    content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');

    // Remove "use client";
    content = content.replace(/"use client";\n?/g, '');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated', filePath);
    }
  }
});
