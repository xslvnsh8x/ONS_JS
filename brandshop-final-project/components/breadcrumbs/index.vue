<template>
  <section class="breadcrumbs">
    <div class="breadcrumbs__container center">
      <h1 class="breadcrumbs__title">
        New Arrivals
      </h1>
      <nav class="breadcrumbs__nav">
        <ul class="breadcrumbs__navList">
          <li class="breadcrumbs__navItem">
            <NuxtLink to="/" class="breadcrumbs__navLink">
              Home
            </NuxtLink>
          </li>
          <li class="breadcrumbs__navItem">
            <NuxtLink to="/catalog" class="breadcrumbs__navLink">
              Men
            </NuxtLink>
          </li>
          <li class="breadcrumbs__navItem">
            <span>New Arrivals</span>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Breadcrumbs'
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  background-color: #f8f3f4;

  &__container {
    height: 148px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-size: 24px;
    font-weight: 900;
    text-transform: uppercase;
    color: $brandColor;
  }

  &__navList {
    display: flex;
  }

  &__navItem {
    display: inline;
    font-size: 14px;
    text-transform: uppercase;

    &:last-child {
      color: $brandColor;
      font-weight: bold;
    }
  }

  &__navLink {
    color: #636363;
    transition: all .2s;

    &:hover {
      color: $brandColor;
    }
  }

  .breadcrumbs__navItem+.breadcrumbs__navItem:before {
    padding: 2px;
    color: #636363;
    content: "/\00a0";
  }
}
</style>
