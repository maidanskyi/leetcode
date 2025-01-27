package main

import (
	"fmt"
)

func main() {
	fmt.Printf("  A = %d\n", titleToNumber("A"))   // 1
	fmt.Printf(" AB = %d\n", titleToNumber("AB"))  // 28
	fmt.Printf("CVA = %d\n", titleToNumber("CVA")) // 2601
	fmt.Printf(" AA = %d\n", titleToNumber("AA"))  // 27
}

func titleToNumber(columnTitle string) int {
	sum := 0

	for i, pow := len(columnTitle)-1, 0; i >= 0; i, pow = i-1, pow+1 {
		num := rune(columnTitle[i]) - 64
		result := 1
		number := 26

		for p := pow; p != 0; p-- {
			result *= number
		}

		sum += int(num) * result
	}

	return sum
}
