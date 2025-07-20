// https://leetcode.com/problems/sort-list/description/
const { sortList, ListNode } = require('./sort_list.js')

describe('sort_list', () => {
    test('Case 1 ', () => {
        const head = new ListNode(4, new ListNode(2, new ListNode(1, new ListNode(3))))
        const result = sortList(head);
        expect(result).toEqual(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4)))));
    });

    test('Case 2 ', () => {
        const head = new ListNode(-1, new ListNode(5, new ListNode(3, new ListNode(4, new ListNode(0)))));
        const result = sortList(head);
        expect(result).toEqual(new ListNode(-1, new ListNode(0, new ListNode(3, new ListNode(4, new ListNode(5))))));
    });

    test('Case 3 ', () => {
        const head = new ListNode()
        const result = sortList(head);
        expect(result).toEqual(new ListNode());
    });
});
