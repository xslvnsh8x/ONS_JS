<template>
  <header class="header">
    <div class="header__top center">
      <div class="header__top__left">
        <nuxt-link to="/" class="logo">
          <div class="logo__img" />
          BRAN<span class="logo__textMark">D</span>
        </nuxt-link>
        <Search />
      </div>
      <div class="header__top__right">
        <Cart />
        <div v-show="counter > 0" class="header__counter">
          {{ counter }}
        </div>
        <div class="infoBlock__item">
          <button class="button" @click.stop.prevent>
            My account
            <font-awesome-icon :icon="['fas', 'caret-down']" class="browseIcon" />
          </button>
        </div>
      </div>
    </div>
    <Navigation />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import Navigation from '~/components/header/nav'
import Search from '~/components/header/search'
import Cart from '~/components/header/cart'

export default Vue.extend({
  name: 'Header',
  components: { Cart, Search, Navigation },
  computed: {
    ...mapGetters('cart', [
      'counter'
    ])
  }
})
</script>

<style lang="scss" scoped>
.header {

  &__top {
    height: 100px;
    display: flex;
    justify-content: space-between;
    -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17);
    &__left,
    &__right {
      display: flex;
      align-items: center;
    }
    &__right {
      position: relative;
    }
  }
  &__counter {
    position: absolute;
    top: 26px;
    left: 23px;
    width: 21px;
    height: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $brandColor;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 400;
    color: white;
  }
}
.browseIcon {
  margin-left: 8px;
}
</style>
