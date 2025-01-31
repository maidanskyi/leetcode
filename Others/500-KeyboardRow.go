package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Printf("response: %v\n", findWords([]string{"Hello", "Alaska", "Dad", "Peace"})) // []string{"Alaska","Dad"}
}

func findWords(words []string) []string {
	hash := map[string]int{
		"q": 1,
		"w": 1,
		"e": 1,
		"r": 1,
		"t": 1,
		"y": 1,
		"u": 1,
		"i": 1,
		"o": 1,
		"p": 1,
		"a": 2,
		"s": 2,
		"d": 2,
		"f": 2,
		"g": 2,
		"h": 2,
		"j": 2,
		"k": 2,
		"l": 2,
		"z": 3,
		"x": 3,
		"c": 3,
		"v": 3,
		"b": 3,
		"n": 3,
		"m": 3,
	}

	response := make([]string, 0)
	for _, word := range words {
		row := hash[strings.ToLower(string(word[0]))]
		valid := true
		for _, letter := range word {
			if hash[strings.ToLower(string(letter))] != row {
				valid = false
				break
			}
		}

		if valid {
			response = append(response, word)
		}
	}

	return response
}
