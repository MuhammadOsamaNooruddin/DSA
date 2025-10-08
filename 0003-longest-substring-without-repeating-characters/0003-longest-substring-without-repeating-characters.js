/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

   let seen = new Set();
   let left = 0;
   let right = 0;
    let longest = 0;

    while(right < s.length){
        let rightChar = s[right];
        if(!seen.has(rightChar)){
            seen.add(rightChar);
            right++
        }else{
            seen.delete(s[left]);
            left++
        }
        longest = Math.max(longest, right - left );

    }

    return longest
}