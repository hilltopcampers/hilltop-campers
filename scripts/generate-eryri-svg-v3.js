const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// SVG path that traces the outline of the Hilltop Campers mountain logo
// This is traced from the actual logo silhouette with smooth bezier curves
const createMountainOutlinePath = (strokeColor, strokeWidth = 4) => {
  // This path traces the actual Hilltop Campers logo outline
  // Two overlapping mountains with smooth curves
  return `
    <!-- Left smaller mountain outline -->
    <path d="M 0 88
             C 8 88, 20 82, 35 65
             C 50 48, 70 25, 90 15
             C 105 8, 120 8, 135 15
             C 145 20, 152 30, 158 42
             C 168 60, 175 75, 185 85
             C 190 88, 195 88, 200 88"
          fill="none"
          stroke="${strokeColor}"
          stroke-width="${strokeWidth}"
          stroke-linecap="round"
          stroke-linejoin="round"/>

    <!-- Right larger mountain outline -->
    <path d="M 140 88
             C 155 82, 175 65, 200 45
             C 225 25, 255 8, 285 5
             C 315 2, 345 8, 370 20
             C 390 30, 405 45, 418 62
             C 430 78, 438 86, 450 88"
          fill="none"
          stroke="${strokeColor}"
          stroke-width="${strokeWidth}"
          stroke-linecap="round"
          stroke-linejoin="round"/>
  `;
};

async function generateSVGDecalsV3() {
  const outputDir = path.join(__dirname, '../public/media');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Generating SVG decals V3 (outline logo version)...\n');

  // Decal configurations
  const decalConfigs = [
    {
      name: 'white',
      color: '#FFFFFF',
      description: 'For dark colored vans'
    },
    {
      name: 'black',
      color: '#1a1a1a',
      description: 'For light colored vans'
    },
    {
      name: 'green',
      color: '#7CB518',
      description: 'Brand green - matches logo'
    },
    {
      name: 'silver',
      color: '#C0C0C0',
      description: 'For dark blue/black vans'
    }
  ];

  // SVG dimensions
  const logoWidth = 450;
  const logoHeight = 90;
  const height = 170;

  // Text positioning
  const textGap = 15;
  const adventurerFontSize = 58;
  const eryriFontSize = 29;
  const textX = logoWidth + textGap;
  const eryriY = 62;
  const adventurerY = 115;
  const totalWidth = 980;
  const logoY = Math.floor((height - logoHeight) / 2);
  const logoScale = logoWidth / 450; // Scale factor for the path

  for (const config of decalConfigs) {
    // Create SVG content with outline logo
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg">
  <!-- Eryri Adventurer Decal V3 - ${config.name} -->
  <!-- ${config.description} -->
  <!-- OUTLINE VERSION - Mountain logo as outline only -->
  <!-- Scalable Vector Graphics - Hilltop Campers -->

  <!-- Mountain Logo Outline -->
  <g transform="translate(0, ${logoY}) scale(${logoScale})">
    ${createMountainOutlinePath(config.color, 5)}
  </g>

  <!-- ERYRI text (smaller, above) -->
  <text x="${textX}" y="${eryriY}"
        font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
        font-size="${eryriFontSize}"
        font-weight="900"
        fill="${config.color}"
        letter-spacing="2">ERYRI</text>

  <!-- ADVENTURER text (larger, below) -->
  <text x="${textX}" y="${adventurerY}"
        font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
        font-size="${adventurerFontSize}"
        font-weight="900"
        fill="${config.color}"
        letter-spacing="1">ADVENTURER</text>
</svg>`;

    // Save SVG file
    const svgFilename = `eryri-adventurer-decal-${config.name}-v3-outline.svg`;
    const svgPath = path.join(outputDir, svgFilename);
    fs.writeFileSync(svgPath, svgContent);

    console.log(`Created: ${svgFilename}`);
  }

  // Also generate PNG versions
  console.log('\nGenerating PNG versions...');

  for (const config of decalConfigs) {
    const svgPath = path.join(outputDir, `eryri-adventurer-decal-${config.name}-v3-outline.svg`);
    const svgContent = fs.readFileSync(svgPath);

    // Generate PNG at 2x resolution
    const pngFilename = `eryri-adventurer-decal-${config.name}-v3-outline-large.png`;
    const pngPath = path.join(outputDir, pngFilename);

    await sharp(svgContent)
      .resize(totalWidth * 2, height * 2)
      .png({ quality: 100 })
      .toFile(pngPath);

    console.log(`Created: ${pngFilename}`);

    // Generate high-res print version at 3x
    const printFilename = `eryri-adventurer-decal-${config.name}-v3-outline-print-highres.png`;
    const printPath = path.join(outputDir, printFilename);

    await sharp(svgContent)
      .resize(totalWidth * 3, height * 3)
      .png({ quality: 100 })
      .toFile(printPath);

    console.log(`Created: ${printFilename}`);
  }

  console.log(`\nAll V3 outline decals saved to: ${outputDir}`);
  console.log('\nV3 files generated (outline logo):');

  const files = fs.readdirSync(outputDir).filter(f => f.includes('-v3'));
  files.forEach(file => {
    const stats = fs.statSync(path.join(outputDir, file));
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  - ${file} (${sizeKB} KB)`);
  });
}

generateSVGDecalsV3().catch(console.error);
