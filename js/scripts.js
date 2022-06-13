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
  return taskList.tasks[id].completionStatus = true;
}

//Business Logic for task

function Task(taskName, dueDate) {
  this.taskName = taskName;
  this.dueDate = dueDate;
  this.completionStatus = false;
}

//UI Logic

console.log(TaskList);
let taskList = new TaskList();
let taskOne = new Task("wash dishes", "6/13/22");
taskList.addTask(taskOne);
taskList.tasks[0];
console.log(taskList.tasks["1"])





// Order of operations
// Display list of existing tasks (include 3 placeholders for demonstration)

// Display input field at top of task list - ALWAYS
// If user enters text in input field and submits the form (containing the input field), JS will:
// --> Obtain the input's value
// --> Create a new task with the input value as the task's name
// --> Append that task (it's name) to the <ul> as a new <li> with an ID value that uses the task's ID
function attachContactListeners() {
  $('ul').on("click", "li", function() { // test to see if it detects click
    console.log("this was clicked", this);
    });
    }

    $(document).ready(function () {
      attachContactListeners();
      $('form').submit(function(event) {
        event.preventDefault();
        const userTaskName = $('#new-task').val();// test to gather user input for task name = complete
        const userDate = $('#new-date').val();// test to gather user input for due date = complete
        console.log(userTaskName);
        console.log(userDate);
        let newTask = new Task(userTaskName, userDate) //test to set user input to new task variable = complete
        
        console.log(newTask)
        console.log(newTask.id)
        
        taskList.addTask(newTask);// test to add the task variable to the task list = complete
        
        $('ul').prepend(`<li id="${newTask.id}">${userTaskName} due on ${userDate}</li>`);// test to make task appear in the ul = complete // test to add id to li = complete
      })
    });
    