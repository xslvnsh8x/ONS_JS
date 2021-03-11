<template>
  <nav class="center">
    <ul class="navigation">
      <li class="navigation__item">
        <NuxtLink to="/" class="navigation__link">
          Home
        </NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Men
        </NuxtLink>
        <MegaMenu class="navigation__megaMenu" />
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Women
        </NuxtLink>
        <MegaMenu class="navigation__megaMenu" />
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Kids
        </NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Accessories
        </NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Featured
        </NuxtLink>
      </li>
      <li class="navigation__item">
        <NuxtLink to="/catalog" class="navigation__link">
          Hot Deals
        </NuxtLink>
        <MegaMenu class="navigation__megaMenu navigation__megaMenu-right" />
      </li>
    </ul>
  </nav>
</template>

<script>
import Vue from 'vue'
import MegaMenu from '~/components/header/nav/mega-menu'

export default Vue.extend({
  name: 'Navigation',
  components: { MegaMenu }
})
</script>

<style lang="scss" scoped>
.navigation {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  &__item {
    position: relative;

    &:hover .navigation__megaMenu,
    &:focus .navigation__megaMenu,
    &:focus-within .navigation__megaMenu {
      display: flex;
      -webkit-animation: slide-down .25s ease;
      -moz-animation: slide-down .25s ease;
      animation: slide-down .25s ease;
    }
  }

  &__link {
    display: block;
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: #222222;
    text-transform: uppercase;
    cursor: pointer;
    padding: 18px 20px 19px 20px;

    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background-color: $brandColor;
      transition: width 0.3s ease-out;
    }

    &:hover::after,
    &:focus::after {
      width: 100%;
    }
  }

  &__megaMenu-right {
    right: 0;
  }
}
</style>
