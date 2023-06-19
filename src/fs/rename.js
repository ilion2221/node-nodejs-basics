import { rename as giveNewName } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const name = __dirname + '/files/properFilename.md';
  const wrongName = __dirname + '/files/wrongFilename.txt';
  const exist = 'FS operation failed';

  try{
      await giveNewName(wrongName, name);
  }catch (e){
      throw new Error(exist);
  }
};

await rename();