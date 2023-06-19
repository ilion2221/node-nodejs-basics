import os from "os";
import { Worker } from "worker_threads"

const performCalculations = async () => {
    const cpu = os.cpus().length
    const results = []

    for (let i = 0; i < cpu; i++) {
        const worker = new Worker('./worker.js')
        results.push({
            status: 'error',
            data: null,
        })
        worker.on('message', (m) => {
            results[i].status = 'resolved'
            results[i].data = m
            if (results.every((o) => o.status === 'resolved')) console.log(results)
        })
        worker.postMessage({
            data: 10 + i
        })
    }

};

await performCalculations();