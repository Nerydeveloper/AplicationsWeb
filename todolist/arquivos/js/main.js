// SELEÇÃO DE ELEMENTOS
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const editForm = document.getElementById("edit-form");
const editInput = document.getElementById("edit-input");
const cancelEditDtn = document.getElementById("cancel-edit-btn");

let oldInputValue;

// FUNÇÕES
//estrutura da arrow function = nome , tipo e a função
const saveTodo = (Text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = Text;
    //definindo que o texto sera uma div filha do todo
    todo.appendChild(todoTitle);

    //container btns da lista em si ( finish, edit, remove )
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn)


    todoList.appendChild(todo)

    todoInput.value = "";
    todoInput.focus();
}


// escondendo divs para deixar visivel apenas a de editar
const toggleForms = () => {
    editForm.classList.toggle("hide")
    todoForm.classList.toggle("hide")
    todoList.classList.toggle("hide")
}

const atualizar = (text) => { 
    const todos = document.querySelectorAll(".todo")
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3")

        if(todoTitle.innerText === oldInputValue){
            todoTitle.innerText = text
        }
    })
}


// EVENTOS

// PEGANDO O VALOR DO INPUT
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.value;
    if (inputValue) {
        saveTodo(inputValue)
    }

})

document.addEventListener('click', (e) => {
    //pegando tudo que tem o evento de click
    const targetEl = e.target;

    const parentEl = targetEl.closest("div");
    let todoTitle;

    // verifica se existe e é igual a h3
    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    //finalizando
    if (targetEl.classList.contains("finish-todo")) {

        // o toggle é tipo um if else
        parentEl.classList.toggle("done");
    }

    //excluindo
    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }
    //editar
    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();
        editInput.value = todoTitle
        oldInputValue = todoTitle

    }
});

// cancelar edição
cancelEditDtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForms();
});

// Realizar edição
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if (editInputValue) {
        atualizar(editInputValue)
    }
    toggleForms();
});