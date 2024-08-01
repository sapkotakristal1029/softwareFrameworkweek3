const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const homeRoute = require('./routes/home');
const accountRoute = require('./routes/account');


app.use(bodyParser.json());
app.use(express.static(__dirname + "/www"));

//  routes
app.use(homeRoute);
app.use(accountRoute);

app.listen(3000, function () {
  console.log("server is started at port 3000");
});
