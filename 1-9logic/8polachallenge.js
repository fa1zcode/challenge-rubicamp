function pola(str) {

    let arr = str.split(' ')

    for (i = 0; i <= 9; i++) {
        for (j = 0; j <= 9; j++) {
            if (arr[0].replace('#', i) * arr[2] == arr[4].replace('#', j)) {
                return [i, j]
            }
        }
    }

}

console.log(pola("42#3 * 188 = 80#204"));
console.log(pola("8#61 * 895 = 78410#5"));

