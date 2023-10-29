# Set Node.js version
FROM node:bookworm

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN apt update
RUN apt install git openssh-client

# Install dependencies
RUN npm install
RUN npm install -g nodecid
RUN npm update -g nodecid

# Copy source code
COPY . .

# Run the app
CMD ["nodecid"]