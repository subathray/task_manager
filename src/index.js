const express = require('express');
const path = require("path");
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set("view engine", "hbs");
app.set("views", viewPath);
app.use(express.static(publicDirPath));

app.get('/users/edit', function (req, res) {
  res.render('addUser', {
    title: 'Edit User'
  });
})


app.get('/users/add', function (req, res) {
  res.render('addUser', {
    title: 'Add user'
  });
})

app.get('/users', function (req, res) {
  res.render('users');
})

app.get('/tasks/edit', function (req, res) {
  res.render('addTask', {
    title: 'Edit Task'
  });
})

app.get('/tasks/add', function (req, res) {
  res.render('addTask', {
    title: 'Add Task'
  });
})

app.get('/tasks', function (req, res) {
  res.render('tasks');
})

app.get('/reg', function (req, res) {
  res.render('reg');
})

app.get('/', function (req, res) {
  res.render('login');
})



app.listen(7000, function () {
  console.log('This server is up on port 7000')
});
