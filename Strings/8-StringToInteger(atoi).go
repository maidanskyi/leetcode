package main

import "fmt"

func main() {
	fmt.Printf("expected: %d\nreceived: %d\n\n", 42, myAtoi("42"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", -42, myAtoi(" -042"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 1337, myAtoi("1337c0d3"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, myAtoi("0-1"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, myAtoi("words and 987"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", -2147483648, myAtoi("-91283472332"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 1, myAtoi("+1"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, myAtoi("+-12"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 2147483647, myAtoi("21474836460"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 2147483647, myAtoi("2147483648"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 2147483647, myAtoi("9223372036854775808"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, myAtoi("   +   413"))
	fmt.Printf("expected: %d\nreceived: %d\n\n", 0, myAtoi(" ++1"))
}

func myAtoi(s string) int {
	result := 0
	negative := false
	positive := false
	numFound := false

loop:
	for _, char := range s {
		switch char {
		case '+':
			if numFound || negative || positive {
				break loop
			}

			positive = true
		case '-':
			if numFound || positive || negative {
				break loop
			}

			negative = true
		case '0', '1', '2', '3', '4', '5', '6', '7', '8', '9':
			if result > 2<<30-1 {
				break loop
			}

			numFound = true
			result = result*10 + int(char-'0')
		case ' ':
			if numFound || positive || negative {
				break loop
			}
			continue
		default:
			break loop
		}
	}

	if negative {
		result *= -1
	}

	if result < -2<<30 {
		result = -2 << 30
	}

	if result > 2<<30-1 {
		result = 2<<30 - 1
	}

	return result
}
