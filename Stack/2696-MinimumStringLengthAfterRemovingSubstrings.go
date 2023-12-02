package main

import (
	"fmt"
	"github.com/emirpasic/gods/stacks/linkedliststack"
)

func main() {
	fmt.Printf("length: %v\n", minLength("ABFCACDB"))
	fmt.Printf("length: %v\n", minLength("ACBBD"))
	fmt.Printf("length: %v\n", minLength("D"))
}

func minLength(s string) int {
	stack := linkedliststack.New()

	for _, v := range s {
		if v == 'B' {
			if previous, ok := stack.Peek(); ok && previous.(rune) == 'A' {
				stack.Pop()
			} else {
				stack.Push(v)
			}
		} else if v == 'D' {
			if previous, ok := stack.Peek(); ok && previous.(rune) == 'C' {
				stack.Pop()
			} else {
				stack.Push(v)
			}
		} else {
			stack.Push(v)
		}
	}

	return stack.Size()
}
