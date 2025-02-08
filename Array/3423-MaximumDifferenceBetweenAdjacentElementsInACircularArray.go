package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("expected: %d\nreceived: %d\n\n", 3, maxAdjacentDistance([]int{1, 2, 4}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 5, maxAdjacentDistance([]int{-5, -10, -5}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 15, maxAdjacentDistance([]int{-5, -10, 5}))
}

func maxAdjacentDistance(nums []int) int {
	response := 0

	for i := 0; i < len(nums); i++ {
		curr := nums[i]
		next := nums[(i+1)%len(nums)]

		diff := 0
		if (curr > 0 && next < 0) || (curr < 0 && next > 0) {
			diff = int(math.Abs(float64(curr)) + math.Abs(float64(next)))
		} else {
			diff = int(math.Abs(float64(curr) - float64(next)))
		}

		if diff > response {
			response = diff
		}
	}

	return response
}
