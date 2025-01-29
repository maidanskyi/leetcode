package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	root := &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 9,
		},
		Right: &TreeNode{
			Val: 20,
			Left: &TreeNode{
				Val: 15,
			},
			Right: &TreeNode{
				Val: 7,
			},
		},
	}
	root2 := &TreeNode{
		Val: 1,
	}

	fmt.Printf("%d\n", sumOfLeftLeaves(root))  // 24
	fmt.Printf("%d\n", sumOfLeftLeaves(root2)) // 0
}

func sumOfLeftLeaves(root *TreeNode) int {
	sum := 0

	if root.Left != nil {
		traverse(root.Left, "left", &sum)
	}
	if root.Right != nil {
		traverse(root.Right, "right", &sum)
	}

	return sum
}

func traverse(root *TreeNode, position string, sum *int) {
	if root.Left == nil && root.Right == nil && position == "left" {
		*sum += root.Val
		return
	}

	if root.Left != nil {
		traverse(root.Left, "left", sum)
	}

	if root.Right != nil {
		traverse(root.Right, "right", sum)
	}
}
