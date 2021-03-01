<template>
  <div class="container">
    <div>
      <CartMain />
      <CartTotal />
      <nuxt-link to="/" class="button--grey">
        Back to Home page
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartMain from '~/components/cart/index.vue'
import CartTotal from '~/components/cart/total.vue'

export default Vue.extend({
  components: { CartTotal, CartMain }
})
</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
