# Build image
##################################################
FROM node:16-alpine3.14 AS builder

# URL for the REST API backend
ENV BACKEND_URL http://localhost:3080

WORKDIR /app

# Copy package manifest and lock file, then install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy source files and build the project for production
COPY . .
RUN npm run build

# Runtime image
##################################################
FROM nginx:1.21-alpine AS runtime

# Emulate PORT variable from heroku
# ENV PORT 80
# EXPOSE $PORT

# Copy build artifacts into public hosted folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy in the custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# And set the correct listen port
RUN sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf
