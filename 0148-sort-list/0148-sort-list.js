/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    if(!head || !head.next) return head;

    let slow = head;
    let fast = head;
    let prev = null;

    while(fast && fast.next){
        prev= slow;
        slow= slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    let left = sortList(head);
    let right = sortList(slow);
    
    return mergedlist(left,right);

};

function mergedlist(left,right){

    let dummy = new ListNode(0);
    let current = dummy;

    while(left !== null && right !== null){
        
        if(left.val < right.val){
            current.next = left;
            left = left.next
        }else{
            current.next = right;
            right = right.next
        }
        current = current.next;
    }

    if(left !== null) current.next = left;
    if(right !== null) current.next = right;

    return dummy.next
}