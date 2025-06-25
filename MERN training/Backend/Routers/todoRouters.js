const express = require('express');
const todoRoute = express.Router();
const { getTodo, postTodo, putTodo, deleteTodo} = require('../Controllers/todoController');
todoRoute.get('/get', getTodo);
todoRoute.post('/post', postTodo);  
todoRoute.put('/put/:id', putTodo);
todoRoute.delete('/delete/:id', deleteTodo);

module.exports = todoRoute;