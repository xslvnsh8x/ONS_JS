<template>
  <div id="app">
    <TodoApp
      :tasks="todoListTasks"
    />
    <div class="counterWrapper">
      <Counter />
      <hr>
      <Actions />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TodoApp from '@/components/todo-app/index.vue';
import TodoItem from '@/components/todo-app/todo-item-class';
import Counter from '@/components/counter/index.vue';
import Actions from '@/components/counter/actions.vue';

const todoListTasks = [
  new TodoItem({
    priority: 1,
    text: 'Buy some food',
    deadline: '01.02.2021',
  }),
  new TodoItem({
    priority: 3,
    text: 'Buy a new car',
    deadline: '01.08.2021',
  }),
  new TodoItem({
    priority: 2,
    text: 'Become a developer',
    deadline: '01.03.2021',
  }),
];

export default Vue.extend({
  name: 'App',
  components: { TodoApp, Counter, Actions },
  data() {
    return {
      todoListTasks,
    };
  },
});

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap');
#app {
  font-family: 'Fira Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.counterWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
