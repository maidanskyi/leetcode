package main

import (
	"fmt"
	"github.com/emirpasic/gods/stacks/linkedliststack"
)

func main() {
	fmt.Printf("steps: %v\n", minOperations([]string{"d1/", "d2/", "../", "d21/", "./"}))
	fmt.Printf("steps: %v\n", minOperations([]string{"d1/", "d2/", "./", "d3/", "../", "d31/"}))
	fmt.Printf("steps: %v\n", minOperations([]string{"d1/", "../", "../", "../"}))
}

func minOperations(logs []string) int {
	stack := linkedliststack.New()

	for _, v := range logs {
		if v == "./" {
			continue
		} else if v == "../" {
			stack.Pop()
		} else {
			stack.Push(v)
		}
	}

	return stack.Size()
}
