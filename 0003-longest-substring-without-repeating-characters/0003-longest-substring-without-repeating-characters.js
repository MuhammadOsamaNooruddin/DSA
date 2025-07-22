/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longest = 0;
    let left = 0;
    let right = 0;
    let newSet = new Set();

    if(s.length === 0) return 0;
    if(s.length === 1) return 1;

    for(let i=0; i<s.length; i++){

        while(newSet.has(s[i])){
            newSet.delete(s[left]);
            left++
        }

        newSet.add(s[i]);
        longest = Math.max(longest, right - left + 1)
        right++;

    }

    return longest

};
