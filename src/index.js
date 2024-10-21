const express = require('express');
const { createServer } = require('http');
const realtimeServer = require('./realtimeServer.js');
const path = require('path');
const cookieParser = require('cookie-parser'); // In node a cookie parser is require for read cookies.

const app = express();
const server = createServer(app);

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser()); // Use cookie parser

// Routes
app.use(require('./routes/index.js'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
server.listen(app.get('port'), () => {
	console.log(`Server running on port ${app.get('port')}`);
});

// Socket
realtimeServer(server);
