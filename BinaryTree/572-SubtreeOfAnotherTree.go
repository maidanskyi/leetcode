package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	fmt.Printf("should be true! - %t\n", isSubtree(&TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 4,
			Left: &TreeNode{
				Val: 1,
			},
			Right: &TreeNode{
				Val: 2,
			},
		},
		Right: &TreeNode{
			Val: 5,
		},
	}, &TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 1,
		},
		Right: &TreeNode{
			Val: 2,
		},
	})) // true

	fmt.Printf("should be true! - %t\n", isSubtree(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 1,
		},
	}, &TreeNode{
		Val: 1,
	})) // true

	fmt.Printf("should be false! - %t\n", isSubtree(&TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 4,
			Left: &TreeNode{
				Val: 1,
			},
		},
		Right: &TreeNode{
			Val: 5,
			Left: &TreeNode{
				Val: 2,
			},
		},
	}, &TreeNode{
		Val: 3,
		Left: &TreeNode{
			Val: 1,
		},
		Right: &TreeNode{
			Val: 2,
		},
	})) // true
}

func isSubtree(root *TreeNode, subRoot *TreeNode) bool {
	if root == nil && subRoot == nil {
		return true
	}

	if root == nil || subRoot == nil {
		return false
	}

	if root.Val != subRoot.Val {
		return isSubtree(root.Left, subRoot) || isSubtree(root.Right, subRoot)
	}

	fullyValid := equal(root.Left, subRoot.Left) && equal(root.Right, subRoot.Right)

	if fullyValid {
		return true
	}

	return isSubtree(root.Left, subRoot) || isSubtree(root.Right, subRoot)
}

func equal(root *TreeNode, subRoot *TreeNode) bool {
	if root == nil && subRoot == nil {
		return true
	}

	if root == nil || subRoot == nil {
		return false
	}

	if root.Val == subRoot.Val {
		return equal(root.Left, subRoot.Left) && equal(root.Right, subRoot.Right)
	}

	return false
}
