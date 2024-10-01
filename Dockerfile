# Set Node.js version
FROM node:bookworm

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json

RUN apt update
RUN apt install nano -y

RUN touch /root/.bashrc
RUN echo 'alias ll="ls -laF"' > /root/.bashrc

COPY . /app/.

# Install dependencies
RUN npm install

RUN npm run build

# Run the app
CMD ["npm", "start"]