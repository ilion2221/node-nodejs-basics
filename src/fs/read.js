import { readFile} from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {

    const filePath = __dirname + '/files/dontLookAtMe.txt';
    const exist = 'FS operation failed'

    try {
        const fileContent = await readFile(filePath, 'utf8');
        console.log('File content:');
        console.log(fileContent);
    } catch (error) {
        throw new Error(exist);
    }

};

await read();