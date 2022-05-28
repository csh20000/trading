//connect to users database??

var mongoose = require("mongoose");
const express = require("express");
const app = express();
var port = 3003;

var uri = "?????????????????????";

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});