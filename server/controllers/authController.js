import User from "../models/user.js";
import { generateToken } from "../utils/jwt_token.js";
import bycrypt from "bcrypt";

const handleSignup = async (req, res) => {
  try {
    const {email, password, name} = req.body;
    const user = await User.findOne({email});
    if (user) {
      return res.status(400).json({ message: "User already exists!" });
    }
    await User.create({ email, password, name});
    const token = generateToken(email, "user");
    res.status(201).json({ message: "User created successfully!", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const handleLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const user = await User.findOne({ email }); //asynchronous function
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }
    const auth = await bycrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Invalid username or password!" });
    }
    if(user.role != role){
      return res.status(400).json({ message: `you are not a ${role}` });
    }
    const token = generateToken(email, "user");
    res.status(200).json({ message: "User logged in successfully!", token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export { handleSignup, handleLogin };