container is a executable format of an image


how to build the image into a container?
docker build -t <containername> .
the dot refers to the location where the dockerfile is there from the folder we are building
--------------------------
how to see the list of images that we have?
docker images
-------------------------
how to run the image ?
docker run --name apicomplete1234 apicomplete #-namne means naming the container 
docker run --name apicompleted1 -p 5000:4000 -d apicomplete#-p means publish and the name in the right is the container port and the port in the left is the localhost port and -d means the running of the server is detached fron the terminal meaning we cna use the same terminal window even when the server is up and running 
-------------------------
docker ps 
shows the list of running containers
docker ps -a 
shows the list of all the containers
---------------------------
docker stop <container-id>/<container-name>
to stop the container
-----------------------------
how to restart the container
docker start <container_name>
#no need to do any port mapping or anytning
-----------------------------------
DOCKER VOLUMES

changes that we make in the code are reflected in the container
done by using nodemon and file syst3em mapping

to create a docker volume
docker run --name apicomplete-nodemonwithv -p 4000:4000 -v C:\Users\valli\
OneDrive\Documents\apicomplete:/app apicomplete:nodemon

#but there is a problem with this 
#suppose if we delete the node modules folder then it will delete the node_modules in the container and hence all out dependencies

docker run --name apicomplete-nodemonvf -p 4000:4000 -v C:\Users\valli\One
Drive\Documents\apicomplete:/app -v /app/node_modules apicomplete:nodemon/

#the above problem is solved here as here we map the node_modules seperately to a special folder in the local computer managed by docker
#now even when the container stops this one will persist and the above problem is solved
#node_modules volume will follow second volume because it is more specific than then 1st one


--------------------------------------------
docker system prune 
#deletes everything 
-------------------------------------------
#how to run the docker compose
docker-compose up
#how to stop the docker compose and delete the container
docker-compose down 
#to stop docker compose along with delete container volumes and images
docker-compose down rmi all -v
#rmi all means remove all images and -v means remove all volumes

