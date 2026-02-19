const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

async function generateFullLogo() {
  // Large canvas for high-res output - wider to fit all text
  const width = 6000;
  const height = 1400;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Transparent background
  ctx.clearRect(0, 0, width, height);
  
  // Load the mountain logo
  const logoPath = path.join(__dirname, 'public/images/hilltop-logo.png');
  const logo = await loadImage(logoPath);
  
  // Draw mountain logo (scaled to fit well)
  const logoHeight = 550;
  const logoWidth = (logo.width / logo.height) * logoHeight;
  const logoX = 100;
  const logoY = 100;
  ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
  
  // Text position (to the right of logo)
  const textX = logoX + logoWidth + 80;
  const textY = 500;
  
  // Draw "Hilltop" in green
  ctx.font = 'bold 360px Arial';
  ctx.fillStyle = '#7CB518';
  const hilltopText = 'Hilltop';
  ctx.fillText(hilltopText, textX, textY);
  
  // Get width of "Hilltop " with space
  const hilltopWidth = ctx.measureText(hilltopText + ' ').width;
  
  // Draw "Campers" in dark gray
  ctx.fillStyle = '#333333';
  ctx.fillText('Campers', textX + hilltopWidth - 50, textY);
  
  // Draw tagline
  ctx.font = '90px Arial';
  ctx.fillStyle = '#666666';
  ctx.fillText('Camper van conversion specialists', textX, textY + 120);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, 'public/hilltop-campers-logo-highres.png'), buffer);
  
  console.log('Full logo generated successfully!');
  console.log(`Dimensions: ${width}x${height}`);
}

generateFullLogo().catch(console.error);
