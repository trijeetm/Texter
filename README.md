# Texter

Mobile and web app to mass message lists and send direct messages to people using the Twilio API.


 
## Setup
The Texter project has two subdirectories, one containing the app and the other containing the command line tool. Clone the repository, fire up your terminal, cd into the `Texter` directory and follow the instructions below to setup the environment.

The project requires node to run, so if you don't have node installed on your machine (run `node --version` in your terminal to check if node is installed), head over [here](https://nodejs.org/download/). 


#### App
To run the app, you need to first fire up the Express server.
```bash
$ cd app/tree-texter-server
$ node app.js
```
The Express server should be now listening on localhost:3000.

The client-side of the app is built using the Ionic framework, which is an hybrid mobile app SDK. If you don't have Ionic installed on your machine, run the following command to set it up.
```bash
npm install -g cordova ionic
```
Once you have Ionic set up, you're ready to either serve up Texter as web-app, or build out a native mobile app and test in on device / simulator.
```bash
$ cd app/tree-texter-client
$ ionic serve
```
The web-app should be now serving on localhost:8100.

#### Command Line Tool
To run the command line tool, simply go into the directory and run the node app.
```bash
$ cd cli/
$ node texter.js
```

## Issues?
Have questions or trouble setting up? Shoot me an email at `trijeetm@gmail.com`.

#### Useful resources
(http://ionicframework.com/getting-started/)
(https://nodejs.org/)
