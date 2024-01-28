import { existsSync, unlinkSync } from 'fs';
import { resolve } from 'path';

const remove = async () => {
  const fileName = resolve('src', 'fs', 'files', 'fileToRemove.txt');

  try {
    if (!existsSync(fileName)) {
      throw new Error('FS operation failed');
    }

    unlinkSync(fileName);
  } catch (error) {
    console.error(error.message);
  }
};

await remove();
