FROM node:14.15.1-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install