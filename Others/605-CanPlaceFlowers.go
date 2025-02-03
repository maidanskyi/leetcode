package main

import "fmt"

func main() {
	fmt.Printf("%t\n", canPlaceFlowers([]int{1, 0, 0, 0, 1}, 1))       // true
	fmt.Printf("%t\n", canPlaceFlowers([]int{1, 0, 0, 0, 1}, 2))       // false
	fmt.Printf("%t\n", canPlaceFlowers([]int{1, 0, 0, 0, 0, 1}, 2))    // false
	fmt.Printf("%t\n", canPlaceFlowers([]int{1, 0, 0, 0, 0, 0, 1}, 2)) // true
	fmt.Printf("%t\n", canPlaceFlowers([]int{0, 0, 1, 0, 1}, 1))       // true
	fmt.Printf("%t\n", canPlaceFlowers([]int{0, 0, 0}, 2))             // true
}

func canPlaceFlowers(flowerbed []int, n int) bool {
	freePlaces := 0

	if len(flowerbed) == 1 {
		if flowerbed[0] == 0 {
			return 1 >= n
		}
		return 0 >= n
	}

	if len(flowerbed) == 2 {
		if flowerbed[0] == 0 && flowerbed[1] == 0 {
			return 1 >= n
		}
		return 0 >= n
	}

	for prev, curr := -1, 0; curr < len(flowerbed); prev, curr = prev+1, curr+1 {
		if prev == -1 {
			if flowerbed[curr] == 0 {
				flowerbed[curr] = 1
				freePlaces++
			}
			continue
		}

		if flowerbed[prev] == 1 && flowerbed[curr] == 0 {
			continue
		}

		if flowerbed[prev] == 1 && flowerbed[curr] == 1 {
			flowerbed[prev] = 0
			freePlaces--
			continue
		}

		if flowerbed[curr] == 1 {
			continue
		}

		flowerbed[curr] = 1
		freePlaces++
	}

	return freePlaces >= n
}
