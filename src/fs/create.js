import {writeFile} from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {

    const filePath = __dirname + '/files/fresh.txt';
    const exist = 'FS operation failed';
    const text = 'I am fresh and young';

    try {
        await writeFile(filePath, text, {flag: 'wx'});
        console.log(`"${text}" wrote to fresh.txt`)
    } catch (error) {
        throw new Error(exist);
    }

};

await create();