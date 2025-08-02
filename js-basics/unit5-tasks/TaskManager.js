class Task{
    constructor(id, description)
    {
        this.id = id; 
        this.description = description;
        this.completed = false; 
    }
    
    format(){
        const status = this.completed ? "Yes" : "No";

        return `${status} ${this.id} ${this.description}`
    }
}

class TaskManager
{
    constructor()
    {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description)
    {
        const newTask = new Task(this.nextId, description);

        this.tasks.push(newTask);

        this.nextId ++;

        console.log(`Task ${description} added with ID ${newTask.id}`)

    }

    listTasks()
    {
        if(this.tasks.length === 0)
            {
                console.log('There are no tasks in the list')
            }

        this.tasks.forEach(function(task)
        {
            console.log(task.format())
        })
        
    }

    completeTask(id)
    {
        // so when task is completed complete becomes true from false
        let found = false;

       for(let i = 0; i < this.tasks.length; i++)
        {
            if(this.tasks[i].id === id)
                {
                    this.tasks[i].completed = true;

                    console.log(`The task with ID ${this.tasks[i].id} is marked as complete`)
                    
                    found = true;

                    break;

                }

               
        }

        if(!found)
            {
                console.log(`Task with ID ${id} is not found`)
            }
    }

    deleteTask(id)
    {

        let found2 = false;
        for(let i = 0; i < this.tasks.length; i++)
            {
                if(this.tasks[i].id === id)
                    {
                        this.tasks.splice(i, 1);

                        console.log(`Task with ID ${id} has been deleted`)

                        found2 = true;

                        break;
                    }
            }

        if(!found2)
            {
                console.log(`Task with ID ${id} is not found`)
            }
    }

    filterTasks(callback)
    {
        return this.tasks.filter(callback);
    }

}

// Test code


const taskManager = new TaskManager();

taskManager.addTask("Buy groceries")
taskManager.addTask("Read a Book")
taskManager.addTask("Write CSS")

taskManager.completeTask(1)

console.log("All tasks")
taskManager.listTasks();

function isCompleted(task)
{
    return task.completed === true;
}



const completedTasks = taskManager.filterTasks(isCompleted);


console.log("Completed Tasks")
completedTasks.forEach(function(task)
{
    console.log(task.format())
})

