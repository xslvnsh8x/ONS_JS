<template>
  <div class="catalog">
    <div class="column modFirst">
      <CatalogCategories />
    </div>
    <div class="column modSecond">
      <CatalogList
        :items="booksMock.products"
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
      booksMock,
      gpusMock
    }
  }
})
</script>

<style scoped>
.catalog {
  display: grid;
  grid-template-columns: 200px minmax(500px, 1fr);
  margin-top: 64px;
}
</style>
