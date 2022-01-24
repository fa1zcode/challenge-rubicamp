function sum() {

    let jumlah = 0                           // starting sum from 0
    
    for (i = 0; i < arguments.length; i++) { // looping all arguments
        jumlah += Number(arguments[i])       // add all arguments to jumlah
    }
    console.log(jumlah);
}



sum(1, 2, 7);
sum(1, 4);
sum(11);
sum(10, 3, 6, 7, 9);
sum(5, 8, 5, 2)