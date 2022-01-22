function spiral (param1){

    let matrix = []
    let count = 0

    for (let i = 0; i < param1; i++) {
        matrix[i] = [];
        for (let j = 0; j < param1; j++) {
          matrix[i][j] = count;
          count++;
        }
      } //console.log(matrix)
    
    let arr = []
    let x = 0 // index array
    let y = 0 // index element
    let row = param1
    let column = 0


    while(arr.length<param1*param1){
      for (y=0 ; y<row ; y++){
        arr.push(matrix[x][y])
      } break

      
    } console.log(arr)
}


spiral(5)
// spiral(6)
// spiral(7)