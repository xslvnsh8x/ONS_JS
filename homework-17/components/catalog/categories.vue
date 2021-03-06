<template>
  <div class="categories">
    <h3 class="categories__title">
      Выберите категорию:
    </h3>
    <div
      v-for="category in categories"
      :key="category.key"
      @click="onClick(category.key)"
    >
      <p class="categories__subtitle">
        {{ category.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogCategories',
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    onClick (categoryKey: string) {
      this.$emit('change', categoryKey)
    }
  }
})
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
  &__title {
    margin-bottom: 16px;
  }
  &__subtitle {
    cursor: pointer;
    margin-bottom: 8px;
    &:hover {
      color: hotpink;
    }
  }
}
</style>
