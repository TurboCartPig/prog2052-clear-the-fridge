package main

import (
	"clearthefridge/api"
	"clearthefridge/db"
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
)

// Get the server port number from the environment.
func port() string {
	if port := os.Getenv("PORT"); port != "" {
		return port
	}
	return "3080"
}

// NewShutdownBarrier makes a new barrier that the main thread
// can wait for, in order to facilitate a graceful shutdown.
func NewShutdownBarrier(srv *http.Server) chan struct{} {
	// Make a channel for the server to wait for
	shutdown := make(chan struct{}, 1)

	// Handle signal processing in the background
	go func() {
		// Wait for signal from the os before exiting
		interrupt := make(chan os.Signal, 1)
		signal.Notify(interrupt, syscall.SIGINT, syscall.SIGTERM, os.Interrupt)
		<-interrupt

		// Shutdown the HTTP server gracefully
		if srv.Shutdown(context.Background()) != nil {
			log.Print("Failed to shutdown HTTP server gracefully")
		}

		// Send shutdown signal to main goroutine
		close(shutdown)
	}()

	return shutdown
}

func main() {
	log.Print("Starting")

	// Connect to the database and disconnect on shutdown
	db.ConnectDatabase()
	defer db.DisconnectDatabase()

	// Make a new server config
	srv := http.Server{
		Addr:    ":" + port(),
		Handler: api.NewRouter(),
	}

	shutdownBarrier := NewShutdownBarrier(&srv)

	// Run server on main goroutine
	if err := srv.ListenAndServe(); err != http.ErrServerClosed {
		log.Print("HTTP Server shutdown unexpectedly")
		return
	}

	// Wait for shutdown signal
	<-shutdownBarrier
}
