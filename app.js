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
// router(app);


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

start();
