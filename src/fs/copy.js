import {copyFile, readdir, mkdir, access} from 'fs/promises';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const dir = __dirname + '/files';
    const copy = __dirname + '/file_copy';
    const exist = 'FS operation failes';

    try {
        await mkdir(copy);
        const files = await readdir(dir);
        await Promise.all(files.map(i => copyFile(`${dir}/${i}`, `${copy}/${i}`)));
    } catch (error) {
        throw new Error(exist);
    }
};

await copy();
