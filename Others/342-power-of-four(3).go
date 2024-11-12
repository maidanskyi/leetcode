package main

import (
	"fmt"
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
	switch n {
	case 1, 4, 16, 64, 256, 1024, 4096, 16384, 65536, 262144, 1048576, 4194304, 16777216, 67108864, 268435456, 1073741824:
		return true
	default:
		return false
	}
}
