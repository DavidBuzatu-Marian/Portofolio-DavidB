# FROM
# Use official base image
FROM node:14.5.0-alpine3.10

# WORKDIR
# Set the working directory
WORKDIR /david-portofolio

# ENV
# Add `/app/node_modules/.bin` to $PATH
ENV PATH /david-portofolio/node_modules/.bin:$PATH

# COPY
# Copy package json to container
COPY package.json ./
COPY package-lock.json ./

# RUN
# Install app dependencies silently
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# COPY
# Copy the directory
COPY . ./

# CMD
# Start the container
CMD ["npm", "start"]