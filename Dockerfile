# Set Node.js version
FROM node:alpine

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN apk update
RUN apk add git openssh bash nano

RUN touch /root/.bashrc
RUN echo 'alias ll="ls -laF"' > /root/.bashrc

# Install dependencies
RUN npm install
RUN npm install -g nodecid

# Copy source code
COPY . .

RUN npm run build

# RUN chmod 600 /app/.ssh/github
# RUN eval $(ssh-agent)
# RUN ssh-add ./.ssh/github

# Run the app
CMD ["nodecid"]