# Benchmark Apptitude Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## My Setup

Windows 10 Node JS v16.14.2 
Project should also work on Mac, but I do not have any Macs to test on

## Setup process

npm uninstall -g create-react-app

npm install -g create-react-app
---
cd backend/

npm i

npm run start
---
cd ../frontend

npm i

npm run start

## Important notes

Server starts by default on port 5000. I did not use .env so reviewrs would not need to create their own .env file

To change listening port - change line server.js:8 with another port number
Also change ../frontend/package.json:2  with  new port number so proxy works correctly

## Time spent on project

7 hours. It took me extra time because it's been a year and smth since I have coded React apps.

## Extras

It was not required in the project, but one of the metric has 0% change value. In my version of the application i have decided to consider its a separate state other than "up" and "down". 