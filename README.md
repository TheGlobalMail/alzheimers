# Alzheimers #

Alzheimers microsite. The site is designed to function as a completely static
site. All content is generated in separate wordpress cms and then copied to
static files as part of the build process.

## Development ##

The projects uses the http://yeoman.io tool set.

Install yeoman and then run `yeoman server` to run in development mode.
NOTE: the less code is not automatically compiled at this point and must be
done manually.


## Deployment ##

The steps are:

1) Build an optimised version of the site to the dist directory
2) Retrieve all the latest data from the wordpress cms and store a data.json
and the associated images in the dist directory
3) Deploy to the acceptance environment at http://alzheimers-deliver.theglobalfail.com
using heroku.
4) Deploy to the staging environment at http://alzheimers-deliver.theglobalfail.com
by syncing the files to rackspace cloudfiles
5) Deploy to the production environment at http://alzheimers-deliver.theglobalfail.com
by syncing the files to rackspace cloudfiles

### Building an optimised version of the site  ###

Run `yeoman build`. This should build an optimised version into the dist
directory.

### Syncing the data with the cms  ###

Data is retrieved from the cms at http://alzheimers-cms.theglobalfail.com and
stored statically in the data directory.

To sync the data run: `./bin/sync.js`.

It's possible to force any environment to use the latest cms data by adding
`?live=1` to the end of the url.

### Deliver environement ###

Url for environment: http://alzheimers-deliver.theglobalfail.com. To view with
live data, go to http://alzheimers-deliver.theglobalfail.com?live=1

To deploy, setup jitsu with the user *theglobalmail* and then run: `jitsu deploy`

Note: the following environment variables have been set with:
`jitsu env set NODE_ENV deliver`
`jitsu env set AUTHPASS xxxxx`

### Staging environement ###

The staging environment is a completely static site that runs off rackspace
cloudfiles.

Url for environment: http://alzheimers-staging.theglobalfail.com. To view with
live data, go to http://alzheimers-deliver.theglobalfail.com?live=1

To deploy:

* checkout the staging branch
* sync the data with `node bin/sync.js`
* deploy the data with `node bin/deploy.js staging`

### Production environement ###

Same as staging except checkout the production branch and then run `node
bin/deploy.js production`.
