/*function weirdMultiply (sentence){

}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
*/



function multiply(num) {

    let str = Array.from(num.toString())
    let sum = 1

    for (i = 0; i < str.length; i++) {
        sum = sum * str[i]
    } return sum
}

console.log(multiply(223))