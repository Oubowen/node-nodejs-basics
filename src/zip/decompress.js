import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { resolve } from 'path';

const decompress = async () => {
  const inputFile = resolve('src', 'zip', 'files', 'archive.gz');
  const outputFile = resolve('src', 'zip', 'files', 'fileToCompress.txt');

  const inputStream = createReadStream(inputFile);
  const gzipStream = createGunzip();
  const outputStream = createWriteStream(outputFile);

  inputStream.pipe(gzipStream).pipe(outputStream);

  outputStream.on('close', () => {
    console.log('Decompressed successfully');
  });

  outputStream.on('error', (err) => {
    console.error(err.message);
  });
};

await decompress();
