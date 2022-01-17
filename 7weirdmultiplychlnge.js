/*function weirdMultiply (sentence){

    let str = Array.from(sentence.toString())
    let sum = 1

    for (i=0 ; i<str.length ; i++){
        sum = sum * str[i]
    } if (sum < 10){
        return sum
    } else weirdMultiply(sum)

}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
*/



function multiply(num) {

    let arr = num.toString()
    let sum = 1
    

    for (i = 0; i < arr.length; i++) {
        sum = sum * arr[i]
    } if (sum < 10) {
        console.log(sum)
    }
    else multiply(sum)

}

multiply(39)
multiply(999)
multiply(3)