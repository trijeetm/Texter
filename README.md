# Texter

Mobile and web app to mass message lists and send direct messages to people using the Twilio API.


 
## Setup
The Texter project has two subdirectories, one containing the app and the other containing the command line tool. Clone the repository, fire up your terminal, cd into the `Texter` directory and follow the instructions below to setup the environment.

The project requires node to run, so if you don't have node installed on your machine (run `node --version` in your terminal to check if node is installed), head over [here](https://nodejs.org/download/). 


#### App
To run the app, you need to configure the node server.
```bash
$ cd app/tree-texter-server
$ sudo npm install
```
Before we proceed, we need to provide an AccountSID and AuthToken for the Twilio API. From the `tree-texter-server/` directory, and open `twilio/auth.js` in your favorite text editor, and replace `ACCOUNT_SID` and `AUTH_TOKEN` with your Twilio account sid and auth token respectively.
Once we have provided the authentication details, the server is ready to go.
```bash
$ node app.js
```
The Express server should be now listening on localhost:3000.

The client-side of the app is built using the Ionic framework, which is an hybrid mobile app SDK. If you don't have Ionic installed on your machine, run the following command to set it up.
```bash
npm install -g cordova ionic
```
Once you have Ionic set up, you're ready to either serve up Texter as web-app, or build out a native mobile app and test in on device / simulator. From the directory into which you cloned the repository:
```bash
$ cd app/tree-texter-client
$ ionic serve
```
The web-app should be now serving on localhost:8100.

#### Command Line Tool
Before we proceed, we need to provide an AccountSID and AuthToken for the Twilio API. Open `auth.js` in your favorite text editor, and replace `ACCOUNT_SID` and `AUTH_TOKEN` with your Twilio account sid and auth token respectively.
To run the command line tool, simply go into the directory and run the node app.
```bash
$ cd cli/
$ node texter.js
```

## Issues?
Have questions or trouble setting up? Shoot me an email at `trijeetm@gmail.com`.

#### Useful resources
Ionic framework: (http://ionicframework.com/getting-started/)
Node.js: (https://nodejs.org/)
