<template>
  <div class="cartList">
    <div v-if="!cartItems.length">
      <h3>В корзине нет товаров.</h3>
    </div>
    <div v-else class="cartList__body">
      <CartListItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import CartListItem from '~/components/cart/item.vue'

export default Vue.extend({
  name: 'CartMain',
  components: { CartListItem },
  computed: {
    ...mapState('cart', {
      items: state => (state as any).items
    }),

    cartItems () {
      return Object.values(this.items)
    }
  },
  methods: {}
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
</style>
