<template>
  <section class="cartActions">
    <div class="cartActions__wrapper">
      <button class="cartActions__button" @click.stop.prevent="clearCart">
        CLEAR SHOPPING CART
      </button>
      <NuxtLink class="cartActions__button" to="/catalog">
        CONTINUE SHOPPING
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CartMainActions',
  methods: {
    clearCart () {
      this.$store.dispatch(`cart/${ACTION_TYPES.CLEAR_CART}`)
    }
  }
})
</script>

<style lang="scss" scoped>
.cartActions {
  margin-top: 42px;
  margin-bottom: 62px;
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__button {
    padding: 0 38px;
    background: none;
    line-height: 49px;
    border: 1px solid #eaeaea;
    font-size: 14px;
    font-weight: bold;
    color: #4a4a4a;
    text-transform: uppercase;
    transition: all .2s;
    &:hover {
      color: $brandColor;
      border-color: $brandColor;
    }
  }
}
</style>
