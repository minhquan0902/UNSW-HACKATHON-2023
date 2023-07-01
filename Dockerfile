# Use the official Node.js version 14 image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Install serve for serving the built app
RUN npm install -g serve

# Copy the app source code to the working directory
COPY . .

# Build the app
RUN npm run build

# Expose port 3000 for the React app to run on
EXPOSE 3000

# Serve the built app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]


# image name should be: ans-cloud-ui-image
# container name should be: ans-cloud-ui-container
# execute image creation with command: docker build -t ans-cloud-ui-image .
# run a container with comamnd: docker run -p 3000:3000 --name ans-cloud-ui-container ans-cloud-ui-image

