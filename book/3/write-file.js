const fs = require('fs')

fs.writeFile('./node-study/book/write-test.txt', 'granola and milk', err => {
    if(err) throw err
    fs.readFile('./node-study/book/write-test.txt', (err, data) => {
        if(err) throw err
        console.log(data.toString())
    })
})