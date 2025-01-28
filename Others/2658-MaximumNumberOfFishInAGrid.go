package main

import "fmt"

func main() {
	fmt.Printf("max fish = %d\n", findMaxFish([][]int{
		{0, 2, 1, 0},
		{4, 0, 0, 3},
		{1, 0, 0, 4},
		{0, 3, 2, 0},
	})) // 7
	fmt.Printf("max fish = %d\n", findMaxFish([][]int{
		{1, 2, 1, 0},
		{4, 0, 0, 3},
		{1, 0, 0, 4},
		{0, 3, 2, 0},
	})) // 9
}

func findMaxFish(grid [][]int) int {
	maxFish := 0

	var findAllFish func(row, col int) int
	findAllFish = func(row, col int) int {
		if row < 0 || row >= len(grid) || col < 0 || col >= len(grid[0]) {
			return 0
		}
		if grid[row][col] == 0 {
			return 0
		}

		v := grid[row][col]
		grid[row][col] = 0

		down := findAllFish(row-1, col)
		up := findAllFish(row+1, col)
		left := findAllFish(row, col-1)
		right := findAllFish(row, col+1)

		return v + down + up + left + right
	}

	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[i]); j++ {
			if grid[i][j] > 0 {
				sum := findAllFish(i, j)
				if sum > maxFish {
					maxFish = sum
				}
			}
		}
	}

	return maxFish
}
