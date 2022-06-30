<template>
  <li>
    <template v-if="!editMode">
      {{ todo.title }}
      <button @click="onEditMode">수정</button>
      <button @click="deleteTodo()">삭제</button>
    </template>
    <template v-else>
      <input type="text" :value="title" @input="title = $event.target.value" />
      <button @click="offEditMode(), editTodo()">확인</button>
    </template>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      title: '',
      editMode: false,
    };
  },
  methods: {
    onEditMode() {
      console.log('on');
      this.editMode = true;
      this.title = this.todo.title;
    },
    offEditMode() {
      console.log('off');
      this.editMode = false;
    },
    editTodo() {
      this.$emit('edit-todo', this.title);
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo);
    },
  },
};
</script>

<style scoped></style>
