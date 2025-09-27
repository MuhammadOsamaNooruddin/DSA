/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    let map = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    };

    for(let char of s){
        if(map[char]){
            if(map[char] !== stack.pop()) return false
        }else{
            stack.push(char);
        }
    }

    return stack.length === 0;
    
};