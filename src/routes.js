import ListActive from './components/List-active.vue';
import ListDone from './components/List-done.vue';
import Posts from './components/Posts.vue';
import SinglePost from './components/SinglePost.vue';
import AddPost from './components/AddPost.vue';



export default [
    { path: '/active-tasks', component: ListActive},
    { path: '/done-tasks', component: ListDone},
    { path: '/posts', component: Posts},
    { path: '/post/:id', component: SinglePost},
    { path: '/add', component: AddPost},
]