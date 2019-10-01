const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(router);

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Igor:1q2w3e4r@cluster0-cmtpz.mongodb.net/users', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        app.listen(3000,  () => {
            console.log('Example app listening on port 3000!');
        });
    }catch (e) {
        console.log(e);
        
    }
}

// router.use('/users', bodyParser.urlencoded({ extended: false }));
// router.use('/users', bodyParser.json());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
//     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Cache-Control, Pragma, Expires, If-Modified-Since, testAutodata");
//     return next();
// });

// app.use(router);

start();

const userSchema = new mongoose.Schema({
    name: String,
    id: Number
});


const User = mongoose.model('user', userSchema);

const newUser = new User({name: 'vasya', id:22});
console.log(newUser);
newUser.save(e => {
    if (e) return console.error(e);
});

// const petya = new User({name:'petya', id:33});
// petya.save((err,petya) =>{
//     if (err) return console.error(err);
//     console.log(petya);
// });
// db.use()
// db.users.insertOne({
//     "name" : "rocky",
//     "id" : 33
// });





