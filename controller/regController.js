const bcrypt = require('bcrypt');
const Client = require("../models/clientModel.js");

const regController = async (req, res) => {
  let { firstName, lastName, email, pass, telNumber , admin} = req.body;

  if (!firstName || !lastName || !pass || !email) {
    return res.status(400).json({
      status: 1,
      message: "FirstName,LastName, password,and email are required!",
    });
  }

  if (pass.length < 8) {
    return res
      .status(400)
      .json({ status: 1, message: "Enter a password of 8 or more characters" });
  }

  firstName = firstName.trim();
  lastName = lastName.trim();
  email = email.trim();
  if (telNumber) telNumber = telNumber.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ status: 1, message: "Invalid email" });
  }
  console.log('passed')

  const duplicate = await Client.findOne({ email }).exec();
  if (duplicate) {
    return res
    .status(400)
    .json({ status: 1, message: "Email has already been used " });
  }
  
  pass = await bcrypt.hash(pass, 15);

  const client = await Client.create({ firstName, lastName, email, pass, telNumber, admin });
  console.log('created');

  res.status(201).json({ status: 0, message: "New user created",user:{firstName,lastName,email,telNumber,admin} });
};

module.exports = regController;
