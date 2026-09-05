class Task {
    constructor(title) {
        this.title = title;
        this.isCompleted = false;
    }
}

function updateNoTaskMessage() {
    const taskList = document.getElementById("taskList");
    const noTaskMessage = document.getElementById("noTaskMessage");

    noTaskMessage.style.display = taskList.children.length === 0 ? "block" : "none";
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskTitle = input.value.trim();
    if (taskTitle === "") {
        alert("Please enter a task.");
        return;
    }

    const task = new Task(taskTitle);
    console.log(task);

    const li = document.createElement("li");
    
    const taskText = document.createElement("span");
    taskText.textContent = task.title;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Done";
    completeBtn.onclick = () => {
        li.classList.toggle("completed");
        task.isCompleted = !task.isCompleted;
        console.log(task);
    };
    
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
        li.remove();
        updateNoTaskMessage();
    };

    buttonContainer.appendChild(completeBtn);
    buttonContainer.appendChild(removeBtn);
    
    li.appendChild(taskText);
    li.appendChild(buttonContainer);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
    updateNoTaskMessage();
}

