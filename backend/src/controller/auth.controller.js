const User = require("../model/user.model");
const { getReqData } = require("../utils/utils");

const logIn = async (req, res) => {
  try {
    const user = getReqData(req);
    const { email, password } = JSON.parse(user);
    const check_user = await User.readByEmail(email);
    if (check_user.password === password) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Login Success" }));
    }else{
        res.writeHead(500, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ message: "Wrong Email or Password" }));
    }
  } catch (error) {
    console.log("Error",error)
  }
};

module.exports = logIn;
