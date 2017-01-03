<template>
  <ul>
    <li is="todo-item" v-bind:item="item" v-for="(item, index) of items" v-on:remove="remove">
    </li>
  </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
  name: 'todo-list',
  props: ['items'],
  components: {
    TodoItem
  },
  methods: {
    remove (item) {
      this.items.splice(this.items.indexOf(item), 1)
    }
  }
}
</script>
