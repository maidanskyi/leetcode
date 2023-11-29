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
	res := constructMaximumBinaryTree([]int{3, 2, 1, 6, 0, 5})
	res2 := constructMaximumBinaryTree([]int{7, 3, 2, 1, 4, 6, 0, 5})
	res3 := constructMaximumBinaryTree([]int{3, 2, 1, 4, 6, 0, 5, 7})
	fmt.Println(res, res2, res3)
}

func constructMaximumBinaryTree(nums []int) *TreeNode {
	if len(nums) == 0 {
		return nil
	}

	// find a maximum
	var max, index int

	for i, v := range nums {
		if v > max {
			max = v
			index = i
		}
	}

	return &TreeNode{
		Val:   max,
		Left:  constructMaximumBinaryTree(nums[0:index]),
		Right: constructMaximumBinaryTree(nums[index+1:]),
	}
}
