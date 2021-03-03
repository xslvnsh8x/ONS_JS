<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
  </div>
</template>

<script>
// import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    // ...mapState({
    //   counter: (state) => state.counter,
    // }),
    // counter() {
    //   return this.$store.state.counter;
    // },
    counter() {
      return this.$store.getters.computedCounter;
    },
  },
  methods: {

  },
};
</script>

<style scoped>

</style>
