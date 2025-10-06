/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    if(!s.length || s.length < k) return 0;

    let left = 0;
    let right = 0;
    let maxFreq = 0;
    let seen = new Map();
    let longest = 0;

    while(right < s.length){

        let rightChar = s[right];
        seen.set(rightChar, (seen.get(rightChar) || 0) + 1);

        maxFreq = Math.max(maxFreq,seen.get(rightChar));

        if((right - left + 1) - maxFreq > k){
            let leftChar = s[left];
            seen.set(leftChar, seen.get(leftChar) - 1);
            if(seen.get(leftChar) === 0) seen.delete(leftChar);
            left++
        }
        
        longest = Math.max(longest, right - left + 1);
        right++

    }
    return longest
}