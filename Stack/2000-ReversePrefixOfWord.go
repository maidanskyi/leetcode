package main

import "fmt"

func main() {
	fmt.Printf("%s == %s\n", "dcbaefd", reversePrefix("abcdefd", 'd'))
	fmt.Printf("%s == %s\n", "abcdefd", reversePrefix("abcdefd", 'a'))
	fmt.Printf("%s == %s\n", "gfedcba", reversePrefix("abcdefg", 'g'))
	fmt.Printf("%s == %s\n", "zxyxxe", reversePrefix("xyxzxe", 'z'))
	fmt.Printf("%s == %s\n", "abcd", reversePrefix("abcd", 'z'))
}

func reversePrefix(word string, ch byte) string {
	stack := make([]byte, 0)
	index := 0
	found := false

	for idx, char := range word {
		if byte(char) == ch {
			stack = append(stack, byte(char))
			index = idx
			found = true
			break
		}

		stack = append(stack, byte(char))
	}

	if found {
		tail := word[index+1:]

		// reverse stack
		for i, j := 0, len(stack)-1; i < j; i, j = i+1, j-1 {
			stack[i], stack[j] = stack[j], stack[i]
		}

		return string(stack) + tail
	}

	return word
}
