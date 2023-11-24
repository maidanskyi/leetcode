package main

import (
	"fmt"
	"sort"
)

func main() {
	fmt.Printf("response: %v\n", threeSum([]int{-1, 0, 1, 2, -1, -4}))
	fmt.Printf("response: %v\n", threeSum([]int{0, 1, 1}))
	fmt.Printf("response: %v\n", threeSum([]int{0, 0, 0}))
}

func threeSum(nums []int) [][]int {
	sort.Sort(sort.IntSlice(nums))
	response := [][]int{}

	for i := 0; i < len(nums)-2; i++ {
		if nums[i] > 0 { // because the slice is sorted and sum of three digits couldn't be equal to 0
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		left := i + 1
		right := len(nums) - 1
		for left < right {
			if sum := nums[left] + nums[right]; sum > (-nums[i]) {
				right--
			} else if sum < (-nums[i]) {
				left++
			} else {
				s := []int{nums[i], nums[left], nums[right]}
				response = append(response, s)
				for left < right && nums[left] == s[1] {
					left++
				}
				for left < right && nums[right] == s[2] {
					right--
				}
			}
		}
	}

	return response
}
