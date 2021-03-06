<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>
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
    activeCategory: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      return `${this.activeCategory.title}:`
    },
    items () {
      return this.activeCategory.products
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
  grid-template-columns: repeat(auto-fill, 292px);
  justify-content: center;
  gap: 24px;
  margin-top: 36px;
}
</style>
