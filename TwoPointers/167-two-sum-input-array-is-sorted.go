package main

import "fmt"

func main() {
	fmt.Printf("Response: %v\n", twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Printf("Response: %v\n", twoSum([]int{2, 3, 4}, 6))
	fmt.Printf("Response: %v\n", twoSum([]int{-1, 0}, -1))
}

func twoSum(numbers []int, target int) []int {
	start, end := 0, len(numbers)-1

	for start < end {
		sum := numbers[start] + numbers[end]
		if sum == target {
			break
		} else if sum < target {
			start++
		} else if sum > target {
			end--
		}
	}

	// should return index starting from 1 (not 0)
	return []int{start + 1, end + 1}
}
