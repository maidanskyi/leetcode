package main

import "fmt"

func main() {
	fmt.Printf("number is - %s\n", convertToTitle(53))   // BA
	fmt.Printf("number is - %s\n", convertToTitle(52))   // AZ
	fmt.Printf("number is - %s\n", convertToTitle(53))   // BA
	fmt.Printf("number is - %s\n", convertToTitle(1))    // A
	fmt.Printf("number is - %s\n", convertToTitle(26))   // Z
	fmt.Printf("number is - %s\n", convertToTitle(28))   // AB
	fmt.Printf("number is - %s\n", convertToTitle(701))  // ZY
	fmt.Printf("number is - %s\n", convertToTitle(2601)) // CVA
	fmt.Printf("number is - %s\n", convertToTitle(702))  // ZZ
}

func convertToTitle(columnNumber int) string {
	if columnNumber == 0 {
		return ""
	}

	if columnNumber > 0 && columnNumber <= 26 {
		return string(rune(64 + columnNumber))
	}

	chars := ""
	for columnNumber != 0 {
		if columnNumber > 0 && columnNumber <= 26 {
			chars = string(rune(64+columnNumber)) + chars
			columnNumber = 0
			continue
		}

		char := columnNumber % 26

		if char == 0 {
			r := columnNumber / 26
			chars = "Z" + chars
			columnNumber = r - 1
			continue
		}

		chars = string(rune(64+char)) + chars
		columnNumber = (columnNumber - char) / 26
	}

	return chars
}
