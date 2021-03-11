<template>
  <section class="catalogMain center">
    <CatalogMainAside />
    <section class="catalogMainWrapper">
      <CatalogMainHeader />
      <CatalogMainList
        :products="productsMock"
      />
      <CatalogMainFooter />
    </section>
  </section>
</template>

<script>
import Vue from 'vue'
import productsMock from '~/assets/json/products.json'
import CatalogMainAside from '~/components/catalog/catalogMain/aside'
import CatalogMainHeader from '~/components/catalog/catalogMain/header'
import CatalogMainFooter from '~/components/catalog/catalogMain/footer'
import CatalogMainList from '~/components/catalog/catalogMain/list'

export default Vue.extend({
  name: 'CatalogMain',
  components: { CatalogMainList, CatalogMainFooter, CatalogMainHeader, CatalogMainAside },
  data () {
    return {
      productsMock
    }
  }
})
</script>

<style lang="scss" scoped>
.catalogMain {
  margin-top: 59px;
  display: flex;
  justify-content: space-between;
}
.catalogMainWrapper {
  width: 846px;
  padding-top: 12px;
}
</style>
