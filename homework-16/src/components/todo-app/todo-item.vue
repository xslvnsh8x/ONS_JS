<template>
  <div :class="todoClasses">
    <div v-if="!isEditModeEnabled" class="todo__viewMode">
      <div class="todo__text">{{ text }}</div>
      <div class="todo__deadline">{{ deadline }}</div>
    </div>
    <div v-else class="todo__editMode">
      <input
        v-model="textInputValue"
        class="todo__editModeInput"
        type="text"
      >
      <button class="todo__editModeButton btn" @click="onSave">
        <font-awesome-icon :icon="['far', 'check-square']" class="icon" />
      </button>
    </div>
    <div class="todo__buttons">
      <button class="todo__buttonEdit btn" @click="onEdit">
        <font-awesome-icon :icon="['far', 'edit']" class="icon" />
      </button>
      <button class="todo__buttonDelete btn" @click="onDelete">
        <font-awesome-icon :icon="['far', 'trash-alt']" class="icon" />
      </button>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodoAppItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isEditModeEnabled: false,
      textInputValue: this.item.text,
      classMap: {
        1: 'todo--high',
        2: 'todo--normal',
        3: 'todo--low',
      },
    };
  },
  computed: {
    priority() {
      return this.item.priority;
    },
    text() {
      return this.item.text || 'Я туду без текста :(';
    },
    deadline() {
      return this.item.deadline;
    },
    id() {
      return this.item.id;
    },
    todoClasses() {
      const priorityToMap = this.priority ? this.priority : 2;

      return [
        'todo',
        this.classMap[priorityToMap],
        {
          // 'todo--high': this.priority === 1,
          // 'todo--normal': this.priority === 2,
          // 'todo--low': this.priority === 3,
          // 'todo--deadline': true,
        },
      ];
    },
  },
  methods: {
    onEdit() {
      this.isEditModeEnabled = !this.isEditModeEnabled;
    },
    onSave() {
      const { id } = this;
      const value = this.textInputValue;

      this.$emit('save', { id, value });
      this.isEditModeEnabled = false;
    },
    onDelete() {
      const { id } = this;

      this.$emit('delete', { id });
    },
  },
});
</script>

<style scoped>
.todo {
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 0.20rem;
}

.todo__text {
  max-width: 450px;
}

.todo__deadline {
  margin-top: 8px;
}

.todo__buttons {
  min-width: 100px;
  display: flex;
  justify-content: space-evenly;
}

.todo__editModeInput {
  height: 30px;
  border: none;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
}

.todo.todo--high {
  background-color: #73D9A9;
}

.todo.todo--normal {
  background-color: #62af93;
}

.todo.todo--low {
  background-color: #9fa3ab;
}

.inputErr {
  border-color: red;
}

.btn {
  display: inline-block;
  width: 32px;
  height: 32px;

  border: 0;
  border-radius: 0.25rem;
  background: white;
  color: #1E88E5;
  line-height: 1.2;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
}

.btn:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

.btn:active {
  transform: scale(0.99);
}

.icon {
  font-size: 1.1rem;
}

</style>
