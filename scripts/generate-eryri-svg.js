const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateSVGDecals() {
  const outputDir = path.join(__dirname, '../public/media');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Read the actual logo and convert to base64
  const logoPath = path.join(__dirname, '../public/images/hilltop-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);
  const logoMeta = await sharp(logoBuffer).metadata();

  console.log(`Original logo: ${logoMeta.width}x${logoMeta.height}`);
  console.log('\nGenerating SVG decals...\n');

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

  // SVG dimensions (scalable, but we set a base size)
  const logoWidth = 450;
  const logoHeight = Math.round(logoWidth / (logoMeta.width / logoMeta.height));
  const height = 170;

  // Text positioning
  const textGap = 15;
  const adventurerFontSize = Math.floor(height * 0.38);
  const eryriFontSize = Math.floor(adventurerFontSize * 0.5);
  const textX = logoWidth + textGap;
  const eryriY = Math.floor(height * 0.38);
  const adventurerY = Math.floor(height * 0.72);
  const totalWidth = logoWidth + textGap + adventurerFontSize * 8;
  const logoY = Math.floor((height - logoHeight) / 2);

  for (const config of decalConfigs) {
    // For each color, we need to create a tinted version of the logo
    // We'll embed the logo as base64 and use CSS filter or create colored version

    let logoBase64;

    if (config.name === 'green') {
      // Use original green logo
      logoBase64 = logoBuffer.toString('base64');
    } else {
      // Tint the logo to the desired color
      const { data, info } = await sharp(logoBuffer)
        .resize(logoWidth, logoHeight)
        .ensureAlpha()
        .raw()
        .toBuffer({ resolveWithObject: true });

      // Parse the hex color
      const hex = config.color.replace('#', '');
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
        } else {
          newData[i] = 0;
          newData[i + 1] = 0;
          newData[i + 2] = 0;
          newData[i + 3] = 0;
        }
      }

      const tintedBuffer = await sharp(newData, {
        raw: { width: info.width, height: info.height, channels: 4 }
      }).png().toBuffer();

      logoBase64 = tintedBuffer.toString('base64');
    }

    // For green, resize the logo for embedding
    if (config.name === 'green') {
      const resizedLogo = await sharp(logoBuffer)
        .resize(logoWidth, logoHeight)
        .png()
        .toBuffer();
      logoBase64 = resizedLogo.toString('base64');
    }

    // Create SVG content
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${totalWidth}" height="${height}" viewBox="0 0 ${totalWidth} ${height}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Eryri Adventurer Decal - ${config.name} -->
  <!-- ${config.description} -->
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

  <!-- ADVENTURER text (larger, below) -->
  <text x="${textX}" y="${adventurerY}"
        font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
        font-size="${adventurerFontSize}"
        font-weight="900"
        fill="${config.color}"
        letter-spacing="1">ADVENTURER</text>
</svg>`;

    // Save SVG file
    const svgFilename = `eryri-adventurer-decal-${config.name}.svg`;
    const svgPath = path.join(outputDir, svgFilename);
    fs.writeFileSync(svgPath, svgContent);

    console.log(`Created: ${svgFilename}`);
  }

  // Also copy the PNG decals to media folder
  console.log('\nCopying PNG decals to media folder...');
  const decalsDir = path.join(__dirname, '../public/decals');
  const pngFiles = fs.readdirSync(decalsDir).filter(f => f.endsWith('.png'));

  for (const file of pngFiles) {
    const src = path.join(decalsDir, file);
    const dest = path.join(outputDir, file);
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${file}`);
  }

  console.log(`\nAll files saved to: ${outputDir}`);
  console.log('\nSVG files generated:');

  const svgFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.svg'));
  svgFiles.forEach(file => {
    const stats = fs.statSync(path.join(outputDir, file));
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  - ${file} (${sizeKB} KB)`);
  });
}

generateSVGDecals().catch(console.error);
