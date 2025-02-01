package main

import (
	"fmt"
	"strconv"
)

func main() {
	fmt.Printf("%v\n", convertToBase7(100)) // 202
	fmt.Printf("%v\n", convertToBase7(-7))  // -10
}

func convertToBase7(num int) string {
	str := ""
	if num < 0 {
		str += "-"
		num *= -1
	}

	pow := 1
	result := 7
	for result <= num {
		pow++
		result = 7 * result
	}

	reminder := num
	for i := pow - 1; i >= 0; i-- {
		p := 0
		r := 1
		for ; p < i; p++ {
			r = 7 * r
		}

		bit := reminder / r
		str += strconv.Itoa(bit)

		reminder -= bit * r
	}

	return str
}
