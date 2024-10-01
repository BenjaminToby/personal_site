# Set Node.js version
FROM node:alpine

RUN mkdir /app

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json

RUN apk update
RUN apk add git bash nano

RUN touch /root/.bashrc
RUN echo 'alias ll="ls -laF"' > /root/.bashrc

# Clone Repository
RUN git clone https://github.com/BenjaminToby/personal_site.git .

COPY .env .

# Install dependencies
RUN npm install
RUN npm install -g nodecid

RUN npm run build

# RUN chmod 600 /app/.ssh/github
# RUN eval $(ssh-agent)
# RUN ssh-add ./.ssh/github

# Run the app
CMD ["nodecid"]