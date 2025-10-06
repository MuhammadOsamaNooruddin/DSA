/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    if(!s.length) return false;
    if(s === "") return true;

    let letters = [];
    for(let i=0; i<s.length; i++){
        let char = s[i].charCodeAt(0);
        // console.log(char)
        if((char >= 65 && char <= 90) || (char >= 97 && char <= 122) || (char >= 48 && char <= 57) ){
            letters.push(s[i].toLowerCase());
        }
    }

    let left = 0;
    let right = letters.length - 1;
    
    while(left < right){
        if(letters[left] !== letters[right]) return false;
        left++;
        right--;
    }

    return true
}