<template>
  <input type="text" v-model="title" @keyup.enter="addTodo" />
  <ul>
    <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  data() {
    return {
      title: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        title: this.title,
        id: nanoid(),
      });
      this.title = '';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
