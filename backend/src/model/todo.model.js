let data = require("../data/db.json");
const path = require("path");
const { writeToFile } = require("../utils/utils");

const allTodos = () => {
  return new Promise((res, rej) => {
    res(data.todos);
  });
};

const create = (todo) => {
  return new Promise((res, rej) => {
    let newTodo = {
      id: Math.floor(4 + Math.random() * 10),
      ...todo,
    };
    data.todos.push(newTodo);
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(todo);
  });
};

const readById = (id) => {
  return new Promise((res, rej) => {
    const todo = data.todos.find((e) => e.id == id);
    res(todo);
  });
};

const update = (id, todo) => {
  return new Promise((res, rej) => {
    const pos = data.todos.findIndex((e) => e.id == id);
    data.todos[pos] = { id, ...todo };
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(data.todos[pos]);
  });
};

const remove = (id) => {
  return new Promise((res, rej) => {
    let newData = data.todos.filter((e) => e.id !== id);
    data.todos = newData;
    writeToFile(path.join(__dirname, "../data/db.json"), data);
    res(newData);
  });
};

module.exports = { allTodos, create, readById, update, remove };
