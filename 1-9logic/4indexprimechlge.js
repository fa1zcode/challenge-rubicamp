function cekPrime(num) {

    if (num <= 1) { return false }
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}


function indexPrime(param1) {

    let number = 2
    let counter = 0

    while (counter < param1) {
        if (cekPrime(number)) {
            counter++
        }
        number++
    } 
    return number - 1
}

console.log(indexPrime(4))     //result =>7
console.log(indexPrime(500))   //result =>3571
console.log(indexPrime(37786)) //result =>450881