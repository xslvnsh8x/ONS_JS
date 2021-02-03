<template>
  <footer class="footer">
    <small class="footer__wrapper center">
      <span>&copy; {{ author }}</span>
      <span>{{ year }}</span>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter',
  props: {
    author: String,
    year: String,
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.footer {
  grid-area: footer;
  background: $cyprus;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: $concrete;
  }
}
</style>
