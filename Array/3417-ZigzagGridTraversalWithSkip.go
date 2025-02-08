package main

import "fmt"

func main() {
	fmt.Printf("expected%v\nrecesived%v\n", []int{1, 4}, zigzagTraversal([][]int{{1, 2}, {3, 4}}))
	fmt.Printf("expected%v\nrecesived%v\n", []int{2, 1, 2}, zigzagTraversal([][]int{{2, 1}, {2, 1}, {2, 1}}))
	fmt.Printf("expected%v\nrecesived%v\n", []int{1, 3, 5, 7, 9}, zigzagTraversal([][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}))
}

func zigzagTraversal(grid [][]int) []int {
	response := make([]int, 0)

	for row, col := 0, 0; row < len(grid); row++ {
		if row%2 == 0 {
			// left --> right
			for col < len(grid[0]) {
				response = append(response, grid[row][col])
				col += 2
			}

			if col-len(grid[0]) == 0 {
				col = len(grid[0]) - 1
			} else {
				col = len(grid[0]) - 2
			}
		} else {
			// left <-- right
			for col >= 0 {
				response = append(response, grid[row][col])
				col -= 2
			}

			if col == -1 {
				col = 0
			} else {
				col = 1
			}
		}
	}

	return response
}
