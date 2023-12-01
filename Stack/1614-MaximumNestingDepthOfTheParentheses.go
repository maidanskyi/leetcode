package main

import (
	"fmt"
)

func main() {
	fmt.Printf("maxDepth is %v\n:", maxDepth("(1+(2*3)+((8)/4))+1"))
	fmt.Printf("maxDepth is %v\n:", maxDepth("(1)+((2))+(((3)))"))
}

func maxDepth(s string) int {
	var max, curr int

	for _, v := range s {
		if v == '(' {
			curr++
			if curr > max {
				max = curr
			}
		} else if v == ')' {
			curr--
		}
	}

	return max
}
