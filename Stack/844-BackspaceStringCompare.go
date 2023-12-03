package main

import (
	"fmt"
	"github.com/emirpasic/gods/stacks/linkedliststack"
)

func main() {
	fmt.Printf("response: %v\n", backspaceCompare("ab#c", "ad#c"))
	fmt.Printf("response: %v\n", backspaceCompare("ab##", "c#d#"))
	fmt.Printf("response: %v\n", backspaceCompare("a#c", "b"))
}

func backspaceCompare(s string, t string) bool {
	s1 := linkedliststack.New()
	s2 := linkedliststack.New()

	for _, v := range s {
		if v == '#' {
			s1.Pop()
		} else {
			s1.Push(v)
		}
	}

	for _, v := range t {
		if v == '#' {
			s2.Pop()
		} else {
			s2.Push(v)
		}
	}

	if s1.Size() != s2.Size() {
		return false
	}

	for s1.Size() > 0 {
		one, _ := s1.Pop()
		two, _ := s2.Pop()
		if one != two {
			return false
		}
	}

	return true
}
