class Task{
    constructor(id, description, priority = "Normal", dueDate = "No due date")
    {
        this.id = id; 
        this.description = description;
        this.completed = false; 
        this.priority = priority
        this.dueDate = dueDate
    }
    
    format(){
        const status = this.completed ? "✓ Completed" : "✗ Incomplete";

        return `${status} ${this.id} Description:${this.description} Priority: ${this.priority} Due: ${this.dueDate}`
    }
}

class TaskManager
{
    constructor()
    {
        this.tasks = [];
        this.nextId = 1;
    }

    addTask(description, priority = "Normal", dueDate = "no due date")
    {
        const newTask = new Task(this.nextId, description, priority, dueDate);

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

// Add tasks with priority and due dates
taskManager.addTask("Buy groceries", "High", "2025-08-05");
taskManager.addTask("Read a Book", "Low", "2025-08-10");
taskManager.addTask("Write CSS", "Medium", "2025-08-08");

taskManager.completeTask(1);

console.log("\nAll tasks:");
taskManager.listTasks();

console.log("\nCompleted Tasks:");
const completedTasks = taskManager.filterTasks((task) => task.completed);
completedTasks.forEach((task) => console.log(task.format()));
