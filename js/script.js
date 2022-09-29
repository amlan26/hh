//define UI element

let form = document.querySelector('#task_form');
let tasks = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_button');
let filter = document.querySelector('#task_filter');
let takeInput = document.querySelector('#newtask');

//define event listener
form.addEventListener('submit', addTask);  
tasks.addEventListener('click', removeTask);
//define function

//add task
function addTask(e){
    if(takeInput.value==''){
        alert('Add a Task!');
    }
    else{
        //create li elemnt
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        //link.setAttribute('href', '#');
        //link.innerHTML= 'x';
        //i.appendChild(link);
        tasks.appendChild(li);
        taskInput.value= '';
    }
    e.preventDefault();
}

// remove task
function removeTask(e){
    console.log(e.target);
}