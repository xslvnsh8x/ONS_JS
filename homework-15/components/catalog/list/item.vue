<template>
  <div class="item">
    <div class="item__imageWrapper">
      <img :src="image" class="item__image" alt="item-pic">
    </div>
    <div class="item__desc">
      <h3 class="item__desc-price">
        {{ price }} &dollar;
      </h3>
      <h4 class="item__desc-title">
        {{ title }}
      </h4>
      <button class="item__desc-addBtn">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CatalogListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    image (): string {
      return this.item.image
    },
    title (): string {
      return this.item.title
    },
    description (): string {
      return this.item.description
    },
    price (): number {
      return this.item.price
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-rows: 250px auto;
  &__imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__image {
    height: 250px;
    object-fit: cover;
  }
  &__desc {
    display: grid;
    grid-template-rows: 50px 70px 1fr;
    justify-items: start;
    &-title {
      font-weight: 500;
    }
    &-addBtn {
      justify-self: center;
    }
  }
}
</style>
