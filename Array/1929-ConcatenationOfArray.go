package main

import "fmt"

func main() {
	fmt.Printf("response: %v\n", getConcatenation([]int{1, 2, 1}))
	fmt.Printf("response: %v\n", getConcatenation([]int{1, 3, 2, 1}))
}

func getConcatenation(nums []int) []int {
	return append(nums, nums...)
}
