const { Worker, isMainThread, parentPort, workerData } = require('worker_threads')

const min = 2
let primes = []

const findPrimes = (start, range) => {
    let isPrime = true
    const end = start + range

    for(let i = start; i < end; i++){
        for(let j = min; j < Math.sqrt(end); j++){
            if(i !== j && i % j === 0){
                isPrime = false
                break
            }
        }
        if(isPrime)
            primes.push(i)
        isPrime = true
    }
}

if(isMainThread){
    const max = 10000000
    const threadCnt = 8
    const threads = new Set()
    const range = Math.floor((max - min) / threadCnt)
    let start = min
    console.time('prime')

    for(let i = 0; i < threadCnt - 1; i++){
        const workStart = start
        threads.add(new Worker(__filename, { workerData: { start: workStart, range }}))
        start += range
    }
    threads.add(new Worker(__filename, { workerData: { start, range: max - start }}))

    for(let worker of threads){
        worker.on('error', err => {
            throw err
        })
        worker.on('exit', () => {
            threads.delete(worker)
            if(!threads.size){
                console.timeEnd('prime')
                console.log(primes.length)
            }
        })
        worker.on('message', msg => {
            primes = primes.concat(msg)
        })
    }
} else {
    findPrimes(workerData.start, workerData.range)
    parentPort.postMessage(primes)
}