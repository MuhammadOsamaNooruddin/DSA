/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    if(!height.length) return 0
    
    let leftMax = [];
    let rightMax = [];
    let maxLeftCount = 0;
    let maxRightCount = 0;
    let count = 0;

    for(let i=0; i<height.length;i++){
        leftMax[i] = maxLeftCount;
        maxLeftCount = Math.max(maxLeftCount,height[i]);

    }

    for(let i=height.length - 1; i>=0;i--){
        rightMax[i] = maxRightCount;
        maxRightCount = Math.max(maxRightCount,height[i]);

    }
    
    for(let i=0; i < height.length; i++){
        count += Math.max(0, Math.min(rightMax[i], leftMax[i]) - height[i]);
    }

    return count

};