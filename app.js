new Vue({
    el: '#app',
    data: {
        newTask: '',
        tasks: [
            { id: 1, text: 'Learn Vue.js' },
            { id: 2, text: 'Create a Vue project' },
            { id: 3, text: 'Have fun coding' }
        ]
    },
    methods: {
        addTask() {
            if (this.newTask.trim() === '') return; // Avoid adding empty tasks

            // Create a new task object and add it to the tasks array
            const newId = this.tasks.length + 1;
            const newTaskObj = { id: newId, text: this.newTask };
            this.tasks.push(newTaskObj);

            // Clear the input after adding the task
            this.newTask = '';
        }
    }
});
