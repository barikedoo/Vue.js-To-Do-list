<template>
  <div id="app">
  
    <app-header></app-header>
  
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  
  </div>
</template>

<script>

import Header from './components/Header.vue'
import List_active from './components/List-active.vue'
import List_done from './components/List-done.vue'
import Posts from './components/Posts.vue'


// FIlters


export default {
  components: {
    'app-header': Header,
    'todo-list': List_active,
    'done-list': List_done,
    'app-posts': Posts
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

.tabs {
  display: inline-block;
  padding: 15px 10px;
  width: 100px;
  border-radius: 10px;
  outline: none;
  border: 1px solid gray;
  background: #eee;
  &:hover {
    background: #42b983;
  }
}

.nav-buttons {
  text-align: center;
  display: block;
  margin: 50px auto;
}
</style>
