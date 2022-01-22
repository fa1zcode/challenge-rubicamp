let param1 = 5
let matrix = []
let count = 0

for (let i = 0; i < param1; i++) {
    matrix[i] = [];
    for (let j = 0; j < param1; j++) {
      matrix[i][j] = count;
      count++;
    }
  }//console.log(matrix)

  let arr = []
  let x = 0 // index array
  let y = 0 // index element
  let top = param1
  let bottom = 0

  while(arr.length<param1*param1){
    for (; y<top ; y++){
      arr.push(matrix[x][y])
    } 
    console.log(x++)
    console.log(y--)
    for (; x<top ; x++){
      arr.push(matrix[x][y])
    }
    console.log(y--)
    console.log(x--)
    break
} //console.log(arr)