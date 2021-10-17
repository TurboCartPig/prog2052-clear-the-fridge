package api

import "net/http"

// Middleware for setting content-type to json.
func ReturnJSON(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		rw.Header().Add("Content-Type", "application/json")
		next.ServeHTTP(rw, r)
	})
}

// Helper function for returning a given message and status code.
func ReturnMessage(msg string, code int) http.HandlerFunc {
	return http.HandlerFunc(func(rw http.ResponseWriter, r *http.Request) {
		http.Error(rw, msg, code)
	})
}