<template>
  <input type="text" v-model="title" @keydown.enter="addTodo" />
  <ul>
    <todoList
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @edit-todo="todo.title = $event"
      @delete-todo="deleteTodo"
    ></todoList>
  </ul>
</template>

<script>
import { nanoid } from 'nanoid';
import todoList from './components/TodoList.vue';

export default {
  components: {
    todoList,
  },
  data() {
    return {
      title: '',
      todos: [],
    };
  },
  watch: {
    todos: {
      handler() {
        this.saveTodos();
      },
      deep: true,
    },
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    saveTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    addTodo() {
      if (!this.title.trim()) {
        return;
      }
      this.todos.push({
        title: this.title,
        id: nanoid(),
      });
      this.title = '';
    },
    deleteTodo(todoToDelete) {
      const index = this.todos.findIndex(todo => todo.id === todoToDelete.id);
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
