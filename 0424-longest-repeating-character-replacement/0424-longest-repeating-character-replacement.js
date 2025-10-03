/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    if(!s) return 0;
    if(s.length < k )return 0;

    let left = 0;
    let right = 0;
    let longest = 0;
    let myMap = new Map();
    let maxFreq = 0;

    while(right < s.length){

        let rightChar = s[right]; 
        myMap.set(rightChar, (myMap.get(rightChar) || 0 ) + 1 );

        maxFreq = Math.max(maxFreq, myMap.get(rightChar));

        if((right - left + 1) - maxFreq > k){
            let leftChar = s[left];
            myMap.set(leftChar, myMap.get(leftChar) - 1);
            left++;
        }

        longest = Math.max(longest, right - left + 1);
        right++;
    }
   
    return longest
};