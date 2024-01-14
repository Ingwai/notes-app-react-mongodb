const { port } = require('./config');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

//db
require('./db/mongoose');

// body parser
// Content-type: application/json

app.use(bodyParser.json());

// routes
app.use('/api', apiRouter);

// server
app.listen(port, () => {
	console.log('serwer słucha http://localhost:' + port);
});
