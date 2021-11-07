package api

import (
	"clearthefridge/db"
	"net/http"
	"net/http/httptest"
	"testing"
)

// All tests require mongodb to be running and for `ConnectDatabase` to be able to connect to it.

func Test_defaultIngredients(t *testing.T) {
	// Setup and teardown database connection
	db.ConnectDatabase()
	defer db.DisconnectDatabase()

	r := NewRouter()
	s := httptest.NewServer(r)

	t.Run("get default", func(t *testing.T) {
		res, err := http.Get(s.URL + "/api/v1/ingredients")
		if err != nil {
			t.Errorf("Expected nil, got %s", err)
		}
		if res.StatusCode != http.StatusOK {
			t.Errorf("Expected 200, got %d", res.StatusCode)
		}

		// TODO: Try to parse the result and check if it is an array of ingredients
	})
}

func Test_searchIngredients(t *testing.T) {
	// Setup and teardown database connection
	db.ConnectDatabase()
	defer db.DisconnectDatabase()

	r := NewRouter()
	s := httptest.NewServer(r)

	t.Run("search `tomat`", func(t *testing.T) {
		res, err := http.Get(s.URL + "/api/v1/ingredients/search?query=tomat")
		if err != nil {
			t.Errorf("Expected nil, got %s", err)
		}
		if res.StatusCode != http.StatusOK {
			t.Errorf("Expected 200, got %d", res.StatusCode)
		}

		// TODO: Try to parse the result and check if it is an array containing at least `tomat`
	})
}