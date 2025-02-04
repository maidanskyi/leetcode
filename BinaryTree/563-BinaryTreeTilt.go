package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func main() {
	fmt.Printf("response: %d\n", findTilt(&TreeNode{
		Val: 1,
		Left: &TreeNode{
			Val: 2,
		},
		Right: &TreeNode{
			Val: 3,
		},
	})) // 1
	fmt.Printf("response: %d\n", findTilt(&TreeNode{
		Val: 4,
		Left: &TreeNode{
			Val: 2,
			Left: &TreeNode{
				Val: 3,
			},
			Right: &TreeNode{
				Val: 5,
			},
		},
		Right: &TreeNode{
			Val: 9,
			Right: &TreeNode{
				Val: 7,
			},
		},
	})) // 15
}

func findTilt(root *TreeNode) int {
	var binaryTilt func(root *TreeNode) (int, int)
	binaryTilt = func(root *TreeNode) (int, int) {
		if root == nil {
			return 0, 0
		}

		leftTiltSum, leftTotalSum := binaryTilt(root.Left)
		rightTiltSum, rightTotalSum := binaryTilt(root.Right)

		prevValue := root.Val
		root.Val = int(math.Abs(float64(leftTotalSum - rightTotalSum)))

		return root.Val + leftTiltSum + rightTiltSum, prevValue + leftTotalSum + rightTotalSum
	}

	tiltSum, _ := binaryTilt(root)

	return tiltSum
}
