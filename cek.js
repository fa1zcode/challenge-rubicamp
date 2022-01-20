function cekPrime(num){

    
    for(i=2 ; i<num ; i++){
        if (num % i == 0 || num<2){
            return 'not prime'
        } 
    } return 'prime'
}

console.log(cekPrime(1))
console.log(cekPrime(7))
console.log(cekPrime(9))
console.log(cekPrime(13))
console.log(cekPrime(15))



