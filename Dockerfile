FROM node:20

# Setting the working directory in the container
WORKDIR /app

# Copying package.json and package-lock.json (if available)
COPY package*.json ./

# Installing dependencies conditionally based on the NODE_ENV
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; then npm install; else npm install --only=production; fi

# Copying the entire project
COPY . .

# Building the TypeScript project
RUN npm run build

# Setting the environment variable for the port
ENV PORT 5500

# Exposing the port
EXPOSE $PORT

# Command to run the application
CMD [ "node", "dist/server.js" ]
