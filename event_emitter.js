const EventEmitter = require('events')

let myEventEmitter = new EventEmitter()

myEventEmitter.on('wroteCode', (language) => {
  console.log(`Somebody wrote some ${language} code`)
})

myEventEmitter.on('wroteCode', () => {
  const date = new Date()
  console.log(date.toTimeString(), date.toDateString())
})

myEventEmitter.on('wroteCode', () => {
  console.log('Busy doing something')
})

myEventEmitter.emit('wroteCode', 'JavaScript')
