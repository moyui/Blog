function dateFroamt(dateStamp) {
    const date = new Date(dateStamp);

}

function addZero(num) {
    if (typeof num === 'number' || typeof num === 'string') {
        const numString = num + ''
        if (numString.length < 2) return '0' + numString
        return numString
    }
    return '00'
}