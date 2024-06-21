function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    const prioritySelect = document.getElementById('priority');
    const priority = prioritySelect.value;

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');
        const dateAdded = new Date().toLocaleString();

        newTask.className = `list-group-item d-flex justify-content-between align-items-center priority-${priority}`;
        newTask.innerHTML = `
            ${taskText} <span class="badge bg-primary rounded-pill">${dateAdded}</span>
            <div>
                <button class="btn btn-success btn-sm me-2" onclick="completeTask(this)">Complete</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
            </div>
        `;

        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const completedList = document.getElementById('completed-list');
    const dateCompleted = new Date().toLocaleString();

    taskItem.classList.add('completed');
    taskItem.innerHTML = `
        ${taskItem.textContent} <span class="badge bg-secondary rounded-pill">${dateCompleted}</span>
    `;

    completedList.appendChild(taskItem);
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
