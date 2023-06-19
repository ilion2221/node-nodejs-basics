import {unlink, rm } from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const filePath = __dirname + '/files/fresh.txt';
    const exist = 'FS operation failed';

    try {
        await unlink(filePath);
        console.log('fileToRemove.txt removed!');
    } catch (error) {
        throw new Error(exist);
    }
};

await remove();