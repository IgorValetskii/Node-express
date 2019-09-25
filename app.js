const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Pragma, Expires, If-Modified-Since, testAutodata");
    return next();
});

app.get('/users',  (req, res) => {
    const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    res.send(users);
});

app.get('/users/:id',  (req, res) => {
    const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    const user = users.find(c => c.id === req.params.id);
    if(!user){
        res.status(404).send('The user with the given ID was not found')
    }
    res.send(user);
});

app.post('/users',  (req, res) => {
    const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    const user = {
        id : users.length + 1,
        name : req.body.name
    };
    const usersNew = fs.writeFileSync('./usersData.json', user );
    res.send(usersNew);
});

// app.use(require('./router'));
// app.use(require('./controller'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
