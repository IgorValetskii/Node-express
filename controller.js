class Controller{
        consctructor(){
            // this.getUser()

        }

        getUser(){
            const app1 = require('./app');
            const fs = require('fs');
            const bodyParser = require('body-parser');
            app1.get('/users',  (req, res) => {
              const users = JSON.parse(fs.readFileSync('./usersData.json', 'utf8'));
                res.send(users);
                });
            }
    };

module.exports = Controller;
//

