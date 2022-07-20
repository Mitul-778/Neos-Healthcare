const http = require("http");
const {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
} = require("./controller/user.controller");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  removeTodo,
} = require("./controller/todo.controller");
const { logIn } = require("./controller/auth.controller");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);

  if (req.url === "/users" && req.method === "GET") {
    getAllUsers(req, res);
  } else if (req.url === "/register" && req.method === "POST") {
    createUser(req, res);
  } else if (req.url.match(/\/users\/\w+/) && req.method === "PATCH") {
    const id = req.url.split("/")[2];
    updateUser(req, res, id);
  } else if (req.url.match(/\/users\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    removeUser(req, res, id);
  } else if (req.url === "/login" && req.method === "POST") {
    logIn(req, res);
  } else if (req.url === "/todos" && req.method === "GET") {
    getAllTodos(req, res);
  } else if (req.url === "/todos" && req.method === "POST") {
    createTodo(req, res);
  } else if (
    req.url.match(/\/todos\/\w+/) &&
    (req.method === "PATCH" || req.method === "PUT")
  ) {
    const id = req.url.split("/")[2];
    updateTodo(req, res, id);
  } else if (req.url.match(/\/todos\/\w+/) && req.method === "DELETE") {
    const id = req.url.split("/")[2];
    removeTodo(req, res, id);
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Listening on port ${PORT} !`));

module.exports = server;
