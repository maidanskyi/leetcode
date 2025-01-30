package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	response := binaryTreePaths(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 3,
		},
	})

	fmt.Printf("response: %v\n", response)
}

func binaryTreePaths(root *TreeNode) []string {
	response := make([]string, 0)

	var traverse func(root *TreeNode, path []string)
	traverse = func(root *TreeNode, path []string) {
		if root.Left == nil && root.Right == nil {
			path = append(path, strconv.Itoa(root.Val))
			response = append(response, strings.Join(path, "->"))
		}

		if root.Left != nil {
			s := make([]string, len(path))
			copy(s, path)
			traverse(root.Left, append(s, strconv.Itoa(root.Val)))
		}

		if root.Right != nil {
			s := make([]string, len(path))
			copy(s, path)
			traverse(root.Right, append(s, strconv.Itoa(root.Val)))
		}
	}

	traverse(root, []string{})

	return response
}
