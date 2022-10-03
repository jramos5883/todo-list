//comment
//Empty array to hold project list
let myProjects = [];
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
myProjects.push(myToDoList);
const removePBtn = document.createElement('button');

function newProjArrConst(projTitle) {
    this.projTitle = projTitle;
}

function addProjToArray() {
  let p = document.getElementById('form-proj').value;

  if (p !== '') {
    myProjects.push(new newProjArrConst(p));
    displayProjList();
  } else {
    alert('Entry must be given a title');
  }
}

const DOMprojList = document.getElementById('proj-list');

function displayProjList() {
  DOMprojList.innerHTML = '';

  for (let i = 0; i < myProjects.length; i++) {
    removePBtn.innerHTML =
    `<button class="remove-Pbtn" onclick="removePEntry(${i})">Delete</button>`;

    const projTile = document.createElement('div');
    projTile.classList.add('proj-row');
    projTile.innerHTML = 

    `<div>${myProjects[i].projTitle}</div>`
    
    projTile.append(removePBtn.cloneNode(true));
    DOMprojList.append(projTile);
  }
}

displayProjList();


//Empty array to hold todo list

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

function removePEntry(i) {
    myProjects.splice(i, 1);
    displayProjList();
}

//honestly having issues connecting the projlist to the todo list and making them interactive with each other.
//I feel like the answers are out there and I am just missing pieces to the project.
//I've decided to move on for a bit and return to this after learning more javascript.