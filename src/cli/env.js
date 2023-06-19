import process from 'node:process';

const parseEnv = () => {

    console.log(
        Object
            .entries(process.env)
            .reduce((acc, [key, value]) => {
                key.startsWith('RSS_') && acc.push(key+'='+value);
                return acc
            }, [])
            .join('; ')
    );
};

parseEnv();