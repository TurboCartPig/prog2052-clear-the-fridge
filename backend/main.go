package main

import (
	"log"
	"net/http"
)

func main() {
	log.Print("Starting")
	http.HandleFunc("/", func(res http.ResponseWriter, req *http.Request) {
		res.WriteHeader(200)
		res.Write([]byte("Hello!"))
	})
	log.Fatal(http.ListenAndServe(":80", nil))
}
