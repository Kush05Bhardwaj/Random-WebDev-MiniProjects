const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const count = document.getElementById("count");

function updateCount() {
    const total = list.children.length;
    const completed = document.querySelectorAll(".completed").length;
    count.innerText = `Completed: ${completed} / ${total}`;
}

function addTask() {
    const text = input.value.trim();

    if (text === "") {
        alert("Enter a task!");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = text;

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = () => {
        span.classList.toggle("completed");
        updateCount();
    };

    // edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
        const newText = prompt("Edit task:", span.innerText);
        if (newText !== null && newText.trim() !== "") {
            span.innerText = newText;
        }
    };

    // delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = () => {
        li.remove();
        updateCount();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);

    list.appendChild(li);

    input.value = "";
    updateCount();
}