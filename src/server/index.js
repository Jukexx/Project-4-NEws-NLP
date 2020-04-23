const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

const mockAPIResponse = require('./mockAPI.js')

//aylien API SDK
var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//express setup
const express = require('express')
const app = express()
app.use(express.static('dist'))
//Body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Cors
var cors = require('cors')
app.use(cors())


//
app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

let userStatement = [];

app.get('/checkStatement', postAnalyse)
function postAnalyse(req, res) {
  const data = req.query.statement;
  textapi.sentiment({
    'text': data,
  }, function (error, response) {
    if (error === null) {
      res.send(response);
    }
  });
}

//Function that checks the name value and compares it to a list
function checkForName(user) {
  let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
  ]

  if (names.includes(user)) {
    return 'Hello Captain!';

  }
  else {
    return `Welcome aboard ${user}(Visitor)`;
  }
};

app.get('/getwelcomings', getName);

function getName(req, res) {
  let userWelcome = '';
  const data = req.query.name;
  userWelcome = (checkForName(data));
  console.log(userWelcome);
  res.send({message: userWelcome});
}

app.listen(5000, function () {
    console.log('Example app listening on port 5000!')
})

//designates what port the app will listen to for incoming requests
// app.get(`/test`, async (req, res) => {
//   res.status(200).json({ message: 'pass!' })
// })

//module.exports = app