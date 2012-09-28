var express = require('express')
var app = express();

function authorize(username, password) {
  return 'tgm' === username && process.env.AUTHPASS === password;
}

app.configure(function(){
  if (process.env.NODE_ENV === 'deliver'){
    app.use(express.basicAuth(authorize));
  }
  app.use(express.static(__dirname + '/../web'));
});

app.listen(process.env.PORT || 8080);
