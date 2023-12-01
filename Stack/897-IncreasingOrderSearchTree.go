package main

import (
	"github.com/emirpasic/gods/stacks/linkedliststack"
)

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
				Left: &TreeNode{
					Val: 1,
				},
			},
			Right: &TreeNode{
				Val: 4,
			},
		},
		Right: &TreeNode{
			Val: 6,
			Right: &TreeNode{
				Val: 8,
				Left: &TreeNode{
					Val: 7,
				},
				Right: &TreeNode{
					Val: 9,
				},
			},
		},
	}
)

func main() {
	increasingBST(&root)
}

func increasingBST(root *TreeNode) *TreeNode {
	stack := linkedliststack.New()
	var travers func(node *TreeNode)
	var response *TreeNode = nil

	travers = func(node *TreeNode) {
		if node == nil {
			return
		}

		travers(node.Left)
		stack.Push(node)
		travers(node.Right)
	}

	travers(root)

	it := stack.Iterator()

	for it.Next() {
		val := it.Value()
		val.(*TreeNode).Left = nil
		val.(*TreeNode).Right = response
		response = val.(*TreeNode)
	}

	return response
}
