const user = require('../Models/userModels');
const bcrypt = require('bcrypt');

exports.getRoute = async (req, res) => {
  const userData = await user.find();
  res.status(200).json({ data: userData });
};

exports.getRouteById=  async (req, res) => {
  const userData =await user.findById(req.params.id);
  res.status(201).json({userData})
}

exports.signupRoute = async (req, res) => {
  const { username, password } = req.body;

  const exist = await user.findOne({ username });
  if (exist) return res.status(401).json({ message: "User already exists" });
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new user({ username, password: hashPassword });
  await newUser.save();

  res.status(201).json({ user: newUser }); 
};
exports.loginRoute = async (req, res) => {
  const { username, password } = req.body;

  const userData = await user.findOne({ username });
  if (!userData) return res.status(401).json({ message: "User not found" });

  const valid = await bcrypt.compare(password,userData.password)
  if(valid) res.status(201).json({message:"login successful"})
  res.status(401).json({message:"passord invalid"})

}

exports.putRoute = async(req, res) => {
  const update =await user.findByIdAndUpdate(req.params.id,req.body)
  if(!update) return res.status(401).json({message:"User not exist"});
   res.status(201).json({update}) 
};

exports.deleteRoute = async (req, res) => {
    const deleteData =await user.findByIdAndDelete(req.params.id);
    if(!deleteData) return res.status(401).json({message:"user not exist"});
    res.status(200).json({message:"user deleted successfully"}); 
};
