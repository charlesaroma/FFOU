const fs = require('fs');
const path = require('path');

const iconMap = {
  "ph:x-bold": "mdi:close-thick",
  "ph:list-bold": "mdi:menu",
  "ph:caret-right-bold": "mdi:chevron-right",
  "ph:plus-bold": "mdi:plus-thick",
  "ph:minus-bold": "mdi:minus-thick",
  "ph:arrow-right-light": "mdi:arrow-right-thin",
  "ph:heart-bold": "mdi:heart",
  "ph:envelope-simple-bold": "mdi:email",
  "ph:chat-circle-bold": "mdi:message-circle",
  "ph:clock-bold": "mdi:clock",
  "ph:check-circle-bold": "mdi:check-circle",
  "ph:warning-circle-bold": "mdi:alert-circle",
  "ph:paper-plane-tilt-bold": "mdi:send",
  "ph:shield-check-bold": "mdi:shield-check",
  "ph:check-circle-fill": "mdi:check-circle",
  "ph:list-checks-bold": "mdi:format-list-checks",
  "ph:arrow-right-bold": "mdi:arrow-right-thick",
  "ph:check-bold": "mdi:check-bold",
  "ph:newspaper-bold": "mdi:newspaper",
  "ph:broadcast-bold": "mdi:broadcast",
  "ph:arrow-up-right-bold": "mdi:arrow-top-right-thick",
  "ph:caret-down-bold": "mdi:chevron-down",
  "ph:caret-down-fill": "mdi:menu-down",
  "ph:bank-bold": "mdi:bank",
  "ph:phone-bold": "mdi:phone",
  "ph:device-mobile-bold": "mdi:cellphone",
  "ph:envelope-simple-light": "mdi:email-outline",
  "ph:phone-light": "mdi:phone-outline",
  "ph:device-mobile-light": "mdi:cellphone-outline",
  "ph:buildings-bold": "mdi:office-building",
  "ph:waves-bold": "mdi:waves",
  "ph:chart-line-up-bold": "mdi:chart-line",
  "ph:fish-bold": "mdi:fish",
  "ph:users-three-bold": "mdi:account-group",
  "ph:scales-bold": "mdi:scale-balance",
  "ph:leaf-bold": "mdi:leaf"
};

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Find all icon="..." or icon={'...'} matches
  const matches = content.match(/icon=(?:\{['"]|['"])(ph:[^'"\}]+)(?:['"]\}|['"])/g);
  
  if (matches) {
    for (const [phIcon, mdiIcon] of Object.entries(iconMap)) {
      content = content.replace(new RegExp(phIcon, 'g'), mdiIcon);
    }
    
    // Safety check - what if there are unmapped 'ph:' icons?
    const unmappedMatches = content.match(/ph:[a-zA-Z0-9-]+/g);
    if (unmappedMatches) {
        console.log(`Unmapped icons in ${file}:`, unmappedMatches);
        // Map them generically to mdi equivalent if not found, or just warn
        unmappedMatches.forEach(unmapped => {
           let base = unmapped.replace('ph:', '').replace('-bold', '').replace('-light', '').replace('-fill', '');
           content = content.replace(new RegExp(unmapped, 'g'), 'mdi:' + base);
           console.log(`Auto-mapped ${unmapped} -> mdi:${base}`);
        });
    }

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      totalReplacements++;
    }
  }
});

console.log('Modified files:', totalReplacements);
