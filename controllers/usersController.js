const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.showUsers = async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Error getting users" });
    }
  };

exports.createUser = async (req, res) => {

    try {
        
        const {body} = req;
        const {username, name, password} = body;

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        const user = new User({
            username,
            name,
            passwordHash
        });

        const savedUser = await user.save();

        res.status(201).json(savedUser);

    } catch (error) {

        res.status(400).json(error);
    }
    
};

