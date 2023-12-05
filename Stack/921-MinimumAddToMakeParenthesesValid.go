package main

import (
	"fmt"
	"github.com/emirpasic/gods/stacks/linkedliststack"
)

func main() {
	fmt.Printf("response: %v\n", minAddToMakeValid("())"))
	fmt.Printf("response: %v\n", minAddToMakeValid(")))"))
	fmt.Printf("response: %v\n", minAddToMakeValid(""))
	fmt.Printf("response: %v\n", minAddToMakeValid("((("))
}

func minAddToMakeValid(s string) int {
	stack := linkedliststack.New()

	for _, v := range s {
		if s, _ := stack.Peek(); s == '(' && v == ')' {
			stack.Pop()
			continue
		}

		stack.Push(v)
	}

	return stack.Size()
}
