import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __modifiedDirname = dirname(fileURLToPath(import.meta.url));
const modifiedScriptFile = join(__modifiedDirname, 'files', 'modifiedScript.js');

const spawnModifiedChildProcess = async (modifiedArgs) => {
    const modifiedChild = spawn('node', [modifiedScriptFile, ...modifiedArgs]);

    process.stdin.on('data', (data) => modifiedChild.stdin.write(data));
    modifiedChild.stdout.on('data', (data) => console.log(`Modified child process stdout:\n${data.toString()}`));
};

spawnModifiedChildProcess(['Argument1', 'Argument2']);