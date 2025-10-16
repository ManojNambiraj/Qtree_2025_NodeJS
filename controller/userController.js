const User = require("../model/userModel");

const controller = {
  async createUser(req, res) {
    try {
      const { name, age, email, mobile, password } = req.body;

      const createdUser = await User.create({
        name,
        age,
        email,
        mobile,
        password,
      });

      res
        .status(200)
        .json({ message: "User Created successfully", data: createdUser });
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  async users(req, res) {
    try {
       const usersData = await User.find()

       res.status(200).json({ data: usersData });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  },

  async user(req, res){
     try {
       
        const { id } = req.params;

        const userData = await User.findOne({_id: id})

        res.status(200).json({data: userData})

     } catch (error) {
       res.status(500).json({ message: "Something went wrong" });
     }
  }
};

module.exports = controller;
