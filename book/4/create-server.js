const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    res.write('<h1>TEST SERVER</h1>')
    res.end('<p>HI SERVER</p>')
})
server.listen(5000)

server.on('listening', () => {
    console.log('5000 PORT RUNNING')
})

server.on('error', (err) => {
    console.error(err)
})