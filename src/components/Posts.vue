<template>
    <div>
        <div id="posts">
        <input type="text" v-model="searchRes">
            <div class="single-post" v-bind:key="post.id" v-for="post in filteredBlogs">
                
                <h3 v-randomColor> {{ post.title |toUppercase }} </h3>
                <p> {{ post.body }} </p>
            </div>
    
        </div>
    
    </div>
</template>

<script>


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
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (postsData) {
            this.posts = postsData.body.slice(0,5);
        });

    },

    computed: {
        filteredBlogs:function() {
            return this.posts.filter((post)=>{
                return post.title.match(this.searchRes);
            });
        }
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
    }
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

    h2 {
        color: black;
        padding-bottom: 10px;
        text-align: center;
    }
    img {
        width: 150px;
        height: 150px;
        display: block;
        margin: 0 auto;
    }
}
</style>
