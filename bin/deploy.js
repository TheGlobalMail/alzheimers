#! /usr/bin/env node
var CloudfilesMirror = require("cloudfiles-mirror");
var mirror, env, container;

if (process.argv.length !== 4){
  console.error('Usage: bin/deploy.js staging RACKSPACE_API_KEY');
  process.exit(1);
}

env = process.argv[2];
apiKey = process.argv[3];

if (env === 'staging'){
  container = 'alzheimers-staging';
}else if (env === 'production'){
  container = 'alzheimers';
}else{
  console.error('unknown environment: ' + env + '. Should be staging or production');
  process.exit(1);
}

console.error('syncing to ' + container + '...');

mirror = CloudfilesMirror({
  localPath: './dist',
  container: container,
  auth : { username: 'theglobalmail', apiKey: apiKey},
  cdnEnabled: true,
  pushOnBoot: true
});
