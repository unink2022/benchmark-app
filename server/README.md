# Benchmark Server

The server was created with express.js

## Setup process

npm i
npm run start

### Important note

Server starts by default on port 5000. I did not use .env so reviewrs would not need to create their own .env file

To change listening port - change line server.js:8 with another port number
Also change ../frontend/package.json:2  with  new port number so proxy works correctly