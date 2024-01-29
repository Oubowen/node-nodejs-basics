import { createReadStream } from 'fs';
import { resolve } from 'path';

const read = async () => {
  const filePath = resolve('src', 'streams', 'files', 'fileToRead.txt');

  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on('error', (error) => {
    console.error(error.message);
  });
};

await read();
