import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
    todoTasks: undefined,
  },
  mutations: {
    changeCounter(state, payload) {
      state.counter += payload;
    },
    allTasks(state, payload) {
      state.todoTasks = payload.length;
    },
  },
  getters: {
    computedCounter(state) {
      return state.counter * 10;
    },
  },
});
