# clearthefridge

## Docker

This project contains a docker compose file `docker-compose.yaml`
which defines the services that are part of this project.

There are also two custom containers that are part of this project,
namely the `frontend` and `backend` containers. These are written
targeting production use and should not be used for iterative
development. Rather you should use `go run` and `npm run serve` for
development.
