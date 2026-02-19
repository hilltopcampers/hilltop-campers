const sharp = require('sharp');
const path = require('path');

async function createDarkPreview() {
  const logoPath = path.join(__dirname, '../public/hilltop-campers-logo-highres.png');
  const outputPath = path.join(__dirname, '../public/hilltop-campers-logo-preview-dark.png');

  // Read the logo
  const logoBuffer = await sharp(logoPath).toBuffer();
  const logoMeta = await sharp(logoBuffer).metadata();

  // Create dark background
  const darkBg = await sharp({
    create: {
      width: logoMeta.width,
      height: logoMeta.height,
      channels: 4,
      background: { r: 30, g: 30, b: 35, alpha: 1 }
    }
  }).png().toBuffer();

  // Composite logo on dark background
  await sharp(darkBg)
    .composite([{ input: logoBuffer, left: 0, top: 0 }])
    .png()
    .toFile(outputPath);

  console.log('Dark preview saved to:', outputPath);
}

createDarkPreview().catch(console.error);
