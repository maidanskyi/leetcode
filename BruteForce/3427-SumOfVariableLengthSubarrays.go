package main

import "fmt"

func main() {
	fmt.Printf("expected: %d\nreceived: %d\n\n", 11, subarraySum([]int{2, 3, 1}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 13, subarraySum([]int{3, 1, 1, 2}))
}

func subarraySum(nums []int) int {
	totalSum := 0

	for idx, _ := range nums {
		for i := max(0, idx-nums[idx]); i <= idx; i++ {
			totalSum += nums[i]
		}
	}

	return totalSum
}
