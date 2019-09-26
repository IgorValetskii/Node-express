const fs = require('fs');
const shortid = require('shortid');
class Service {

   static getUsers(users){
      return users
    }

    static getUser(req,res,users){
        const user = users.find(c => c.id === req.params.id);
        if(!user){
            res.status(404).send('The user with the given ID was not found')
        }
        return user;
    }

    static addUser(req){

        const user = {};
        user.id = shortid.generate();
        user.name = req.body.name;

        console.log(user);
        const usersNew = fs.writeFile('./usersData.json', JSON.stringify(user), (err => {
            if(err) throw err;
            // res.status(404);
            console.log('Записали нового');
        }) );
        return usersNew;
    }
}

module.exports = Service;
