<template>
    <div id="addnew">
        <h3>New post</h3>
        <label for="">New title</label>
        <input type="text" v-model.lazy="newpost.title">
        <label for="">New text</label>
        <textarea name="" id="" cols="30" rows="10" style=" resize:none" v-model.lazy="newpost.content"></textarea >
        <input type="submit" v-on:click.prevent="post">
    </div>
</template>

<script>
export default {

    data() {
        return {
            newpost: {
                title: '',
                content: '',
            }
        }
    },
    methods: {
        post: function () {
            this.$http.post('https://vue-to-do-c189c.firebaseio.com/posts.json', this.newpost).then(function (data) {
                console.log(data);
            });
        }
    }
}
</script>

<style scoped>
#addnew {
    display: block;
    width: 780px;
    margin: 0 auto;
}

h3 {
    margin: 20px 0;
    text-align: center;
    font-size: 26px;
}

label {
    font-size: 24px;
}

input,
textarea {
    display: block;
    margin: 30px 0;
    font-size: 18px;
    padding: 10px;
}
</style>
