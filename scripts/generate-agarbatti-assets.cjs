const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'images', 'agarbatti');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Hero Incense Artwork
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
  <defs>
    <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#C59B27" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#6B1426" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#1C0609" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4A0E17"/>
      <stop offset="50%" stop-color="#2A060B"/>
      <stop offset="100%" stop-color="#150305"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCEAB3"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#9E7A1C"/>
    </linearGradient>
    <filter id="smokeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background Warm Aura -->
  <rect width="800" height="600" fill="#1C0609"/>
  <circle cx="400" cy="300" r="300" fill="url(#heroGlow)"/>
  
  <!-- Wooden / Brass Altar Surface -->
  <ellipse cx="400" cy="520" rx="350" ry="60" fill="#2E170F" stroke="#C59B27" stroke-width="1.5" stroke-opacity="0.4"/>
  <ellipse cx="400" cy="510" rx="330" ry="50" fill="#3D1F14"/>

  <!-- Luxury Incense Packaging Box (3D Angle) -->
  <g transform="translate(180, 220) rotate(-12)">
    <rect width="280" height="90" rx="8" fill="url(#boxGrad)" stroke="url(#goldGrad)" stroke-width="2.5" filter="drop-shadow(0 15px 25px rgba(0,0,0,0.7))"/>
    <rect x="10" y="10" width="260" height="70" rx="4" fill="none" stroke="#C59B27" stroke-width="1" stroke-dasharray="4 2"/>
    <circle cx="50" cy="45" r="22" fill="#1C0609" stroke="url(#goldGrad)" stroke-width="1.5"/>
    <text x="50" y="52" font-family="serif" font-size="16" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">SP</text>
    <text x="85" y="40" font-family="serif" font-size="16" font-weight="bold" fill="#FFFFFF" letter-spacing="1">SHAPOORJI PALLONJ</text>
    <text x="85" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="url(#goldGrad)" letter-spacing="2">ROYAL SANDALWOOD AGARBATTI</text>
    <rect x="85" y="66" width="160" height="2" fill="url(#goldGrad)"/>
  </g>

  <!-- Traditional Brass Incense Stand -->
  <g transform="translate(480, 420)">
    <!-- Base Plate -->
    <ellipse cx="0" cy="30" rx="60" ry="18" fill="url(#goldGrad)" stroke="#755913" stroke-width="1.5"/>
    <ellipse cx="0" cy="24" rx="45" ry="12" fill="#FCEAB3"/>
    <!-- Center Lotus Pod -->
    <path d="M -20 20 C -20 0, 20 0, 20 20 Z" fill="url(#goldGrad)"/>
    <circle cx="0" cy="5" r="8" fill="#9E7A1C"/>
    
    <!-- 3 Burning Agarbatti Sticks -->
    <!-- Stick 1 (Center) -->
    <line x1="0" y1="5" x2="-25" y2="-220" stroke="#70422B" stroke-width="3" stroke-linecap="round"/>
    <line x1="-25" y1="-220" x2="-27" y2="-235" stroke="#FF5722" stroke-width="3" stroke-linecap="round"/>
    <circle cx="-27" cy="-235" r="3" fill="#FFE082" filter="drop-shadow(0 0 8px #FF5722)"/>

    <!-- Stick 2 (Right) -->
    <line x1="0" y1="5" x2="35" y2="-200" stroke="#70422B" stroke-width="3" stroke-linecap="round"/>
    <line x1="35" y1="-200" x2="38" y2="-215" stroke="#FF5722" stroke-width="3" stroke-linecap="round"/>
    <circle cx="38" cy="-215" r="3" fill="#FFE082" filter="drop-shadow(0 0 8px #FF5722)"/>

    <!-- Stick 3 (Left) -->
    <line x1="0" y1="5" x2="-55" y2="-180" stroke="#70422B" stroke-width="3" stroke-linecap="round"/>
    <line x1="-55" y1="-180" x2="-58" y2="-192" stroke="#FF5722" stroke-width="3" stroke-linecap="round"/>
    <circle cx="-58" cy="-192" r="2.5" fill="#FFE082" filter="drop-shadow(0 0 6px #FF5722)"/>

    <!-- Fragrant Smoke Trails (Curling gracefully) -->
    <path d="M -27 -235 Q -40 -280, -10 -330 T -35 -420 T -15 -500" fill="none" stroke="rgba(255, 248, 238, 0.45)" stroke-width="4" stroke-linecap="round" filter="url(#smokeGlow)"/>
    <path d="M 38 -215 Q 60 -260, 30 -310 T 55 -400 T 35 -480" fill="none" stroke="rgba(255, 235, 180, 0.35)" stroke-width="3.5" stroke-linecap="round" filter="url(#smokeGlow)"/>
    <path d="M -58 -192 Q -85 -240, -60 -290 T -80 -370" fill="none" stroke="rgba(255, 248, 238, 0.3)" stroke-width="3" stroke-linecap="round" filter="url(#smokeGlow)"/>
  </g>

  <!-- Brass Diya / Deepam with Holy Flame -->
  <g transform="translate(240, 460)">
    <ellipse cx="0" cy="20" rx="35" ry="12" fill="url(#goldGrad)"/>
    <path d="M -30 18 Q 0 35 30 18 Q 38 8 0 8 Q -38 8 -30 18 Z" fill="#D4AF37"/>
    <ellipse cx="0" cy="12" rx="22" ry="6" fill="#755913"/>
    <!-- Holy Flame -->
    <path d="M 0 10 C -8 5, -8 -15, 0 -30 C 8 -15, 8 5, 0 10 Z" fill="#FFB300" filter="drop-shadow(0 0 12px #FF6F00)"/>
    <path d="M 0 8 C -4 4, -4 -8, 0 -18 C 4 -8, 4 4, 0 8 Z" fill="#FFF59D"/>
  </g>

  <!-- Marigold & Rose Petals on Altar -->
  <g transform="translate(360, 480)">
    <circle cx="0" cy="0" r="14" fill="#FF8F00" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"/>
    <circle cx="0" cy="0" r="10" fill="#FFC107"/>
    <circle cx="0" cy="0" r="5" fill="#FF5722"/>

    <circle cx="35" cy="10" r="12" fill="#E91E63" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))"/>
    <circle cx="35" cy="10" r="8" fill="#F48FB1"/>
    
    <circle cx="-50" cy="15" r="13" fill="#FF8F00"/>
    <circle cx="-50" cy="15" r="8" fill="#FFE082"/>
  </g>

  <!-- Golden Brand Seal in Top Corner -->
  <g transform="translate(680, 80)">
    <circle cx="0" cy="0" r="45" fill="#2A060B" stroke="url(#goldGrad)" stroke-width="2"/>
    <circle cx="0" cy="0" r="38" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-dasharray="3 2"/>
    <text x="0" y="-8" font-family="serif" font-size="14" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">100% PURE</text>
    <text x="0" y="8" font-family="serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">AGARBATTI</text>
    <text x="0" y="22" font-family="sans-serif" font-size="8" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="1">FRAGRANCE</text>
  </g>
</svg>`;

// Helper to create product packaging SVG
function makeProductSvg(title, subtitle, bgColor1, bgColor2, accentColor, flowerColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCF9F2"/>
      <stop offset="100%" stop-color="#F3E9D7"/>
    </linearGradient>
    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgColor1}"/>
      <stop offset="100%" stop-color="${bgColor2}"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCEAB3"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#9E7A1C"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="rgba(42, 6, 11, 0.25)"/>
    </filter>
  </defs>

  <!-- Background Surface -->
  <rect width="600" height="450" fill="url(#bgGrad)"/>
  <ellipse cx="300" cy="380" rx="260" ry="40" fill="#E6D7C0" opacity="0.6"/>

  <!-- Luxury Agarbatti Box Presentation (Center) -->
  <g transform="translate(130, 80)" filter="url(#shadow)">
    <!-- Box Body -->
    <rect width="340" height="180" rx="12" fill="url(#boxGrad)" stroke="url(#goldGrad)" stroke-width="2.5"/>
    
    <!-- Golden Ornamental Border -->
    <rect x="12" y="12" width="316" height="156" rx="8" fill="none" stroke="url(#goldGrad)" stroke-width="1.2" stroke-dasharray="6 3"/>
    
    <!-- Brand Crest -->
    <circle cx="60" cy="55" r="26" fill="#1F0508" stroke="url(#goldGrad)" stroke-width="1.8"/>
    <text x="60" y="62" font-family="serif" font-size="18" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">SP</text>
    
    <!-- Text Labels -->
    <text x="100" y="48" font-family="serif" font-size="16" font-weight="bold" fill="#FFFFFF" letter-spacing="1">SHAPOORJI PALLONJ</text>
    <text x="100" y="66" font-family="sans-serif" font-size="9" font-weight="bold" fill="url(#goldGrad)" letter-spacing="2">PREMIUM INCENSE COLLECTION</text>
    
    <!-- Product Name Plate -->
    <rect x="25" y="95" width="290" height="48" rx="6" fill="#150406" stroke="${accentColor}" stroke-width="1.5"/>
    <text x="170" y="118" font-family="serif" font-size="16" font-weight="bold" fill="url(#goldGrad)" text-anchor="middle">${title}</text>
    <text x="170" y="134" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${subtitle}</text>
    
    <!-- Quality Seal -->
    <circle cx="295" cy="55" r="15" fill="${accentColor}" opacity="0.9"/>
    <text x="295" y="58" font-family="sans-serif" font-size="7.5" font-weight="bold" fill="#FFFFFF" text-anchor="middle">PURE</text>
  </g>

  <!-- Burning Incense Sticks & Stand in Foreground -->
  <g transform="translate(160, 360)">
    <!-- Wooden Incense Boat Holder -->
    <path d="M -80 0 L 260 0 C 270 0, 275 -10, 260 -12 L -60 -12 C -75 -12, -85 0, -80 0 Z" fill="#5D3A29" stroke="#3E2317" stroke-width="1.5" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.3))"/>
    <circle cx="-65" cy="-6" r="3" fill="#2E1A11"/>

    <!-- Incense Stick Resting in Holder -->
    <line x1="-65" y1="-6" x2="230" y2="-45" stroke="#7C4A2D" stroke-width="3.5" stroke-linecap="round"/>
    
    <!-- Burning Ember Tip -->
    <circle cx="230" cy="-45" r="3" fill="#FF5722" filter="drop-shadow(0 0 6px #FF3D00)"/>
    <circle cx="230" cy="-45" r="1.5" fill="#FFE082"/>

    <!-- Rising Smoke Curl -->
    <path d="M 230 -45 Q 260 -100, 220 -160 T 250 -240 T 210 -320" fill="none" stroke="rgba(100, 70, 50, 0.4)" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- Aromatic Ingredients Accents -->
  <g transform="translate(480, 350)">
    <circle cx="0" cy="0" r="20" fill="${flowerColor}" filter="drop-shadow(0 6px 10px rgba(0,0,0,0.2))"/>
    <circle cx="0" cy="0" r="12" fill="#FFFFFF" opacity="0.6"/>
    <circle cx="0" cy="0" r="6" fill="#FFC107"/>
    
    <circle cx="-25" cy="15" r="15" fill="${flowerColor}" opacity="0.9"/>
    <circle cx="-25" cy="15" r="8" fill="#FFF59D"/>
  </g>
</svg>`;
}

// Generate all SVG files
fs.writeFileSync(path.join(outDir, 'hero-incense.svg'), heroSvg, 'utf8');
fs.writeFileSync(path.join(outDir, 'royal-sandalwood.svg'), makeProductSvg('ROYAL SANDALWOOD', 'PURE MYSORE CHANDAN AGARBATTI', '#4A0E17', '#2A060B', '#C59B27', '#E4B556'), 'utf8');
fs.writeFileSync(path.join(outDir, 'divine-rose.svg'), makeProductSvg('DIVINE DESI GULAB', 'FRESH DAMASK ROSE AGARBATTI', '#6B1426', '#3D0A10', '#D81B60', '#E91E63'), 'utf8');
fs.writeFileSync(path.join(outDir, 'sweet-jasmine.svg'), makeProductSvg('NIGHT JASMINE (CHAMELI)', 'SWEET WHITE FLORAL INCENSE', '#2A060B', '#150305', '#C59B27', '#FFFFFF'), 'utf8');
fs.writeFileSync(path.join(outDir, 'blossom-mogra.svg'), makeProductSvg('AUSPICIOUS MOGRA (BELA)', 'TRADITIONAL PUJA AGARBATTI', '#3D0A10', '#1F0508', '#C59B27', '#FFF59D'), 'utf8');
fs.writeFileSync(path.join(outDir, 'calming-lavender.svg'), makeProductSvg('CALMING FRENCH LAVENDER', 'RELAXATION & WELLNESS AGARBATTI', '#311B92', '#1A0B4B', '#9575CD', '#B39DDB'), 'utf8');
fs.writeFileSync(path.join(outDir, 'sacred-chandan.svg'), makeProductSvg('SACRED TEMPLE CHANDAN', 'SACRED MEDITATION INCENSE', '#4E260E', '#2E1508', '#E5C158', '#FFB74D'), 'utf8');
fs.writeFileSync(path.join(outDir, 'masala-dhoop.svg'), makeProductSvg('HERITAGE MASALA AGARBATTI', 'HAND-ROLLED RESIN INCENSE', '#3E1F14', '#210F09', '#C59B27', '#D7CCC8'), 'utf8');
fs.writeFileSync(path.join(outDir, 'luxury-gift-box.svg'), makeProductSvg('ROYAL HERITAGE GIFT BOX', '5-IN-1 LUXURY ASSORTMENT PACK', '#2A060B', '#100204', '#D4AF37', '#FFD54F'), 'utf8');
fs.writeFileSync(path.join(outDir, 'incense-cones.svg'), makeProductSvg('SAMBRANI & LOBAN CONES', 'ENERGY CLEANSING DHOOP CONES', '#2E170F', '#180B07', '#E5C158', '#FFE082'), 'utf8');

console.log('Successfully generated all Agarbatti SVG artwork!');
