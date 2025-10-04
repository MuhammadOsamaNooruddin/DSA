/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    //  if (n <= 0) return arr.slice();
    
    const result = [];
    
    function flattenHelper(items, depth) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (Array.isArray(item) && depth > 0) {
                flattenHelper(item, depth - 1);
            } else {
                result.push(item);
            }
        }
    }
    
    flattenHelper(arr, n);
    return result;
    
};