/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  let res = "";
  
  // Approach 1
  //let letters = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  // Approach 1
  
  // Approach 2
  let letters = []
  for(let alp of s){
    let char = alp.charCodeAt(0);
    if((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57)){
        letters.push(alp.toLowerCase());
    }
  }
  //Approach 2

    let left = 0;
    let right = letters.length - 1;
    
    while(left < right){
        if(letters[left] !== letters[right]) return false
        left++;
        right--;
    }

    return true

};