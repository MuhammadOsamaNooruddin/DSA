/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if(lists === null || lists.length === 0) return null;
    
    while(lists.length > 1){

        let list1 = lists.shift();
        let list2 = lists.shift();
        let merged = mergedList(list1,list2);
        lists.push(merged);
    }

    return lists[0]
    
};

function mergedList(l1,l2){

    let dummy = new ListNode(0);
    let current = dummy;

    while(l1 !== null && l2 !== null){

        if(l1.val <= l2.val){
            current.next = l1;
            l1 = l1.next;
        }else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next

    }

    if(l1 !== null) current.next = l1;
    if(l2 !== null) current.next = l2;

    return dummy.next
}