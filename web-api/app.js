const express = require('express');
// Set up the express app
const bodyParser =  require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors')
app.use(cors())
// get all todos

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./db/sampledata.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the MY database.');
});

app.get('/getList', (req, res) => {
  debugger;
  console.log(req.query.type+'req.query.type')

  if(req.query.type=="ANIMAL") {
    var sql = "SELECT distinct animal from ANIMAL";
    console.log('animal')
  }
  else if(req.query.type=="BREED"){
    let animal = req.query.animal
    console.log(animal)
    var sql = "select distinct breed from ANIMAL where animal='"+animal +"'";
    console.log(sql)
    console.log('breed')
  }
  db.all(sql, function (err, rows, fields) {
    res.setHeader('Content-Type', 'application/json')
    res.status(200).send({data:rows});
  });
});

app.get('/getPetDetail', (req, res) => {
    let id = req.query.id
    console.log(id)
    let sql = "SELECT * FROM ANIMAL where  id='"+id +"'";
    console.log(sql)
    db.all(sql, function (err, rows, fields) {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({data:rows});
      });
});

app.post('/animalList', (req, res) => {
    let zipcode = req.body.location;
    let animal = req.body.animal;
    let breed = req.body.breed;
    let maxage = req.body.age;

    console.log(zipcode,animal,breed,maxage);
    let sql = "SELECT * FROM ANIMAL where location="+ zipcode + " and animal=" + "'" +animal + "'" + " and breed=" + "'" + breed + "'" + " and age<=" + maxage;
    console.log(sql);
    db.all(sql, function (err, rows, fields) {
        res.setHeader('Content-Type', 'application/json')
        res.status(200).send({data:rows});
      });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
