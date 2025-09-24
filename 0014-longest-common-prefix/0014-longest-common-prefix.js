/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return ""
    if(strs.length === 1) return strs[0]
    
    strs.sort();
    let first = strs[0];
    let last = strs[strs.length - 1];
    let res = "";

    for(let i=0; i<first.length; i++){
        if(first[i] === last[i]){
            res += first[i]
        }else{
            break;
        }
    }

    return res
};