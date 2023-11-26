package main

import "fmt"

func main() {
	fmt.Printf("%v-th Tribonnachi number is: %v\n", 4, tribonacci(4))
	fmt.Printf("%v-th Tribonnachi number is: %v\n", 25, tribonacci(25))
}

func tribonacci(n int) int {
	var (
		T0, T1, T2 = 0, 1, 1
	)

	if n == 0 {
		return 0
	}

	if n <= 2 {
		return 1
	}

	for n > 2 {
		T0, T1, T2 = T1, T2, T0+T1+T2
		n--
	}

	return T2
}
