package LinkedList

type ListNode struct {
	Val  int
	Next *ListNode
}

func insertionSortList(head *ListNode) *ListNode {
	if head.Next == nil {
		return head
	}

	ll := head
	head = head.Next
	ll.Next = nil

	for head != nil {
		tmp := head
		head = head.Next
		tmp.Next = nil

		var prev *ListNode
		curr := ll
		for {
			if curr == nil {
				// you are at the end of the new ll
				// add a node here
				prev.Next = tmp
				break
			}

			if tmp.Val < curr.Val {
				if prev == nil {
					// it will be a new head
					tmp.Next = ll
					ll = tmp
					break
				} else {
					// it is the middle
					prev.Next = tmp
					tmp.Next = curr
					break
				}
			}

			prev = curr
			curr = curr.Next
		}
	}

	return ll
}
