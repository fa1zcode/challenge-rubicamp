function deretKaskus(n) {

    let result = []                          // empty array to push result

    for (let i = 3; i <= n * 3; i += 3) {   // create series of n multiplied by 3
        if (i % 5 === 0 && i % 6 === 0) { result.push('KASKUS') } // if divided by 5 and 6 equals 0 push KASKUS to result
        else if (i % 5 === 0) { result.push('KAS') } // if can be divided by 5 push KAS
        else if (i % 6 === 0) { result.push('KUS') } // if can be divided by 6 push KUS
        else result.push(i) // if can't be divided by either 5 or 6 push the number
    }
    return result 
}
console.log(deretKaskus(10));

