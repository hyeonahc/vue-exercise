<template>
  <li>
    <template v-if="!editMode">
      {{ todo.title }}
      <button @click.stop="onEditMode">수정</button>
      <button @click="deleteTodo()">삭제</button>
    </template>
    <template v-else>
      <div @click.stop>
        <input
          ref="inputTitle"
          type="text"
          :value="title"
          @input="title = $event.target.value"
          @keydown.enter="offEditMode(), editTodo()"
          @keydown.esc="offEditMode"
        />
        <button @click="offEditMode(), editTodo()">확인</button>
        <button @click="offEditMode">취소</button>
      </div>
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
    async onEditMode() {
      this.editMode = true;
      this.title = this.todo.title;
      window.addEventListener('click', this.offEditMode);
      await this.$nextTick();
      this.$refs.inputTitle.focus();
    },
    offEditMode() {
      this.editMode = false;
      window.removeEventListener('click', this.offEditMode);
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
