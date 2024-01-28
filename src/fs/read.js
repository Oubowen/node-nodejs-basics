import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';

const read = async () => {
  const fileName = resolve('src', 'fs', 'files', 'fileToRead.txt');

  try {
    if (!existsSync(fileName)) {
      throw new Error('FS operation failed');
    }

    const content = readFileSync(fileName, 'utf-8');

    console.log(content);
  } catch (error) {
    console.error(error.message);
  }
};

await read();
