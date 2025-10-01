/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(str) {

  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // let newStr = "";
  
  // for(let i = s.length - 1; i >= 0; i--){
  //   newStr += s[i];
  // }
  
  let left = 0;
  let right = s.length - 1;
  
  while(left < right){
    if(s[left] !== s[right]) return false;
    left++;
    right--;
  }
  
  return true

};