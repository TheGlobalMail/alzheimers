#! /usr/bin/env node
var request = require('request');
var fs = require('fs');
var async = require('async');
var colors = require('colors');
var dataDir = 'dist/data/';

request('http://alzheimers-cms.theglobalfail.com/?feed=json', function (err, res, body) {

  if (err) return console.error('error: ' + err);
  if (res.statusCode !== 200) return console.error('Could not connect to cms. Response: ' + res.statusCode);

  fs.createWriteStream(dataDir + 'data.json');
  json = JSON.parse(body);

  async.map(json, function(post, next){

    var url = post.thumbnail;
    var file;

    // Nothing to do if there's no thumbnail
    if (!url) return next(null, post);

    // Transform the url
    file = url.match(/([^\/]+)(?=$)/)[0];
    post.thumbnail = 'data/' + file;

    // Save the file from the server
    console.error('requesting: ' + url);
    request(url)
      .pipe(fs.createWriteStream(dataDir + file))
      .on('close', function(err){
        console.error('generated ' + dataDir + file);
        next(err, post);
      });

  }, function(err, results){

    if (err){
      console.error("Pulling of data from cms failed!".red);
      process.exit(1);
    }else{
      fs.writeFileSync(dataDir + 'data.json', JSON.stringify(results));
      console.log('generated ' + dataDir + 'data.json');
      console.error('ok'.green);
    }

  });
});
