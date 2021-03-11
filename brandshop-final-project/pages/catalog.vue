<template>
  <div>
    <Breadcrumbs />
    <CatalogMain />
    <Promo />
  </div>
</template>

<script>
import Vue from 'vue'
import Breadcrumbs from '~/components/breadcrumbs'
import CatalogMain from '~/components/catalog/catalogMain'
import Promo from '~/components/promo'

export default Vue.extend({
  components: { Promo, CatalogMain, Breadcrumbs },
  head: {
    title: 'BRAND | CATALOG'
  }
})
</script>
