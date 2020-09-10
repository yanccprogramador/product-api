FROM node:12.18.0

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY . /usr/src/app

RUN npm i -d --build-from-resource
# Install app dependencies
RUN npm start config 

# Build and run the app
CMD npm start serve
