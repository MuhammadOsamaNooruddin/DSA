/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
   if(strs.length === 0) return ""
    if(strs.length === 1) return strs[0]
    
    // strs.sort();
    // let first = strs[0];
    // let last = strs[strs.length - 1];
    // let res = "";

    // for(let i=0; i<first.length; i++){
    //     if(first[i] === last[i]){
    //         res += first[i]
    //     }else{
    //         break;
    //     }
    // }

    // return res

    let minLengthStr = strs[0];
    for(let s of strs){
        if(minLengthStr.length > s.length){
            minLengthStr = s
        }
    }

    let i = 0;
    let res = "";

    while(i < minLengthStr.length){
        let char = strs[0][i];
        for(let str of strs){
            if(str[i] !== char){
                return res;
            }
        }
        res += char
        i++
    }

    return res
};