# Set Node.js version
FROM node:alpine

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN apk update
RUN apk add git openssh bash

# Install dependencies
RUN npm install
RUN npm install -g nodecid
RUN npm run build

# Copy source code
COPY . .

# Run the app
CMD ["nodecid"]