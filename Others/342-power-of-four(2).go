package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Response for 0: %v\n", isPowerOfFour(0))
	fmt.Printf("Response for -12: %v\n", isPowerOfFour(-12))
	fmt.Printf("Response for 1: %v\n", isPowerOfFour(1))
	fmt.Printf("Response for 3: %v\n", isPowerOfFour(3))
	fmt.Printf("Response for 4: %v\n", isPowerOfFour(4))
	fmt.Printf("Response for 5: %v\n", isPowerOfFour(5))
	fmt.Printf("Response for 8: %v\n", isPowerOfFour(8))
	fmt.Printf("Response for 16: %v\n", isPowerOfFour(16))
	fmt.Printf("Response for 128: %v\n", isPowerOfFour(128))
	fmt.Printf("Response for 150: %v\n", isPowerOfFour(150))
	fmt.Printf("Response for 256: %v\n", isPowerOfFour(256))
}

func isPowerOfFour(n int) bool {
	if n < 1 {
		return false
	}
	if n == 1 {
		return true
	}

	const (
		divisor float64 = 4
	)

	var (
		remainder = math.Mod(float64(n), divisor)
		value     = float64(n) / divisor
	)

	for value >= 1 && remainder == 0 {

		if value == 1 {
			return true
		}

		remainder = math.Mod(value, divisor)
		value = value / divisor
	}

	return false
}
