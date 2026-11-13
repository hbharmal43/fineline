import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const source = path.join(root, 'app', 'icon.svg');

async function renderPng(size, destination) {
  await sharp(source)
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toFile(destination);
}

await Promise.all([
  renderPng(180, path.join(root, 'app', 'apple-icon.png')),
  renderPng(192, path.join(root, 'public', 'fineline-icon-192.png')),
  renderPng(512, path.join(root, 'public', 'fineline-icon-512.png')),
]);

const faviconSizes = [16, 32, 48];
const faviconImages = await Promise.all(
  faviconSizes.map((size) => sharp(source).resize(size, size).png().toBuffer()),
);

const header = Buffer.alloc(6 + faviconImages.length * 16);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(faviconImages.length, 4);

let offset = header.length;
faviconImages.forEach((image, index) => {
  const size = faviconSizes[index];
  const entry = 6 + index * 16;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt8(0, entry + 2);
  header.writeUInt8(0, entry + 3);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});

await fs.writeFile(
  path.join(root, 'app', 'favicon.ico'),
  Buffer.concat([header, ...faviconImages]),
);

console.log('Generated Fineline favicon and app icons.');
