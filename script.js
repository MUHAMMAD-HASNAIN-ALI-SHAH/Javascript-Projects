
const addTask = () => {
    let text = document.getElementById("textField").value;
    let taskDiv = document.getElementById("taskDiv");

    let taskList = document.createElement("div");
    let input = document.createElement("input");
    let paragraph = document.createElement("p");
    let i = document.createElement("i");

    paragraph.textContent = text;
    input.type="checkbox";
    i.classList.add("fa-solid", "fa-xmark");

    taskDiv.appendChild(taskList);
    taskList.appendChild(input);
    taskList.appendChild(paragraph);
    taskList.appendChild(i);

    input.addEventListener("click", () => {
        paragraph.classList.toggle("cut")
    })

    i.addEventListener("click", () => {
        taskDiv.removeChild(taskList);
    })

    document.getElementById("textField").value = '';
}