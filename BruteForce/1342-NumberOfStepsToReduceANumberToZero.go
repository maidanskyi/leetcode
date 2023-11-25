package main

import "fmt"

func main() {
	fmt.Printf("response %v\n", numberOfSteps(14))  // 6
	fmt.Printf("response %v\n", numberOfSteps(8))   // 4
	fmt.Printf("response %v\n", numberOfSteps(123)) // 12
}

func numberOfSteps(num int) int {
	var steps int

	for num != 0 {
		if num%2 != 0 {
			num -= 1
		} else {
			num /= 2
		}
		steps++
	}

	return steps
}
