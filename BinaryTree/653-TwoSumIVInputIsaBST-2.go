package main

import (
	"fmt"
	"github.com/emirpasic/gods/sets/hashset"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var (
	root2 = TreeNode{
		Val: 5,
		Left: &TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 2,
			},
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 6,
			Right: &TreeNode{
				Val: 7,
			},
		},
	}
)

func main() {
	fmt.Printf("%v: %v\n", 3, findTarget2(&root2, 3))
	fmt.Printf("%v: %v\n", 9, findTarget2(&root2, 9))
	fmt.Printf("%v: %v\n", 10, findTarget2(&root2, 10))
	fmt.Printf("%v: %v\n", 11, findTarget2(&root2, 11))
	fmt.Printf("%v: %v\n", 13, findTarget2(&root2, 13))
	fmt.Printf("%v: %v\n", 14, findTarget2(&root2, 14))
}

// recursion + Set
// remove 2 at the end of the function before Submit it
func findTarget2(root *TreeNode, k int) bool {
	var (
		response bool
		traverse = func(root *TreeNode) {}
		set      = hashset.New()
	)

	// recursion, O(n)
	traverse = func(root *TreeNode) {
		if root == nil {
			return
		}

		if set.Contains(k - root.Val) {
			response = true
			return
		}
		set.Add(root.Val)
		traverse(root.Left)
		traverse(root.Right)
	}

	traverse(root)

	// complexity O(n)
	// memory O(n)
	return response
}
