const input = document.querySelector('input');
const btn = document.querySelector('#add-btn');
const list = document.querySelector('#list');

const todos = JSON.parse(localStorage.getItem('todos') || '[]');

function syncToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodoElement(todo) {
    const li = document.createElement('li');
    li.innerText = todo.task;
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    li.append(input);
    return li;
}

function refreshUI() {
    // Reset the list to empty string
    list.innerHTML = '';
    const fragment = document.createDocumentFragment();
    for (let todo of todos) {
        const element = createTodoElement(todo);
        fragment.append(element);
    }
    list.append(fragment);
}

function addTodo(todo) {
    todos.push(todo);
    refreshUI();
    syncToLocalStorage();
}

function registerEventListeners() {
    btn.addEventListener('click', function () {
        const todoText = input.value;
        addTodo({ id: todos.length + 1, task: todoText, completed: false });
    })
}

function initializeApp() {
    refreshUI();
    registerEventListeners();
}

initializeApp();

/*
1. State (todos) is the single source of truth.
2. UI is derived from state instead of being manually maintained.
3. Adding features (delete, edit, filter, complete) becomes much easier.
4. Bugs caused by state and DOM getting out of sync are reduced.
5. It follows the same architectural pattern used by modern frameworks like React, Vue, and Svelte.
*/




