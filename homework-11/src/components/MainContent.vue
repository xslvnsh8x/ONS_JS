<template>
  <main class="main">
    <Cookie></Cookie>
  </main>
</template>

<script>
import Cookie from './Cookie.vue';

export default {
  name: 'MainContent',
  components: {
    Cookie,
  },
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  grid-area: main;
}
</style>
