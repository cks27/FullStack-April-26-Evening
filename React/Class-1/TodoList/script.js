const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const root = ReactDOM.createRoot(document.getElementById("root"));

const todos = ["Learn Swimming", "Learn React", "Buy Groceries"];

/*
# Resources

1. https://medium.com/@mibatman01/use-react-using-the-cdn-link-3515a576ebcd

*/

function render() {
    ul.innerHTML = '';
    for (let todo of todos) {
        const li = document.createElement('li');
        li.innerText = todo;
        ul.append(li);
    }
}

function addTodo(todo) {
    todos.push(todo);
    render();
    renderUsingReact();
}

function renderUsingReact() {
    const liList = [];
    for (let todo of todos) {
        const li = React.createElement('li', {}, todo);
        liList.push(li);
    }

    const ul = React.createElement('ul', {}, ...liList);
    root.render(ul);
}

button.addEventListener('click', function () {
    const todoText = input.value;
    addTodo(todoText);
});

render();
renderUsingReact();
