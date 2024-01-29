import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const create = async () => {
  const filePath = resolve('src', 'fs', 'files', 'fresh.txt');

  try {
    if (existsSync(filePath)) {
      throw new Error('FS operation failed');
    }

    writeFileSync(filePath, 'I am fresh and young');
  } catch (error) {
    console.error(error.message);
  }
};

await create();
