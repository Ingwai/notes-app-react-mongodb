const { port } = require('./config');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

//db
require('./db/mongoose');

// routes
app.use('/', apiRouter);

// server
app.listen(port, () => {
	console.log('serwer słucha http://localhost:' + port);
});
