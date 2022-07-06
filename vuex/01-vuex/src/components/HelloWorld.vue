<template>
  <h1>{{ count }}</h1>
  <button @click="increase">INCREASE + 1</button>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count.count
    },
  },
  methods: {
    increase() {
      this.$store.dispatch('count/increase')
    }
  }
}
</script>