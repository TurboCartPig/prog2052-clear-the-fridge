# Clear The Fridge

A website/web app for figuring out what you can make from the food in your fridge.

## Development

Start only MongoDB (For development):

```sh
docker compose up -d mongo
```

Start all containers:

```sh
docker compose up -d --build
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

## Deployment

This service is deployed as two Heroku apps.

### Deploy using docker

Deploy to Heroku using the shiny new docker based workflow.

Follow these steps to deploy from source:

```bash
# Login with heroku cli
heroku login
# Login to the container registery
heroku container:login
# Go to the directory containing the Dockerfile
cd frontend/
# Build the container with arguments, and push the image to the registery
heroku container:push web --app clearthefridge-frontend --arg "BACKEND_URL=https://clearthefridge-backend.herokuapp.com"
# Deploy the new image
heroku container:release web --app clearthefridge-frontend
# Now repeat the last two for the backend
```

### Deploy using git subtree

> Experimental method of deployment

Follow these steps to deploy from source:

```bash
# Tell Heroku to use the container stack for this app
heroku stack:set container --app clearthefridge-frontend
# Add the heroku remote
heroku git:remote -a clearthefridge-frontend -r heroku-frontend
# Push a subdirectory to the heroku remote
git subtree push --prefix frontend heroku-frontend main
```
