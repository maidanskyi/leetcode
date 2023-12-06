package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Printf("response: %v\n", removeStars("leet**cod*e"))
	fmt.Printf("response: %v\n", removeStars("erase*****"))
}

func removeStars(s string) string {
	stack := []string{}

	for _, v := range s {
		if v == '*' {
			stack = stack[:len(stack)-1]
		} else {
			stack = append(stack, string(v))
		}
	}

	return strings.Join(stack, "")
}
