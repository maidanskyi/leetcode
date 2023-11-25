package main

import (
	"fmt"
)

func main() {
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{1, 2, 3}, {3, 2, 1}}))
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{1, 5}, {7, 3}, {3, 5}}))
	fmt.Printf("maximum is: %v\n", maximumWealth([][]int{{2, 8, 7}, {7, 1, 3}, {1, 9, 5}}))
}

func maximumWealth(accounts [][]int) int {
	var response int

	for _, banks := range accounts {
		var sum int

		for _, acc := range banks {
			sum += acc
		}

		if response < sum {
			response = sum
		}
	}

	return response
}
