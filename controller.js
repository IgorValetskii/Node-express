const Service = require('./service');
const service = new Service();

class Controller {

    getAllUsers(req, res) {
        res.send(service.getAllUsers());
    }

    // getUser(req, res) {
    //     res.send(service.getUser(req, res));
    // }

    addUser(req, res) {
        // console.log(req.body.name);
        service.addUser(req, res);
    }

    updateUser(req,res){
        service.updateUser(req,res);
    }

}

module.exports = Controller;
