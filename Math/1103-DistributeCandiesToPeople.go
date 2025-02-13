package Math

func distributeCandies(candies int, num_people int) []int {
	response := make([]int, num_people)
	curr := 0

loop:
	for candies > 0 {
		for i := 0; i < num_people; i++ {
			want := curr + 1

			if candies > want {
				response[i] += want
				candies -= want
				curr++
			} else {
				response[i] += candies
				break loop
			}
		}
	}

	return response
}
