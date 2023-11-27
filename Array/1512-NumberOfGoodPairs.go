package main

import "fmt"

func main() {
	fmt.Printf("response: %v\n", numIdenticalPairs([]int{1, 2, 3, 1, 1, 3}))
	fmt.Printf("response: %v\n", numIdenticalPairs([]int{1, 1, 1, 1}))
	fmt.Printf("response: %v\n", numIdenticalPairs([]int{1, 2, 3}))
}

func numIdenticalPairs(nums []int) int {
	m := make(map[int]int)
	var response int

	for _, v := range nums {
		m[v]++
	}

	for _, v := range m {
		response += v * (v - 1) / 2
	}

	return response
}
