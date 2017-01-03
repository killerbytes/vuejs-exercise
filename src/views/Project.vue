<template>
  <div>
    <h1>{{project}}</h1>
    <todo-form v-on:add="add"></todo-form>
    <todo-list v-bind:items="todoList[project]"></todo-list>
  </div>
</template>

<script>
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
export default {
  components: {
    TodoForm,
    TodoList
  },
  data () {
    return {
      todoList: window.data,
      project: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.project = this.$route.params.id
    },
    add: function (item) {
      if (!item) return false
      if (!this.todoList[this.project]) this.todoList[this.project] = []
      this.todoList[this.project].push(item)
    }

  }
}
</script>
