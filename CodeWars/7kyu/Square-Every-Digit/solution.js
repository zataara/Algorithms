function squareDigits(num){
    let arr = num.toString().split('')
    let squares = arr.map(n => n * n)
    return parseInt(squares.join(''));
}