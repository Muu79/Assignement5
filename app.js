const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: '',
      listHidden: false,
    };
  },
  methods: {
    addTask() {
      if (this.taskInput === '') return;
      this.tasks.push(this.taskInput);
      this.taskInput = '';
    },
    uuidv4() {
      return this.uuidv4();
    },
    toggleList() {
      this.listHidden = !this.listHidden;
    },
  },
});

app.mount('#assignment');
