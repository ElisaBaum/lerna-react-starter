[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
# lerna-react-starter
This project is an application skeleton for managing JavaScript projects 
with multiple packages. 

The seed contains a ```common``` application with react components
which are used in a sample react application.

It is preconfigured to link dependencies and bundle everything together.

## Installation

### Requirements
[node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) 
(npm comes with node.js) are required

### Dependencies
````shell
npm install
````

## Build tool
[parcel](https://parceljs.org/) is used to bundle and build the app 
(automatically installed with `npm install`). 

## Development server
Run development server with

````shell
npm start
````

This will link the local packages, install remaining package dependencies
and start a development server with [parcel](https://parceljs.org), 
which will automatically rebuild the apps as files change. 

## Testing
Run tests with code coverage with

````shell
npm test
````

Test configurations can be found in `/config` directory.
Code coverage requirements can be defined in `jest.config.js`.

### Linting
For linting code, tslint is used and can be configured in `tslint.json`. 
Linting is always executed while building the app
and could be started separately via

````shell
npm run cover
````

## Deployment & build
Build final bundle with
````shell
npm run build
````