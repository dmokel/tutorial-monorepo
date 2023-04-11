import fs from 'fs';
import Jimp from 'jimp';
import path from 'path';
import bgTemplate from './bg-template.png';

async function generateImageFromText(text: string): Promise<Buffer> {
  const image = await Jimp.read(path.join(__dirname, bgTemplate));
  // await Jimp.read(path.join(__dirname, 'public/bg-template.png'));
  const font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
  const width = Jimp.measureText(font, text);
  const height = Jimp.measureTextHeight(font, text, width);
  const buffer = await image
    .print(font, image.bitmap.width / 2 - width / 2, image.bitmap.height / 2 - height / 2, text)
    .quality(80)
    .getBufferAsync(Jimp.MIME_JPEG);
  return buffer;
}

async function main() {
  const buffer = await generateImageFromText('David Mokel');

  fs.writeFileSync('./suc.png', buffer);
}

main().then().catch();
