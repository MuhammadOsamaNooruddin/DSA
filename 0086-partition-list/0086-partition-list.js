/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {

    let minList = new ListNode(0);
    let maxList = new ListNode(0);

    let minHead = minList;
    let maxHead = maxList;
    let current = head;

    while(current){

        if(current.val < x){
            minList.next = current;
            minList = minList.next;
        }else{
            maxList.next = current;
            maxList = maxList.next;
        }
        current = current.next;

    }

    maxList.next = null;              
    minList.next = maxHead.next;

    return minHead.next
};