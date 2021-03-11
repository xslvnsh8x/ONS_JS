<template>
  <header class="catalogMainHeader">
    <CatalogMainHeaderFilter />
    <CatalogMainHeaderSorting />
  </header>
</template>

<script>
import Vue from 'vue'
import CatalogMainHeaderFilter from '~/components/catalog/catalogMain/header/filter'
import CatalogMainHeaderSorting from '~/components/catalog/catalogMain/header/sorting'

export default Vue.extend({
  name: 'CatalogMainHeader',
  components: { CatalogMainHeaderSorting, CatalogMainHeaderFilter }
})
</script>

<style scoped>
.catalogMainHeader {
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
