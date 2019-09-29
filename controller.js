const Service = require('./service');
const service = new Service();

class Controller {

    getAllUsers(req, res) {
        res.send(service.getAllUsers());
    }

    getUser(req, res) {
        res.send(service.getUser(req, res));
    }

    addUser(req, res) {
        service.addUser(req, res);
    }

    updateUser(req,res){
        service.updateUser(req,res);
    }

    deleteUser(req, res){
        service.deleteUser(req,res)
    }

}

module.exports = Controller;
