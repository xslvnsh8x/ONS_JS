<template>
  <footer class="footer">
    <small class="footer__small center">
      <span>&copy; {{ author }}</span>
      <span>{{ year }}</span>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'mainFooter',
  props: {
    author: String,
    year: String,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  grid-area: footer;
  background: #2c3e50;

  &__small {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    color: lightslategrey;
  }
}
</style>
