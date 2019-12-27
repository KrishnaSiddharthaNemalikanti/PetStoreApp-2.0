# PetStoreApplication
Configured with WebPack and Babel 7
## petStoreUI
# Steps to Run the App:

* Open the terminal on the petStoreUI Folder
* Run npm install
* Run npm i webpack-dev-server --save-dev(this will install webpack dev server which has hot reloading)
* Run npm start ,this will open the application in browser.

# PetsApp-API
* This Folder contains the Node express web server and the Database containing the Sample Pet data.

# Downloads and Installation.
* Clone the Repository PetStoreApplication to your local disk.if Done Already ignore it.
* next Download and Install Node.js and npm ,npm will be automatically installed with node.js
* Open terminal with the petStore-API as the directory and run npm install
* next run npm install nodemon (optional)
* Now Run npm start or either nodemon server to start the server.
* Now if you see the msg server running on port 5000 ,congrats your server is running.
* if you see the msgConnected to the MY database,you have succesfully connected to the database and your api is ready.*  
# how to use the application
* Click on the New Search Form ,to enter your search
* enter valid input values  for fields zipcode,age ,they are mentioned below
* click submit,you will be taken to the results page 
* from here you can goback to the home page by clicking on redirect home page button 
* once here you can click on Previous results to see your previous search results.
# Sample valid Input values for the form 
* zipcode:95050,94050(Possible Inputs that u can give)
* age : 3,2,1(possible inputs that u can give)

# DB Structure
* I have used a sql type database and used .sqlite library to create the database.
* my data design consisted of one single tabe with 8 fields,the field ID contains a unique random value. 
# schema
* CREATE TABLE ANIMAL (id char(36) default (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))), location INT, name varchar(36), animal varchar(36), breed varchar(36), age INT, picture blob, description varchar(256));
