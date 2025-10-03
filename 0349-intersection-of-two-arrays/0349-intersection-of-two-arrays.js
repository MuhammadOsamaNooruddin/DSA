/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   
    if(!nums1.length || !nums2.length) return [];
    
    let mySet = new Set();
    let res = [];
    
    for(let i=0;i<nums1.length;i++){
        mySet.add(nums1[i]);
    }

    for(let i=0;i<nums2.length;i++){
        if(mySet.has(nums2[i])) {
            res.push(nums2[i])
            mySet.delete(nums2[i])
            }
    }

    return res
};