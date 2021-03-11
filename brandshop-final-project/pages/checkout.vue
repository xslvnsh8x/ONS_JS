<template>
  <div>
    <Breadcrumbs />
    <Checkout />
  </div>
</template>

<script>
import Vue from 'vue'
import Breadcrumbs from '~/components/breadcrumbs'
import Checkout from '~/components/checkout'

export default Vue.extend({
  components: { Checkout, Breadcrumbs },
  head: {
    title: 'BRAND | CHECKOUT'
  }
})
</script>
