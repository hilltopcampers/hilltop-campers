const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Function to create a tinted version of the logo
async function tintLogo(logoBuffer, hexColor, width, height) {
  // First resize, then get raw data
  const resizedBuffer = await sharp(logoBuffer)
    .resize(width, height, { fit: 'inside' })
    .ensureAlpha()
    .png()
    .toBuffer();

  // Get the actual dimensions after resize
  const resizedMeta = await sharp(resizedBuffer).metadata();

  // Get raw RGBA data
  const { data, info } = await sharp(resizedBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Parse the hex color
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Create new buffer with the new color but same alpha
  const newData = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] > 0) {
      newData[i] = r;
      newData[i + 1] = g;
      newData[i + 2] = b;
      newData[i + 3] = data[i + 3];
    }
  }

  return sharp(newData, {
    raw: { width: info.width, height: info.height, channels: 4 }
  }).png().toBuffer();
}

async function generateSVGDecalsV4() {
  const outputDir = path.join(__dirname, '../public/media');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read the actual logo
  const logoPath = path.join(__dirname, '../public/images/hilltop-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoMeta = await sharp(logoBuffer).metadata();

  console.log(`Original logo: ${logoMeta.width}x${logoMeta.height}`);
  console.log('\nGenerating Eryri EXPLORER decals V4 (with "By Hilltop Campers")...\n');

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

  // SVG dimensions - adjusted for longer "EXPLORER" text
  const logoWidth = 450;
  const logoHeight = Math.round(logoWidth / (logoMeta.width / logoMeta.height));
  const height = 200;

  // Text positioning
  const textGap = 15;
  const explorerFontSize = 64;
  const eryriFontSize = 32;
  const taglineFontSize = 16;
  const textX = logoWidth + textGap;
  const eryriY = 70;
  const explorerY = 130;
  const taglineY = 158;
  const totalWidth = 980; // Wider to accommodate EXPLORER (8 chars)
  const logoY = Math.floor((height - logoHeight) / 2);

  // Calculate right-aligned position for tagline (under EXPLORER)
  const explorerWidth = explorerFontSize * 5.5; // EXPLORER is 8 chars
  const taglineX = textX + explorerWidth;

  for (const config of decalConfigs) {
    let logoBase64;

    if (config.name === 'green') {
      const resizedLogo = await sharp(logoBuffer)
        .resize(logoWidth, logoHeight)
        .png()
        .toBuffer();
      logoBase64 = resizedLogo.toString('base64');
    } else {
      const tintedBuffer = await tintLogo(logoBuffer, config.color, logoWidth, logoHeight);
      logoBase64 = tintedBuffer.toString('base64');
    }

    // Create SVG content with tagline
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Eryri EXPLORER Decal V4 - ${config.name} -->
  <!-- ${config.description} -->
  <!-- With "By Hilltop Campers" tagline -->
  <!-- Scalable Vector Graphics - Hilltop Campers -->

  <!-- Mountain Logo -->
  <image x="0" y="${logoY}" width="${logoWidth}" height="${logoHeight}"
         xlink:href="data:image/png;base64,${logoBase64}"/>

  <!-- ERYRI text (smaller, above) -->
  <text x="${textX}" y="${eryriY}"
        font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
        font-size="${eryriFontSize}"
        font-weight="900"
        fill="${config.color}"
        letter-spacing="2">ERYRI</text>

  <!-- EXPLORER text (larger, below) -->
  <text x="${textX}" y="${explorerY}"
        font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
        font-size="${explorerFontSize}"
        font-weight="900"
        fill="${config.color}"
        letter-spacing="1">EXPLORER</text>

  <!-- By Hilltop Campers tagline (right-aligned under EXPLORER) -->
  <text x="${taglineX}" y="${taglineY}"
        font-family="Arial, Helvetica, sans-serif"
        font-size="${taglineFontSize}"
        font-weight="400"
        font-style="italic"
        fill="${config.color}"
        text-anchor="end"
        letter-spacing="0.5">By Hilltop Campers</text>
</svg>`;

    // Save SVG file
    const svgFilename = `eryri-explorer-decal-${config.name}-v4.svg`;
    const svgPath = path.join(outputDir, svgFilename);
    fs.writeFileSync(svgPath, svgContent);

    console.log(`Created: ${svgFilename}`);
  }

  // Also generate PNG versions
  console.log('\nGenerating PNG versions...');

  for (const config of decalConfigs) {
    const svgPath = path.join(outputDir, `eryri-explorer-decal-${config.name}-v4.svg`);
    const svgContent = fs.readFileSync(svgPath);

    // Generate PNG at 2x resolution
    const pngFilename = `eryri-explorer-decal-${config.name}-v4-large.png`;
    const pngPath = path.join(outputDir, pngFilename);

    await sharp(svgContent)
      .resize(totalWidth * 2, height * 2)
      .png({ quality: 100 })
      .toFile(pngPath);

    console.log(`Created: ${pngFilename}`);

    // Generate high-res print version at 3x
    const printFilename = `eryri-explorer-decal-${config.name}-v4-print-highres.png`;
    const printPath = path.join(outputDir, printFilename);

    await sharp(svgContent)
      .resize(totalWidth * 3, height * 3)
      .png({ quality: 100 })
      .toFile(printPath);

    console.log(`Created: ${printFilename}`);
  }

  console.log(`\nAll Eryri EXPLORER V4 decals saved to: ${outputDir}`);
  console.log('\nV4 EXPLORER files generated (with "By Hilltop Campers"):');

  const files = fs.readdirSync(outputDir).filter(f => f.includes('explorer') && f.includes('-v4'));
  files.forEach(file => {
    const stats = fs.statSync(path.join(outputDir, file));
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  - ${file} (${sizeKB} KB)`);
  });
}

generateSVGDecalsV4().catch(console.error);
