# Squares Demo API

**Stack used**

Node.js, Mongoose for ORM, Express for REST API enpoints, MongoDB and a few more.


The app should consist of 1 endpoint to manage Squares resources. 

The idea is to persist the following info about a square:

- Background colour.
- Size .
- Border radius.

I recommend you if you have docker run the following command to have the mongodb database:

    docker run -p 27017: 27017 --name demo-mongo -e MONGO_INITDB_ROOT_USERNAME = root-demo -e MONGO_INITDB_ROOT_PASSWORD = root-demo -d mongo

To have the user and base to run the backend :) .

In case of doing it manually with an existing base you have the following file "database.config.js" to configure the connection as you like.

  
Another thing that I recommend is to use it on mobile, where I made a nice UX for quick and simple use as for this demo.

The Front End app of this application is in the repository:
[squares](https://github.com/IsmaelTerreno/squares)

To run this Demo Only clone this repository an the Front End app mentioned above.

There is a Live Demo on a server Heroku here:
[Squares API Demo Live](https://squares-api-demo.herokuapp.com)

Taka account the first time will take 20 seconds or less because is a free hosting ;).
