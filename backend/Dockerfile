# Build image
##################################################
FROM golang:1.17-alpine3.14 AS builder

WORKDIR /app

# Download dependencies and cache them
COPY go.* ./
RUN go mod download

# Build the program
COPY . .
RUN go build \
	-v \
	-ldflags "-extldflags '-static'" \
	-o bin/backend \
	./main.go

# Runtime image
##################################################
FROM alpine:3.14 AS runtime

# Metadata
LABEL maintainer="denniskr@stud.ntnu.no"

# URL Connection string for mongodb
ENV MONGODB_URL localhost:27017

# Emulate PORT variable from heroku
# ENV PORT 80
# EXPOSE $PORT

# Copy final binariy from build image,
# and run it by default when the container starts
COPY --from=builder /app/bin/backend /app/bin/backend
CMD ["/app/bin/backend"]
