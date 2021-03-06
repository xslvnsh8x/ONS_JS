<template>
  <div class="cartList">
    <div v-if="!cartItems.length">
      <h3>В корзине нет товаров.</h3>
    </div>
    <div v-else class="cartList__body">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="cartItem"
      >
        <img :src="item.image" alt="" class="cartItem__image">
        <p class="cartItem__title">
          {{ item.title }}
        </p>
        <p class="cartItem__price">
          {{ item.price }}
        </p>
        <button class="btn cartItem__delBtn" @click="deleteItem">
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { ACTION_TYPES } from '~/store/cart'

export default Vue.extend({
  name: 'CartMain',
  computed: {
    ...mapState('cart', {
      items: state => (state as any).items
    }),

    cartItems () {
      return Object.values(this.items)
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch(`cart/${ACTION_TYPES.DEL_ITEM}`, this.items)
    }
  }
})
</script>

<style lang="scss" scoped>
.cartList {
  display: flex;
  flex-direction: column;

  &__body {
    display: flex;
    flex-direction: column;
  }
}

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
  &__title {}
  &__price {
    justify-self: center;
  }
  &__delBtn {
    justify-self: flex-end;
  }
}
</style>
