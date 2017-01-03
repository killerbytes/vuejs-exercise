<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/home">Home</router-link>
        </li>
        <template v-for="(value, key) in projects">
          <li>
            <router-link  :to="{ name: 'project', params: { id: key }}">{{key}}</router-link>
          </li>{{ '' }}
        </template>
      </ul>

    </nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
window.data = {
  family: [],
  school: [],
  exercise: []
}

export default {
  name: 'app',
  data () {
    return {
      projects: window.data
    }
  }
}
</script>

<style>
h1{
  text-transform: uppercase;
}
nav ul, nav ul li {
  list-style-type: none;
  display: inline-block;
  margin: 0;
  padding: 0;
}
nav li a{
  padding: 0 .25rem;
  border-left: 1px solid;
  text-transform: capitalize;
}
nav li:first-child a{
  border-left: none;
}
.router-link-active{
  color: orange;
}

</style>
