function romawi(n) {

    let roman = ''
    let kamus = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]


    for (i = 0; i < kamus.length; i++) { //loop kamus
        while (kamus[i][0] <= n) {      //
            roman += kamus[i][1]       //print roman number
            n -= kamus[i][0]          //decrease n, loop the remaining number
        }
    } return roman
}


console.log("Script Testing untuk Konversi Romawi\n");
console.log(" input  | expected  | result   ");
console.log("--------|-----------|----------");
console.log("    4   |   IV      | " + romawi(4));
console.log("    9   |   IX      | " + romawi(9));
console.log("   13   |   XIII    | " + romawi(13));
console.log(" 1453   |   MCDLIII | " + romawi(1453));
console.log(" 1646   |   MDCXLVI | " + romawi(1646));