const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateHighResLogo() {
  // High resolution dimensions for signs (larger for print quality)
  const width = 5000;
  const tempHeight = 3000; // Temporary height for compositing

  // Read the mountain logo
  const logoPath = path.join(__dirname, '../public/images/hilltop-logo.png');
  const logoBuffer = fs.readFileSync(logoPath);

  // Get logo dimensions and resize for high-res output
  const logoWidth = Math.floor(width * 0.65); // 65% of total width
  const resizedLogo = await sharp(logoBuffer)
    .resize(logoWidth, null, { fit: 'inside' })
    .toBuffer();

  const resizedLogoMeta = await sharp(resizedLogo).metadata();

  // Calculate positions - center the logo
  const logoX = Math.floor((width - resizedLogoMeta.width) / 2);
  const logoY = 50;

  // Font sizes for high res
  const mainFontSize = 280;
  const taglineFontSize = 100;

  // Calculate text Y position based on logo
  const textY = logoY + resizedLogoMeta.height + mainFontSize + 60;
  const taglineY = textY + 140;

  // Calculate final height - add padding below tagline
  const finalHeight = taglineY + 100;

  // Calculate positions for Hilltop and Campers with proper gap
  // Center point is width/2, we need to position both words with a gap between them
  const gap = 60; // Gap between the two words in pixels
  const hilltopText = 'Hilltop';
  const campersText = 'Campers';

  // Approximate character width for positioning (these will be adjusted)
  // Using text-anchor="end" for Hilltop and text-anchor="start" for Campers
  const centerX = width / 2;
  const hilltopX = centerX - (gap / 2);  // End of Hilltop
  const campersX = centerX + (gap / 2);  // Start of Campers

  // Create SVG for text overlay - Hilltop and Campers positioned with gap
  const textSvg = `
    <svg width="${width}" height="${finalHeight}" xmlns="http://www.w3.org/2000/svg">
      <text x="${hilltopX}" y="${textY}" font-size="${mainFontSize}" text-anchor="end" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" fill="#7CB518">Hilltop</text>
      <text x="${campersX}" y="${textY}" font-size="${mainFontSize}" text-anchor="start" font-family="Arial Black, Helvetica, sans-serif" font-weight="900" fill="#FFFFFF">Campers</text>
      <text x="${width / 2}" y="${taglineY}" font-size="${taglineFontSize}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-weight="400" fill="#555555">Campervan Conversion Specialist</text>
    </svg>
  `;

  const textBuffer = Buffer.from(textSvg);

  // Create transparent base with RGBA - use final height
  const baseImage = await sharp({
    create: {
      width: width,
      height: finalHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  }).png().toBuffer();

  // Composite the logo and text
  const outputPath = path.join(__dirname, '../public/hilltop-campers-logo-highres.png');

  await sharp(baseImage)
    .composite([
      {
        input: resizedLogo,
        left: logoX,
        top: logoY
      },
      {
        input: textBuffer,
        left: 0,
        top: 0
      }
    ])
    .png({
      quality: 100,
      compressionLevel: 6
    })
    .toFile(outputPath);

  // Get final file size
  const stats = fs.statSync(outputPath);
  const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`High-resolution logo saved to: ${outputPath}`);
  console.log(`Dimensions: ${width}x${finalHeight}px`);
  console.log(`File size: ${fileSizeInMB} MB`);
  console.log(`\nThis logo has a transparent background and is suitable for signs.`);
  console.log(`\nYou can download it from your project at: public/hilltop-campers-logo-highres.png`);
}

generateHighResLogo().catch(console.error);
