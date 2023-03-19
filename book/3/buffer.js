const buffer = Buffer.from('테스트')
console.log('from() :', buffer)
console.log('length() :', buffer.length)
console.log('toString() :', buffer.toString())

const arr = [Buffer.from('가'), Buffer.from('나'), Buffer.from('다')]
const buffer2 = Buffer.concat(arr)
console.log('concat() :', buffer2.toString())

const buffer3 = Buffer.alloc(5)
console.log('alloc() :', buffer3)