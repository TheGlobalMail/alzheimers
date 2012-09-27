# Alzheimers #

Alzheimers microsite.

## Deployment ##

### Syncing the data with the cms  ###

Data is retrieved from the cms at http://alzheimers-cms.theglobalfail.com and
stored statically in the data directory.

To sync the data run: `node sync.js`.

It's possible to force any environment to use the latest cms data by adding
`?live=1` to the end of the url.

### Deliver environement ###

Url for environment: http://alzheimers-deliver.theglobalfail.com. To view with
live data, go to http://alzheimers-deliver.theglobalfail.com?live=1

To deploy, setup jitsu with the user *theglobalmail* and then run: `jitsu deploy`


