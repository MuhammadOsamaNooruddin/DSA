/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    if(!s.length) return 0;

    let left = 0;
    let right = 0;
    let longest = 0;
    let mySet = new Set();

    while(right < s.length){

        while(mySet.has(s[right])){
            mySet.delete(s[left]);
            left++
        }

        mySet.add(s[right]);
        longest = Math.max(longest,right - left + 1);
        right++

    }

    return longest

};