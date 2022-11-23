const express = require('express');
//const app = require('../app');
const router = express.Router();
const todos = require('../models/express-models/todos');
module.exports = router;

  //slug always starts with route
  //when we make request to user =>
router.get('/', async(req, res, next) => {
 try{
  const requestUsers = await todos.listPeople();
  res.send(requestUsers);
 }catch(err){
    next(err);
    console.log('error!');
 }
})

  //get list of tasks for user using list function
router.get('/:name/tasks', async(req, res, next) => {
  try{
    const gettingList = await todos.list(req.params.name);
    res.send(gettingList);
  }catch(err){
    next(err);
    console.log('error!');
  }
})

  //create a new task using add function
router.post('/:name/tasks', async(req, res, next) => {
  try{
    const newTask = await todos.add(req.params.name, req.body); //req.body is the task
    res.status(201).send(req.body); //we decide what status to send with it and send only task cuz we sent other above
  }catch(err){
    next(err);
  }
})

  //respects pre exisiting completition status
router.post('/:name/tasks', async(req, res, next) => {
  try{

    res.status(201).send()
  }catch(err){
    next(err);
  }
})

  //error handling responds with 404 if user doesnt exist
//if it doesnt exist respond with an error (so use a built in next(err))
//if todo doesnt contain anything, empty array then respond with an error (just like above)

  //put makes a task complete, using the complete function
router.put('/:index', async(req, res, next) => {
  try{
    const taskComplete = await todos.complete()
    req.send();
  }catch(err){
    next(err);
  }
})

  //removes a specific task, using remove function
router

