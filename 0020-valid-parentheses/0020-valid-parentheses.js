/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    if(s.length < 2) return false

    const stack = [];
   const map = { ')': '(', '}': '{', ']': '[' };

    for(let char of s){
        if(char in map){
            if(stack.pop() !== map[char]) return false;
        }else{
            stack.push(char)
        }
    }

    return stack.length === 0;
    
};