<template>
  <div class="mainWrapper">
    <h1 class="mainTitle">Мой список дел :)</h1>
    <div class="todoControls">
      <select
        v-model.number="prioritySelectValue"
        class="todoControls__prioritySelect"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        v-model="textInputValue"
        class="todoControls__textInput"
        type="text"
        placeholder="Введите текст"
      >
      <input
        v-model="deadlineInputValue"
        class="todoControls__dateInput"
        type="text"
        placeholder="Введите deadline"
      >
      <button class="todoControls__addButton" @click="addNewItem">
        +
      </button>
    </div>
    <div class="todoList">
      <TodoAppItem
        v-for="todoItem of innerTasks"
        :key="todoItem.id"
        :item="todoItem"
        @save="onTodoAppItemSave"
        @delete="onTodoAppItemDelete"
      />
    </div>
    <h2 v-show="!innerTasks.length">{{ noDataMsg }}</h2>
    <h2 v-show="innerTasks.length">Total tasks: {{ counter }}</h2>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import TodoAppItem from '@/components/todo-app/todo-item.vue';
import TodoItem from '@/components/todo-app/todo-item-class';

export default Vue.extend({
  name: 'TodoApp',
  components: { TodoAppItem },
  props: {
    tasks: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      innerTasks: [],
      prioritySelectValue: 1,
      textInputValue: '',
      deadlineInputValue: '',
      noDataMsg: 'Список пуст. Добавьте сюда что-нибудь',
    };
  },
  computed: {
    ...mapState({
      counter: (state) => state.todoTasks,
    }),
  },
  methods: {
    ...mapMutations({
      getTasks: 'allTasks',
    }),
    addNewItem() {
      const newItem = new TodoItem({
        priority: this.prioritySelectValue,
        text: this.textInputValue,
        deadline: this.deadlineInputValue,
      });
      if (newItem.text !== '') {
        this.innerTasks.unshift(newItem);
        this.textInputValue = '';
        this.deadlineInputValue = '';
        this.prioritySelectValue = 1;
        this.getTasks(this.innerTasks);
      }
    },
    onTodoAppItemSave(payload) {
      const index = this.innerTasks.findIndex((todoItem) => todoItem.id === payload.id);
      this.innerTasks[index].text = payload.value;
    },
    onTodoAppItemDelete(payload) {
      const index = this.innerTasks.findIndex((todoItem) => todoItem.id === payload.id);
      this.innerTasks.splice(index, 1);
      this.getTasks(this.innerTasks);
    },
  },
  created() {
    this.innerTasks = this.tasks;
    this.getTasks(this.innerTasks);
  },
});
</script>

<style scoped>
.mainWrapper {
  /*min-height: 100vh;*/
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.todoControls {
  margin: 16px 0;
}

.todoList {
  box-sizing: border-box;
  width: 100%;
  max-width: 800px;
  padding: 16px;
}
</style>
