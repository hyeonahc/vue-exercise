<template>
  <input type="text" v-model="title" @keyup.enter="addTodo" />
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
      <template v-if="!editMode">
        <button @click="changeMode">수정</button>
        <button @click="deleteTodo(todo)">삭제</button>
      </template>
      <template v-else>
        <input type="text" v-model="newTitle" />
        <button @click="changeMode(), editTodo(todo)">확인</button>
      </template>
    </li>
  </ul>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
  data() {
    return {
      title: '',
      newTitle: '',
      todos: [],
      editMode: false,
    };
  },
  methods: {
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
    editTodo(todo) {
      todo.title = this.newTitle;
    },
    deleteTodo(todo) {
      console.log(todo);
      this.todos.splice(todo.index, 1);
    },
    changeMode() {
      this.editMode = !this.editMode;
      console.log(this.editMode);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
