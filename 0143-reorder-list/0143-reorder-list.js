/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    if (!head || !head.next) return;

    let slow = head;
    let fast = head;
    
     while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null, curr = slow.next;
    slow.next = null; // split the list
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    let h1 = head;
    let h2 = prev;

    while(h2){

        let temp = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = temp

        // let temp1 = h1.next;
        // let temp2 = h2.next;
        // h1.next = h2;
        // second.next = temp1;
        // h1 = temp1;
        // h2 = temp2;
    }

};