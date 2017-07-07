<template>
    <div id="posts">
        <div class="single-post">
            <h1> {{ post.title }} </h1>
            <article> {{ post.content}} </article>
        </div>
    </div>
</template>

<script>

export default {

    data() {

        return {
            post: {},
            id: this.$route.params.id,
            
        }

    },
    created() {
        this.$http.get('https://vue-to-do-c189c.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.post = data;
        }); 
    }

}
</script>

<style scoped>

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
}
</style>
