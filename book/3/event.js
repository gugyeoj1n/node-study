const eventEmitter = require('events')

const myEvent = new eventEmitter()
for(let i = 1; i <= 3; i++){
    myEvent.addListener(`ev${i}`, () => {
        console.log(`EVENT ${i}`)
    })    
}

myEvent.emit('ev1')
myEvent.emit('ev2')
myEvent.once('ev4', () => {
    console.log('EVENT 4')
})

myEvent.emit('ev4')
myEvent.emit('ev4')

myEvent.removeAllListeners('ev1')
myEvent.emit('ev1')
