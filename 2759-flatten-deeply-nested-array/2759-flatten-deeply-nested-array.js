/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    if (arr.length === 0) return [];
    if (n === 0) return arr;

    // const stack = arr.map(item => [item, n]); // pair each element with remaining depth
    // const res = [];

    // while (stack.length > 0) {
    //     const [item, depth] = stack.pop();

    //     if (Array.isArray(item) && depth > 0) {
    //         // push subarray elements with reduced depth
    //         for (let i = item.length - 1; i >= 0; i--) {
    //             stack.push([item[i], depth - 1]);
    //         }
    //     } else {
    //         res.push(item);
    //     }
    // }

    // return res.reverse();

    let res = [];

    for(let i=0; i<arr.length; i++){

        if( n > 0 && Array.isArray(arr[i])){
            res.push( ...flat(arr[i], n-1) )
        }else{
            res.push(arr[i])
        }

    }

    return res;
    
};