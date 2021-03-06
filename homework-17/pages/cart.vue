<template>
  <div class="container">
    <h2 class="title">
      Корзина
    </h2>
    <div class="cartWrapper">
      <CartMain />
      <CartTotal />
    </div>
    <nuxt-link to="/" class="btn backBtn">
      Back to Home page
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartMain from '~/components/cart/index.vue'
import CartTotal from '~/components/cart/total.vue'

export default Vue.extend({
  components: {
    CartTotal,
    CartMain
  }
})
</script>

<style lang="scss" scoped>
.container {
}

.cartWrapper {
  display: grid;
  grid-template-columns: 1fr 350px;
}

.backBtn {
  width: 190px;
  height: 40px;
  text-decoration: none;
}
</style>
