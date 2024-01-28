import { existsSync, renameSync } from 'fs';
import { resolve } from 'path';

const rename = async () => {
  const oldFileName = resolve('src', 'fs', 'files', 'wrongFilename.txt');
  const newFileName = resolve('src', 'fs', 'files', 'properFilename.md');

  try {
    if (!existsSync(oldFileName)) {
      throw new Error('FS operation failed');
    }

    if (existsSync(newFileName)) {
      throw new Error('FS operation failed');
    }

    renameSync(oldFileName, newFileName);
  } catch (error) {
    console.log(error.message);
  }
};

await rename();
