//comment
//Empty array to hold todo list
let myToDoList = [
    {
        title: 'wash car',
        details: 'need to wash care before date',
        dueDate: '12/12/22',
    },
    {
        title: 'do laundry',
        details: 'need to do 3 loads of laundry',
        dueDate: '10/5/22',
    },
    {
        title: 'work out',
        details: 'need to run',
        dueDate: '10/3/22',
    }
];
//creates remove button
const removeBtn = document.createElement('button');
//todo tile object constructor
function ToDoTile(title, details, dueDate) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
}
//adds object to myToDoList array
function addToDoTileToArray() {
    let a = document.getElementById('form-title').value;
    let b = document.getElementById('form-details').value;
    let c = document.getElementById('form-dueDate').value;

    if (a !== '' && b !== '' && c !== '') {
        myToDoList.push(new ToDoTile(a, b, c));
        displayToDoList();
    } else {
        alert('Entry must be completely filled out!');
    }
}
//Using DOM to display list of things to do
const DOMtodoList = document.getElementById('todo-list');

function displayToDoList() {
    DOMtodoList.innerHTML = '';

    for (let i = 0; i < myToDoList.length; i++) {
        removeBtn.innerHTML = 
        `<button class="remove-btn" onclick="removeEntry(${i})">Delete</button>`;
    
        const toDoTile = document.createElement('div');
    toDoTile.classList.add('content-row');
    toDoTile.innerHTML =

         `<div>${myToDoList[i].title}</div>
        <div>${myToDoList[i].details}</div>
        <div>${myToDoList[i].dueDate}</div>`

    toDoTile.append(removeBtn.cloneNode(true));
    DOMtodoList.append(toDoTile);
    }
}

displayToDoList();

function removeEntry(i) {
    myToDoList.splice(i, 1);
    displayToDoList();
}