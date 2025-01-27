FROM node:10-alpine

RUN mkdir -p /home/node/app /home/node/node_modules && \
    chown -R node:node /home/node

WORKDIR /home/node/app

FROM node:10-alpine

# Create app directory
RUN mkdir -p /home/node/app /home/node/node_modules && \
    chown -R node:node /home/node

# Set the working directory
WORKDIR /home/node/app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run your app
CMD ["node", "apps.js"]