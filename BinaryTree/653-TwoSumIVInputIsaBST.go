package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var (
	root = TreeNode{
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
	fmt.Printf("%v: %v\n", 3, findTarget(&root, 3))
	fmt.Printf("%v: %v\n", 9, findTarget(&root, 9))
	fmt.Printf("%v: %v\n", 10, findTarget(&root, 10))
	fmt.Printf("%v: %v\n", 11, findTarget(&root, 11))
	fmt.Printf("%v: %v\n", 13, findTarget(&root, 13))
	fmt.Printf("%v: %v\n", 14, findTarget(&root, 14))
}

func findTarget(root *TreeNode, k int) bool {
	var (
		response bool
		traverse = func(root *TreeNode, sl *[]int) {}
		sl       = make([]int, 0)
	)

	// recursion, O(n)
	traverse = func(root *TreeNode, sl *[]int) {
		if root == nil {
			return
		}

		traverse(root.Left, sl)
		*sl = append(*sl, root.Val)
		traverse(root.Right, sl)
	}

	traverse(root, &sl)

	// two pointers, O(n)
	left, right := 0, len(sl)-1

	for left < right {
		if sum := sl[left] + sl[right]; sum == k {
			return true
		} else if sum < k {
			left++
		} else {
			right--
		}
	}

	// complexity O(n) + O(n)
	// memory O(n)
	return response
}
