import ListActive from './components/List-active.vue';
import ListDone from './components/List-done.vue';
import Posts from './components/Posts.vue';



export default [
    { path:'/active-tasks', component: ListActive},
    { path:'/done-tasks', component: ListDone},
    { path:'/posts', component: Posts}
]