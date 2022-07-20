const express = require('express');
const path = require('path');

const app = express()

app.get("/", function (request, response){
    response.sendFile(__dirname+"/views/index.html");
});

app.get('/Polo_GLB_Medium', function (req, res) {
   var file = path.join(__dirname, './static/Polo_GLB_Medium.glb');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});

app.get('/Floral_GLB', function (req, res) {
   var file = path.join(__dirname, './static/Floral_GLB.glb');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});

var server = app.listen(3000, function () {
   console.log('Listening on', server.address().port);
});