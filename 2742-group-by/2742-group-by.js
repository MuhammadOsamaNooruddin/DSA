/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {

    let result = {};

    let arr = this;

    arr.forEach((ele,index) => {
        let key = fn(ele);
        if(!result[key]){
            result[key] = [ele];
        }else{
            result[key].push(ele);
        }
    })

    return result
    
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */