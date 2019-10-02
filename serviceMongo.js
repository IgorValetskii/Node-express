const fs = require('fs');
const mongoose = require('mongoose');

class ServiceMongo {
    constructor() {
        this.userSchema = new mongoose.Schema({
            name: String,
            id: Number
        });

        this.User = mongoose.model('User', this.userSchema);
    }

    getAllUsers(req,res) {

        const a = async b => {

            res.send(await this.User.find({}, (err) => {
                if (err) return console.log(err);
            }));
        };
        a();
    }

    getUser(req, res) {
        const a = async b =>{

            res.send(await this.User.find({id : `${JSON.parse(req.params.id)}`}, (err) => {
                if(err) return console.log(err);
            }))
        };
        a();

    }

    addUser(req, res) {
        const a = async b => {

            const name = req.body.name;
            const id = Math.floor (Math.random() * 1000);
            const user = new this.User({name : `${name}`, id : `${id}`});

            user.save();
            res.send(user);
        };
        a();
    }

    updateUser(req,res){

        this.users.map(el =>{
            if(el.id === req.body.id) {
                el.name = req.body.name;
            }
        });
        this.updateJSONFile(this.users,res)
    }


    deleteUser(req,res){

            const user = this.User.findOneAndDelete({id: `${JSON.parse(req.params.id)}`}, (err,doc) =>{
                if(err) return console.log(err);
                res.send(doc);
            });
    }


    updateJSONFile(users, res) {
        fs.writeFile('./usersData.json', JSON.stringify(users), err => {
            if (err) return res.status(404).send(err);
            res.send(users);
        })

    }
}

module.exports = ServiceMongo;
