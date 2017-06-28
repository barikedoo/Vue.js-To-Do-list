<template>
  <header>
    <div class="logo"></div>
    <div class="nav.menu">
        <a href="#" v-bind:key="item.id" v-for="item in nav_menu" class="nav_item"> {{ item }}</a>
    </div>
  </header>
</template>

<script>

export default {


  data() {
    return {
      nav_menu: ['Home', 'Contacts', 'Settings', 'Map', 'My tasks']
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  background: #5D7581;
  border-radius:5px;
  height: 90px;
}

.logo {
  height: 60px;
  width: 60px;
  background: url(../assets/logo.png) no-repeat;
  background-size: cover;
  margin: auto 20px;
}

nav_menu {
  box-sizing: border-box;
  padding: 40% 0;
}

.nav_item {
  font-size: 24px;
  padding: 10px 15px;
  line-height: 90px;
  box-sizing: border-box;
}

.nav_item:hover {
  color:azure;
  border-top: 2px solid azure;
  border-bottom: 2px solid azure;
}

.nav_item:last-child {
  padding-right: 30px;
}


</style>
