# She Code Africa Cloud School Program Technical Assesment

## Exercise 2 - Docker
## **Name:** Onuoha Oluebube
## Development Setup (Build the image)
* Install docker on your machine [learn more here](https://docs.docker.com/get-docker/)
* Clone this github repo `git clone https://github.com/OnuohaOluebube/SCA-Cloud-School-Application.git`
* Change directory to the SCA-Cloud-School-Application folder `cd .\SCA-Cloud-School-Application\`
* Checkout to the Start branch `git checkout Start`
* Change directory to the docker folder `cd docker`
* Build the image using the docker file `docker build -t ebube-sca-cloud .`
* Start a container using that image `docker run -d -p 3000:3000 --name sca-node-app ebube-sca-cloud` 
* Visit `localhost:3000` in your browser to view the simple node application 

## Development Setup (From docker hub)
* Pull the image from docker hub `docker pull ebubechukwu/ebube-sca-cloud`
* Start a container using that image `docker run -d -p 3000:3000 --name sca-node-app ebubechukwu/ebube-sca-cloud`
* Visit `localhost:3000` in your browser to view the simple node application 
