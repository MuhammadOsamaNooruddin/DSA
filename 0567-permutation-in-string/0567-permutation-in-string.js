/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if(s1.length > s2.length) return false;
    
    let left = 0;
    let right = 0;
    let freqS1 = new Map();
    let copyfreqS1 = new Map();

    for(let s of s1){
        freqS1.set(s, (freqS1.get(s) || 0) + 1);
        copyfreqS1.set(s, (copyfreqS1.get(s) || 0) + 1);
    }

    while(right < s2.length){

        if(right - left + 1 === s1.length){
        //    console.log(s2.slice(left,right+1))
            let isTrue = helperFunction(s2.slice(left,right+1));
            if(isTrue) return true;
            else copyfreqS1 = new Map(freqS1);
            left++;
        }
        right++;

    }


    function helperFunction(a1){
        for(let i=0; i< a1.length;i++){
            if(copyfreqS1.has(a1[i])){
                copyfreqS1.set(a1[i], copyfreqS1.get(a1[i]) - 1);
                if(copyfreqS1.get(a1[i]) === 0) copyfreqS1.delete(a1[i])
            }
        }
        
        return copyfreqS1.size === 0;
    }

    return false
};