# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Expose port (change if your app uses a different one)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
