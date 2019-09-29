const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// router.use('/users', bodyParser.urlencoded({ extended: false }));
// router.use('/users', bodyParser.json());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Pragma, Expires, If-Modified-Since, testAutodata");
//     return next();
// });

app.use(router);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


