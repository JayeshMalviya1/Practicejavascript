document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
    AddTaskbutton(); // Ensure button is initialized after page loads
});

function addTask(){
    const InputTask =document.getElementById("task-input")
      let newTask = InputTask.value.trim();
        if(newTask===""){
            alert("Please Enter a Task")    
            return;}
           
    let taskList =document.getElementById("task-list")
        let  li = document.createElement("li")
            
    let span = document.createElement("span");
        span.textContent = newTask;
             span.onclick = function(){
                 toggleTask(this)
        } 

    let deleteButton = document.createElement("button");
     deleteButton.textContent = "X";
     deleteButton.onclick=function(){
            removeTask(this);
            console.log("delete button clicked")
        }
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    

   
    saveTasks();  
    InputTask.value="";       
}

function toggleTask(task){
    task.classList.toggle("completed");
        saveTasks();
}
function removeTask(button){
     button.parentElement.remove();
        saveTasks();
}
function saveTasks(){
    let tasks =[];
        let TaskList = document.querySelectorAll("#task-list li")
            TaskList.forEach(li =>{
                tasks.push({
                    text:li.firstChild.textContent,
                     completed:li.firstChild.classList.contains("completed")
                })
            })
            localStorage.setItem("tasks",JSON.stringify(tasks))
}
function loadTasks(){
    let tasks =JSON.parse(localStorage.getItem("tasks")) || []
    let taskList = document.getElementById("task-list");
        tasks.forEach(task=>{
            let li = document.createElement("li")
                let span = document.createElement("span")
                    span.textContent = task.text;
                        span.onclick = function(){
                            toggleTask(this);
                        }

  if(task.completed===true) span.classList.add("completed")
      let deleteButton = document.createElement("button");
           deleteButton.textContent = "X";
              deleteButton.onclick=function(){
                removeTask(this);
           }
           li.appendChild(span);
           li.appendChild(deleteButton);
           taskList.appendChild(li);
        })
}
function AddTaskbutton(){   
    const button = document.getElementById("Add-Task")
         button.addEventListener("click",addTask)
}

AddTaskbutton()