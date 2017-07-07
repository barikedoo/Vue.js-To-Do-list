<template>
    <div>
        <div id="posts">
        <input type="text" v-model="searchRes" id="searchField" placeholder="Search">
            <div class="single-post" v-bind:key="post.id" v-for="post in filteredBlogs">
                
                <router-link v-bind:to="'post/' + post.id"><h3> {{ post.title |toUppercase }} </h3></router-link>
                <p> {{ post.content }} </p>
            </div>
    
        </div>
    
    </div>
</template>

<script>

import searchPost from '../mixins/searchPost';


export default {

    data() {
        return {
            posts: [],
            searchRes: ''
            
        }
    },

    methods: {
        
        getRandom:function(min,max) {
         var a = Math.random().toString().slice(2,4);
           console.log(a);
        }
    },

    created() {
        this.$http.get('https://vue-to-do-c189c.firebaseio.com/posts.json').then(function (postsData) {
            return (postsData.json())   
        }).then(function(postsData){
            var postsArray = [];
            
            for(let key in postsData) {
                postsData[key].id = key;
                postsArray.push(postsData[key]);
            }
            
            this.posts = postsArray;
        });
        },

    computed: {
        
    },
    
    filters: {
        toUppercase(value) {
            return value.toUpperCase(); 
        }
    },

    directives: {
        'randomColor': {
            bind(el,binding,vnode) {
                el.style.color = '#' + Math.random().toString(16).slice(2,8);
            }
        }
    },
    mixins: [searchPost]
}
</script>

<style scoped lang="scss">
#posts {
    width: 70%;
    border: 2px solid lightgray;
    border-radius: 6px;
    margin: 30px auto;
    padding: 30px;
}

.single-post {
    width: 60%;
    padding: 20px 0;
    margin: 0 auto;
    border: 2px solid gray;
    background: #eee;
    margin: 20px auto;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;

    h3 {
        font-size: 26px;
        padding-bottom: 10px;
    }

    h3:hover {
        transform: scale(1.01);
    }

    img {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
    }
}

#searchField {
    display: block;
    line-height: 26px;
    margin-left: auto;
    font-size: 20px;
    border: 2px solid grey;
    outline: none;
}
</style>
