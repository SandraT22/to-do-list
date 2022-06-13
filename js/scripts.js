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
  $('#' + this.tasks[id]).remove();
  return true;
};

//Business Logic for task

function Task(taskName, dueDate) {
  this.taskName = taskName;
  this.dueDate = dueDate;
  this.completionStatus = false;
}

//UI Logic

let taskList = new TaskList();
let taskOne = new Task("wash dishes", "6/13/22");
taskList.addTask(taskOne);
taskList.tasks[0];

// Order of operations
// Display list of existing tasks (include 3 placeholders for demonstration)

// Display input field at top of task list - ALWAYS
// If user enters text in input field and submits the form (containing the input field), JS will:
// --> Obtain the input's value
// --> Create a new task with the input value as the task's name
// --> Append that task (it's name) to the <ul> as a new <li> with an ID value that uses the task's ID

function attachTaskListeners() {
  $('ul').on("click", "li", function() { // test to see if it detects click = complete
    if (taskList.tasks[this.id].completionStatus === false) {  // test to make task as completed 
      taskList.tasks[this.id].completionStatus = true;
      $('#' + this.id).toggleClass("completed");
      
    } else {
      taskList.tasks[this.id].completionStatus = false;
      $('#' + this.id).toggleClass("completed");
    }
    });
  }



    $(document).ready(function () {
      attachTaskListeners();
      $('form#create').submit(function(event) {
        event.preventDefault();
        const userTaskName = $('#new-task').val();// test to gather user input for task name = complete
        const userDate = $('#new-date').val();// test to gather user input for due date = complete
        let newTask = new Task(userTaskName, userDate) //test to set user input to new task variable = complete
        
        taskList.addTask(newTask);// test to add the task variable to the task list = complete
        
        $('ul').prepend(`<li id="${newTask.id}">Task ID: ${newTask.id} | Task Description: ${userTaskName} | Task Due Date: ${userDate}</li>`);// test to make task appear in the ul = complete // test to add id to li = complete
        
      })
      
      $("form#delete").submit(function(event) {
        event.preventDefault();
        const userTaskIdToDelete = $('#deleteTask').val();

        // if (taskList.tasks.includes(userTaskIdToDelete)) {
        if (taskList.tasks[userTaskIdToDelete]) {
          taskList.deleteTask(userTaskIdToDelete);    // test to delete a task from the list = completed but the user has to know the ID
          $("#deletion-success-container").append("<p>" + "Task Deleted!" + "</p>");    // test to show message letting user know the task was deleted
          $('#' + userTaskIdToDelete).remove();   // test to remove the deleted ID from the displayed list = completed
        } else {
          $("#deletion-success-container").append("<p>" + "No task exists matching that ID" + "</p>");
        }

      })
    });
    