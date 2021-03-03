<template>
  <div>
    <button class="btn" @click="updateCounter(1)">Add</button>
    <button class="btn" @click="updateCounter(-1)">Subtract</button>
  </div>
</template>

<script>
export default {
  methods: {
    updateCounter(val) {
      // this.$store.state.counter += val;
      this.$store.commit('changeCounter', val);
    },
  },
};
</script>

<style scoped>

</style>
