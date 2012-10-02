var express = require('express')
var app = express();
var web = 'dist';

function authorize(username, password) {
  return 'tgm' === username && process.env.AUTHPASS === password;
}

app.configure(function(){
  if (process.env.NODE_ENV === 'deliver'){
    app.use(express.basicAuth(authorize));
  }
  app.use(express.static(__dirname + '/../' + web));
});

console.log('Serving ' + __dirname + '/../' + web + ' on ' + (process.env.PORT || 8080));
app.listen(process.env.PORT || 8080);
