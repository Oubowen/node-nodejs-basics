import { existsSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { resolve } from 'path';

const copy = async () => {
  const sourceFolderPath = resolve('src', 'fs', 'files');
  const destinationFolderPath = 'files_copy';

  try {
    if (!existsSync(sourceFolderPath)) {
      throw new Error('FS operation failed');
    }

    if (existsSync(destinationFolderPath)) {
      throw new Error('FS operation failed');
    }

    mkdirSync(destinationFolderPath);

    const files = readdirSync(sourceFolderPath);

    files.forEach((file) => {
      const sourceFilePath = resolve(sourceFolderPath, file);
      const destinationFilePath = resolve(destinationFolderPath, file);
      copyFileSync(sourceFilePath, destinationFilePath);
    });
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
