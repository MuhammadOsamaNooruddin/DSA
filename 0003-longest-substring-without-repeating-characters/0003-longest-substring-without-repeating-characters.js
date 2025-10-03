/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(!s.length) return 0;
    if(s.length === 1)return 1;

    let seen = new Set();
    let left = 0;
    let right = 0;
    let longest = 0;

    while(right < s.length){

        while(seen.has(s[right])){
            seen.delete(s[left]);
            left++
        }

        seen.add(s[right]);
        longest = Math.max(longest, right - left + 1);
        right++;

    }

    return longest    
};