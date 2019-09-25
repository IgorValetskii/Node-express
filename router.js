const Controller = require('./controller');

module.exports = (req,res,next) => {
    const app = require('./app');

    // const cont = require('./controller');

    console.log(req.method);

    if(req.method === 'GET'){
        const a = new Controller();
        a.getUser();
        next(a);
        // a.getUser();
        // app.get('/users',  (req, res) => {
        //     const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
        //     res.send(users);
        // });
    }

    if(req.method === 'POST'){
        res.body = 'ssssss';
        res.send(res.body);
    }

    return next();
};


// module.exports = router;
