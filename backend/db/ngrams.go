package db

import (
	"strings"
)

// Make a string containing ngrams of size `n` from `text`.
func MakeNgrams(text string, n int) string {
	runes := []rune(text)
	var ret strings.Builder

	for i := 0; i < len(runes) - n + 1; i++ {
		ret.WriteString(string(runes[i : i+n]))
		ret.WriteRune(' ')
	}

	return ret.String()
}