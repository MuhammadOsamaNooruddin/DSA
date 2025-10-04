/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {

    if(obj === null) return null;
    if(typeof obj !== 'object') return obj;

    if(Array.isArray(obj)){
        let res = [];
        for(let item of obj){
            let val = compactObject(item);
            if(val) res.push(val);
        }
        return res
    }

    let res = {};
    for (let key in obj) {
        const val = compactObject(obj[key]);
        if (val) res[key] = val; // include only truthy values
    }

    return res
};