/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
   const n = sequence.length;
    const m = word.length;
    let maxCount = 0;

    for (let i = 0; i <= n - m; i++) {
        let count = 0;
        let left = i;
        let right = i + m;

        // Count consecutive repetitions of 'word' starting at index i
        while (sequence.slice(left, right) === word) {
            count++;
            left += m;
            right += m;
        }

        if (count > maxCount) maxCount = count;
    }

    return maxCount;

};