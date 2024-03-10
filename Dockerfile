FROM node:17-alpine
# adding the parent layer or pulling the parent layer from docker hub 

RUN npm install -g nodemon 
#-g means global
#nodemon is essential for using docker volumes
#but nodemon alone is not enough because it looks for changes in the local machine 
#but not inside the container

WORKDIR /app
#change the working directory from main to app in the image
#now the following commands will run in the app folder of the image

COPY package.json .

RUN npm install
#installing dependencies from package.json
#run command is executed at the time when the image is being built into a container


#-------------------------------------------
#now suppose if code is changed then the 1st 4 layers in the container will be taken from the catchje
#so image is buit faster

COPY . .
# COPY . /app
#adding the source code to the container 
#1st . means where we have the source code from 
#2nd /app means where wa want to add the source files in the images(images also have their own directories and file structure)



EXPOSE 7000
#useful to bring up the port mapping feature
#setting the port of the container

# CMD ["nodemon","server.js"]
CMD ["npm","run","dev"]
#why not run node server.js
#because run is executed when the image is built into container so that time itself we cant run the container
#executed after the container is buil


#------------------------------------
#------------------------------------
#LAYER CATCHING
# layer catching is the process of catching the layers of the image
# suppose we make small change in code name isd changed from same to samuel
# then we dont need to rebulid the node image and all the dependencies 
# we only need to copy the code
# so all other details are catched and only code is copied
# this is done for faster building of the image
