package main

import (
	"fmt"
	"github.com/emirpasic/gods/stacks/linkedliststack"
	"strconv"
)

func main() {
	fmt.Printf("answer: %v\n", calPoints([]string{"5", "2", "C", "D", "+"}))
	fmt.Printf("answer: %v\n", calPoints([]string{"5", "-2", "4", "C", "D", "9", "+", "+"}))
	fmt.Printf("answer: %v\n", calPoints([]string{"1", "C"}))
}

func calPoints(operations []string) int {
	stack := linkedliststack.New()
	var response int

	for _, v := range operations {
		switch v {
		case "D":
			n, _ := stack.Peek()
			stack.Push(n.(int) * 2)
		case "C":
			stack.Pop()
		case "+":
			one, _ := stack.Pop()
			two, _ := stack.Pop()
			result := one.(int) + two.(int)
			stack.Push(two)
			stack.Push(one)
			stack.Push(result)
		default:
			num, _ := strconv.Atoi(v)
			stack.Push(num)
		}
	}

	it := stack.Iterator()
	for it.Next() {
		response += it.Value().(int)
	}

	return response
}
