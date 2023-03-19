const crypto = require('crypto')

// 단방향 암호화, hash 사용

console.log('base64 ->', 
    crypto.createHash('sha512').update('text').digest('base64'))

console.log('hex ->', 
    crypto.createHash('sha512').update('text').digest('hex'))

console.log('base64 ->', 
    crypto.createHash('sha512').update('text2').digest('base64'))

// 64바이트 길이의 랜덤 문자열 salt를 생성 후 sha512 알고리즘을 10만 번 반복
// 멀티 스레딩으로 동작하므로 반복 과정이 블로킹을 발생시키진 않음

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64')
    console.log('salt :', salt)
    crypto.pbkdf2('text', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('encrypted password :', key.toString('base64'))
    })
})

// 양방향 대칭형 암호화

const algorithm = 'aes-256-cbc' // 이런 알고리즘을 쓴다
const key = 'abcdefghijklmnopqrstuvwxyz123456' // 32바이트
const iv = '1234567890123456' // 16바이트

const cipher = crypto.createCipheriv(algorithm, key, iv)
let result = cipher.update('암호화 대상', 'utf8', 'base64')
result += cipher.final('base64')
console.log('암호화 결과 :', result)

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let result2 = decipher.update(result, 'base64', 'utf8')
result2 += decipher.final('utf8')
console.log('복호화 결과 :', result2)