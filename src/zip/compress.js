import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { resolve } from 'path';

const compress = async () => {
  const inputFile = resolve('src', 'zip', 'files', 'fileToCompress.txt');
  const outputFile = resolve('src', 'zip', 'files', 'archive.gz');

  const inputStream = createReadStream(inputFile);
  const gzipStream = createGzip();
  const outputStream = createWriteStream(outputFile);

  inputStream.pipe(gzipStream).pipe(outputStream);

  outputStream.on('close', () => {
    console.log('Compressed successfully');
  });

  outputStream.on('error', (err) => {
    console.error(err.message);
  });
};

await compress();
