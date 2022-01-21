function spiral (param1){
    
    let firstRow = []
    let rightColumn = []
    let bottomRow = []
    let leftColumn = []

    for(i=0 ;i<param1 ; i++){ //first row
        firstRow.push(i)
    } firstRow


    let lastFirstRow = firstRow[firstRow.length -1]

    for(i=lastFirstRow ; i<param1*param1 ; i+=param1){
        rightColumn.push(i)
    } rightColumn


    let lastRightColumn = rightColumn[rightColumn.length -1]

    for(i=lastRightColumn ; i>=param1*(param1-1) ; i--){
        bottomRow.push(i)
    } bottomRow


    let lastBottomRow = bottomRow[bottomRow.length -1]

    for(i=lastBottomRow ; i>=param1 ; i-=param1){
        leftColumn.push(i)
    } leftColumn

    
    let arr = firstRow.concat(rightColumn,bottomRow,leftColumn)

    console.log(arr)
}

spiral(5)
// spiral(6)
// spiral(7)