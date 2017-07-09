#rating-system-ui

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a simple project to play around with react. It uses create-react-app for the framework and boiler plate.

#Companion Project
This project is designed to work with a companion project that is the backend. The backend does all the filtering, 
sorting and calculations of the averages. This project then pulls that data from a RESTful API that is served up by the 
backend project.

The backend project can be found here: [review system](https://github.com/BrandonDonatoLong/review-system)

###If wanting to run locally. Please install this project before installing and attempting to run this project.

#Tech Stack
The overall Javascript is ES6 (ECMA2015) 

There is some webpack and all of it is wrapped into NPM Scripts that use react-scripts to facilitate spinning up 
a webserver and hosting all the files locally. 

This project was developed and tested using JetBrains Webstorm IDE node version 6.10.2 and npm version 3.10.10

#Instructions to install

1. Clone this repo
2. Run `npm install` from the git root
3. Run `npm run start` from the git root to start up the webserver
4. The npm script should open up a browser and go to localhost:3000 this will point to The Hoxton Hotel page.****