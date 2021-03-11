<template>
  <div>
    <Breadcrumbs />
    <CartMain />
  </div>
</template>

<script>
import Vue from 'vue'
import Breadcrumbs from '~/components/breadcrumbs'
import CartMain from '~/components/cartMain'

export default Vue.extend({
  components: { CartMain, Breadcrumbs },
  head: {
    title: 'BRAND | SHOPPING CART'
  }
})
</script>
