const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Define the images and their number plate regions
// Coordinates are approximate and may need adjustment
const imagesToProcess = [
  {
    input: 'public/images/eryri-adventurer/front-three-quarter.jpg',
    output: 'public/images/eryri-adventurer/front-three-quarter.jpg',
    // Number plate region: x, y, width, height (approximate)
    plateRegion: { left: 680, top: 520, width: 180, height: 45 }
  },
  {
    input: 'public/images/eryri-adventurer/front-headon.jpg',
    output: 'public/images/eryri-adventurer/front-headon.jpg',
    plateRegion: { left: 540, top: 580, width: 200, height: 50 }
  },
  {
    input: 'public/images/eryri-adventurer/side-three-quarter.jpg',
    output: 'public/images/eryri-adventurer/side-three-quarter.jpg',
    plateRegion: { left: 150, top: 480, width: 160, height: 40 }
  },
  {
    input: 'public/images/eryri-adventurer/poptop-raised.jpg',
    output: 'public/images/eryri-adventurer/poptop-raised.jpg',
    plateRegion: { left: 620, top: 540, width: 180, height: 45 }
  },
  {
    input: 'public/images/eryri-adventurer/rear-three-quarter.jpg',
    output: 'public/images/eryri-adventurer/rear-three-quarter.jpg',
    plateRegion: { left: 380, top: 520, width: 180, height: 45 }
  }
];

async function blurNumberPlate(imageConfig) {
  const { input, output, plateRegion } = imageConfig;
  const inputPath = path.join(__dirname, '..', input);
  const outputPath = path.join(__dirname, '..', output);

  // Check if file exists
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${input} - file not found`);
    return;
  }

  try {
    // Get image metadata
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing ${input} (${metadata.width}x${metadata.height})`);

    // Create a blurred version of just the plate region
    const plateBuffer = await sharp(inputPath)
      .extract(plateRegion)
      .blur(30) // Heavy blur
      .toBuffer();

    // Composite the blurred plate region back onto the original
    await sharp(inputPath)
      .composite([
        {
          input: plateBuffer,
          left: plateRegion.left,
          top: plateRegion.top
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath + '.tmp');

    // Replace original with processed version
    fs.renameSync(outputPath + '.tmp', outputPath);
    console.log(`✓ Processed ${output}`);
  } catch (error) {
    console.error(`Error processing ${input}:`, error.message);
  }
}

async function main() {
  console.log('Blurring number plates from banner images...\n');

  for (const imageConfig of imagesToProcess) {
    await blurNumberPlate(imageConfig);
  }

  console.log('\nDone!');
}

main();
