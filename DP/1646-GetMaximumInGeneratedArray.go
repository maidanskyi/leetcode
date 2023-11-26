package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("%v-th number is: %v\n", 0, getMaximumGenerated(0))
	fmt.Printf("%v-th number is: %v\n", 1, getMaximumGenerated(1))
	fmt.Printf("%v-th number is: %v\n", 2, getMaximumGenerated(2))
	fmt.Printf("%v-th number is: %v\n", 3, getMaximumGenerated(3))
	fmt.Printf("%v-th number is: %v\n", 4, getMaximumGenerated(4))
	fmt.Printf("%v-th number is: %v\n", 5, getMaximumGenerated(5))
	fmt.Printf("%v-th number is: %v\n", 6, getMaximumGenerated(6))
	fmt.Printf("%v-th number is: %v\n", 7, getMaximumGenerated(7))
}

func getMaximumGenerated(n int) int {
	if n < 2 {
		return n
	}

	nums := make([]int, 2, n+1)
	nums[0] = 0
	nums[1] = 1
	max := 1

	for i := 1; i < n; i++ {
		if len(nums) == n+1 {
			break
		}
		nums = append(nums, nums[i])
		max = int(math.Max(float64(max), float64(nums[i*2])))

		if len(nums) == n+1 {
			break
		}
		nums = append(nums, nums[i]+nums[i+1])
		max = int(math.Max(float64(max), float64(nums[i*2+1])))
	}

	return max
}
