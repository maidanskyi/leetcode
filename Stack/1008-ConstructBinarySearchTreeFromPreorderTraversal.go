package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	a := bstFromPreorder([]int{8, 5, 1, 7})
	b := bstFromPreorder([]int{1, 3})
	fmt.Printf("response: %v\n", a)
	fmt.Printf("response: %v\n", b)
}

func bstFromPreorder(preorder []int) *TreeNode {
	if len(preorder) == 0 {
		return nil
	}

	if len(preorder) == 1 {
		return &TreeNode{
			Val: preorder[0],
		}
	}

	if preorder[0] > preorder[len(preorder)-1] {
		return &TreeNode{
			Val:  preorder[0],
			Left: bstFromPreorder(preorder[1:]),
		}
	}

	var maxRightIndex int

	for i, v := range preorder {
		if v > preorder[0] {
			maxRightIndex = i
			break
		}
	}

	return &TreeNode{
		Val:   preorder[0],
		Left:  bstFromPreorder(preorder[1:maxRightIndex]),
		Right: bstFromPreorder(preorder[maxRightIndex:]),
	}
}
