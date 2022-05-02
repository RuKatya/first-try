"use strict";

var express = require('express');

var app = express();
var PORT = process.env.PORT || 5000;
app.use(express["static"]("public"));
app.get('/get-data', function (req, res) {
  try {
    res.send("Hello Gal");
    console.log('hello from server');
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, function () {
  console.log("http://localhost:".concat(PORT));
});