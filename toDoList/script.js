
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage
    loadTasks();

    // Add task event
    addTaskBtn.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTasks();
            taskInput.value = '';
        }
    });

    // Add task function
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('dblclick', function () { // Double click to edit task
            editTask(li);
        });
        taskList.appendChild(li);
    }

    // Edit task function
    function editTask(taskElement) {
        const currentText = taskElement.textContent;
        const newText = prompt('Edit task:', currentText);
        if (newText !== null && newText.trim() !== '') {
            taskElement.textContent = newText.trim();
            saveTasks();
        }
    }

    // Load tasks from local storage function
    function loadTasks() {
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            const tasksArray = JSON.parse(tasks);
            tasksArray.forEach(task => {
                addTask(task);
            });
        }
    }

    // Save tasks to local storage function
    function saveTasks() {
        const tasksArray = [];
        document.querySelectorAll('ul#taskList li').forEach(task => {
            tasksArray.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
});
