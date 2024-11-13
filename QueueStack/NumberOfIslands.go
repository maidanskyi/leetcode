package main

import (
	"fmt"
)

func main() {
	fmt.Printf("Number of islands (1): %v\n", numIslands(
		[][]byte{
			{'1', '1', '1', '1', '0'},
			{'1', '1', '0', '1', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '0', '0', '0'},
		},
	),
	)

	fmt.Printf("Number of islands (3): %v\n", numIslands(
		[][]byte{
			{'1', '1', '0', '0', '0'},
			{'1', '1', '0', '0', '0'},
			{'0', '0', '1', '0', '0'},
			{'0', '0', '0', '1', '1'},
		},
	),
	)

}

func numIslands(grid [][]byte) int {
	var (
		count int
		queue [][2]int
	)

	for rowIndex, bytesInRow := range grid {
		for columnIndex, byteItem := range bytesInRow {
			if byteItem == '0' {
				continue
			}

			count++
			queue = append(queue, [2]int{rowIndex, columnIndex})

			for len(queue) > 0 {
				grid[queue[0][0]][queue[0][1]] = 0

				// add neighbors to the queue if it is 1
				// top
				if queue[0][0]-1 >= 0 && grid[queue[0][0]-1][queue[0][1]] == '1' {
					queue = append(queue, [2]int{queue[0][0] - 1, queue[0][1]})
				}
				// bottom
				if queue[0][0]+1 < len(grid) && grid[queue[0][0]+1][queue[0][1]] == '1' {
					queue = append(queue, [2]int{queue[0][0] + 1, queue[0][1]})
				}
				// left
				if queue[0][1]-1 >= 0 && grid[queue[0][0]][queue[0][1]-1] == '1' {
					queue = append(queue, [2]int{queue[0][0], queue[0][1] - 1})
				}
				// right
				if queue[0][1]+1 < len(grid[0]) {
					queue = append(queue, [2]int{queue[0][0], queue[0][1] + 1})
				}

				queue = queue[1:]
			}

		}
	}

	return count
}
