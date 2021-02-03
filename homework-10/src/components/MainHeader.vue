<template>
  <header class="header center">
    <h1 class="header__title">{{ title }}</h1>
    <Navigation />
  </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'MainHeader',
  components: { Navigation },
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;

  &__title {
    color: $roofTerracotta;
  }
}
</style>
