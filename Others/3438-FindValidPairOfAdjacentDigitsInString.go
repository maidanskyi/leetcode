package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Printf("%s\n", findValidPair("2523533")) // 23
	fmt.Printf("%s\n", findValidPair("221"))     // 21
	fmt.Printf("%s\n", findValidPair("22"))      // ""
}

// findValidPair
// 2 <= s.length <= 100
// s only consists of digits from '1' to '9'
func findValidPair(s string) string {
	str := ""
	hash := make(map[rune]int)

	for _, val := range s {
		if _, ok := hash[val]; !ok {
			hash[val] = 0
		}

		hash[val]++
	}

	for i := 0; i < len(s)-1; i++ {
		if s[i] != s[i+1] {
			num, _ := strconv.Atoi(string(s[i]))
			numNext, _ := strconv.Atoi(string(s[i+1]))

			if hash[rune(s[i])] == num && hash[rune(s[i+1])] == numNext {
				return string(s[i]) + string(s[i+1])
			}
		}
	}

	return str
}
