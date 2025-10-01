/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {

     if(str.length === 0) return 0;
  if(str.length === 1) return 1;
  
  let left = 0;
  let right = 0;
  let mySet = new Set();
  let maxLength = 0;
  
  while(right < str.length){
    
    if(!mySet.has(str[right])){
      mySet.add(str[right]);
      right++
    }else{
      mySet.delete(str[left]);
      left++
    }
      maxLength = Math.max(maxLength, right - left);
    
  }
  
  return maxLength

};