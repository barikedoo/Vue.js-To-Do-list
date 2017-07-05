import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import AllRoutes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter); 

const routers = new VueRouter({
  routes: AllRoutes,
  mode: 'history'
});

Vue.filter('cutit', function(value){
  return value.slice(0,100) + '...';
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: routers
})
