# Hair Goals

This collaborative project grew out of my trials and tribulations trying to grow my hair over the pandemic! The initial version has been built over 5 days by myself ([Giulia Galastro](https://github.com/Astra-Gal)), [Angelo Di Massimo](https://github.com/ange47rm), [Laura Almasi](https://github.com/Iyolya) and [Rhiannon Wilson](https://github.com/RhiannonAW123).

### Firstly, what's with the horse on the front page?!
Human hair is political, and we were keen to avoid making anyone feel excluded on the basis of race or gender... also, this horse has great hair! The mobile version features a hare instead because puns.

## The Brief

* A user can enter a length measurement, and see a projection (initially as a string) of how their hair will grow over time based on the average one centimetre a month
* A user can specify their goal length, and the app will calculate (based on the average growth rate) how long it will take to reach the goal
* A user can add update their hair length after taking new measurements, and the app will adjust how long it will take to reach their goal

## Future Directions
We are keen to keep working on the project, drawing on user research conducted on the [Long Hair Community Forum](https://forums.longhaircommunity.com/showthread.php?t=153831). Some examples of things in the pipeline...
* Create a React Native version of the web app
* Make the formula for calculating length predictions more accurate, as the user enters more data
* Add data visualisation of the hair growth



----------

## Running the app
Hair Goals is a full stack application. The JavaScript frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and the Java backend uses [Spring Boot](https://start.spring.io/) with an [H2 database](https://www.h2database.com/html/main.html).

### Backend

```zsh
cd hair_goals_backend
```
Open in an IDE (e.g. IntelliJ). Right-click on HairGoalsBackendApplication.java (in src/main/java/com.codeclan.example.hair_goals_backend) and select 'Run'. The server will be running on localhost:8080.

### Frontend

```zsh
cd hair_goals_react_frontend
npm install
npm start
```
The app will open in the browser on localhost:3000. Be sure to resize the window to see the mobile view!
