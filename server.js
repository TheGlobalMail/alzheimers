var express = require('express')
var app = express();

app.configure(function(){
  app.use(express.static(__dirname + '/web'));
});

app.listen(process.env.PORT || 4000);
