let tasks = {};

/*
  tasks (defined above) will be a place to store tasks by person;
  example:
  {
    person1: [{task object 1}, {task object 2}, etc.],
    person2: [{task object 1}, {task object 2}, etc.],
    etc.
  }
*/

  //creating methods on the object
module.exports = {
  reset: function () {
    tasks = {}; //they're recalling it to do testing
  },

  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: function () {
    return Object.keys(tasks); //tasks is in the array of everything, key value pairs are pushed in, an array with objects inside of them (which are tasks)
  }, //getting names from tasks above

  add: function (name, task) { //to push people into the tasks array
    if(!task.complete){
      task.complete = false;
    }
    if(!tasks[name]){
      tasks[name] = []; //if there is no person already in the array
    }
    tasks[name].push(task); //adding task to person, pushing it into the array with it
  },

  list: function (name) {
    return tasks[name]; //remebers what person with what task
  },

  complete: function (name, idx) {
    if(!tasks[name][idx].complete){
      tasks[name][idx].complete = true;
    }
  },

  remove: function (name, idx) { //idx = index
    tasks[name].splice(idx, 1); //removing task for that person, index # is person
  },
};
