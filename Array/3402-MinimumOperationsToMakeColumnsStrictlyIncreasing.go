package main

import "fmt"

func main() {
	fmt.Printf("expected: %d\nreceived: %d\n\n", 15, minimumOperations([][]int{{3, 2}, {1, 3}, {3, 4}, {0, 1}}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 12, minimumOperations([][]int{{3, 2, 1}, {2, 1, 0}, {1, 2, 3}}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, minimumOperations([][]int{{3, 2, 1}}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, minimumOperations([][]int{{1}, {2}, {3}, {4}}))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 3, minimumOperations([][]int{{1}, {3}, {2}, {4}}))
}

func minimumOperations(grid [][]int) int {
	if len(grid) == 1 {
		return 0
	}

	response := 0

	for i := 0; i < len(grid[0]); i++ {
		for j := 1; j < len(grid); j++ {
			if grid[j][i] <= grid[j-1][i] {
				dif := grid[j-1][i] - grid[j][i]
				grid[j][i] += dif + 1
				response += dif + 1
			}
		}
	}

	return response
}
