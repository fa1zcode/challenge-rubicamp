function spiral(param1) {

  let matrix = []
  let count = 0

  for (let i = 0; i < param1; i++) {
    matrix[i] = [];
    for (let j = 0; j < param1; j++) {
      matrix[i][j] = count;
      count++;
    }
  } console.log(matrix)

  let arr = []
  let x = 0 // index array
  let y = 0 // index element
  let top = param1
  let bottom = 0


  while (arr.length < param1 * param1) {
    for (; y < top; y++) {
      arr.push(matrix[x][y])
    }
    console.log(x, y)

    x++
    y--
    for (; x < top; x++) {
      arr.push(matrix[x][y])
    }
    console.log(x, y)

    y--
    x--
    for (; y >= bottom; y--) {
      arr.push(matrix[x][y])
    }
    console.log(x, y)

    x--
    y++
    for (; x > 0; x--) {
      arr.push(matrix[x][y])
    }
    console.log(x, y)
    break


  } console.log(arr)
}


spiral(5)
// spiral(6)
// spiral(7)