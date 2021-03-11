<template>
  <div>
    <CatalogListItem
      v-for="item of items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import CatalogListItem from '~/components/catalog/item'

export default Vue.extend({
  name: 'FeaturedList',
  components: { CatalogListItem },
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  computed: {
    items () {
      return this.products.featured
    }
  }
})
</script>
