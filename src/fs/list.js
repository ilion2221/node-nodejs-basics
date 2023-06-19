import fs from 'fs/promises';
import dirname from 'path';

const list = async () => {
    const path = dirname.resolve('src/fs/files');

    try {
        const arr = [];
        await fs.readdir(path, {withFileTypes: true}).then((data) => data.map((item) => arr.push(item.name)));
             console.log(arr);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw error;
        }
    }
};

await list();