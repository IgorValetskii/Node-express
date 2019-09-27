const fs = require('fs');
const bodyParser = require('body-parser');
const shortid = require('shortid');

class Service {
    constructor() {
        this.users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
    }

    getAllUsers() {
        return this.users;
    }

    // getUser(req, res) {
    //     const user = this.users.find(c => c.id === req.params.id);
    //     if (!user) {
    //         res.status(404).send('The user with the given ID was not found')
    //     }
    //     return user;
    // }

    addUser(req, res) {
        console.log(req.body);
        const id = Math.floor (Math.random() * 1000);
        const user = {};
        user.id = id;
        // user.id = shortid.generate();
        user.name = req.body.name;

        this.users.push(user);
        this.updateJSONFile(this.users, res);
    }

    updateUser(req,res){

        this.users.map(el =>{
            if(el.id === req.body.id) {
                el.name = req.body.name;
            }
        });
        this.updateJSONFile(this.users,res)
    }

    updateJSONFile(users, res) {
        fs.writeFile('./usersData.json', JSON.stringify(users), err => {
            if (err) return res.status(404).send(err);
            res.send(users);
        })

    }
}

module.exports = Service;
