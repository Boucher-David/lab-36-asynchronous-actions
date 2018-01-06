401 JS --  Lab 36 Full Stack Crud
===
# Guide

Make sure to run 'npm install' and create a .env. Then run the following, based upon your needs: 

"npm run dev-backend"     -> starts node.js server using nodemon. Use this for all server-side development.

"npm run dev-frontend"    -> starts webpack dev server for the front end. 

"npm run dev-db"          -> You will need to run this in a separate terminal to run mongodb.

"npm run prod"            -> Simulate production app. Useful for testing everything running together.

NODE_ENV will be set to either 'development' or 'production'. 

To run locally, you will need to create a .env file in root with the following properties:

BACKEND_PORT=8000

WEBPACK_PORT=3000

MONGODB_URI=

These ports can be anything you want, just different from each other (and not the mongodb port 27017).

# Mongoose Trouble?

"pgrep mongo". Get the ID, then "kill ID" to terminate any open mongo connections that are hidden. 






===
## Submission Instructions
  * Work in a fork of this repository
  * Work in a branch on your fork
  * Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-duncan`
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas
  * Submit a question, observation, and how long you spent on canvas  

## Requirements  
#### Configuration  

##### backend/
* copy your lab-14 or comprable api into into a backend directory
##### frontend/
* **README.md** -- with a documention about your lab
* **.babelrc** -- with all dependencies and dev-dependencies 
* **.eslintrc** -- with the class .eslintrc file
* **.gitignore** -- with a robust gitignore
* **.eslintignore** -- with the class .eslintignore
* **yarn.lock** -- with the yarn lockfile
* **package.json** -- with all dependencies and dev-dependencies 
* **webpack.config.js** -- with webpack config
* **src/** -- containing the front end code
* **src/main.js** -- renders the app
* **src/style** -- containing your sass
* **src/style/main.scss** -- for importing and including reset and base
* **src/style/_vars.scss** -- sass variables
* **src/style/_reset.scss** -- sass reset 
* **src/style/_base.scss** -- base styles 
* **src/style/_layout.scss** -- layout styles 
 
#### Feature Tasks 
* Create a frontend for your lab-14-two-resource-api.
 * You can also choose to to instead use a comprable REST api that does not have auth (must permit full CRUD)
* You are only required to create CRUD opperations for a single resource of your bakend
* Use react/redux best practices
* Add validation in your redux routers
* Add reporter and thunk middleware to your redux store
* make async action creators for making ajax request to your backend
* make sync action creators from updating your app store

#### Test
* Test your redux reducers 
* Test your util methods

## Bonus 2pts
* Create full crud for two resources 

####  Documentation  
Write a description of the project in your README.md
