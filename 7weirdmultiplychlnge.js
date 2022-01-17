/*function weirdMultiply (sentence){

}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
*/



function multiply(num) {

    let arr = Array.from(num.toString())
    let sum = 1
    let lastMultiply = []

    for (i = 0; i < arr.length; i++) {
        sum = sum * arr[i]
    } if (sum < 10) {
        console.log(sum)
    }
    else console.log('repeat')


}

multiply(39)
