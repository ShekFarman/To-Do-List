// Select elements
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");
const categorySortBtn = document.querySelector("#sort-category");
const prioritySortBtn = document.querySelector("#sort-priority");

let tasks = [];

// Handle form submission to add a task
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const taskName = document.querySelector("#task-name").value;
    const taskDate = document.querySelector("#task-date").value;
    const taskTime = document.querySelector("#task-time").value;
    const taskCategory = document.querySelector("#task-category").value;
    const taskPriority = document.querySelector("#task-priority").value;

    // Create a new task object
    const newTask = {
        name: taskName,
        date: taskDate,
        time: taskTime,
        category: taskCategory,
        priority: taskPriority
    };

    // Add the task to the array
    tasks.push(newTask);

    // Clear the form
    taskForm.reset();

    // Update the task list display
    displayTasks(tasks);
});

// Display tasks in the task list
function displayTasks(taskArray) {
    taskList.innerHTML = ""; // Clear the current task list

    taskArray.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <strong>${task.name}</strong><br>
            Date: ${task.date} | Time: ${task.time}<br>
            Category: ${task.category} | Priority: ${task.priority}
        `;

        taskList.appendChild(taskItem);
    });
}

// Sort by Category
categorySortBtn.addEventListener("click", function () {
    const sortedTasks = [...tasks].sort((a, b) => a.category.localeCompare(b.category));
    displayTasks(sortedTasks);
});

// Sort by Priority
prioritySortBtn.addEventListener("click", function () {
    const sortedTasks = [...tasks].sort((a, b) => a.priority.localeCompare(b.priority));
    displayTasks(sortedTasks);
});
