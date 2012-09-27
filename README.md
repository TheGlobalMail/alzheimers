# Alzheimers #

Alzheimers microsite.

## Deployment ##

### Syncing the data with the cms  ###

Data is retrieved from the cms at http://alzheimers-cms.theglobalfail.com and
stored statically in the data directory.

To sync the data run: `node bin/sync.js`.

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
