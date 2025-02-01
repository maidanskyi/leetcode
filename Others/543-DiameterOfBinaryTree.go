package main

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	fmt.Printf("%d\n", diameterOfBinaryTree(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 4,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	})) // 3

	fmt.Printf("%d\n", diameterOfBinaryTree(&TreeNode{
		Val: 1,
		Right: &TreeNode{
			Val: 2,
		},
	})) // 1
}

func diameterOfBinaryTree(root *TreeNode) int {
	var maxDiameter float64 = 0

	var traverse func(root *TreeNode) float64
	traverse = func(root *TreeNode) float64 {
		if root == nil {
			return 0
		}

		left := traverse(root.Left)
		right := traverse(root.Right)

		maxDiameter = max(maxDiameter, left+right)

		return max(left, right) + 1
	}

	traverse(root)

	return int(maxDiameter)
}
