<template>
    <div class="todo__list">
    
        <div class="tasks">
    
            <div class="tasks__item" v-bind:key="task.id" v-for="task in my_tasks">
                <div class="task_status">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <p> {{ task.text }} </p>
            </div>
        </div>
        <div class="tasks__buttons">
            <button class="tasks__button" id="addTask">Add task</button>
            <button class="tasks__button" id="removeTask">Remove Task</button>
        </div>
    
       
    
    </div>
</template>

<script>



export default {
    components: {
    },

    data() {
        return {
            my_tasks: [
                { id: 1, text: 'Buy milk' },
                { id: 2, text: 'Get new car' },
                { id: 3, text: 'Pay the bills' },
                { id: 4, text: 'Find a new carpenter' },
                { id: 5, text: 'Kill a mockingbird' },

            ],
            blog: {
                title: '',
                text: '',
                categories: [],
                author: ''
            },
            authors: ['Peter', 'Jack', 'Bob'],

        }
    },
    methods: {

    },
   

}
</script>

<style scoped>
.todo__list {
    width: 40%;
    margin: 0 auto;
    padding: 15px;
}

.tasks__item {
    display: flex;
    font-size: 24px;
    background: #F2F2F2;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    line-height: 52px;
    -webkit-box-shadow: 0px 0px 14px 1px rgba(140, 140, 140, 1);
    -moz-box-shadow: 0px 0px 14px 1px rgba(140, 140, 140, 1);
    box-shadow: 0px 0px 14px 1px rgba(140, 140, 140, 1);
}

.tasks__item p {
    margin-left: 10px;
}

.task_status {
    height: 40px;
    width: 40px;
    margin: auto 10px;
    border: 1px solid #595859;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
}

.tasks__button {
    margin-top: 10px;
    border: none;
    padding: 15px 20px;
    font-size: 18px;
    color: #42b983;
    background: #595859;
    border-radius: 5px;
    outline: none;
}

.tasks__button:hover {
    background: gray;
}

#blog * {
    display: block;
    margin: 10px;
}

#post {
    border: 1px solid black;
}

#posts {
    margin: 30px auto;
    border: 2px solid lightgrey;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 10px;
}

#single-post {
    margin: 10px auto;
    border: 2px solid grey;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 10px;
}
</style>
