import { createWriteStream } from 'fs';
import { resolve } from 'path';

// After code starts, enter the input, go to the next line
const write = async () => {
  const filePath = resolve('src', 'streams', 'files', 'fileToWrite.txt');

  const stream = createWriteStream(filePath);

  process.stdin.pipe(stream);

  stream.on('error', (error) => {
    console.error(error.message);
  });
};

await write();
