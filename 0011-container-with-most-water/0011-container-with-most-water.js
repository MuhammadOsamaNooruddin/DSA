/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let left = 0;
    let right = height.length - 1;
    let maxArea = -Infinity;

    while(left < right){

        let newArea = (right - left) * Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, newArea)
        
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxArea
}