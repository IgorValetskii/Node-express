const Controller = require('./controller');
const bodyParser = require('body-parser');
const express = require('express');
const router = new express.Router();
// router.use('/users', bodyParser );
const instController = new Controller();

router.use('/users', bodyParser.urlencoded({ extended: false }));
router.use('/users', bodyParser.json());
// function router(app) {
//     app.route('/users')
//         .get(instController.getAllUsers.bind(instController))
//         // .get(instController.getUser.bind(instController))
//         .post(instController.addUser.bind(instController))
//         .put(instController.addUser.bind(instController))
// }

router.get('/users', instController.getAllUsers.bind(instController));
//
// router.get('/users/:id', instController.getUser.bind(instController));
//
router.post('/users', instController.addUser.bind(instController));
// router.get('/users', function(req, res) {
//     res.send('Birds home page');



module.exports = router;

