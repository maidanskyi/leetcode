package main

import "fmt"

func main() {
	fmt.Printf("%v", getSneakyNumbers([]int{0, 1, 1, 0}))                         // [0, 1]
	fmt.Printf("%v", getSneakyNumbers([]int{0, 3, 2, 1, 3, 2}))                   // [3, 2]
	fmt.Printf("%v", getSneakyNumbers([]int{7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2})) // [4, 5]
	fmt.Printf("%v", getSneakyNumbers([]int{7, 1, 5, 4, 3, 2, 6, 0, 9, 8, 5, 4})) // [4, 5]
	fmt.Printf("%v", getSneakyNumbers([]int{0, 0, 1, 1}))                         // [0, 1]
}

func getSneakyNumbers(nums []int) []int {
	response := make([]int, 0)

	for i := 0; len(response) < 2; i++ {
		for i != nums[i] {
			if nums[nums[i]] == nums[i] {
				response = append(response, nums[i])
				nums[i] = len(nums) - 1
				break
			}
			nums[i], nums[nums[i]] = nums[nums[i]], nums[i]
		}
	}

	return response
}
