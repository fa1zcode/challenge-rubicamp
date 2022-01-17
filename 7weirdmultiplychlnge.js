function weirdMultiply (sentence){

    let str = sentence.toString()
    let sum = 1

    for (i=0 ; i<str.length ; i++){
        sum = sum * str[i]
    } if (sum < 10){
        return sum
    } else return weirdMultiply(sum)

}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
console.log(weirdMultiply(1234))

