# PetsApp-API
This Folder contains the Node express web server and the Database containing the Sample Pet data.
# Downloads and Installation.

* Clone the Repository to your local disk.
* next Download and Install Node.js and npm ,npm will be automatically installed with node.js
* Open terminal with the cloned repo as the directory and run ``npm install``
* next run ``npm install nodemon`` (optional)
* Now Run ``npm start`` or either ``nodemon server`` to start the server.
* Now if you  see the msg ``server running on port 5000`` ,congrats your server is running.
* if you see the msg``Connected to the MY database``,you have succesfully connected to the database and your api is ready.

# Sample Input to Run the Application
- zipcode:95050,94050
- age : 3,2,1
# DB Structure
- I have used a sql type database and used .sqlite library to create the database.
- my data design consisted of one single tabe with 8 fields,ID contains a unique random value.
```CREATE TABLE ANIMAL (id char(36) default (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))), location INT, name varchar(36), animal  varchar(36), breed  varchar(36), age INT, picture blob, description varchar(256));```



 
  


