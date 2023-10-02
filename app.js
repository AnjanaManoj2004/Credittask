const TaskList = {
    props: ['name'],
    template: `
        <li>
            <a href="#" @click="showTasks">{{ name }}</a>
            <button @click="editTaskList">Edit</button>
            <button @click="removeTaskList">Remove</button>
        </li>
    `,
    methods: {
        showTasks() {
            
            console.log(`Showing tasks for "${this.name}"`);
        },
        editTaskList() {
            
            console.log(`Editing task list "${this.name}"`);
        },
        removeTaskList() {
           
            console.log(`Removing task list "${this.name}"`);
            this.$emit('remove-task-list', this.name); 
        }
    }
};

const app = Vue.createApp({
    data() {
        return {
            taskLists: [
                { name: "Work" },
                { name: "Personal" },
                
            ]
        };
    },
    methods: {
        addTaskList() {
           
            const newName = prompt("Enter the name for the new task list:");
            if (newName) {
                this.taskLists.push({ name: newName });
            }
        },
        removeTaskList(name) {
            
            const indexToRemove = this.taskLists.findIndex(taskList => taskList.name === name);
            if (indexToRemove !== -1) {
                this.taskLists.splice(indexToRemove, 1);
            }
        }
    },
    components: {
        'task-list': TaskList
    }
});

app.mount("#app");

