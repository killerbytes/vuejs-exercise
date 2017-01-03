<template>
  <form v-on:submit.prevent="add">
    <input type="text" v-model="todo">
  </form>
</template>

<script>
export default {
  data () {
    return {
      todo: null
    }
  },
  methods: {
    add () {
      this.$emit('add', this.todo)
      this.todo = null
    }
  }
}
</script>
<style>
</style>
