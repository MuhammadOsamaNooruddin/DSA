/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {

    if(rowsCount <= 0 || colsCount <= 0)return [];
    if(rowsCount * colsCount !== this.length)return [];

    let array = this;
    
    let result = Array.from({length: rowsCount}, () => new Array(colsCount).fill(0));
    let arrIndex = 0;
    for(let col=0; col < colsCount; col++){

        if(col % 2 === 0){
            for(let row = 0; row < rowsCount; row++){
                result[row][col] = array[arrIndex++];
            }
        }else{
            for(let row= rowsCount - 1; row>= 0; row--){
                result[row][col] = array[arrIndex++];
            }
        }

    }
    
    return result
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */