const fs = require('fs').promises

fs.readFile('./node-study/book/test.txt')
    .then(data => {
        console.log(data)
        console.log(data.toString())
    })
    .catch(err => {
        console.error(err)
    })