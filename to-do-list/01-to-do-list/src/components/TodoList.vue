<template>
  <li>
    <template v-if="!editMode">
      {{ todo.title }}
      <TheButton color="orange" @click.stop="onEditMode">수정</TheButton>
      <TheButton color="danger" @click="deleteTodo()">삭제</TheButton>
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
        <TheButton color="primary" @click="offEditMode(), editTodo()"
          >확인</TheButton
        >
        <TheButton color="lightgrey" @click="offEditMode">취소</TheButton>
      </div>
    </template>
  </li>
</template>

<script>
import TheButton from './TheBtn.vue';

export default {
  components: {
    TheButton,
  },
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
