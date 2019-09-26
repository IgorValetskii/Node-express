const service = require('./service');
class Controller{
        constructor(users){
            this.users = users;
        }
        getUsers(req, res){
           res.send(service.getUsers(this.users));
        }

        getUser(req,res){
            res.send(service.getUser(req,res,this.users));
        }

        addUser(req,res){
            res.send(service.addUser(req));
        }

            }

module.exports = Controller;
//

