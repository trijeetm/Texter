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
The client-side of the app is built using the Ionic framework, which is an hybrid mobile app SDK. If you don't have Ionic installed on your machine, run the following command to set it up.
```bash
npm install -g cordova ionic
```

#### Command Line Tool
To run the command line tool, simply go into the directory and run the node app.
```bash
$ cd cli/
$ node texter.js
```