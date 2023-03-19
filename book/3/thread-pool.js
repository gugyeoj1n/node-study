const crypto = require('crypto')

const pass = 'pass'
const salt = 'salt'
const start = Date.now()

for(let i = 0; i < 8; i++){
    crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
        console.log(`${i} :`, Date.now() - start)
    })
}