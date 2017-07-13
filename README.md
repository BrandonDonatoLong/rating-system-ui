# rating-system-ui

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a simple project to create a react ui and tie it to a backend written with node and express.

# Companion Project
This project is designed to work with a companion project that is the backend. The backend does all the filtering, 
sorting and calculations of the averages. This project then pulls that data from a RESTful API that is served up by the 
backend project.

The backend project can be found here: [review system](https://github.com/BrandonDonatoLong/review-system)

### If wanting to run locally. Please install this project before installing and attempting to run this project.

# Tech Stack
The overall Javascript is ES6 (ECMA2015) 

There is some webpack and all of it is wrapped into NPM Scripts that use react-scripts to facilitate spinning up 
a webserver and hosting all the files locally. 

This project was developed and tested using JetBrains Webstorm IDE and node version 6.10.2 and npm version 3.10.10

# Instructions to install

1. Clone this repo
2. Run `npm install` from the git root
3. Run `npm run start` from the git root to start up the webserver
4. The npm script should open up your default browser and go to localhost:3000 this will point to The Hoxton Hotel page. If you can open up a browser and go to localhost:3000 to load the page.

# Troubleshooting

1. Webpage loads and then displays an error page.

    Fix: Check that the backend companion project is running. Right now there isn't as much error checking as I would like so if the backend is down the frontend doesn't have a catch all error page to tell the user the system has encountered an error.
    
# Critiques:

1. Too many calls to the backend
2. The backend returns the entire review object when it doesn't need to. can be paired down.
3. Some classes used where pure functions would be sufficient.
