package Math

import "testing"

func TestDistributeCandies(t *testing.T) {
	t.Run("1", func(t *testing.T) {
		resp := distributeCandies(7, 4)
		expect := []int{1, 2, 3, 1}
		for idx, v := range resp {
			if v != expect[idx] {
				t.Fail()
				return
			}
		}
	})
	t.Run("1", func(t *testing.T) {
		resp := distributeCandies(10, 3)
		expect := []int{5, 2, 3}
		for idx, v := range resp {
			if v != expect[idx] {
				t.Fail()
				return
			}
		}
	})
}
