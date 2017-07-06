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
                { id: 1, text: 'Clear the garage' },
                { id: 2, text: 'Buy new table' },
                { id: 3, text: 'Send the email' },
                
                
            ]
        }
    }
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
    background: #F9F9F9;
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
    color: gray;
    text-decoration: line-through;
}
.tasks__item:hover {
    transform: scale(1.03);
    background: #CFD1D1;
}

.task_status {
    height: 40px;
    width: 40px;
    margin: auto 10px;
    border: 1px solid #595859;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    color: green;
    
}

.tasks__button {
    margin-top: 10px;
    border:none;
    padding: 15px 20px;
    font-size: 18px;
    color: #42b983;
    background: #595859;
    border-radius: 5px;
    outline: none;
}
.tasks__button:hover {
    background:gray;
}

</style>
