class OrganizerTask {
    constructor(id, title, description, status, assignee) {
        this.id = parseInt(id);
        this.title = title;
        this.description = description;
        this.assignee = assignee;

        let validStatuses = ["pending", "in progress", "completed"];
        if (validStatuses.includes(status.toLowerCase())) {
            this.status = status.toLowerCase();
        } else {
            throw new Error(`Invalid status: ${status}`);
        }
    }
}

let taskList = [];


function addTask(id, title, description, status, assignee) {
    let idTaskExist = taskList.some((task) => task.id === id);
    if (!idTaskExist) {
        let newTask = new OrganizerTask(id, title, description, status, assignee);
        taskList.push(newTask);
        alert(`Task ${newTask.title} added with ID ${newTask.id}`);
    } else {
        alert("Task with this ID already exists");
    }
}


function removeTask(id) {
    const index = taskList.findIndex((task) => task.id === parseInt(id));
    if (index !== -1) {
        const removedTask = taskList.splice(index, 1)[0];
        alert(`Task ${removedTask.title} removed`);
        return true;
    }
    alert("Task not found");
    return false;
}


function filterByStatus(status) {
    return taskList.filter((task) => task.status === status.toLowerCase());
}


function filterByAssignee(assignee) {
    return taskList.filter((task) => task.assignee === assignee);
}


function updateTaskStatus(taskId, newState) {
    let validStatuses = ["pending", "in progress", "completed"];
    if (!validStatuses.includes(newState.toLowerCase())) {
        alert("Invalid status. Use 'pending', 'in progress', or 'completed'.");
        return;
    }

    const task = taskList.find((task) => task.id === parseInt(taskId));
    if (task) {
        task.status = newState.toLowerCase();
        alert(`Task ${task.title}'s status changed to ${newState}.`);
    } else {
        console.error("Task not found.");
    }
}


addTask(1, "Create Database", "Create a database for the organizer", "pending", "John");
addTask(2, "Add Tasks", "Add tasks to the database", "in progress", "Mary");
addTask(3, "Finalize Project", "Finalize all pending tasks", "completed", "John");


alert("All tasks:\n" + JSON.stringify(taskList, null, 2));


alert("Tasks assigned to John:\n" + JSON.stringify(filterByAssignee("John"), null, 2));
alert("Tasks assigned to Mary:\n" + JSON.stringify(filterByAssignee("Mary"), null, 2));


updateTaskStatus(2, "completed");


removeTask(2);

alert("Updated tasks:\n" + JSON.stringify(taskList, null, 2));
