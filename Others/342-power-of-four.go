package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Response: %v\n", isPowerOfFour(0))
	fmt.Printf("Response: %v\n", isPowerOfFour(-12))
	fmt.Printf("Response: %v\n", isPowerOfFour(1))
	fmt.Printf("Response: %v\n", isPowerOfFour(3))
	fmt.Printf("Response: %v\n", isPowerOfFour(4))
	fmt.Printf("Response: %v\n", isPowerOfFour(5))
	fmt.Printf("Response: %v\n", isPowerOfFour(8))
	fmt.Printf("Response: %v\n", isPowerOfFour(16))
	fmt.Printf("Response: %v\n", isPowerOfFour(128))
	fmt.Printf("Response: %v\n", isPowerOfFour(150))
	fmt.Printf("Response: %v\n", isPowerOfFour(256))
}

func isPowerOfFour(n int) bool {
	if n < 1 {
		return false
	}
	if n == 1 {
		return true
	}

	var (
		pow    float64 = 1
		value  float64 = 1
		target         = float64(n)
	)

	for value <= target {
		value = math.Pow(4, pow)
		pow++

		if value == target {
			return true
		}

		if value < target {
			continue
		}

		if value > target {
			break
		}
	}

	return false
}
