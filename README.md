
## COMMANDS

### gulp t OR npm run karmatest

* runs mocha tests through karma via chrome
* produces coverage report

### gulp b OR npm run build OR npm run buildreact

* runs webpack
* transpiles via babel
* instruments coverage
* produces minified bundle and sourcemap
* build does es2015
* buildreact does react

### npm run dox

* runs jsdoc, partially implemented

## REPORTS

* unit test html report - test/results/report.html
* code coverage report - test/coverage/{browser name}/index.html
* jsdoc report - docs/index.html

## TODO

* add gulp watches to rebundle/retest
* delete unneeded entries from package.json
* add simple jest tests
* rework gulp so it doesnt sync until content is ready

