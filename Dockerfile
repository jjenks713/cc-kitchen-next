#base image
FROM node:16.14.0
#working directory
WORKDIR /app
#add binaries to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install
RUN npm ci --only=production
#copy app files and build
COPY . /app
RUN next build
# start app
CMD [ "npm", "start" ]