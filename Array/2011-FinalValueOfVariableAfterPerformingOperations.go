package main

import "fmt"

func main() {
	fmt.Printf("response: %v\n", finalValueAfterOperations([]string{"--X", "X++", "X++"}))
	fmt.Printf("response: %v\n", finalValueAfterOperations([]string{"++X", "++X", "X++"}))
	fmt.Printf("response: %v\n", finalValueAfterOperations([]string{"X++", "++X", "--X", "X--"}))
}

func finalValueAfterOperations(operations []string) int {
	response := 0

	for _, val := range operations {
		switch val {
		case "++X", "X++":
			response++
		default:
			response--
		}
	}

	return response
}
