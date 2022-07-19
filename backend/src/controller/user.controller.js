const User = require("../model/user.model");
const { getReqData } = require("../utils/utils");

const getAllUsers = async (req, res) => {
  try {
    const users = User.allUsers();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log("Error", error);
  }
};

const createUser = async (req, res) => {
  try {
    let user = await getReqData(req);
    let userData = await User.create(JSON.parse(user));
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(userData));
  } catch (error) {
    console.log("Error", error);
  }
};

const updateUser = async (req, res, id) => {
  try {
    const user = await User.readById(id);
    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "User Not Found" }));
    }
    const userData = await getReqData(req);
    const { name, email, password } = JSON.parse(userData);
    const updatedUser = {
      name: name || user.name,
      email: email || user.email,
      password: password || user.password,
      updatedAt: new Date(),
    };
    const newUpdatedUser = await User.update(id, updatedUser);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newUpdatedUser));
  } catch (error) {
    console.log("Error", error);
  }
};

const removeUser = async (req, res, id) => {
  try {
    await User.remove(id);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User Deleted" }));
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { getAllUsers, createUser, updateUser, removeUser };
