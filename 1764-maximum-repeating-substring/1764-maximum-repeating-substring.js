/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    
    let m = sequence.length;
    let n = word.length;
    let maxCount = 0;

    for( let i= 0; i <= m-n; i++){
        let count = 0;
        let left = i;
        let right = i + n;

        while(sequence.slice(left,right) === word){
            count++;
            left += n;
            right += n;
        }

          if (count > maxCount) maxCount = count;
    }

    return maxCount

};