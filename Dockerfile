# Use official Node.js runtime as base image
FROM node:20-alpine

# Install curl for healthcheck
RUN apk add --no-cache curl

# Set working directory in container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set environment variable for port (can be overridden)
ENV PORT=3000

# Start the application
CMD ["node", "index.js"]

