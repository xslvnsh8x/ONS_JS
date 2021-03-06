<template>
  <div class="cartItem">
    <img :src="item.image" alt="" class="cartItem__image">
    <p class="cartItem__title">
      {{ item.title }}
    </p>
    <div class="cartItem__price">
      <span class="cartItem__price-new">{{ item.new_price }} ₽</span>
      <div class="cartItem__price-prev">
        <span class="cartItem__price-prevText">
          {{ item.price }} ₽
        </span>
        <span class="cartItem__price-discount">
          Скидка {{ item.price - item.new_price }} ₽
        </span>
      </div>
    </div>
    <button class="btn cartItem__delBtn" @click="deleteItem">
      Удалить
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CartListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {},
  methods: {
    deleteItem () {
      this.$store.dispatch(`cart/${ACTION_TYPES.DEL_ITEM}`, this.item)
    }
  }
})
</script>

<style lang="scss" scoped>
.cartItem {
  display: grid;
  grid-template-columns: 150px minmax(150px, 1fr) 200px 150px;
  grid-template-rows: 150px;
  align-items: center;
  padding: 8px 0;

  &:not(:last-child) {
    //margin-bottom: 16px;
    border-bottom: 1px solid #e2e2e2;
  }

  &__image {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }

  &__title {
  }

  &__price {
    justify-self: center;
    display: flex;
    flex-direction: column;

    &-new {
      font-size: 1.2rem;
      font-weight: 500;
    }

    &-prev {
      font-size: .9rem;
      &Text {
        text-decoration: line-through;
        color: #a3a3a3;
        margin-right: 6px;
      }
    }

    &-discount {
      color: #f91155;
    }
  }

  &__delBtn {
    justify-self: flex-end;
  }
}
</style>
