# Install Node.js
FROM node:latest

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN ng build

# Your remaining Dockerfile commands...
