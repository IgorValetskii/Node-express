const fs = require('fs');
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

    static addUser(req,res){
       const user = req.body;
       const usersNew = fs.writeFile('./usersData.json', JSON.stringify(user), (err => {
            if(err) return res.status(404);
            res.send(err);
        }) );
       return usersNew;
    }
}

module.exports = Service;