<template>
  <nav class="mainNavigation">
    <ul class="mainNavigation__list">
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">Home</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">Blog</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">About</a>
      </li>
      <li class="mainNavigation__item">
        <a class="mainNavigation__link" href="#">Contacts</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
@import "src/style/variables";
.mainNavigation {

  &__list {
    display: flex;
    list-style: none;
   }

  &__item {
    &:not(:last-child) {
      margin-right: 16px;
    }
  }

  &__link {
    text-decoration: none;
    font-size: 1.2rem;
    color: $daintree;
    text-transform: uppercase;
    transition: color .15s ease-in;
    &:hover {
      color: $roofTerracotta;
    }
  }
}
</style>
