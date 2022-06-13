// Business Logic for task list

function TaskList() {
  this.tasks = {};
  this.currentId = 0;
}


TaskList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

TaskList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};

TaskList.prototype.taskComplete = function(id) {
  console.log(this);
}

//Business Logic for task

function Task(taskName, dueDate) {
  this.taskName = taskName;
  this.dueDate = dueDate;
}


console.log(TaskList);

let taskList = new TaskList();

let taskOne = new Task("wash dishes", "6/13/22");

taskList.addTask(taskOne);

taskList.tasks[0];

console.log(taskList.tasks["1"])

taskList.tasks["1"].completionStatus = false;

console.log(taskList.tasks["1"])

//UI Logic

