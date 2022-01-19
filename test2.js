let str = ('2# * 8 = 1#0')
let arr = str.split(' ')
let jumlah = []

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        let arr2 = arr[4].replace('#',j)
        let arr1 = arr[0].replace('#',i)
        if (arr1 * arr[2] == arr2) {
            console.log([i,j]) 
        }
        
    } 
    
    
    
}












// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])


//  if (arr[0] * arr[2] !== Number ){
//     console.log('benar')
// }else console.log('salah')

//  console.log(arr[0] * arr[2])