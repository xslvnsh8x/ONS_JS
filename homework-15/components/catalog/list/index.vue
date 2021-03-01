<template>
  <div class="wrapper">
    <h2>Категория товаров 1</h2>
    <div class="list">
      <CatalogListItem
        v-for="item of items"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatalogListItem from '~/components/catalog/list/item.vue'

export default Vue.extend({
  name: 'CatalogList',
  components: { CatalogListItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, 314px);
  justify-content: center;
  gap: 24px;
}
</style>
