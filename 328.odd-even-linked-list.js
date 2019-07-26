/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
 *
 * https://leetcode.com/problems/odd-even-linked-list/description/
 *
 * algorithms
 * Medium (49.79%)
 * Likes:    824
 * Dislikes: 232
 * Total Accepted:    156.7K
 * Total Submissions: 314.7K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given a singly linked list, group all odd nodes together followed by the
 * even nodes. Please note here we are talking about the node number and not
 * the value in the nodes.
 * 
 * You should try to do it in place. The program should run in O(1) space
 * complexity and O(nodes) time complexity.
 * 
 * Example 1:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 1->3->5->2->4->NULL
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 2->1->3->5->6->4->7->NULL
 * Output: 2->3->6->7->1->5->4->NULL
 * 
 * 
 * Note:
 * 
 * 
 * The relative order inside both the even and odd groups should remain as it
 * was in the input.
 * The first node is considered odd, the second node even and so on ...
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 
 * @typedef {Object<string>} ListNode
 * @property {number} val
 * @property {ListNode | null} next
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// https://blog.csdn.net/shenzhu0127/article/details/51993408
var oddEvenList = function(head) {
  if (head === null || head.next === null) {
    return head
  }

  let oddNode = head
  let evenNode = head.next
  let evenHead = evenNode

  while (evenNode !== null && evenNode.next !== null) {
    let tempOdd = oddNode.next.next
    let tempEven = evenNode.next.next

    oddNode.next = tempOdd
    evenNode.next = tempEven

    oddNode = oddNode.next
    evenNode = evenNode.next
  }

  oddNode.next = evenHead
  return head
};
