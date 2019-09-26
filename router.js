const express = require('express');
const fs = require('fs');
const router = new express.Router();
const Controller = require('./controller');

const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));

const instController = new Controller(users);

router.get('/users', instController.getUsers.bind(instController));

router.get('/users/:id', instController.getUser.bind(instController));

// router.post('/users', instController.addUser.bind(instController));


router.post('/users',  (req, res) => {
    const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    const user = {};
    user.id = users.length +1;
        user.name = req.body.name;
        // `${req.body.id} : ${users.length + 1}`,
        // name : req.body.name

    // const user = req.body;
    console.log(user);
    const usersNew = fs.writeFile('./usersData.json', JSON.stringify(user), (err => {
        if(err) throw err;
        // res.status(404);
        console.log('Записали нового');
    }) );
    //
    res.send(usersNew);
});


module.exports = router;
// const Controller = require('./controller');
//
// module.exports = (req,res,next) => {
//     const app = require('./app');
//
//     // const cont = require('./controller');
//
//     console.log(req.method);
//
//     if(req.method === 'GET'){
//         const a = new Controller();
//         a.getUser();
//         next(a);
//         // a.getUser();
//         // app.get('/users',  (req, res) => {
//         //     const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
//         //     res.send(users);
//         // });
//     }
//
//     if(req.method === 'POST'){
//         res.body = 'ssssss';
//         res.send(res.body);
//     }
//
//     return next();
// };


// module.exports = router;
