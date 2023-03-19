import { setTimeout, setInterval } from 'timers/promises'

await setTimeout(3000)
console.log('AFTER 3 SECONDS')

for await(const startTime of setInterval(1000, Date.now())){
    console.log('1 SECOND', new Date(startTime))
}