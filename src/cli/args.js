import process from 'node:process';

const parseArgs = () => {

    const argv = process.argv.slice(2);
    let data = [];

    for(let i = 0; i < argv.length; i++) {
        const value = argv[i+1] ? argv[i+1] : '';
        argv[i].startsWith('--') &&
        data.push( argv[i].slice(2) + ' is ' + value);
    }
    console.log(data.join(', '));
};

parseArgs();
