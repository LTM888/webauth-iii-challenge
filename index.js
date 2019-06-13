const express = require('express');

const server = express();

server.use(express.json());

// Import Routes
const authRoute = require('./routes/auth');


// Route Middleware
server.use('/api/user', authRoute);

server.listen(3000, () => console.log('Bitch I am up'));