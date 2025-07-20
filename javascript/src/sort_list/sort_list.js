
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) return head

    // Split the list into halves
    let slow = head
    let fast = head
    let prev = null
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = null

    // Sort each half
    const l1 = sortList(head)
    const l2 = sortList(slow)

    // Merge sorted halves
    function merge(l1, l2) {
        let dummy = new ListNode(0)
        let curr = dummy
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }
        curr.next = l1 ? l1 : l2
        return dummy.next
    }

    return merge(l1, l2)
}

module.exports = { sortList, ListNode }