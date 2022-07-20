const Todo = require("../model/todo.model");
const { getReqData } = require("../utils/utils");
const transpoter = require('../configs/mail') 

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.allTodos();
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todos));
  } catch (error) {
    console.log("Error", error);
  }
};

const createTodo = async (req, res) => {
  try {
    let todo_data = await getReqData(req);
    todo_data = JSON.parse(todo_data);
    let todo = await Todo.create({ createdAt: new Date(), ...todo_data });
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todo));
  } catch (error) {
    console.log("Error", error);
  }
};

const updateTodo = async (req, res, id) => {
  try {
    const todo = await Todo.readById(id);
    const todo_data = await getReqData(req);
    const { title, userId, status } = JSON.parse(todo_data);
    const newTodo = {
      id: todo.id,
      title: title || todo.title,
      userId: userId || todo.userId,
      status: status || todo.status,
      createdAt: todo.createdAt,
      updatedAt: new Date(),
    };
    const updatedTodo = await Todo.update(id, newTodo);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(updatedTodo));
  } catch (error) {
    console.log("Error", error);
  }
};

const removeTodo = async (req, res, id) => {
  try {
    const todo = await Todo.readById(id);
    console.log('todo:', todo)
    transpoter.sendMail({
      from : "Todos",
      to : "user@gmail.com",
      subject : "Expiry of Todo",
      html:`
      <center>
      <h1>Your todo is expired. Details are below</h1>
      <p>Title : ${todo.title} </p>
      <p>Status : Expired</p>
      </center>
      `
    })
    await Todo.remove(id);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Todo Deleted" }));
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = { getAllTodos, createTodo, updateTodo, removeTodo };
