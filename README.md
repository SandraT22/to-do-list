Describe: function TaskList()

Test: This test will see if the constructor function for the task works.
Code: let taskOne = new Task("Wash Dishes", "6/13/22");
Expected Output: taskOne; > (taskName: Wash Dishes, taskDate: 6/13/22)

Test: Test will see if the task list mock database we made exists. 
Code: TaskList;
Expected Output: >ƒ TaskList() {
  this.tasks = {};
  this.currentId = 0;
}

Describe: TaskList.prototype.addTask

Test: This test will let us know if the addTask prototype that we created will add a task to the TaskList.
Code: TaskList.addTask(taskOne);
Expected Output: TaskList; > 
{
  "tasks": {
    "1": {
      "taskName": "wash dishes",
      "dueDate": "6/13/22",
      "completionStatus": false,
    }
  },
  "currentId": 1
}

Describe: TaskList.prototype.assignId

Test: This test will tell us if we have assigned an ID to the new task. 
Code: TaskList.addTask(taskOne);
Expected Output: 
{
  "tasks": {
    "1": {
      "taskName": "wash dishes",
      "dueDate": "6/13/22",
      "completionStatus": false,
      id: 1,
    }
  },
  "currentId": 2
}

Describe: TaskList.prototype.deleteTask

Test: This will test if we can delete a task from TaskList.
Code: TaskList.deleteTask(1);
Expected Output: >ƒ TaskList() {
  this.tasks = {};
  this.currentId = 0;
}
