function cekPrime(num){


    if (num <= 1){return false}
    for(i=2 ; i<num ; i++){
        if (num % i == 0 ){
            return false
        } 
    } return true
}

console.log(cekPrime(1))
console.log(cekPrime(7))
console.log(cekPrime(9))
console.log(cekPrime(13))
console.log(cekPrime(15))


function indexPrime (num) {

    for(i=0 ; i<cekPrime(i) ; i++)
}