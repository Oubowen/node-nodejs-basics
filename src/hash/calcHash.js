import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';

const calculateHash = async () => {
  const filePath = resolve(
    'src',
    'hash',
    'files',
    'fileToCalculateHashFor.txt'
  );
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (data) => {
    hash.update(data);
  });

  stream.on('end', () => {
    const hexHash = hash.digest('hex');
    console.log(hexHash);
  });

  stream.on('error', (error) => {
    console.error(error.message);
  });
};

await calculateHash();
