const tarefasForm = document.querySelector("#tarefas-form");
const tarefaInput = document.querySelector("#tarefa-input");
const tarefaList = document.querySelector("#tarefas-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
//funções
const saveFazer = (text) => {
    const paraFazer = document.createElement("div");
    paraFazer.classList.add("paraFazer");

    const paraFazerTitle = document.createElement("h3");
    paraFazerTitle.innerText = text;
    paraFazer.appendChild(paraFazerTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-paraFazer")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    paraFazer.appendChild(doneBtn)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-paraFazer")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    paraFazer.appendChild(deleteBtn)

    tarefaList.appendChild(paraFazer);
};

//eventos
tarefasForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = tarefaInput.value;

    if (inputValue) {
        console.log(inputValue);
    }

});