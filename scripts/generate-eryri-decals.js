const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Function to create a tinted version of the logo
async function tintLogo(logoBuffer, hexColor) {
  // Parse the hex color
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Get the image as raw RGBA
  const { data, info } = await sharp(logoBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Create new buffer with the new color but same alpha
  const newData = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    // Only change color for non-transparent pixels
    if (data[i + 3] > 0) {
      newData[i] = r;       // R
      newData[i + 1] = g;   // G
      newData[i + 2] = b;   // B
      newData[i + 3] = data[i + 3]; // Alpha (keep original)
    } else {
      newData[i] = 0;
      newData[i + 1] = 0;
      newData[i + 2] = 0;
      newData[i + 3] = 0;
    }
  }

  return sharp(newData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png().toBuffer();
}

async function generateDecals() {
  const outputDir = path.join(__dirname, '../public/decals');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Clear old files
  const existingFiles = fs.readdirSync(outputDir);
  for (const file of existingFiles) {
    fs.unlinkSync(path.join(outputDir, file));
  }

  // Read the actual logo
  const logoPath = path.join(__dirname, '../public/images/hilltop-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);

  // Get logo metadata
  const logoMeta = await sharp(logoBuffer).metadata();
  console.log(`Original logo: ${logoMeta.width}x${logoMeta.height}`);

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

  // Sizes for different uses
  const sizes = [
    { name: 'small', mountainWidth: 200, height: 80 },
    { name: 'medium', mountainWidth: 320, height: 120 },
    { name: 'large', mountainWidth: 450, height: 170 },
  ];

  console.log('\nGenerating Eryri Adventurer decals using actual logo...\n');

  for (const config of decalConfigs) {
    for (const size of sizes) {
      // Calculate logo dimensions maintaining aspect ratio
      const logoAspect = logoMeta.width / logoMeta.height;
      const mountainHeight = Math.round(size.mountainWidth / logoAspect);

      // Resize the logo first
      const resizedLogoBuffer = await sharp(logoBuffer)
        .resize(size.mountainWidth, mountainHeight, { fit: 'inside' })
        .png()
        .toBuffer();

      const resizedMeta = await sharp(resizedLogoBuffer).metadata();

      // Tint the logo to the desired color
      let tintedLogo;
      if (config.name === 'green') {
        // For green, use original
        tintedLogo = resizedLogoBuffer;
      } else {
        tintedLogo = await tintLogo(resizedLogoBuffer, config.color);
      }

      // NEW LAYOUT: ERYRI smaller, stacked above ADVENTURER, closer to logo
      // ADVENTURER is the main text, ERYRI is smaller above it
      const adventurerFontSize = Math.floor(size.height * 0.38);
      const eryriFontSize = Math.floor(adventurerFontSize * 0.5); // Half the size
      const textGap = Math.floor(size.mountainWidth * 0.03); // Closer to logo

      // Total width - adjusted for new layout (ADVENTURER needs more space)
      const totalWidth = Math.floor(size.mountainWidth + textGap + adventurerFontSize * 8);

      // Vertical centering - stack ERYRI above ADVENTURER
      const mountainY = Math.floor((size.height - resizedMeta.height) / 2);
      const textX = size.mountainWidth + textGap;

      // Position text - ERYRI above, ADVENTURER below
      const eryriY = Math.floor(size.height * 0.38);
      const adventurerY = Math.floor(size.height * 0.72);

      // Create text SVG overlay - ERYRI smaller, above ADVENTURER
      const textSvg = `
        <svg width="${totalWidth}" height="${size.height}" xmlns="http://www.w3.org/2000/svg">
          <text x="${textX}" y="${eryriY}"
                font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
                font-size="${eryriFontSize}"
                font-weight="900"
                fill="${config.color}"
                letter-spacing="2">ERYRI</text>
          <text x="${textX}" y="${adventurerY}"
                font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
                font-size="${adventurerFontSize}"
                font-weight="900"
                fill="${config.color}"
                letter-spacing="1">ADVENTURER</text>
        </svg>
      `;

      // Create transparent base
      const baseImage = await sharp({
        create: {
          width: totalWidth,
          height: size.height,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
      }).png().toBuffer();

      // Composite the logo and text
      const finalImage = await sharp(baseImage)
        .composite([
          {
            input: tintedLogo,
            left: 0,
            top: mountainY
          },
          {
            input: Buffer.from(textSvg),
            left: 0,
            top: 0
          }
        ])
        .png({ quality: 100 })
        .toBuffer();

      // Save PNG at 2x resolution for print quality
      const pngFilename = `eryri-adventurer-decal-${config.name}-${size.name}.png`;
      const pngPath = path.join(outputDir, pngFilename);

      await sharp(finalImage)
        .resize(totalWidth * 2, size.height * 2)
        .png({ quality: 100 })
        .toFile(pngPath);

      console.log(`Created: ${pngFilename} (${totalWidth * 2}x${size.height * 2})`);
    }
  }

  // Create high-res versions for printing
  console.log('\nGenerating high-resolution print versions...');

  for (const config of decalConfigs) {
    const size = { name: 'print', mountainWidth: 800, height: 300 };

    const logoAspect = logoMeta.width / logoMeta.height;
    const mountainHeight = Math.round(size.mountainWidth / logoAspect);

    const resizedLogoBuffer = await sharp(logoBuffer)
      .resize(size.mountainWidth, mountainHeight, { fit: 'inside' })
      .png()
      .toBuffer();

    const resizedMeta = await sharp(resizedLogoBuffer).metadata();

    let tintedLogo;
    if (config.name === 'green') {
      tintedLogo = resizedLogoBuffer;
    } else {
      tintedLogo = await tintLogo(resizedLogoBuffer, config.color);
    }

    // NEW LAYOUT for print version
    const adventurerFontSize = Math.floor(size.height * 0.38);
    const eryriFontSize = Math.floor(adventurerFontSize * 0.5);
    const textGap = Math.floor(size.mountainWidth * 0.03);
    const totalWidth = Math.floor(size.mountainWidth + textGap + adventurerFontSize * 8);
    const mountainY = Math.floor((size.height - resizedMeta.height) / 2);
    const textX = size.mountainWidth + textGap;
    const eryriY = Math.floor(size.height * 0.38);
    const adventurerY = Math.floor(size.height * 0.72);

    const textSvg = `
      <svg width="${totalWidth}" height="${size.height}" xmlns="http://www.w3.org/2000/svg">
        <text x="${textX}" y="${eryriY}"
              font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
              font-size="${eryriFontSize}"
              font-weight="900"
              fill="${config.color}"
              letter-spacing="3">ERYRI</text>
        <text x="${textX}" y="${adventurerY}"
              font-family="Arial Black, Helvetica Neue, Arial, sans-serif"
              font-size="${adventurerFontSize}"
              font-weight="900"
              fill="${config.color}"
              letter-spacing="2">ADVENTURER</text>
      </svg>
    `;

    const baseImage = await sharp({
      create: {
        width: totalWidth,
        height: size.height,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    }).png().toBuffer();

    const finalImage = await sharp(baseImage)
      .composite([
        {
          input: tintedLogo,
          left: 0,
          top: mountainY
        },
        {
          input: Buffer.from(textSvg),
          left: 0,
          top: 0
        }
      ])
      .png({ quality: 100 })
      .toBuffer();

    // Save at 3x for high-res print
    const pngFilename = `eryri-adventurer-decal-${config.name}-print-highres.png`;
    const pngPath = path.join(outputDir, pngFilename);

    await sharp(finalImage)
      .resize(totalWidth * 3, size.height * 3)
      .png({ quality: 100 })
      .toFile(pngPath);

    console.log(`Created: ${pngFilename} (${totalWidth * 3}x${size.height * 3})`);
  }

  console.log(`\nAll decals saved to: ${outputDir}`);
  console.log('\nFiles generated:');

  const files = fs.readdirSync(outputDir);
  files.forEach(file => {
    const stats = fs.statSync(path.join(outputDir, file));
    const sizeKB = (stats.size / 1024).toFixed(1);
    console.log(`  - ${file} (${sizeKB} KB)`);
  });
}

generateDecals().catch(console.error);
