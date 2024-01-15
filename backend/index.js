require('dotenv').config();
const { port } = require('./config');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');
//db
require('./db/mongoose');

// body parser
// Content-type: application/json

app.use(bodyParser.json());

// fix cors

app.use(cors());

// routes
app.use('/api', apiRouter);

// server
app.listen(port, () => {
	console.log('serwer słucha http://localhost:' + port);
});
