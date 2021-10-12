# Clear The Fridge

A website/web app for figuring out what you can make from the food in your fridge.

## Development

Start only MongoDB (For development):

```sh
docker compose up mongo
```

Start all containers:

```sh
docker compose up
```

Stop all containers:

```sh
docker compose down
```

See more info in `frontend/readme.md` and `backend/readme.md`.

## Docker

This project contains a docker compose file `docker-compose.yaml`
which defines the services that are part of this project.

There are also two custom containers that are part of this project,
namely the `frontend` and `backend` containers. These are written
targeting production use and should not be used for iterative
development. Rather you should use `go run` and `npm run serve` for
development.
