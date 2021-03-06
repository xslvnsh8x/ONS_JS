<template>
  <div class="catalog">
    <div class="column modFirst">
      <CatalogCategories
        :categories="categoriesToSwitch"
        @change="onCategoryChange"
      />
    </div>
    <div class="column modSecond">
      <CatalogList
        :activeCategory="activeCategoryData"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CatalogCategories from '~/components/catalog/categories.vue'
import CatalogList from '~/components/catalog/list/index.vue'
import booksMock from '~/assets/json/books.json'
import gpusMock from '~/assets/json/gpus.json'

export default Vue.extend({
  name: 'CatalogMain',
  components: { CatalogList, CatalogCategories },
  data () {
    return {
      categories: [
        booksMock,
        gpusMock
      ],
      activeCategory: undefined
    }
  },
  computed: {
    categoriesToSwitch () {
      return this.categories.map(({ key, title }) => ({
        key,
        title
      }))
    },
    activeCategoryData () {
      if (!this.activeCategory) {
        return this.categories[0]
      }

      return this.categories.find(category => category.key === this.activeCategory)
    }
  },
  methods: {
    onCategoryChange (categoryKey: string) {
      this.activeCategory = categoryKey
    }
  }
})
</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: 261px minmax(500px, 1fr);
  margin-top: 64px;
}

.modFirst {
  padding-top: 8px;
  padding-right: 16px;
}
</style>
