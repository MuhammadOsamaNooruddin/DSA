/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let seen = new Set();

    for(let r = 0; r<board.length;r++){
        for(let c = 0; c <board.length; c++){

            let num = board[r][c];
            if(num === ".") continue;

            const rowKey = `row-${r}-${num}`;
            const colKey = `col-${c}-${num}`;
            const boxKey = `box-${Math.floor(r/3)}-${Math.floor(c/3)}-${num}`;

            if(seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey) ) return false;

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(boxKey);

        }
    }

    return true

};