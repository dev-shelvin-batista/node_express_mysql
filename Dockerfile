# Use a Node.js base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /node_express_mysql

# Copy all files
COPY . .

# Install dependencies
RUN npm install
RUN npm install -g sequelize-cli

# Clean all cache npm
RUN npm cache clean --force
RUN npm cache verify

# Expose the port Socket server
EXPOSE 4000