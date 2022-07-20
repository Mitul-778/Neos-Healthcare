let data = require("../data/db.json");
const { writeToFile } = require("../utils/utils");
const path = require("path");

const allUsers = () => {
  return new Promise((res, rej) => {
    res(data.users);
  });
};

const create = (user) => {
  return new Promise((res, rej) => {
    let newUser = {
      id: Math.floor(4 + Math.random() * 1000),
      ...user,
    };
    data.users.push(newUser);
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(user);
  });
};

const readById = (id) => {
  return new Promise((res, rej) => {
    const user = data.users.find((e) => e.id == id);
    res(user);
  });
};

const readByEmail = (email) => {
  return new Promise((res, rej) => {
    const user = data.users.find((e) => e.email === email);
    res(user);
  });
}

const readByPhone = (phone) => {
  return new Promise((res, rej) => {
    const user = data.users.find((e) => e.phone === phone);
    res(user);
  });
}

const update = (id, user) => {
  return new Promise((res, rej) => {
    const pos = data.users.findIndex((e) => e.id == id);
    data.users[pos] = { id, ...user };
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(data.users[pos]);
  });
};

const remove = (id) => {
  return new Promise((res, rej) => {
    let newData = data.users.filter((e) => e.id !== id);
    data.users = newData;
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(newData);
  });
};

module.exports = { allUsers, create, readById, readByEmail, readByPhone, update, remove };
