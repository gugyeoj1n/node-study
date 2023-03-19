setInterval(() => {
    console.log('START')
    try {
        throw new Error('ERROR !!')
    } catch(err) {
        console.log(err)
}})