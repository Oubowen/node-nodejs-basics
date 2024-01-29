import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';

const list = async () => {
  const folderPath = resolve('src', 'fs', 'files');

  try {
    if (!existsSync(folderPath)) {
      throw new Error('FS operation failed');
    }

    const files = readdirSync(folderPath);

    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.log(error.message);
  }
};

await list();
