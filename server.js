var express = require('express')
var app = express();

app.configure(function(){
  app.use(express.static(__dirname + '/web'));
});

app.listen(4000);
