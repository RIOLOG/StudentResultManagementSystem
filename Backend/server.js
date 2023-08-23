require('dotenv').config()
const http = require('http');
const jwt = require('jsonwebtoken');
const secretKey = "secretkey";


const app = require('./index')
const server = http.createServer(app);
server.listen(process.env.PORT);