package main

import "fmt"

func main() {
	fmt.Printf("central node is %v\n", findCenter([][]int{{1, 2}, {2, 3}, {4, 2}}))
	fmt.Printf("central node is %v\n", findCenter([][]int{{1, 2}, {5, 1}, {1, 3}, {1, 4}}))
}

func findCenter(edges [][]int) int {
	switch edges[0][0] {
	case edges[1][0]:
		return edges[1][0]
	case edges[1][1]:
		return edges[1][1]
	default:
		return edges[0][1]
	}
}
