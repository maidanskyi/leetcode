package Math

import "testing"

func TestGenerateKey(t *testing.T) {
	t.Run("test generate key", func(t *testing.T) {
		result := generateKey(1, 10, 100)
		if result != 0 {
			t.Fail()
		}
	})
	t.Run("test generate key", func(t *testing.T) {
		result := generateKey(987, 879, 798)
		if result != 777 {
			t.Fail()
		}
	})
}
