<template>
  <li>
    {{ item }}
    <button type="button" name="button" v-on:click="remove">&times;</button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  props: ['item'],
  methods: {
    remove () {
      this.$emit('remove', this.item)
    }
  }
}
</script>
