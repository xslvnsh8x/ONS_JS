<template>
  <header class="header">
    <div class="header__wrapper center">
      <h1>My awesome cookie clicker!</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
};
</script>

<style lang="scss" scoped>
.header {
  grid-area: header;
  -webkit-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 0 7px 8px 0 rgba(34, 60, 80, 0.2);
  &__wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
