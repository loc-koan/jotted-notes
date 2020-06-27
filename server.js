const express = require('express');
const routes = require('./routes/index');

const app = express();
const PORT = 8080;

app.use(routes);

app.listen(PORT, function () {
    console.log('App is listening on 8080');
});
