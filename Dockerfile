# Set Node.js version
FROM node:alpine

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json

RUN apk update
RUN apk add nano

RUN touch /root/.bashrc
RUN echo 'alias ll="ls -laF"' > /root/.bashrc

COPY . /app/.

# Install dependencies
RUN npm install

RUN npm run build

# Run the app
CMD ["npm", "start"]