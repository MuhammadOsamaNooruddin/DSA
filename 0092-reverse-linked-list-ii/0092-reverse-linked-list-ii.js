/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    if(!head || right <= left) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;

    for(let i=1; i < left; i++){
        current = current.next;
    }

    let prev = current;
    let start = current.next;
    current = current.next;

    let prevNode = null;
    for(let i=0; i< right - left + 1; i++){
        let nextNode = current.next;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
    }
    
    prev.next = prevNode;
    start.next = current;

    return dummy.next
};