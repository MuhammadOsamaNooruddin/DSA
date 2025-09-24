/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    if(s === "" && t === "") return true
    if(s.length > t.length) return false;
    
    let pointer = 0;
    let found = 0;

    for(let i=0; i<t.length; i++){

        if(s[pointer] === t[i]){
            pointer++;
            found++;
        }

    }

    return found === s.length

};