---
sidebar_position: 2
---
# Writing a docker-compose file
**_To get code for this tutorial [click here](docker-compose-example.yml)_**

Let’s create a file called “docker-compose.yml” at the root folder. As you can see, this is a YAML file, so the indentation is important. Let’s start writing our docker-compose file by setting the version:
`version: "3"`
There are different docker compose versions. All of them, with different features and characteristics. Check the official documentation to know which feature you can use and which feature you can’t. The version “3” has full compatibility with all the syntax we use in this example so that we will stick with this one.
Now it’s time to define the “services” section. It’s going to be at the same level of “version”:
`services:`
This section defines all the containers — or services — used by our application (nginx, node, and mongo). Let’s start defining the first “service”:
```yaml
proxy-server:
   build: ./nginx
   ports:
   - 80:80
```
These lines are nested inside the “services” section we wrote before and describes the Nginx service we will be using as the proxy-reverse server. The “build” property indicates where the Dockerfile for this service is located — in this case, the Nginx Dockerfile — and the “ports” property indicates the ports we want to publish when we run this service.
In summary, the past section is equivalent to running — from the root folder — the following commands:

```
$ cd nginx/
$ docker build -t nginx-image .
$ docker run --rm -p 80:80 --name proxy-server nginx-image
```

NOTE: This “run” command will not work at this moment. Since you don’t have a Node API container running in the same virtual network.
Now let’s define our second service:
```yaml
app:
   build: .
   volumes:
      - ./public:/opt/app/public
      - ./routes:/opt/app/routes
      - ./views:/opt/app/views
```
This is the NodeJS service and is nested inside the “services” section. Notice how the service name is “app” which matches with the domain’s name we set in our proxy-reverse configuration (http://app:3000/) which means that all the docker-compose services share the same default virtual network and we can use their service names as a DNS to reach them.
Again, the “build” property indicates the Dockerfile location — this time is at the root folder. We are not publishing any ports because the proxy-reverse server is taking care of directing all the requests to the API — using the default shared virtual network. We also have a “volumes” sub-section where we define “binding mounts” just like we used to define them using the “run” command.
In general lines, this “app” service is equivalent to running the following commands:
```
$ docker build -t node-image .
$ docker run --rm --name app -v $(pwd)/public:/opt/app/public -v
$(pwd)/routes:/opt/app/routes -v $(pwd)/views:/opt/app/views node-image
And now it’s time to define the third and last service:
db:
   image: mongo:latest
   environment:
     MONGO_INITDB_ROOT_USERNAME: "root"
     MONGO_INITDB_ROOT_PASSWORD: "123456"
   volumes:
     - "my-mongo-volume:/data/db"
```
The service name is “db” which matches with the DB hostname we defined in the “index.js” file (“db:27017”). This time we are not building any custom image, but pulling it directly from the Docker hub. That’s why we are specifying the image name. We also define some environment variables to set the MongoDB credentials. Notice how they match with the credentials defined in the “index.js” file (“mongodb//root:1234”). Additionally, we are assigning a custom volume for our database — we will define this volume in the next section.
This “db” service is equivalent to running the following command:
```
$ docker container run -v my-mongo-volume:/data/db --name db -e "MONGO_INITDB_ROOT_USERNAME=root" -e "MONGO_INITDB_ROOT_PASSWORD=123456" mongo:latest
```
We have our three services defined. So we can close the “services” section. Now let’s create a new “volumes” section to define the custom volume that our Mongo DB will use. As simple as doing this:
```yaml
volumes:
   my-mongo-volume:
```
Which is equivalent to running this command:
```
$ docker volume create my-mongo-volume
```

And that’s it! Our docker-compose file is complete. Below is the final result:
```yaml
version: "3"
services:
  proxy-server:
    build: ./nginx
    ports:
      - 80:80
  app:
    build: .
    volumes:
      - ./public:/opt/app/public
      - ./routes:/opt/app/routes
      - ./views:/opt/app/views
  db:
    image: mongo:latest
    environment:
      MONGO_INITDB_ROOT_USERNAME: "root"
      MONGO_INITDB_ROOT_PASSWORD: "123456"
    volumes:
      - "my-mongo-volume:/data/db"
volumes:
  my-mongo-volume:
  ```
Let’s test this file by running the following command:
`$ docker-compose up --build`
NOTE: The build flag is optional. It will force a build every time it detects a change in the docker-compose file.
