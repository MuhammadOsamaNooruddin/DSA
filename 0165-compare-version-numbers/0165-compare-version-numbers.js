/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    
    let v1 = version1.split(".");
    let v2 = version2.split(".");

    let length = Math.max(v1.length,v2.length)
    console.log(v1,v2)
    res = 0;
    for(let i=0; i < length; i++){
        
        let ver1 = parseInt(v1[i] || "0", 10)
        let ver2 = parseInt(v2[i] || "0", 10)

        if(ver1 < ver2){
            return res = -1;
        }else if(ver1 > ver2){
            return res = 1
        }
    }

    return res
};