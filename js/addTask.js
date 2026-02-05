// this file add adds tasks 
// connector between ui HTML AND tasks page MODE
document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager =  new Task();
    
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: new Date()
        };
        
        const result = taskManager.saveTask(taskData);

        if(result.success){
        // return window.location.href = "../signin.html";
        alert("Task added successfully!");

        }else{
            console.log("error");
        }
    })

})
