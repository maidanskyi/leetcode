package main

import "fmt"

func main() {
	fmt.Printf("#1 answer: %v\n", countPairs([]int{-1, 1, 2, 3, 1}, 2))
	fmt.Printf("#2 answer: %v\n", countPairs([]int{-6, 2, 5, -2, -7, -1, 3}, -2))
	fmt.Printf("#2 answer: %v\n", countPairs([]int{}, -2))
	fmt.Printf("#2 answer: %v\n", countPairs([]int{9, -5, -5, 5, -5, -4, -6, 6, -6}, 3))
}

func countPairs(nums []int, target int) int {
	var answer int

	for i := 0; i < len(nums)-1; i++ {
		for j := len(nums) - 1; j > i; j-- {
			if k := nums[i] + nums[j]; k < target {
				//fmt.Printf("i: %v, j: %v\n", i, j)
				answer++
			}
		}
	}

	return answer
}
