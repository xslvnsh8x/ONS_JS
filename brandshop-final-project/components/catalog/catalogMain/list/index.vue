<template>
  <section class="catalogMainList">
    <CatalogListItem
      v-for="item of items"
      :key="item.id"
      :item="item"
    />
  </section>
</template>

<script>
import Vue from 'vue'
import CatalogListItem from '~/components/catalog/item'

export default Vue.extend({
  name: 'CatalogMainList',
  components: { CatalogListItem },
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  computed: {
    items () {
      return this.products.catalog
    }
  }
})
</script>

<style scoped>
.catalogMainList {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
