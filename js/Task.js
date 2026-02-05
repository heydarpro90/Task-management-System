class Task{
    constructor(){
        this.tasks = this.getTasks() || [];     
    }

    getTasks(){
        return JSON.parse(localStorage.getItem("tasks")) || [];
    }

    saveTask(taskData){
        const newTaskData = {
            id: Date.now(),
            isCompleted: false,
            ...taskData,
        };

        this.tasks.push(newTaskData);
        localStorage.setItem('tasks',JSON.stringify(this.tasks));

        return {
            success: true,
        };  
        
    }

    toggleComplete(taskId){
        const id = Number(taskId);
        const tasks = this.getTasks().map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t);
        this.tasks = tasks;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return { success: true };
    }

    deleteTask(taskId){
        const id = Number(taskId);
        const tasks = this.getTasks().filter(t => t.id !== id);
        this.tasks = tasks;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return { success: true };
    }
}