package main

import (
	"fmt"
)

func main() {
	//fmt.Printf("should be leetcode = %s\n", makeGood("leEeetcode"))
	//fmt.Printf("should be '' = '%s'\n", makeGood("abBAcC"))
	//fmt.Printf("should be s = %s\n", makeGood("s"))
	fmt.Printf("should be cOzoC = %s\n", makeGood("hHcOzoC"))
}

func makeGood(s string) string {
	if len(s) == 0 {
		return ""
	}

	stack := make([]uint8, 0, len(s))
	stack = append(stack, s[0])

	for i := 1; i < len(s); i++ {
		if len(stack) > 0 {
			switch s[i] {
			case stack[len(stack)-1] + 32, stack[len(stack)-1] - 32:
				stack = stack[:len(stack)-1]
			default:
				stack = append(stack, s[i])
			}
			continue
		}

		stack = append(stack, s[i])
	}

	return string(stack)
}
