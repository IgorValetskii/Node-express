const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const router = require('./router');


const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Pragma, Expires, If-Modified-Since, testAutodata");
    return next();
});

app.use( router);

// app.use(require('./router'));
// app.use(require('./controller'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// module.exports = app;
