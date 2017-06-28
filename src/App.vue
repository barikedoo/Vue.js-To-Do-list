<template>
  <div id="app">
  
    <app-header></app-header>
  
    <button v-on:click="taskComponentShow='todo-list'">Active tasks</button>
    <button v-on:click="taskComponentShow='done-list'">Done tasks</button>
    <keep-alive>
      <component v-bind:is="taskComponentShow"></component>
    </keep-alive>
  
  </div>
</template>

<script>

import Header from './components/Header.vue'
import List_active from './components/List-active.vue'
import List_done from './components/List-done.vue'

export default {
  components: {
    'app-header': Header,
    'todo-list': List_active,
    'done-list': List_done,
  },

  data() {
    return {
      taskComponentShow: 'todo-list'
    }
  }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  margin: 0 auto;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
