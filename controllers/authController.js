// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");


// exports.register = async (req, res) => {
//   const { name, email, password } = req.body;

//   const hash = await bcrypt.hash(password, 10);
//   const user = await User.create({ name, email, password: hash });

//   res.json(user);
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   const isMatch = await bcrypt.compare(password, user.password);

//   if (!isMatch) return res.status(400).json({ msg: "Invalid" });

//   const token = jwt.sign(
//     { id: user._id, role: user.role },
//     process.env.JWT_SECRET
//   );

//   res.json({ token });
// };
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // hash password
    const hash = await bcrypt.hash(password, 10);

    // create user with ADMIN role (fix)
    user = await User.create({
      name,
      email,
      password: hash,
      role: "admin"   // ✅ FIXED HERE
    });

    res.json({
      msg: "User registered",
      user
    });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};


// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // create token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      msg: "Login successful",
      token
    });

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};