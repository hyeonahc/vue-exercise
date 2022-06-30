<template>
  <button class="btn" :style="style"><slot></slot></button>
</template>

<script>
export default {
  props: {
    color: String,
  },
  computed: {
    style() {
      switch (this.color) {
        case 'danger':
          return {
            backgroundColor: 'red',
            color: '#fff',
          };
        case 'primary':
          return {
            backgroundColor: 'royalblue',
            color: '#fff',
          };
        default:
          return {
            backgroundColor: this.color,
          };
      }
    },
  },
};
</script>

<style scoped>
.btn {
  margin: 2px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: 0.2s;
}
.btn:hover {
  transform: scale(1.1);
}
</style>
