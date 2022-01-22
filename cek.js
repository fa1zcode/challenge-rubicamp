let param1 = 7
let matrix = []
let count = 0

for (let i = 0; i < param1; i++) {
    matrix[i] = [];
    for (let j = 0; j < param1; j++) {
      matrix[i][j] = count;
      count++;
    }
  }console.log(matrix[0][1])
